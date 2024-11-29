'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollSection } from '../hooks/useScrollSection';
import {
  navbarVariants,
  menuItemVariants,
  underlineVariants,
  menuContainerVariants,
  glowVariants
} from '../utils/animations/navbarVariants';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const scrollToSection = useScrollSection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => ({
        id: item.id,
        offset: document.getElementById(item.id)?.offsetTop || 0
      }));

      const currentPosition = window.scrollY + window.innerHeight / 3;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        if (currentPosition >= sections[i].offset) {
          if (activeSection !== sections[i].id) {
            setActiveSection(sections[i].id);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleItemClick = (id: string) => {
    scrollToSection(id);
    setActiveSection(id);
  };

  return (
    <motion.nav
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex justify-center h-16"
          variants={menuContainerVariants}
        >
          <div className="flex space-x-2 sm:space-x-4 md:space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative"
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <motion.button
                  onClick={() => handleItemClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm sm:text-base font-medium relative
                    ${activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300'
                    }`}
                  variants={menuItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {item.label}
                  
                  {/* Glow effect on hover */}
                  {hoveredItem === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-blue-400/20 dark:bg-blue-600/20 rounded-lg -z-10"
                      variants={glowVariants}
                      initial="initial"
                      animate="animate"
                    />
                  )}

                  {/* Active indicator */}
                  <AnimatePresence>
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                        variants={underlineVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        layoutId="activeSection"
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
