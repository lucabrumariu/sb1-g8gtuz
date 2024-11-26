import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedButton from '../components/AnimatedButton';

export default function ThankYouPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.6 
            }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Check className="w-12 h-12 text-green-600" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Mulțumim pentru mesaj!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Am primit solicitarea dumneavoastră și vă vom contacta în cel mai scurt timp posibil.
            </p>

            <div className="space-y-4">
              <AnimatedButton
                onClick={() => navigate('/')}
                className="bg-amber-800 text-white px-8 py-3 rounded-md hover:bg-amber-900 transition-colors inline-flex items-center space-x-2"
              >
                Înapoi la Pagina Principală
              </AnimatedButton>

              <p className="text-sm text-gray-500">
                Dacă aveți întrebări urgente, ne puteți contacta la{' '}
                <a 
                  href="tel:+40722450265" 
                  className="text-amber-800 hover:text-amber-900 transition-colors"
                >
                  +40 722 450 265
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}