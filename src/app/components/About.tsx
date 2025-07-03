'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white w-full">
      <div className="mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-10 items-start"
        >
          {/* Text Content - Left Side */}
          <div className="md:w-1/2">
            <div className="text-[#7e7e6b] font-sans text-lg md:text-2xl leading-relaxed space-y-6">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 text-[#57574d]">
                About Dr. Serena Blake
              </h2>
              
              <p>
                Dr. Serena Blake is a compassionate clinical psychologist (PsyD) with eight years of experience helping clients in Los Angeles and across multiple states via telehealth. Her practice on Maplewood Drive has become a sanctuary for those seeking transformation.
              </p>
              
              <p>
                Specializing in evidence-based therapies, Dr. Blake artfully blends cognitive-behavioral techniques with mindfulness practices. Her approach is tailored to each individual, whether they&apos;re navigating anxiety, relationship challenges, or healing from trauma.
              </p>
              
              <p>
                Clients describe Dr. Blake as having a unique ability to create a space that feels both safe and empowering. Her warm professionalism and clinical expertise make each session - whether in-person or virtual - a meaningful step toward growth and wellbeing.
              </p>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="md:w-1/2 md:top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="overflow-hidden shadow-lg w-full max-w-xl"
            >
              <img 
                src="/therapist.png" 
                alt="Dr. Serena Blake in her office" 
                className="w-full h-auto object-cover"
                width={600}
                height={750}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Horizontal line divider */}
        <div className="mt-24 border-t border-[#94b0b0] w-full max-w-2xl mx-auto"></div>
      </div>
    </section>
  );
}