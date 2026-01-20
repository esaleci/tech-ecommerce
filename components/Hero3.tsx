"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import ClientsSlider from "./clients-slider";
import { ProgressBadge } from "./progressbadge";


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
          className="absolute top-24 right-130 w-[600px] h-[400px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[500px] mix-blend-multiply filter blur-3xl z-2"
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
          className="absolute top-64 right-180 filter blur-3xl w-100 h-100 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-50 z-10"
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
          
          Smart Solutions
          
            <br />
            Built to Grow
       
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-foreground/70 mb-3 md:mb-4 max-w-xl leading-relaxed"
            >
From insight to execution, we build flexible, performance-driven solutions that help brands grow, connect, and scale.
            </motion.p>
           

            {/* CTA Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-4 text-sm text-foreground"
            >
               <div className="flex -space-x-2 ">
               <div className="h-10 w-10 rounded-full  overflow-hidden flex items-center justify-center border border-white">

            <Image
              src="/avatars/avatar2.webp"
              alt="avtar-image"
              width={40}
              height={40}
              className="rounded-full  object-cover"
            />
            </div>
            <div className="h-10 w-10 rounded-full  overflow-hidden flex items-center justify-center border border-white">
            <Image
              src="/avatars/avatar3.webp"
              alt="avtar-image"
              width={40}
              height={40}
              className="rounded-full  object-cover"
            />
            </div>
            <div className="h-10 w-10 rounded-full  overflow-hidden flex items-center justify-center border border-white">
            <Image
              src="/avatars/avatar4.webp"
              alt="avtar-image"
              width={40}
              height={40}
              className="rounded-full  object-cover"
            />
            </div>
            <div className="h-10 w-10 rounded-full  overflow-hidden flex items-center justify-center border border-white">
            <Image
              src="/avatars/avatar5.webp"
              alt="avtar-image"
              width={40}
              height={40}
              className="rounded-full  object-cover"  
            />
            </div>
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
              <Image src="/home-banner.webp" 
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
                  className="absolute  -top-10 -left-140 z-20 bg-white rounded-2xl shadow-soft p-5 w-[160px] h-[160px]"
                >
                  
               {/* <Image
            src="/56percent3.png"
            alt="percentage"
            width={160}
            height={160}
            priority
            quality={100}
            loading="eager"
            className="object-contain"
          /> */}
            <svg
    viewBox="0 0 100 100"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    aria-label="85 percent progress"
  >
    {/* Outer ring */}
    <circle
      cx="50"
      cy="50"
      r="44"
      fill="none"
      stroke="#DDD6FE"
      strokeWidth="6"
    />

    {/* Inner ring background */}
    <circle
      cx="50"
      cy="50"
      r="34"
      fill="none"
      stroke="#F5F3FF"
      strokeWidth="6"
    />

    {/* Progress arc */}
    <circle
      cx="50"
      cy="50"
      r="34"
      fill="none"
      stroke="#FBCFE8"
      strokeWidth="6"
      strokeLinecap="round"
      strokeDasharray="213.6"
      strokeDashoffset="32"
      transform="rotate(-90 50 50)"
    />

    {/* Center circle */}
    <circle cx="50" cy="50" r="22" fill="#7C3AED" />

    {/* Percentage text */}
    <text
      x="50"
      y="50"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="16"
      fontWeight="700"
      fill="#FFFFFF"
      fontFamily="system-ui, -apple-system, Segoe UI, Roboto"
    >
      85%
    </text>
  </svg>
  <p className="text-foreground/70 text-[9px] font-bold">
    <span className="text-[10px] font-bold text-accent">56%</span> Performance Progress
  </p>
        
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

<div className="h-10 w-10 rounded-full  overflow-hidden flex items-center justify-center ">
                   <Image
                src="/avatars/avatar1.webp"
                alt="avtar-image"
                width={40}
                height={40}
                className="rounded-full"
              />
              </div>
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
   





{/*  client slider start from here */}
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
