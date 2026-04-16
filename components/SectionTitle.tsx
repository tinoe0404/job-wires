"use client";

import FadeIn from "@/components/ui/FadeIn";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  badge,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center mx-auto" : ""}`}>
      {badge && (
        <FadeIn>
          <div className={`mb-4`}>
            <span className="text-[var(--color-accent)] font-sans text-sm font-bold tracking-widest uppercase">
              {badge}
            </span>
          </div>
        </FadeIn>
      )}
      
      <FadeIn delay={0.1}>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-[var(--color-primary)] mb-6 leading-tight">
          {title}
        </h2>
      </FadeIn>

      {subtitle && (
        <FadeIn delay={0.2}>
          <p
            className={`text-lg text-[var(--color-muted)] font-sans font-normal leading-relaxed max-w-3xl ${
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
