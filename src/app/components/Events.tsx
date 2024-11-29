'use client';

import { motion } from 'framer-motion';
import { events } from '../data';
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
    scale: 1.03,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const Events = () => {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Events & Activities"
          subtitle="My involvement in various organizations and events"
          className="mb-12"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all duration-300"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-600/10 dark:to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {event.role}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                    {event.organization}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {event.period}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="space-y-2"
                >
                  {event.description.map((desc, descIndex) => (
                    <motion.div
                      key={descIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + descIndex * 0.1 }}
                      className="flex items-start space-x-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300">{desc}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {event.achievements && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="mt-4 space-y-2"
                  >
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400">
                      Achievements:
                    </h4>
                    {event.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + achIndex * 0.1 }}
                        className="flex items-start space-x-2"
                      >
                        <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                        <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
