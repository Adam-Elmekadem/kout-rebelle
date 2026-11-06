"use client";

import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import ProductCard from "./ProductCard";
import { categories, products, type FilterCategory } from "@/lib/products";

export default function HomeCollection() {
  const [category, setCategory] = useState<FilterCategory>("All");
  const visible = category === "All" ? products : products.filter((product) => product.category === category);

  return <section className="collection" id="collection" aria-labelledby="collection-title">
    <div className="collection-intro">
      <div><p className="eyebrow">The first capsule <span>— 2026</span></p><h2 id="collection-title">SHIFT / 01<span className="title-period">.</span></h2></div>
      <p>Eight pieces. One direction. Cold-weather layers made for the way you move.</p>
    </div>
    <div className="filter-row" aria-label="Filter collection">
      <div className="filters">{categories.map((item) => <button key={item} type="button" className={category === item ? "active" : ""} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}</div>
      <span className="result-count">{String(visible.length).padStart(2, "0")} pieces / available to preview</span>
    </div>
    <div className="product-grid">{visible.map((product) => <ProductCard key={product.id} product={product}/>)}</div>
    <div className="collection-tail"><span>Quietly engineered. Visibly different.</span><Link href="/shop">Explore all pieces <FiArrowUpRight aria-hidden="true"/></Link></div>
  </section>;
}
