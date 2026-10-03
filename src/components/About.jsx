import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, ArrowRight, ShieldCheck, HeartHandshake, Trees } from 'lucide-react';
import { keyStats, schoolInfo } from '../data/tisData';

export default function About({ onOpenEnquiry }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-tis-cream dark:bg-tis-dark transition-colors duration-300">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-tis-gold/5 dark:bg-tis-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-tis-crimson/5 dark:bg-tis-crimson/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-tis-navy/5 dark:bg-tis-gold/15 text-tis-navy dark:text-tis-gold text-xs font-bold uppercase tracking-wider mb-3 border border-tis-gold/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-tis-gold" />
            <span>Tradition Meets Global Modernity</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-tis-navy dark:text-white tracking-tight"
          >
            Welcome to <span className="text-tis-crimson dark:text-tis-gold">Tulas International</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-4 leading-relaxed font-light"
          >
            Conceived as a contemporary tribute to India's sacred Gurukul heritage, TIS nurtures every young mind through the tripartite harmony of <strong>intellect, physical vigor, and moral virtue</strong>.
          </motion.p>
        </div>

        {/* Content Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Visual Media with Overlapping Element */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-tis-dark-border group">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                alt="Students collaborating happily at Tulas International School"
                className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tis-navy/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold text-tis-gold tracking-widest">
                  Our Philosophy
                </span>
                <p className="text-base sm:text-lg font-serif font-bold mt-1">
                  "Education is not merely the accumulation of facts, but the ignition of innate human greatness."
                </p>
              </div>
            </div>

            {/* Overlapping Badge: Gurukul Values */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 sm:-right-6 bg-tis-navy dark:bg-tis-dark-surface text-white p-5 rounded-2xl border border-tis-gold/40 shadow-xl max-w-xs hidden sm:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2 rounded-lg bg-tis-gold/20 text-tis-gold">
                  <Trees className="w-5 h-5" />
                </span>
                <span className="font-serif font-bold text-sm text-tis-gold">
                  Ecological Haven
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-snug font-light">
                22+ lush acres nestled amidst the Shivalik range, promoting mindfulness, physical wellness, and pristine fresh air.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Mission, Vision & Key Attributes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-tis-navy dark:text-white leading-tight">
                Empowering Students to Think Critically & Act Compassionately
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                At Tulas International School, education extends far beyond textbooks. We believe in providing an immersive, stimulating residential environment where students from diverse cultural backgrounds live, learn, play, and grow together as one bonded fraternity.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-white dark:bg-tis-dark-surface border border-gray-100 dark:border-tis-dark-border shadow-xs hover:border-tis-gold/50 transition-colors flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-tis-navy/10 dark:bg-tis-gold/15 text-tis-navy dark:text-tis-gold shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-bold text-sm text-tis-navy dark:text-white">
                    Intellectual Rigor & CBSE Excellence
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                    Rigorous academics, STEM labs, bilingual fluency, and dedicated coaching for IIT-JEE, NEET, CLAT, and global college admissions.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-tis-dark-surface border border-gray-100 dark:border-tis-dark-border shadow-xs hover:border-tis-gold/50 transition-colors flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-tis-crimson/10 text-tis-crimson shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-bold text-sm text-tis-navy dark:text-white">
                    Compassionate Pastoral & Boarding Care
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                    Warm residential hostels with 24/7 House Parents, nutritious chef-prepared meals, and a safe, inclusive family-like environment.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-tis-dark-surface border border-gray-100 dark:border-tis-dark-border shadow-xs hover:border-tis-gold/50 transition-colors flex items-start gap-4">
                <span className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Trees className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="font-bold text-sm text-tis-navy dark:text-white">
                    Olympic Sports & Outdoor Vitality
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                    Horse riding stables, Olympic shooting range, semi-Olympic swimming pool, squash, soccer, and mountain trekking expeditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Link to Campus Details */}
            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry("General Admissions Enquiry")}
                className="inline-flex items-center gap-2 text-sm font-bold text-tis-crimson dark:text-tis-gold hover:underline group cursor-pointer"
              >
                <span>Read more about our admissions procedure</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Scroll-Triggered Statistics Cards (Assignment Requirement #5) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 pt-6"
        >
          {keyStats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-5 rounded-2xl bg-white dark:bg-tis-dark-surface border border-gray-200 dark:border-tis-dark-border text-center shadow-md hover:shadow-xl hover:border-tis-gold/50 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-tis-crimson via-tis-gold to-tis-navy opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl sm:text-4xl font-serif font-black text-tis-navy dark:text-tis-gold mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-gray-800 dark:text-white tracking-wide mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-gray-500 dark:text-gray-400 font-light">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
