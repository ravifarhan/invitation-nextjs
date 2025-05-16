"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/1.jpg", "/2.jpg", "/3.jpg"];

export default function Moment() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying]);

  const getMainImageIndex = (index: number) => {
    return ((index % images.length) + images.length) % images.length;
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 4000);
  };

  const getVisibleThumbnails = () => {
    const totalThumbnails = images.length;
    const visibleCount = 5;

    const indices = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx =
        (((currentIndex - Math.floor(visibleCount / 2) + i) % totalThumbnails) +
          totalThumbnails) %
        totalThumbnails;
      indices.push(idx);
    }

    return indices;
  };

  const visibleThumbnails = getVisibleThumbnails();

  return (
    <div className="py-20 px-10 bg-neutral-800">
      <h2 className="text-center text-4xl text-white mb-12">Our Moment</h2>

      <div className="w-full mx-auto h-[500px] relative mb-6 overflow-hidden rounded">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Image
              src={
                images[getMainImageIndex(currentIndex)] || "/placeholder.svg"
              }
              alt={`Main Image ${currentIndex}`}
              fill
              className="object-cover object-center rounded"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail carousel */}
      <div className="relative w-full mx-auto overflow-hidden">
        <div className="flex justify-center items-center">
          <motion.div
            className="flex space-x-2 justify-center items-center"
            initial={false}
          >
            {visibleThumbnails.map((idx, i) => (
              <motion.button
                key={`thumb-${idx}-${i}`}
                onClick={() => handleThumbnailClick(idx)}
                className={`shrink-0 w-[80px] h-[80px] overflow-hidden rounded transition-all duration-300 ${
                  currentIndex === idx
                    ? "border-2 border-white"
                    : "border border-neutral-600 opacity-70"
                }`}
                initial={{ opacity: currentIndex === idx ? 1 : 0.7 }}
                animate={{
                  opacity: currentIndex === idx ? 1 : 0.7,
                  borderColor:
                    currentIndex === idx ? "white" : "rgba(82, 82, 82, 0.5)",
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={images[idx] || ""}
                    alt={`Thumbnail ${idx}`}
                    fill
                    sizes="80px"
                    className="object-cover object-center"
                  />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
