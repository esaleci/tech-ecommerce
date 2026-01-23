'use client';
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { DatabaseIcon, ShieldCheckIcon, UserPlus2Icon, Waypoints, WaypointsIcon } from "lucide-react";
import { useMediaQuery } from "react-responsive";

export default function FeatureTow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const floatAnimationRef = useRef<number | undefined>(undefined);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
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

        <div className="py-8 md:py-10 lg:py-16 xl:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

            {/* left – CONTENT */}
            <div className="space-y-6 text-left order-2 md:order-1 z-20">
              <span className="inline-block px-4 py-1 rounded-full text-md font-medium bg-accent text-white">
                Digital Marketing
              </span>

              <h3 className="text-4xl font-bold text-foreground">
                Strategic digital growth
              </h3>

              <p className=" max-w-lg">
                We help brands connect with the right audience and scale their digital presence with performance-focused marketing.
              </p>

              <div className="flex flex-col gap-5 md:flex-row md justify-between  items-start">
                <div className="flex flex-col justify-start items-start gap-2">
                  <div className="bg-primary-dark rounded-full p-2 w-12 h-12 flex items-center justify-center">
                    <UserPlus2Icon className="w-8 h-8 text-white" /></div>
                  <span className="text-foreground ">Audience & Channel Strategy</span>
                </div>
                <div className="flex flex-col justify-start items-start gap-2">
                  <div className="bg-primary-dark rounded-full p-2 w-12 h-12 flex items-center justify-center">
                    <WaypointsIcon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-foreground ">Campaign Execution & Optimization</span>
                </div>
              </div>

            </div>

            {/* Right – IMAGE / DASHBOARD */}
            <div className="relative order-1 md:order-2">

              {/* soft background glow */}
              <div

                className="absolute -top-20 left-10 md:-top-50 md:left-0 w-140 h-110 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-80 z-10"
                style={{
                  borderRadius: '20%',
                  transformOrigin: 'center',
                  background: 'radial-gradient(circle, rgba(0, 121, 242, 0.4) 0%, rgba(0, 121, 242, 0.25) 30%, rgba(0, 121, 242, 0.15) 60%, rgba(0, 121, 242, 0.05) 85%, transparent 100%)',
                }}
              />

              <div


                className="absolute -bottom-20 left-10 md:-bottom-50 md:left-32   w-70 h-70 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-70 z-10"
                style={{
                  borderRadius: '20%',
                  transformOrigin: 'center',
                  background: 'radial-gradient(circle, rgba(187, 29, 255, 0.4) 0%, rgba(187, 29, 255, 0.25) 30%, rgba(187, 29, 255, 0.15) 60%, rgba(187, 29, 255, 0.05) 85%, transparent 100%)',
                }}
              />
              {/* main card */}
              <div className="relative md:block hidden z-10 rounded-xl shadow-soft w-50 h-20 shadow-xl  p-8 " />






              {/* floating dashboard images */}
              <motion.div
                className="relative z-10 flex items-end justify-center"
                style={{
                  y: isMobile ? 0 : smoothParallaxY,
                }}
              >
                <Image
                  src="/income-png.png"
                  alt="dashboard"

                  width={200}
                  height={400}
                  className="md:absolute block   z-20 rounded-3xl shadow-soft "
                />

              </motion.div>
            </div>



          </div>
        </div>
      </motion.div>
    </section>
  );
}
