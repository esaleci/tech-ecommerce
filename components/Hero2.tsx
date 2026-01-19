"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";
import ClientsSlider from "./clients-slider";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // very subtle movement
  const yMain = useSpring(
    useTransform(scrollYProgress, [0, 1], [-12, 12]),
    { stiffness: 60, damping: 22 }
  );

  const yTop = useSpring(
    useTransform(scrollYProgress, [0, 1], [-8, 8]),
    { stiffness: 55, damping: 20 }
  );

  const yBottom = useSpring(
    useTransform(scrollYProgress, [0, 1], [-6, 6]),
    { stiffness: 50, damping: 26 }
  );

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-white py-20"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">

        {/* LEFT */}
        <div className="space-y-8 col-span-2">
          <h1 className="text-[48px] leading-tight font-semibold text-foreground">
            Inspire action
            <br />
            with Tech W
          </h1>

          <p className="text-muted max-w-md">
            Our comprehensive suite of tools is designed to bring teams together,
            streamline workflows, and drive success.
          </p>

          {/* avatars – unchanged */}
          <div className="flex items-center gap-4 text-sm text-foreground">
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
            Trusted already by 1K+
          </div>
        </div>


         {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden ">
        <motion.div
          animate={{
            x: mousePosition.x * 0.50,
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
          animate={{
            x: -mousePosition.x,
            y: -mousePosition.y,
          }}
          transition={{ type: 'spring', stiffness: 25, damping: 35, mass: 1.5 }}
          className="absolute top-52 right-32 md:top-52 md:right-40 lg:top-24 lg:right-130 w-72 h-72 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-50 z-10"
          style={{
            borderRadius: '20%',
            transformOrigin: 'center',
            background: 'radial-gradient(circle,  rgba(0, 121, 242, 0.15) 60%, rgba(248, 41, 220, 0.34) 85%, transparent 100%)',
          }}
        />
          <motion.div
          animate={{
            x: -mousePosition.x,
            y: -mousePosition.y,
          }}
          transition={{ type: 'spring', stiffness: 25, damping: 35, mass: 1.5 }}
          className="absolute top-52 right-32 md:top-52 md:right-40 lg:top-64 lg:right-180 filter blur-3xl w-150 h-150 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-50 z-10"
          style={{
            borderRadius: '20%',
            transformOrigin: 'center',
            background: 'radial-gradient(circle,  rgba(0, 121, 242, 0.15) 0%, rgba(250, 97, 229, 0.55) 15%, transparent 100%)',
          }}
        />
      </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center">

          {/* background glow – static */}
          <div className="absolute w-[520px] h-[520px] rounded-full
            bg-[radial-gradient(circle,_rgba(124,108,255,0.25)_0%,_rgba(232,121,249,0.15)_45%,_transparent_70%)]"
          />

          {/* glass frames – static */}
          <div className="absolute w-[520px] h-[420px] rounded-3xl bg-primary/10 backdrop-blur-md" />
          <div className="absolute w-[460px] h-[360px] rounded-3xl bg-secondary/10 translate-x-12 translate-y-16" />

          {/* TOP CARD – animated */}
          <motion.div
            style={{ y: yTop }}
            className="absolute top-10 -left-50 z-20 bg-white rounded-2xl shadow-soft p-5 w-[160px]"
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

          {/* MAIN IMAGE – animated */}
          <motion.div
            style={{ y: yMain }}
            className="relative z-10 rounded-3xl overflow-hidden shadow-soft"
          >
            {/* <Image
              src="/meeting.jpg"
              alt="Meeting"
              width={420}
              height={300}
              className="object-cover"
              priority
            /> */}
            <div className="bg-white backdrop-blur-md rounded-2xl top-10 overflow-hidden shadow-soft pl-4 pt-4 ">
              <Image src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad5b1_hero-image-one.avif" 
              loading="eager" alt="image" className="object-cover rounded-3xl" 
              width={370} height={300} />
            </div>

          </motion.div>

          {/* BOTTOM CARD – animated */}
          <motion.div
            style={{ y: yBottom }}
            className="absolute -bottom-36 left-36 z-20 bg-white rounded-2xl shadow-soft p-4 w-[280px] flex items-center gap-3"
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

        </div>
      </div>


      <div>
      <ClientsSlider />
      </div>
    </motion.section>
  );
}
