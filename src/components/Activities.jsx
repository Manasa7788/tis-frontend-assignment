import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Sparkles, Trophy, ArrowRight, Heart } from 'lucide-react';
import { activitiesData } from '../data/tisData';

export default function Activities({ onOpenEnquiry }) {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Sports', 'Cultural', 'Innovation', 'Leadership', 'Adventure'];

  const filteredItems = selectedFilter === 'All'
    ? activitiesData
    : activitiesData.filter(item => item.category === selectedFilter);

  return (
    <section id="activities" className="py-20 lg:py-28 bg-tis-cream-subtle dark:bg-tis-dark-surface/40 relative overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-tis-crimson/10 text-tis-crimson dark:bg-tis-gold/15 dark:text-tis-gold text-xs font-bold uppercase tracking-wider mb-3 border border-tis-crimson/20 dark:border-tis-gold/30"
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Vibrant Student Life</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-tis-navy dark:text-white tracking-tight"
          >
            Life & Co-Curriculars at <span className="text-tis-crimson dark:text-tis-gold">TIS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-4 leading-relaxed font-light"
          >
            Boarding school life at TIS pulsates with boundless vitality. From sunrise horse riding and orchestral rehearsals to robotics hackathons and mountain treks, every day is an adventure.
          </motion.p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-tis-navy text-tis-gold dark:bg-tis-gold dark:text-tis-navy shadow-md scale-105'
                    : 'bg-white dark:bg-tis-dark border border-gray-200 dark:border-tis-dark-border text-gray-700 dark:text-gray-300 hover:border-tis-gold'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Activity Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((act, index) => (
              <motion.div
                layout
                key={act.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group rounded-3xl overflow-hidden bg-white dark:bg-tis-dark-surface border border-gray-200 dark:border-tis-dark-border shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tis-navy/90 via-black/30 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-tis-navy/90 text-tis-gold border border-tis-gold/30 backdrop-blur-xs">
                    {act.category}
                  </span>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-tis-gold transition-colors">
                      {act.title}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-4">
                    {act.description}
                  </p>

                  <div className="pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-tis-navy dark:text-tis-gold font-bold">
                    <span>Expert Mentorship</span>
                    <button
                      onClick={() => onOpenEnquiry(`Enquiry regarding ${act.title}`)}
                      className="hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Join Club</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Life at TIS Day-in-the-Life Timeline Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-2xl bg-white dark:bg-tis-dark-surface border border-gray-200 dark:border-tis-dark-border shadow-md max-w-4xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-tis-gold">
                Daily Routine in Gurukul
              </span>
              <h4 className="text-base sm:text-lg font-serif font-bold text-tis-navy dark:text-white">
                A Balanced Day: Yoga, Academics, Sports & Evening Study Hours
              </h4>
            </div>
            <button
              onClick={() => onOpenEnquiry("Schedule Day-at-TIS Experience")}
              className="px-5 py-2.5 rounded-xl bg-tis-navy text-tis-gold font-bold text-xs uppercase tracking-wider hover:bg-tis-navy-light shrink-0 transition-colors cursor-pointer"
            >
              Experience a Day at TIS
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
