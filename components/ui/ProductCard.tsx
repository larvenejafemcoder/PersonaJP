import Image, { StaticImageData } from "next/image";
import type { ReactNode } from "react";

interface ProductCardProps {
  href: string;
  title: string;
  thumbnail: StaticImageData;
  children: ReactNode;
}

const ProductCard = ({ href, title, thumbnail, children }: ProductCardProps) => {
  return (
    <div className="w-full text-left">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group block"
      >
        <div className="card overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            placeholder="blur"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full aspect-video object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="p-5 border-t border-border">
            <h4 className="text-sm font-medium mb-2 leading-relaxed group-hover:underline underline-offset-4 decoration-1 transition-all">
              {title}
            </h4>
            <div
              className="text-xs leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {children}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
