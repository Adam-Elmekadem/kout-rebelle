import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CheckoutFlow from "@/components/CheckoutFlow";
const steps = ["shipping", "payment", "review", "complete"];
export function generateStaticParams() { return steps.map((step) => ({ step })); }
export async function generateMetadata({ params }: { params: Promise<{ step: string }> }): Promise<Metadata> { const { step } = await params; return { title: `${step[0].toUpperCase()}${step.slice(1)} — Rebelle demo checkout` }; }
export default async function CheckoutStep({ params }: { params: Promise<{ step: string }> }) { const { step } = await params; if (!steps.includes(step)) notFound(); return <CheckoutFlow step={step as "shipping" | "payment" | "review" | "complete"}/>; }
