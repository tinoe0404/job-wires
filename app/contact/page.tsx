"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";
import { companyInfo } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* ======================== PAGE HEADER ======================== */}
      <section className="pt-36 pb-16 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <p className="text-sm font-semibold text-[var(--color-accent)] tracking-wider uppercase mb-3">Get In Touch</p>
            <h1 className="text-3xl md:text-4xl font-sans font-bold text-[var(--color-primary)] tracking-tight mb-4">
              Contact Joshwires
            </h1>
            <p className="text-[var(--color-muted)] text-base max-w-lg leading-relaxed">
              Ready to start your fencing project? Reach out to us for expert advice, product inquiries, or a free quotation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======================== CONTACT INFO CARDS ======================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Info Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                details: [companyInfo.phone1, companyInfo.phone2],
                href: `tel:${companyInfo.phone1}`,
                cta: "Call Now",
              },
              {
                icon: Mail,
                title: "Email Us",
                details: [companyInfo.email],
                href: `mailto:${companyInfo.email}`,
                cta: "Send Email",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                details: [companyInfo.address],
                href: "#map",
                cta: "Get Directions",
              },
              {
                icon: Clock,
                title: "Business Hours",
                details: ["Mon - Fri: 8:00 - 17:00", "Sat: 8:00 - 13:00"],
                href: undefined,
                cta: undefined,
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={staggerItem}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-lime/20 transition-all duration-500 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-lime/20 to-lime-light/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="w-6 h-6 text-lime" />
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {card.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {card.details.map((detail) => (
                    <p key={detail} className="text-gray-500 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                {card.cta && card.href && (
                  <a
                    href={card.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-lime hover:text-lime-light transition-colors duration-300"
                  >
                    {card.cta}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Form + Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            {/* Map + WhatsApp */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-[#25D366]/10 to-[#25D366]/5 rounded-2xl p-6 border border-[#25D366]/20">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-charcoal mb-1">
                      Chat on WhatsApp
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                      Get instant responses! Chat with our team directly on
                      WhatsApp for quick inquiries and quotes.
                    </p>
                    <a
                      href={`https://wa.me/${companyInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#1DA955] transition-colors duration-300 text-sm"
                      id="whatsapp-cta"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Start WhatsApp Chat
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div id="map" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="bg-gray-100 h-[300px] flex items-center justify-center relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160984895!2d30.928!3d-17.824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e706b17161%3A0x2238593869767a39!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2s!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Joshwires Location"
                    className="absolute inset-0"
                  />
                </div>
                <div className="p-4">
                  <p className="text-charcoal font-semibold text-sm">
                    Joshwires Head Office
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    {companyInfo.address}
                  </p>
                </div>
              </div>

              {/* Phone Numbers Display */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-charcoal mb-4">
                  Call Us Directly
                </h3>
                <div className="space-y-3">
                  {[companyInfo.phone1, companyInfo.phone2].map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-lime/5 hover:border-lime/20 border border-transparent transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-lime/10 rounded-lg flex items-center justify-center group-hover:bg-lime/20 transition-colors duration-300">
                        <Phone className="w-4 h-4 text-lime" />
                      </div>
                      <div>
                        <p className="text-charcoal font-semibold text-sm">
                          {phone}
                        </p>
                        <p className="text-gray-400 text-xs">Tap to call</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
