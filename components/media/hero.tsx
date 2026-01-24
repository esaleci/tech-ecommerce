"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";



export default function HeroMedia() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatOffset, setFloatOffset] = useState(0);
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
    <div id="creative-content"
      ref={heroRef}
      className="relative  bg-white   py-4 md:py-8 lg:py-12">



    


      {/* Content */}
      <div className="flex flex-col w-full gap-5 items-center  ">





        {/* heading and description */}
        <div className="space-y-8 col-span-2 w-full text-left">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-bold mb-4 md:mb-6 text-foreground lg:leading-20 lg:max-w-2/3 "
          >
            Powerful ATL & BTL Strategies for Real Brand Impact
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-foreground/70 mb-3 md:mb-4 lg:max-w-2/3 lg:leading-relaxed"
          >
            We deliver integrated ATL and BTL marketing solutions that combine mass media reach with targeted engagement to increase brand visibility, strengthen customer connections, and drive measurable business growth across offline and online channels.
          </motion.p>



        </div>


        {/* creative and content solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-3   flex-wrap justify-center items-center w-full gap-5 lg:gap-0">

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
          <div

           
            className="absolute top-0 -left-20 md:-top-10 md:left-50 lg:top-0 lg:left-50 xl:-top-70 xl:left-10  w-[500px] h-[300px] md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[400px] xl:w-[900px] xl:h-[500px] mix-blend-multiply filter blur-3xl z-2 opacity-70"
            style={{
              borderRadius: '50%',
              transformOrigin: 'center',
              background: 'radial-gradient(circle, rgba(0, 121, 242, 0.4) 0%, rgba(0, 121, 242, 0.25) 30%, rgba(0, 121, 242, 0.15) 60%, rgba(0, 121, 242, 0.05) 85%, transparent 100%)',
            }}
          />


          <div
           className="absolute top-0 -left-10 md:top-0 md:left-50 lg:-top-50 lg:left-50 xl:-top-70 xl:left-30 filter blur-3xl w-70 h-70 lg:w-150 lg:h-150  bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-90 z-10"
            style={{
              borderRadius: '20%',
              transformOrigin: 'center',
              background: 'radial-gradient(circle,  rgba(0, 121, 242, 0.15) 0%, rgba(250, 97, 229, 0.55) 15%, transparent 100%)',
            }}
          />
        </div>
      </motion.div>


          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex justify-center items-center col-span-2 w-full order-2 lg:order-1"
          >

            <div className="bg-accent/10 z-10 backdrop-blur-md rounded-2xl top-10 overflow-hidden shadow-soft pl-4 pt-4 ">
              <Image src="/alt-btl-solutions-banner.webp"
                alt="Creative and content strategy services by GrowthOptics"
                className="object-cover rounded-2xl"
                width={780} height={300} priority
                sizes="(max-width: 768px) 100vw, 780px" />
            </div>
          </motion.div>



          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="col-span-1 relative flex items-center justify-center order-1 lg:order-2"
          >
            <motion.div
              className="relative z-10 flex items-end justify-center"
              style={{
                y: isMobile ? 0 : smoothParallaxY,
              }}
            >


              <div className="relative flex items-center justify-center">
                <div className="relative flex w-full lg:max-w-sm flex-row flex-wrap lg:flex-col gap-5 lg:gap-0">


                  {/* Card 1 */}
                  <div className="block lg:absolute lg:-right-10 lg:-top-90 rounded-2xl bg-white  p-5 lg:p-8 xl:p-10 shadow-lg lg:w-42 xl:w-48">
                    <p className="text-3xl font-semibold text-indigo-600">+50%</p>
                    <p className="mt-1 text-sm text-slate-600">Increased ROI</p>
                  </div>

                  {/* Card 2 */}
                 



                  {/* Card 3 */}
                  <div className="block lg:absolute lg:left-20 lg:-top-70 rounded-2xl bg-white p-5 lg:p-8 xl:p-10 shadow-lg    lg:w-42 xl:w-48">
                    <p className="text-3xl font-semibold text-indigo-600">+1.2M</p>
                    <p className="mt-1 text-sm text-slate-600">Sales Generated</p>
                  </div>

                  <div className="block lg:absolute lg:-right-10 lg:-top-40 rounded-2xl bg-white p-5 lg:p-8 xl:p-10 shadow-lg    lg:w-42 xl:w-48">
                    <p className="text-3xl font-semibold text-indigo-600">+10%</p>
                    <p className="mt-1 text-sm text-slate-600">Increased Brand Awareness</p>
                  </div>

                  {/* Spacer */}
                  {/* <div className="h-72 hidden lg:block " /> */}
                </div>
              </div>

            </motion.div>


          </motion.div>










        </div>

      </div>


    </div>
  );
}
