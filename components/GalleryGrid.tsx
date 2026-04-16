"use client";

import { useState } from "react";
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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <FadeIn
            delay={index * 0.1}
            key={image.id}
            className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
              Number(image.id) % 3 === 1 ? "md:row-span-2" : ""
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <div
              className={`relative w-full ${
                Number(image.id) % 3 === 1 ? "h-80 md:h-full" : "h-64"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-5">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 bg-[var(--color-surface)] text-[var(--color-primary)] text-xs rounded-full mb-2 backdrop-blur-sm shadow-sm font-bold tracking-wider uppercase">
                  {image.category}
                </span>
                <p className="text-white text-sm font-medium">{image.alt}</p>
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
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl max-h-[85vh] w-full aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </motion.div>

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
              aria-label="Close lightbox"
              id="close-lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <span className="inline-block px-4 py-1.5 bg-[var(--color-surface)] text-[var(--color-primary)] text-sm rounded-full backdrop-blur-sm shadow-sm font-bold tracking-wider uppercase">
                {selectedImage.category}
              </span>
              <p className="text-white mt-2 text-sm">{selectedImage.alt}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
