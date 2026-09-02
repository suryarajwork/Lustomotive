
import type { Metadata } from "next";
import React from "react";

/**
 * ============================================================
 * LUSTOMOTIVE - SEO METADATA
 * ============================================================
 *
 * One-page website SEO configuration.
 *
 * IMPORTANT:
 * - Keep the title exactly "Lustomotive".
 * - Replace placeholder business details only if required.
 * - Make sure the address, phone number, email, hours and
 *   coordinates match the real business information.
 */

export const metadata: Metadata = {
  /**
   * Base URL used by Next.js when resolving relative URLs
   * in metadata such as images and canonical URLs.
   */
  metadataBase: new URL("https://lustomotive.com"),

  /**
   * ============================================================
   * BASIC SEO
   * ============================================================
   */

  // As requested: title is ONLY "Lustomotive"
  title: "Lustomotive",

  description:
    "Lustomotive is a complete automotive solution in Panagarh, West Bengal, offering professional car detailing, paint correction, ceramic coating, PPF installation, interior detailing, maintenance and mechanical services.",

  keywords: [
    "Lustomotive",
    "Lustomotive Panagarh",
    "Lustomotive West Bengal",
    "car detailing Panagarh",
    "car detailing West Bengal",
    "car wash Panagarh",
    "car care Panagarh",
    "automotive services Panagarh",
    "automotive services West Bengal",
    "car maintenance Panagarh",
    "car repair Panagarh",
    "mechanical services Panagarh",
    "auto repair Panagarh",
    "paint correction Panagarh",
    "ceramic coating Panagarh",
    "ceramic coating West Bengal",
    "PPF Panagarh",
    "paint protection film Panagarh",
    "interior car detailing Panagarh",
    "vehicle detailing Panagarh",
  ],

  authors: [
    {
      name: "Lustomotive",
      url: "https://lustomotive.com",
    },
  ],

  creator: "Lustomotive",
  publisher: "Lustomotive",

  category: "automotive",

  /**
   * ============================================================
   * CANONICAL
   * ============================================================
   */

  alternates: {
    canonical: "/",
  },

  /**
   * ============================================================
   * ROBOTS
   * ============================================================
   */

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /**
   * ============================================================
   * OPEN GRAPH
   * ============================================================
   *
   * IMPORTANT:
   * Ideally create:
   *
   * /public/images/lustomotive-og-image.jpg
   *
   * with dimensions 1200 x 630.
   *
   * Do NOT use the square/small logo as a 1200 x 630 image
   * unless the actual image has those dimensions.
   */

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: "https://lustomotive.com/",

    siteName: "Lustomotive",

    title: "Lustomotive",

    description:
      "Complete automotive solutions in Panagarh, West Bengal, including car detailing, paint correction, ceramic coating, PPF installation, maintenance and mechanical services.",

    images: [
      {
        url: "/images/lustomotive-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lustomotive - Complete Automotive Solution",
      },
    ],
  },

  /**
   * ============================================================
   * TWITTER / X
   * ============================================================
   */

  twitter: {
    card: "summary_large_image",

    title: "Lustomotive",

    description:
      "Complete automotive solutions in Panagarh, West Bengal, including detailing, ceramic coating, PPF, maintenance and mechanical services.",

    images: ["/images/lustomotive-og-image.jpg"],

    // Add this ONLY if @lustomotive is your actual X/Twitter account.
    // creator: "@lustomotive",
  },

  /**
   * ============================================================
   * ICONS
   * ============================================================
   */

  icons: {
    icon: [
      {
        url: "/images/lustomotive_small_logo3.png?v=2",
      },
    ],

    apple: [
      {
        url: "/images/lustomotive_small_logo3.png?v=2",
      },
    ],
  },

  /**
   * ============================================================
   * STRUCTURED DATA / JSON-LD
   * ============================================================
   *
   * The structured data below helps search engines understand:
   *
   * 1. The website
   * 2. The Lustomotive business
   * 3. The services offered
   * 4. The relationship between the website and business
   */

  other: {
    "theme-color": "#000000",
  },
};


