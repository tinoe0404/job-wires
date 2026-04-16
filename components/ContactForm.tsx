"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    // Simulate form submission
    setTimeout(() => {
      setFormState("sent");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setFormState("idle"), 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    "w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-charcoal text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue/30 focus:border-blue transition-all duration-300";

  return (
    <motion.form
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-black/5 border border-gray-100"
    >
      <h3 className="text-2xl font-bold text-charcoal mb-2">Send Us a Message</h3>
      <p className="text-gray-500 text-sm mb-6">
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+263 7XX XXX XXX"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1.5">
            Subject
          </label>
          <select
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={inputClasses}
          >
            <option value="">Select a subject</option>
            <option value="quote">Request a Quote</option>
            <option value="product">Product Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your fencing requirements..."
          rows={5}
          required
          className={`${inputClasses} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={formState !== "idle"}
        className={`w-full py-4 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
          formState === "sent"
            ? "bg-green-500 text-white"
            : "bg-gradient-to-r from-blue to-blue-light text-white hover:shadow-lg hover:shadow-blue/25 hover:-translate-y-0.5"
        } disabled:opacity-70 disabled:cursor-not-allowed`}
      >
        {formState === "idle" && (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
        {formState === "sending" && (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        )}
        {formState === "sent" && (
          <>
            <CheckCircle className="w-4 h-4" />
            Message Sent!
          </>
        )}
      </button>
    </motion.form>
  );
}
