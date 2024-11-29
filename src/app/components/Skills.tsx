'use client';

import { motion } from 'framer-motion';
import { skills } from '../data';
import SectionTitle from './SectionTitle';
import { FaCode, FaTools, FaPalette, FaServer, FaBrain } from 'react-icons/fa';

const getIconForCategory = (category: string) => {
  switch(category) {
    case 'Programming Languages':
      return FaCode;
    case 'Frameworks & Libraries':
      return FaServer;
    case 'Tools & Technologies':
      return FaTools;
    case 'Design & UI/UX':
      return FaPalette;
    case 'Soft Skills':
      return FaBrain;
    default:
      return FaCode;
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const iconVariants = {
  hidden: { 
    scale: 0,
    rotate: -180
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  hover: {
    rotate: 360,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

const skillItemVariants = {
  hidden: { 
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    x: 10,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="My expertise and proficiency in various technologies"
          className="mb-12"
        />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(skills).map(([category, items], categoryIndex) => {
            const Icon = getIconForCategory(category);
            return (
              <motion.div
                key={category}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-600/20 dark:to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Header */}
                <div className="flex items-center space-x-3 mb-6 relative">
                  <motion.div 
                    className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg"
                    variants={iconVariants}
                  >
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold text-blue-600 dark:text-blue-400"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
                  >
                    {category}
                  </motion.h3>
                </div>
                
                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
                  {items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillItemVariants}
                      whileHover="hover"
                      className="flex items-center space-x-2 group/skill cursor-pointer"
                    >
                      <motion.div 
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <span className="text-gray-700 dark:text-gray-300 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
