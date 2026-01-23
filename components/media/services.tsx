'use client';
import { servicesMedia } from "./servicedata";
import { motion } from "framer-motion";

export default function ServicesMedia() {
   
      

    return (
        <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6,delay: 0.2 }}
   
  
            className="relative flex justify-center items-center"
            >
      <section className="py-8 md:py-10 lg:py-16 xl:py-24">
       
          
          {/* Section title */}
          <div className="mb-16 max-w-full  lg:max-w-4xl text-left lg:text-center lg:mx-auto">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900  mb-5">
            Integrated ATL & BTL Advertising Solutions
           
            </h2>
            <h3 className="text-md  text-muted tracking-tight text-muted ">We deliver integrated ATL and BTL advertising solutions that maximize brand reach, audience engagement, and real-world impact across multiple channels.</h3>
          </div>
  
          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesMedia.map((item, index) => (
            <div key={index} className={`rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-103 `}
            style={{
              boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
            }}
            >
                <div className= {`flex items-center rounded-full ${item.bgColor==='slate-100' ? 'bg-slate-100' : 'bg-'+item.bgColor} p-2 w-14 h-14 justify-center mb-4`}>
                {item.icon}
                </div>
                <h3 className="mb-4 text-xl font-semibold text-slate-900">{item.title}</h3>
                {item.content}
              </div>
            ))}

           
  
          </div>
        
      </section>
      </motion.div>
    );
  }
  