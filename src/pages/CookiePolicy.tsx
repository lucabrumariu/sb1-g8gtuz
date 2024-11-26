import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-serif font-bold mb-8">Politica de Cookie-uri</h1>
        
        <div className="prose prose-lg">
          <p>Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}</p>

          <h2>1. Ce sunt cookie-urile?</h2>
          <p>
            Cookie-urile sunt fișiere text mici care sunt descărcate în dispozitivul dumneavoastră atunci când vizitați un site web.
            Acestea permit site-ului să rețină preferințele și să îmbunătățească experiența de navigare.
          </p>

          <h2>2. Ce tipuri de cookie-uri folosim?</h2>
          <ul>
            <li>Cookie-uri necesare: esențiale pentru funcționarea site-ului</li>
            <li>Cookie-uri de performanță: pentru analiza traficului și comportamentului utilizatorilor</li>
            <li>Cookie-uri funcționale: pentru personalizarea experienței utilizatorului</li>
            <li>Cookie-uri de marketing: pentru publicitate personalizată</li>
          </ul>

          <h2>3. Cum puteți controla cookie-urile?</h2>
          <p>
            Puteți controla și/sau șterge cookie-urile după cum doriți. Puteți șterge toate cookie-urile care sunt deja pe
            dispozitivul dumneavoastră și puteți seta majoritatea browserelor să împiedice plasarea acestora.
          </p>

          <h2>4. Contact</h2>
          <p>
            Pentru orice întrebări legate de utilizarea cookie-urilor pe site-ul nostru, ne puteți contacta la:
          </p>
          <ul>
            <li>Email: office@padinaursului.com</li>
            <li>Telefon: +40 722 450 265</li>
          </ul>
        </div>
      </div>
    </div>
  );
}