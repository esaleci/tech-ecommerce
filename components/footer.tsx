'use client';
import { navItems1, navItems2 } from "@/lib/data-utils";
import { motion } from "framer-motion";
import { FacebookIcon, InstagramIcon, Linkedin, Mail, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Footer() {
  const pathname = usePathname();
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <footer className="relative bg-gradient-to-br from-[#050016] via-[#0b0030] to-[#12003f] rounded-3xl md:rounded-[32px] mt-24 mx-0 md:mx-6 text-white mb-14">
      <div className=" mx-auto  md:px-14 md:py-16 p-6">

        {/* TOP */}
        <div className="flex flex-col md:flex-row items-center justify-start md:justify-between gap-5 md:gap-8 ">
          <Link href="/" className="flex items-center w-full  gap-3">
            {/* <Image
              src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad598_tech-w-light.svg"
              alt="Tech W"
              width={200}
              height={200}
            /> */}
             <Image
              src="/logo11ed765d.png"
              alt="Tech W"
              width={170}
              height={100}
            />
          </Link>

          <div className="flex items-center w-full md:w-auto gap-4">
            {[
              { href: "https://www.instagram.com/", icon: <InstagramIcon className="text-foreground" /> },
              { href: "", icon: <FacebookIcon className="text-foreground" /> },
              { href: "https://www.linkedin.com/company/86808961/", icon: <Linkedin className="text-foreground" /> },
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
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24 mt-8 ">

          {/* LEFT */}
          <div className="flex flex-col space-y-6 flex-1">
            <h5 className="text-lg font-medium text-start">
          
            GrowthOptics delivers integrated digital, marketing, and technology solutions for modern brands.
                        </h5>
                        
            
            <a href="mailto:info@growthoptics.com" className="text-background/80 max-w-content hover:text-secondary gentle-animation text-sm font-medium inline-flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-normal leading-5">info@growthoptics.com</span>
            </a>
            <a href="tel:+919960414939"  className="text-background/80 max-w-content hover:text-secondary gentle-animation text-sm font-medium inline-flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-normal leading-5">+91 9960414939</span>
            </a>

           

           
          </div>

          {/* PAGES */}
          <div className="lg:col-span-2 text-left flex-1">
            <h6 className="text-lg font-medium mb-6">Quick Links</h6>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center gap-8 text-sm text-white/70">
             
              {navItems1.map((item: any) => {
            const isActive = pathname === item.href;

            return (
              <motion.div
                key={item.name}
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <Link
                  href={item.href}
                  className={`transition-colors ${
                      
                      " hover:text-secondary"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
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
