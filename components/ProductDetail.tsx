"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiCheck, FiMinus, FiPlus, FiShoppingBag } from "react-icons/fi";
import { money, products, type Product } from "@/lib/products";
import { useStore } from "./StoreProvider";
import ProductCard from "./ProductCard";

export default function ProductDetail({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes.includes("M") ? "M" : product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useStore();
  const related = products.filter((item) => item.id !== product.id && (item.category === product.category || item.color.includes("silver"))).slice(0, 3);
  while (related.length < 3) { const next = products.find((item) => item.id !== product.id && !related.includes(item)); if (!next) break; related.push(next); }
  function add() { addItem(product, size, quantity); setAdded(true); }
  return <>
    <div className="product-breadcrumb"><Link href="/shop"><FiArrowLeft/> All pieces</Link><span>SHIFT / 01</span><span>{product.id.toUpperCase()}</span></div>
    <section className="product-detail"><div className="detail-gallery"><div className="detail-main-image"><Image src={product.image} alt={`${product.color} ${product.name} full product view`} fill priority sizes="(max-width: 900px) 100vw, 55vw"/></div><div className="detail-gallery-bottom"><div className="detail-crop"><Image src={product.image} alt={`Close crop of ${product.name} material and details`} fill sizes="(max-width: 900px) 50vw, 26vw"/></div><div className="detail-campaign"><Image src="/images/city-campaign.webp" alt="Rebelle blue-hour streetwear campaign" fill sizes="(max-width: 900px) 50vw, 26vw"/><span>SHIFT / 01<br/>IN MOTION</span></div></div></div><div className="detail-panel"><div className="detail-panel-inner"><p className="eyebrow">{product.category} / {product.color}</p><h1>{product.name.toUpperCase()}</h1><p className="detail-tagline">{product.tagline}</p><span className="detail-price">{money(product.price)}</span><p className="detail-description">{product.description}</p><div className="detail-rule"/><div className="selector-head"><strong>SELECT SIZE</strong><span>UNISEX FIT</span></div><div className="size-options" role="group" aria-label="Select size">{product.sizes.map((item) => <button type="button" key={item} onClick={() => { setSize(item); setAdded(false); }} aria-pressed={size === item} className={size === item ? "active" : ""}>{item}</button>)}</div><div className="detail-quantity"><strong>QUANTITY</strong><div><button type="button" aria-label="Decrease quantity" disabled={quantity <= 1} onClick={() => setQuantity((value) => Math.max(1, value - 1))}><FiMinus/></button><span>{quantity}</span><button type="button" aria-label="Increase quantity" disabled={quantity >= 9} onClick={() => setQuantity((value) => Math.min(9, value + 1))}><FiPlus/></button></div></div><button type="button" className="add-button" onClick={add}>{added ? <><FiCheck/> Added to bag</> : <><FiShoppingBag/> Add to bag — {money(product.price * quantity)}</>}<FiArrowUpRight/></button>{added && <Link className="view-bag-link" href="/cart">View your bag <FiArrowRight/></Link>}<p className="demo-note">Concept product. No order or payment is taken.</p><div className="spec-list"><h2>THE DETAILS</h2>{product.details.map((detail, index) => <div key={detail}><span>{String(index + 1).padStart(2, "0")}</span><p>{detail}</p></div>)}</div></div></div></section>
    <section className="related"><div className="related-heading"><span>STAY IN MOTION</span><h2>COMPLETE<br/>THE SYSTEM.</h2></div><div className="related-grid">{related.map((item) => <ProductCard key={item.id} product={item}/>)}</div><Link className="line-link" href="/shop">Explore all pieces <FiArrowUpRight/></Link></section>
  </>;
}
