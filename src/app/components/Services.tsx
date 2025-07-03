// components/Services.tsx
'use client';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Develop personalized strategies to reduce anxiety, manage stress responses, and build emotional resilience. Our evidence-based approach helps you regain control and find calm in daily life.",
      image: "/Anxiety.jpg"
    },
    {
      title: "Relationship Counseling",
      description: "Improve communication, resolve conflicts, and deepen connections in your relationships. Whether couples or individuals, we provide tools for healthier, more fulfilling interpersonal dynamics.",
      image: "/Relationship.png"
    },
    {
      title: "Trauma Recovery",
      description: "Specialized trauma-informed care to process painful experiences safely. Our approach helps you rebuild trust, reduce trauma symptoms, and reclaim your sense of safety and self.",
      image: "/trauma.jpg"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#f3f0e8] w-full">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-10 text-center text-[#57574D]">
            Areas of Focus
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="bg-[#f3f0e8] p-8 rounded-lg w-full h-full flex flex-col items-center">
                  <div className="w-80 h-80 rounded-full overflow-hidden mb-6">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                      width={160}
                      height={160}
                    />
                  </div>
                  <h3 className="font-display text-2xl mb-4 text-center text-[#333]">
                    {service.title}
                  </h3>
                  <p className="text-[#7e7e6b] font-sans text-center">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Horizontal line divider */}
          <div className="mt-24 border-t border-[#94b0b0] w-full max-w-2xl mx-auto"></div>
        </motion.div>
      </div>
    </section>
  );
}