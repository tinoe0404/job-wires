import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Joshwires | Wire Mesh Experts",
    template: "%s | Joshwires",
  },
  description:
    "Joshwires provides premium fencing and wire mesh solutions including diamond fence, field fence, razor wire, barbed wire, and fencing poles.",
  keywords: [
    "fencing",
    "wire mesh",
    "diamond fence",
    "field fence",
    "razor wire",
    "barbed wire",
    "fencing poles",
    "Zimbabwe",
    "security fencing",
  ],
  openGraph: {
    title: "Joshwires | Wire Mesh Experts",
    description:
      "Premium fencing and wire mesh solutions for residential, commercial, agricultural, and industrial needs.",
    type: "website",
    locale: "en_US",
    siteName: "Joshwires",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={`${inter.className} relative antialiased overflow-x-hidden selection:bg-[var(--color-accent)]/20 text-[var(--color-text)] bg-white`}>
        {/* Global Grid Background */}
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] -z-20 pointer-events-none" />
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-[120px] -z-20 pointer-events-none" />

        <Navbar />
        <main className="min-h-screen relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
