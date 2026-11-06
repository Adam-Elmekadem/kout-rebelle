import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { money, type Product } from "@/lib/products";

export default function ProductCard({ product, index, className = "" }: { product: Product; index?: number; className?: string }) {
  return <article className={`product-card ${className}`}>
    <Link className="product-image-link" href={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
      <Image src={product.image} alt={`${product.color} ${product.name}`} fill sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 25vw" />
      <span className="card-index">R / {String(index ?? Number(product.id.slice(1))).padStart(2, "0")}</span>
      {product.label && <span className="card-label">{product.label}</span>}
      <span className="quick-view">Discover piece <FiArrowUpRight aria-hidden="true"/></span>
    </Link>
    <div className="product-meta"><div><span className="product-category">{product.category} / {product.color}</span><h3><Link href={`/product/${product.slug}`}>{product.name}</Link></h3></div><span className="price">{money(product.price)}</span></div>
  </article>;
}
