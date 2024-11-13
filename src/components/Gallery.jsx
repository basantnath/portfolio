import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";
import { RiGalleryLine } from "react-icons/ri";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const photos = [
    {
      src: "/photo5.jpg",
      alt: "Sky & Clouds",
      location: "Sky & Clouds",
    },
    {
      src: "/photo4.jpeg",
      alt: "Morning view",
      location: "SudurPaschim",
    },
    {
      src: "/moon.jpg",
      alt: "Moon",
      location: "Moon",
    },

    {
      src: "/photo2.jpg",
      alt: "Somewhere in Hometown",
      location: "Somewhere in Hometown",
    },
    {
      src: "/photo1.jpg",
      alt: "Clouds",
      location: "Clouds",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  }, [photos.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
    );
  }, [photos.length]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      }
    },
    [nextSlide, prevSlide, isModalOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="max-w-[560px] mx-auto w-full p-4 text-center">
      <span className="s-p-button mb-1">
        <div className="flex items-center space-x-2 select-none">
          <span>Gallery</span>
          <span>
            <RiGalleryLine className="text-white" />
          </span>
        </div>
      </span>
      <p className="pro-con-cont text-spotlight mb-2 text-md">
        Snapping pics because nature can’t post its own selfies.
      </p>
      <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg shadow-lg bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white text-sm">{photos[currentIndex].location}</p>
        </div>
        <button
          className="absolute top-2 right-2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          onClick={() => setIsModalOpen(true)}
          aria-label="Zoom in"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
      </div>
      <div className="flex justify-between items-center">
        <button
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          onClick={prevSlide}
          aria-label="Previous photo"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="text-sm text-gray-600">
          {currentIndex + 1} / {photos.length}
        </div>
        <button
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          onClick={nextSlide}
          aria-label="Next photo"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-5 gap-2 mt-4">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative aspect-square overflow-hidden rounded-md ${
              index === currentIndex ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="max-w-[90vw] max-h-[90vh] relative">
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-2 right-2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
