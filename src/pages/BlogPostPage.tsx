import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import BookingPopup from '../components/BookingPopup';
import SEOHead from '../components/SEOHead';
import BlogNavigation from '../components/BlogNavigation';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const blogPosts = {
    'oferte-sarbatori-padina-ursului-craciun-revelion': {
      title: 'Ofertele de Sărbători la Padina Ursului: Crăciun și Revelion în Inima Munților',
      date: '18 Noiembrie 2024',
      author: 'Luca Brumariu',
      category: 'Oferte Speciale',
      image: 'https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673b15f9f980e121fa775eef.jpeg',
      description: 'Descoperă pachetele noastre speciale pentru sărbătorile de iarnă și bucură-te de Crăciun și Revelion într-un cadru de poveste, cu tradiții autentice și experiențe memorabile.',
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="lead">Trăiește magia Crăciunului în cel mai autentic mod, la Padina Ursului, în Fundata. Atmosfera sărbătorilor este completată de decoruri tradiționale, colinde românești și o ospitalitate caldă, specifică zonei montane.</p>

          <h2>1. Magia Sărbătorilor în Fundata</h2>
          <div class="my-8">
            <img src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6732174e4ded806cd6e21d40.png" alt="Crăciun la Padina Ursului" class="w-full rounded-lg shadow-lg mb-4" />
            <p class="text-sm text-gray-600 text-center">Atmosferă magică de Crăciun la Padina Ursului</p>
          </div>

          <h2>2. Ce Include Pachetul de Crăciun</h2>
          <p>Pachetul de Crăciun de la Padina Ursului include mese festive care îți vor încânta simțurile. Bucătarii noștri pregătesc preparate tradiționale românești, precum sarmale, cozonac și fripturi suculente.</p>

          <div class="my-8">
            <img src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673217546a3aeee676d0080f.png" alt="Revelion la Padina Ursului" class="w-full rounded-lg shadow-lg mb-4" />
            <p class="text-sm text-gray-600 text-center">Petrecere de Revelion cu muzică live și dans</p>
          </div>

          <h2>3. Experiențe de Neuitat de Revelion</h2>
          <p>Revelionul la Padina Ursului este o combinație perfectă de eleganță și distracție. Petrecerea festivă include muzică live, dansuri și o atmosferă vibrantă care îți va încărca bateriile pentru anul ce urmează.</p>

          <div class="my-8 max-w-2xl mx-auto">
            <img src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/672395b207b38e2d78db7bb8.jpeg" alt="Activități de iarnă" class="w-full h-48 object-cover rounded-lg shadow-lg mb-4" />
            <p class="text-sm text-gray-600 text-center">Activități de iarnă pentru toată familia</p>
          </div>

          <h2>4. Relaxare și Distracție pentru Toată Familia</h2>
          <p>Pe lângă festivitățile de Crăciun și Revelion, Padina Ursului îți oferă momente de răsfăț total. Piscina interioară încălzită și spa-ul nostru sunt disponibile pentru oaspeți, oferind un refugiu perfect după o zi plină de activități.</p>

          <h2>5. Cum Rezervi Ofertele de Sărbători</h2>
          <p>Padina Ursului îți oferă flexibilitate în organizarea vacanței de sărbători. Pachetele noastre pot fi personalizate pentru a include cazare, mese festive și activități, adaptate preferințelor tale.</p>
        </div>
      `
    },
    'fundata-destinatia-perfecta-relaxare-muntii-carpati': {
      title: 'Fundata – Destinația Perfectă pentru Relaxare în Munții Carpați',
      date: '21 Noiembrie 2024',
      author: 'Luca Brumariu',
      category: 'Sfaturi de Călătorie',
      image: 'https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67339150ebe012476de67008.jpeg',
      description: 'Descoperă Fundata, bijuteria Carpaților și cea mai înaltă localitate locuită din România, unde natura, tradițiile și confortul modern se îmbină perfect la Padina Ursului.',
      content: `
        <div class="prose prose-lg max-w-none">
          <h2>Descoperă Fundata – Bijuteria Carpaților</h2>
          <p>Fundata este o localitate spectaculoasă, situată la altitudinea de 1360 de metri, ceea ce o transformă în cea mai înaltă localitate locuită permanent din România. Aflată între Munții Bucegi și Piatra Craiului, Fundata oferă o priveliște incredibilă asupra peisajului montan.</p>

          <div class="my-8">
            <img src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67339150ebe012476de67008.jpeg" alt="Peisaj Fundata" class="w-full rounded-lg shadow-lg mb-4" />
            <p class="text-sm text-gray-600 text-center">Priveliște spectaculoasă din Fundata</p>
          </div>

          <h2>Natura în Stare Pură</h2>
          <p>Zona Fundata este cunoscută pentru biodiversitatea sa impresionantă. Aici poți întâlni specii rare de plante și animale, precum capra neagră, râsul sau flori protejate precum floarea de colț.</p>

          <div class="my-8">
            <img src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67330aa510cace34117f48cb.jpeg" alt="Natură Fundata" class="w-full rounded-lg shadow-lg mb-4" />
            <p class="text-sm text-gray-600 text-center">Natură sălbatică în Fundata</p>
          </div>

          <h2>Experiențe Autentice la Padina Ursului</h2>
          <p>Hotelul Padina Ursului este mai mult decât un loc de cazare – este o experiență autentică care îmbină arhitectura tradițională cu facilități moderne. Fiecare cameră este proiectată pentru a oferi confort maxim.</p>

          <div class="my-8 max-w-2xl mx-auto">
            <img src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673b15f9f980e121fa775eef.jpeg" alt="Padina Ursului" class="w-full h-48 object-cover rounded-lg shadow-lg mb-4" />
            <p class="text-sm text-gray-600 text-center">Hotel Padina Ursului</p>
          </div>
        </div>
      `
    },
    'top-5-activitati-neuitat-padina-ursului': {
      title: 'Top 5 Activități de Neuitat la Padina Ursului: Drumeții, Schi și Aventură',
      date: '05 Noiembrie 2024',
      author: 'Luca Brumariu',
      category: 'Activități & Aventură',
      image: 'https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67247a9d593dcc9f6b5339ca.jpeg',
      description: 'De la drumeții spectaculoase și sporturi de iarnă până la relaxare în spa, descoperă cele mai captivante activități pe care le poți experimenta la Padina Ursului.',
      content: `
        <div class="prose prose-lg max-w-none">
          <h2>1. Drumeții în Inima Munților Carpați</h2>
          <div class="my-8">
            <img src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673f862afbba579837567599.jpeg" alt="Drumeții în Munții Carpați" class="w-full rounded-lg shadow-lg mb-4" />
          </div>
          <p>Padina Ursului este punctul de plecare ideal pentru pasionații de drumeții, oferind acces rapid la unele dintre cele mai spectaculoase trasee din Munții Bucegi și Piatra Craiului.</p>

          <h2>2. Descoperă Aventura cu Biciclete și ATV-uri</h2>
          <div class="my-8">
            <img src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673f86a463efb84d8133fdac.jpeg" alt="Aventură cu ATV-uri" class="w-full rounded-lg shadow-lg mb-4" />
          </div>
          <p>Zona Fundata este un paradis pentru pasionații de ciclism montan și aventuri off-road.</p>

          <h2>3. Relaxare Activă – Piscină și Spa</h2>
          <p>După o zi plină de activități în aer liber, relaxarea la piscina interioară sau în spa-ul de la Padina Ursului este exact ceea ce ai nevoie.</p>

          <h2>4. Iarna la Fundata – Schi și Sporturi de Iarnă</h2>
          <div class="my-8">
            <img src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673f86f1a74fc914f54a1d0f.jpeg" alt="Sporturi de Iarnă" class="w-full rounded-lg shadow-lg mb-4" />
          </div>
          <p>Iarna, Fundata devine un loc magic, unde sporturile de zăpadă aduc bucurie atât adulților, cât și copiilor.</p>

          <h2>5. Excursii Ghidate și Descoperiri Locale</h2>
          <p>Fundata și satele din jur oferă o privire autentică asupra vieții tradiționale de la munte.</p>
        </div>
      `
    },
    'de-ce-sa-alegi-padina-ursului-pentru-team-building': {
      title: 'De ce să Alegi Padina Ursului pentru Team Building-ul Tău?',
      date: '12 Octombrie 2024',
      author: 'Luca Brumariu',
      category: 'Corporate',
      image: 'https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67238758302d360e8e04b30c.jpeg',
      description: 'Descoperă cum Padina Ursului oferă mediul perfect pentru team building-uri de succes, combinând facilități moderne cu natura spectaculoasă a munților Carpați.',
      content: `
        <div class="prose prose-lg max-w-none">
          <h2>1. Locația Perfectă – Natură și Accesibilitate</h2>
          <p>Padina Ursului este situat într-una dintre cele mai spectaculoase regiuni montane din România, între Munții Bucegi și Piatra Craiului. Peisajele impresionante, aerul curat și liniștea naturală creează mediul ideal pentru team building-uri care îmbină relaxarea și productivitatea.</p>

          <h2>2. Facilități Moderne pentru Evenimente Corporate</h2>
          <p>Padina Ursului pune la dispoziție săli de conferințe dotate cu tehnologie de ultimă generație, inclusiv echipamente audio-video, internet rapid și aranjamente flexibile.</p>

          <h2>3. Activități de Team Building pentru Toate Preferințele</h2>
          <p>Activitățile outdoor sunt una dintre atracțiile principale ale team building-urilor la Padina Ursului. Echipa ta poate participa la drumeții ghidate, curse cu ATV-uri sau trasee de ciclism montan.</p>

          <h2>4. Experiențe de Relaxare și Gastronomie Autentică</h2>
          <p>După o zi plină de activități și provocări, echipa ta se poate relaxa în piscina interioară încălzită sau în spa-ul hotelului.</p>

          <h2>5. Testimoniale și Povești de Succes</h2>
          <p>De-a lungul anilor, Padina Ursului a găzduit numeroase team building-uri și evenimente corporate de succes.</p>
        </div>
      `
    },
    'top-7-atractii-turistice-apropierea-padina-ursului': {
      title: 'Top 7 Atracții Turistice de Vizitat în Apropierea Hotelului Padina Ursului',
      date: '21 Iulie 2024',
      author: 'Luca Brumariu',
      category: 'Ghid Turistic',
      image: 'https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67448c4be0a908ab074bcc34.png',
      description: 'Explorează cele mai impresionante atracții turistice din jurul Hotelului Padina Ursului, de la Castelul Bran până la Parcul Național Piatra Craiului.',
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="lead">Situat în Fundata, la poalele Munților Bucegi și Piatra Craiului, Hotelul Padina Ursului este punctul de plecare ideal pentru explorarea unora dintre cele mai spectaculoase atracții turistice din România. Indiferent dacă ești pasionat de natură, istorie sau aventură, zona oferă oportunități unice pentru o vacanță memorabilă.</p>

          <h2>1. Castelul Bran – Istorie și Legende</h2>
          <div class="my-8">
            <img src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/674483666ebc307aa989b54e.webp" alt="Castelul Bran" class="w-full rounded-lg shadow-lg mb-4" />
          </div>
          <p>Descoperă unul dintre cele mai renumite castele din România, cunoscut pentru legătura cu legenda lui Dracula. Castelul impresionează prin arhitectura medievală și istoria fascinantă a lui Vlad Țepeș. Poți participa la tururi ghidate și evenimente tematice, inclusiv târguri medievale și festivaluri de Halloween.</p>

          <h2>2. Parcul Național Piatra Craiului – Bijuteria Munților Carpați</h2>
          <div class="my-8">
            <img src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6744850f2e1672f01a3f854e.jpeg" alt="Parcul Național Piatra Craiului" class="w-full rounded-lg shadow-lg mb-4" />
          </div>
          <p>Explorează trasee spectaculoase, de la cele ușoare până la cele pentru alpiniști experimentați. Creasta Pietrei Craiului oferă priveliști uluitoare, iar biodiversitatea unică a parcului îți va dezvălui specii rare, cum ar fi capra neagră și floarea de colț.</p>

          <h2>3. Cheile Grădiștei – Sporturi și Relaxare în Natură</h2>
          <div class="my-8">
            <img src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/674485580a9312d5416f7ba1.jpeg" alt="Cheile Grădiștei" class="w-full rounded-lg shadow-lg mb-4" />
          </div>
          <p>Bucură-te de sporturi de iarnă, pârtii de schi și snowboarding sau relaxează-te la spa-urile din zonă. Pe timp de vară, explorează cheile prin trasee de drumeții ușoare sau provocatoare.</p>

          <h2>4. Peștera Dâmbovicioara – Aventură Subterană</h2>
          <div class="my-8">
            <img src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6744859c4df7989885f8e15c.jpeg" alt="Peștera Dâmbovicioara" class="w-full rounded-lg shadow-lg mb-4" />
          </div>
          <p>Explorează frumusețea subterană a Munților Carpați prin Peștera Dâmbovicioara. Formațiunile spectaculoase și poveștile despre comori ascunse oferă o experiență fascinantă pentru familii și aventurieri.</p>

          <h2>5. Muzeul Satului Șirnea – Tradiții și Cultură Locală</h2>
          <div class="my-8">
            <img src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/674486822e16721a153f8633.jpeg" alt="Muzeul Satului Șirnea" class="w-full rounded-lg shadow-lg mb-4" />
          </div>
          <p>Vizitează casele tradiționale și expozițiile culturale din Șirnea, care dezvăluie farmecul vieții rurale autentice. Participă la festivaluri locale cu muzică tradițională, dansuri și preparate culinare.</p>

          <h2>6. Lacul Vidraru – Minunea Artificială din Munți</h2>
          <div class="my-8">
            <img src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6744871e2e167231b83f8664.jpeg" alt="Lacul Vidraru" class="w-full rounded-lg shadow-lg mb-4" />
          </div>
          <p>Relaxează-te pe malul lacului Vidraru, ideal pentru plimbări cu barca sau pescuit. Nu rata panorama spectaculoasă de pe baraj – un loc perfect pentru fotografii memorabile.</p>

          <h2>7. Cetatea Râșnov – Fortăreața Medievală a Brașovului</h2>
          <div class="my-8">
            <img src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/6744876c6d4aa9a92c13d65b.jpeg" alt="Cetatea Râșnov" class="w-full rounded-lg shadow-lg mb-4" />
          </div>
          <p>Explorează turnurile și curțile cetății, alături de povești fascinante despre invaziile otomane. Bucură-te de festivaluri medievale și evenimente culturale care readuc la viață atmosfera vremurilor trecute.</p>
        </div>
      `
    }
  };

  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Articol negăsit</h1>
          <p className="text-gray-600">Ne pare rău, dar articolul căutat nu există.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <SEOHead 
        title={post.title}
        description={post.description}
        type="article"
        publishedTime={post.date}
        author={post.author}
        image={post.image}
        canonicalUrl={`https://padinaursului.ro/blog/${slug}`}
      />

      {/* Hero Section */}
      <div className="relative h-[80vh] bg-gray-900">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 hero-text-shadow leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Tag className="w-5 h-5" />
                {post.category}
              </span>
              <span className="text-white/90">
                de {post.author}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <article className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div className="mt-16 bg-amber-50/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
              Pregătit să Explorezi Aceste Locuri Minunate?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Rezervă-ți sejurul la Padina Ursului și folosește-l ca punct de plecare pentru a descoperi toate aceste atracții turistice spectaculoase!
            </p>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-amber-800 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-amber-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Rezervă Acum la Padina Ursului
            </button>
          </div>
        </div>
      </article>

      <BlogNavigation
        title={post.title}
        url={`/blog/${slug}`}
        description={post.description}
        image={post.image}
      />

      <BookingPopup
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title="Rezervare la Padina Ursului"
      />
    </div>
  );
}