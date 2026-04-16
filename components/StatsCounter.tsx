"use client";

import FadeIn from "@/components/ui/FadeIn";
import { type Stat } from "@/lib/data";
import { useCountUp } from "@/hooks/useCountUp";

interface StatsCounterProps {
  stats: Stat[];
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <span ref={ref} className="tabular-nums font-sans font-bold text-[var(--color-primary)] tracking-tight">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <FadeIn key={stat.id} delay={index * 0.1} className="text-center flex flex-col items-center">
              <div className="mb-3">
                <p className="text-5xl md:text-6xl font-sans leading-none">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </p>
              </div>
              <p className="text-[var(--color-muted)] text-base font-medium">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
