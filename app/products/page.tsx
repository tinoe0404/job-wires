"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { products } from "@/lib/data";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";
import CTABanner from "@/components/CTABanner";

export default function ProductsPage() {
  return (
    <>
      {/* ======================== PAGE HEADER ======================== */}
      <section className="relative pt-36 pb-16 border-b border-slate-200 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <p className="text-sm font-semibold text-[var(--color-accent)] tracking-wider uppercase mb-3">Our Products</p>
            <h1 className="text-3xl md:text-4xl font-sans font-bold text-[var(--color-primary)] tracking-tight mb-4">
              Premium fencing products
            </h1>
            <p className="text-[var(--color-muted)] text-base max-w-lg leading-relaxed">
              Explore our comprehensive range of high-quality wire mesh, fencing, and security products designed for every application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================== PRODUCTS GRID ======================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Complete Range"
            title="All Products"
            subtitle="Each product is manufactured using premium materials to ensure durability, reliability and long-lasting performance."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================== PRODUCT FEATURES ======================== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Quality Assurance"
            title="What Makes Our Products Stand Out"
            subtitle="Every product we offer is built to exceed expectations."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Galvanized Steel",
                description:
                  "All our wire products are hot-dipped galvanized for maximum corrosion resistance and extended lifespan. Built to withstand the harshest conditions.",
                gradient: "from-blue/20 to-blue-light/10",
              },
              {
                title: "Rigorous Testing",
                description:
                  "Every batch undergoes tensile strength, coating thickness, and durability tests. We only sell products that meet our exacting quality standards.",
                gradient: "from-blue/20 to-blue-light/10",
              },
              {
                title: "Industry Standards",
                description:
                  "Our products comply with regional and international fencing standards. You can trust that your installation will be safe, legal, and durable.",
                gradient: "from-blue/20 to-blue/10",
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerContainer}
                className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <div className="w-3 h-3 bg-blue rounded-full" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================== CTA ======================== */}
      <CTABanner
        title="Need a Custom Fencing Solution?"
        subtitle="Contact us for bulk orders, custom specifications, or expert advice on the best fencing products for your project."
        buttonText="Request a Quote"
      />
    </>
  );
}
