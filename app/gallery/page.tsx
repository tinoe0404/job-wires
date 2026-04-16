"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { galleryImages } from "@/lib/data";
import GalleryGrid from "@/components/GalleryGrid";
import CTABanner from "@/components/CTABanner";

export default function GalleryPage() {
  return (
    <>
      {/* ======================== PAGE HEADER ======================== */}
      <section className="relative pt-36 pb-16 border-b border-slate-200 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <p className="text-sm font-semibold text-[var(--color-accent)] tracking-wider uppercase mb-3">Our Portfolio</p>
            <h1 className="text-3xl md:text-4xl font-sans font-bold text-[var(--color-primary)] tracking-tight mb-4">
              Project gallery
            </h1>
            <p className="text-[var(--color-muted)] text-base max-w-lg leading-relaxed">
              Explore our portfolio of completed fencing installations across residential, commercial, agricultural, and security projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================== GALLERY GRID ======================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GalleryGrid images={galleryImages} />
          </motion.div>
        </div>
      </section>

      {/* ======================== CTA ======================== */}
      <CTABanner
        title="Like What You See?"
        subtitle="Let us bring the same level of quality and craftsmanship to your project. Get in touch for a free consultation."
      />
    </>
  );
}
