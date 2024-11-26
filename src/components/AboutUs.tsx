import React from 'react';
import { Mountain, Star, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <section id="despre" className="py-24 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Link to="/galerie" className="block">
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden group">
                <img
                  src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/672354d2fa3cb724aef6ab99.svg"
                  alt="Padina Ursului Hotel"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
              <Link to="/blog" className="block group">
                <div className="flex items-center space-x-2">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                    alt="Google"
                    className="w-5 h-5"
                  />
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <span className="text-lg font-semibold group-hover:text-amber-800 transition-colors">4.6/5</span>
                </div>
                <p className="text-sm text-gray-600">Din 450+ review-uri</p>
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Despre Padina Ursului</h2>
              <div className="w-20 h-1 bg-amber-800 rounded-full mb-6"></div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Situat în pitorescul sat <Link to="/blog/fundata-destinatia-perfecta-relaxare-muntii-carpati" className="text-amber-800 hover:text-amber-900 transition-colors">Fundata, la o altitudine de 1360m</Link>, Padina Ursului este mai mult decât un hotel - este o poartă către tradiția și natura Carpaților românești.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/despre-noi" className="flex items-start space-x-3 group">
                <Mountain className="w-6 h-6 text-amber-800 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-amber-800 transition-colors">Locație Unică</h3>
                  <p className="text-gray-600">Între Bucegi și Piatra Craiului</p>
                </div>
              </Link>
              <Link to="/evenimente-nunti" className="flex items-start space-x-3 group">
                <Heart className="w-6 h-6 text-amber-800 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-amber-800 transition-colors">Ospitalitate</h3>
                  <p className="text-gray-600">Tradiție și căldură</p>
                </div>
              </Link>
              <Link to="/blog" className="flex items-start space-x-3 group">
                <Star className="w-6 h-6 text-amber-800 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold mb-1 group-hover:text-amber-800 transition-colors">Experiență</h3>
                  <p className="text-gray-600">15+ ani de excelență</p>
                </div>
              </Link>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Îmbinăm perfect <Link to="/cladiri-si-camere" className="text-amber-800 hover:text-amber-900 transition-colors">confortul modern cu arhitectura tradițională românească</Link>, oferind oaspeților noștri o experiență autentică în inima munților.
            </p>

            <button 
              onClick={() => navigate('/despre-noi')}
              className="bg-amber-800 text-white px-8 py-3 rounded-md hover:bg-amber-900 transition-colors duration-300 flex items-center space-x-2"
            >
              <span>Descoperă Povestea Noastră</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}