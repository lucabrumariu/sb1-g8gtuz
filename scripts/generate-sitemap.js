import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

// Define your website URL
const WEBSITE_URL = 'https://padinaursului.ro';

// Define all your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/oferte-sarbatori', changefreq: 'weekly', priority: 0.9 },
  { url: '/teambuilding', changefreq: 'weekly', priority: 0.9 },
  { url: '/evenimente-nunti', changefreq: 'weekly', priority: 0.9 },
  { url: '/despre-noi', changefreq: 'monthly', priority: 0.8 },
  { url: '/cladiri-si-camere', changefreq: 'monthly', priority: 0.8 },
  { url: '/galerie', changefreq: 'monthly', priority: 0.8 },
  { url: '/blog', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  // Blog posts
  { url: '/blog/oferte-sarbatori-padina-ursului-craciun-revelion', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog/fundata-destinatia-perfecta-relaxare-muntii-carpati', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog/top-5-activitati-neuitat-padina-ursului', changefreq: 'monthly', priority: 0.7 },
  { url: '/blog/de-ce-sa-alegi-padina-ursului-pentru-team-building', changefreq: 'monthly', priority: 0.7 },
  // Legal pages
  { url: '/politica-confidentialitate', changefreq: 'yearly', priority: 0.3 },
  { url: '/politica-cookies', changefreq: 'yearly', priority: 0.3 }
];

// Create sitemap
const stream = new SitemapStream({ hostname: WEBSITE_URL });

// Add routes to sitemap
const sitemapStream = Readable.from(routes).pipe(stream);

// Generate sitemap.xml
streamToPromise(sitemapStream)
  .then(data => {
    createWriteStream('./public/sitemap.xml').write(data.toString());
    console.log('Sitemap generated successfully!');
  })
  .catch(error => {
    console.error('Error generating sitemap:', error);
  });