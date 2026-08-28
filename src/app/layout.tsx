import type { Metadata } from "next";
import { Roboto, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Chatbot from "@/components/Chatbot";
import ScrollRestoration from "@/components/ScrollRestoration";
import Preloader from "@/components/Preloader";

import StructuredData from "@/components/StructuredData";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lustomotive.com"),
  title: {
    default: "Lustomotive | West Bengal's #1 Auto Solution",
    template: "%s | Lustomotive",
  },
  description: "Professional car detailing, maintenance, PPF, ceramic coatings, and automotive services in Panagarh, West Bengal.",
  keywords: ["car detailing Panagarh", "car wash Panagarh", "paint protection film", "PPF", "ceramic coating", "auto repair", "Amar Bharat Company", "Lustomotive"],
  authors: [{ name: "Lustomotive" }],
  creator: "Lustomotive",
  publisher: "Lustomotive By AmarBharatCompany",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://lustomotive.com",
    siteName: "Lustomotive",
    title: "Lustomotive | West Bengal's #1 Auto Solution",
    description: "Professional car detailing, maintenance, PPF, ceramic coatings, and automotive services in Panagarh, West Bengal.",
    images: [
      {
        url: "/images/lustomotive_small_logo.png",
        width: 1200,
        height: 630,
        alt: "Lustomotive Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lustomotive | West Bengal's #1 Auto Solution",
    description: "Professional car detailing, maintenance, PPF, ceramic coatings, and automotive services in Panagarh, West Bengal.",
    images: ["/images/lustomotive_small_logo.png"],
    creator: "@lustomotive", // Placeholder if they don't have one, or just omit. We can omit creator if not provided.
  },
  icons: {
    icon: "/images/lustomotive_small_logo.png",
    apple: "/images/lustomotive_small_logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${roboto.variable} ${orbitron.variable} antialiased bg-black text-white min-h-screen flex flex-col font-sans overflow-x-hidden hide-scrollbar`}>
        <StructuredData />
        <Preloader />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />

        <StructuredData />
        <Chatbot />
        <ScrollRestoration />
      </body>
    </html>
  );
}
