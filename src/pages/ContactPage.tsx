import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/40722450265', '_blank');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gray-900">
        <img
          src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67235294fa3cb74502f6aaa5.jpeg"
          alt="Contact Us"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 hero-text-shadow">
              Contact
            </h1>
            <p className="text-xl md:text-3xl text-white/90 hero-text-shadow max-w-3xl mx-auto">
              Suntem aici să vă ajutăm
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Informații de Contact
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-amber-800 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Locație</h3>
                    <p className="text-gray-600">DJ730A Fundăţica, Fundata Brasov</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-amber-800 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Telefon</h3>
                    <p className="text-gray-600">+40 722 450 265</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-amber-800 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">office@padinaursului.com</p>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 w-full justify-center mt-8"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Contactează-ne pe WhatsApp</span>
                </button>
              </div>

              {/* Map */}
              <div className="mt-12">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Locație
                </h2>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <div style={{ width: '100%', height: '450px', position: 'relative' }}>
                    <iframe 
                      src="https://maps.google.com/maps?q=Padina%20Ursului%20Fund%C4%83%C5%A3ica%2C%20Fundata%20Brasov&t=&z=12&ie=UTF8&iwloc=&output=embed"
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        border: 0,
                        position: 'absolute',
                        top: 0,
                        left: 0
                      }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                Trimite-ne un Mesaj
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '655px' }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/hAeYSJpiTD9e5g3cQFBy"
                  style={{ 
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '0.75rem'
                  }}
                  id="inline-hAeYSJpiTD9e5g3cQFBy" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Form webiste Contact"
                  data-height="655"
                  data-layout-iframe-id="inline-hAeYSJpiTD9e5g3cQFBy"
                  data-form-id="hAeYSJpiTD9e5g3cQFBy"
                  title="Form webiste Contact"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}