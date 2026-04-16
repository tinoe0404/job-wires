import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
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
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body className={`${dmSans.className} antialiased overflow-x-hidden`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
