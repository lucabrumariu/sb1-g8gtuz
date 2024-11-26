import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FeaturedSections from './components/FeaturedSections';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import HolidayOffers from './pages/HolidayOffers';
import Teambuilding from './pages/Teambuilding';
import BuildingsAndRooms from './pages/BuildingsAndRooms';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import ThankYouPage from './pages/ThankYouPage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedSections />
      <AboutUs />
      <Features />
      <FAQ />
      <Testimonials />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/oferte-sarbatori" element={<HolidayOffers />} />
          <Route path="/teambuilding" element={<Teambuilding />} />
          <Route path="/evenimente-nunti" element={<EventsPage />} />
          <Route path="/despre-noi" element={<AboutPage />} />
          <Route path="/cladiri-si-camere" element={<BuildingsAndRooms />} />
          <Route path="/galerie" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/rezervare" element={<BookingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/politica-confidentialitate" element={<PrivacyPolicy />} />
          <Route path="/politica-cookies" element={<CookiePolicy />} />
          <Route path="/multumim" element={<ThankYouPage />} />
        </Routes>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}