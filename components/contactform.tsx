'use client';
import { motion } from "framer-motion";
import { FacebookIcon, InstagramIcon, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="relative bg-white py-8">
      <div className="max-w-6xl mx-auto px-6">

      <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
        {/* TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-7xl md:text-5xl font-bold text-foreground">
            Get in contact
          </h1>
          <p className="mt-4 text-muted">
            Our doors are open for inquiries, feedback, and collaboration. Reach
            out to us and let’s connect. Let me know if you need any further
            modifications!
          </p>
        </div>
</motion.div>


<motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
        {/* INFO ROW */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center mb-20">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-2">Email</h2>
            <a
              href="mailto:hello@example.com"
              className="text-foreground hover:underline"
            >
               connect@growthoptics.in
            </a>
          </div>

          <div>
            <h2 className="ftext-xl font-bold text-foreground mb-2">Address</h2>
            <p className="text-muted">
            No. 21 & 21A, Sector 142, Noida - 201304
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-2">Talk to us</h2>
            <a
              href="tel:+919960414939"
              className="text-foreground hover:underline"
            >
              +91 9960414939
            </a>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">Social icon</h2>
            <div className="flex justify-center gap-4">
              {[
                {
                  href: "https://www.facebook.com/",
                  icon: <FacebookIcon className="text-white w-4 h-4" />,
                },
                {
                  href: "https://www.instagram.com/",
                  icon: <InstagramIcon className="text-white w-4 h-4" />,
                },
                {
                  href: "https://www.twitter.com/",
                  icon: <Linkedin className="text-white w-4 h-4" />,
                },
              ].map((item, i) => (
                <Link
                key={i}
                href={item.href}
                target="_blank"
                className="w-6 h-6 rounded-full bg-foreground text-white flex items-center justify-center hover:scale-105 transition"
              >
                {item.icon}
              </Link>
                
              ))}
            </div>
          </div>
        </div>
        </motion.div>

        <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16 relative max-w-3xl mx-auto "
  >

<div className="absolute inset-0">
                {/* soft background glow */}
                <motion.div
          // animate={{
          //   x: -mousePosition.x,
          //   y: -mousePosition.y,
          // }}
          transition={{ type: 'spring', stiffness: 25, damping: 35, mass: 1.5 }}
          className="absolute top-0 -left-50 w-140 h-110 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-3xl opacity-80 z-10"
          style={{
            borderRadius: '20%',
            transformOrigin: 'center',
            background: 'radial-gradient(circle, rgba(0, 121, 242, 0.4) 0%, rgba(0, 121, 242, 0.25) 30%, rgba(0, 121, 242, 0.15) 60%, rgba(0, 121, 242, 0.05) 85%, transparent 100%)',
          }}
        />

<motion.div
          // animate={{
          //   x: -mousePosition.x,
          //   y: -mousePosition.y,
          // }}
          transition={{ type: 'spring', stiffness: 25, damping: 35, mass: 1.5 }}
          className="absolute top-0 -right-10   w-100 h-100 bg-[#00d4ff]/35 rounded-full mix-blend-multiply filter blur-2xl opacity-70 z-10"
          style={{
            borderRadius: '20%',
            transformOrigin: 'center',
            background: 'radial-gradient(circle, rgba(187, 29, 255, 0.4) 0%, rgba(187, 29, 255, 0.25) 30%, rgba(187, 29, 255, 0.15) 60%, rgba(187, 29, 255, 0.05) 85%, transparent 100%)',
          }}
        />
        </div>



        {/* FORM */}
        <div className="relative z-20 mx-auto bg-white text-left border border-gray-100 rounded-2xl shadow-xl p-10 z-20">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
        </motion.div>
      
       
      </div>
    </section>
  );
}
