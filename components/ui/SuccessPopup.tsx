"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
  email?: string;
}

export default function SuccessPopup({ isOpen, onClose, email }: SuccessPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 overflow-hidden z-10 flex flex-col items-center text-center"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-3">
              Message Sent!
            </h3>
            
            <p className="text-slate-500 leading-relaxed mb-8 text-sm">
              Thank you for reaching out to Joshwires. We have received your message and will get back to you within 24 hours. 
              {email && (
                <span className="block mt-3 text-slate-600 font-medium">
                  A receipt of your submission has been forwarded to <b>{email}</b>.
                </span>
              )}
            </p>

            <button
              onClick={onClose}
              className="w-full py-3.5 px-6 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-xl transition-colors duration-300"
            >
              Back to Website
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
