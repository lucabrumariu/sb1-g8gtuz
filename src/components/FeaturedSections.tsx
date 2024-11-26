import React from 'react';
import { Gift, Users, GlassWater } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedSections() {
  const sections = [
    {
      id: 'oferte',
      title: 'Oferte de Sărbători',
      description: 'Pachete speciale pentru sărbători cu experiențe tradiționale românești și mese festive.',
      image: 'https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/672395b207b38e2d78db7bb8.jpeg',
      icon: <Gift className="w-6 h-6" />,
      cta: 'Vezi Ofertele',
      link: '/oferte-sarbatori'
    },
    {
      id: 'teambuilding',
      title: 'Teambuilding',
      description: 'Activități de grup și facilități moderne pentru evenimente corporate memorabile.',
      image: 'https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67238758302d360e8e04b30c.jpeg',
      icon: <Users className="w-6 h-6" />,
      cta: 'Află Mai Multe',
      link: '/teambuilding'
    },
    {
      id: 'evenimente',
      title: 'Evenimente și Nunți',
      description: 'Locația perfectă pentru cele mai importante momente din viața ta.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      icon: <GlassWater className="w-6 h-6" />,
      cta: 'Planifică Evenimentul',
      link: '/evenimente-nunti'
    }
  ];

  return (
    <section id="servicii-principale" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Servicii Principale</h2>
          <p className="text-xl text-gray-600">Experiențe autentice în inima munților</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div 
              key={section.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="mb-4 p-3 bg-white/10 backdrop-blur-sm rounded-full w-fit">
                  {section.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{section.title}</h3>
                <p className="text-white/90 mb-4 line-clamp-2">{section.description}</p>
                <Link
                  to={section.link}
                  className="w-full bg-white/10 backdrop-blur-sm text-white py-2 px-4 rounded-md hover:bg-white/20 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>{section.cta}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}