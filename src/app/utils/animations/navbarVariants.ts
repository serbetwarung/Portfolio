export const navbarVariants = {
  hidden: {
    y: -100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const menuItemVariants = {
  hover: {
    scale: 1.1,
    y: -2,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  },
  initial: { scale: 1, y: 0 }
};

export const underlineVariants = {
  initial: {
    width: 0,
    opacity: 0
  },
  animate: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  exit: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};

export const menuContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const glowVariants = {
  initial: {
    opacity: 0,
    scale: 1
  },
  animate: {
    opacity: [0, 0.5, 0],
    scale: [1, 1.2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};
