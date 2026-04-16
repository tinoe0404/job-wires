"use client";

import Link from "next/link";
import { companyInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[var(--color-border)] font-sans mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2 pr-0 lg:pr-12">
            <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
              <span className="text-[var(--color-primary)] font-sans font-bold text-2xl tracking-tight flex items-center">
                J
                <span className="text-[var(--color-accent)] mx-[1px]">O</span>
                SHWIRES
              </span>
            </Link>
            <p className="text-[var(--color-muted)] text-base leading-relaxed mb-6">
              Premium wire mesh and fencing solutions for residential, commercial,
              agricultural, and industrial applications. Built to last.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[var(--color-primary)] font-sans font-semibold text-base mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {[
                { label: "About", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-muted)] text-base font-medium hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[var(--color-primary)] font-sans font-semibold text-base mb-6">
              Solutions
            </h4>
            <ul className="space-y-4">
              {[
                "Diamond Fence",
                "Field Fence",
                "Game Fence",
                "Barbed Wire",
                "Razor Wire",
                "Fencing Poles",
              ].map((product) => (
                <li key={product}>
                  <Link
                    href="/products"
                    className="text-[var(--color-muted)] text-base font-medium hover:text-[var(--color-accent)] transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--color-primary)] font-sans font-semibold text-base mb-6">
              Reach Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${companyInfo.phone1}`}
                  className="text-[var(--color-muted)] text-base font-medium hover:text-[var(--color-accent)] transition-colors inline-block"
                >
                  {companyInfo.phone1}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-[var(--color-muted)] text-base font-medium hover:text-[var(--color-accent)] transition-colors inline-block"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <span className="text-[var(--color-muted)] text-base font-medium block">
                  {companyInfo.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-border)] pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[var(--color-muted)] text-sm font-medium">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-[var(--color-muted)] hover:text-[var(--color-primary)] text-sm font-medium transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[var(--color-muted)] hover:text-[var(--color-primary)] text-sm font-medium transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
