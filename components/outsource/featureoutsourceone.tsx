'use client';
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { DatabaseIcon, ShieldCheckIcon, UserPlus2Icon, Waypoints, WaypointsIcon } from "lucide-react";

export default function FeatureOutsourceOne() {
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

 {/* left – CONTENT */}
 <div className="space-y-6 ">
           

            <h3 className="text-4xl font-bold text-foreground">
            Efficient Outsourcing

                        </h3>

            <p className=" max-w-lg">
            We deliver streamlined outsourcing solutions that reduce operational overhead, improve productivity, and keep your business focused on its core goals.
         </p>

           <div className="flex flex-row justify-between  items-start">
           <ul className="space-y-4 pt-4">
              {[
                "Lean teams, maximum efficiency",
                "Faster delivery with lower overhead",
                "Focus on results, not management",
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

          {/* Right – IMAGE / DASHBOARD */}
          <div className="relative">

            {/* soft background glow */}
            <motion.div
          // animate={{
          //   x: -mousePosition.x,
          //   y: -mousePosition.y,
          // }}
          transition={{ type: 'spring', stiffness: 25, damping: 35, mass: 1.5 }}
          className="absolute -top-20 left-0 w-140 h-110 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-80 z-10"
          style={{
            borderRadius: '20%',
            transformOrigin: 'center',
            background: 'radial-gradient(circle, rgba(0, 121, 242, 0.4) 0%, rgba(0, 121, 242, 0.25) 30%, rgba(0, 121, 242, 0.15) 60%, rgba(0, 121, 242, 0.05) 85%, transparent 100%)',
          }}
        />

<motion.div
          // animate={{
          //   x: -mousePosition.x,
          //   y: -mousePosition.y,
          // }}
          transition={{ type: 'spring', stiffness: 25, damping: 35, mass: 1.5 }}
          className="absolute -top-0 left-32   w-70 h-70 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-70 z-10"
          style={{
            borderRadius: '20%',
            transformOrigin: 'center',
            background: 'radial-gradient(circle, rgba(187, 29, 255, 0.4) 0%, rgba(187, 29, 255, 0.25) 30%, rgba(187, 29, 255, 0.15) 60%, rgba(187, 29, 255, 0.05) 85%, transparent 100%)',
          }}
        />
            {/* main card */}
            <div className="relative flex flex-row justify-between items-center">
            <div className="relative left-0 top-0 z-10 rounded-xl shadow-soft w-50 h-50 shadow-xl  p-8 "/>
            <div className="relative right-0 top-0 z-10 rounded-xl shadow-soft w-40 h-40 shadow-xl  p-8 "/>

 {/* floating dashboard images */}
            <motion.div 
                className="relative absolute top-0 right-100  z-10 flex items-end justify-center"
                style={{
                  y: smoothParallaxY,
                }}
              >
            <div className="relative w-full max-w-sm">
              

              {/* Card 1 */}
              <div className="absolute left-0 top-0 rounded-2xl bg-white p-10 shadow-lg w-48">
               <p className="text-3xl font-semibold text-indigo-600">+50%</p>
               <p className="mt-1 text-sm text-slate-600">Reduced Costs</p>
             </div>

             {/* Card 2 */}
             <div className="absolute left-0 top-46 rounded-2xl bg-white p-10 shadow-lg w-48">
               <p className="text-3xl font-semibold text-indigo-600">+10%</p>
               <p className="mt-1 text-sm text-slate-600">Increased Productivity</p>
             </div>

            

             {/* Card 3 */}
             <div className="absolute right-10 top-16 rounded-2xl bg-white p-10 shadow-lg w-48">
               <p className="text-3xl font-semibold text-accent">+1.2M</p>
               <p className="mt-1 text-sm text-slate-600">Focused on Core Business</p>
             </div>

             {/* Spacer */}
             <div className="h-72" />
           </div>

</motion.div>
            </div>

           
           
          </div>

         

        </div>
      </div>
      </motion.div>
    </section>
  );
}
