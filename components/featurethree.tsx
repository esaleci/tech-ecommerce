'use client';
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { DatabaseIcon, Plus, ShieldCheckIcon } from "lucide-react";
import { useMediaQuery } from "react-responsive";

export default function FeatureThree() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

  {/* Right – IMAGE / DASHBOARD */}
 <div className="relative z-20 ">

{/* soft background glow */}


<motion.div
// animate={{
//   x: -mousePosition.x,
//   y: -mousePosition.y,
// }}
transition={{ type: 'spring', stiffness: 25, damping: 35, mass: 1.5 }}
className="absolute top-0 left-0 w-140 h-110 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-80 z-10"
style={{
borderRadius: '20%',
transformOrigin: 'center',
background: 'radial-gradient(circle, rgba(187, 29, 255, 0.4) 0%, rgba(187, 29, 255, 0.25) 30%, rgba(187, 29, 255, 0.15) 60%, rgba(187, 29, 255, 0.05) 85%, transparent 100%)',
}}
/>


{/* floating dashboard images */}
<motion.div 
    className="relative z-10 flex items-end justify-center"
    style={{
      y: isMobile ? 0 : smoothParallaxY,
    }}
  >

<div className="w-[400px] h-[300px] flex flex-col gap-5 items-center justify-center">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 360" fill="none">
  <defs>
    <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#8B5CF6"/>
      <stop offset="1" stop-color="#60A5FA"/>
    </linearGradient>
    <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#A78BFA"/>
      <stop offset="1" stop-color="#93C5FD"/>
    </linearGradient>
  </defs>

  {/* <!-- connectors --> */}
  <path d="M160 110 C220 80, 260 80, 315 105" stroke="#C7D2FE" stroke-width="2" stroke-linecap="round"/>
  <path d="M205 230 C255 200, 300 195, 355 205" stroke="#DDD6FE" stroke-width="2" stroke-linecap="round"/>
  {/* <path d="M360 140 C395 160, 410 185, 415 220" stroke="#C7D2FE" stroke-width="2" stroke-linecap="round"/> */}

  {/* <!-- Card 1 --> */}
  <rect x="64" y="64" width="180" height="120" rx="18" fill="#FFFFFF" stroke="#EDE9FE" stroke-width="2"/>
  {/* <!-- bars --> */}
  <rect x="88" y="140" width="10" height="20" rx="5" fill="#DDD6FE"/>
  <rect x="104" y="128" width="10" height="32" rx="5" fill="#C7D2FE"/>
  <rect x="120" y="116" width="10" height="44" rx="5" fill="#A78BFA"/>
  <rect x="136" y="124" width="10" height="36" rx="5" fill="#93C5FD"/>
  <rect x="152" y="106" width="10" height="54" rx="5" fill="url(#g1)"/>

  {/* <!-- small status dots --> */}
  <circle cx="92" cy="92" r="5" fill="#A78BFA"/>
  <circle cx="110" cy="92" r="5" fill="#93C5FD"/>
  <circle cx="128" cy="92" r="5" fill="#DDD6FE"/>

  {/* <!-- Card 2 --> */}
  <rect x="270" y="58" width="200" height="140" rx="20" fill="#FFFFFF" stroke="#EDE9FE" stroke-width="2"/>
  {/* <!-- line chart --> */}
  <path d="M296 160 C320 130, 345 150, 368 120 C392 90, 410 115, 438 98"
        stroke="url(#g2)" stroke-width="4" stroke-linecap="round"/>
  <circle cx="296" cy="160" r="5" fill="#60A5FA"/>
  <circle cx="368" cy="120" r="5" fill="#8B5CF6"/>
  <circle cx="438" cy="98" r="5" fill="#A78BFA"/>

  {/* <!-- mini server icon --> */}
  <rect x="300" y="78" width="70" height="34" rx="10" fill="#F5F3FF" stroke="#DDD6FE" stroke-width="2"/>
  <rect x="312" y="90" width="34" height="6" rx="3" fill="#C7D2FE"/>
  <circle cx="360" cy="95" r="4" fill="#A78BFA"/>

  {/* <!-- mini database icon --> */}
  <g transform="translate(392 72)">
    <ellipse cx="28" cy="10" rx="22" ry="8" fill="#F5F3FF" stroke="#DDD6FE" stroke-width="2"/>
    <path d="M6 10v26c0 6 10 10 22 10s22-4 22-10V10" fill="#F5F3FF" stroke="#DDD6FE" stroke-width="2"/>
    <path d="M6 24c0 6 10 10 22 10s22-4 22-10" stroke="#C7D2FE" stroke-width="2"/>
    <path d="M6 36c0 6 10 10 22 10s22-4 22-10" stroke="#C7D2FE" stroke-width="2"/>
  </g>

  {/* <!-- Card 3 --> */}
  <rect x="120" y="214" width="220" height="86" rx="18" fill="#FFFFFF" stroke="#EDE9FE" stroke-width="2"/>
  {/* <!-- chip icon --> */}
  <rect x="142" y="238" width="42" height="42" rx="12" fill="#F5F3FF" stroke="#DDD6FE" stroke-width="2"/>
  <path d="M156 259h14" stroke="#A78BFA" stroke-width="3" stroke-linecap="round"/>
  <path d="M163 252v14" stroke="#93C5FD" stroke-width="3" stroke-linecap="round"/>

  {/* <!-- integration nodes --> */}
  <circle cx="222" cy="252" r="8" fill="#A78BFA"/>
  <circle cx="254" cy="268" r="7" fill="#93C5FD"/>
  <circle cx="286" cy="248" r="7" fill="#DDD6FE"/>
  <path d="M222 252 L254 268 L286 248" stroke="#C7D2FE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

  {/* <!-- Right slim stack (system blocks) -->
  <rect x="400" y="220" width="52" height="110" rx="18" fill="#F5F3FF" stroke="#EDE9FE" stroke-width="2"/>
  <rect x="400" y="220" width="52" height="34" rx="18" fill="#111827" opacity="0.9"/>
  <rect x="400" y="254" width="52" height="28" fill="#60A5FA"/>
  <rect x="400" y="282" width="52" height="48" rx="18" fill="#8B5CF6"/> */}
</svg>

<div className="inline-flex items-center gap-4 rounded-2xl bg-white px-4 py-3 shadow-sm">
      {/* Icon */}
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-white">
        <Plus size={18} />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-slate-900">
        All services active
        </span>
        <span className="text-xs text-slate-500">
          24 devices in use
        </span>
      </div>

      {/* Action */}
      <button className="ml-2 rounded-full bg-sky-400 px-4 py-1 text-xs font-medium text-white hover:bg-sky-500 transition">
        See all
      </button>
    </div>
</div>

</motion.div>
</div>
 

         {/* left – CONTENT */}
          <div className="space-y-6 text-left">
            <span className="inline-block px-4 py-1 rounded-full text-md font-medium bg-primary-dark text-white">
            Tech Solutions
            </span>

            <h3 className="text-4xl font-bold text-foreground">
            Reliable digital systems

            </h3>

            <p className=" max-w-lg">
            We design and develop secure, scalable software solutions that power business operations, improve efficiency, and support long-term growth.
</p>

<ul className="space-y-4 pt-4">
              {[
                "System architecture and development",
                "Security, performance, and scalability",
                "Integration and automation",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                 <span className="bg-accent rounded-full w-2 h-2 flex items-center justify-center"/>
                  
                 
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
