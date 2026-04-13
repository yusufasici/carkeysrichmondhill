import { Helmet } from "react-helmet-async";

interface LocalSEOProps {
  city?: string;
  service?: string;
}

export const LocalSEOData: React.FC<LocalSEOProps> = ({ city, service }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://carkeysrichmondhill.ca/#organization",
        "name": "Car Keys Richmond Hill",
        "url": "https://carkeysrichmondhill.ca",
        "sameAs": [
          "https://www.google.com/maps/place/AutoKey+Express",
          "https://www.facebook.com/carkeysrichmondhill",
          "https://www.instagram.com/carkeysrichmondhill"
        ],
        "logo": {
          "@type": "ImageObject",
          "url": "https://carkeysrichmondhill.ca/logo.png",
          "width": 400,
          "height": 400
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+14168165740",
          "contactType": "customer service",
          "availableLanguage": ["en", "fr"],
          "areaServed": "CA"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://carkeysrichmondhill.ca/#localbusiness",
        "name": city ? `Car Keys Richmond Hill - Locksmith ${city}` : "Car Keys Richmond Hill",
        "image": [
          "https://carkeysrichmondhill.ca/logo.png",
          "https://carkeysrichmondhill.ca/og.png"
        ],
        "telephone": "+14168165740",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "28 Eugenia Ct",
          "addressLocality": "Markham",
          "addressRegion": "Ontario",
          "postalCode": "L3R 4Y6",
          "addressCountry": "CA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 43.869118,
          "longitude": -79.294069
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday", 
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "priceRange": "$$",
        "currenciesAccepted": "CAD",
        "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
        "servesCuisine": null,
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://carkeysrichmondhill.ca/#website",
        "url": "https://carkeysrichmondhill.ca",
        "name": "Car Keys Richmond Hill",
        "description": "Professional 24/7 locksmith services across the Greater Toronto Area",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://carkeysrichmondhill.ca/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://carkeysrichmondhill.ca/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@id": "https://carkeysrichmondhill.ca/",
              "name": "Home"
            }
          },
          ...(city ? [{
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@id": `https://carkeysrichmondhill.ca/locksmith-${city.toLowerCase().replace(/\s/g, "")}`,
              "name": `Locksmith ${city}`
            }
          }] : []),
          ...(service ? [{
            "@type": "ListItem",
            "position": city ? 3 : 2,
            "item": {
              "@id": `https://carkeysrichmondhill.ca/services/${service.toLowerCase().replace(/\s/g, "-")}`,
              "name": service
            }
          }] : [])
        ]
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default LocalSEOData;