'use client';

import { motion } from 'framer-motion';
import Section from './Section';

export default function Services() {
  const services = [
    {
      title: 'Customer Support Automation',
      description:
        'AI-powered chatbots and support systems that handle customer inquiries, returns, and issues 24/7, reducing response times and support costs.',
      color: 'from-[#0079F2] to-[#0066d6]',
    },
    {
      title: 'Operations Automation',
      description:
        'Streamline order processing, inventory management, and fulfillment workflows to eliminate manual tasks and reduce errors.',
      color: 'from-[#00d4ff] to-[#00b8e6]',
    },
    {
      title: 'Marketing Automation',
      description:
        'Automate email campaigns, social media, and customer segmentation to scale your marketing efforts without scaling your team.',
      color: 'from-[#0079F2] to-[#00d4ff]',
    },
    {
      title: 'Analytics & Insights',
      description:
        'Real-time dashboards and AI-driven insights to help you make data-driven decisions and optimize your operations.',
      color: 'from-[#0066d6] to-[#0079F2]',
    },
  ];

  return (
    <Section
      id="services"
      title="Our Services"
      subtitle="Automate your workflows and scale efficiently"
      className="bg-gradient-to-br from-gray-50 to-[#0079F2]/5"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />
            <div className="relative p-8">
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
              >
                {index + 1}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

