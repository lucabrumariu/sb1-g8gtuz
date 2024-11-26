import React, { useState } from 'react';
import { Users, Building2, Mountain, Utensils, Waves, Flame } from 'lucide-react';
import TeamGallery from '../components/TeamGallery';
import ClientTestimonials from '../components/ClientTestimonials';
import BookingPopup from '../components/BookingPopup';

export default function Teambuilding() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const advantages = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Exclusivitate pentru Echipa Ta",
      description: "Acces complet la întreaga proprietate și facilități, fără alți oaspeți."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Săli de Conferință Moderne",
      description: "Patru săli complet echipate, adaptabile pentru diverse nevoi."
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Activități în Aer Liber",
      description: "Drumeții ghidate, plimbări cu ATV-ul și activități de grup care încurajează colaborarea."
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Mese Tradiționale și Internaționale",
      description: "Trei restaurante cu preparate delicioase, ideale pentru socializare."
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Piscină pentru Relaxare",
      description: "Piscină interioară încălzită pentru relaxare după o zi de activități."
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Seri la Foc de Tabără",
      description: "Seri tradiționale la foc de tabără cu povești și relaxare în aer liber."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-gray-900">
        <img
          src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67238e76fed856ac4d49ec85.jpeg"
          alt="Team Building"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 hero-text-shadow">
              Team Building la Padina Ursului
            </h1>
            <p className="text-xl md:text-3xl text-white/90 hero-text-shadow max-w-3xl mx-auto">
              Transformă-ți echipa într-o adevărată familie, departe de agitația orașului!
            </p>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              De ce să alegi Padina Ursului pentru Team Building
            </h2>
            <p className="text-xl text-gray-600">
              Experiențe unice într-un cadru natural spectaculos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-amber-100 rounded-full text-amber-800 mr-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{advantage.title}</h3>
                </div>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <TeamGallery />

      {/* Client Testimonials */}
      <ClientTestimonials />

      {/* CTA Section */}
      <section className="py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Pregătit să organizezi un Team Building memorabil?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contactează-ne pentru o ofertă personalizată și transformă-ți echipa într-o forță unită!
          </p>
          <button 
            onClick={() => setIsBookingOpen(true)}
            className="bg-amber-800 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-900 transition-colors"
          >
            SOLICITĂ O OFERTĂ
          </button>
        </div>
      </section>

      <BookingPopup
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title="Rezervare la Padina Ursului"
      />
    </div>
  );
}