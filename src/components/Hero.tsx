import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import ImageSlider from './ImageSlider';
import BookingPopup from './BookingPopup';

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const scrollToOffers = () => {
    const offersSection = document.getElementById('servicii-principale');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen">
      <ImageSlider onBookingClick={() => setIsBookingOpen(true)} />
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8 text-white" />
      </motion.div>

      <BookingPopup
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title="Rezervare la Padina Ursului"
      />
    </div>
  );
}