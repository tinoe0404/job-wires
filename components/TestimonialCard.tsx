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
      className="bg-white border border-slate-200 p-10 h-full rounded-2xl flex flex-col hover:border-slate-300 hover:shadow-xl transition-all duration-300"
    >
      {/* Quote */}
      <p className="text-[var(--color-primary)] text-base font-sans leading-[1.8] mb-10 flex-grow">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-8 border-t border-slate-100">
        <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center font-bold text-[var(--color-accent)] text-sm flex-shrink-0">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-[var(--color-primary)] font-sans font-semibold text-sm">{testimonial.name}</p>
          <p className="text-[var(--color-muted)] font-sans text-sm">{testimonial.role}</p>
        </div>
      </div>
    </FadeIn>
  );
}
