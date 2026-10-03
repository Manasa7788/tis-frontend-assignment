import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative p-2.5 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-tis-gold/50 ${
        isDark
          ? 'bg-tis-dark-surface text-tis-gold hover:bg-tis-navy/80 border border-tis-gold/30 shadow-inner'
          : 'bg-tis-cream-subtle text-tis-navy hover:bg-gray-200 border border-gray-300 shadow-sm'
      } ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-tis-gold" />
        ) : (
          <Moon className="w-5 h-5 text-tis-navy" />
        )}
      </motion.div>
    </button>
  );
}
