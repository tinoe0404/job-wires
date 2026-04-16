"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Award,
  Wrench,
  Clock,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  scaleIn,
} from "@/lib/animations";
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
      <section className="relative h-screen min-h-[600px] flex items-end pb-24 justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.png"
            alt="Premium fencing installation"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 noise-bg" />
        </div>

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-4 mb-5 md:mb-6">
                <div className="w-12 md:w-16 h-[2px] bg-[var(--color-accent)]" />
                <span className="text-white/90 font-medium tracking-widest text-sm uppercase">
                  For All Your Fencing Solutions
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h1 className="text-[clamp(2.5rem,6vw,5.5rem)] font-display text-white font-bold leading-[1.05] tracking-tight mb-6">
                Premium Wire Mesh & <br className="hidden md:block" /> Fencing Solutions
              </h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-lg md:text-xl text-white/70 font-body leading-relaxed mb-10 max-w-xl">
                Trusted experts in durable fencing products for residential,
                commercial, agricultural, and industrial needs.
              </p>
            </FadeIn>

            <FadeIn delay={0.8} className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-[var(--color-accent)] text-primary font-bold px-8 py-4 text-base hover:bg-white transition-colors duration-300 inline-flex items-center justify-center min-h-[44px] min-w-[44px]"
              >
                Get Quote
              </Link>
              <Link
                href="/contact"
                className="text-white font-semibold px-8 py-4 border border-white/50 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-colors duration-300 inline-flex items-center justify-center min-h-[44px] min-w-[44px]"
              >
                Contact Us
              </Link>
            </FadeIn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <FadeIn delay={1.2} className="absolute bottom-10 left-4 sm:left-6 lg:left-8 z-10">
          <div className="w-px h-16 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="w-full h-1/2 bg-[var(--color-accent)] absolute top-0"
            />
          </div>
        </FadeIn>
      </section>

      {/* ======================== ABOUT PREVIEW ======================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 bg-[var(--color-surface)] text-[var(--color-primary)] text-xs font-semibold uppercase tracking-widest rounded-full mb-4 border border-[var(--color-border)]">
                About Joshwires
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-[var(--color-primary)] leading-tight mb-6">
                Your Trusted Partner in{" "}
                <span className="text-[var(--color-accent)]">
                  Fencing Excellence
                </span>
              </h2>
              <p className="text-[var(--color-muted)] text-base leading-relaxed mb-6">
                With over 15 years of experience, Joshwires has established itself
                as a leading provider of premium wire mesh and fencing solutions.
                We serve residential, commercial, agricultural, and industrial
                clients with products built to last.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Premium quality galvanized materials",
                  "Expert installation and guidance",
                  "Competitive pricing for all budgets",
                  "Wide range of fencing products",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-600 text-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold group hover:text-accent transition-colors duration-300 min-h-[44px] min-w-[44px]"
              >
                Learn More About Us
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                <Image
                  src="/images/gallery-5.png"
                  alt="Joshwires team at work"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ======================== PRODUCTS GRID ======================== */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Our Products"
            title="Premium Fencing Solutions"
            subtitle="Explore our comprehensive range of high-quality wire mesh and fencing products designed for every need."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 6).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 bg-[var(--color-primary)] text-white font-semibold px-8 py-4 rounded-xl hover:bg-black transition-all duration-300 min-h-[44px] min-w-[44px]"
            >
              View All Products
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ======================== WHY CHOOSE US ======================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue/5 rounded-full blur-3xl translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Why Choose Us"
            title="Built on Quality & Trust"
            subtitle="We combine premium materials with expert craftsmanship to deliver fencing solutions that stand the test of time."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: "Premium Quality",
                description:
                  "All our products are manufactured using the highest quality galvanized materials ensuring durability and longevity.",
              },
              {
                icon: Award,
                title: "Industry Expertise",
                description:
                  "With 15+ years in the industry, our team brings unmatched knowledge and experience to every project.",
              },
              {
                icon: Wrench,
                title: "Professional Service",
                description:
                  "From consultation to installation, we provide end-to-end professional service tailored to your needs.",
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description:
                  "We value your time. Our efficient logistics ensure your products are delivered on schedule, every time.",
              },
            ].map((item, index) => (
              <FadeIn
                delay={index * 0.1}
                key={item.title}
                className="group text-center p-8 rounded-2xl bg-white border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-500"
              >
                <div className="w-14 h-14 bg-[var(--color-surface)] rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== GALLERY PREVIEW ======================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Our Work"
            title="Featured Projects"
            subtitle="See our craftsmanship in action — from residential setups to large-scale commercial installations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.slice(0, 3).map((image, index) => (
              <FadeIn
                delay={index * 0.1}
                key={image.id}
                className="group relative h-72 rounded-2xl overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-block px-3 py-1 bg-[var(--color-surface)] text-[var(--color-primary)] text-xs rounded-full backdrop-blur-sm shadow-sm">
                    {image.category}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:text-[var(--color-accent)] transition-colors duration-300 min-h-[44px] min-w-[44px]"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ======================== STATS ======================== */}
      <StatsCounter stats={stats} />

      {/* ======================== TESTIMONIALS ======================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Testimonials"
            title="What Our Clients Say"
            subtitle="Don't just take our word for it — hear from some of our satisfied customers."
          />

          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 hide-scrollbar">
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
