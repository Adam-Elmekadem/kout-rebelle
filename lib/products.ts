export type Category = "Outerwear" | "Layers" | "Bottoms" | "Accessories";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  color: string;
  price: number;
  image: string;
  tagline: string;
  description: string;
  details: string[];
  sizes: string[];
  label?: string;
};

export const products: Product[] = [
  { id: "r01", slug: "aether-puffer", name: "Aether Puffer", category: "Outerwear", color: "Ice silver", price: 690, image: "/images/silver-puffer.webp", tagline: "The capsule signature", description: "A high-volume silhouette for cold city nights and the spaces beyond. Its metallic shell makes protection visible without making it loud.", details: ["Oversized insulated profile", "Protective sculpted hood", "Reflective ice-silver finish", "Two-way front closure"], sizes: ["XS", "S", "M", "L", "XL"], label: "Signature" },
  { id: "r02", slug: "nightshift-puffer", name: "Nightshift Puffer", category: "Outerwear", color: "Midnight navy", price: 640, image: "/images/navy-puffer.webp", tagline: "For the after-hours", description: "Deep navy volume cut with angular lines and utility in mind. A quieter outer layer that comes alive under city light.", details: ["Angular insulated construction", "Utility pocket system", "Reflective seam accents", "Adjustable hood and cuffs"], sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "r03", slug: "glacier-shell", name: "Glacier Shell", category: "Outerwear", color: "Frost white", price: 520, image: "/images/white-shell.webp", tagline: "A lighter kind of armor", description: "An elongated shell with translucent ice-blue panels. Made as a study in light, volume, and a more fluid kind of protection.", details: ["Long-form shell silhouette", "Translucent blue paneling", "Adjustable waist and hood", "Layer-friendly fit"], sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "r04", slug: "vector-cargo", name: "Vector Cargo", category: "Bottoms", color: "Steel grey", price: 280, image: "/images/cargo-trouser.webp", tagline: "Built to move", description: "Wide technical cargos with a modular pocket language and reflective contours. The line between everyday uniform and expedition kit.", details: ["Wide relaxed leg", "Modular cargo pockets", "Webbing waist detail", "Reflective contour piping"], sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "r05", slug: "strata-vest", name: "Strata Vest", category: "Layers", color: "Ice blue", price: 390, image: "/images/ice-vest.webp", tagline: "Space for another layer", description: "Sculpted insulation without sleeves. The Strata Vest adds dimension to the silhouette while leaving movement open.", details: ["High-volume sleeveless profile", "Sculpted stand collar", "Angular quilt lines", "Technical ripstop appearance"], sizes: ["XS", "S", "M", "L", "XL"], label: "New" },
  { id: "r06", slug: "pressure-knit", name: "Pressure Knit", category: "Layers", color: "Graphite", price: 230, image: "/images/thermal-knit.webp", tagline: "The undercurrent", description: "A dense charcoal knit with engineered ribs and a compact, boxy shape. A quieter counterpoint to the outerwear.", details: ["Heavyweight textured knit", "Engineered shoulder rib", "Boxy cropped fit", "Steel-blue seam line"], sizes: ["XS", "S", "M", "L", "XL"] },
  { id: "r07", slug: "orbit-sling", name: "Orbit Sling", category: "Accessories", color: "Chrome / graphite", price: 180, image: "/images/crossbody.webp", tagline: "Carry only what moves", description: "A compact crossbody with sculpted silver panels and dark technical webbing. Close to the body, ready to go.", details: ["Adjustable crossbody strap", "Compact curved profile", "Secure front closure", "Mixed silver and graphite finish"], sizes: ["One size"], label: "New" },
  { id: "r08", slug: "signal-gloves", name: "Signal Gloves", category: "Accessories", color: "Midnight navy", price: 120, image: "/images/storm-gloves.webp", tagline: "A final line of defense", description: "Insulated gloves with an expressive contour of reflected light. An essential finishing point for the Shift / 01 system.", details: ["Articulated finger shape", "Insulated technical profile", "Reflective piping", "Adjustable wrist straps"], sizes: ["S", "M", "L"] },
];

export const categories = ["All", "Outerwear", "Layers", "Bottoms", "Accessories"] as const;
export type FilterCategory = (typeof categories)[number];
export const productBySlug = (slug: string) => products.find((product) => product.slug === slug);
export const productById = (id: string) => products.find((product) => product.id === id);
export const money = (amount: number) => `$${amount.toLocaleString("en-US")}`;
