'use client';
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { DatabaseIcon, ShieldCheckIcon, UserPlus2Icon, Waypoints, WaypointsIcon } from "lucide-react";
import { useMediaQuery } from "react-responsive";

export default function FeatureStrategyOne() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const heroRef = useRef<HTMLDivElement>(null);
    const floatAnimationRef = useRef<number | undefined>(undefined);
    const parallaxY = useMotionValue(0);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
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
    
      <div className=" pt-24 md:pt-48 xl:pt-60 pb-8 md:pb-10 lg:pb-16 xl:pb-24 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-20 items-center">

 {/* left – CONTENT */}
 <div className="space-y-6 text-left ">
           

            <h3 className="text-3xl md:text-4xl  font-bold text-foreground">
            Strategic Integrated Solutions

                        </h3>

            <p className=" max-w-lg">
            We deliver integrated strategic solutions that align business goals, market insights, and execution plans to solve real challenges and drive sustainable growth.
         </p>

           <div className="flex flex-row justify-between  items-start">
           <ul className="space-y-4 pt-4">
              {[
                "Business goals aligned with actionable strategy",
                "Cross-channel planning and execution",
                "Scalable solutions for long-term growth",
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
            <div
        
          className="absolute -top-10 left-0 md:-top-0 md:left-0 lg:-top-10 lg:left-0  w-100 h-70  lg:w-140 lg:h-110  bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-80 z-10"
          style={{
            borderRadius: '20%',
            transformOrigin: 'center',
            background: 'radial-gradient(circle, rgba(0, 121, 242, 0.4) 0%, rgba(0, 121, 242, 0.25) 30%, rgba(0, 121, 242, 0.15) 60%, rgba(0, 121, 242, 0.05) 85%, transparent 100%)',
          }}
        />

<div
         
          className="absolute -bottom-10 left-32 md:-bottom-10 md:left-0 lg:-bottom-20 lg:left-32   w-70 h-70  bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-70 z-10"
          style={{
            borderRadius: '20%',
            transformOrigin: 'center',
            background: 'radial-gradient(circle, rgba(187, 29, 255, 0.4) 0%, rgba(187, 29, 255, 0.25) 30%, rgba(187, 29, 255, 0.15) 60%, rgba(187, 29, 255, 0.05) 85%, transparent 100%)',
          }}
        />


            {/* main card */}
            <div className="relative flex  items-center">
            <div className="relative left-0 -top-0 z-9 bg-primary-dark/10 rounded-xl shadow-soft   h-50 w-50 shadow-xl   w-full  hidden md:block "/>
          <div className="block md:absolute flex top-0 left-0 xl:left-10 z-10 w-full h-full mt-8 md:max-w-[40vw] md:max-h-[200px] lg:max-w-full lg:max-h-full   ">

            <Image
      src="/home-banner2.webp"
      alt="content,creativity,strategy,social,seo,growth,grow branding solutions"
      width={520}
      height={360}
      className="object-cover rounded-xl "
    />
    </div>
   
 {/* floating dashboard images */}
            <motion.div 
                className="relative absolute top-0 right-100  z-10 flex items-end justify-center hidden md:block"
                style={{
                  y: isMobile ? 0 : smoothParallaxY,
                }}
              >
            <div className="relative w-full max-w-sm">
              

             

             {/* Card 3 */}
             <div className="absolute -right-50 top-50 lg:right-0 lg:top-40 xl:right-10 xl:top-16 rounded-2xl bg-white p-5 xl:p-10 shadow-lg w-32  xl:w-48 ">
               <p className="lg:text-3xl text-xl font-semibold text-accent">+10%</p>
               <p className="mt-1 text-sm text-slate-600">Increased ROI</p>
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
