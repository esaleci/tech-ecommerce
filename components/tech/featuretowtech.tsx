'use client';
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Code2Icon, DatabaseIcon, Redo2Icon, ShieldCheckIcon, ShoppingBagIcon, UserPlus2Icon, Waypoints, WaypointsIcon } from "lucide-react";

export default function FeatureTwoTech() {
  


  return (
    <section className="relative  "
   
    id="featuretow"
        >
    <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center md:text-left"
  >
    
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">


  {/* left – CONTENT */}
  <div className="space-y-6 ">
 <div className="flex flex-col gap-4">
          
            <div  className="rounded-2xl bg-white p-8    "
            style={{
              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
            }}
            >
                <div className= {`flex items-center rounded-full bg-secondary  p-2 w-14 h-14 justify-center mb-4`}>

                <Code2Icon className="w-8 h-8 text-slate-100" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-slate-900"> PHP Development </h3>
                <p className="text-sm text-muted">
                Robust PHP-based solutions tailored to business needs, enabling secure, flexible, and scalable applications for enterprise systems and dynamic platforms.
              </p>
              </div>


              <div  className={`rounded-2xl bg-white p-8    `}
                style={{
                  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
                }}
                >
                <div className= {`flex items-center rounded-full bg-primary-dark  p-2 w-14 h-14 justify-center mb-4`}>
                <ShoppingBagIcon className="w-8 h-8 text-slate-100" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-slate-900">Ecommerce Website</h3>
                <p className="text-sm text-muted">
                End-to-end ecommerce solutions designed to increase conversions, streamline operations, and support secure, scalable online sales experiences.
              </p>
              </div>
            
         
          </div>

        

         

        </div>

 {/* right – Images */}
 
        <div className="relative">

{/* soft background glow */}
<div
className="absolute -top-50 left-0 w-140 h-110 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-80 z-10"
style={{
borderRadius: '20%',
transformOrigin: 'center',
background: 'radial-gradient(circle, rgba(187, 29, 255, 0.4) 0%, rgba(187, 29, 255, 0.25) 30%, rgba(187, 29, 255, 0.15) 60%, rgba(187, 29, 255, 0.05) 85%, transparent 100%)',
}}
/>





{/* floating dashboard images */}

<div className="relative z-10 flex items-end justify-center">
<div className="absolute -top-20 left-30 z-20 rounded-3xl shadow-soft  overflow-hidden ">

<Image
  src="/marketing-banner.webp"
  alt="tech solutions website,"
  width={350}
  height={200}
  className="rounded-3xl shadow-soft object-cover"
/>

</div>


<div className="absolute -top-30 left-10 rounded-xl shadow-soft w-40 h-40 shadow-xl opacity-70 p-8 " />
<div className="absolute top-10 -right-10 rounded-xl shadow-soft w-40 h-40 shadow-xl opacity-75 p-8 " />

</div>



</div>
      </div>
      </div>
      </motion.div>
    </section>
  );
}
