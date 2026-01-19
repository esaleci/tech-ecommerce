'use client';
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { DatabaseIcon, ShieldCheckIcon } from "lucide-react";

export default function FeatureTree() {
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

 {/* left – CONTENT */}
 <div className="relative">

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
      y: smoothParallaxY,
    }}
  >
<Image
  src="https://cdn.prod.website-files.com/66e4045e3214e190ccaad452/66e4045e3214e190ccaad4f6_feature-four-dashboard.svg"
  alt="dashboard"
  width={300}
  height={400}
  className=""
/>

</motion.div>
</div>
 

          {/* Right – IMAGE / DASHBOARD */}
          <div className="space-y-6 ">
            <span className="inline-block px-4 py-1 rounded-full text-md font-medium bg-primary-dark text-white">
              Feature 3
            </span>

            <h3 className="text-4xl font-bold text-foreground">
            Analytics & reporting

            </h3>

            <p className=" max-w-lg">
            To provide robust data management solutions to help you organize, store, and secure your valuable information.

</p>

<ul className="space-y-4 pt-4">
              {[
                "Data encryption and protection",
                "Secure login process",
                "Role-Based access control",
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
