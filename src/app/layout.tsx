import { Roboto, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Chatbot from "@/components/Chatbot";
import ScrollRestoration from "@/components/ScrollRestoration";
import Preloader from "@/components/Preloader";

import { StructuredData, metadata as seoMetadata } from "@/components/SEO";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata = seoMetadata;

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

        <Chatbot />
        <ScrollRestoration />
      </body>
    </html>
  );
}
