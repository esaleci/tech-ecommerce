"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";



export default function HeroOutsource() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatOffset, setFloatOffset] = useState(0);
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
    <div id="creative-content"
      ref={heroRef}
      className="relative  bg-white   py-4 md:py-8 lg:py-12">






      {/* Content */}
      <div className="flex flex-col w-full gap-5 items-center  ">





        {/* heading and description */}
        <div className="relative space-y-8 col-span-2 w-full text-left lg:text-center  mb-5 lg:mb-20 z-10">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="tetext-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 4xl:text-7xl font-bold mb-4 md:mb-6 text-foreground xl:leading-17"
          >
            Smart Outsourcing Solutions for Scalable Business Growth

          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-foreground/95 mb-3 md:mb-4  "
          >

            We provide reliable outsourcing services that help businesses reduce costs, streamline operations, and scale efficiently with dedicated expert teams.
          </motion.p>



          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex justify-center items-center py-8"
          >
            <Link
              href="/contact"
              className="p-5  rounded-lg text-white text-lg font-medium bg-accent transition-all duration-500 hover:bg-primary-dark inline-flex items-center gap-2"
            >
              Let’s Discuss Your Needs <ArrowRightIcon className="w-6 h-6" />
            </Link>
          </motion.div>






        </div>


        {/* creative and content solutions */}
        <div className="flex   justify-center items-center w-full">

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

                className="absolute -top-40 left-10 md:-top-50 md:-left-10 lg:-top-60 lg:-left-10 xl:-top-70 xl:left-0  w-[500px] h-[300px] md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[400px] xl:w-[900px] xl:h-[500px] mix-blend-multiply filter blur-3xl z-2 opacity-70"
                style={{
                  borderRadius: '50%',
                  transformOrigin: 'center',
                  background: 'radial-gradient(circle, rgba(0, 121, 242, 0.4) 0%, rgba(0, 121, 242, 0.25) 30%, rgba(0, 121, 242, 0.15) 60%, rgba(0, 121, 242, 0.05) 85%, transparent 100%)',
                }}
              />


              <div
                className="absolute -top-40 left-10 md:-top-40 md:left-10 lg:-top-70 lg:left-20 xl:-top-90 xl:left-10 filter blur-3xl w-70 h-70 xl:w-150 xl:h-150  bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-90 z-10"
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
            className="col-span-1 relative flex items-center justify-center w-full"
          >

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex justify-center items-center col-span-2 w-full"
            >

              <div className="relative z-10 backdrop-blur-md rounded-2xl overflow-hidden shadow-soft w-[100vw] h-[150px] md:h-[250px] lg:h-[300px] xl:w-[1200px] xl:h-[400px]">
                <Image
                  src="/global-business-services.avif"
                  alt="Global business outsourcing services showing scalable operations and dedicated expert teams"
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover object-center rounded-2xl"
                />
              </div>
            </motion.div>

          </motion.div>


        </div>

      </div>


    </div>
  );
}
