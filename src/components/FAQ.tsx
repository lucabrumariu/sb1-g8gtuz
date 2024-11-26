import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Putem închiria întreg hotelul pentru team building-uri?",
      answer: "Absolut. În cazul team building-urilor, oferim exclusivitate pentru echipa dumneavoastră, astfel încât să vă bucurați de întreaga proprietate și facilități fără prezența altor clienți."
    },
    {
      question: "Aveți pachete speciale pentru sărbători sau evenimente private?",
      answer: "Da, oferim pachete speciale pentru Crăciun, Revelion, nunți, botezuri și alte evenimente private. Fiecare pachet include facilități personalizate și exclusivitate, asigurând o experiență unică pentru oaspeții noștri."
    },
    {
      question: "Ce facilități oferă hotelul pentru relaxare și activități în aer liber?",
      answer: "Hotelul dispune de piscină interioară încălzită, drumeții organizate, închirieri de biciclete și ATV-uri, toate integrate în peisajul montan din Fundata."
    },
    {
      question: "Există opțiuni de masă incluse în pachetele de cazare?",
      answer: "Da, pachetele de cazare pot include opțiuni de masă. Avem trei restaurante cu specific tradițional și internațional, unde oaspeții pot savura preparate locale autentice."
    },
    {
      question: "Ce opțiuni de cazare aveți disponibile?",
      answer: "Oferim camere twin, duble, triple și apartamente spațioase, toate dotate cu facilități moderne și vedere spectaculoasă la munte."
    },
    {
      question: "Cum pot ajunge la hotel și aveți parcare?",
      answer: "Hotelul Padina Ursului este situat în Fundata, județul Brașov, într-o zonă montană accesibilă cu mașina. Avem o parcare privată și spațioasă, rezervată oaspeților noștri."
    },
    {
      question: "Ce activități se pot organiza pentru grupuri mari?",
      answer: "Oferim o gamă largă de activități pentru grupuri, inclusiv drumeții ghidate, activități de team building, seri tematice și organizarea de evenimente private în sălile noastre de conferințe sau în aer liber."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Întrebări frecvente (FAQ)</h2>
          <p className="text-xl text-gray-600">Răspunsuri la cele mai comune întrebări</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-amber-800 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-amber-800 flex-shrink-0" />
                )}
              </button>
              <div 
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-48 py-4 opacity-100' 
                    : 'max-h-0 py-0 opacity-0'
                } overflow-hidden`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}