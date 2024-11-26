import React, { useState } from 'react';
import ImageModal from '../components/ImageModal';
import BookingPopup from '../components/BookingPopup';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const galleryCategories = [
    {
      title: "Peisaje și Împrejurimi",
      description: "Priveliști spectaculoase din jurul hotelului",
      images: [
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67339150ebe012476de67008.jpeg",
          title: "Peisaj Montan"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67330aa510cace34117f48cb.jpeg",
          title: "Vedere Panoramică"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67247a9d593dcc9f6b5339ca.jpeg",
          title: "Peisaj de Iarnă"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67330aa510cace34117f48cb.jpeg",
          title: "Natură Sălbatică"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67247a92d5c2466e5ece27aa.jpeg",
          title: "Munții Bucegi"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67339150ebe012476de67008.jpeg",
          title: "Priveliște Montană"
        }
      ]
    },
    {
      title: "Restaurant",
      description: "Experiențe culinare autentice",
      images: [
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673399d68609362c0a5f6db0.jpeg",
          title: "Restaurant Principal"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67339876ebe0121ff9e67666.jpeg",
          title: "Zona de Dining"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6723969fa6a75243115d022b.jpeg",
          title: "Preparate Tradiționale"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67339aa517f51acf51973b45.jpeg",
          title: "Bucătărie Locală"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67339a1082e6362e57565372.jpeg",
          title: "Atmosferă Rustică"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67249564d5c2463762ce3297.jpeg",
          title: "Servire Impecabilă"
        }
      ]
    },
    {
      title: "Spații de Conferință",
      description: "Săli moderne pentru evenimente corporate",
      images: [
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6733389ad6361abb04676a16.jpeg",
          title: "Sala Mare"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67238f79fa3cb77ab2f73510.jpeg",
          title: "Sala de Training"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67249864dd2b8086b258be31.jpeg",
          title: "Spațiu de Lucru"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673390bf6d274706dfe01467.jpeg",
          title: "Sală de Ședințe"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6733904886093656975f60fa.jpeg",
          title: "Facilități Moderne"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67332fa0d6361a64c46742be.jpeg",
          title: "Spațiu Versatil"
        }
      ]
    },
    {
      title: "Sărbători și Evenimente",
      description: "Momente speciale la Padina Ursului",
      images: [
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/672395b207b38e2d78db7bb8.jpeg",
          title: "Decorațiuni Festive"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673394cba85019a5b806b6be.jpeg",
          title: "Atmosferă de Sărbătoare"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/672395ef302d36644904bc5f.jpeg",
          title: "Evenimente Private"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67239638a7b047f46beb640f.jpeg",
          title: "Petreceri Tematice"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6733956bd5e571b5b867e417.jpeg",
          title: "Momente Speciale"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/672396a8fa3cb7f404f73ba5.jpeg",
          title: "Sărbători de Iarnă"
        }
      ]
    },
    {
      title: "Spații de Relaxare și Divertisment",
      description: "Zone dedicate relaxării și activităților recreative",
      images: [
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67249531dd2b805584587b9f.jpeg",
          title: "Zonă de Relaxare"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67339ba64f72d8d46713c33e.jpeg",
          title: "Spațiu de Recreere"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/672394783029c74d1a572b36.jpeg",
          title: "Activități în Aer Liber"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67339c0ba850192b2606bd34.jpeg",
          title: "Facilități de Wellness"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67339bb8a85019747306bd16.jpeg",
          title: "Zone de Socializare"
        },
        {
          src: "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67339ce5d8a395e097b5df7a.jpeg",
          title: "Spații de Divertisment"
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <img
          src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67235294fa3cb74502f6aaa5.jpeg"
          alt="Gallery"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 hero-text-shadow">
              Galerie Foto
            </h1>
            <p className="text-xl md:text-3xl text-white/90 hero-text-shadow max-w-3xl mx-auto mb-8">
              Explorează frumusețea și facilitățile Padinei Ursului
            </p>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-amber-800 text-white px-8 py-3 rounded-md hover:bg-amber-900 transition-colors duration-300"
            >
              Rezervă Acum
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Categories */}
      {galleryCategories.map((category, index) => (
        <section key={index} className={`py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-amber-50/50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                {category.title}
              </h2>
              <p className="text-xl text-gray-600">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="relative aspect-[4/3] group cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-medium hero-text-shadow">
                      {image.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

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