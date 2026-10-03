import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1.5 bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-xs">
      {/* Animated gradient progress bar */}
      <motion.div
        className="h-full bg-gradient-to-r from-tis-crimson via-tis-gold to-tis-navy origin-left shadow-sm"
        style={{ scaleX }}
      />

      {/* Percentage pill that appears on scroll */}
      {percentage > 2 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute right-3 top-2 px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider bg-tis-navy/90 text-tis-gold border border-tis-gold/40 shadow-md backdrop-blur-md hidden sm:block pointer-events-none"
        >
          {percentage}%
        </motion.div>
      )}
    </div>
  );
}
