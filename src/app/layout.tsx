// "use client";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

// INTERNAL IMPORTS
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Meteors from "@/components/Meteors";

export const metadata: Metadata = {
  title: "Matiur Rahman - Software Engineer",
  description:
    "Developer devoted to creating great web experiences focused on React, NextJS and React Native based in Bangladesh, meet Matiur Rahman",
};

const mainFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const secondaryFont = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={` ${mainFont.variable} ${secondaryFont.variable} bg-dark overflow-x-hidden font-sans text-white`}
      >
        <div className="relative">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
