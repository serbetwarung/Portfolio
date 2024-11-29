'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { contactInfo } from '../data';
import HackerText from './HackerText';

const socialLinks = [
  {
    icon: FaGithub,
    href: contactInfo.socials.github,
    label: 'GitHub',
    hoverColor: 'hover:text-gray-600'
  },
  {
    icon: FaLinkedin,
    href: contactInfo.socials.linkedin,
    label: 'LinkedIn',
    hoverColor: 'hover:text-blue-600'
  },
  {
    icon: FaEnvelope,
    href: `mailto:${contactInfo.email}`,
    label: 'Email',
    hoverColor: 'hover:text-red-600'
  },
  {
    icon: FaWhatsapp,
    href: `https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, '')}`,
    label: 'WhatsApp',
    hoverColor: 'hover:text-green-600'
  }
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                <HackerText text="Naufal Fattah Rizqi" />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <HackerText text="Internet Engineering Technology Student" />
            </motion.p>
            
            <motion.div 
              className="flex justify-center md:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl text-gray-600 dark:text-gray-300 transition-colors duration-200 ${social.hoverColor}`}
                  whileHover={{ 
                    scale: 1.2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div 
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96"
              whileHover={{ 
                scale: 1.05,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/profile.png"
                alt="Naufal Fattah Rizqi"
                fill
                className="rounded-full object-cover shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
