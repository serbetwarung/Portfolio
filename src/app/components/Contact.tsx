'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { contactInfo } from '../data';
import SectionTitle from './SectionTitle';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
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
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <SectionTitle
        title="Contact Me"
        subtitle="Let's connect and discuss opportunities"
        className="mb-12"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {/* Email */}
        <motion.a
          href={`mailto:${contactInfo.email}`}
          variants={itemVariants}
          whileHover="hover"
          className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 border border-gray-700/50"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-900/30 rounded-lg group-hover:bg-blue-800/30 transition-colors duration-300">
              <FaEnvelope className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-1">Email</h3>
              <p className="text-gray-400">{contactInfo.email}</p>
            </div>
          </div>
        </motion.a>

        {/* Phone */}
        <motion.a
          href={`tel:${contactInfo.phone}`}
          variants={itemVariants}
          whileHover="hover"
          className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 border border-gray-700/50"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-900/30 rounded-lg group-hover:bg-green-800/30 transition-colors duration-300">
              <FaPhone className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-1">Phone</h3>
              <p className="text-gray-400">{contactInfo.phone}</p>
            </div>
          </div>
        </motion.a>

        {/* Location */}
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 border border-gray-700/50"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-900/30 rounded-lg group-hover:bg-purple-800/30 transition-colors duration-300">
              <FaMapMarkerAlt className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-1">Location</h3>
              <p className="text-gray-400">{contactInfo.location}</p>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          whileHover="hover"
          className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg transition-all duration-300 border border-gray-700/50"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gray-900/30 rounded-lg group-hover:bg-gray-800/30 transition-colors duration-300">
              <div className="flex space-x-3">
                <a
                  href={contactInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href={contactInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-100 mb-1">Social Media</h3>
              <p className="text-gray-400">Connect with me</p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Contact;
