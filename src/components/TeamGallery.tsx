import React, { useState } from 'react';
import ImageModal from './ImageModal';

export default function TeamGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67238758302d360e8e04b30c.jpeg",
      alt: "Team Building Activities"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67332fa0d6361a64c46742be.jpeg",
      alt: "Conference Room"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67332d6af9060c688c0a6cd8.jpeg",
      alt: "Outdoor Activities"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/672391d27253cd6456126735.jpeg",
      alt: "Team Dining"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6723914bc78f65106faf7ee5.jpeg",
      alt: "Evening Events"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67249864dd2b8086b258be31.jpeg",
      alt: "Team Building Moments"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Galerie Team Building
          </h2>
          <p className="text-xl text-gray-600">
            Momente memorabile din experiențele echipelor la Padina Ursului
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