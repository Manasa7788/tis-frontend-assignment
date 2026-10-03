export const schoolInfo = {
  name: "Tulas International School",
  shortName: "TIS",
  tagline: "The Modern Gurukul",
  subTagline: "Nurturing Mind, Body & Soul in the Foothills of Dehradun",
  affiliation: "Affiliated to CBSE, New Delhi (Affiliation No. 3530364)",
  address: "Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun - 248011, Uttarakhand, India",
  phone: "+91 98379 83791 / +91 94583 11000",
  email: "admissions@tis.edu.in",
  infoEmail: "info@tis.edu.in",
  establishedYear: "2012",
  campusSize: "22+ Acres Lush Campus",
  ratio: "1:8 Teacher-Student Ratio",
  grades: "Grades IV to XII (Co-Ed Residential)"
};

export const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About TIS", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Campus & Facilities", href: "#facilities" },
  { name: "Why TIS", href: "#why-tis" },
  { name: "Life @ TIS", href: "#activities" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" }
];

export const keyStats = [
  { value: "22+", label: "Acres Eco-Campus", subtext: "Pristine Shivalik foothills" },
  { value: "1:8", label: "Teacher Ratio", subtext: "Personalized mentor care" },
  { value: "100%", label: "CBSE Board Pass", subtext: "Consistent academic honors" },
  { value: "16+", label: "Olympic Sports", subtext: "Horse riding, shooting & pool" },
  { value: "30+", label: "Clubs & Societies", subtext: "STEM, Arts, Debate & MUN" },
  { value: "12+", label: "Years of Excellence", subtext: "Founded on Gurukul values" }
];

export const academicPrograms = [
  {
    id: "junior-school",
    title: "Junior School",
    grades: "Grades IV – V",
    description: "Inquiry-based foundational learning focusing on curiosity, communication skills, artistic expression, and foundational numeracy.",
    features: [
      "Activity-driven experiential pedagogy",
      "Phonics, languages & creative storytelling",
      "Introduction to nature exploration & gardening",
      "Gentle residential orientation & pastoral mentors"
    ],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
    badge: "Foundational Years"
  },
  {
    id: "middle-school",
    title: "Middle School",
    grades: "Grades VI – VIII",
    description: "Holistic bridge building cognitive agility, scientific temperament, digital literacy, and collaborative problem solving.",
    features: [
      "STEM laboratories & introductory robotics",
      "Trilingual proficiency (English, Hindi, Sanskrit/French)",
      "Daily compulsory sports training & performing arts",
      "Leadership development through house systems"
    ],
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    badge: "Exploratory Years"
  },
  {
    id: "secondary-school",
    title: "Secondary School",
    grades: "Grades IX – X",
    description: "Rigorous academic preparation for the CBSE Board examinations complemented by vocational electives and aptitude mapping.",
    features: [
      "Comprehensive CBSE curriculum aligned with NEP 2020",
      "Specialized science, math & computing workshops",
      "National Olympiad & debate competitions",
      "Structured career counselling & psychometric assessments"
    ],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    badge: "Core CBSE Board"
  },
  {
    id: "senior-secondary",
    title: "Senior Secondary",
    grades: "Grades XI – XII",
    description: "Specialized streams in Science, Commerce, and Humanities with integrated competitive exam mentoring for national & international universities.",
    features: [
      "Streams: Medical, Non-Medical, Commerce & Humanities",
      "Integrated prep for JEE, NEET, CLAT, SAT & CUET",
      "Global university application portfolio mentorship",
      "Senior student governance & internship opportunities"
    ],
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    badge: "Pre-University"
  }
];

export const facilitiesData = [
  {
    id: "classrooms",
    title: "Smart Digital Classrooms",
    category: "Academic",
    description: "Ergonomically designed, air-conditioned smart classrooms equipped with 4K interactive digital panels and climate control.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    highlight: "Interactive Tech"
  },
  {
    id: "sports-complex",
    title: "Olympic-Standard Sports Arena",
    category: "Athletics",
    description: "Dedicated equestrian arena, synthetic athletic track, semi-Olympic heated swimming pool, squash & lawn tennis courts.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    highlight: "16+ Sports"
  },
  {
    id: "boarding-hostels",
    title: "Premium Boarding Residences",
    category: "Residential",
    description: "Warm, comfortable and secure dormitories with separate hostels for boys and girls, supervised by caring House Masters.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    highlight: "Home Away From Home"
  },
  {
    id: "stem-labs",
    title: "Advanced AI & Science Labs",
    category: "Academic",
    description: "High-spec Physics, Chemistry, Biology, Robotics, Drone Technology and AI innovation labs for real experiential mastery.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
    highlight: "Future-Ready STEM"
  },
  {
    id: "dining-hall",
    title: "Nutritious Multi-Cuisine Dining",
    category: "Residential",
    description: "Hygienic central mess serving organic, balanced, chef-curated meals under the supervision of qualified nutritionists.",
    image: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=800&q=80",
    highlight: "100% Organic Meals"
  },
  {
    id: "central-library",
    title: "Knowledge Resource Centre",
    category: "Academic",
    description: "Vast collection of over 20,000 volumes, international periodicals, Kindle digital reading nooks, and collaborative study pods.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    highlight: "20,000+ Books"
  }
];

