'use client';

import { motion } from "framer-motion";
import { BoxesIcon, ChartNoAxesColumn, RadarIcon, ShieldCheckIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AdsBanner() {
  return (
    <section className="relative py-32">
      <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <div className="max-w-7xl mx-auto p-6  bg-secondary text-white rounded-3xl shadow-soft shadow-xl">
     <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-center">
        <div className="space-y-6 col-span-2 flex flex-col justify-center items-start gap-6">
            <h3 className="text-3xl font-bold">
            Integration with industry-leading tools
            </h3>

            <Link
            href="/login"
            className="p-5 rounded-lg  text-lg font-medium bg-white text-foreground"
          >
            View more integrations
          </Link>

        </div>
        <div className="col-span-3  flex flex-row flex-wrap justify-between items-start gap-12 pr-32">
        <div className="bg-[#7bc4f7] rounded-full p-2 w-20 h-20 flex items-center justify-center">
        <ChartNoAxesColumn className="w-8 h-8 text-white" />
        </div>
        <div className="bg-white rounded-full p-2 w-20 h-20 flex items-center justify-center">
        <Image loading="eager" src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad4e8_integrations-logo-03.svg" alt="logo" width={40} height={40} />
        </div>
        <div className="bg-white rounded-full p-2 w-20 h-20 flex items-center justify-center">
        <Image loading="eager" src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad50d_integrations-logo-02.svg" alt="logo" width={40} height={40} />
        </div>
        <div className="bg-[#7bc4f7] rounded-full p-2 w-20 h-20 flex items-center justify-center">
        <BoxesIcon className="w-8 h-8 text-white" />
        </div>
        <div className="flex flex-row flex-wrap w-full justify-between items-start gap-12 px-20">
        <div className=" top-0 left-0 bg-[#7bc4f7] rounded-full p-2 w-20 h-20 flex items-center justify-center">
        <ShieldCheckIcon className="w-8 h-8 text-white" />
        </div>
        <div className=" top-0 right-0 bg-[#7bc4f7] rounded-full p-2 w-20 h-20 flex items-center justify-center">
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