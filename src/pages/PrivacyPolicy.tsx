import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-serif font-bold mb-8">Politica de Confidențialitate</h1>
        
        <div className="prose prose-lg">
          <p>Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}</p>

          <h2>1. Introducere</h2>
          <p>
            Padina Ursului respectă confidențialitatea vizitatorilor săi și se angajează să protejeze informațiile personale pe care le colectăm.
            Această politică descrie tipurile de informații pe care le colectăm și modul în care le utilizăm.
          </p>

          <h2>2. Informațiile pe care le colectăm</h2>
          <p>Colectăm următoarele tipuri de informații:</p>
          <ul>
            <li>Nume și prenume</li>
            <li>Adresă de email</li>
            <li>Număr de telefon</li>
            <li>Informații despre rezervare (date, număr de persoane)</li>
          </ul>

          <h2>3. Cum folosim informațiile</h2>
          <p>Utilizăm informațiile colectate pentru:</p>
          <ul>
            <li>Procesarea rezervărilor</li>
            <li>Comunicarea legată de serviciile noastre</li>
            <li>Îmbunătățirea serviciilor noastre</li>
            <li>Trimiterea de newsletter (cu acordul explicit)</li>
          </ul>

          <h2>4. Drepturile dumneavoastră</h2>
          <p>Conform GDPR, aveți următoarele drepturi:</p>
          <ul>
            <li>Dreptul de acces la date</li>
            <li>Dreptul la rectificare</li>
            <li>Dreptul la ștergere ("dreptul de a fi uitat")</li>
            <li>Dreptul la restricționarea prelucrării</li>
            <li>Dreptul la portabilitatea datelor</li>
            <li>Dreptul la opoziție</li>
          </ul>

          <h2>5. Contact</h2>
          <p>
            Pentru orice întrebări legate de politica noastră de confidențialitate sau pentru exercitarea drepturilor dumneavoastră,
            ne puteți contacta la:
          </p>
          <ul>
            <li>Email: office@padinaursului.com</li>
            <li>Telefon: +40 722 450 265</li>
            <li>Adresă: DJ730A Fundăţica, Fundata Brasov</li>
          </ul>
        </div>
      </div>
    </div>
  );
}