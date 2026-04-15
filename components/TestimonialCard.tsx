"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { type Testimonial } from "@/lib/data";
import { staggerItem } from "@/lib/animations";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-black/5 border border-gray-100 hover:border-lime/20 transition-all duration-500"
    >
      {/* Quote Icon */}
      <div className="absolute -top-3 right-6">
        <div className="w-10 h-10 bg-gradient-to-br from-lime to-lime-light rounded-xl flex items-center justify-center shadow-lg shadow-lime/20">
          <Quote className="w-4 h-4 text-navy" />
        </div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-lime text-lime"
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className="w-10 h-10 bg-gradient-to-br from-navy to-charcoal rounded-full flex items-center justify-center">
          <span className="text-lime font-bold text-sm">
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div>
          <p className="text-charcoal font-semibold text-sm">{testimonial.name}</p>
          <p className="text-gray-400 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
