import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, BookOpen, Award, Compass, Sparkles } from 'lucide-react';

export default function AcademicsDetailModal({ program, isOpen, onClose, onEnquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!program) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white dark:bg-tis-dark-surface rounded-2xl shadow-2xl border border-gray-200 dark:border-tis-dark-border overflow-hidden z-10 my-auto"
          >
            {/* Header Image with Gradient Overlay */}
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tis-navy via-tis-navy/60 to-transparent" />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white/90 hover:text-white hover:bg-black/60 transition-colors backdrop-blur-xs"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-tis-gold text-tis-navy mb-2 shadow">
                  {program.grades} &bull; {program.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {program.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="text-xs uppercase font-bold tracking-widest text-tis-gold-dark dark:text-tis-gold mb-2 flex items-center gap-1.5">
                  <Compass className="w-4 h-4" /> Curriculum & Pedagogical Focus
                </h4>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {program.description}
                </p>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-widest text-tis-gold-dark dark:text-tis-gold mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Core Academic Pillars
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {program.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-tis-cream-subtle dark:bg-tis-dark border border-gray-200 dark:border-gray-800 flex items-start gap-2.5 text-xs sm:text-sm text-gray-800 dark:text-gray-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-tis-crimson dark:text-tis-gold shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certification & Board details */}
              <div className="p-4 rounded-xl bg-tis-navy/5 dark:bg-tis-navy/30 border border-tis-navy/10 dark:border-tis-navy/40 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <Award className="w-7 h-7 text-tis-gold shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-tis-navy dark:text-tis-gold">
                      Central Board of Secondary Education (CBSE)
                    </div>
                    <div className="text-[11px] text-gray-600 dark:text-gray-400">
                      Affiliation No. 3530364 &bull; New Delhi, India
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    if (onEnquire) onEnquire();
                  }}
                  className="px-5 py-2 rounded-xl bg-tis-navy text-tis-gold font-semibold text-xs hover:bg-tis-navy-light transition-colors border border-tis-gold/40 shadow-sm"
                >
                  Enquire for {program.grades}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
