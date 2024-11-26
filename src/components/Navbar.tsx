import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = () => {
    setIsOpen(false);
  };

  const handleBooking = () => {
    navigate('/contact');
    setIsOpen(false);
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <Link to="/" onClick={handleNavigation}>
              <img 
                src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673c3d1717d9a91acc443c7b.png"
                alt="Padina Ursului Logo" 
                className="h-16 w-16 object-contain"
              />
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/oferte-sarbatori" 
              className={`text-gray-700 hover:text-amber-800 ${location.pathname === '/oferte-sarbatori' ? 'text-amber-800' : ''}`}
            >
              Oferte de Sărbători
            </Link>
            <Link 
              to="/teambuilding"
              className={`text-gray-700 hover:text-amber-800 ${location.pathname === '/teambuilding' ? 'text-amber-800' : ''}`}
            >
              Teambuilding
            </Link>
            <Link 
              to="/evenimente-nunti"
              className={`text-gray-700 hover:text-amber-800 ${location.pathname === '/evenimente-nunti' ? 'text-amber-800' : ''}`}
            >
              Evenimente și Nunți
            </Link>
            <Link 
              to="/despre-noi"
              className={`text-gray-700 hover:text-amber-800 ${location.pathname === '/despre-noi' ? 'text-amber-800' : ''}`}
            >
              Despre Noi
            </Link>
            <Link 
              to="/cladiri-si-camere"
              className={`text-gray-700 hover:text-amber-800 ${location.pathname === '/cladiri-si-camere' ? 'text-amber-800' : ''}`}
            >
              Clădiri și Camere
            </Link>
            <Link 
              to="/galerie"
              className={`text-gray-700 hover:text-amber-800 ${location.pathname === '/galerie' ? 'text-amber-800' : ''}`}
            >
              Galerie Foto
            </Link>
            <Link 
              to="/blog"
              className={`text-gray-700 hover:text-amber-800 ${location.pathname === '/blog' ? 'text-amber-800' : ''}`}
            >
              Blog
            </Link>
            <Link 
              to="/contact"
              className={`text-gray-700 hover:text-amber-800 ${location.pathname === '/contact' ? 'text-amber-800' : ''}`}
            >
              Contact
            </Link>
            <button
              onClick={handleBooking}
              className="bg-amber-800 text-white px-6 py-2 rounded-md hover:bg-amber-900 transition"
            >
              Rezervă Acum
            </button>
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
          >
            {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t">
          <Link 
            to="/oferte-sarbatori" 
            className="block px-3 py-2 text-gray-700 hover:bg-amber-50"
            onClick={handleNavigation}
          >
            Oferte de Sărbători
          </Link>
          <Link 
            to="/teambuilding"
            className="block px-3 py-2 text-gray-700 hover:bg-amber-50"
            onClick={handleNavigation}
          >
            Teambuilding
          </Link>
          <Link 
            to="/evenimente-nunti"
            className="block px-3 py-2 text-gray-700 hover:bg-amber-50"
            onClick={handleNavigation}
          >
            Evenimente și Nunți
          </Link>
          <Link 
            to="/despre-noi"
            className="block px-3 py-2 text-gray-700 hover:bg-amber-50"
            onClick={handleNavigation}
          >
            Despre Noi
          </Link>
          <Link 
            to="/cladiri-si-camere"
            className="block px-3 py-2 text-gray-700 hover:bg-amber-50"
            onClick={handleNavigation}
          >
            Clădiri și Camere
          </Link>
          <Link 
            to="/galerie"
            className="block px-3 py-2 text-gray-700 hover:bg-amber-50"
            onClick={handleNavigation}
          >
            Galerie Foto
          </Link>
          <Link 
            to="/blog"
            className="block px-3 py-2 text-gray-700 hover:bg-amber-50"
            onClick={handleNavigation}
          >
            Blog
          </Link>
          <Link 
            to="/contact"
            className="block px-3 py-2 text-gray-700 hover:bg-amber-50"
            onClick={handleNavigation}
          >
            Contact
          </Link>
          <button
            onClick={handleBooking}
            className="w-full px-3 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-900 transition text-center mt-2"
          >
            Rezervă Acum
          </button>
        </div>
      </div>
    </nav>
  );
}