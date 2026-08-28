import React from 'react';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://lustomotive.com/#website",
        "url": "https://lustomotive.com",
        "name": "Lustomotive",
        "description": "Professional car detailing, maintenance, PPF, ceramic coatings, and automotive services in Panagarh, West Bengal.",
        "publisher": {
          "@id": "https://lustomotive.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://lustomotive.com/#organization",
        "name": "Lustomotive By AmarBharatCompany",
        "url": "https://lustomotive.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://lustomotive.com/images/lustomotive_small_logo.png"
        }
      },
      {
        "@type": "AutoRepair",
        "@id": "https://lustomotive.com/#localbusiness",
        "name": "Lustomotive By AmarBharatCompany",
        "image": "https://lustomotive.com/images/lustomotive_small_logo.png",
        "url": "https://lustomotive.com",
        "telephone": "+919475414545",
        "email": "Lustomotive@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Panagarh",
          "addressLocality": "Panagarh",
          "addressRegion": "West Bengal",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 23.4418121,
          "longitude": 87.4644806
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "19:00"
        },
        "priceRange": "$$",
        "areaServed": {
          "@type": "City",
          "name": "Panagarh"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Automotive Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Showroom Finish"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Paint Correction"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ceramic Coating"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "PPF Installation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Interior Detailing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Mechanical Services"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
