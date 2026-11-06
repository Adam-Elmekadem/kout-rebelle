"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiShoppingBag, FiX } from "react-icons/fi";
import { useStore } from "./StoreProvider";

export function Mark({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 64 64" aria-hidden="true" fill="none"><path d="M9 53V11h28c11 0 18 5 18 15 0 8-4 12-12 15L57 53H39L27 42h-3v11H9Zm15-24h13c3 0 5-1 5-4 0-2-2-4-5-4H24v8Z" fill="currentColor"/><path d="m40 11-18 42h13l19-42H40Z" fill="currentColor"/></svg>;
}

const nav = [{ href: "/shop", label: "Shop" }, { href: "/about", label: "Our world" }, { href: "/contact", label: "Contact" }];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { count } = useStore();
  const home = pathname === "/";
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className={`site-header ${home ? "on-hero" : "solid"}`}>
      <Link href="/" className="brand" aria-label="Rebelle home" onClick={() => setOpen(false)}><Mark className="brand-mark"/><span>REBELLE</span></Link>
      <nav className={`main-nav ${open ? "open" : ""}`} aria-label="Main navigation">{nav.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}</nav>
      <div className="header-actions"><span className="edition-label">SHIFT / 01</span><Link href="/cart" className="bag-button" aria-label={`Cart, ${count} items`}><FiShoppingBag aria-hidden="true"/><span>Bag</span><b>{String(count).padStart(2, "0")}</b></Link><button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <FiX/> : <FiMenu/>}</button></div>
    </header>
    <main id="main">{children}</main>
    <footer className="footer"><div className="footer-top"><p>Built in motion.<br/>Worn anywhere.</p><Link href="/shop">Explore the capsule <FiArrowUpRight/></Link></div><div className="footer-main"><div><Link href="/" className="footer-brand">REBELLE<span>®</span></Link><p>Cold-weather streetwear for a life in motion.</p></div><div className="footer-links"><div><span>Explore</span><Link href="/shop">All pieces</Link><Link href="/about">Our world</Link><Link href="/contact">Contact</Link></div><div><span>Elsewhere</span><a href="https://kout-mercereze.netlify.app/" target="_blank" rel="noreferrer">Mercereze ↗</a><a href="https://kout-couture-cola.netlify.app/" target="_blank" rel="noreferrer">Couture-Cola ↗</a><a href="https://github.com/Adam-Elmekadem/kout-rebelle" target="_blank" rel="noreferrer">Source ↗</a></div></div></div><div className="footer-bottom"><span>© 2026 Rebelle / A Kout Project concept</span><span>Independent portfolio concept. No affiliation with an existing brand. No real orders or payments.</span><a href="#main">Back to top ↑</a></div></footer>
  </>;
}
