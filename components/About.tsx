'use client';

import { motion } from 'framer-motion';
import Section from './Section';

export default function About() {
  const features = [
    {
      title: 'Customer Support Automation',
      description: 'AI-powered support that handles inquiries 24/7',
      icon: '🤖',
    },
    {
      title: 'Operations Automation',
      description: 'Streamline workflows and reduce manual tasks',
      icon: '⚙️',
    },
    {
      title: 'Marketing Automation',
      description: 'Scale campaigns without scaling headcount',
      icon: '📈',
    },
    {
      title: 'Enterprise Scale',
      description: 'Built for $3M-$50M brands ready to grow',
      icon: '🚀',
    },
  ];

  return (
    <Section
      id="about"
      title="About Us"
      subtitle="We create exceptional digital experiences"
      className="bg-white"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h3 className="text-3xl font-bold mb-6 text-gray-800 font-[var(--font-outfit)]">
            Scale Without Adding Headcount
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Artificial Projects helps e-commerce brands automate their most critical workflows. 
            From customer support to operations and marketing, we enable brands to scale efficiently without the overhead of additional team members.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our AI-powered platform integrates seamlessly with your existing tools, 
            learning your brand voice and processes to deliver consistent, high-quality 
            results that grow with your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 max-w-md mx-auto md:max-w-none md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-gradient-to-br from-[#0079F2]/5 to-[#00d4ff]/5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

