"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { type Stat } from "@/lib/data";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface StatsCounterProps {
  stats: Stat[];
}

import FadeIn from "@/components/ui/FadeIn";
import { useCountUp } from "@/hooks/useCountUp";

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <span ref={ref} className="tabular-nums font-display">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(132,204,22,0.08),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={stat.id} delay={index * 0.1} className="text-center group pt-4">
              <div className="relative inline-block mb-3">
                <p className="text-4xl md:text-5xl lg:text-7xl font-display text-[var(--color-accent)] leading-none">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </p>
                <div className="absolute -inset-4 bg-[var(--color-accent)]/5 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>
              <p className="text-white/80 text-sm md:text-base font-medium tracking-wide uppercase font-body">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
