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
            ? "bg-navy/95 backdrop-blur-xl shadow-2xl shadow-black/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-lime to-lime-light rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-navy font-black text-lg">J</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-lime/20 to-lime-light/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tight leading-none">
                  JOSH<span className="text-lime">WIRES</span>
                </span>
                <span className="text-gray-400 text-[10px] tracking-[0.2em] uppercase leading-none mt-0.5">
                  Fencing Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    pathname === link.href
                      ? "text-lime"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-lime to-lime-light rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${companyInfo.phone1}`}
                className="flex items-center gap-2 text-gray-300 hover:text-lime text-sm transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{companyInfo.phone1}</span>
              </a>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-lime to-lime-light text-navy font-semibold px-5 py-2.5 rounded-xl text-sm hover:shadow-lg hover:shadow-lime/25 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white hover:text-lime transition-colors duration-300"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-navy z-40 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 px-6 pb-8">
                <div className="flex-1 space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-medium transition-all duration-300 ${
                          pathname === link.href
                            ? "bg-lime/10 text-lime"
                            : "text-gray-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.label}
                        <ChevronRight className="w-4 h-4 opacity-40" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-3 pt-6 border-t border-white/10">
                  <a
                    href={`tel:${companyInfo.phone1}`}
                    className="flex items-center gap-3 text-gray-400 hover:text-lime transition-colors duration-300 text-sm px-4"
                  >
                    <Phone className="w-4 h-4" />
                    {companyInfo.phone1}
                  </a>
                  <Link
                    href="/contact"
                    className="block bg-gradient-to-r from-lime to-lime-light text-navy font-semibold px-5 py-3 rounded-xl text-center text-sm"
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
