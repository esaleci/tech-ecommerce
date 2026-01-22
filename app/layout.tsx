import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

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
  title: "GrowthOptics | Digital Marketing, Creative & Tech Solutions for Growth",
  description: "Automate customer support, operations, and marketing workflows with AI. We help $3M-$50M e-commerce brands scale without adding headcount. Reduce costs by 75%, increase ROI 2x, and achieve 99.9% uptime.",
  keywords: [
    "e-commerce automation",
    "AI automation",
    "customer support automation",
    "marketing automation",
    "operations automation",
    "e-commerce AI",
    "business automation",
    "workflow automation",
    "scale e-commerce",
    "reduce headcount",
    "AI chatbots",
    "e-commerce solutions",
    "automation platform",
    "e-commerce operations",
    "AI-powered support"
  ],
  authors: [{ name: "Artificial Projects" }],
  creator: "Artificial Projects",
  publisher: "Artificial Projects",
  openGraph: {
    title: "Artificial Projects | AI-Powered E-commerce Automation Solutions",
    description: "Automate customer support, operations, and marketing workflows with AI. Scale your e-commerce business without adding headcount.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artificial Projects | AI-Powered E-commerce Automation",
    description: "Scale your e-commerce operations with AI automation. Reduce costs, increase ROI, and grow without adding headcount.",
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
          <main className="relative overflow-hidden 2xl:overflow-visible w-full ">
            <div className="px-4 xl:px-6 max-w-7xl mx-auto ">
          <Navbar />
        {children}
        <Footer />
        </div>
        </main>
      </body>
    </html>
  );
}
