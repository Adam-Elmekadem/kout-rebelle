"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { productById, type Product } from "@/lib/products";

export type CartItem = { productId: string; size: string; quantity: number };
type Shipping = { name: string; email: string; country: string; address: string; city: string; postal: string };
type Method = "card" | "paypal";
type StoreState = {
  cart: CartItem[];
  count: number;
  subtotal: number;
  coupon: string;
  discount: number;
  shipping: Shipping;
  method: Method;
  completed: boolean;
  addItem: (product: Product, size: string, quantity?: number) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  removeItem: (id: string, size: string) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => boolean;
  setShipping: (value: Shipping) => void;
  setMethod: (value: Method) => void;
  finishDemo: () => void;
};

const emptyShipping: Shipping = { name: "", email: "", country: "", address: "", city: "", postal: "" };
const StoreContext = createContext<StoreState | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [shipping, setShipping] = useState<Shipping>(emptyShipping);
  const [method, setMethod] = useState<Method>("card");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem("rebelle-cart-v2") || "[]");
      if (Array.isArray(saved)) setCart(saved.filter((item) => item && productById(item.productId) && typeof item.size === "string" && Number.isInteger(item.quantity) && item.quantity > 0).slice(0, 30));
    } catch { /* A damaged demo cart starts empty. */ }
    setHydrated(true);
  }, []);
  useEffect(() => { if (hydrated) window.localStorage.setItem("rebelle-cart-v2", JSON.stringify(cart)); }, [cart, hydrated]);

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (productById(item.productId)?.price || 0) * item.quantity, 0);
  const discount = coupon === "SHIFT10" ? Math.round(subtotal * .1) : coupon === "FROST15" ? Math.round(subtotal * .15) : 0;

  const value = useMemo<StoreState>(() => ({
    cart, count, subtotal, coupon, discount, shipping, method, completed,
    addItem(product, size, quantity = 1) {
      setCompleted(false);
      setCart((current) => {
        const existing = current.find((item) => item.productId === product.id && item.size === size);
        return existing ? current.map((item) => item === existing ? { ...item, quantity: Math.min(9, item.quantity + quantity) } : item) : [...current, { productId: product.id, size, quantity: Math.min(9, quantity) }];
      });
    },
    updateQuantity(id, size, quantity) { setCart((current) => current.map((item) => item.productId === id && item.size === size ? { ...item, quantity: Math.max(1, Math.min(9, quantity)) } : item)); },
    removeItem(id, size) { setCart((current) => current.filter((item) => !(item.productId === id && item.size === size))); },
    clearCart() { setCart([]); setCoupon(""); setShipping(emptyShipping); },
    applyCoupon(code) { const normalized = code.trim().toUpperCase(); if (["SHIFT10", "FROST15"].includes(normalized)) { setCoupon(normalized); return true; } setCoupon(""); return false; },
    setShipping, setMethod,
    finishDemo() { setCompleted(true); setCart([]); setCoupon(""); setShipping(emptyShipping); },
  }), [cart, count, subtotal, coupon, discount, shipping, method, completed]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used within StoreProvider");
  return context;
}
