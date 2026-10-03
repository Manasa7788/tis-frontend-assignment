import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowUpRight, GraduationCap } from 'lucide-react';
import { navLinks, schoolInfo } from '../data/tisData';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');

  // Detect scroll to style the sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveLink(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when clicking a link
  const handleNavClick = (href) => {
    setActiveLink(href);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-tis-dark/90 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-tis-dark-border py-2.5'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Tulas International School Homepage"
          >
            {/* School Crest Logo */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-tis-navy flex items-center justify-center p-1.5 border border-tis-gold/50 shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                <circle cx="50" cy="50" r="46" fill="#0B2545" stroke="#C5A059" strokeWidth="4"/>
                <path d="M50 20 L75 32 L75 58 C75 72 50 82 50 82 C50 82 25 72 25 58 L25 32 Z" fill="#8E1624" stroke="#C5A059" strokeWidth="2"/>
                <path d="M50 34 L50 68 M35 50 L65 50" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="50" cy="40" r="5" fill="#DFC07A"/>
                <text x="50" y="90" fontFamily="Cinzel, serif" fontSize="10" fontWeight="bold" fill="#DFC07A" textAnchor="middle">TIS</text>
              </svg>
            </div>

            {/* School Title text */}
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-base sm:text-lg tracking-wide transition-colors ${
                isScrolled ? 'text-tis-navy dark:text-white' : 'text-white'
              }`}>
                TULAS
              </span>
              <span className="text-[10px] tracking-widest font-semibold uppercase text-tis-gold">
                International School
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-tis-gold font-semibold'
                      : isScrolled
                      ? 'text-gray-700 dark:text-gray-300 hover:text-tis-navy dark:hover:text-white hover:bg-gray-100/60 dark:hover:bg-white/5'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-tis-gold rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Quick Call */}
            <a
              href="tel:+919837983791"
              className={`p-2.5 rounded-full transition-colors ${
                isScrolled
                  ? 'text-tis-navy dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'text-white/90 hover:bg-white/10'
              }`}
              title="Call Admissions: +91 98379 83791"
              aria-label="Call Admissions"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* CTA Button */}
            <button
              onClick={() => onOpenEnquiry("Admissions Enquiry")}
              type="button"
              className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-tis-gold to-tis-gold-light text-tis-navy font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1">
                Apply Now
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile Menu & Theme button container */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle className="p-2" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-2 rounded-xl transition-colors ${
                isScrolled
                  ? 'text-tis-navy dark:text-white bg-gray-100 dark:bg-tis-dark-surface'
                  : 'text-white bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-tis-dark-surface/95 backdrop-blur-xl border-b border-gray-200 dark:border-tis-dark-border px-6 py-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              <div className="pb-3 mb-2 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-widest text-tis-gold">
                  Navigation Menu
                </span>
                <span className="text-[11px] text-gray-500">
                  CBSE Affiliated No. 3530364
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                    activeLink === link.href
                      ? 'bg-tis-navy text-tis-gold dark:bg-tis-navy/80 font-bold'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-tis-dark'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}

              {/* Mobile CTA section */}
              <div className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry("Admissions 2026-27");
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-tis-crimson to-tis-navy text-white font-bold text-sm text-center shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4 text-tis-gold" />
                  <span>Apply for Admission 2026-27</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry("Schedule a Campus Visit");
                  }}
                  className="w-full py-2.5 rounded-xl border border-tis-gold/60 text-tis-navy dark:text-tis-gold text-xs font-semibold text-center hover:bg-tis-gold/10 transition-colors"
                >
                  Schedule Campus Tour
                </button>

                <div className="text-center text-[11px] text-gray-500 dark:text-gray-400 pt-1">
                  Admissions Helpline: <a href="tel:+919837983791" className="font-bold text-tis-navy dark:text-tis-gold">+91 98379 83791</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
