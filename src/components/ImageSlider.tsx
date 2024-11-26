import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from './AnimatedButton';

interface ImageSliderProps {
  onBookingClick: () => void;
}

const slides = [
  {
    image: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67339150ebe012476de67008.jpeg",
    title: "Experiență Autentică în Fundata",
    subtitle: "Tradiție și confort în inima munților"
  },
  {
    image: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67330aa510cace34117f48cb.jpeg",
    title: "Momente de Neuitat",
    subtitle: "Evenimente speciale într-un cadru spectaculos"
  },
  {
    image: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673b15f9f980e121fa775eef.jpeg",
    title: "Relaxare la Înălțime",
    subtitle: "Oază de liniște în mijlocul naturii"
  }
];

export default function ImageSlider({ onBookingClick }: ImageSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToOffers = () => {
    const offersSection = document.getElementById('servicii-principale');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              transition: { duration: 2 }
            }}
            exit={{ opacity: 0, transition: { duration: 2 } }}
            className={`absolute inset-0 transition-opacity ${
              index === currentSlide ? 'z-10' : 'z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
            
            {index === currentSlide && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
              >
                <div className="mb-8">
                  <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 hero-text-shadow">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-3xl text-white/90 font-light hero-text-shadow">
                    {slide.subtitle}
                  </p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                  <AnimatedButton
                    onClick={onBookingClick}
                    className="btn-primary text-lg px-8 py-3"
                    glowing={true}
                  >
                    Rezervă Acum
                  </AnimatedButton>
                  <AnimatedButton
                    onClick={scrollToOffers}
                    className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-md text-lg hover:bg-white/20"
                  >
                    Vezi Ofertele
                  </AnimatedButton>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}