import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import ProductCard from "@/components/ProductCard";
import { Mark } from "@/components/SiteShell";
import { products } from "@/lib/products";

export default function Home() {
  return <>
    <section className="hero" aria-labelledby="hero-title"><Image className="hero-image" src="/images/hero.webp" alt="Model in a metallic silver insulated jacket and mirrored visor against a slate-blue studio backdrop" fill priority sizes="100vw"/><div className="hero-shade"/><div className="hero-topline"><span>Cold-weather streetwear / Issue 01</span><span className="hero-coordinate">34°N / 06°W</span></div><div className="hero-content"><p className="hero-kicker"><span className="signal-dot"/> An independent state of motion</p><h1 id="hero-title">MOVE<br/>BEYOND<br/><em>THE WEATHER.</em></h1><p className="hero-copy">Protection with presence. Volume with intent. A first capsule for the city, the climb, and everything between.</p><Link className="primary-link" href="/shop">Explore the collection <FiArrowUpRight aria-hidden="true"/></Link></div><div className="hero-index"><span>REBELLE / SHIFT 01</span><span>01 — 08</span></div><div className="hero-side">NO FORECAST CAN HOLD YOU</div></section>

    <section className="intro-band"><span>01 / THE CAPSULE</span><p>Cold is a condition.<br/><strong>Movement is a choice.</strong></p><Link href="/about">Discover our world <FiArrowUpRight/></Link></section>

    <section className="home-edit" aria-labelledby="edit-title"><div className="section-intro"><div><span className="eyebrow">Selected pieces / Shift 01</span><h2 id="edit-title">A SYSTEM<br/>FOR <i>MOTION.</i></h2></div><p>Built as individual statements. Stronger together. Start with the layer that changes your pace.</p></div><div className="edit-grid"><ProductCard product={products[0]} className="edit-hero"/><div className="edit-aside"><ProductCard product={products[4]}/><div className="edit-note"><span>DESIGNED FOR<br/>THE IN-BETWEEN</span><Mark className="edit-mark"/></div><ProductCard product={products[1]}/></div></div><Link className="line-link" href="/shop">Shop the complete collection <FiArrowUpRight/></Link></section>

    <section className="city-story" aria-labelledby="city-title"><Image src="/images/city-campaign.webp" alt="Two models in silver and navy technical outerwear on a rain-wet city rooftop at blue hour" fill sizes="100vw"/><div className="city-overlay"/><div className="city-top"><span>FIELD NOTE / 001</span><span>AFTER DARK — IN MOTION</span></div><div className="city-copy"><p>THE CITY CAPSULE</p><h2 id="city-title">WHERE THE<br/>LIGHT <i>CHANGES.</i></h2><Link className="primary-link light" href="/product/nightshift-puffer">Discover Nightshift <FiArrowUpRight/></Link></div></section>

    <section className="system-section" aria-labelledby="system-title"><div className="system-heading"><span>02 / COMPLETE THE SYSTEM</span><h2 id="system-title">MORE THAN<br/>OUTERWEAR.</h2><p>Texture, utility, and small details that travel with you.</p></div><div className="system-grid"><ProductCard product={products[5]}/><ProductCard product={products[6]}/><ProductCard product={products[3]}/><ProductCard product={products[7]}/></div><Link className="line-link" href="/shop">See all eight pieces <FiArrowRight/></Link></section>

    <section className="manifesto" aria-labelledby="manifesto-title"><div className="manifesto-image"><Image src="/images/alpine.webp" alt="Wind moving across a dramatic snow-covered mountain ridge at blue twilight" fill sizes="100vw"/></div><div className="manifesto-overlay"/><div className="manifesto-top"><Mark className="manifesto-mark"/><span>Built in motion / Worn anywhere</span></div><div className="manifesto-copy"><p>The idea behind Rebelle</p><h2 id="manifesto-title">THE COLD<br/>IS A <i>STARTING</i><br/>LINE.</h2><Link href="/about">Our philosophy <FiArrowUpRight/></Link></div><div className="manifesto-bottom"><span>SHIFT / 01 — A STUDY IN PROTECTION</span><span>KEEP MOVING ↗</span></div></section>
  </>;
}
