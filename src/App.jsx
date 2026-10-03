import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Facilities from './components/Facilities';
import WhyTIS from './components/WhyTIS';
import Activities from './components/Activities';
import Testimonials from './components/Testimonials';
import AdmissionsCTA from './components/AdmissionsCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuickEnquiryModal from './components/QuickEnquiryModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPurpose, setModalPurpose] = useState('Admission Enquiry 2026-27');

  const handleOpenEnquiry = (purpose = 'Admission Enquiry 2026-27') => {
    setModalPurpose(purpose);
    setIsModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsModalOpen(false);
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-tis-cream dark:bg-tis-dark text-tis-navy dark:text-gray-100 font-sans selection:bg-tis-gold/30 selection:text-tis-navy dark:selection:text-tis-gold transition-colors duration-300">
        
        {/* Mandatory Feature 1: Custom Interactive Cursor */}
        <CustomCursor />

        {/* Mandatory Feature 4: Scroll Progress Bar */}
        <ScrollProgress />

        {/* Section 1: Modern Sticky Responsive Navbar (with Feature 3: Theme Switcher) */}
        <Navbar onOpenEnquiry={handleOpenEnquiry} />

        {/* Main Content Sections */}
        <main>
          {/* Section 2: Hero Section */}
          <Hero onOpenEnquiry={handleOpenEnquiry} />

          {/* Section 3: About TIS Section */}
          <About onOpenEnquiry={handleOpenEnquiry} />

          {/* Section 4: Academics Section */}
          <Academics onOpenEnquiry={handleOpenEnquiry} />

          {/* Section 5: Campus / Facilities Section */}
          <Facilities onOpenEnquiry={handleOpenEnquiry} />

          {/* Section 6: Why Choose TIS Section */}
          <WhyTIS onOpenEnquiry={handleOpenEnquiry} />

          {/* Section 7: Life at TIS / Activities Section */}
          <Activities onOpenEnquiry={handleOpenEnquiry} />

          {/* Section 8: Testimonials Section */}
          <Testimonials />

          {/* Section 9: Admissions CTA Section */}
          <AdmissionsCTA onOpenEnquiry={handleOpenEnquiry} />

          {/* Section 10: Contact Section with Validated Form & Google Map */}
          <Contact />
        </main>

        {/* Section 11: Footer */}
        <Footer onOpenEnquiry={handleOpenEnquiry} />

        {/* Reusable Quick Enquiry / Admissions Modal */}
        <QuickEnquiryModal
          isOpen={isModalOpen}
          onClose={handleCloseEnquiry}
          defaultPurpose={modalPurpose}
        />

      </div>
    </ThemeProvider>
  );
}
