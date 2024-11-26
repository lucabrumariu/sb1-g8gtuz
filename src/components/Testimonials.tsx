import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Maria Popescu",
      rating: 5,
      date: "2 săptămâni în urmă",
      text: "O experiență minunată! Priveliștea este spectaculoasă, camerele sunt curate și confortabile, iar personalul este foarte amabil. Mâncarea tradițională este delicioasă!"
    },
    {
      name: "Ioan Dumitrescu",
      rating: 5,
      date: "1 lună în urmă",
      text: "Perfect pentru team building! Am organizat un eveniment corporate și totul a fost impecabil. Facilitățile moderne și activitățile organizate au făcut experiența memorabilă."
    },
    {
      name: "Elena Ionescu",
      rating: 4,
      date: "2 luni în urmă",
      text: "Locație superbă în inima munților. Piscina încălzită este un plus major, iar restaurantul oferă preparate delicioase. Personalul foarte atent la detalii."
    },
    {
      name: "Alexandru Munteanu",
      rating: 5,
      date: "3 luni în urmă",
      text: "Am petrecut un weekend minunat aici. Camerele sunt spațioase și curate, cu vedere panoramică spre munți. Micul dejun bogat și variat. Recomand cu încredere!"
    }
  ];

  return (
    <section className="py-24 bg-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Testimoniale</h2>
          <p className="text-xl text-gray-600">Ce spun oaspeții noștri</p>
          
          <div className="flex items-center justify-center mt-6 space-x-4">
            <div className="flex items-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                className="w-6 h-6 mr-2"
              />
              <span className="text-2xl font-bold">4.6</span>
            </div>
            <div className="flex text-amber-400">
              {[1, 2, 3, 4].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <Star className="w-5 h-5 fill-current text-amber-300" />
            </div>
            <span className="text-gray-600">(450+ review-uri)</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 font-semibold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <div className="flex items-center">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 line-clamp-4">{review.text}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.google.com/search?sca_esv=c744cb070de47b7e&rlz=1C5CHFA_enRO1127RO1127&uds=ADvngMjcH0KdF7qGWtwTBrP0nt7d9abZqeDXis6xZ8L-5VZgmvMfI4PN-p1q1WGTQ3siMelGWvIrKI6eVs08mOTt_55Gr6Z4rGzWfbB8OE4eZjXfQgu00dU4OiMKUpzDLl0EjdKjv4mA&si=ACC90nzcy7sviKw0NTZoUBUzhQehr3jouizIrVSf6avWI23m1bw9rKJbOR1_f9zdStGhi6oOBg2iZ21P8kFPIL0OK4fCphG1Q5QsuxlwkOMPPXYv3d7QivA%3D&q=Padina+Ursului+Reviews&sa=X&ved=2ahUKEwjBnvWlz_eJAxUYVfEDHcalLAQQ3PALegQISBAF&biw=1512&bih=823&dpr=2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-amber-800 hover:text-amber-900"
          >
            <span className="mr-2">Vezi toate review-urile pe Google</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}