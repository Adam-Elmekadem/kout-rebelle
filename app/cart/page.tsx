import type { Metadata } from "next";
import CartPageView from "@/components/CartPageView";
export const metadata: Metadata = { title: "Your bag — Rebelle", description: "Review the pieces in your Rebelle concept bag." };
export default function CartPage() { return <CartPageView/>; }
