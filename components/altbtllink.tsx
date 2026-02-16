'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AltBTLLink() {
  return (
    <section className="relative  overflow-hidden py-8 md:py-10 lg:py-16 xl:py-24">
     

     <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    id="altbtllink"     
   className="relative  grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* cards */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* card 1 */}
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden p-4"
           style={{
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
          }}
          >
            <div className="relative flex h-56 mb-3 rounded-2xl overflow-hidden">
              <Image
                src="/alt-btl-solutions-banner.webp"
                alt="Performance-driven digital media campaigns and marketing solutions"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600">
                Digital Media
                </span>
                {/* <span className="text-neutral-400">
                  January 24, 2024
                </span> */}
              </div>

              <h3 className="text-lg font-semibold text-neutral-900">
              Performance-driven digital campaigns
              </h3>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden p-4" 
           style={{
              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
            }}
            >
            <div className="relative flex h-56 mb-3 rounded-2xl overflow-hidden">
              <Image
                src="/marketing-banner.webp"
                alt="High-impact brand activations and experiential marketing campaigns"
                fill
                className="object-cover"
              />
            </div>

            <div className=" space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-600">
                Brand Activations
                </span>
                {/* <span className="text-neutral-400">
                  January 24, 2024
                </span> */}
              </div>

              <h3 className="text-lg font-semibold text-neutral-900">
              High-impact brand experiences
              </h3>
            </div>
          </div>
        </div>

        {/* right content */}
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-3xl font-semibold text-neutral-900 leading-snug">
          Integrated ATL & BTL  <br /> solutions
          </h2>

          <Link href="/atl-btl" className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-accent transition">
            View all services
          </Link>
        </div>
      </motion.div>  
    </section>
  );
}
