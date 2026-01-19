'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Section from './Section';

interface Project {
  title: string;
  category: string;
  gradient: string;
  image: string;
  placeholder: string;
}

interface PortfolioCardProps {
  project: Project;
  index: number;
}

function PortfolioCard({ project, index }: PortfolioCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const y = useMotionValue(0);
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const cardTop = rect.top;
      const cardHeight = rect.height;
      const cardCenter = cardTop + cardHeight / 2;
      const viewportCenter = windowHeight / 2;

      // Calculate progress based on card center position relative to viewport center
      // Progress: -1 when card is far above, 0 when centered, 1 when far below
      const distanceFromCenter = viewportCenter - cardCenter;
      const maxDistance = windowHeight + cardHeight;
      const progress = Math.max(-1, Math.min(1, distanceFromCenter / maxDistance));
      
      // Normalize to 0-1 range for useTransform
      const normalizedProgress = (progress + 1) / 2;

      setScrollProgress(normalizedProgress);
      y.set(normalizedProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [y]);

  // Parallax effect for background image - moves slower than scroll (downward)
  const backgroundY = useTransform(
    smoothY,
    [0, 1],
    ['-8%', '8%']
  );

  // Parallax effect for top image - moves faster than scroll (upward)
  const topImageY = useTransform(
    smoothY,
    [0, 1],
    ['8%', '-8%']
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} automation results`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.src = project.placeholder;
                  }}
                />
      </motion.div>
    
      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
      />
      
      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
        {/* Image at top with Parallax */}
        <motion.div
          className="w-full h-32 mb-4 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20"
          style={{ y: topImageY }}
        >
                      <img
                        src={project.image}
                        alt={`${project.category} automation showcase - ${project.title}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to placeholder if image doesn't exist
                          e.currentTarget.src = project.placeholder;
                        }}
                      />
        </motion.div>
        
        {/* Text at bottom */}
        <div className="mt-auto">
          <span className="text-sm font-medium mb-2 opacity-90 block">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold">{project.title}</h3>
        </div>
      </div>
      
      <motion.div
        className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"
        initial={false}
      />
    </motion.div>
  );
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: '75% Reduction in Support Costs',
      category: 'Customer Support Automation',
      gradient: 'from-[#0079F2] to-[#00d4ff]',
      image: '/support.png',
      placeholder: '/support.png',
    },
    {
      title: '3x Faster Order Processing',
      category: 'Operations Automation',
      gradient: 'from-[#00d4ff] to-[#0079F2]',
      image: '/speed.png',
      placeholder: '/speed.png',
    },
    {
      title: '2x Marketing ROI',
      category: 'Marketing Automation',
      gradient: 'from-[#0079F2] to-[#0066d6]',
      image: '/roi3.png',
      placeholder: '/roi3.png',
    },
    {
      title: 'Zero Headcount Growth',
      category: 'Scale Achievement',
      gradient: 'from-[#00d4ff] to-[#00b8e6]',
      image: '/ai3.png',
      placeholder: '/ai3.png',
    },
    {
      title: '24/7 Customer Support',
      category: 'AI Implementation',
      gradient: 'from-[#0066d6] to-[#0079F2]',
      image: '/24-7.png',
      placeholder: '/24-7.png',
    },
    {
      title: '99.9% Uptime',
      category: 'Reliability',
      gradient: 'from-[#0079F2] to-[#00d4ff]',
      image: '/99.png',
      placeholder: '/99.png',
    },
  ];

  return (
    <Section
      id="portfolio"
      title="Results That Matter"
      subtitle="Real outcomes from brands we work with"
      className="bg-white"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <PortfolioCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}

