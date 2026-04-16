"use client";

import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/lib/data";
import FadeIn from "@/components/ui/FadeIn";
import { Check } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <FadeIn
      delay={index * 0.1}
      className="group relative bg-white border border-[var(--color-border)] transition-transform duration-300 flex flex-col h-[560px] rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 overflow-hidden"
    >
      {/* Top Half: Gray Section */}
      <div className="relative h-[280px] w-full flex-shrink-0 bg-[var(--color-surface-muted)] flex flex-col items-center justify-end p-6 border-b border-[var(--color-border)]">
        <div className="absolute top-6 left-6 right-6 flex items-start justify-between z-10 w-full pr-12">
           <div>
             <h3 className="text-xl md:text-2xl font-sans font-bold text-[var(--color-primary)] tracking-tight">
               {product.name}
             </h3>
             <p className="text-[var(--color-accent)] font-medium text-sm mt-1">Starting from competitive rates</p>
           </div>
        </div>
        {/* Fiscit style floating inner card */}
        <div className="relative w-[90%] h-[150px] bg-white rounded-t-xl overflow-hidden shadow-sm border-x border-t border-[var(--color-border)] translate-y-6">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Bottom Half: White Section */}
      <div className="p-8 pb-10 flex flex-col flex-grow bg-white relative z-20">
        
        <ul className="space-y-4 mb-6">
           <li className="flex items-start gap-3">
             <Check className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
             <span className="text-[var(--color-primary)] font-medium text-sm leading-snug">Premium galvanized core material</span>
           </li>
           <li className="flex items-start gap-3">
             <Check className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
             <span className="text-[var(--color-primary)] font-medium text-sm leading-snug">{product.description.slice(0, 80)}...</span>
           </li>
        </ul>

        {/* CTA */}
        <div className="mt-auto flex justify-center">
          <Link
            href="/contact"
            className="w-full text-center bg-white text-[var(--color-primary)] border border-[var(--color-border)] font-sans font-medium px-6 py-3 text-sm rounded-xl hover:border-slate-300 hover:shadow-sm transition-all shadow-sm"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}
