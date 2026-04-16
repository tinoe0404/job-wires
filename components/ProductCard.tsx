"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type Product } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <FadeIn
      delay={index * 0.1}
      className="group relative bg-[var(--color-primary)] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 border border-[var(--color-border)] hover:border-[var(--color-accent)] flex flex-col h-[480px]"
    >
      {/* Number Label Watermark */}
      <div className="absolute -top-4 -right-4 text-8xl font-display text-white opacity-5 select-none pointer-events-none group-hover:text-[var(--color-accent)] group-hover:opacity-10 transition-all duration-500 z-10">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Image Container */}
      <div className="relative h-[55%] w-full overflow-hidden bg-[var(--color-surface)] flex-shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow relative z-20">
        <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
          {product.name}
        </h3>
        
        <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-auto">
          {product.features.slice(0, 2).map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 bg-black/50 text-[var(--color-accent)] text-[10px] font-bold uppercase tracking-wider rounded-full border border-[var(--color-accent)]/20"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA (Animated on hover) */}
        <div className="mt-4 overflow-hidden h-6 relative">
          <Link
            href="/contact"
            className="absolute inset-0 flex items-center gap-2 text-sm font-bold text-[var(--color-accent)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
          >
            <span className="uppercase tracking-widest text-xs">Inquire Now</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
      
      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-30" />
    </FadeIn>
  );
}
