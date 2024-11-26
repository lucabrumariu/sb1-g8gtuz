import React from 'react';
import { Mountain, Utensils, PartyPopper, Building, Gift, Wine, Snowflake, Waves, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Features() {
  const features = [
    {
      icon: <Mountain className="h-8 w-8" />,
      title: "Locație Spectaculoasă",
      description: "La 1360m altitudine, cu priveliști panoramice asupra munților Bucegi și Piatra Craiului",
      link: "/despre-noi"
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Bucătărie Tradițională",
      description: "Preparate autentice românești cu ingrediente locale de sezon",
      link: "/evenimente-nunti"
    },
    {
      icon: <PartyPopper className="h-8 w-8" />,
      title: "Organizare Evenimente",
      description: "Servicii complete pentru organizarea evenimentelor speciale",
      link: "/evenimente-nunti"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Săli de Conferințe",
      description: "Spații moderne pentru conferințe și evenimente corporate",
      link: "/teambuilding"
    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Pachete Sărbători",
      description: "Oferte speciale pentru sărbători și ocazii deosebite",
      link: "/oferte-sarbatori"
    },
    {
      icon: <Wine className="h-8 w-8" />,
      title: "Cramă Selectă",
      description: "Colecție impresionantă de vinuri românești și internaționale",
      link: "/evenimente-nunti"
    },
    {
      icon: <Snowflake className="h-8 w-8" />,
      title: "Activități Sezoniere",
      description: "Schi, drumeții și activități montane în toate anotimpurile",
      link: "/blog/top-5-activitati-neuitat-padina-ursului"
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Piscină Încălzită",
      description: "Relaxare și răsfăț în piscina noastră interioară încălzită",
      link: "/cladiri-si-camere"
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Parcare Privată",
      description: "Parcare privată gratuită pentru oaspeții noștri",
      link: "/contact"
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Facilități & Servicii</h2>
          <p className="text-xl text-gray-600">Experiență completă în inima naturii</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link 
              key={index} 
              to={feature.link}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-amber-100 rounded-full text-amber-800 mr-4 group-hover:bg-amber-200 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-amber-800 transition-colors">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}