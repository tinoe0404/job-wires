"use client";

import FadeIn from "@/components/ui/FadeIn";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  badge,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center mx-auto" : ""}`}>
      {badge && (
        <FadeIn>
          <div className={`mb-4`}>
            <span className={`${light ? "text-white/80" : "text-[var(--color-accent)]"} font-sans text-sm font-bold tracking-widest uppercase`}>
              {badge}
            </span>
          </div>
        </FadeIn>
      )}
      
      <FadeIn delay={0.1}>
        <h2 className={`text-3xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight ${light ? "text-white" : "text-[var(--color-primary)]"} mb-6 leading-tight`}>
          {title}
        </h2>
      </FadeIn>

      {subtitle && (
        <FadeIn delay={0.2}>
          <p
            className={`text-lg ${light ? "text-white/70" : "text-[var(--color-muted)]"} font-sans font-normal leading-relaxed max-w-3xl ${
              centered ? "mx-auto text-center" : "text-left"
            }`}
          >
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
