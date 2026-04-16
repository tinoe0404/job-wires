"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";
import { navLinks, companyInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111] relative overflow-hidden font-body">
      {/* Decorative Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent)]/50 to-transparent" />
      
      {/* Background Decorative */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[var(--color-accent)]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 min-h-[44px] min-w-[44px]">
              <div className="w-10 h-10 bg-[var(--color-accent)] rounded-lg flex items-center justify-center">
                <span className="text-[var(--color-primary)] font-display text-xl font-bold">J</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display font-bold text-xl tracking-tight leading-none">
                  JOSH<span className="text-[var(--color-accent)]">WIRES</span>
                </span>
                <span className="text-white/50 text-[10px] tracking-[0.2em] font-body uppercase leading-none mt-0.5">
                  Fencing Solutions
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mt-4 mb-6">
              Premium wire mesh and fencing solutions for residential, commercial,
              agricultural, and industrial applications. Quality you can trust.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-lg tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 text-white/60">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--color-accent)] text-sm flex items-center gap-1 group transition-colors duration-300 min-h-[44px]"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-display font-bold text-lg tracking-wider mb-6">
              Products
            </h4>
            <ul className="space-y-4 text-white/60">
              {[
                "Diamond Fence",
                "Field Fence",
                "Game Fence",
                "Barbed Wire",
                "Razor Wire",
                "Fencing Poles",
                "Fencing Droppers",
              ].map((product) => (
                <li key={product}>
                  <Link
                    href="/products"
                    className="hover:text-[var(--color-accent)] text-sm flex items-center gap-1 group transition-colors duration-300 min-h-[44px]"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold text-lg tracking-wider mb-6">
              Contact Us
            </h4>
            <ul className="space-y-6 text-white/60">
              <li>
                <a
                  href={`tel:${companyInfo.phone1}`}
                  className="flex items-start gap-4 hover:text-white transition-colors duration-300 text-sm group min-h-[44px]"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                    <Phone className="w-3.5 h-3.5 text-[var(--color-accent)] group-hover:text-[var(--color-primary)]" />
                  </div>
                  <div className="pt-1.5">
                    <p>{companyInfo.phone1}</p>
                    <p className="mt-1">{companyInfo.phone2}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-4 hover:text-white transition-colors duration-300 text-sm group min-h-[44px]"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                    <Mail className="w-3.5 h-3.5 text-[var(--color-accent)] group-hover:text-[var(--color-primary)]" />
                  </div>
                  <span className="pt-0.5">{companyInfo.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-4 text-sm group min-h-[44px]">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  </div>
                  <span className="pt-1.5">{companyInfo.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm uppercase tracking-wider font-bold">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-white/40 hover:text-[var(--color-accent)] text-sm transition-colors duration-300 min-h-[44px] flex items-center"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/40 hover:text-[var(--color-accent)] text-sm transition-colors duration-300 min-h-[44px] flex items-center"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
