"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Category = "All" | "Outerwear" | "Shells" | "Bottoms";
type Product = {
  id: string;
  name: string;
  category: Exclude<Category, "All">;
  color: string;
  price: number;
  image: string;
  note: string;
  detail: string;
};
type BagItem = { product: Product; size: string; quantity: number };

const products: Product[] = [
  { id: "r01", name: "Aether Puffer", category: "Outerwear", color: "Ice silver", price: 690, image: "/images/silver-puffer.webp", note: "The capsule signature", detail: "An oversized, high-volume insulated silhouette with a protective storm hood and reflective technical finish." },
  { id: "r02", name: "Nightshift Puffer", category: "Outerwear", color: "Midnight navy", price: 640, image: "/images/navy-puffer.webp", note: "Made for the after-hours", detail: "A deep navy cold-weather layer with angular quilting, utility pockets, and low-light reflective seams." },
  { id: "r03", name: "Glacier Shell", category: "Shells", color: "Frost white", price: 520, image: "/images/white-shell.webp", note: "A lighter kind of armor", detail: "A long-form shell with translucent ice-blue panels and adjustable volume through the waist and hood." },
  { id: "r04", name: "Vector Cargo", category: "Bottoms", color: "Steel grey", price: 280, image: "/images/cargo-trouser.webp", note: "Built to move", detail: "Wide technical cargo trousers with modular pockets, a webbing waist, and reflective contour piping." },
];
const categories: Category[] = ["All", "Outerwear", "Shells", "Bottoms"];
const sizes = ["XS", "S", "M", "L", "XL"];
const money = (amount: number) => `$${amount.toLocaleString("en-US")}`;

