'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface HackerTextProps {
  text: string;
  className?: string;
  variant?: 'continuous' | 'once' | 'hover';
  scrambleSpeed?: number;
  colorClassName?: string;
}

const HackerText: React.FC<HackerTextProps> = ({
  text,
  className = '',
  variant = 'once',
  scrambleSpeed = 50,
  colorClassName = 'text-blue-600 dark:text-blue-400'
}) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  
  // Characters to use for scrambling effect
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
  
  const scrambleText = (originalText: string, progress: number = 0) => {
    return originalText
      .split('')
      .map((char, index) => {
        if (char === ' ') return ' ';
        if (index < progress) return originalText[index];
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join('');
  };

  const startScramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    let progress = 0;
    const finalText = text;
    
    const scramble = () => {
      setDisplayText(scrambleText(finalText, progress));
      progress += 0.5;

      if (progress < finalText.length) {
        intervalRef.current = setTimeout(scramble, scrambleSpeed);
      } else {
        setDisplayText(finalText);
        setIsScrambling(false);
        
        // For continuous variant, start again after a delay
        if (variant === 'continuous' && !isHovered) {
          setTimeout(() => {
            if (!isHovered) startScramble();
          }, 3000);
        }
      }
    };

    scramble();
  };

  const stopScramble = () => {
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
      intervalRef.current = null;
    }
    setDisplayText(text);
    setIsScrambling(false);
  };

  useEffect(() => {
    if (variant === 'continuous') {
      startScramble();
    } else if (variant === 'once') {
      const timeout = setTimeout(startScramble, 500);
      return () => clearTimeout(timeout);
    }

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [variant, text]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (variant === 'hover') {
      startScramble();
    } else if (variant === 'continuous') {
      stopScramble();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (variant === 'continuous') {
      startScramble();
    }
  };

  return (
    <motion.span
      className={`inline-block ${className} ${colorClassName}`}
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
    </motion.span>
  );
};

export default HackerText;
