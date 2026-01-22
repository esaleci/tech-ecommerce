'use client';

import { motion } from "framer-motion";
import { BoomBox, BoxesIcon, ChartNoAxesColumn, PrinterCheckIcon, RadarIcon, ShieldCheckIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdsBanner() {
  return (
    <section className="relative py-10 md:py-32">
      <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <div className=" p-6  bg-secondary text-white rounded-3xl shadow-soft shadow-xl">
     <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-20 items-center">
        <div className=" col-span-2 flex flex-col justify-center items-center md:items-start gap-6">
            <h3 className="text-3xl font-bold text-center md:text-left">
            Integrated ATL & BTL solutions
            </h3>

            <Link
            href="/login"
            className="p-5 rounded-lg  text-lg font-medium bg-white text-foreground"
          >
            View ATL & BTL services
          </Link>

        </div>
        <div className="col-span-3  flex flex-row flex-wrap justify-center md:justify-between items-center md:items-start gap-5 md:gap-4 xl:gap-12 mt-8 md:mt-0  pr-0 xl:pr-32">
        <div className="bg-[#7bc4f7] rounded-full p-2 w-20 h-20 flex items-center justify-center">
        <PrinterCheckIcon className="w-8 h-8 text-white" />
        </div>
        <div className="bg-white rounded-full p-2 w-20 h-20 flex items-center justify-center">
        <Image loading="eager" src="/ad-tv.webp" 
        alt="logo" width={100} height={100} className="object-cover rounded-full h-full w-full" />
        </div>
        <div className="bg-white rounded-full p-2 w-20 h-20 overflow-hidden flex items-center justify-center">
        <Image loading="eager" 
        src="/ad-mob.webp" 
        alt="logo"  width={100} height={100} className="object-cover rounded-full h-full w-full" />
        </div>
        <div className="bg-[#7bc4f7] rounded-full p-2 w-20 h-20 flex items-center justify-center">
        <BoxesIcon className="w-8 h-8 text-white" />
        </div>
        <div className="flex flex-row flex-wrap w-full justify-between items-start gap-5 xl:gap-12 px-10 md:px-20">
        <div className="  bg-[#7bc4f7] rounded-full p-2 w-20 h-20 flex items-center justify-center">
        <BoomBox className="w-8 h-8 text-white" />
        </div>
        <div className="  bg-[#7bc4f7] rounded-full p-2 w-20 h-20 flex items-center justify-center">
        <RadarIcon className="w-8 h-8 text-white" />
        </div>
        </div>
       
        </div>

     </div>
    </div>
    </motion.div>
    </section>
  );
}