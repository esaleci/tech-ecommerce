"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {  navItems1 } from "@/lib/data-utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";



export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    // Sync immediately on first paint (refresh while already scrolled)
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-[100] transition-all duration-500">
       <div className={`transition-all duration-500 border-b ${
        isScrolled ? "bg-white/50 backdrop-blur-md border-gray-100" : "bg-transparent border-gray-100"
      }`}>
      <div className={`w-full  mapx-4 xl:px-6 xl:max-w-6xl  2xl:max-w-7xl mx-auto  flex items-center justify-between relative z-50 px-5 transition-all duration-500 ${isScrolled ? "h-20" : "h-24"}`}>
      

        {/* Logo */}
        <Link href="/">
        <Image src="/logo11ed765d.png" alt="GrowthOptics logo - Digital marketing, creative and tech solutions" width={110} height={60} />
        {/* <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-gradient" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Tech W
          </span>
        </div> */}
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6 lg:gap-8">
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
                  className={`text-md font-bold transition-colors ${
                    isActive
                      ? "text-accent"     
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-4 sm:gap-6">
         

          <motion.div
           className="hidden md:block"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg text-white text-md font-medium bg-primary 
              transition-all duration-500 hover:bg-accent"
            >
              Contact us
            </Link>
          </motion.div>

           {/* Mobile Menu Button */}
           <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-foreground text-white hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6 " />
            )}
          </button>
        </div>
      </div>
      </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-[55]"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl lg:hidden z-[60] overflow-y-auto h-screen"
            >
              <nav className="flex flex-col p-6 space-y-1 h-full">
                {/* Close Button */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-foreground hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                {navItems1.map((item: any, index: number) => {
                  const isActive = pathname === item.href;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-lg font-bold transition-colors ${
                          isActive
                            ? "text-accent bg-accent/10"     
                            : "text-foreground hover:text-accent hover:bg-gray-50"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems1.length * 0.1 }}
                  className="pt-4 mt-4 border-t border-gray-200"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-4 py-3 rounded-lg text-center text-lg font-medium text-white bg-primary transition-all duration-500 hover:bg-accent"
                  >
                    Contact us
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
