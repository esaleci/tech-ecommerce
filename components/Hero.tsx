"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { useEffect, useRef, useState } from "react";
import ClientsSlider from "./clients-slider";
import { useMediaQuery } from "react-responsive";


export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatOffset, setFloatOffset] = useState(0);
  const floatAnimationRef = useRef<number | undefined>(undefined);
  const parallaxY = useMotionValue(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const isDesktop = useMediaQuery({ minWidth: 768 });

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
    <div id="home"
      ref={heroRef}
      className="relative  bg-white  w-full max-screen ">

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-20 items-center w-full py-4 md:py-8 lg:py-12 xl:py-28">





        {/* LEFT */}
        <div className="space-y-8 xl:col-span-2">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 4xl:text-7xl font-bold mb-4 md:mb-6 text-foreground leading-tight"
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
            className="text-base sm:text-lg md:text-xl text-foreground/95 mb-3 md:mb-4 max-w-xl "
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
              className="text-foreground/95 "
            >

              Trusted already by 1K+


            </motion.p>
          </motion.div>

        </div>


        {/* RIGHT */}
        <div className="relative flex justify-start w-full items-center">

          {/*  Background Elements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0  ">
            <div
              className="absolute top-10 left-0  md:top-0 md:left-0 lg:top-0 lg:-left-20   xl:-top-20 xl:-left-80    w-full h-full md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[400px] xl:w-[900px] xl:h-[500px] mix-blend-multiply filter blur-3xl z-2"
              style={{
                borderRadius: '50%',
                transformOrigin: 'center',
                background: 'radial-gradient(circle, rgba(0, 121, 242, 0.4) 0%, rgba(0, 121, 242, 0.25) 30%, rgba(0, 121, 242, 0.15) 60%, rgba(0, 121, 242, 0.05) 85%, transparent 100%)',
              }}
            />


            <div
              className="absolute top-40 -left-10 md:top-10 md:left-20 lg:top-5 lg:left-0 xl:top-20   filter blur-3xl w-100 h-100 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-50 z-10"
              style={{
                borderRadius: '20%',
                transformOrigin: 'center',
                background: 'radial-gradient(circle,  rgba(0, 121, 242, 0.15) 0%, rgba(250, 97, 229, 0.55) 15%, transparent 100%)',
              }}
            />
          </motion.div>





          {/* Main Images Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative  flex flex-col gap-8 xl:gap-0 justify-start xl:justify-center items-start xl:items-center w-full"
          >

            <motion.div
              className="relative z-10 flex items-end justify-center"
              style={{
                y: isDesktop ? smoothParallaxY : 0,
              }}
            >
              <div

                className=" block md:absolute md:top-0 md:-left-5 lg:top-0 lg:left-5 xl:top-20 xl:-left-95 z-20 bg-white rounded-2xl shadow-soft p-5 max-w-[160px] max-h-[160px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] "
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
                <p className="text-foreground/70 text-[9px] md:!text-[7px] lg:text-[9px] font-bold w-full">
                  <span className="text-[10px] md:!text-[8px] lg:text-[10px]  font-bold text-accent">56%</span> Performance Progress
                </p>

              </div>


            </motion.div>

            <div className="absolute xl:block hidden w-[520px] h-[420px] rounded-3xl bg-primary/10 backdrop-blur-md" />
            <div className="absolute xl:block hidden w-[460px] h-[360px] rounded-3xl bg-secondary/10 translate-x-12 translate-y-16" />

            <div className="bg-white z-10 backdrop-blur-md rounded-2xl top-10 overflow-hidden shadow-soft pl-4 pt-4 self-center md:self-end xl:self-center">
              <Image src="/home-banner.webp"
                loading="eager" alt="image" priority 
                sizes="(max-width: 580px) 100vw, 580px" 
                className="object-cover rounded-2xl max-w-full  md:max-w-[25vw] xl:max-w-[27vw] desktop:max-w-[20vw] 2xl:max-w-[20vw] 3xl:max-w-[13vw] "
                width={580} height={300} />
            </div>





            <motion.div
              className="relative z-10 flex items-end justify-center"
              style={{
                y: isDesktop ? smoothParallaxY : 0,
              }}
            >
              <div

                className="block md:absolute md:-bottom-15 md:left-5 lg:-bottom-15 lg:left-20 xl:-bottom-34 xl:-left-44 z-20 bg-white rounded-2xl shadow-soft p-4 w-[280px] flex items-center gap-3"
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
              </div>
            </motion.div>

          </motion.div>




        </div>


      </div>

      {/*  client slider start from here */}
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
