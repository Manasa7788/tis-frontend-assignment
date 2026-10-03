import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Heart, Award } from 'lucide-react';
import { testimonials } from '../data/tisData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto advance every 6 seconds unless paused
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-tis-cream dark:bg-tis-dark relative overflow-hidden transition-colors duration-300">
      
      {/* Decorative quotes background watermark */}
      <Quote className="absolute right-10 bottom-10 w-96 h-96 text-tis-gold/5 dark:text-tis-gold/5 pointer-events-none rotate-12" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-tis-navy/5 dark:bg-tis-gold/15 text-tis-navy dark:text-tis-gold text-xs font-bold uppercase tracking-wider mb-3 border border-tis-gold/20"
          >
            <Heart className="w-3.5 h-3.5 text-tis-crimson dark:text-tis-gold" />
            <span>Community Voices & Trust</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-tis-navy dark:text-white tracking-tight"
          >
            What Parents & Alumni <span className="text-tis-crimson dark:text-tis-gold">Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-4 leading-relaxed font-light"
          >
            Real stories of transformation, academic brilliance, and personal growth from parents and alumni across India and abroad.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-white dark:bg-tis-dark-surface p-8 sm:p-12 shadow-2xl border border-gray-200 dark:border-tis-dark-border min-h-[380px] flex flex-col justify-between">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Star rating */}
                <div className="flex items-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-gray-500 ml-2">
                    Verified Feedback
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-base sm:text-xl lg:text-2xl font-serif text-gray-800 dark:text-gray-100 leading-relaxed italic">
                  "{current.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-tis-gold shrink-0 shadow-sm"
                  />
                  <div>
                    <h4 className="text-base font-bold text-tis-navy dark:text-white">
                      {current.name}
                    </h4>
                    <p className="text-xs text-tis-crimson dark:text-tis-gold font-medium">
                      {current.role}
                    </p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      {current.relation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100 dark:border-gray-800">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsAutoPlay(false);
                      setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? 'w-8 bg-tis-crimson dark:bg-tis-gold'
                        : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-tis-navy hover:text-white dark:hover:bg-tis-gold dark:hover:text-tis-navy text-gray-700 dark:text-gray-300 transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-tis-navy hover:text-white dark:hover:bg-tis-gold dark:hover:text-tis-navy text-gray-700 dark:text-gray-300 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
