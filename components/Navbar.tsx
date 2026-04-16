"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { navLinks, companyInfo } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md border-b border-[var(--color-border)] py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group min-h-[56px] py-2">
              <div className={`relative flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-300 ${scrolled ? "w-32 h-8 sm:w-36 sm:h-10" : "w-36 h-10 sm:w-44 sm:h-12"}`}>
                <Image
                  src="/logo3.png"
                  alt="Joshwires Logo"
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  className="object-contain origin-left"
                  priority
                  loading="eager"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans text-sm font-medium transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-muted)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {link.label.charAt(0).toUpperCase() + link.label.slice(1).toLowerCase()}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="bg-[var(--color-accent)] text-white font-sans font-medium px-5 py-2.5 text-sm rounded-lg hover:bg-green-600 transition-colors duration-200"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-[var(--color-primary)]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white z-40 md:hidden pt-24 px-6"
            >
              <div className="flex flex-col h-full">
                <div className="flex-1 space-y-6">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between font-sans text-xl font-medium ${
                          pathname === link.href ? "text-[var(--color-accent)]" : "text-[var(--color-primary)]"
                        }`}
                      >
                        {link.label.charAt(0).toUpperCase() + link.label.slice(1).toLowerCase()}
                        <ChevronRight className={`w-5 h-5 ${pathname === link.href ? "text-[var(--color-accent)]" : "text-[var(--color-muted)]"}`} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="pb-12 space-y-4">
                  <div className="p-5 bg-[var(--color-surface-muted)] rounded-2xl border border-[var(--color-border)] text-center">
                    <p className="text-sm text-[var(--color-muted)] mb-1">Call us directly</p>
                    <p className="text-[var(--color-primary)] font-semibold">{companyInfo.phone1}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="flex justify-center w-full bg-[var(--color-accent)] text-white font-sans font-medium px-6 py-4 text-center rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
