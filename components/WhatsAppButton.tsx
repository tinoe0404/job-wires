"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "263779975775";
  const message = encodeURIComponent("Hi Joshwires, I'd like to enquire about your fencing products.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold pl-5 pr-6 py-3.5 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-0.5 transition-all duration-300 group"
    >
      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
      <span className="text-sm hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
