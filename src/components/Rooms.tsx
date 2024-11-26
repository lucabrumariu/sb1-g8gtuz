import React from 'react';

export default function Rooms() {
  const rooms = [
    {
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      title: "Apartament Panoramic",
      price: "900 RON",
      description: "Apartament spațios cu vedere panoramică spre munți, perfect pentru familii",
      features: ["Vedere panoramică", "Terasă privată", "Living separat", "Șemineu"]
    },
    {
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      title: "Camera Tradițională",
      price: "500 RON",
      description: "Cameră dublă în stil tradițional românesc cu balcon privat",
      features: ["Balcon privat", "Mobilier tradițional", "Baie modernă", "Mini bar"]
    },
    {
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      title: "Suite Deluxe",
      price: "750 RON",
      description: "Suită elegantă cu zonă de relaxare și facilități premium",
      features: ["Cadă cu hidromasaj", "Zonă de relaxare", "Room service", "Smart TV"]
    }
  ];

  return (
    <section id="camere" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Cazare</h2>
          <p className="text-xl text-gray-600">Confort și tradiție la înălțime</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="relative">
                <img src={room.image} alt={room.title} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 bg-amber-800 text-white px-4 py-1 rounded-full">
                  de la {room.price}/noapte
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <ul className="mb-6 space-y-2">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-amber-800 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-amber-800 text-white py-2 rounded hover:bg-amber-900 transition">
                  Rezervă Acum
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}