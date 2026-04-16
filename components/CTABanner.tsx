"use client";

import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export default function CTABanner({ title, subtitle, buttonText }: CTABannerProps = {}) {
  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-[var(--color-primary)] tracking-tight mb-5">
            {title || "Ready to secure your property?"}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-[var(--color-muted)] text-base leading-relaxed max-w-xl mx-auto mb-10">
            {subtitle || "Get in touch with our team to find the perfect fencing solution for your needs."}
          </p>
        </FadeIn>
        <FadeIn delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-[var(--color-accent)] text-white font-sans font-medium px-8 py-3.5 text-sm rounded-lg hover:bg-green-600 transition-colors shadow-sm"
          >
            {buttonText || "Get a Free Quote"}
          </Link>
          <Link
            href="/products"
            className="text-[var(--color-muted)] bg-white border border-slate-200 font-sans font-medium px-8 py-3.5 text-sm rounded-lg hover:border-slate-300 hover:text-[var(--color-primary)] transition-all"
          >
            Browse Products
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
