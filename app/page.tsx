"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Package, ImageIcon, Users } from "lucide-react";
import { stats, testimonials } from "@/lib/data";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/ui/FadeIn";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col items-start justify-center pt-40 pb-32 overflow-hidden">
        <Image
          src="/images/hero_fence.png"
          alt="Premium galvanized chain link diamond fence rolls"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right-top absolute inset-0 -z-20"
        />
        {/* Gradient overlay to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent -z-10" />

        <div className="max-w-7xl w-full mx-auto px-6 relative z-10 text-left flex flex-col items-start">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-surface-muted)] border border-[var(--color-border)] mb-8">
              <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="text-[var(--color-muted)] text-sm font-medium">Premium Fencing Solutions</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-[clamp(2.25rem,5vw,4.5rem)] font-sans text-[var(--color-primary)] font-bold tracking-tight leading-[1.1] mb-6">
              Your partner in durable
              <br />
              <span className="text-[var(--color-accent)]">fencing solutions.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg text-[var(--color-muted)] font-sans leading-relaxed max-w-xl mb-12">
              Premium diamond fence, field fence, and high-security razor wire for agricultural and industrial applications across Zimbabwe.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center sm:items-start justify-start gap-4">
            <Link
              href="/products"
              className="bg-[var(--color-primary)] text-white font-sans font-medium px-7 py-3 text-sm rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
            >
              Browse Products
            </Link>
            <Link
              href="/contact"
              className="text-[var(--color-muted)] bg-white border border-[var(--color-border)] font-sans font-medium px-7 py-3 text-sm rounded-lg hover:border-slate-300 hover:text-[var(--color-primary)] transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════════ STATS STRIP ═══════════════════════ */}
      <section className="border-y border-slate-200 bg-[var(--color-surface-muted)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <FadeIn
                key={stat.id}
                delay={index * 0.05}
                className={`py-14 lg:py-16 text-center ${
                  index < stats.length - 1 ? "border-r border-slate-200" : ""
                }`}
              >
                <p className="text-4xl md:text-5xl font-sans font-bold text-[var(--color-primary)] tracking-tight tabular-nums mb-2">
                  {stat.value.toLocaleString()}{stat.suffix}
                </p>
                <p className="text-sm text-[var(--color-muted)] font-medium">{stat.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>



      {/* ═══════════════════════ TESTIMONIALS ═══════════════════════ */}
      <section className="py-32 lg:py-40 bg-[var(--color-surface-muted)] border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="mb-20">
            <p className="text-sm font-semibold text-[var(--color-accent)] tracking-wider uppercase mb-4">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[var(--color-primary)] tracking-tight mb-5 max-w-md">
              Trusted by industry leaders
            </h2>
            <p className="text-[var(--color-muted)] text-base max-w-lg leading-relaxed">
              Hear from property developers, security consultants, and farm owners who rely on Joshwires.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA ═══════════════════════ */}
      <CTABanner />
    </div>
  );
}
