import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">
            <p>
              Acest site web folosește cookie-uri pentru a vă îmbunătăți experiența de navigare.
              Prin continuarea navigării, vă exprimați acordul pentru utilizarea acestora.
              Pentru mai multe detalii, consultați{' '}
              <Link to="/politica-cookies" className="underline hover:text-amber-400">
                Politica de Cookie-uri
              </Link>{' '}
              și{' '}
              <Link to="/politica-confidentialitate" className="underline hover:text-amber-400">
                Politica de Confidențialitate
              </Link>.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handleAccept}
              className="bg-amber-800 text-white px-6 py-2 rounded-md hover:bg-amber-900 transition-colors whitespace-nowrap"
            >
              Accept Cookie-uri
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}