import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Mark } from "@/components/SiteShell";

export const metadata: Metadata = { title: "Our world — Rebelle", description: "Discover the idea behind Rebelle's cold-weather streetwear concept and Shift / 01 capsule." };

export default function AboutPage() { return <>
  <section className="about-hero"><Image src="/images/alpine.webp" alt="Wind-blown alpine ridges in blue twilight" fill priority sizes="100vw"/><div className="about-overlay"/><div className="about-hero-copy"><span>THE WORLD OF REBELLE / 001</span><h1>NO<br/>FORECAST<br/>CAN HOLD<br/>YOU.</h1><p>An independent study in cold-weather streetwear, made for people who refuse to stand still.</p></div><div className="about-hero-foot"><span>SHIFT / 01</span><Mark/></div></section>
  <section className="about-intro"><div><span>THE IDEA</span><h2>PROTECTION<br/>WITH <i>PRESENCE.</i></h2></div><p>Rebelle began with a simple question: what if the outer layer felt as expressive as the person inside it? Shift / 01 answers with high volume, cold light, and pieces that move from street to open landscape without changing their character.</p></section>
  <section className="about-values"><div><span>01 / SILHOUETTE</span><h3>TAKE UP SPACE.</h3><p>Oversized forms create room for layering, movement, and a stronger outline.</p></div><div><span>02 / REFLECTION</span><h3>CATCH THE LIGHT.</h3><p>Silver surfaces and reflective lines connect the capsule to the city after dark.</p></div><div><span>03 / FREEDOM</span><h3>KEEP MOVING.</h3><p>Utility and attitude belong together. Each piece is designed as part of a larger system.</p></div></section>
  <section className="about-editorial"><div className="about-editorial-image"><Image src="/images/city-campaign.webp" alt="Models in Rebelle outerwear on a rain-wet rooftop" fill sizes="(max-width: 800px) 100vw, 58vw"/></div><div className="about-editorial-copy"><span>FROM ALTITUDE TO AFTER DARK</span><h2>ONE<br/>SYSTEM.<br/>MANY<br/>DIRECTIONS.</h2><p>Rebelle is a portfolio fashion concept from Kout Project. The imagery and pieces are explorations, not physical inventory or performance-tested garments.</p><Link className="primary-link" href="/shop">Explore Shift / 01 <FiArrowUpRight/></Link></div></section>
</>; }
