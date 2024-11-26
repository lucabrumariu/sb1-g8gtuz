import React, { useState } from 'react';
import { Users } from 'lucide-react';
import BookingPopup from '../components/BookingPopup';
import ImageSlider from '../components/ImageSlider';
import SEOHead from '../components/SEOHead';

export default function BuildingsAndRooms() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');

  const buildings = [
    {
      name: "Clădirea 1 - Padina Ursului",
      description: "Clădirea principală unde confortul întâlnește natura. Având acces rapid la restaurant, piscină, și săli de conferințe prin holuri interioare, veți găsi aici toate facilitățile necesare pentru un sejur relaxant.",
      rooms: [
        {
          name: "Cameră Twin Superioară",
          capacity: "2 persoane",
          description: "Cameră spațioasă cu două paturi single, perfectă pentru cazarea confortabilă a două persoane.",
          image: "https://assets.cdn.filesafe.space/BUDOoFs5MZBtFKZgnqnl/media/6731ae5970d7a3c04016ddb6.jpeg",
          amenities: ["TV Smart", "Wi-Fi", "Mini-bar", "Baie privată", "Vedere la munte"]
        },
        {
          name: "Apartament cu 2 Camere Suite",
          capacity: "4 persoane",
          description: "Apartament elegant cu două dormitoare separate și living, ideal pentru familii sau grupuri mici.",
          images: [
            "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/674599024df7980087fa2076.jpeg",
            "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/674599124df7980db0fa2079.jpeg"
          ],
          amenities: ["TV Smart", "Wi-Fi", "Mini-bar", "Baie privată", "Vedere la munte", "Living separat"]
        },
        {
          name: "Cameră Triplă Premium",
          capacity: "3 persoane",
          description: "Cameră premium cu trei paturi single, oferind confort și spațiu pentru trei persoane.",
          image: "https://assets.cdn.filesafe.space/BUDOoFs5MZBtFKZgnqnl/media/673316767f10cd366930c237.jpeg",
          amenities: ["TV Smart", "Wi-Fi", "Mini-bar", "Baie privată", "Vedere la munte"]
        },
        {
          name: "Cameră de Familie",
          capacity: "4 persoane",
          description: "Cameră spațioasă ideală pentru familii, cu pat matrimonial și două paturi single.",
          image: "https://assets.cdn.filesafe.space/BUDOoFs5MZBtFKZgnqnl/media/6731af389571506fa205ca15.jpeg",
          amenities: ["TV Smart", "Wi-Fi", "Mini-bar", "Baie privată", "Vedere la munte"]
        }
      ]
    },
    {
      name: "Clădirea 2 - Poiana Bradului",
      description: "Clădirea secundară unde confortul întâlnește natura. Având acces rapid la restaurant, piscină, și săli de conferințe prin holuri interioare, veți găsi aici toate facilitățile necesare pentru un sejur relaxant.",
      rooms: [
        {
          name: "Cameră Deluxe Twin",
          capacity: "2 persoane",
          description: "Cameră deluxe cu două paturi single și design modern, perfectă pentru confort maxim.",
          image: "https://assets.cdn.filesafe.space/BUDOoFs5MZBtFKZgnqnl/media/673323aa70d7a3b18b19eab5.jpeg",
          amenities: ["TV Smart", "Wi-Fi", "Mini-bar", "Baie privată", "Vedere la munte"]
        },
        {
          name: "Junior Suite",
          capacity: "2 adulți + 1 copil",
          description: "Suite elegantă cu zonă de dormit și living, ideală pentru un sejur relaxant în familie.",
          image: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673f16825694674faf5d2217.jpeg",
          amenities: ["TV Smart", "Wi-Fi", "Mini-bar", "Baie privată", "Vedere la munte", "Zonă de living"]
        },
        {
          name: "Premium Suite",
          capacity: "2 persoane",
          description: "Suite premium perfectă pentru cupluri, oferind intimitate și confort deosebit.",
          image: "https://assets.cdn.filesafe.space/BUDOoFs5MZBtFKZgnqnl/media/673316767f10cd366930c237.jpeg",
          amenities: ["TV Smart", "Wi-Fi", "Mini-bar", "Baie privată", "Vedere la munte", "Zonă de relaxare"]
        }
      ]
    },
    {
      name: "Clădirea 3 - Tara",
      description: "Clădirea ce îmbină arhitectura tradițională cu facilitățile moderne, oferind o experiență autentică în inima munților. Având acces rapid la restaurant, piscină, și săli de conferințe prin holuri interioare, veți găsi aici toate facilitățile necesare pentru un sejur relaxant.",
      rooms: [
        {
          name: "Cameră Twin cu Balcon Terasă",
          capacity: "2 persoane",
          description: "Cameră cu două paturi single și balcon spațios cu vedere panoramică.",
          image: "https://assets.cdn.filesafe.space/BUDOoFs5MZBtFKZgnqnl/media/6733234070d7a3666519ea87.jpeg",
          amenities: ["TV Smart", "Wi-Fi", "Mini-bar", "Baie privată", "Balcon privat", "Vedere la munte"]
        },
        {
          name: "Cameră Twin Standard fără Balcon",
          capacity: "2 persoane",
          description: "Cameră confortabilă cu două paturi single, amenajată în stil tradițional.",
          image: "https://assets.cdn.filesafe.space/BUDOoFs5MZBtFKZgnqnl/media/673322e970d7a34ef919ea5f.jpeg",
          amenities: ["TV Smart", "Wi-Fi", "Mini-bar", "Baie privată", "Vedere la munte"]
        },
        {
          name: "Cameră Twin la Mansardă",
          capacity: "2 persoane",
          description: "Cameră twin situată la mansardă, oferind o atmosferă rustică și intimă.",
          image: "https://assets.cdn.filesafe.space/BUDOoFs5MZBtFKZgnqnl/media/673322e970d7a34ef919ea5f.jpeg",
          amenities: ["TV Smart", "Wi-Fi", "Mini-bar", "Baie privată", "Vedere la munte"]
        },
        {
          name: "Cameră Dublă cu Pat Matrimonial la Mansardă",
          capacity: "2 persoane",
          description: "Cameră romantică la mansardă cu pat matrimonial, perfectă pentru cupluri.",
          image: "https://assets.cdn.filesafe.space/BUDOoFs5MZBtFKZgnqnl/media/6733234070d7a3666519ea87.jpeg",
          amenities: ["TV Smart", "Wi-Fi", "Mini-bar", "Baie privată", "Vedere la munte"]
        }
      ]
    }
  ];

  const handleBooking = (roomName: string) => {
    setSelectedRoom(roomName);
    setIsBookingOpen(true);
  };

  return (
    <div className="pt-20">
      <SEOHead 
        title="Clădiri și Camere - Padina Ursului"
        description="Descoperiți camerele și facilitățile noastre moderne, perfect integrate în peisajul montan. Alegerea perfectă pentru un sejur confortabil în Fundata."
      />

      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <img
          src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67235294fa3cb74502f6aaa5.jpeg"
          alt="Buildings and Rooms"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 hero-text-shadow">
              Clădiri și Camere
            </h1>
            <p className="text-xl md:text-3xl text-white/90 hero-text-shadow max-w-3xl mx-auto">
              Confort și tradiție în inima munților
            </p>
          </div>
        </div>
      </div>
      
      {/* Buildings Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {buildings.map((building, buildingIndex) => (
              <div key={buildingIndex}>
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                    {building.name}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                    {building.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {building.rooms.map((room, roomIndex) => (
                    <div key={roomIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="aspect-video relative">
                        {'images' in room ? (
                          <ImageSlider images={room.images} />
                        ) : (
                          <img
                            src={room.image}
                            alt={room.name}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
                        <div className="flex items-center mb-4">
                          <Users className="w-5 h-5 text-amber-800 mr-2" />
                          <span className="text-gray-600">{room.capacity}</span>
                        </div>
                        <p className="text-gray-600 mb-4">{room.description}</p>
                        <div className="space-y-2 mb-6">
                          {room.amenities.map((amenity, index) => (
                            <div key={index} className="flex items-center text-gray-600">
                              <span className="w-1.5 h-1.5 bg-amber-800 rounded-full mr-2"></span>
                              <span>{amenity}</span>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={() => handleBooking(room.name)}
                          className="w-full bg-amber-800 text-white py-3 rounded-md hover:bg-amber-900 transition-colors"
                        >
                          Rezervă Acum
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingPopup
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title={`Rezervare - ${selectedRoom}`}
      />
    </div>
  );
}