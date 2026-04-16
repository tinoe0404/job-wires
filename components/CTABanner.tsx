"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function CTABanner() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--color-surface-muted)] relative px-4">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative flex flex-col items-center text-center p-12 md:p-24 rounded-[3rem] overflow-hidden bg-[var(--color-primary)] shadow-2xl">
          {/* Decorative faint glow inside */}
          <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[150%] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-sans font-bold text-white tracking-tight mb-6 leading-tight max-w-2xl mx-auto">
              Ready to secure your project at full speed?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-slate-300 font-sans font-medium leading-relaxed max-w-2xl mx-auto mb-10">
              Get in touch with our team of technical experts to find the exact fencing specifications for your requirements today.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="bg-[var(--color-accent)] text-white font-sans font-medium px-10 py-4 text-base rounded-full hover:bg-green-600 transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              Get Started Now
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
