'use client';
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function FeatureOne() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const heroRef = useRef<HTMLDivElement>(null);
    const floatAnimationRef = useRef<number | undefined>(undefined);
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
    
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT – IMAGE / DASHBOARD */}
          <div className="relative">

            {/* soft background glow */}
            <motion.div
          // animate={{
          //   x: -mousePosition.x,
          //   y: -mousePosition.y,
          // }}
          transition={{ type: 'spring', stiffness: 25, damping: 35, mass: 1.5 }}
          className="absolute top-52 right-32 md:top-52 md:right-40 lg:-top-20 lg:-left-20 w-150 h-150 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-80 z-10"
          style={{
            borderRadius: '20%',
            transformOrigin: 'center',
            background: 'radial-gradient(circle, rgba(0, 121, 242, 0.4) 0%, rgba(0, 121, 242, 0.25) 30%, rgba(0, 121, 242, 0.15) 60%, rgba(0, 121, 242, 0.05) 85%, transparent 100%)',
          }}
        />
            {/* main card */}
            <div className="relative z-10 rounded-xl shadow-soft border border-gray-100 shadow-xl  p-8 ">

              {/* card header */}
              <div className="flex items-center justify-between pb-5">
                <div className="flex items-center gap-3">
                  <Image
                    src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad4e3_feature-icon-one.svg"
                    alt="icon"
                    width={50}
                    height={50}
                  />
                  <h3 className="text-lg font-medium text-foreground">
                    Today tasks
                  </h3>
                </div>
                <span className="text-[12px] text-foreground  cursor-pointer rounded-full bg-white shadow-soft   px-4 py-1">
                  See all
                </span>
              </div>

              {/* image */}
              <div className="relative ">
              <div className="relative z-10">
    <Image
      src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad5b7_feature-image-one.avif"
      alt="feature"
      width={520}
      height={360}
      className="object-cover rounded-xl"
    />
  </div>

  <div className="absolute top-1/2 -right-23 ">
    <Image
      src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad4d5_feature-two-dashboard.svg"
      alt="dashboard"
      width={350}
      height={360}
      className="opacity-80 "
    />
  </div>
              
            </div>
            </div>

            {/* floating dashboard images */}
            <motion.div 
                className="relative z-10 flex items-end justify-center"
                style={{
                  y: smoothParallaxY,
                }}
              >
            <Image
              src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad526_feature-one-dashboard.svg"
              alt="dashboard"
              width={350}
              height={220}
              className="absolute -bottom-18 -left-35 z-20 "
            />

</motion.div>
          </div>

          {/* RIGHT – CONTENT */}
          <div className="space-y-6 ">
            <span className="inline-block px-4 py-1 rounded-full text-md font-medium bg-secondary text-white">
              Feature 1
            </span>

            <h3 className="text-4xl font-bold text-foreground">
              User authentication
            </h3>

            <p className=" max-w-lg">
              We prioritize the security of your data and ensure that only
              authorized users have access to your account.
            </p>

            <ul className="space-y-4 pt-4">
              {[
                "Data encryption and protection",
                "Secure login process",
                "Role-Based access control",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Image
                    src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad4ed_feature-icon.svg"
                    alt="icon"
                    width={25}
                    height={25}
                  />
                  <span className="text-foreground ">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      </motion.div>
    </section>
  );
}
