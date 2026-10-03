import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Download, Calendar, PhoneCall, CheckCircle } from 'lucide-react';
import { admissionsSteps } from '../data/tisData';

export default function AdmissionsCTA({ onOpenEnquiry }) {
  return (
    <section id="admissions" className="py-20 lg:py-28 relative overflow-hidden bg-tis-navy text-white">
      
      {/* Background Radiance & Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-tis-crimson/30 via-tis-gold/15 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-tis-blue/40 via-tis-gold/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Box */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tis-gold/20 border border-tis-gold/40 text-tis-gold-light text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-tis-gold animate-bounce" />
            <span>Admissions Open for Session 2026-27</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight"
          >
            Begin Your Journey at <br />
            <span className="bg-gradient-to-r from-tis-gold-light via-tis-gold to-amber-200 bg-clip-text text-transparent italic">
              Tulas International School
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-gray-300 mt-5 leading-relaxed max-w-2xl mx-auto font-light"
          >
            Give your child the gift of world-class academics, character refinement, and Olympian sports in the pristine foothills of Dehradun. Limited seats available per cohort.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <button
              onClick={() => onOpenEnquiry("Admissions 2026-27 Application")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-tis-gold to-tis-gold-light text-tis-navy font-bold text-sm uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Apply Online Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onOpenEnquiry("Schedule a Campus Tour")}
              className="w-full sm:w-auto px-7 py-4 rounded-xl border border-white/40 hover:border-tis-gold text-white hover:text-tis-gold text-sm font-semibold tracking-wide backdrop-blur-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-tis-gold" />
              <span>Schedule a Campus Visit</span>
            </button>

            <a
              href="tel:+919837983791"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold tracking-wide border border-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-tis-gold" />
              <span>+91 98379 83791</span>
            </a>
          </motion.div>
        </div>

        {/* 4-Step Transparent Admissions Flow */}
        <div className="pt-10 border-t border-white/10">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-tis-gold">
              Simple & Transparent 4-Step Process
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionsSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative group hover:border-tis-gold/50 transition-colors"
              >
                <div className="text-3xl font-serif font-black text-tis-gold/40 group-hover:text-tis-gold transition-colors mb-2">
                  {step.step}
                </div>
                <h4 className="text-base font-serif font-bold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
