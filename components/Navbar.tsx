"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { navLinks, companyInfo } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/70 backdrop-blur-md shadow-2xl shadow-black/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group min-h-[44px] min-w-[44px]">
              <div className="relative">
                <div className="w-10 h-10 bg-[var(--color-accent)] rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[var(--color-primary)] font-display font-bold text-xl">J</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-display font-bold text-xl tracking-tight leading-none">
                  JOSH<span className="text-[var(--color-accent)]">WIRES</span>
                </span>
                <span className="text-white/60 text-[10px] tracking-[0.2em] font-body uppercase leading-none mt-0.5">
                  Fencing Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-body text-sm font-bold transition-colors duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                    pathname === link.href
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNavDot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${companyInfo.phone1}`}
                className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold transition-colors duration-300 min-h-[44px] min-w-[44px]"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                </div>
                <span className="hidden xl:inline">{companyInfo.phone1}</span>
              </a>
              <Link
                href="/contact"
                className="bg-[var(--color-accent)] text-primary font-bold px-5 py-2.5 text-sm hover:bg-white transition-colors duration-300 inline-flex items-center justify-center min-h-[44px] min-w-[44px]"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-12 h-12 flex items-center justify-center text-white hover:text-[var(--color-accent)] transition-colors duration-300"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              <div className="bg-black/50 backdrop-blur-sm p-2 rounded-md">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
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
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 right-0 max-h-[85vh] overflow-y-auto bg-[var(--color-primary)] z-40 lg:hidden shadow-2xl rounded-b-3xl border-b border-white/10"
            >
              <div className="flex flex-col pt-24 px-6 pb-8">
                <div className="flex-1 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between py-4 px-4 rounded-xl font-body text-base font-bold transition-all duration-300 min-h-[48px] ${
                          pathname === link.href
                            ? "bg-white/10 text-white"
                            : "text-white/60 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.label}
                        {pathname === link.href && (
                          <div className="w-1.5 h-1.5 bg-[var(--color-accent)] rounded-full mr-2" />
                        )}
                        {pathname !== link.href && (
                          <ChevronRight className="w-4 h-4 opacity-40" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4 pt-8 mt-4 border-t border-white/10">
                  <a
                    href={`tel:${companyInfo.phone1}`}
                    className="flex items-center justify-center gap-3 text-white/80 hover:text-white transition-colors duration-300 text-sm font-bold min-h-[48px]"
                  >
                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    {companyInfo.phone1}
                  </a>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center bg-[var(--color-accent)] text-primary font-bold px-5 py-4 text-sm hover:bg-white transition-colors duration-300 min-h-[48px]"
                  >
                    Get a Free Quote
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
