'use client';
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeftCircleIcon, ChevronRightCircleIcon } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-5 md:py-12  xl:pt-12 xl:pb-60">
      <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center "
  >
      <div className="relative  px-6">
       
{/* Animated Background Elements */}
<div className="absolute inset-0  z-0">
        <motion.div
          
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
           
            x: { type: 'spring', stiffness: 8, damping: 70, mass: 4 },

          }}
          className="absolute top-0 right-25 w-[600px] h-[400px] sm:w-[700px] sm:h-[700px] md:w-[900px] md:h-[600px] mix-blend-multiply filter blur-3xl z-2 opacity-30"
          style={{
            borderRadius: '50%',
            transformOrigin: 'center',
            background: 'radial-gradient(circle, rgba(0, 121, 242, 0.4) 0%, rgba(0, 121, 242, 0.25) 30%, rgba(0, 121, 242, 0.15) 60%, rgba(0, 121, 242, 0.05) 85%, transparent 100%)',
          }}
        />
        {/* <div
         
          className="absolute top-0 right-0 w-72 h-72 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-50 z-10"
          style={{
            borderRadius: '20%',
            transformOrigin: 'center',
            background: 'radial-gradient(circle,  rgba(0, 121, 242, 0.15) 60%, rgba(248, 41, 220, 0.34) 85%, transparent 100%)',
          }}
        />
          <div
       
          className="absolute top-10 right-50 filter blur-3xl w-150 h-150 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-50 z-10"
          style={{
            borderRadius: '20%',
            transformOrigin: 'center',
            background: 'radial-gradient(circle,  rgba(0, 121, 242, 0.15) 0%, rgba(250, 97, 229, 0.55) 15%, transparent 100%)',
          }}
        /> */}
      </div>


      <div className="relative text-center p-5 flex flex-col items-center justify-center gap-5 z-10 ">
        <h2 className="text-4xl font-bold text-foreground py-10">Let’s build your next digital solution</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 bg-white/20  rounded-xl p-5 shadow-xl border border-1 border-background">
        <p className="text-muted max-w-sm text-center md:text-left">From strategy to execution, we build solutions that help your business move faster and grow stronger.</p>
        <Link href="/contact" className="bg-accent text-white py-3 px-6 rounded-lg 
        font-medium transition-all duration-500 hover:bg-primary-dark transition flex items-center gap-2 justify-center relative">
            Touch with us
            <ChevronRightCircleIcon className="w-6 h-6 " />
            <ChevronRightCircleIcon className="w-6 h-6 animate-ping opacity-50 absolute top-3 right-6" />
        </Link>
     
        </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
}