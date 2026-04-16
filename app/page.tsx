"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { stats, testimonials } from "@/lib/data";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/ui/FadeIn";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-40 pb-32 overflow-hidden">

        <div className="max-w-3xl w-full mx-auto px-6 relative z-10 text-center flex flex-col items-center">
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
            <p className="text-lg text-[var(--color-muted)] font-sans leading-relaxed max-w-xl mx-auto mb-12">
              Premium diamond fence, field fence, and high-security razor wire for agricultural and industrial applications across Zimbabwe.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

      {/* ═══════════════════════ NAVIGATE ═══════════════════════ */}
      <section className="py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="mb-20">
            <p className="text-sm font-semibold text-[var(--color-accent)] tracking-wider uppercase mb-4">Explore</p>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-[var(--color-primary)] tracking-tight mb-5 max-w-md">
              Everything you need, in one place.
            </h2>
            <p className="text-[var(--color-muted)] text-base max-w-lg leading-relaxed">
              Browse our products, view real installations, or learn about our 15+ years of expertise.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Products */}
            <FadeIn delay={0.1}>
              <Link href="/products" className="group block h-full">
                <div className="h-full bg-[var(--color-surface-muted)] rounded-2xl border border-slate-200 p-10 hover:border-slate-300 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-8">
                    <span className="text-xl">🔩</span>
                  </div>
                  <h3 className="text-xl font-sans font-semibold text-[var(--color-primary)] mb-3">Our Products</h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-8">
                    Galvanized wire mesh, razor wire, diamond fences, and premium steel poles built to last decades.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] group-hover:gap-3 transition-all">
                    View catalogue <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>

            {/* Gallery */}
            <FadeIn delay={0.15}>
              <Link href="/gallery" className="group block h-full">
                <div className="h-full bg-[var(--color-surface-muted)] rounded-2xl border border-slate-200 p-10 hover:border-slate-300 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-8">
                    <span className="text-xl">📸</span>
                  </div>
                  <h3 className="text-xl font-sans font-semibold text-[var(--color-primary)] mb-3">Project Gallery</h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-8">
                    Real-world installations — industrial complexes, residential properties, and large-scale farms.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] group-hover:gap-3 transition-all">
                    Explore projects <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>

            {/* About */}
            <FadeIn delay={0.2}>
              <Link href="/about" className="group block h-full">
                <div className="h-full bg-[var(--color-surface-muted)] rounded-2xl border border-slate-200 p-10 hover:border-slate-300 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-8">
                    <span className="text-xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-sans font-semibold text-[var(--color-primary)] mb-3">About Us</h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-8">
                    Over 15 years of expertise, trusted nationwide. Learn about our company values and history.
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] group-hover:gap-3 transition-all">
                    Read our story <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
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
