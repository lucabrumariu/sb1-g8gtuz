import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  slug: string;
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    'Toate',
    'Oferte Speciale',
    'Sfaturi de Călătorie',
    'Activități & Aventură',
    'Corporate',
    'Ghid Turistic'
  ];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Ofertele de Sărbători la Padina Ursului: Crăciun și Revelion în Inima Munților',
      excerpt: 'Descoperă pachetele noastre speciale pentru sărbătorile de iarnă și bucură-te de Crăciun și Revelion într-un cadru de poveste, cu tradiții autentice și experiențe memorabile.',
      date: '18 Noiembrie 2024',
      author: 'Luca Brumariu',
      image: 'https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673b15f9f980e121fa775eef.jpeg',
      category: 'Oferte Speciale',
      slug: 'oferte-sarbatori-padina-ursului-craciun-revelion'
    },
    {
      id: '2',
      title: 'Fundata – Destinația Perfectă pentru Relaxare în Munții Carpați',
      excerpt: 'Descoperă Fundata, bijuteria Carpaților și cea mai înaltă localitate locuită din România, unde natura, tradițiile și confortul modern se îmbină perfect la Padina Ursului.',
      date: '21 Noiembrie 2024',
      author: 'Luca Brumariu',
      image: 'https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67339150ebe012476de67008.jpeg',
      category: 'Sfaturi de Călătorie',
      slug: 'fundata-destinatia-perfecta-relaxare-muntii-carpati'
    },
    {
      id: '3',
      title: 'Top 5 Activități de Neuitat la Padina Ursului: Drumeții, Schi și Aventură',
      excerpt: 'De la drumeții spectaculoase și sporturi de iarnă până la relaxare în spa, descoperă cele mai captivante activități pe care le poți experimenta la Padina Ursului.',
      date: '05 Noiembrie 2024',
      author: 'Luca Brumariu',
      image: 'https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67247a9d593dcc9f6b5339ca.jpeg',
      category: 'Activități & Aventură',
      slug: 'top-5-activitati-neuitat-padina-ursului'
    },
    {
      id: '4',
      title: 'De ce să Alegi Padina Ursului pentru Team Building-ul Tău?',
      excerpt: 'Descoperă cum Padina Ursului oferă mediul perfect pentru team building-uri de succes, combinând facilități moderne cu natura spectaculoasă a munților Carpați.',
      date: '12 Octombrie 2024',
      author: 'Luca Brumariu',
      image: 'https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67238758302d360e8e04b30c.jpeg',
      category: 'Corporate',
      slug: 'de-ce-sa-alegi-padina-ursului-pentru-team-building'
    },
    {
      id: '5',
      title: 'Top 7 Atracții Turistice de Vizitat în Apropierea Hotelului Padina Ursului',
      excerpt: 'Explorează cele mai impresionante atracții turistice din jurul Hotelului Padina Ursului, de la Castelul Bran până la Parcul Național Piatra Craiului.',
      date: '21 Iulie 2024',
      author: 'Luca Brumariu',
      image: 'https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67448c4be0a908ab074bcc34.png',
      category: 'Ghid Turistic',
      slug: 'top-7-atractii-turistice-apropierea-padina-ursului'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === '' || selectedCategory === 'Toate' || 
                           post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      <SEOHead 
        title="Blog - Padina Ursului | Articole și Noutăți"
        description="Descoperiți articole interesante despre experiențele și activitățile de la Padina Ursului, sfaturi de călătorie și multe altele."
      />

      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <img
          src="https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/67235294fa3cb74502f6aaa5.jpeg"
          alt="Blog"
          className="w-full h-full object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 hero-text-shadow">
              Blog
            </h1>
            <p className="text-xl md:text-3xl text-white/90 hero-text-shadow max-w-3xl mx-auto">
              Descoperă poveștile și experiențele din Fundata
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <section className="py-12 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Caută articole..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-amber-800 text-white'
                      : 'bg-white text-gray-700 hover:bg-amber-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Nu am găsit articole care să corespundă căutării tale
              </h2>
              <p className="text-gray-600">
                Încearcă să folosești alte cuvinte cheie sau resetează filtrele
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.id} 
                  to={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
                    <div className="aspect-w-16 aspect-h-9 relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-amber-800 text-white px-3 py-1 rounded-full text-sm">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-amber-800 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}