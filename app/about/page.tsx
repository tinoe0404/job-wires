"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  Target,
  Award,
  Users,
  CheckCircle,
  Zap,
  TrendingUp,
  Heart,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import SectionTitle from "@/components/SectionTitle";
import CTABanner from "@/components/CTABanner";

export default function AboutPage() {
  return (
    <>
      {/* ======================== PAGE HEADER ======================== */}
      <section className="relative pt-36 pb-16 border-b border-slate-200 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <p className="text-sm font-semibold text-[var(--color-accent)] tracking-wider uppercase mb-3">About Us</p>
            <h1 className="text-3xl md:text-4xl font-sans font-bold text-[var(--color-primary)] tracking-tight mb-4">
              Building trust through quality fencing
            </h1>
            <p className="text-[var(--color-muted)] text-base max-w-lg leading-relaxed">
              For over 15 years, Joshwires has been at the forefront of delivering premium wire mesh and fencing solutions across Zimbabwe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================== COMPANY INTRO ======================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue/5 rounded-full blur-3xl -translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/gallery-1.png"
                  alt="Joshwires commercial installation"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue/10 rounded-2xl -z-10" />
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 bg-blue/10 text-blue text-xs font-semibold uppercase tracking-widest rounded-full mb-4 border border-blue/20">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal leading-tight mb-6">
                Zimbabwe&apos;s Leading Fencing Solutions Provider
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Joshwires is a premier supplier of wire mesh and fencing products,
                serving clients across Zimbabwe. Founded on the principles of
                quality, reliability, and customer satisfaction, we have grown into
                one of the most trusted names in the fencing industry.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Our comprehensive product range includes diamond fence, field
                fence, game fence, barbed wire, razor wire, fencing poles, and
                fencing droppers — each manufactured to meet the highest standards
                of durability and performance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "15+", label: "Years Experience" },
                  { value: "1000+", label: "Happy Clients" },
                  { value: "500+", label: "Projects Completed" },
                  { value: "7", label: "Product Lines" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-gray-50 rounded-xl p-4 text-center"
                  >
                    <p className="text-2xl font-black text-blue">{stat.value}</p>
                    <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======================== MISSION ======================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description:
                  "To provide the highest quality fencing solutions that protect properties, contain livestock, and enhance security — all while delivering exceptional value and service to every client.",
                color: "from-blue to-blue-light",
              },
              {
                icon: TrendingUp,
                title: "Our Vision",
                description:
                  "To be the most trusted and innovative fencing solutions provider in Zimbabwe and beyond, setting the industry standard for quality, service, and customer satisfaction.",
                color: "from-blue to-blue-light",
              },
              {
                icon: Heart,
                title: "Our Values",
                description:
                  "Quality first. Customer satisfaction always. We believe in honest pricing, durable products, and building lasting relationships with every client we serve.",
                color: "from-blue to-blue",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue/20 transition-all duration-500 text-center"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== WHY CHOOSE JOSHWIRES ======================== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Why Joshwires"
            title="What Sets Us Apart"
            subtitle="We don't just sell fencing — we provide complete solutions backed by expertise and genuine care for your project."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Shield,
                title: "Unmatched Product Quality",
                description:
                  "Every product we offer undergoes rigorous quality checks. Our galvanized fencing materials are built to withstand harsh weather conditions and last for decades.",
              },
              {
                icon: Users,
                title: "Customer-Centric Approach",
                description:
                  "We take time to understand your specific needs and recommend the perfect fencing solution. Our team is always available for guidance and support.",
              },
              {
                icon: Zap,
                title: "Fast & Reliable Service",
                description:
                  "From quotation to delivery, we ensure prompt and efficient service. We maintain large stock inventories to serve you without delays.",
              },
              {
                icon: Award,
                title: "Competitive Pricing",
                description:
                  "We offer the best value for money without compromising on quality. Get premium fencing products at fair, transparent prices.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="group flex gap-5 bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl hover:shadow-blue/5 border border-transparent hover:border-blue/20 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue/20 to-blue-light/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5 text-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================== EXPERTISE ======================== */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(132,204,22,0.08),transparent_60%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionTitle
            badge="Our Expertise"
            title="Industries We Serve"
            subtitle="Our versatile fencing solutions cater to a wide range of industries and applications."
            light
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Residential",
                description: "Home perimeter fencing for security and privacy",
                image: "/images/gallery-2.png",
              },
              {
                title: "Commercial",
                description: "Business and industrial compound protection",
                image: "/images/gallery-1.png",
              },
              {
                title: "Agricultural",
                description: "Farm fencing for livestock and crop protection",
                image: "/images/gallery-4.png",
              },
              {
                title: "Sports & Recreation",
                description: "Fencing for sports facilities and parks",
                image: "/images/gallery-6.png",
              },
            ].map((industry) => (
              <motion.div
                key={industry.title}
                variants={staggerItem}
                className="group relative h-64 rounded-2xl overflow-hidden"
              >
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {industry.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================== CTA ======================== */}
      <CTABanner
        title="Let's Discuss Your Fencing Needs"
        subtitle="Whether you need a small residential fence or a large-scale commercial installation, our team is ready to help."
      />
    </>
  );
}
