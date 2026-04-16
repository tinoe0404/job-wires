"use client";

import FadeIn from "@/components/ui/FadeIn";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <FadeIn className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-lime/10 text-lime text-xs font-semibold uppercase tracking-widest rounded-full mb-4 border border-lime/20">
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-400" : "text-gray-500"}`}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
