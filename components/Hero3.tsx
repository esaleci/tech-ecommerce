"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import ClientsSlider from "./clients-slider";


export default function Hero3() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatOffset,   setFloatOffset] = useState(0);
  const floatAnimationRef = useRef<number | undefined>(undefined);
  const parallaxY = useMotionValue(0);
  const heroRef = useRef<HTMLDivElement>(null);

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
      const scrollValue = window.scrollY * 0.08;
      parallaxY.set(scrollValue);
    };

    // Smooth floating animation
    const animateFloat = () => {
      const time = Date.now() * 0.001;
      setFloatOffset(Math.sin(time) * 10);
      floatAnimationRef.current = requestAnimationFrame(animateFloat);
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll, { passive: true });
      floatAnimationRef.current = requestAnimationFrame(animateFloat);
      return () => {
        hero.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
        if (floatAnimationRef.current) {
          cancelAnimationFrame(floatAnimationRef.current);
        }
      };
    }
  }, [parallaxY]);

  return (
  <div  id="home"
  ref={heroRef}
   className="relative  bg-white   ">

{/* Animated Background Elements */}
<motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex justify-center items-center"
            >
<div className="absolute inset-0  ">
        <motion.div
          animate={{
            x: mousePosition.x * 0.20,
            // y: mousePosition.y * 0.25,
            scaleX: [
              1,
              1.80,
              1.5,
              1.30,
              1,
            ],
            // scaleY: [
            //   1,
            //   0.95,
            //   1.08,
            //   0.97,
            //   1,
            // ],
            borderRadius: [
              '50% 50% 50% 50%',
              '52% 48% 50% 50%',
              '50% 50% 48% 52%',
              '48% 52% 50% 50%',
              '50% 50% 50% 50%',
            ],
          }}
          transition={{
            borderRadius: {
              duration: 18,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
            },
            scaleX: {
              duration: 16,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
            },
            // scaleY: {
            //   duration: 16,
            //   repeat: Infinity,
            //   ease: [0.4, 0, 0.6, 1],
            // },
            x: { type: 'spring', stiffness: 8, damping: 70, mass: 4 },
            // y: { type: 'spring', stiffness: 8, damping: 70, mass: 4 },
          }}
          className="absolute top-32 right-32 md:top-40 md:right-40 lg:top-24 lg:right-130 w-[600px] h-[400px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[600px] mix-blend-multiply filter blur-3xl z-2"
          style={{
            borderRadius: '50%',
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
          className="absolute top-52 right-32 md:top-52 md:right-40 lg:top-24 lg:right-130 w-72 h-72 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-50 z-10"
          style={{
            borderRadius: '20%',
            transformOrigin: 'center',
            background: 'radial-gradient(circle,  rgba(0, 121, 242, 0.15) 60%, rgba(248, 41, 220, 0.34) 85%, transparent 100%)',
          }}
        />
          <motion.div
          // animate={{
          //   x: -mousePosition.x,
          //   y: -mousePosition.y,
          // }}
          transition={{ type: 'spring', stiffness: 25, damping: 35, mass: 1.5 }}
          className="absolute top-52 right-32 md:top-52 md:right-40 lg:top-64 lg:right-180 filter blur-3xl w-150 h-150 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-50 z-10"
          style={{
            borderRadius: '20%',
            transformOrigin: 'center',
            background: 'radial-gradient(circle,  rgba(0, 121, 242, 0.15) 0%, rgba(250, 97, 229, 0.55) 15%, transparent 100%)',
          }}
        />
      </div>
      </motion.div>


      {/* Content */}
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center max-w-7xl mx-auto px-6 py-28">





  {/* LEFT */}
  <div className="space-y-8 col-span-2">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-bold mb-4 md:mb-6 text-foreground leading-tight"
            >
          
            Inspire action
            <br />
            with Tech W
       
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-foreground/70 mb-3 md:mb-4 max-w-xl leading-relaxed"
            >
               Our comprehensive suite of tools is designed to bring teams together,
               streamline workflows, and drive success.
            </motion.p>
           

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-4 text-sm text-foreground"
            >
               <div className="flex -space-x-2">
            <Image
              src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad4c7_avtar-01.avif"
              alt="avtar-image"
              width={40}
              height={40}
              className="rounded-full border border-white"
            />
            <Image
              src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad4a3_avtar-02.avif"
              alt="avtar-image"
              width={40}
              height={40}
              className="rounded-full border border-white"
            />
            <Image
              src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad4a4_avtar-03.avif"
              alt="avtar-image"
              width={40}
              height={40}
              className="rounded-full border border-white"
            />
            <Image
              src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad4a7_avtar-04.avif"
              alt="avtar-image"
              width={40}
              height={40}
              className="rounded-full border border-white"
            />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-foreground/70 "
            >
               
            Trusted already by 1K+
          
               
            </motion.p>
            </motion.div>
            
          </div>


  {/* RIGHT */}
        <div className="relative flex justify-center items-center">

        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
              className="relative flex justify-center items-center"
            >
              <div className="absolute w-[520px] h-[420px] rounded-3xl bg-primary/10 backdrop-blur-md" />
          <div className="absolute w-[460px] h-[360px] rounded-3xl bg-secondary/10 translate-x-12 translate-y-16" />

          <div className="bg-white z-10 backdrop-blur-md rounded-2xl top-10 overflow-hidden shadow-soft pl-4 pt-4 ">
              <Image src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad5b1_hero-image-one.avif" 
              loading="eager" alt="image" className="object-cover rounded-2xl" 
              width={580} height={300} />
            </div>
            </motion.div>


          
               <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="text-center md:text-left"
  >
            <motion.div 
                className="relative z-10 flex items-end justify-center"
                style={{
                  y: smoothParallaxY,
                }}
              >
                <motion.div
                  // style={{
                  //   y: floatOffset,
                  // }}
                  className="absolute -top-10 -left-140 z-20 bg-white rounded-2xl shadow-soft p-5 w-[160px]"
                >
               <Image
            src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad4c9_hero-dashboard-01.svg"
            alt="dashboard"
            width={200}
            height={200}
            priority
            className="transition-transform duration-700 will-change-transform"
          />
             </motion.div>


              </motion.div>

            <motion.div 
                className="relative z-10 flex items-end justify-center"
                style={{
                  y: smoothParallaxY,
                }}
              >
                <motion.div
                  // style={{
                  //   y: floatOffset,
                  // }}
                  className="absolute -bottom-60 -left-89 z-20 bg-white rounded-2xl shadow-soft p-4 w-[280px] flex items-center gap-3"
                >
                   <Image
                src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad5ac_avtar-05.avif"
                alt="avtar-image"
                width={40}
                height={40}
                className="rounded-full"
              />
            <div>
              <div className="text-md font-bold text-foreground">
                Morning daily meeting
              </div>
              <div className="text-md text-muted">
                09:00 am – 11:00 am
              </div>
            </div>
             </motion.div>
              </motion.div>

              
              </motion.div>
</div>
   






        </div>

        
<motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.10 }}
              className="w-full"
            >
             <ClientsSlider />
            </motion.div>  
  </div>
  );
}
