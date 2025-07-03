// components/Footer.tsx
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-[#f3f0e8] w-full">
      <div className="container mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Practice Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <img 
                src="/logo.png" 
                alt="Dr. Serena Blake Logo" 
                className="h-12 w-12 mr-3" 
              />
              <div className="font-display text-sm leading-tight">
                <p className="font-bold">Serena Blake Ph.D.</p>
                <p>Psychological Services PLLC</p>
              </div>
            </div>
            <p className="font-sans mb-4">1287 Maplewood Drive</p>
            <p className="font-sans mb-4">Los Angeles, CA 90026</p>
            <p className="font-sans mb-6">(323) 555-0192</p>
            <a 
              href="mailto:serena@blakepsychology.com" 
              className="font-sans text-[#94b0b0] hover:underline"
            >
              serena@blakepsychology.com
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 font-sans">
              <li>
                <Link href="/" className="hover:text-[#94b0b0] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#94b0b0] transition-colors">About</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#94b0b0] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#94b0b0] transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#94b0b0] transition-colors">Contact</Link>
              </li>
            </ul>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-xl font-bold mb-6">Office Hours</h3>
            <div className="font-sans space-y-4">
              <div>
                <p className="font-medium text-[#94b0b0]">In-person:</p>
                <p>Tuesday & Thursday</p>
                <p>10 AM – 6 PM</p>
              </div>
              <div>
                <p className="font-medium text-[#94b0b0]">Virtual:</p>
                <p>Monday, Wednesday & Friday</p>
                <p>1 PM – 5 PM</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-[#333] mt-16 pt-8 text-center font-sans text-sm"
        >
          <p>© {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.</p>
          <p className="mt-2">Licensed Clinical Psychologist in California (PSY12345)</p>
        </motion.div>
      </div>
    </footer>
  );
}