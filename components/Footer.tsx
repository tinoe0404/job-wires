"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { navLinks, companyInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime/30 to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-lime to-lime-light rounded-lg flex items-center justify-center">
                <span className="text-navy font-black text-lg">J</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tight leading-none">
                  JOSH<span className="text-lime">WIRES</span>
                </span>
                <span className="text-gray-500 text-[10px] tracking-[0.2em] uppercase leading-none mt-0.5">
                  Fencing Solutions
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Premium wire mesh and fencing solutions for residential, commercial,
              agricultural, and industrial applications. Quality you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-lime text-sm flex items-center gap-1 group transition-colors duration-300"
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
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Products
            </h4>
            <ul className="space-y-3">
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
                    className="text-gray-400 hover:text-lime text-sm flex items-center gap-1 group transition-colors duration-300"
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
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${companyInfo.phone1}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-lime transition-colors duration-300 text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>{companyInfo.phone1}</p>
                    <p>{companyInfo.phone2}</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-lime transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  {companyInfo.address}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-gray-500 hover:text-lime text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-gray-500 hover:text-lime text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
