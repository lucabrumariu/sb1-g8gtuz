import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path: string;
}

const routeMap: Record<string, BreadcrumbItem[]> = {
  '/oferte-sarbatori': [
    { name: 'Acasă', path: '/' },
    { name: 'Oferte de Sărbători', path: '/oferte-sarbatori' }
  ],
  '/teambuilding': [
    { name: 'Acasă', path: '/' },
    { name: 'Team Building', path: '/teambuilding' }
  ],
  '/evenimente-nunti': [
    { name: 'Acasă', path: '/' },
    { name: 'Evenimente și Nunți', path: '/evenimente-nunti' }
  ],
  '/despre-noi': [
    { name: 'Acasă', path: '/' },
    { name: 'Despre Noi', path: '/despre-noi' }
  ],
  '/cladiri-si-camere': [
    { name: 'Acasă', path: '/' },
    { name: 'Clădiri și Camere', path: '/cladiri-si-camere' }
  ],
  '/galerie': [
    { name: 'Acasă', path: '/' },
    { name: 'Galerie', path: '/galerie' }
  ],
  '/contact': [
    { name: 'Acasă', path: '/' },
    { name: 'Contact', path: '/contact' }
  ],
  '/blog': [
    { name: 'Acasă', path: '/' },
    { name: 'Blog', path: '/blog' }
  ]
};

export default function Breadcrumb() {
  const location = useLocation();
  const items = routeMap[location.pathname] || [{ name: 'Acasă', path: '/' }];

  // Generate Schema.org BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@id": `https://padinaursului.ro${item.path}`,
        "name": item.name
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      <nav className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2">
            {items.map((item, index) => (
              <li key={item.path} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
                {index === items.length - 1 ? (
                  <span className="text-gray-600">{item.name}</span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-amber-800 hover:text-amber-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}