import React from 'react';
import Hero from '../components/Hero';
import FeaturedSections from '../components/FeaturedSections';
import Features from '../components/Features';
import AboutUs from '../components/AboutUs';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import SEOHead from '../components/SEOHead';

export default function HomePage() {
  return (
    <>
      <SEOHead 
        title="Hotel & Resort în Fundata, Brașov | Cazare la Munte"
        description="Descoperiți experiențe autentice la Padina Ursului, un hotel boutique în Fundata, Brașov. Oferim cazare de lux, restaurant tradițional, facilități pentru evenimente și team building, într-un cadru montan spectaculos."
      />
      <Hero />
      <FeaturedSections />
      <AboutUs />
      <Features />
      <FAQ />
      <Testimonials />
    </>
  );
}