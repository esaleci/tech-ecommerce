"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";



export default function HeroCreative() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatOffset,   setFloatOffset] = useState(0);
  const floatAnimationRef = useRef<number | undefined>(undefined);
  const parallaxY = useMotionValue(0);
  const heroRef = useRef<HTMLDivElement>(null);
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
  <div  id="creative-content"
  ref={heroRef}
   className="relative  bg-white   py-4 md:py-8 lg:py-12 ">



{/*  Background Elements */}
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
      
          transition={{
            borderRadius: {
              duration: 18,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
            },
         
          }}
          className="absolute top-50 left-30 w-[600px] h-[400px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[500px] mix-blend-multiply filter blur-3xl z-2 opacity-70"
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
          className="absolute top-50 left-50 filter blur-3xl w-150 h-150 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-90 z-10"
          style={{
            borderRadius: '20%',
            transformOrigin: 'center',
            background: 'radial-gradient(circle,  rgba(0, 121, 242, 0.15) 0%, rgba(250, 97, 229, 0.55) 15%, transparent 100%)',
          }}
        />
      </div>
      </motion.div>


      {/* Content */}
     <div className="flex flex-col w-full gap-5 items-center px-0  xl:px-6 ">





  {/* heading and description */}
  <div className="space-y-8 col-span-2 w-full">
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-4xltext-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 4xl:text-7xl font-bold mb-4 md:mb-6 text-foreground xl:leading-17 max-w-full lg:max-w-2/3"
            >
          Where creativity meets content strategy
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-foreground/95 mb-3 md:mb-4 max-w-full md:max-w-2/3 "
            >
                Our creative and content solutions combine storytelling, design, and strategy to help brands connect, communicate, and grow with clarity and purpose
            </motion.p>
           

           
          </div>


  {/* creative and content solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-3   flex-wrap justify-center items-center w-full gap-5 lg:gap-0">
        <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="col-span-1 relative flex items-center justify-center w-full"
  >
            <motion.div 
                className="relative z-10 flex items-end justify-center w-full"
                style={{
                  y: isMobile ? 0 : smoothParallaxY,
                }}
              >
               
                  
                
            <div className="relative flex w-full lg:max-w-sm flex-row flex-wrap lg:flex-col gap-5 lg:gap-0 ">
              

               {/* Card 1 */}
               <div className="block lg:absolute lg:right-0 lg:top-0 rounded-2xl bg-white  p-5 lg:p-8 xl:p-10 shadow-lg lg:w-42 xl:w-48">
                <p className="text-3xl font-semibold text-indigo-600">98%</p>
                <p className="mt-1 text-sm text-slate-600">Positive reviews</p>
              </div>

              {/* Card 2 */}
              <div className="block lg:absolute lg:right-0 lg:top-46 rounded-2xl bg-white  p-5 lg:p-8 xl:p-10 shadow-lg    lg:w-42 xl:w-48">
                <p className="text-3xl font-semibold text-indigo-600">5K</p>
                <p className="mt-1 text-sm text-slate-600">Data transaction</p>
              </div>

             

              {/* Card 3 */}
              <div className="block lg:absolute lg:left-0 lg:top-16 xl:-left-5 rounded-2xl bg-white  p-5 lg:p-8 xl:p-10 shadow-lg  lg:w-36 xl:w-48">
                <p className="text-3xl font-semibold text-indigo-600">1.2M</p>
                <p className="mt-1 text-sm text-slate-600">Active users</p>
              </div>

              {/* Spacer */}
              <div className="h-72 hidden lg:block " />
            </div>
         
        
             </motion.div>


              </motion.div>

          

              
             
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
              className="relative flex justify-center items-center col-span-2 w-full"
            >
            
          <div className="bg-accent/10 z-10 backdrop-blur-md rounded-2xl top-10 overflow-hidden shadow-soft pl-4 pt-4 ">
              <Image src="/creative-banner.webp" 
              alt="Creative content and design services showcasing brand storytelling and visual communication"
              className="object-cover rounded-2xl" 
              width={780} height={300}  priority
              sizes="(max-width: 768px) 100vw, 780px"/>
            </div>
            </motion.div>


          
       
</div>
   
        </div>

        
  </div>
  );
}
