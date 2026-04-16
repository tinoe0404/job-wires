"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { stats, testimonials } from "@/lib/data";
import SectionTitle from "@/components/SectionTitle";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/ui/FadeIn";

export default function HomePage() {
  return (
    <>
      {/* ======================== HERO SECTION ======================== */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[var(--color-surface-muted)]">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[var(--color-accent)]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[var(--color-border)] mb-8 shadow-sm">
              <span className="text-xl">🚀</span>
              <span className="text-[var(--color-muted)] text-sm font-medium pr-1">
                Premium Fencing Solutions <span className="text-[var(--color-primary)] ml-1">&rsaquo;</span>
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-sans text-[var(--color-primary)] font-extrabold tracking-tight leading-[1.1] mb-6 max-w-4xl">
              Joshwires: Your partner in durable fencing solutions.
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-xl text-[var(--color-muted)] font-sans font-normal leading-relaxed max-w-2xl mx-auto mb-10">
              We offer different flavours of premium fencing that include diamond fence, field fence, and high-security razor wire for agricultural and industrial applications.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
            <Link
              href="/products"
              className="w-full sm:w-auto bg-[var(--color-accent)] text-white font-sans font-medium px-8 py-3.5 text-base rounded-full hover:bg-green-600 transition-colors shadow-sm min-w-[200px]"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto text-[var(--color-primary)] bg-white border border-[var(--color-border)] font-sans font-semibold px-4 py-3.5 text-base rounded-full hover:border-slate-400 hover:shadow-sm shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </Link>
          </FadeIn>
        </div>

        {/* Hero Image */}
        <FadeIn delay={0.6} className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 relative z-10">
          <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden bg-white shadow-xl border border-[var(--color-border)]">
            <div className="absolute top-0 left-0 right-0 h-12 bg-white border-b border-[var(--color-border)] flex items-center gap-2 px-4 shadow-sm z-10">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <Image
              src="/images/hero-bg.png"
              alt="Premium fencing installation"
              fill
              className="object-cover mt-12"
              priority
            />
          </div>
        </FadeIn>
      </section>

      {/* ======================== PORTAL COMPRESSION SECTION ======================== */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="EXPLORE NAVIGATOR"
            title="Everything you need, organized perfectly."
            subtitle="Explore our products, view our previous installations, or get to know our team. Select your destination below."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            
            {/* Products Portal */}
            <FadeIn delay={0.1} className="flex flex-col h-full bg-[var(--color-surface-muted)] rounded-[2rem] border border-[var(--color-border)] hover:border-slate-300 transition-colors shadow-sm overflow-hidden group">
              <div className="relative h-48 bg-white border-b border-[var(--color-border)] p-6 flex flex-col justify-end">
                <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white shadow-sm border border-[var(--color-border)] flex items-center justify-center">
                  <span className="text-2xl">🚧</span>
                </div>
                <h3 className="text-2xl font-sans font-bold text-[var(--color-primary)] tracking-tight">Our Products</h3>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-[var(--color-muted)] text-base mb-8">
                  Browse our extensive catalogue of galvanized wire mesh, razor wires, diamond fences, and premium poles built to last.
                </p>
                <Link href="/products" className="mt-auto inline-flex items-center gap-2 text-white bg-[var(--color-primary)] px-6 py-3 rounded-full font-sans font-medium text-sm hover:bg-slate-800 transition-colors w-fit">
                  View Catalogue <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>

            {/* Gallery Portal */}
            <FadeIn delay={0.2} className="flex flex-col h-full bg-[var(--color-surface-muted)] rounded-[2rem] border border-[var(--color-border)] hover:border-slate-300 transition-colors shadow-sm overflow-hidden group">
              <div className="relative h-48 bg-white border-b border-[var(--color-border)] p-6 flex flex-col justify-end">
                <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white shadow-sm border border-[var(--color-border)] flex items-center justify-center">
                  <span className="text-2xl">📸</span>
                </div>
                <h3 className="text-2xl font-sans font-bold text-[var(--color-primary)] tracking-tight">Project Gallery</h3>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-[var(--color-muted)] text-base mb-8">
                  Check out our real-world installations spanning large industrial complexes, standard residential setups, and vast farms.
                </p>
                <Link href="/gallery" className="mt-auto inline-flex items-center gap-2 text-[var(--color-primary)] bg-white border border-[var(--color-border)] px-6 py-3 rounded-full font-sans font-medium text-sm hover:border-slate-400 transition-colors w-fit shadow-sm">
                  Explore Installations <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>

            {/* About Portal */}
            <FadeIn delay={0.3} className="flex flex-col h-full bg-[var(--color-surface-muted)] rounded-[2rem] border border-[var(--color-border)] hover:border-slate-300 transition-colors shadow-sm overflow-hidden group">
              <div className="relative h-48 bg-white border-b border-[var(--color-border)] p-6 flex flex-col justify-end">
                <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white shadow-sm border border-[var(--color-border)] flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-2xl font-sans font-bold text-[var(--color-primary)] tracking-tight">About Us</h3>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-[var(--color-muted)] text-base mb-8">
                  With over 15 years in the business, we are trusted nationwide. Learn more about our company philosophy and history.
                </p>
                <Link href="/about" className="mt-auto inline-flex items-center gap-2 text-[var(--color-primary)] font-sans font-medium hover:text-[var(--color-accent)] transition-colors w-fit">
                  Read Our Story <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ======================== STATS ======================== */}
      <StatsCounter stats={stats} />

      {/* ======================== TESTIMONIALS ======================== */}
      <section className="py-24 sm:py-32 bg-[var(--color-surface-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="TESTIMONIALS"
            title="Trusted by experts"
            subtitle="Don't just take our word for it. Hear from property developers, security consultants, and farm owners."
          />

          <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar mt-16 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-pl-4 sm:scroll-pl-0">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center md:snap-align-none pb-4">
                <TestimonialCard
                  testimonial={testimonial}
                  index={index}
                />
              </div>
            ))}
            {/* Edge spacer for mobile strict peaking */}
            <div className="min-w-[10vw] flex-shrink-0 md:hidden" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ======================== CTA BANNER ======================== */}
      <CTABanner />
    </>
  );
}
