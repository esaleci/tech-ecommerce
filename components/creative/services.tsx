'use client';
import { services } from "./servicedata";
import { motion } from "framer-motion";

export default function ServicesSection() {
   
      

    return (
        <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6,delay: 0.2 }}
   
  
            className="relative flex justify-center items-center"
            >
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          
          {/* Section title */}
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our creative and content design services
            <br className="hidden sm:block" />
            are designed to help you achieve your goals
            </h2>
          </div>
  
          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((item, index) => (
            <div key={index} className={`rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-103 `}>
                <div className= {`flex items-center rounded-full bg-${item.bgColor} p-2 w-14 h-14 justify-center mb-4`}>
                {item.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                {item.content}
              </div>
            ))}

           
  
          </div>
        </div>
      </section>
      </motion.div>
    );
  }
  