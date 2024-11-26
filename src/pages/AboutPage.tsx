import React, { useState } from 'react';
import { Mountain, Users, Star } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ImageModal from '../components/ImageModal';
import BookingPopup from '../components/BookingPopup';

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const mascotPhotos = [
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673effac689e4061c1f15140.jpeg",
      title: "Saint Bernard în zăpadă"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673f0109a6c4665d773fa790.jpeg",
      title: "Mascota noastră"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673f0193689e40c8eff15232.jpeg",
      title: "Saint Bernard pe munte"
    },
    {
      src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673f01ece03c11aa21cbfc40.jpeg",
      title: "Prietenul nostru credincios"
    }
  ];

  const testimonials = [
    {
      text: "Un loc minunat cu o atmosferă autentică și priveliști spectaculoase. Personalul este foarte amabil și serviciile sunt excelente.",
      author: "Maria & Andrei",
      date: "Decembrie 2023"
    },
    {
      text: "Am petrecut un weekend perfect aici. Camerele sunt spațioase și curate, iar mâncarea tradițională este delicioasă.",
      author: "Elena Popescu",
      date: "Noiembrie 2023"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <img
          src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67235294fa3cb74502f6aaa5.jpeg"
          alt="About Padina Ursului"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 hero-text-shadow">
              Despre Noi
            </h1>
            <p className="text-xl md:text-3xl text-white/90 hero-text-shadow max-w-3xl mx-auto">
              O poveste despre tradiție, familie și ospitalitate
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673f0519c34bae24a92e3325.jpeg"
                alt="Padina Ursului Story"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <span className="text-lg font-semibold">Din 1999</span>
                </div>
                <p className="text-sm text-gray-600">24 ani de tradiție</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Povestea Noastră</h2>
                <div className="w-20 h-1 bg-amber-800 rounded-full mb-6"></div>
              </div>

              <div className="prose prose-lg text-gray-600">
                <p>
                  Totul a început în 1999, când familia Radoi a avut un vis: să creeze un loc special unde 
                  ospitalitatea tradițională românească să se împletească cu frumusețea sălbatică a munților. 
                  Alegând cel mai înalt punct locuit din România, comuna Fundata, la 1.360 metri altitudine, 
                  au pus bazele a ceea ce avea să devină Padina Ursului.
                </p>
                <p>
                  De-a lungul anilor, complexul nostru s-a dezvoltat organic, păstrând mereu legătura cu 
                  natura și tradițiile locale. Cele trei clădiri ale noastre - Padina Ursului, Poiana Bradului 
                  și Tara - au fost construite cu respect pentru arhitectura tradițională, folosind materiale 
                  naturale și tehnici locale, adaptate pentru a oferi confortul modern pe care oaspeții noștri 
                  îl merită.
                </p>
                <p>
                  Poziționați strategic între masivele Bucegi și Piatra Craiului, am devenit nu doar un hotel, 
                  ci o poartă către experiențe autentice montane. Fiecare cameră, fiecare fereastră și fiecare 
                  terasă a fost gândită să încadreze priveliștile spectaculoase ale munților, oferind oaspeților 
                  noștri șansa de a se conecta cu natura în cel mai confortabil mod posibil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mascot Gallery Section */}
      <section className="py-24 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Mascota Noastră
            </h2>
            <p className="text-xl text-gray-600">
              Saint Bernard-ul nostru, simbolul ospitalității și prieteniei
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mascotPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(photo.src)}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-medium hero-text-shadow">
                    {photo.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Locație și Facilități</h2>
              <p className="text-xl text-gray-600">Experiență completă la 1.360m altitudine</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Mountain className="w-12 h-12 text-amber-800 mb-6" />
                <h3 className="text-xl font-bold mb-4">Locație Unică</h3>
                <p className="text-gray-600">
                  Situat în cel mai înalt punct locuit din România, între Bucegi și Piatra Craiului,
                  oferind priveliști spectaculoase și aer curat de munte.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Users className="w-12 h-12 text-amber-800 mb-6" />
                <h3 className="text-xl font-bold mb-4">Ospitalitate</h3>
                <p className="text-gray-600">
                  Echipă dedicată și atentă la detalii, păstrând vie tradiția ospitalității românești
                  în fiecare interacțiune cu oaspeții noștri.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Star className="w-12 h-12 text-amber-800 mb-6" />
                <h3 className="text-xl font-bold mb-4">Facilități Premium</h3>
                <p className="text-gray-600">
                  De la restaurant cu bucătărie tradițională la săli de conferințe moderne și piscină
                  interioară, oferim tot confortul necesar.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Ce Spun Oaspeții Noștri
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{testimonial.author}</span>
                  <span className="text-gray-500 text-sm">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
            Pregătit să Ne Vizitezi?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contactează-ne pentru o ofertă personalizată și descoperă farmecul Padinei Ursului!
          </p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="bg-amber-800 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-amber-900 transition-colors"
          >
            Solicită o Ofertă
          </button>
        </div>
      </section>

      <ImageModal
        image={selectedImage || ''}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />

      <BookingPopup
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title="Rezervare la Padina Ursului"
      />
    </div>
  );
}