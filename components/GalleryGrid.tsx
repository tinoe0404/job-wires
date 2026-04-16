"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { type GalleryImage } from "@/lib/data";

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <FadeIn
            delay={index * 0.1}
            key={image.id}
            className={`group relative overflow-hidden rounded-3xl border border-[var(--color-border)] cursor-pointer bg-white shadow-sm hover:shadow-md transition-shadow ${
              Number(image.id) % 3 === 1 ? "md:row-span-2" : ""
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <div
              className={`relative w-full ${
                Number(image.id) % 3 === 1 ? "h-80 md:h-full min-h-[500px]" : "h-64"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            {/* Soft Fiscit style gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-primary)]/80 via-[var(--color-primary)]/20 to-transparent p-6 pt-16 flex justify-between items-end">
              <div>
                <span className="inline-block px-3 py-1 bg-[var(--color-accent)] text-white text-xs font-sans font-medium rounded-full mb-2">
                  {image.category}
                </span>
                <p className="text-white text-sm font-sans font-medium">{image.alt}</p>
              </div>
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform scale-90 group-hover:scale-100 transition-all duration-300 opacity-0 group-hover:opacity-100">
                <ZoomIn className="w-5 h-5 text-white" />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[var(--color-surface-muted)]/90 backdrop-blur-md z-[60] flex items-center justify-center p-4 lg:p-12 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white border border-[var(--color-border)] rounded-full flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-primary)] shadow-sm transition-all z-10 hover:scale-105"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-6xl w-full h-[85vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col cursor-default border border-[var(--color-border)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full bg-[var(--color-surface-muted)] p-6">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between p-6 border-t border-[var(--color-border)] bg-white gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-block px-4 py-1.5 bg-[var(--color-surface-muted)] text-[var(--color-muted)] text-sm font-sans font-medium rounded-full border border-[var(--color-border)]">
                    {selectedImage.category}
                  </span>
                  <span className="text-[var(--color-primary)] font-sans font-semibold">
                    {selectedImage.alt}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-6 py-2 bg-[var(--color-surface-muted)] text-[var(--color-primary)] font-medium rounded-full text-sm hover:bg-slate-200 transition-colors"
                >
                  Close Gallery
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