function Mark({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 64 64" aria-hidden="true" fill="none"><path d="M9 53V11h28c11 0 18 5 18 15 0 8-4 12-12 15L57 53H39L27 42h-3v11H9Zm15-24h13c3 0 5-1 5-4 0-2-2-4-5-4H24v8Z" fill="currentColor"/><path d="m40 11-18 42h13l19-42H40Z" fill="currentColor"/></svg>;
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

export default function Storefront() {
  const [category, setCategory] = useState<Category>("All");
  const [selected, setSelected] = useState<Product | null>(null);
  const [size, setSize] = useState("M");
  const [bag, setBag] = useState<BagItem[]>([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const detailRef = useRef<HTMLDialogElement>(null);
  const bagRef = useRef<HTMLDialogElement>(null);

  useEffect(() => { if (selected) detailRef.current?.showModal(); else detailRef.current?.close(); }, [selected]);
  useEffect(() => { if (bagOpen) bagRef.current?.showModal(); else bagRef.current?.close(); }, [bagOpen]);
  useEffect(() => { if (!notice) return; const timer = setTimeout(() => setNotice(""), 3500); return () => clearTimeout(timer); }, [notice]);

  const visibleProducts = category === "All" ? products : products.filter((p) => p.category === category);
  const count = bag.reduce((sum, item) => sum + item.quantity, 0);
  const total = bag.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  function openProduct(product: Product) { setSize("M"); setSelected(product); }
  function addToBag() {
    if (!selected) return;
    const product = selected;
    setBag((current) => {
      const match = current.find((item) => item.product.id === product.id && item.size === size);
      return match ? current.map((item) => item === match ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { product, size, quantity: 1 }];
    });
    setSelected(null);
    setNotice(`${product.name} added to bag`);
    setBagOpen(true);
  }
  function removeFromBag(id: string, itemSize: string) {
    setBag((current) => current.filter((item) => !(item.product.id === id && item.size === itemSize)));
  }

  return <main id="top">
    <a className="skip-link" href="#collection">Skip to collection</a>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Rebelle home"><Mark className="brand-mark"/><span>REBELLE</span></a>
      <nav className={`main-nav ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
        <a href="#collection" onClick={() => setMenuOpen(false)}>Collection</a>
        <a href="#concept" onClick={() => setMenuOpen(false)}>The idea</a>
        <a href="#details" onClick={() => setMenuOpen(false)}>Details</a>
      </nav>
      <div className="header-actions">
        <span className="edition-label">SHIFT / 01</span>
        <button className="bag-button" type="button" onClick={() => setBagOpen(true)} aria-label={`Open bag, ${count} items`}>Bag <span>{String(count).padStart(2, "0")}</span></button>
        <button className="menu-button" type="button" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? "Close" : "Menu"}</button>
      </div>
    </header>

    <section className="hero" aria-labelledby="hero-title">
      <Image className="hero-image" src="/images/hero.webp" alt="Model in a metallic silver insulated jacket and mirrored visor against a slate-blue studio backdrop" fill priority sizes="100vw" />
      <div className="hero-shade" />
      <div className="hero-topline"><span>Cold-weather streetwear / Issue 01</span><span className="hero-coordinate">34°N / 06°W</span></div>
      <div className="hero-content">
        <p className="hero-kicker"><span className="signal-dot"/> An independent state of motion</p>
        <h1 id="hero-title">MOVE<br/>BEYOND<br/><em>THE WEATHER.</em></h1>
        <p className="hero-copy">Protection with presence. Volume with intent. A first capsule for the city, the climb, and everything between.</p>
        <a className="primary-link" href="#collection">Explore the collection <Arrow diagonal /></a>
      </div>
      <div className="hero-index"><span>REBELLE / SHIFT 01</span><span>01 — 04</span></div>
      <div className="hero-side">NO FORECAST CAN HOLD YOU</div>
    </section>

    <section className="collection" id="collection" aria-labelledby="collection-title">
      <div className="collection-intro">
        <div><p className="eyebrow">The first capsule <span>— 2026</span></p><h2 id="collection-title">SHIFT / 01<span className="title-period">.</span></h2></div>
        <p>Four pieces. One direction. Cold-weather layers engineered for the way you actually move.</p>
      </div>
      <div className="filter-row" aria-label="Filter collection">
        <div className="filters">{categories.map((item) => <button key={item} type="button" className={category === item ? "active" : ""} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}</div>
        <span className="result-count">{String(visibleProducts.length).padStart(2, "0")} pieces / available to preview</span>
      </div>
      <div className="product-grid">
        {visibleProducts.map((product, index) => <article className="product-card" key={product.id}>
          <button type="button" className="product-image-button" onClick={() => openProduct(product)} aria-label={`View ${product.name}`}>
            <Image src={product.image} alt={`${product.color} ${product.name} technical streetwear product`} fill sizes="(max-width: 700px) 50vw, (max-width: 1050px) 50vw, 25vw" />
            <span className="card-index">R / {String(index + 1).padStart(2, "0")}</span>
            <span className="quick-view">View piece <Arrow diagonal /></span>
          </button>
          <div className="product-meta"><div><span className="product-category">{product.category} / {product.color}</span><h3>{product.name}</h3></div><span className="price">{money(product.price)}</span></div>
        </article>)}
      </div>
      <div className="collection-tail"><span>Quietly engineered. Visibly different.</span><span>01 / 01</span></div>
    </section>

    <section className="manifesto" id="concept" aria-labelledby="manifesto-title">
      <div className="manifesto-image"><Image src="/images/alpine.webp" alt="Wind moving across a dramatic snow-covered mountain ridge at blue twilight" fill sizes="100vw" /></div>
      <div className="manifesto-overlay" />
      <div className="manifesto-top"><Mark className="manifesto-mark"/><span>Built in motion / Worn anywhere</span></div>
      <div className="manifesto-copy"><p>The idea behind Rebelle</p><h2 id="manifesto-title">THE COLD<br/>IS A <i>STARTING</i><br/>LINE.</h2><span>For the ones who move first.</span></div>
      <div className="manifesto-bottom"><span>SHIFT / 01 — A STUDY IN PROTECTION</span><span>Keep moving ↗</span></div>
    </section>

    <section className="details" id="details" aria-labelledby="details-title">
      <div className="details-heading"><span className="eyebrow">A closer look</span><h2 id="details-title">FORM FOLLOWS<br/>FORWARD.</h2></div>
      <div className="detail-list">
        <div><span>01 / VOLUME</span><p>Oversized proportions make space for movement, layering, and presence.</p></div>
        <div><span>02 / LIGHT</span><p>Silver finishes and reflective lines catch the city after dark.</p></div>
        <div><span>03 / SHELTER</span><p>Protective hoods, considered closures, and high collars shape the capsule.</p></div>
      </div>
    </section>

    <footer className="footer"><div className="footer-main"><div><a href="#top" className="footer-brand">REBELLE<span>®</span></a><p>Cold-weather streetwear for a life in motion.</p></div><a href="#top" className="back-top">Back to top ↑</a></div><div className="footer-bottom"><span>© 2026 Rebelle / A Kout Project concept</span><span>Independent portfolio concept. No affiliation with any existing brand.</span><a href="https://github.com/Adam-Elmekadem/kout-rebelle" target="_blank" rel="noreferrer">Source ↗</a></div></footer>

    <dialog className="product-dialog" ref={detailRef} onClose={() => setSelected(null)} aria-label={selected ? `${selected.name} details` : "Product details"}>{selected && <div className="dialog-layout"><div className="dialog-visual"><Image src={selected.image} alt={`${selected.color} ${selected.name}`} fill sizes="(max-width: 700px) 100vw, 50vw" /></div><div className="dialog-info"><div className="dialog-head"><span>REBELLE / SHIFT 01</span><button type="button" className="close-button" onClick={() => setSelected(null)} aria-label="Close product details">×</button></div><div className="dialog-body"><span className="product-category">{selected.category} / {selected.color}</span><h2>{selected.name}</h2><p className="dialog-note">{selected.note}</p><p className="dialog-detail">{selected.detail}</p><div className="size-head"><span>Select size</span><span>Unisex fit</span></div><div className="size-options" role="group" aria-label="Select size">{sizes.map((item) => <button key={item} type="button" className={size === item ? "active" : ""} aria-pressed={size === item} onClick={() => setSize(item)}>{item}</button>)}</div><button type="button" className="add-button" onClick={addToBag}>Add to bag — {money(selected.price)} <Arrow diagonal /></button><p className="demo-note">Concept product. No payment or order is taken.</p></div></div></div>}</dialog>

    <dialog className="bag-dialog" ref={bagRef} onClose={() => setBagOpen(false)} aria-label="Shopping bag"><div className="bag-head"><div><span>REBELLE / YOUR SELECTION</span><h2>Bag <small>({count})</small></h2></div><button type="button" className="close-button" onClick={() => setBagOpen(false)} aria-label="Close bag">×</button></div>{bag.length ? <><div className="bag-items">{bag.map((item) => <div className="bag-item" key={`${item.product.id}-${item.size}`}><div className="bag-thumb"><Image src={item.product.image} alt="" fill sizes="90px" /></div><div><strong>{item.product.name}</strong><span>{item.product.color} / Size {item.size} / Qty {item.quantity}</span><button type="button" onClick={() => removeFromBag(item.product.id, item.size)}>Remove</button></div><b>{money(item.product.price * item.quantity)}</b></div>)}</div><div className="bag-foot"><div><span>Subtotal</span><strong>{money(total)}</strong></div><p>This is a portfolio concept. Checkout is not available.</p><button type="button" onClick={() => setBagOpen(false)}>Continue exploring <Arrow /></button></div></> : <div className="empty-bag"><Mark className="empty-mark"/><p>Your bag is still moving light.</p><button type="button" onClick={() => setBagOpen(false)}>Explore the capsule <Arrow /></button></div>}</dialog>
    <div className="sr-only" role="status" aria-live="polite">{notice}</div>
  </main>;
}