/**
 * ============================================================
 * STRUCTURED DATA COMPONENT
 * ============================================================
 */

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      /**
       * ========================================================
       * WEBSITE
       * ========================================================
       */

      {
        "@type": "WebSite",

        "@id": "https://lustomotive.com/#website",

        url: "https://lustomotive.com/",

        name: "Lustomotive",

        description:
          "Lustomotive is a complete automotive solution in Panagarh, West Bengal, offering professional vehicle detailing, maintenance, PPF, ceramic coating and mechanical services.",

        publisher: {
          "@id": "https://lustomotive.com/#organization",
        },

        inLanguage: "en-IN",
      },

      /**
       * ========================================================
       * ORGANIZATION
       * ========================================================
       */

      {
        "@type": "Organization",

        "@id": "https://lustomotive.com/#organization",

        name: "Lustomotive",

        url: "https://lustomotive.com/",

        logo: {
          "@type": "ImageObject",

          "@id": "https://lustomotive.com/#logo",

          url: "https://lustomotive.com/images/lustomotive_small_logo.png",

          contentUrl:
            "https://lustomotive.com/images/lustomotive_small_logo.png",

          caption: "Lustomotive",

          inLanguage: "en-IN",
        },

        image: {
          "@id": "https://lustomotive.com/#logo",
        },
      },

      /**
       * ========================================================
       * AUTOMOTIVE BUSINESS
       * ========================================================
       */

      {
        "@type": "AutoRepair",

        "@id": "https://lustomotive.com/#business",

        name: "Lustomotive",

        url: "https://lustomotive.com/",

        description:
          "Lustomotive is a complete automotive solution in Panagarh, West Bengal, offering professional car detailing, paint correction, ceramic coating, PPF installation, interior detailing, vehicle maintenance and mechanical services.",

        image: [
          "https://lustomotive.com/images/lustomotive_small_logo.png",
        ],

        logo: {
          "@type": "ImageObject",

          url: "https://lustomotive.com/images/lustomotive_small_logo.png",
        },

        telephone: "+919475414545",

        email: "Lustomotive@gmail.com",

        priceRange: "$$",

        /**
         * ======================================================
         * ADDRESS
         * ======================================================
         */

        address: {
          "@type": "PostalAddress",

          streetAddress: "Panagarh",

          addressLocality: "Panagarh",

          addressRegion: "West Bengal",

          addressCountry: "IN",
        },

        /**
         * ======================================================
         * GEO LOCATION
         * ======================================================
         */

        geo: {
          "@type": "GeoCoordinates",

          latitude: 23.4418121,

          longitude: 87.4644806,
        },

        /**
         * ======================================================
         * OPENING HOURS
         * ======================================================
         */

        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",

            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],

            opens: "09:00",

            closes: "19:00",
          },
        ],

        /**
         * ======================================================
         * AREA SERVED
         * ======================================================
         */

        areaServed: [
          {
            "@type": "City",

            name: "Panagarh",
          },

          {
            "@type": "State",

            name: "West Bengal",
          },
        ],

        /**
         * ======================================================
         * SERVICES
         * ======================================================
         */

        hasOfferCatalog: {
          "@type": "OfferCatalog",

          name: "Lustomotive Automotive Services",

          itemListElement: [
            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",

                name: "Showroom Finish",

                description:
                  "Professional vehicle finishing and detailing service designed to restore a clean, polished showroom appearance.",
              },
            },

            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",

                name: "Paint Correction",

                description:
                  "Professional paint correction service to improve the appearance of vehicle paintwork and reduce visible imperfections.",
              },
            },

            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",

                name: "Ceramic Coating",

                description:
                  "Professional ceramic coating service designed to provide long-lasting protection and enhance vehicle paintwork.",
              },
            },

            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",

                name: "PPF Installation",

                description:
                  "Paint Protection Film installation to help protect vehicle paintwork from everyday road damage and surface impacts.",
              },
            },

            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",

                name: "Interior Detailing",

                description:
                  "Professional interior vehicle detailing focused on cleaning, refreshing and maintaining the vehicle cabin.",
              },
            },

            {
              "@type": "Offer",

              itemOffered: {
                "@type": "Service",

                name: "Mechanical Services",

                description:
                  "Automotive mechanical services for vehicle maintenance, inspection and repair.",
              },
            },
          ],
        },

        /**
         * ======================================================
         * BUSINESS ↔ ORGANIZATION RELATIONSHIP
         * ======================================================
         */

        parentOrganization: {
          "@id": "https://lustomotive.com/#organization",
        },
      },

      /**
       * ========================================================
       * INDIVIDUAL SERVICES
       * ========================================================
       *
       * These make the service information explicit to search
       * engines while remaining connected to Lustomotive.
       */

      {
        "@type": "Service",

        "@id": "https://lustomotive.com/#car-detailing",

        name: "Car Detailing",

        provider: {
          "@id": "https://lustomotive.com/#business",
        },

        areaServed: {
          "@type": "City",

          name: "Panagarh",
        },
      },

      {
        "@type": "Service",

        "@id": "https://lustomotive.com/#paint-correction",

        name: "Paint Correction",

        provider: {
          "@id": "https://lustomotive.com/#business",
        },

        areaServed: {
          "@type": "City",

          name: "Panagarh",
        },
      },

      {
        "@type": "Service",

        "@id": "https://lustomotive.com/#ceramic-coating",

        name: "Ceramic Coating",

        provider: {
          "@id": "https://lustomotive.com/#business",
        },

        areaServed: {
          "@type": "City",

          name: "Panagarh",
        },
      },

      {
        "@type": "Service",

        "@id": "https://lustomotive.com/#ppf",

        name: "PPF Installation",

        provider: {
          "@id": "https://lustomotive.com/#business",
        },

        areaServed: {
          "@type": "City",

          name: "Panagarh",
        },
      },

      {
        "@type": "Service",

        "@id": "https://lustomotive.com/#interior-detailing",

        name: "Interior Detailing",

        provider: {
          "@id": "https://lustomotive.com/#business",
        },

        areaServed: {
          "@type": "City",

          name: "Panagarh",
        },
      },

      {
        "@type": "Service",

        "@id": "https://lustomotive.com/#mechanical-services",

        name: "Mechanical Services",

        provider: {
          "@id": "https://lustomotive.com/#business",
        },

        areaServed: {
          "@type": "City",

          name: "Panagarh",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
