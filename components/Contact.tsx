'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import Section from './Section';
import AnimatedNumberRandom from './ui/shuffle-number';
import { SocialIcons } from './SocialIcons';

export default function Contact() {
  // Normal state: small number with negative percentage
  const normalValue = 50.00;
  const normalDiff = -0.0564; // Negative percentage

  // Hover state: large number with positive percentage
  const hoverValue = 2125.95;
  const hoverDiff = 0.0564; // Positive percentage

  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile (has hover capability)
  useEffect(() => {
    const checkMobile = () => {
      // Check if device supports hover (desktop) or not (mobile/touch)
      const hasHover = window.matchMedia('(hover: hover)').matches;
      setIsMobile(!hasHover);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-animate on mobile every 1 second
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setIsHovered((prev) => !prev);
    }, 1000); // 1 second

    return () => clearInterval(interval);
  }, [isMobile]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  const phoneNumber = 'tel:+1234567890'; // You can change this to your desired phone number

  return (
    <Section
      id="contact"
      title="Join Us Now"
      subtitle="Turn high costs into greater profits"
      className="bg-gradient-to-br from-[#0079F2]/5 via-[#00d4ff]/5 to-[#0079F2]/5"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-8"
        >
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
              Join us now and turn high costs into greater profits
            </h3>
          </motion.div>

          {/* Animated Number Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-full flex flex-col items-center justify-center gap-3"
          >
            {/* Status Text */}
            <motion.p
              key={isHovered ? 'future' : 'current'}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-sm md:text-base font-medium text-gray-600"
            >
              {isHovered ? 'This is your future' : 'You are here now'}
            </motion.p>

            {/* Number Display */}
            <AnimatedNumberRandom
              value={isHovered ? hoverValue : normalValue}
              diff={isHovered ? hoverDiff : normalDiff}
            />
          </motion.div>

          {/* Contact Us Button and Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
          >
            <motion.a
              href={phoneNumber}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-[#0079F2] to-[#00d4ff] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.a>
            
            <SocialIcons />
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
