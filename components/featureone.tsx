'use client';
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AvatarStack from "./avatarstack";
import { ArrowBigRightDash, ArrowUpFromDotIcon } from "lucide-react";
import { useMediaQuery } from "react-responsive";

export default function FeatureOne() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const heroRef = useRef<HTMLDivElement>(null);
    const floatAnimationRef = useRef<number | undefined>(undefined);
    const parallaxY = useMotionValue(0);
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
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-20 items-center">

          {/* LEFT – IMAGE / DASHBOARD */}
          <div className="relative  ">

            {/* soft background glow */}
            <div
         
          className="absolute top-0 right-0  lg:-top-20 lg:-left-20  w-100 h-100 lg:w-150 lg:h-150 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-80 z-10"
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
                    src="/calendar-svg.svg"
                    alt="Calendar icon for task management"
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
      src="/home-banner2.webp"
      alt="Content creation and strategy dashboard showing audience insights and performance metrics"
      width={520}
      height={360}
      className="object-cover rounded-xl"
    />
  </div>

  <div className="absolute top-1/2 -right-17  ">
   
  <div className="w-[350px] xl:block hidden opacity-80">
  <svg
    viewBox="0 0 360 200"
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    aria-label="Segmentation card"
  >
    {/* Card background */}
    <rect x="0" y="0" width="360" height="200" rx="18" fill="#FFFFFF" />

    {/* Title */}
    <text x="20" y="30" fontSize="16" fontWeight="600" fill="#0F172A">
      Segmentation
    </text>
    <text x="20" y="48" fontSize="12" fill="#94A3B8">
      All users
    </text>

    {/* Legend */}
    <circle cx="22" cy="74" r="4" fill="#E5E7EB" />
    <text x="34" y="78" fontSize="12" fill="#CBD5E1">Not specified</text>
    <text x="190" y="78" fontSize="12" fill="#CBD5E1">800</text>
    <line x1="220" y1="74" x2="250" y2="74" stroke="#E5E7EB" strokeWidth="2" />

    <circle cx="22" cy="98" r="4" fill="#0B0B2D" />
    <text x="34" y="102" fontSize="12" fill="#0F172A">Male</text>
    <text x="190" y="102" fontSize="12" fill="#0F172A">442</text>
    <line x1="220" y1="98" x2="260" y2="98" stroke="#0B0B2D" strokeWidth="2" />

    <circle cx="22" cy="122" r="4" fill="#5EC3FF" />
    <text x="34" y="126" fontSize="12" fill="#5EC3FF">Female</text>
    <text x="190" y="126" fontSize="12" fill="#5EC3FF">230</text>
    <line x1="220" y1="122" x2="250" y2="122" stroke="#5EC3FF" strokeWidth="2" />

    <circle cx="22" cy="146" r="4" fill="#7C6CFF" />
    <text x="34" y="150" fontSize="12" fill="#7C6CFF">Other</text>
    <text x="190" y="150" fontSize="12" fill="#7C6CFF">125</text>
    <line x1="220" y1="146" x2="240" y2="146" stroke="#7C6CFF" strokeWidth="2" />

    {/* Right bar */}
    <rect x="290" y="30" width="40" height="140" rx="12" fill="#E5E7EB" />
    <rect x="290" y="50" width="40" height="110" rx="12" fill="#7bc4f7" />
    <rect x="290" y="90" width="40" height="90" rx="12" fill="#e879f9" />
    <rect x="290" y="120" width="40" height="60" rx="12" fill="#0B0B2D" />

    {/* Button */}
    <rect x="20" y="160" width="90" height="26" rx="10" fill="#F1F5F9" />
    <text x="38" y="178" fontSize="12" fill="#0F172A">Details</text>
    <text x="88" y="178" fontSize="12" fill="#0F172A">›</text>
  </svg>
</div>

    
  </div>
              
            </div>
            </div>

            {/* floating dashboard images */}
            <motion.div 
                className="relative 2xl:block hidden z-10 flex items-end justify-center"
                style={{
                  y: isMobile ? 0 : smoothParallaxY,
                }}
              >
            {/* <Image
              src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad526_feature-one-dashboard.svg"
              alt="dashboard"
              width={350}
              height={220}
              className="absolute -bottom-18 -left-35 z-20 "
            /> */}
            <div className="absolute  -bottom-0 -left-35 z-20 ">
              <AvatarStack/>
            </div>
          

</motion.div>
          </div>

          {/* RIGHT – CONTENT */}
          <div className="space-y-6 text-left">
            <span className="inline-block px-4 py-1 rounded-full text-md font-medium bg-secondary text-white">
            Creative & Content
            </span>

            <h3 className="text-4xl font-bold text-foreground">
                Content Creation & Strategy
            </h3>

            <p className=" max-w-lg">
            We create purposeful content backed by clear strategy to engage audiences and drive brand growth.
            </p>

            <ul className="space-y-4 pt-4">
              {[
                "Audience research and content planning",
                "Strategic content creation aligned with brand goals",
                "Performance-driven content optimization",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 justify-start">
                 <ArrowUpFromDotIcon className="w-4 h-4 text-accent rotate-90"/>
                  <span className="text-foreground text-start">
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
