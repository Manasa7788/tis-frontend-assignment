import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  HeartHandshake,
  Trophy,
  Compass,
  Trees,
  Globe,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { whyChooseTIS } from '../data/tisData';

export default function WhyTIS({ onOpenEnquiry }) {
  // Map icon strings to Lucide components
  const iconMap = {
    GraduationCap,
    HeartHandshake,
    Trophy,
    Compass,
    Trees,
    Globe
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="why-tis" className="py-20 lg:py-28 bg-tis-navy text-white relative overflow-hidden">
      
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tis-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-tis-crimson/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-tis-gold/15 text-tis-gold text-xs font-bold uppercase tracking-wider mb-3 border border-tis-gold/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-tis-gold" />
            <span>The TIS Distinctive Edge</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white tracking-tight"
          >
            Why Choose <span className="text-tis-gold">Tulas International?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed font-light"
          >
            Rooted in India's revered Gurukul lineage yet armed with 21st-century global infrastructure, TIS provides an unparalleled environment where students flourish emotionally, academically, and physically.
          </motion.p>
        </div>

        {/* 6 Core Differentiator Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {whyChooseTIS.map((item, index) => {
            const IconComponent = iconMap[item.icon] || GraduationCap;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="p-8 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-tis-gold/60 backdrop-blur-md shadow-xl transition-all duration-300 relative group overflow-hidden"
              >
                {/* Subtle corner badge */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-tis-gold/15 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-tis-gold to-tis-gold-dark text-tis-navy flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-tis-gold transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Bottom subtle accent line */}
                <div className="w-8 h-1 bg-tis-gold/40 rounded-full mt-6 group-hover:w-16 group-hover:bg-tis-gold transition-all duration-300" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick Quote Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center max-w-2xl mx-auto p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <p className="text-sm italic text-gray-200">
            "At TIS, we do not simply prepare children for examinations; we prepare them to lead, innovate, and uphold righteousness in an ever-evolving world."
          </p>
          <span className="block mt-2 text-xs font-bold uppercase tracking-wider text-tis-gold">
            &mdash; The Headmaster's Vision, TIS Dehradun
          </span>
        </motion.div>

      </div>
    </section>
  );
}
