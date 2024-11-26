import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
          <img 
            src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6732f4f67f10cd482d3040f8.png"
            alt="Padina Ursului Logo" 
            className="h-32 w-32 object-contain"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Padina Ursului</h3>
            <p className="text-gray-400">
              DJ730A Fundăţica, Fundata Brasov<br />
              România
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">
              Tel: +40 722 450 265<br />
              Email: office@padinaursului.com
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Link-uri Rapide</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/galerie" className="text-gray-400 hover:text-white transition-colors">
                  Galerie
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/padinaursului" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://www.youtube.com/@RadoiMarian-kf4bp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* ANPC Icons */}
        <div className="flex justify-center mt-8 space-x-4">
          <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="nofollow noopener noreferrer">
            <img 
              src="https://e-advertising.co/anpc/eadv-sal.svg" 
              alt="Alternative Dispute Resolution" 
              className="w-[250px] h-[50px]"
            />
          </a>
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="nofollow noopener noreferrer">
            <img 
              src="https://e-advertising.co/anpc/eadv-sol.svg" 
              alt="Online Dispute Resolution" 
              className="w-[250px] h-[50px]"
            />
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
            <Link to="/politica-confidentialitate" className="hover:text-white transition-colors">
              Politica de Confidențialitate
            </Link>
            <Link to="/politica-cookies" className="hover:text-white transition-colors">
              Politica de Cookie-uri
            </Link>
            <Link to="/termeni-conditii" className="hover:text-white transition-colors">
              Termeni și Condiții
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Padina Ursului. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}