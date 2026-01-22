"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { ActivityIcon, ArrowUp, DecimalsArrowRight, PercentIcon } from "lucide-react";



export default function   HeroStrategy() {
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
   className="relative  bg-white  pb-40 ">



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
      <div className="flex flex-col w-full gap-5 items-center max-w-7xl mx-auto px-6 ">


  {/* heading and description */}
  <div className="relative space-y-8 col-span-2 w-full text-center mb-20 z-10">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-bold mb-4 md:mb-6 text-foreground leading-20"
          >
            Strategy & Consultancy for Sustainable Business Growth

          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-foreground/70 mb-3 md:mb-4  leading-relaxed"
          >
We help brands make smarter decisions through integrated strategy, market insight, and data-driven consulting. Our approach aligns business goals, brand positioning, and communication strategy to create long-term competitive advantage.
</motion.p>



         






        </div>



  


  {/*  media */}
        <div className="relative flex flex-col justify-center items-center w-full">

        <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
              className="relative flex justify-start items-center"
            >
             
          <div className="absolute -left-70 top-0 w-full h-full rounded-3xl bg-secondary/10 translate-x-12 translate-y-16" />

          <div className="bg-white z-10 backdrop-blur-md rounded-2xl self-start overflow-hidden shadow-soft  pt-3">
            <div className="px-5 flex flex-row gap-2 items-center justify-start mb-2">
                 <DecimalsArrowRight className="w-8 h-8 text-accent" />
                <span className="text-2xl font-bold text-foreground">From Insight to Execution</span>
            </div>
              <Image src="/strategy-bussiness-growth.webp" 
              priority alt=""  className="object-cover rounded-2xl"
              width={580} height={300} sizes="(max-width: 580px) 100vw, 580px" />
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
                className="relative z-1 flex items-end justify-center"
                style={{
                  y: smoothParallaxY,
                }}
              >
                <div
                 
                  className="absolute  -top-80 -right-120 z-1  rounded-2xl shadow-soft p-5 w-[160px] h-[160px]"
                >
                  
            
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
    <span className="text-[10px] font-bold text-accent">85% </span> Strategic Clarity
  </p>
        
             </div>


              </motion.div>

            <motion.div 
                className="relative z-10 flex items-end justify-center"
                style={{
                  y: smoothParallaxY,
                }}
              >
               <div
                  className="absolute -top-30 left-50 z-20 bg-white rounded-2xl shadow-soft p-4 w-[280px] flex items-center gap-3 border border-gray-100"
                >

<div className=" overflow-hidden flex flex-row gap-5 items-start justify-between w-full">
     
<div className="text-md text-muted flex items-center justify-center">
                <ArrowUp className="w-4 h-4 text-accent" />
                <span className="text-xs font-bold text-accent">Increased</span>
              </div>
              <div className="text-md font-bold text-foreground flex flex-col items-center justify-center">
                <span className="text-xs font-bold text-foreground">Profit Margin</span>  
                <span className="text-sm font-bold text-accent">+10%</span>
              </div>
             
              
           

            </div>
            </div>
              </motion.div>

              
              </motion.div>
</div>
   





        </div>

        
  </div>
  );
}
