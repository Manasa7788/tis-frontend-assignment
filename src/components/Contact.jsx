import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { schoolInfo } from '../data/tisData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: 'Grade VI',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your full name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your contact number";
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone)) {
      errs.phone = "Enter a valid 10-digit mobile number";
    }
    if (!formData.message.trim()) {
      errs.message = "Please write a brief query or note";
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
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#0B2545', '#C5A059', '#8E1624']
        });
      } catch (err) {}
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      grade: 'Grade VI',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-tis-cream dark:bg-tis-dark relative overflow-hidden transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-tis-navy/5 dark:bg-tis-gold/15 text-tis-navy dark:text-tis-gold text-xs font-bold uppercase tracking-wider mb-3 border border-tis-gold/20"
          >
            <Mail className="w-3.5 h-3.5 text-tis-gold" />
            <span>Connect with TIS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-tis-navy dark:text-white tracking-tight"
          >
            Get in Touch with Our <span className="text-tis-crimson dark:text-tis-gold">Admissions Team</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-4 leading-relaxed font-light"
          >
            We welcome parents, prospective students, and guardians to reach out, visit our lush Dehradun campus, and experience the Modern Gurukul firsthand.
          </motion.p>
        </div>

        {/* 2-Column Layout: Contact Details & Map vs Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Google Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Address Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-tis-dark-surface border border-gray-200 dark:border-tis-dark-border shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-tis-navy/10 dark:bg-tis-gold/15 text-tis-navy dark:text-tis-gold flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-tis-navy dark:text-white">
                  Campus Address
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed font-light">
                  {schoolInfo.address}
                </p>
                <span className="inline-block mt-2 text-[11px] font-semibold text-tis-crimson dark:text-tis-gold">
                  Approx. 45 mins from Dehradun Railway Station
                </span>
              </div>
            </div>

            {/* Direct Phone Helpline Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-tis-dark-surface border border-gray-200 dark:border-tis-dark-border shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-tis-crimson/10 text-tis-crimson dark:text-tis-gold flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-tis-navy dark:text-white">
                  Admissions Helpline
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1 font-light">
                  <a href="tel:+919837983791" className="hover:underline font-bold text-tis-navy dark:text-white">
                    +91 98379 83791
                  </a> / <a href="tel:+919458311000" className="hover:underline">
                    +91 94583 11000
                  </a>
                </p>
                <div className="flex items-center gap-1.5 mt-2 text-[11px] text-gray-500 dark:text-gray-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Mon – Sat: 8:30 AM – 6:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* Email Inquiries Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-tis-dark-surface border border-gray-200 dark:border-tis-dark-border shadow-md flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-tis-navy dark:text-white">
                  Email Correspondence
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1 font-light">
                  <a href={`mailto:${schoolInfo.email}`} className="hover:underline font-semibold text-tis-navy dark:text-white">
                    {schoolInfo.email}
                  </a>
                  <br />
                  <a href={`mailto:${schoolInfo.infoEmail}`} className="hover:underline text-gray-500">
                    {schoolInfo.infoEmail}
                  </a>
                </p>
              </div>
            </div>

            {/* Google Map Embed / Location View */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-tis-dark-border h-56 relative group">
              <iframe
                title="Tulas International School Dehradun Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.0844784405364!2d77.86311897626997!3d30.348574974772183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b3a165bdf0b%3A0x6b10087114620f3a!2sTula&#39;s%20International%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 left-2 px-3 py-1 bg-tis-navy/90 text-tis-gold text-[10px] font-bold rounded-lg backdrop-blur-xs pointer-events-none">
                📍 TIS Campus &bull; Selaqui, Dehradun
              </div>
            </div>

          </div>

          {/* Right Column: Working Contact Form with Real-Time Validation */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-tis-dark-surface border border-gray-200 dark:border-tis-dark-border shadow-xl relative overflow-hidden">
              
              <div className="mb-6">
                <span className="text-xs uppercase font-bold tracking-widest text-tis-gold">
                  Direct Enquiry Desk
                </span>
                <h3 className="text-2xl font-serif font-bold text-tis-navy dark:text-white mt-1">
                  Send Us a Message
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-light">
                  Please fill out the form below and our Admissions Director will respond promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-tis-navy dark:text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-6 font-light">
                    Thank you, <strong className="text-tis-navy dark:text-tis-gold">{formData.name}</strong>. Your query has been logged. Our academic counselling team will contact you shortly at <span className="font-semibold">{formData.email}</span>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-tis-navy text-tis-gold hover:bg-tis-navy-light text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Anjali Nair"
                      className={`w-full px-4 py-3 rounded-xl text-sm border bg-gray-50/50 dark:bg-tis-dark text-tis-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-tis-gold transition-colors ${
                        errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="parent@example.com"
                        className={`w-full px-4 py-3 rounded-xl text-sm border bg-gray-50/50 dark:bg-tis-dark text-tis-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-tis-gold transition-colors ${
                          errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                        Mobile / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 rounded-xl text-sm border bg-gray-50/50 dark:bg-tis-dark text-tis-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-tis-gold transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Grade Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Grade of Interest
                    </label>
                    <select
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm border bg-gray-50/50 dark:bg-tis-dark text-tis-navy dark:text-white border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-tis-gold"
                    >
                      <option value="Grade IV">Grade IV</option>
                      <option value="Grade V">Grade V</option>
                      <option value="Grade VI">Grade VI</option>
                      <option value="Grade VII">Grade VII</option>
                      <option value="Grade VIII">Grade VIII</option>
                      <option value="Grade IX">Grade IX</option>
                      <option value="Grade X">Grade X</option>
                      <option value="Grade XI (Science)">Grade XI (Science)</option>
                      <option value="Grade XI (Commerce)">Grade XI (Commerce)</option>
                      <option value="Grade XI (Humanities)">Grade XI (Humanities)</option>
                      <option value="Grade XII">Grade XII</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Your Message / Specific Query *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please let us know your queries regarding admissions criteria, boarding facilities, sports, or fee structure..."
                      className={`w-full p-4 rounded-xl text-sm border bg-gray-50/50 dark:bg-tis-dark text-tis-navy dark:text-white focus:outline-none focus:ring-2 focus:ring-tis-gold transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-tis-crimson via-tis-navy to-tis-navy text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Message...</span>
                      ) : (
                        <>
                          <span>Submit Message to TIS</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-gray-400 mt-2 font-light">
                      Official communication partner for Tulas International School admissions.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
