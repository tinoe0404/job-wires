"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { galleryImages } from "@/lib/data";
import GalleryGrid from "@/components/GalleryGrid";
import CTABanner from "@/components/CTABanner";

export default function GalleryPage() {
  return (
    <>
      {/* ======================== PAGE HERO ======================== */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(132,204,22,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.08),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-lime mb-6">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Project{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-lime-light">
                Gallery
              </span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Explore our portfolio of completed fencing installations across
              residential, commercial, agricultural, and security projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================== GALLERY GRID ======================== */}
      <section className="py-24 bg-gray-50">
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
