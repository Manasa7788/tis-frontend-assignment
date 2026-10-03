import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Calendar, Phone, Mail, User, School, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function QuickEnquiryModal({ isOpen, onClose, defaultPurpose = "Admission Enquiry" }) {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    grade: 'Grade IV',
    boardType: 'Full Residential',
    visitDate: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close on ESC
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

  const validate = () => {
    const errs = {};
    if (!formData.parentName.trim()) errs.parentName = "Parent/Guardian name is required";
    if (!formData.studentName.trim()) errs.studentName = "Student name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone)) {
      errs.phone = "Enter a valid 10-digit contact number";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Fire confetti celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0B2545', '#C5A059', '#8E1624', '#DFC07A']
        });
      } catch (err) {
        // Safe fallback
      }
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      parentName: '',
      studentName: '',
      email: '',
      phone: '',
      grade: 'Grade IV',
      boardType: 'Full Residential',
      visitDate: '',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

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
            className="relative w-full max-w-xl bg-white dark:bg-tis-dark-surface rounded-2xl shadow-2xl border border-gray-200 dark:border-tis-dark-border overflow-hidden z-10 my-auto"
          >
            {/* Header with decorative crest pattern */}
            <div className="relative bg-gradient-to-r from-tis-navy via-tis-blue to-tis-navy p-6 text-white overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.25)_0,transparent_70%)] pointer-events-none" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-tis-gold/20 border border-tis-gold/40 text-tis-gold">
                  <Sparkles className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-tis-gold-light">
                    Admissions Session 2026-27
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    {defaultPurpose}
                  </h3>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h4 className="text-2xl font-serif font-bold text-tis-navy dark:text-white mb-2">
                    Application Received!
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-6">
                    Thank you, <strong className="text-tis-navy dark:text-tis-gold">{formData.parentName}</strong>. Our Admissions Counselor will contact you within 24 hours with the prospectus, fee structure, and campus visit schedule for <strong className="text-tis-navy dark:text-tis-gold">{formData.studentName}</strong>.
                  </p>
                  <div className="bg-tis-cream-subtle dark:bg-tis-dark p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400 mb-6">
                    Helpline: <strong className="text-tis-navy dark:text-white">+91 98379 83791</strong> &bull; admissions@tis.edu.in
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-tis-navy text-tis-gold hover:bg-tis-navy-light font-semibold text-sm transition-colors border border-tis-gold/30 shadow-md"
                  >
                    Done / Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Parent Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Parent / Guardian Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className={`w-full pl-9 pr-3 py-2 rounded-xl text-sm border bg-gray-50/50 dark:bg-tis-dark text-tis-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-tis-gold transition-colors ${
                            errors.parentName ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                          }`}
                        />
                      </div>
                      {errors.parentName && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.parentName}</p>
                      )}
                    </div>

                    {/* Student Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Student Full Name *
                      </label>
                      <div className="relative">
                        <School className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleChange}
                          placeholder="e.g. Aarav Sharma"
                          className={`w-full pl-9 pr-3 py-2 rounded-xl text-sm border bg-gray-50/50 dark:bg-tis-dark text-tis-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-tis-gold transition-colors ${
                            errors.studentName ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                          }`}
                        />
                      </div>
                      {errors.studentName && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.studentName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="parent@example.com"
                          className={`w-full pl-9 pr-3 py-2 rounded-xl text-sm border bg-gray-50/50 dark:bg-tis-dark text-tis-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-tis-gold transition-colors ${
                            errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Mobile Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={`w-full pl-9 pr-3 py-2 rounded-xl text-sm border bg-gray-50/50 dark:bg-tis-dark text-tis-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-tis-gold transition-colors ${
                            errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Grade Applying For */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Grade Applying For
                      </label>
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-xl text-sm border bg-gray-50/50 dark:bg-tis-dark text-tis-navy dark:text-white border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-tis-gold"
                      >
                        <option value="Grade IV">Grade IV</option>
                        <option value="Grade V">Grade V</option>
                        <option value="Grade VI">Grade VI</option>
                        <option value="Grade VII">Grade VII</option>
                        <option value="Grade VIII">Grade VIII</option>
                        <option value="Grade IX">Grade IX</option>
                        <option value="Grade X">Grade X</option>
                        <option value="Grade XI (Science - Medical)">Grade XI (Science - Medical)</option>
                        <option value="Grade XI (Science - Non-Med)">Grade XI (Science - Non-Med)</option>
                        <option value="Grade XI (Commerce)">Grade XI (Commerce)</option>
                        <option value="Grade XI (Humanities)">Grade XI (Humanities)</option>
                        <option value="Grade XII">Grade XII</option>
                      </select>
                    </div>

                    {/* Preferred Visit Date */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Preferred Campus Visit Date (Optional)
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <input
                          type="date"
                          name="visitDate"
                          value={formData.visitDate}
                          onChange={handleChange}
                          className="w-full pl-9 pr-3 py-2 rounded-xl text-sm border bg-gray-50/50 dark:bg-tis-dark text-tis-navy dark:text-white border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-tis-gold"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Specific Questions or Queries (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ask about boarding facilities, sports coaching, scholarship, or curriculum..."
                      className="w-full p-3 rounded-xl text-sm border bg-gray-50/50 dark:bg-tis-dark text-tis-navy dark:text-white border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-tis-gold resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-tis-crimson via-tis-navy to-tis-navy text-white font-semibold text-sm hover:opacity-95 shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Enquiry...</span>
                      ) : (
                        <>
                          <span>Submit Admission Enquiry</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-gray-500 dark:text-gray-400 mt-2">
                      🔒 Your contact information is kept strictly confidential.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
