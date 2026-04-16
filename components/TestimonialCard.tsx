"use client";

import { motion } from "framer-motion";
import { type Testimonial } from "@/lib/data";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -8 }}
      className="relative flex flex-col h-full group"
    >
      {/* Decorative Quote Mark */}
      <span className="absolute -top-10 -left-6 text-[8rem] font-serif leading-none text-slate-200/50 group-hover:text-[var(--color-accent)]/10 transition-colors duration-500 pointer-events-none select-none -z-10">
        &ldquo;
      </span>

      {/* Quote */}
      <p className="text-[var(--color-primary)] text-lg md:text-xl font-sans leading-relaxed mb-10 flex-grow relative z-10 font-medium">
        {testimonial.content}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-slate-200/60 relative z-10 w-full mt-auto group-hover:border-[var(--color-accent)]/30 transition-colors duration-500">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-[var(--color-accent)]/10 flex items-center justify-center font-bold text-[var(--color-accent)] text-lg flex-shrink-0 shadow-sm border border-[var(--color-accent)]/20">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-[var(--color-primary)] font-sans font-bold text-base">{testimonial.name}</p>
          <p className="text-[var(--color-muted)] font-sans text-sm tracking-wide">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
