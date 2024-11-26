import React, { useState } from 'react';
import ImageModal from './ImageModal';

export default function HolidayGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6732fc6970d7a3bd1c18ef6b.jpeg",
      alt: "Sărbători la Padina Ursului"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67239285d24347098fc226a0.jpeg",
      alt: "Atmosferă festivă"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67239185fa3cb757bcf73694.jpeg",
      alt: "Momente speciale"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/672394783029c74d1a572b36.jpeg",
      alt: "Experiențe memorabile"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/672395ef302d36644904bc5f.jpeg",
      alt: "Tradiții și sărbători"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/672392b2681f102e6c634572.jpeg",
      alt: "Magia sărbătorilor"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/672395b207b38e2d78db7bb8.jpeg",
      alt: "Peisaj de iarnă"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6723914bc78f65106faf7ee5.jpeg",
      alt: "Sărbători în familie"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67339aa517f51acf51973b45.jpeg",
      alt: "Momente de bucurie"
    }
  ];

  return (
    <section className="py-24 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Galerie Foto
          </h2>
          <p className="text-xl text-gray-600">
            Momente magice din sărbătorile petrecute la Padina Ursului
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-medium hero-text-shadow">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageModal
        image={selectedImage || ''}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}