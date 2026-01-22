'use client';
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { DatabaseIcon, Redo2Icon, ShieldCheckIcon, TabletSmartphoneIcon, UserPlus2Icon, Waypoints, WaypointsIcon, WorkflowIcon } from "lucide-react";

export default function FeatureOneTech() {
   


  return (
    <section className="relative  "
   
    id="featureone"
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


  {/* left – IMAGE / DASHBOARD */}
  <div className="relative">

{/* soft background glow */}
<div
className="absolute -top-50 left-0 w-140 h-110 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-80 z-10"
style={{
borderRadius: '20%',
transformOrigin: 'center',
background: 'radial-gradient(circle, rgba(0, 121, 242, 0.4) 0%, rgba(0, 121, 242, 0.25) 30%, rgba(0, 121, 242, 0.15) 60%, rgba(0, 121, 242, 0.05) 85%, transparent 100%)',
}}
/>

<div
className="absolute -bottom-50 left-32   w-70 h-70 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-70 z-10"
style={{
borderRadius: '20%',
transformOrigin: 'center',
background: 'radial-gradient(circle, rgba(187, 29, 255, 0.4) 0%, rgba(187, 29, 255, 0.25) 30%, rgba(187, 29, 255, 0.15) 60%, rgba(187, 29, 255, 0.05) 85%, transparent 100%)',
}}
/>









{/* floating dashboard images */}
<div className="relative z-10 flex items-end justify-center max-w-full">
  <div className="absolute -top-50 left-30 z-20 rounded-3xl shadow-soft  overflow-hidden">
<Image
  src="/tech-solutions-website.webp"
  alt="tech solutions website,"
  width={400}
  height={150}
  className="rounded-3xl shadow-soft "
/>
</div>
<div className="absolute top-10 left-10 rounded-xl shadow-soft w-40 h-40 shadow-xl  p-8 " />
<div className="absolute top-0 left-0 rounded-xl shadow-soft w-40 h-40 shadow-xl  p-8 " />
<Image
  src="/income.png"
  alt="tech solutions website,"
  width={200}
  height={400}
  className="absolute -bottom-40 left-20 z-20 rounded-3xl shadow-soft "
/>
</div>

</div>

 {/* right – CONTENT */}
 <div className="space-y-6 ">
 <div className="flex flex-col gap-4">
          
            <div  className="rounded-2xl bg-white p-8    "
            style={{
              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
            }}
            >
                <div className= {`flex items-center rounded-full bg-primary  p-2 w-14 h-14 justify-center mb-4`}>

                <TabletSmartphoneIcon className="w-8 h-8 text-slate-100" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-slate-900">Web Application Development </h3>
                <p className="text-sm text-muted">
                We develop scalable, high-performance web applications that improve business workflows, enhance user experience, and support long-term operational growth.
                </p>
              </div>


              <div  className={`rounded-2xl bg-white p-8    `}
                style={{
                  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
                }}
                >
                <div className= {`flex items-center rounded-full bg-accent  p-2 w-14 h-14 justify-center mb-4`}>
                <WorkflowIcon className="w-8 h-8 text-slate-100" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-slate-900"> Content Management System </h3>
                <p className="text-sm text-muted">
                Custom CMS solutions that simplify content control, improve team collaboration, and provide secure, role-based access for growing businesses.
                </p>
              </div>
            
         
          </div>

        

         

        </div>
      </div>
      </div>
      </motion.div>
    </section>
  );
}
