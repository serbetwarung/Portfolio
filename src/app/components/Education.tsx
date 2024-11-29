'use client';

import React from 'react';
import { FaGraduationCap, FaMedal, FaUniversity } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, slideIn } from '../utils/animations';

const educationDetails = {
  institution: 'Electronic Engineering Polytechnic Institute of Surabaya (PENS)',
  degree: 'Bachelor of Applied Science in Internet Engineering Technology',
  period: '2021 - Present',
  gpa: '3.75 / 4.00',
  achievements: [
    'Dean\'s List (2021-2023)',
    'Best Student Project Award - IoT Innovation Challenge',
    'Active Member of Campus Networking Club'
  ]
};

const Education = () => {
  return (
    <section className="py-20" id="education">
      <motion.h2 
        className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        Education
      </motion.h2>
      
      <motion.div 
        className="max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-xl rounded-2xl p-8 md:p-12"
        initial="initial"
        animate="animate"
        variants={slideIn}
      >
        <motion.div 
          className="flex items-center mb-8"
          variants={fadeInUp}
        >
          <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-6">
            <FaUniversity className="text-4xl text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {educationDetails.institution}
            </h3>
            <p className="text-lg text-blue-600 dark:text-blue-400 mt-1">
              {educationDetails.degree}
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-10"
          variants={fadeInUp}
        >
          <div className="bg-gray-50/50 dark:bg-gray-700/50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full mr-4">
                <FaGraduationCap className="text-2xl text-green-600 dark:text-green-400" />
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  Academic Period
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {educationDetails.period}
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50/50 dark:bg-gray-700/50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-full mr-4">
                <FaMedal className="text-2xl text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <span className="font-medium text-gray-900 dark:text-white block">
                  Academic Performance
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  GPA: {educationDetails.gpa}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={fadeInUp}>
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <FaMedal className="text-blue-600 mr-3" />
            Notable Achievements
          </h4>
          <ul className="space-y-4">
            {educationDetails.achievements.map((achievement, index) => (
              <motion.li 
                key={index}
                className="flex items-start"
                variants={fadeInUp}
                custom={index}
              >
                <span className="mr-3 mt-2 h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {achievement}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
