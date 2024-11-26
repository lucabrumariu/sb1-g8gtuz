import React from 'react';

export default function ClientTestimonials() {
  const companyLogos = [
    "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67334a12bce0cbbdee03ff59.png",
    "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673345a71de0b702bfc9c220.jpeg",
    "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673342a46f92b49eabf93f4a.jpeg",
    "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673344e46f92b453e5f93fc0.jpeg",
    "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6733a2aad8a3957248b5e467.jpeg",
    "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6733a2d6d5e571b82067ead0.jpeg",
    "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6733a294ebe0124373e67f84.jpeg",
    "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6733a27d4f72d8a3f013c6c7.png",
    "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6733a3134ceada15e4463aff.jpeg",
    "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6733a37cd8a395d3f2b5e54c.jpeg",
    "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6733a3f5786d6a5d449b7520.jpeg",
    "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67334dbbd6361a469368840a.jpeg"
  ];

  return (
    <section className="py-24 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Partenerii Noștri
          </h2>
          <p className="text-xl text-gray-600">
            Companii care au ales Padina Ursului pentru team building
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
          {companyLogos.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Company Logo"
                className="max-h-24 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}