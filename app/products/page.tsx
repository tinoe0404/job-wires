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
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Premium{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-lime-light">
                Fencing Products
              </span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Explore our comprehensive range of high-quality wire mesh, fencing,
              and security products designed for every application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================== PRODUCTS GRID ======================== */}
      <section className="py-24 bg-gray-50">
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
                gradient: "from-lime/20 to-lime-light/10",
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
                gradient: "from-lime/20 to-blue/10",
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
                  <div className="w-3 h-3 bg-lime rounded-full" />
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
