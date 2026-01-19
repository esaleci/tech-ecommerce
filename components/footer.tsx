'use client';
import { motion } from "framer-motion";
import { FacebookIcon, InstagramIcon, Linkedin, Mail, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <footer className="max-w-7xl mx-auto relative bg-gradient-to-br from-[#050016] via-[#0b0030] to-[#12003f] rounded-[32px] mt-24 mx-6 text-white mb-14">
      <div className=" mx-auto px-14 py-16">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad598_tech-w-light.svg"
              alt="Tech W"
              width={200}
              height={200}
            />
          </Link>

          <div className="flex items-center gap-4">
            {[
              { href: "https://www.instagram.com/", icon: <InstagramIcon className="text-foreground" /> },
              { href: "", icon: <FacebookIcon className="text-foreground" /> },
              { href: "https://in.linkedin.com/", icon: <Linkedin className="text-foreground" /> },
              { href: "https://twitter.com/", icon: <X className="text-foreground" /> },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                target="_blank"
                className="w-10 h-10 rounded-full bg-sky-400 flex items-center justify-center hover:scale-105 transition"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex flex-row justify-between gap-24 mt-16">

          {/* LEFT */}
          <div className="space-y-6 max-w-md">
            <h5 className="text-lg font-medium text-justify">
          
            Thank you for visiting our website. Connect us over given email or fill out the form we will reach you soon.

            </h5>

            <a href="mailto:info@growthoptics.com" className="text-background/80 hover:text-secondary gentle-animation text-sm font-medium flex gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-normal leading-5">info@growthoptics.com</span>
            </a>
            <a href="tel:+919960414939"  className="text-background/80 hover:text-secondary gentle-animation text-sm font-medium flex gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-normal leading-5">+91 9960414939</span>
            </a>

           

           
          </div>

          {/* PAGES */}
          <div className="lg:col-span-2 text-left">
            <h6 className="text-lg font-medium mb-6">Quick Links</h6>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm text-white/70">
              <div className="space-y-3 flex flex-col gap-2">
                <Link className="hover:text-secondary" href="/">Home</Link>
                <Link className="hover:text-secondary" href="/home-2">Home 2</Link>
                <Link className="hover:text-secondary" href="/product-pages/feature">Feature</Link>
                <Link className="hover:text-secondary" href="/company-pages/about">About</Link>
              </div>

              <div className="space-y-3 flex flex-col gap-2">
                <Link className="hover:text-secondary" href="/product-pages/pricing">Pricing</Link>
                <Link className="hover:text-secondary" href="/product-pages/pricing-ecom">Pricing (Ecom)</Link>
                <Link className="hover:text-secondary" href="/company-pages/careers">Careers</Link>
                <Link className="hover:text-secondary" href="/product-pages/integrations">Integrations</Link>
              </div>

              
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-white/20 my-12" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <div className="flex gap-6">
          <div className="text-sm text-background/70 mb-4 md:mb-0">
              © 2025 <span className="text-pink-400">growthOptics</span>. All rights reserved.
            </div>
          </div>

         
        </div>
      </div>
    </footer>
    </motion.div>
  );
}
