"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { type Product } from "@/lib/data";
import { staggerItem } from "@/lib/animations";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-lime/10 transition-all duration-500 border border-gray-100 hover:border-lime/20"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Index Badge */}
        <div className="absolute top-4 left-4 w-8 h-8 bg-navy/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
          <span className="text-lime text-xs font-bold">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-navy transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {product.features.map((feature) => (
            <span
              key={feature}
              className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs rounded-lg border border-gray-100"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy group/btn hover:text-lime transition-colors duration-300"
        >
          <span>Inquire Now</span>
          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-lime to-lime-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
}
