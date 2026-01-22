'use client';
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { DatabaseIcon, ShieldCheckIcon, UserPlus2Icon, Waypoints, WaypointsIcon } from "lucide-react";

export default function FeatureStrategyFour() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const heroRef = useRef<HTMLDivElement>(null);
    const floatAnimationRef = useRef<number | undefined>(undefined);
    const parallaxY = useMotionValue(0);
  const smoothParallaxY = useSpring(parallaxY, {
    stiffness: 50,
    damping: 30,
    mass: 0.5,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleScroll = () => {
      const scrollValue = window.scrollY * 0.02;
      parallaxY.set(scrollValue);
    };

    // Smooth floating animation
  

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll, { passive: true });
    //   floatAnimationRef.current = requestAnimationFrame(animateFloat);
      return () => {
        hero.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
       
      };
    }
  }, [parallaxY]);


  return (
    <section className="relative  "
    ref={heroRef}
    id="featureone"
        >
    <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center md:text-left"
  >
    
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

 {/* left – image */}
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
  <div className="absolute -top-30 left-20 z-20 rounded-3xl shadow-soft  overflow-hidden">
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

</div>

</div>

 

          {/* Right – content */}
          <div className="space-y-6 ">
           

            <h3 className="text-4xl font-bold text-foreground">
            Marketing Communication Strategy & Consultancy

                        </h3>

            <p className=" max-w-lg">
            We craft cohesive communication strategies that ensure consistent messaging across channels, strengthening brand clarity and campaign effectiveness.
                     </p>

           <div className="flex flex-row justify-between  items-start">
           <ul className="space-y-4 pt-4">
              {[
                "Unified messaging across digital and offline channels",
                "Campaign narratives built around business objectives",
              
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                 <span className="bg-accent rounded-full w-2 h-2 flex items-center justify-center"/>
                  
                 
                  <span className="text-foreground ">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
           
           </div>
         
          </div>

         

        </div>
      </div>
      </motion.div>
    </section>
  );
}
