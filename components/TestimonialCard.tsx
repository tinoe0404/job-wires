"use client";

import FadeIn from "@/components/ui/FadeIn";
import { type Testimonial } from "@/lib/data";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <FadeIn
      delay={index * 0.1}
      className="group relative bg-white border border-[var(--color-border)] p-8 md:p-10 transition-transform duration-300 h-full rounded-3xl flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1"
    >
      {/* Content */}
      <p className="text-[var(--color-primary)] text-lg md:text-xl font-medium font-sans leading-relaxed mb-8">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="mt-auto pt-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[var(--color-surface-muted)] flex items-center justify-center font-bold text-[var(--color-primary)] border border-[var(--color-border)] text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-[var(--color-primary)] font-sans font-bold tracking-tight">{testimonial.name}</p>
          <p className="text-[var(--color-muted)] font-sans text-sm font-medium">{testimonial.role}</p>
        </div>
      </div>
    </FadeIn>
  );
}
