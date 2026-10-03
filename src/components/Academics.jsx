import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, CheckCircle2, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { academicPrograms } from '../data/tisData';
import AcademicsDetailModal from './AcademicsDetailModal';

export default function Academics({ onOpenEnquiry }) {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (program) => {
    setSelectedProgram(program);
    setIsModalOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <section id="academics" className="py-20 lg:py-28 bg-tis-cream-subtle dark:bg-tis-dark-surface/50 relative overflow-hidden transition-colors duration-300">
      
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-tis-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-tis-gold/15 text-tis-navy dark:text-tis-gold text-xs font-bold uppercase tracking-wider mb-3 border border-tis-gold/30"
          >
            <BookOpen className="w-3.5 h-3.5 text-tis-gold" />
            <span>Academic Pathways & Excellence</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-tis-navy dark:text-white tracking-tight"
          >
            Curriculum Built for <span className="text-tis-gold">Global Success</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-4 leading-relaxed font-light"
          >
            Affiliated with the Central Board of Secondary Education (CBSE, New Delhi), our progressive pedagogy empowers students with analytical clarity, ethical character, and innovative problem solving.
          </motion.p>
        </div>

        {/* Academic Program Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {academicPrograms.map((prog) => (
            <motion.div
              key={prog.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="rounded-3xl bg-white dark:bg-tis-dark border border-gray-200 dark:border-tis-dark-border overflow-hidden shadow-lg hover:shadow-2xl hover:border-tis-gold/60 transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-tis-navy/90 text-tis-gold border border-tis-gold/40 shadow-sm backdrop-blur-xs">
                  {prog.grades}
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-tis-gold-light">
                    {prog.badge}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white leading-tight">
                    {prog.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                  {prog.description}
                </p>

                {/* Key feature bullets */}
                <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                  {prog.features.slice(0, 2).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-tis-gold shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <div className="pt-2">
                  <button
                    onClick={() => handleLearnMore(prog)}
                    className="w-full py-2.5 px-4 rounded-xl border border-tis-navy/20 dark:border-tis-gold/30 hover:bg-tis-navy hover:text-white dark:hover:bg-tis-gold dark:hover:text-tis-navy text-tis-navy dark:text-tis-gold text-xs font-bold tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 group/btn cursor-pointer shadow-2xs"
                  >
                    <span>Explore Syllabus & Highlights</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Competitive Exam Coaching Highlight Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-tis-navy via-tis-blue to-tis-navy text-white shadow-xl border border-tis-gold/30 relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[radial-gradient(circle_at_right,rgba(197,160,89,0.2)_0,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-tis-gold/20 text-tis-gold border border-tis-gold/40">
                Integrated Career Pathways
              </span>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
                In-House Expert Coaching for IIT-JEE, NEET, CLAT, SAT & NDA
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl font-light">
                Students receive rigorous coaching from veteran Kota & Delhi educators within the regular timetable, eliminating the stress and fatigue of outside tuition.
              </p>
            </div>
            <button
              onClick={() => onOpenEnquiry("Academic Curriculum Enquiry")}
              className="px-6 py-3 rounded-xl bg-tis-gold hover:bg-tis-gold-light text-tis-navy font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-md cursor-pointer"
            >
              Enquire Academic Details
            </button>
          </div>
        </motion.div>

      </div>

      {/* Program Detail Interactive Modal */}
      <AcademicsDetailModal
        program={selectedProgram}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onEnquire={() => onOpenEnquiry(`Enquiry for ${selectedProgram?.title}`)}
      />
    </section>
  );
}
