import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import HomeCollection from "@/components/HomeCollection";
import { Mark } from "@/components/SiteShell";

export default function Home() {
  return <>
    <section className="hero" aria-labelledby="hero-title"><Image className="hero-image" src="/images/hero.webp" alt="Model in a metallic silver insulated jacket and mirrored visor against a slate-blue studio backdrop" fill priority sizes="100vw"/><div className="hero-shade"/><div className="hero-topline"><span>Cold-weather streetwear / Issue 01</span><span className="hero-coordinate">34°N / 06°W</span></div><div className="hero-content"><p className="hero-kicker"><span className="signal-dot"/> An independent state of motion</p><h1 id="hero-title">MOVE<br/>BEYOND<br/><em>THE WEATHER.</em></h1><p className="hero-copy">Protection with presence. Volume with intent. A first capsule for the city, the climb, and everything between.</p><Link className="primary-link" href="#collection">Explore the collection <FiArrowUpRight aria-hidden="true"/></Link></div><div className="hero-index"><span>REBELLE / SHIFT 01</span><span>01 — 08</span></div><div className="hero-side">NO FORECAST CAN HOLD YOU</div></section>

    <section className="intro-band"><span>01 / THE CAPSULE</span><p>Cold is a condition.<br/><strong>Movement is a choice.</strong></p><Link href="/about">Discover our world <FiArrowUpRight/></Link></section>

    <HomeCollection/>

    <section className="city-story" aria-labelledby="city-title"><Image src="/images/city-campaign.webp" alt="Two models in silver and navy technical outerwear on a rain-wet city rooftop at blue hour" fill sizes="100vw"/><div className="city-overlay"/><div className="city-top"><span>FIELD NOTE / 001</span><span>AFTER DARK — IN MOTION</span></div><div className="city-copy"><p>THE CITY CAPSULE</p><h2 id="city-title">WHERE THE<br/>LIGHT <i>CHANGES.</i></h2><Link className="primary-link light" href="/product/nightshift-puffer">Discover Nightshift <FiArrowUpRight/></Link></div></section>

    <section className="manifesto" aria-labelledby="manifesto-title"><div className="manifesto-image"><Image src="/images/alpine.webp" alt="Wind moving across a dramatic snow-covered mountain ridge at blue twilight" fill sizes="100vw"/></div><div className="manifesto-overlay"/><div className="manifesto-top"><Mark className="manifesto-mark"/><span>Built in motion / Worn anywhere</span></div><div className="manifesto-copy"><p>The idea behind Rebelle</p><h2 id="manifesto-title">THE COLD<br/>IS A <i>STARTING</i><br/>LINE.</h2><Link href="/about">Our philosophy <FiArrowUpRight/></Link></div><div className="manifesto-bottom"><span>SHIFT / 01 — A STUDY IN PROTECTION</span><span>KEEP MOVING ↗</span></div></section>
  </>;
}
