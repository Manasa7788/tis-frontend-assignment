import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck, Award, Sparkles, MapPin, Play } from 'lucide-react';
import { schoolInfo } from '../data/tisData';

export default function Hero({ onOpenEnquiry }) {
  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-16 lg:py-32 overflow-hidden bg-tis-navy text-white"
    >
      {/* Dynamic Background Image with Depth Gradients */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=2000&q=85"
          alt="Tulas International School Campus nestled in Dehradun foothills"
          className="w-full h-full object-cover object-center opacity-30 select-none pointer-events-none"
        />
        {/* Layered vignette & color gradients for contrast and mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-tis-navy via-tis-navy/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-tis-navy via-tis-navy/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(197,160,89,0.15)_0,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tis-gold/15 border border-tis-gold/40 text-tis-gold-light text-xs font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-tis-gold animate-pulse" />
              <span>Admissions Open for Session 2026–27 &bull; Grades IV to XII</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-serif font-black tracking-tight leading-[1.15] text-white">
                The Modern Gurukul for <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-tis-gold-light via-tis-gold to-amber-200 bg-clip-text text-transparent italic">
                  Future Global Leaders
                </span>
              </h1>
            </motion.div>

            {/* Subtitle / Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-200 dark:text-gray-300 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Spread across a pristine 22-acre campus in Dehradun’s foothills, Tulas International School blends centuries-old Vedic values of discipline, mindfulness, and humility with cutting-edge academic excellence, Olympic sports, and personalized pastoral care.
            </motion.p>

            {/* Key Value Points Icons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-gray-300 font-medium pt-1"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-tis-gold" />
                <span>CBSE Boarding Excellence</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-tis-gold" />
                <span>1:8 Mentor-Student Ratio</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-tis-gold" />
                <span>Dehradun, Uttarakhand</span>
              </div>
            </motion.div>

            {/* Buttons / CTAs */}
            <motion.div
              variants={itemVariants}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => onOpenEnquiry("Admissions 2026-27")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-tis-gold to-tis-gold-light text-tis-navy font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-tis-gold/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenEnquiry("Schedule a Campus Tour")}
                className="w-full sm:w-auto px-7 py-4 rounded-xl border border-white/30 hover:border-tis-gold text-white hover:text-tis-gold text-sm font-semibold tracking-wide backdrop-blur-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current opacity-80" />
                <span>Book Campus Visit</span>
              </button>
            </motion.div>

            {/* Accreditation footer note */}
            <motion.div variants={itemVariants} className="pt-2 text-[11px] text-gray-400">
              {schoolInfo.affiliation} &bull; Ranked Top Co-Ed Boarding School
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Hero Card & Floating Stats */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative w-full max-w-md"
            >
              {/* Main Card Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-tis-gold/30 shadow-2xl bg-tis-navy-light/40 backdrop-blur-md group">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80"
                  alt="Students engaged in collaborative innovation at TIS"
                  className="w-full h-96 sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-tis-navy via-transparent to-black/20" />

                {/* Bottom Card Caption */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-tis-navy/85 border border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase font-bold tracking-wider text-tis-gold">
                        Modern Gurukul Life
                      </p>
                      <p className="text-sm font-semibold text-white">
                        Holistic 360&deg; Student Development
                      </p>
                    </div>
                    <span className="p-2 rounded-xl bg-tis-gold/20 text-tis-gold">
                      <Award className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -top-6 -left-4 sm:-left-8 px-4 py-3 rounded-2xl bg-white/95 dark:bg-tis-dark-surface/95 text-tis-navy dark:text-white border border-tis-gold/40 shadow-xl backdrop-blur-md flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-tis-crimson/15 dark:bg-tis-gold/20 flex items-center justify-center text-tis-crimson dark:text-tis-gold shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-black tracking-tight text-tis-crimson dark:text-tis-gold">
                    RANKED #1
                  </p>
                  <p className="text-[11px] font-medium text-gray-600 dark:text-gray-300">
                    Co-Ed Residential School
                  </p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Right */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-6 -right-2 sm:-right-6 px-4 py-3 rounded-2xl bg-white/95 dark:bg-tis-dark-surface/95 text-tis-navy dark:text-white border border-tis-gold/40 shadow-xl backdrop-blur-md flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-black tracking-tight text-emerald-600 dark:text-emerald-400">
                    100% BOARD PASS
                  </p>
                  <p className="text-[11px] font-medium text-gray-600 dark:text-gray-300">
                    With Distinction Honors
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Decorative Wave/Bottom Curve leading into About Section */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-tis-cream dark:from-tis-dark to-transparent pointer-events-none" />
    </section>
  );
}
