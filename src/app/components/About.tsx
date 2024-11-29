'use client';

import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, slideIn } from '../utils/animations';

const About = () => {
  return (
    <section className="py-20" id="about">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <motion.h2 
          className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
          variants={fadeInUp}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl rounded-2xl p-8 md:p-12"
          variants={slideIn}
        >
          <motion.p 
            className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            variants={fadeInUp}
          >
            I am a dedicated and passionate student currently pursuing my Bachelor of Applied Science in Internet Engineering Technology at the Electronic Engineering Polytechnic Institute of Surabaya (PENS). My academic journey has been marked by a deep curiosity about the intricate world of internet technologies and their transformative potential.
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
            variants={fadeInUp}
          >
            Throughout my studies, I have developed a strong foundation in networking, cybersecurity, and web technologies. My coursework has equipped me with practical skills in programming languages like C, Java, and Python, as well as experience with various engineering software and tools.
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            variants={fadeInUp}
          >
            Beyond academics, I am actively involved in various projects and extracurricular activities that allow me to apply my technical knowledge and develop leadership skills. I am passionate about exploring innovative solutions to real-world challenges and continuously expanding my technological expertise.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="mt-8 text-center"
          variants={fadeInUp}
        >
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
