import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Send,
  Heart,
  CheckCircle2
} from 'lucide-react';
import { schoolInfo } from '../data/tisData';

export default function Footer({ onOpenEnquiry }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() && /\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNewsletterSubscribed(true);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tis-dark text-white border-t border-tis-dark-border relative overflow-hidden">
      
      {/* Top Gold Accent Bar */}
      <div className="h-1.5 bg-gradient-to-r from-tis-crimson via-tis-gold to-tis-navy" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Col 1: School Identity & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-tis-navy border border-tis-gold/50 flex items-center justify-center p-1.5 shadow-md">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                  <circle cx="50" cy="50" r="46" fill="#0B2545" stroke="#C5A059" strokeWidth="4"/>
                  <path d="M50 20 L75 32 L75 58 C75 72 50 82 50 82 C50 82 25 72 25 58 L25 32 Z" fill="#8E1624" stroke="#C5A059" strokeWidth="2"/>
                  <path d="M50 34 L50 68 M35 50 L65 50" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
                  <circle cx="50" cy="40" r="5" fill="#DFC07A"/>
                  <text x="50" y="90" fontFamily="Cinzel, serif" fontSize="10" fontWeight="bold" fill="#DFC07A" textAnchor="middle">TIS</text>
                </svg>
              </div>
              <div>
                <span className="font-serif font-black text-xl tracking-wider text-white">
                  TULAS
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-tis-gold">
                  International School
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
              Tulas International School (TIS) is a top-ranked co-educational CBSE boarding school in Dehradun, Uttarakhand, fostering academic distinction, ethical integrity, and Olympian sportsmanship in the spirit of the Modern Gurukul.
            </p>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-tis-gold shrink-0" />
              <span>{schoolInfo.affiliation}</span>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { name: "Facebook", href: "https://www.facebook.com/tulasinternationalschool/" },
                { name: "Instagram", href: "https://www.instagram.com/tulas_international_school/" },
                { name: "YouTube", href: "https://www.youtube.com/@TulasInternationalSchool" },
                { name: "LinkedIn", href: "https://www.linkedin.com/company/tula's-international-school" }
              ].map((soc) => (
                <a
                  key={soc.name}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-tis-gold hover:text-tis-navy text-xs font-semibold text-gray-300 transition-colors border border-white/10"
                >
                  {soc.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-tis-gold">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li>
                <a href="#hero" className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 opacity-50" /> Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 opacity-50" /> About TIS
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 opacity-50" /> Academics & Streams
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 opacity-50" /> Campus & Boarding
                </a>
              </li>
              <li>
                <a href="#why-tis" className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 opacity-50" /> Why Choose TIS
                </a>
              </li>
              <li>
                <a href="#activities" className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 opacity-50" /> Life @ TIS
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 opacity-50" /> Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Admissions & Academics (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-tis-gold">
              Admissions & Campus
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400 font-light">
              <li>
                <button
                  onClick={() => onOpenEnquiry("Admission Criteria 2026-27")}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer text-left"
                >
                  <ArrowUpRight className="w-3 h-3 opacity-50" /> Admission Procedure
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry("Schedule a Campus Visit")}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer text-left"
                >
                  <ArrowUpRight className="w-3 h-3 opacity-50" /> Schedule Campus Tour
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry("Download Prospectus")}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer text-left"
                >
                  <ArrowUpRight className="w-3 h-3 opacity-50" /> Download School Prospectus
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenEnquiry("Fee Structure Enquiry")}
                  className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer text-left"
                >
                  <ArrowUpRight className="w-3 h-3 opacity-50" /> Boarding & Tuition Fees
                </button>
              </li>
              <li>
                <a href="#academics" className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 opacity-50" /> IIT-JEE & NEET Coaching
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3 opacity-50" /> Olympic Sports Academy
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact Quick Digest (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-tis-gold">
              Admissions Newsletter
            </h4>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Stay informed about admission deadlines, entrance tests, scholarships, and campus events.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-600/40 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Subscribed! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter email address..."
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-tis-gold transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-tis-gold text-tis-navy hover:bg-tis-gold-light transition-colors cursor-pointer"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 text-xs text-gray-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-tis-gold" />
                <a href="tel:+919837983791" className="hover:text-white font-medium">
                  +91 98379 83791
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-tis-gold" />
                <a href="mailto:admissions@tis.edu.in" className="hover:text-white font-medium">
                  admissions@tis.edu.in
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Accreditation Strip */}
        <div className="pt-8 border-t border-tis-dark-border flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-light gap-4">
          <div>
            &copy; {currentYear} Tulas International School, Dehradun. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <span>CBSE Affiliation No. 3530364</span>
            <span>&bull;</span>
            <span className="text-gray-400">School Code: 81593</span>
            <span>&bull;</span>
            <span className="text-gray-400">Dehradun, Uttarakhand, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
