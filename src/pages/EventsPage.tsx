import React, { useState } from 'react';
import { Mountain, Users, Star, Calendar } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import BookingPopup from '../components/BookingPopup';
import ImageModal from '../components/ImageModal';

export default function EventsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const features = [
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Locație Spectaculoasă",
      description: "Priveliște panoramică asupra munților Bucegi și Piatra Craiului"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Coordonare Profesională",
      description: "Echipă dedicată pentru organizarea perfectă a evenimentului tău"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Servicii Premium",
      description: "Atenție la detalii și servicii personalizate pentru fiecare eveniment"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Pachete Personalizate",
      description: "Soluții adaptate nevoilor și preferințelor tale"
    }
  ];

  const eventTypes = [
    {
      title: "Nunți",
      description: "Transformă ziua ta specială într-o poveste de neuitat în inima munților",
      image: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673f104ac34baeea222e39ec.jpeg"
    },
    {
      title: "Evenimente Corporate",
      description: "Spații versatile și facilități moderne pentru evenimente de business",
      image: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67238758302d360e8e04b30c.jpeg"
    }
  ];

  const venues = [
    {
      name: "Sala Mare de Evenimente",
      image: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6733389ad6361abb04676a16.jpeg"
    },
    {
      name: "Terasă cu Vedere Panoramică",
      image: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673f1270e03c110430cc048c.jpeg"
    },
    {
      name: "Restaurant Principal",
      image: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673399d68609362c0a5f6db0.jpeg"
    },
    {
      name: "Spațiu pentru Evenimente în Aer Liber",
      image: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673f1296a6c46699783fb12f.jpeg"
    },
    {
      name: "Sală de Conferințe",
      image: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673f12bde03c117e73cc04a5.jpeg"
    },
    {
      name: "Zonă de Relaxare",
      image: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673f13aec34bae627a2e3add.jpeg"
    }
  ];

  const testimonials = [
    {
      quote: "Un loc perfect pentru evenimentul nostru! Priveliștea spectaculoasă și serviciile impecabile au făcut totul magic.",
      author: "Elena & Andrei",
      event: "Nuntă",
      date: "Septembrie 2023"
    },
    {
      quote: "Team building-ul nostru a fost un real succes. Facilitățile moderne și activitățile organizate au fost exact ce ne doream.",
      author: "Maria Popescu",
      event: "Evenimente Corporate",
      date: "Octombrie 2023"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-gray-900">
        <img
          src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6733956bd5e571b5b867e417.jpeg"
          alt="Events and Weddings"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 hero-text-shadow">
              Evenimente și Nunți
            </h1>
            <p className="text-xl md:text-3xl text-white/90 hero-text-shadow max-w-3xl mx-auto mb-8">
              Creează amintiri de neuitat în inima munților
            </p>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-amber-800 text-white px-8 py-3 rounded-md hover:bg-amber-900 transition-colors duration-300"
            >
              Planifică Evenimentul Tău
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                De ce să alegi Padina Ursului
              </h2>
              <p className="text-xl text-gray-600">
                Locația perfectă pentru evenimente memorabile
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-800 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="py-24 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                Tipuri de Evenimente
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventTypes.map((type, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 hero-text-shadow">
                        {type.title}
                      </h3>
                      <p className="text-white/90 hero-text-shadow">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                Spațiile Noastre
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {venues.map((venue, index) => (
                <div 
                  key={index} 
                  className="relative aspect-[4/3] group overflow-hidden rounded-lg shadow-lg bg-gray-100"
                  onClick={() => setSelectedImage(venue.image)}
                >
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white text-xl font-semibold hero-text-shadow">
                        {venue.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                Ce Spun Clienții Noștri
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="flex-1">
                      <div className="flex text-amber-400 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">
                        {testimonial.event} • {testimonial.date}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <p className="font-semibold">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Pregătit să Organizezi un Eveniment Memorabil?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contactează-ne pentru o ofertă personalizată și transformă viziunea ta în realitate!
            </p>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-amber-800 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-900 transition-colors"
            >
              Solicită o Ofertă
            </button>
          </AnimatedSection>
        </div>
      </section>

      <BookingPopup
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title="Rezervare Eveniment la Padina Ursului"
      />

      <ImageModal
        image={selectedImage || ''}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
}