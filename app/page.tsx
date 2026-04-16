"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Award, Wrench, Clock, CheckCircle, Phone } from "lucide-react";
import { products, testimonials, stats, galleryImages } from "@/lib/data";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import StatsCounter from "@/components/StatsCounter";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/ui/FadeIn";

export default function HomePage() {
  return (
    <>
      {/* ======================== HERO SECTION ======================== */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[var(--color-surface-muted)]">
        {/* Soft background glow similar to Fiscit */}
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
              className="w-full sm:w-auto text-[var(--color-primary)] font-sans font-semibold px-4 py-3.5 text-base hover:text-[var(--color-accent)] transition-colors flex items-center justify-center gap-2"
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

      {/* ======================== ABOUT PREVIEW ======================== */}
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-[var(--color-primary)] mb-6 leading-tight">
                Your trusted partner in fencing excellence.
              </h2>
              <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-8">
                With over 15 years of experience, Joshwires has established itself
                as a leading provider of premium wire mesh and fencing solutions.
                We serve residential, commercial, agricultural, and industrial
                clients with products built to last.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Premium quality galvanized materials",
                  "Expert installation and guidance",
                  "Competitive pricing for all budgets",
                  "Wide range of fencing products",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 text-[var(--color-primary)] font-sans font-medium"
                  >
                    <CheckCircle className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-white bg-[var(--color-primary)] rounded-full px-6 py-3 font-sans font-medium hover:bg-slate-800 transition-colors group"
              >
                Learn more about us
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="relative aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden bg-[var(--color-surface-muted)] p-4 border border-[var(--color-border)]">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src="/images/gallery-5.png"
                    alt="Joshwires team at work"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ======================== PRODUCTS GRID ======================== */}
      <section className="py-24 sm:py-32 bg-[var(--color-surface-muted)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="SOLUTIONS"
            title="Start securing it today!"
            subtitle="Explore our comprehensive range of high-quality wire mesh and fencing products designed for every need."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {products.slice(0, 6).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <FadeIn className="text-center mt-16">
            <Link
              href="/products"
              className="inline-flex bg-white text-[var(--color-primary)] font-sans font-medium px-8 py-3.5 text-base rounded-full shadow-sm border border-[var(--color-border)] hover:border-slate-300 hover:shadow-md transition-all gap-2"
            >
              View all products
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ======================== WHY CHOOSE US ======================== */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="FEATURES"
            title="Built on quality and trust"
            subtitle="We combine premium materials with expert craftsmanship to deliver fencing solutions that stand the test of time."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: Shield,
                title: "Premium Quality",
                description:
                  "All our products use the highest quality galvanized materials ensuring durability.",
              },
              {
                icon: Award,
                title: "Industry Expertise",
                description:
                  "With 15+ years in the industry, our team brings unmatched knowledge.",
              },
              {
                icon: Wrench,
                title: "Professional Service",
                description:
                  "From consultation to installation, we provide end-to-end professional service.",
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description:
                  "We value your time. Our efficient logistics ensure products are delivered on schedule.",
              },
            ].map((item, index) => (
              <FadeIn
                delay={index * 0.1}
                key={item.title}
                className="flex flex-col p-8 rounded-3xl bg-[var(--color-surface-muted)] border border-[var(--color-border)] hover:-translate-y-1 transition-transform"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-[var(--color-border)] flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-xl font-sans font-bold tracking-tight text-[var(--color-primary)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--color-muted)] text-base leading-relaxed">
                  {item.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== GALLERY PREVIEW ======================== */}
      <section className="py-24 sm:py-32 bg-[var(--color-surface-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="GALLERY"
            title="Featured projects"
            subtitle="See our craftsmanship in action — from residential setups to large-scale commercial installations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {galleryImages.slice(0, 3).map((image, index) => (
              <FadeIn
                delay={index * 0.1}
                key={image.id}
                className="group relative h-80 rounded-3xl overflow-hidden border border-[var(--color-border)] bg-white shadow-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-6 pt-12">
                  <span className="text-sm font-medium text-white">
                    {image.category}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-[var(--color-primary)] font-sans font-medium hover:text-[var(--color-accent)] transition-colors group"
            >
              View full gallery
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
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

          <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 hide-scrollbar mt-16">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center">
                <TestimonialCard
                  testimonial={testimonial}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== CTA BANNER ======================== */}
      <CTABanner />
    </>
  );
}
