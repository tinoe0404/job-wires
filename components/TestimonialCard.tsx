"use client";

import FadeIn from "@/components/ui/FadeIn";
import { Star } from "lucide-react";
import { type Testimonial } from "@/lib/data";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <FadeIn
      delay={index * 0.1}
      className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-black/5 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-500 overflow-hidden h-full"
    >
      {/* Decorative Quote Mark */}
      <div className="absolute -top-6 -right-2 text-[120px] leading-none font-display text-[var(--color-accent)] opacity-10 select-none">
        &rdquo;
      </div>
      {/* Stars */}
      <div className="flex gap-1 mb-4 relative z-10">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]"
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-[var(--color-muted)] text-base md:text-sm leading-relaxed mb-6 italic relative z-10 font-body">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-surface)] relative z-10">
        <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center shadow-sm">
          <span className="text-[var(--color-primary)] font-display text-xl">
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div>
          <p className="text-[var(--color-primary)] font-bold text-sm tracking-wide">{testimonial.name}</p>
          <p className="text-[var(--color-muted)] text-xs font-medium uppercase tracking-wider">{testimonial.role}</p>
        </div>
      </div>
    </FadeIn>
  );
}
