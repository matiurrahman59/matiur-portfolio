import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Roboto_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Matiur Rahman - Software Engineer",
  description:
    "Hi there, this is Matiur Rahman a MERN stack developer from Bangladesh. I am using latest technologies to build modern, stylish web pages. I have great web experiences focused on React, NextJS and React Native",
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
        className={` ${mainFont.variable} ${secondaryFont.variable} bg-dark font-sans text-white`}
      >
        <div
          className="relative"
          style={{
            overflow: "hidden",
          }}
        >
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
