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

        <Navbar />
        <main className="min-h-screen relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