export const whyChooseTIS = [
  {
    icon: "GraduationCap",
    title: "The Modern Gurukul Ethos",
    description: "We blend the timeless Vedic Gurukul values of discipline, humility and service with forward-looking international pedagogy."
  },
  {
    icon: "HeartHandshake",
    title: "Warm Pastoral Care",
    description: "Round-the-clock parental care where House Parents, tutors, and resident mentors provide unconditional emotional and psychological support."
  },
  {
    icon: "Trophy",
    title: "Elite Sports Academy",
    description: "Professional training in Equestrian (Horse Riding), Swimming, Shooting, Lawn Tennis, and Cricket with certified national coaches."
  },
  {
    icon: "Compass",
    title: "Integrated Competitive Prep",
    description: "Built-in expert coaching for IIT-JEE, NEET, CLAT, SAT, and NDA within the school timetable, eliminating external coaching stress."
  },
  {
    icon: "Trees",
    title: "Serene Himalayan Foothills",
    description: "Located in Dehradun's pollution-free microclimate surrounded by lush sal forests, encouraging deep focus and healthy physical growth."
  },
  {
    icon: "Globe",
    title: "Global Exposure & MUNs",
    description: "Frequent participation in international student exchange programs, Harvard Model UN, and leadership summits worldwide."
  }
];

export const activitiesData = [
  {
    category: "Sports",
    title: "Equestrian & Horse Riding",
    description: "One of the few boarding schools in Northern India with its own stables and international standard show-jumping arena.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Cultural",
    title: "Indian & Western Performing Arts",
    description: "Dedicated academies for Classical Hindustani music, Western instruments, Kathak, contemporary dance, and theatrical productions.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Innovation",
    title: "Robotics & Drone Aviation Club",
    description: "Students learn AI algorithm design, autonomous drone piloting, Arduino automation, and 3D printing from industry mentors.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Leadership",
    title: "Model United Nations & Debating",
    description: "Sharpening diplomatic finesse, global affairs awareness, and eloquent oratory through intra and inter-school parliamentary debates.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Adventure",
    title: "Trekking & Himalayan Expeditions",
    description: "Quarterly adventure camps, river rafting, mountaineering orientation, and nature conservation drives across Uttarakhand.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "Sports",
    title: "Semi-Olympic Swimming & Shooting",
    description: "All-weather indoor swimming facility and a 10m computerized precision air rifle and pistol shooting range.",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Dr. Rajeshwar Sharma",
    role: "Parent of Aarav Sharma (Grade XI)",
    relation: "Parent, New Delhi",
    content: "Sending our son to Tulas International School was the finest decision we made. The transformation in his self-confidence, physical stamina through horse riding, and academic discipline has been extraordinary. TIS truly lives up to its Modern Gurukul philosophy.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Sunita Deshmukh",
    role: "Parent of Ananya Deshmukh (Grade IX)",
    relation: "Parent, Mumbai",
    content: "The pastoral care at TIS is incomparable. As parents living hundreds of miles away, we have absolute peace of mind knowing the House Masters and teachers treat the children like their own family. The campus environment in Dehradun is pure bliss.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Vikramaditya Rawat",
    role: "Alumnus (Batch of 2023, Now at Imperial College London)",
    relation: "Alumnus",
    content: "TIS provided me with the global perspective and leadership grounding that allowed me to secure admissions into top universities abroad. The faculty nurtured my scientific curiosity and taught me to lead with empathy.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "Pooja & Amit Kulkarni",
    role: "Parents of Rohan Kulkarni (Grade VII)",
    relation: "Parents, Bengaluru",
    content: "The balance between academics and sports at TIS is exemplary. Rohan was once addicted to screens; today he plays lawn tennis, participates in the robotics club, and reads passionately. It's a transformative institution.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
  }
];

export const admissionsSteps = [
  {
    step: "01",
    title: "Online Registration",
    desc: "Submit the digital enquiry and registration form with student academic records."
  },
  {
    step: "02",
    title: "Campus Interaction / TISAT",
    desc: "A friendly aptitude assessment and personal interaction with the Principal."
  },
  {
    step: "03",
    title: "Offer of Admission",
    desc: "Successful candidates receive an official offer letter and fee details within 48 hours."
  },
  {
    step: "04",
    title: "Welcome to Gurukul",
    desc: "Orientation kit, hostel room allocation, and a warm onboarding for student and parents."
  }
];
