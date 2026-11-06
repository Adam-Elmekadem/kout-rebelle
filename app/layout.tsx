import type { Metadata } from "next";
import { StoreProvider } from "@/components/StoreProvider";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kout-rebelle.netlify.app"),
  title: "Rebelle — Move beyond the weather",
  description: "Rebelle is an independent cold-weather streetwear concept. Explore the Shift / 01 capsule: oversized insulation, reflective details, and movement-led silhouettes.",
  openGraph: {
    title: "Rebelle — Move beyond the weather",
    description: "The Shift / 01 cold-weather streetwear capsule from Kout Project.",
    images: ["/images/hero.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><StoreProvider><SiteShell>{children}</SiteShell></StoreProvider></body></html>;
}
