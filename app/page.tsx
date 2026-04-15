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

export default function HomePage() {
  return (
    <>
      {/* ======================== HERO SECTION ======================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/30" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-lime/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue/10 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-lime mb-6">
                <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
                For All Your Fencing Solutions
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6"
            >
              Premium Wire Mesh &{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-lime-light">
                  Fencing Solutions
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-lime to-lime-light rounded-full" />
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl"
            >
              Trusted experts in durable fencing products for residential,
              commercial, agricultural, and industrial needs.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-lime to-lime-light text-navy font-bold px-8 py-4 rounded-xl text-base hover:shadow-xl hover:shadow-lime/25 transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center justify-center gap-2"
                id="hero-get-quote"
              >
                Get Quote
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:border-lime/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center gap-2"
                id="hero-contact-us"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-14 flex flex-wrap items-center gap-6"
            >
              {[
                { icon: Shield, label: "Premium Quality" },
                { icon: Clock, label: "15+ Years" },
                { icon: Award, label: "Trusted Brand" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-gray-400 text-sm"
                >
                  <badge.icon className="w-4 h-4 text-lime" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-lime rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ======================== ABOUT PREVIEW ======================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-lime/10 text-lime text-xs font-semibold uppercase tracking-widest rounded-full mb-4 border border-lime/20">
                About Joshwires
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
                Your Trusted Partner in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-blue">
                  Fencing Excellence
                </span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-6">
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
                    <CheckCircle className="w-5 h-5 text-lime flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-navy font-semibold group hover:text-lime transition-colors duration-300"
              >
                Learn More About Us
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
                <Image
                  src="/images/gallery-5.png"
                  alt="Joshwires team at work"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
              {/* Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl shadow-black/10 border border-gray-100">
                <p className="text-3xl font-black text-lime mb-0.5">15+</p>
                <p className="text-gray-500 text-sm">Years of Excellence</p>
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-lime/10 rounded-2xl -z-10" />
            </motion.div>
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

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.slice(0, 6).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 bg-navy text-white font-semibold px-8 py-4 rounded-xl hover:bg-charcoal transition-all duration-300"
            >
              View All Products
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
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

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
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
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group text-center p-8 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-lime/20 hover:shadow-xl hover:shadow-lime/5 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-lime/20 to-lime-light/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-lime" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
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

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {galleryImages.slice(0, 3).map((image) => (
              <motion.div
                key={image.id}
                variants={staggerItem}
                className="group relative h-72 rounded-2xl overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-block px-3 py-1 bg-lime/20 text-lime text-xs rounded-full backdrop-blur-sm">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 text-navy font-semibold hover:text-lime transition-colors duration-300"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
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

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================== CTA BANNER ======================== */}
      <CTABanner />
    </>
  );
}
