import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Gift } from 'lucide-react';
import HolidayGallery from '../components/HolidayGallery';
import BookingPopup from '../components/BookingPopup';
import SEOHead from '../components/SEOHead';

export default function HolidayOffers() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  // Event Schema for special offers
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Sărbători la Padina Ursului - Crăciun și Revelion 2024",
    "description": "Petreceți sărbătorile de iarnă într-un cadru montan spectaculos la Padina Ursului. Pachete speciale pentru Crăciun și Revelion cu mese festive, activități tradiționale și multe surprize.",
    "image": "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673b15f9f980e121fa775eef.jpeg",
    "startDate": "2024-12-23",
    "endDate": "2025-01-02",
    "location": {
      "@type": "Place",
      "name": "Hotel Padina Ursului",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "DJ730A Fundăţica",
        "addressLocality": "Fundata",
        "addressRegion": "Brașov",
        "postalCode": "507070",
        "addressCountry": "RO"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "1500",
      "priceCurrency": "RON",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-11-01"
    },
    "organizer": {
      "@type": "Organization",
      "name": "Padina Ursului",
      "url": "https://padinaursului.ro"
    }
  };

  const packages = [
    {
      title: "OFERTA DE CRĂCIUN 2024",
      image: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6732174e4ded806cd6e21d40.png",
      period: "23-26 decembrie",
      duration: "3 nopți, 4 zile",
      location: "Fundata, Fundățica – Cabana Padina Ursului",
      price: "1500 RON",
      perPerson: true,
      includes: [
        "All-Inclusive, cu toate mesele servite tip bufet suedez",
        "Meniu de prânz și cină – două ciorbe/supe, două feluri de bază, două garnituri, patru tipuri de salate, desert și fructe",
        "Masă festivă de Crăciun – preparate tradiționale (inclusiv opțiuni vegetariene)",
        "Activități tradiționale – Pe 24 decembrie, prepararea porcului de casă",
        "Cina festivă din 25 decembrie – cu muzică DJ și atmosferă sărbătorească"
      ],
      drinks: [
        "Cafea, ceai, ciocolată caldă",
        "Apă minerală, sucuri",
        "Bere draft",
        "Vin alb/roșu/roze",
        "Votcă, gin tonic, și multe altele"
      ],
      children: [
        "Până la 4 ani – Gratuit",
        "Între 5-9 ani – 40% din tarif",
        "Între 10-14 ani – 60% din tarif"
      ]
    },
    {
      title: "OFERTA DE REVELION 2025",
      image: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673217546a3aeee676d0080f.png",
      period: "30 decembrie 2024 - 2 ianuarie 2025",
      duration: "3 nopți",
      location: "Fundata, Fundățica – Cabana Padina Ursului",
      price: "550 EUR",
      perPerson: true,
      includes: [
        "All-Inclusive, pachet de 3 nopți",
        "Cazare în camere duble twin sau camere duble twin cu pat suplimentar",
        "Mic dejun, prânz, și cină – Toate mesele servite în sistem bufet suedez",
        "Meniu variat la prânz și cină (30-31 decembrie și 1 ianuarie)",
        "Cină festivă în seara de 31 decembrie cu servire individuală",
        "Cină tradițională cu barbeque în seara de 1 ianuarie",
        "Petrecere cu DJ și program artistic",
        "Program artistic: Ansamblul de copii Mugurelul din Râșnov"
      ],
      drinks: [
        "Țuică, țuică fiartă, vișinată",
        "Bere draft",
        "Vin alb/roșu/roze la carafă",
        "Sucuri, apă minerală",
        "Cafea și ceai"
      ]
    }
  ];

  const handleBooking = (packageTitle: string) => {
    setSelectedPackage(packageTitle);
    setIsBookingOpen(true);
  };

  return (
    <div className="pt-20">
      <SEOHead 
        title="Oferte de Sărbători - Crăciun și Revelion la Padina Ursului"
        description="Descoperă pachetele noastre speciale pentru sărbătorile de iarnă. Crăciun și Revelion de neuitat în inima munților, cu mese festive și activități tradiționale."
        schema={eventSchema}
      />

      {/* Hero Section */}
      <div className="relative h-[80vh] bg-gray-900">
        <img
          src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673b15f9f980e121fa775eef.jpeg"
          alt="Holiday Offers"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 hero-text-shadow">
              Oferte de Sărbători
            </h1>
            <p className="text-xl md:text-3xl text-white/90 hero-text-shadow max-w-3xl mx-auto">
              Sărbători de poveste în inima munților
            </p>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {packages.map((pkg, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2 flex items-center justify-center">
                  <div className="relative w-full h-full max-h-[600px] flex items-center justify-center">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                    <h2 className="text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-6">
                      {pkg.title}
                    </h2>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-amber-800 mr-3" />
                        <span className="text-gray-600">{pkg.period}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-amber-800 mr-3" />
                        <span className="text-gray-600">{pkg.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-amber-800 mr-3" />
                        <span className="text-gray-600">{pkg.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Gift className="w-5 h-5 text-amber-800 mr-3" />
                        <span className="text-xl font-semibold text-amber-800">
                          {pkg.price}{pkg.perPerson ? '/persoană' : ''}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Include:</h3>
                        <ul className="space-y-2">
                          {pkg.includes.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-amber-800 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3">Băuturi incluse:</h3>
                        <ul className="space-y-2">
                          {pkg.drinks.map((drink, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-amber-800 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              <span className="text-gray-600 text-sm leading-relaxed">{drink}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {pkg.children && (
                        <div>
                          <h3 className="text-lg font-semibold mb-3">Tarife copii:</h3>
                          <ul className="space-y-2">
                            {pkg.children.map((rate, i) => (
                              <li key={i} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-amber-800 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                <span className="text-gray-600 text-sm leading-relaxed">{rate}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="mt-8">
                      <button 
                        onClick={() => handleBooking(pkg.title)}
                        className="w-full bg-amber-800 text-white py-3 rounded-md hover:bg-amber-900 transition-colors duration-300"
                      >
                        Rezervă Acum
                      </button>
                      <p className="text-sm text-gray-500 mt-2 text-center">
                        * Rezervarea necesită un avans de 50%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <HolidayGallery />

      {/* Booking Popup */}
      <BookingPopup
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title={`Rezervare - ${selectedPackage}`}
      />
    </div>
  );
}