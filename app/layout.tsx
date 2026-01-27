import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "GrowthOptics | Digital Marketing, Creative & Tech Solutions",
  description: "We build flexible, performance-driven solutions that help brands grow, connect, and scale. From content strategy to digital marketing and tech solutions, we deliver results that matter.",
  authors: [{ name: "GrowthOptics" }],
  creator: "GrowthOptics",
  publisher: "GrowthOptics",
  openGraph: {
    title: "GrowthOptics | Digital Marketing, Creative & Tech Solutions",
    description: "Smart solutions built to grow. We help brands connect with audiences, create compelling content, and build reliable digital systems that drive business growth.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GrowthOptics | Digital Marketing, Creative & Tech Solutions",
    description: "Smart solutions built to grow. Performance-driven digital marketing, content strategy, and tech solutions for modern brands.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
          <Navbar />
          <main className="relative overflow-hidden 2xl:overflow-visible w-full ">
            <div className="relative px-4 xl:px-6 xl:max-w-6xl  2xl:max-w-7xl mx-auto ">
          <div className=" relative z-10 bg-white ">
            <div className="pt-24">
              {children}
            </div>
            <Footer />
          </div>
        </div>
        </main>
      </body>
    </html>
  );
}
