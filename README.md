# Tulas International School (TIS) – Animated Homepage Redesign

> **Frontend Developer Assignment Submission for NetPuppys**  
> **Reference Website:** [https://tis.edu.in/](https://tis.edu.in/)  
> **Status:** Production-Ready, Fully Responsive & Animated

---

## 📌 Project Overview

This project is a modern, responsive, and animated redesign of the **Tulas International School (TIS), Dehradun** homepage. Known as *"The Modern Gurukul"*, TIS blends timeless Vedic values of discipline, mindfulness, and service with cutting-edge 21st-century academics, Olympic-level sports infrastructure, and world-class pastoral care.

The redesign transforms the online presence of TIS with:
- Premium boarding school aesthetics using official TIS navy (`#0B2545`), royal gold (`#C5A059`), and crimson (`#8E1624`) accents.
- Purposeful, fluid animations powered by **Framer Motion**.
- Modular, component-driven architecture adhering to clean code and reusable UI guidelines.
- **All 4 Mandatory Advanced Features** implemented to perfection (Custom Cursor, Scroll Animations, Light/Dark Theme Switcher, and Scroll Progress Bar).

---

## 🚀 Live Demo & Repository

- **Live Deployed URL:** [https://tis-frontend-assignment-eight.vercel.app/](https://tis-frontend-assignment-eight.vercel.app/)
- **GitHub Repository:** [https://github.com/Manasa7788/tis-frontend-assignment](https://github.com/Manasa7788/tis-frontend-assignment)

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme` variables
- **Animation Engine:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Micro-Interactions:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Typography:** Google Fonts (*Cinzel* for classic school headings & *Plus Jakarta Sans* for clean, modern readability)
- **Deployment Targets:** Vercel, Netlify, or GitHub Pages

---

## ✨ Implemented Sections (11 Comprehensive Sections)

1. **Navbar (`Navbar.jsx`):**
   - Official TIS crest branding.
   - Sticky navigation with glassmorphism blur and dynamic shadow on scroll.
   - Active section tracker highlighting current page position.
   - Integrated Light/Dark mode switcher.
   - Accessible animated hamburger drawer for mobile/tablet screens.
   - Direct Call and "Apply Now" CTAs.

2. **Hero Section (`Hero.jsx`):**
   - High-impact headline: *"The Modern Gurukul for Future Global Leaders"*.
   - Staggered text reveals and smooth entrance transitions.
   - Dynamic background image with depth vignette and subtle scale animation.
   - Primary CTA *"Apply for Admission"* + Secondary CTA *"Book Campus Visit"*.
   - Floating interactive badges (*Ranked #1 Co-Ed Residential School* & *100% CBSE Board Pass Honors*).

3. **About TIS (`About.jsx`):**
   - Introduction to the Modern Gurukul philosophy and Himalayan foothill location.
   - Three key pillars: Intellectual Rigor, Pastoral Care, and Olympic Sports.
   - Overlapping visual imagery with quote highlight.
   - **Scroll-triggered statistics cards** (22+ Acres, 1:8 Ratio, 100% Board Pass, 16+ Sports, 30+ Clubs, 12+ Years).

4. **Academics Section (`Academics.jsx`):**
   - Interactive program cards for Junior School, Middle School, Secondary School, and Senior Secondary.
   - Hover elevation and image scaling.
   - **"Learn More" modal (`AcademicsDetailModal.jsx`)** showing detailed syllabus, core academic pillars, and CBSE affiliation details.
   - Integrated competitive exam coaching banner (IIT-JEE, NEET, CLAT, SAT, NDA).

5. **Campus & Facilities (`Facilities.jsx`):**
   - Bento-grid layout showcasing Smart Classrooms, Olympic Sports Complex, Boarding Hostels, Science/AI Labs, Organic Dining, and Knowledge Library.
   - Filterable tabs (*All, Academic, Athletics, Residential*) with animated layout transitions.
   - Visual hover zoom and "Tour Facility" interaction.

6. **Why Choose TIS (`WhyTIS.jsx`):**
   - 6 distinct differentiator cards with custom icons and viewport entrance animations.
   - Focus on pastoral care, clean Himalayan haven, Vedic ethos, and global MUN exposure.
   - The Headmaster's Vision quotation card.

7. **Life at TIS / Activities (`Activities.jsx`):**
   - Filterable co-curricular gallery (*Sports, Cultural, Innovation, Leadership, Adventure*).
   - High-resolution visual cards highlighting equestrian, performing arts, robotics, and trekking.
   - Day-at-TIS schedule teaser.

8. **Testimonials Section (`Testimonials.jsx`):**
   - Authentic stories and feedback from parents, students, and alumni.
   - Interactive carousel with 5-star ratings, author roles, avatars, pagination indicators, and next/prev controls.
   - Auto-advance rotation with manual pause/control capability.

9. **Admissions CTA (`AdmissionsCTA.jsx`):**
   - Visually striking high-conversion admissions banner for Academic Session 2026-27.
   - 4-Step transparent admissions roadmap (Online Registration → TISAT Interaction → Offer of Admission → Welcome to Gurukul).
   - Instant direct links for online application, campus tour booking, and telephone helpline.

10. **Contact Section (`Contact.jsx`):**
    - Official campus address (Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun).
    - Phone numbers (+91 98379 83791 / +91 94583 11000) and email addresses.
    - Embedded Google Maps view with campus pin.
    - **Fully functional contact form** with comprehensive frontend validation (Name, Email format, 10-digit Phone, Grade selection, Message) and celebratory confetti feedback on submission.

11. **Footer (`Footer.jsx`):**
    - TIS crest, mission summary, quick navigation links, admissions resource links.
    - Working newsletter subscription with instant confirmation.
    - Social media links (Facebook, Instagram, YouTube, LinkedIn).
    - Copyright & official CBSE Affiliation No. 3530364 details.

12. **Quick Enquiry Modal (`QuickEnquiryModal.jsx`):**
    - Global popup triggered from any CTA on the page.
    - Detailed intake fields with error handling, ESC/backdrop dismissal, and confetti celebration.

---

## 🌟 Mandatory Advanced Features Implemented

| Feature | Implementation | Description |
|---|---|---|
| **1. Custom Cursor** | `CustomCursor.jsx` | Mouse-following outer ring with spring physics and center dot. Automatically expands, scales, and adds gold tint when hovering links and buttons. Gracefully disabled on touch devices. |
| **2. Scroll Animations** | Framer Motion Viewports | Viewport-triggered fade-ins, slide-ups, and staggered children transitions on all sections and cards without hindering scrolling performance. |
| **3. Theme Switcher** | `ThemeContext.jsx` + `ThemeToggle.jsx` | Light Mode ↔ Dark Mode with smooth color transitions, high-contrast accessible palettes, and persistence in `localStorage`. |
| **4. Scroll Progress Bar** | `ScrollProgress.jsx` | Fixed top progress bar with tricolor TIS gradient tracking page reading depth from 0% to 100% with real-time percentage counter. |

---

## 📂 Project Architecture

```
frontendApp/
│
├── public/
│   ├── favicon.svg             # Custom TIS school crest SVG
│   └── robots.txt              # SEO crawler directives
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive sticky navigation with mobile drawer
│   │   ├── Hero.jsx            # Hero section with floating stats & CTAs
│   │   ├── About.jsx           # Mission, philosophy & animated stats
│   │   ├── Academics.jsx       # Academic levels with syllabus modal
│   │   ├── Facilities.jsx      # Filterable Bento Grid campus facilities
│   │   ├── WhyTIS.jsx          # 6 distinctive institutional pillars
│   │   ├── Activities.jsx      # Student life & co-curricular gallery
│   │   ├── Testimonials.jsx    # Community reviews carousel with autoplay
│   │   ├── AdmissionsCTA.jsx   # Admissions banner & 4-step workflow
│   │   ├── Contact.jsx         # Address, Google map & validated form
│   │   ├── Footer.jsx          # Comprehensive footer & newsletter
│   │   ├── CustomCursor.jsx    # Interactive spring cursor
│   │   ├── ScrollProgress.jsx  # Top scroll percentage indicator
│   │   ├── ThemeToggle.jsx     # Light/Dark mode animated toggle
│   │   ├── QuickEnquiryModal.jsx # Global admissions enquiry popup
│   │   └── AcademicsDetailModal.jsx # Academic syllabus modal
│   │
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark/Light theme provider with localStorage
│   │
│   ├── data/
│   │   └── tisData.js          # Centralized data source rendered via .map()
│   │
│   ├── App.jsx                 # Master application component
│   ├── main.jsx                # React root entry point
│   └── index.css               # Tailwind CSS v4 setup & custom tokens
│
├── index.html                  # Semantic HTML5 with meta tags & Google Fonts
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite + Tailwind v4 plugin configuration
└── README.md                   # Complete documentation & deployment guide
```

---

## 💻 Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/tis-frontend-assignment.git
   cd tis-frontend-assignment
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🚢 Deployment Instructions (Vercel / Netlify)

### Deploying to Vercel (Recommended):
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `tis-frontend-assignment` repository.
4. Keep the default settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**. Your live URL will be active in seconds!

### Deploying to Netlify:
1. Connect your GitHub repository on [Netlify](https://www.netlify.com/).
2. Set Build Command: `npm run build`
3. Set Publish directory: `dist`
4. Click **"Deploy Site"**.

---

## 📱 Responsive Testing Matrix

- **Large Desktop (1440px+):** Full 12-column layout, custom cursor enabled, spacious typography.
- **Desktop (1024px – 1280px):** Proportional fluid layout, clean navigation spacing.
- **Tablet (768px):** 2-column bento grids, touch-adapted buttons, sticky navbar.
- **Mobile (375px – 425px):** Responsive hamburger menu, full-width touch-friendly CTAs, zero horizontal overflow, cursor automatically hidden for pure touch performance.

---

## 🛡️ Accessibility & Code Standards

- **Semantic HTML5:** `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, single `<h1>` per page.
- **Contrast Ratios:** Checked in both Light and Dark modes to comply with WCAG 2.1 AA standards.
- **Clean Code:** No unnecessary duplicate HTML; all card data mapped via `src/data/tisData.js`.
- **Keyboard Navigation:** Modals dismissible via `Escape` key; focus states on all buttons and inputs.
