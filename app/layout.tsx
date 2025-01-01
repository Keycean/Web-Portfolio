import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'; // Importing GeistSans font
import { GeistMono } from 'geist/font/mono'; // Importing GeistMono font

import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

// Importing the GeistSans and GeistMono fonts to use in the app
const geistSans = GeistSans({
  weight: '400', // Example weight, adjust if needed
  style: 'normal', // Default style
  subsets: ["latin"], // Specify subsets (if required)
});

const geistMono = GeistMono({
  weight: '400',
  style: 'normal',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Space Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Swiper CSS */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        />
        {/* Swiper JS */}
        <script
          src="https://unpkg.com/swiper/swiper-bundle.min.js"
          defer
        ></script>
      </head>
      <body
        className={`${geistSans.className} ${geistMono.className} bg-[#000000] overflow-y-scroll overflow-x-hidden`} // Applying Geist fonts to body
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
