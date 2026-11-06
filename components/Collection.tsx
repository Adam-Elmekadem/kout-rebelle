"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight, FiSliders } from "react-icons/fi";
import ProductCard from "./ProductCard";
import { categories, products, type FilterCategory } from "@/lib/products";

type Sort = "Featured" | "Price: low to high" | "Price: high to low";

export default function Collection() {
  const [filter, setFilter] = useState<FilterCategory>("All");
  const [sort, setSort] = useState<Sort>("Featured");
  const visible = products.filter((product) => filter === "All" || product.category === filter).sort((a, b) => sort === "Price: low to high" ? a.price - b.price : sort === "Price: high to low" ? b.price - a.price : 0);
  return <>
    <section className="shop-head"><div className="shop-head-copy"><span className="eyebrow">Rebelle / Shift 01</span><h1>THE<br/>COLLECTION.</h1><p>Eight pieces designed as one system. Choose the way you move.</p></div><div className="shop-head-image"><Image src="/images/city-campaign.webp" alt="Rebelle technical streetwear campaign at blue hour" fill priority sizes="(max-width: 800px) 100vw, 55vw"/></div><span className="shop-head-index">01 — 08 / THE FULL SYSTEM</span></section>
    <section className="catalog" aria-label="Shop all pieces"><div className="catalog-toolbar"><div className="catalog-filters" role="group" aria-label="Filter by category">{categories.map((category) => <button type="button" key={category} onClick={() => setFilter(category)} aria-pressed={filter === category} className={filter === category ? "active" : ""}>{category}</button>)}</div><div className="catalog-sort"><FiSliders aria-hidden="true"/><label htmlFor="sort-products">Sort</label><select id="sort-products" value={sort} onChange={(event) => setSort(event.target.value as Sort)}><option>Featured</option><option>Price: low to high</option><option>Price: high to low</option></select></div></div><div className="catalog-count">SHOWING {String(visible.length).padStart(2, "0")} OF 08 PIECES</div><div className="catalog-grid">{visible.map((product, index) => <ProductCard key={product.id} product={product} index={Number(product.id.slice(1))} className={filter === "All" && index === 0 ? "catalog-feature" : ""}/>)}</div></section>
    <section className="collection-story"><div><span>FIELD NOTE / 002</span><h2>GO<br/>FURTHER.</h2><p>The best layers travel between different worlds without changing character.</p><Link href="/about">The story behind Shift / 01 <FiArrowUpRight/></Link></div><Image src="/images/alpine.webp" alt="Blue twilight over a snow-covered mountain ridge" fill sizes="100vw"/></section>
  </>;
}
