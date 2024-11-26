import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  schema?: any;
}

export default function SEOHead({
  title,
  description,
  canonicalUrl = 'https://padinaursului.ro',
  image = 'https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673c9c28c4826acce8a7c716.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  schema
}: SEOHeadProps) {
  const fullTitle = `${title} | Padina Ursului`;

  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Padina Ursului",
    "image": "https://storage.googleapis.com/msgsndr/BUDOoFs5MZBtFKZgnqnl/media/673c9c28c4826acce8a7c716.png",
    "description": "Hotel boutique în Fundata, Brașov, oferind cazare de lux, restaurant tradițional și facilități pentru evenimente într-un cadru montan spectaculos.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "DJ730A Fundăţica",
      "addressLocality": "Fundata",
      "addressRegion": "Brașov",
      "postalCode": "507070",
      "addressCountry": "RO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "45.4461111",
      "longitude": "25.2855556"
    },
    "telephone": "+40722450265",
    "email": "office@padinaursului.com",
    "url": "https://padinaursului.ro",
    "priceRange": "$$",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Restaurant",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Conference Rooms",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Free Parking",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Indoor Pool",
        "value": true
      }
    ],
    "starRating": {
      "@type": "Rating",
      "ratingValue": "4.6"
    }
  };

  const defaultSchema = type === 'website' ? hotelSchema : null;
  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Padina Ursului" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article Specific Meta Tags */}
      {type === 'article' && (
        <>
          {publishedTime && (
            <meta property="article:published_time" content={publishedTime} />
          )}
          {modifiedTime && (
            <meta property="article:modified_time" content={modifiedTime} />
          )}
          {author && (
            <meta property="article:author" content={author} />
          )}
        </>
      )}

      {/* Schema.org Structured Data */}
      {finalSchema && (
        <script type="application/ld+json">
          {JSON.stringify(finalSchema)}
        </script>
      )}

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#92400e" />
    </Helmet>
  );
}