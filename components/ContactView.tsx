"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight, FiCheck, FiExternalLink } from "react-icons/fi";

export default function ContactView() {
  const [preview, setPreview] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return <><section className="contact-hero"><div className="contact-copy"><span>REBELLE / OPEN CHANNEL</span><h1>LET'S<br/>MAKE<br/>CONTACT.</h1><p>For the next collection, a creative collaboration, or just a conversation about where fashion can go.</p><div className="contact-links"><a href="https://github.com/Adam-Elmekadem" target="_blank" rel="noreferrer">Kout Project on GitHub <FiExternalLink/></a><Link href="/about">Explore the story <FiArrowUpRight/></Link></div></div><div className="contact-image"><Image src="/images/city-campaign.webp" alt="Rebelle campaign at blue hour" fill priority sizes="(max-width: 800px) 100vw, 50vw"/></div></section><section className="contact-form-section"><div><span>01 / SAY HELLO</span><h2>START A<br/>CONVERSATION.</h2><p>This is a form preview for the portfolio concept. It does not send or store a message. Use the GitHub profile above to reach the project owner.</p></div><form onSubmit={(event) => { event.preventDefault(); setPreview(true); }}><label>Your name<input required value={name} onChange={(event) => { setName(event.target.value); setPreview(false); }} placeholder="Name"/></label><label>Your email<input required type="email" value={email} onChange={(event) => { setEmail(event.target.value); setPreview(false); }} placeholder="Email address"/></label><label>What is on your mind?<textarea required rows={5} value={message} onChange={(event) => { setMessage(event.target.value); setPreview(false); }} placeholder="Tell us about your idea"/></label><button type="submit">Preview message <FiArrowUpRight/></button>{preview && <div className="contact-preview" role="status"><FiCheck/><div><strong>Message preview ready, {name}.</strong><p>No message was sent. Your text stays in this tab.</p></div></div>}</form></section></>;
}
