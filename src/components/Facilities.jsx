import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Sparkles, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { facilitiesData } from '../data/tisData';

export default function Facilities({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Academic', 'Athletics', 'Residential'];

  const filteredFacilities = activeTab === 'All'
    ? facilitiesData
    : facilitiesData.filter(item => item.category === activeTab);

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-tis-cream dark:bg-tis-dark relative overflow-hidden transition-colors duration-300">
      
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-tis-crimson/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-tis-navy/5 dark:bg-tis-gold/15 text-tis-navy dark:text-tis-gold text-xs font-bold uppercase tracking-wider mb-3 border border-tis-gold/20"
            >
              <Building2 className="w-3.5 h-3.5 text-tis-gold" />
              <span>World-Class Infrastructure</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-tis-navy dark:text-white tracking-tight"
            >
              22+ Acres of <span className="text-tis-crimson dark:text-tis-gold">State-of-the-Art</span> Campus
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-3 font-light leading-relaxed"
            >
              From Olympic equestrian arenas to digital smart labs and home-like hostels, every facility is meticulously designed to enrich your child's boarding journey.
            </motion.p>
          </div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-tis-dark-surface border border-gray-200 dark:border-tis-dark-border shadow-xs self-start md:self-auto overflow-x-auto"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeTab === cat
                    ? 'bg-tis-navy text-tis-gold dark:bg-tis-gold dark:text-tis-navy shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-tis-navy dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Bento Grid Showcase */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredFacilities.map((fac, idx) => (
              <motion.div
                layout
                key={fac.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-tis-dark-surface border border-gray-200 dark:border-tis-dark-border shadow-lg hover:shadow-2xl hover:border-tis-gold/50 transition-all duration-300 flex flex-col"
              >
                {/* Image Container with overlay */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-tis-navy/90 text-tis-gold border border-tis-gold/30 backdrop-blur-xs">
                    {fac.category}
                  </div>

                  {/* Highlight Ribbon */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 dark:bg-tis-dark/90 text-tis-crimson dark:text-tis-gold border border-tis-gold/20 shadow-xs">
                    {fac.highlight}
                  </div>

                  {/* Bottom Image Title */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <h3 className="text-xl font-serif font-bold text-white leading-tight">
                      {fac.title}
                    </h3>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                    {fac.description}
                  </p>

                  <div className="pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs">
                    <span className="text-tis-crimson dark:text-tis-gold font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> 24/7 Supervised
                    </span>
                    <button
                      onClick={() => onOpenEnquiry(`Campus Visit for ${fac.title}`)}
                      className="text-gray-500 hover:text-tis-navy dark:hover:text-white font-bold flex items-center gap-1 group-hover:text-tis-gold transition-colors cursor-pointer"
                    >
                      <span>Tour Facility</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Campus Virtual Tour Callout */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenEnquiry("Schedule Guided Campus Tour")}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-tis-crimson to-tis-navy text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
          >
            <span>Book a Guided Campus Visit</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
