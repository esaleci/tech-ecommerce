"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { navItems } from "@/lib/data-utils";



export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white">
      <div className="max-w-2/3 mx-auto px-6 py-16 h-[72px] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
        <Image src="/logo11ed765d.png" alt="logo" width={150} height={100} />
        {/* <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-brand-gradient" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Tech W
          </span>
        </div> */}
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <motion.div
                key={item.name}
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <Link
                  href={item.href}
                  className={`text-lg font-bold transition-colors ${
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
        <div className="flex items-center gap-6">
         

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg text-white text-lg font-medium bg-primary transition-all duration-500 hover:bg-accent"
            >
              Contact us
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
