export interface GymConfig {
  brand: {
    name: string;
    tagline: string;
    subTagline: string;
    established: string;
    city: string;
    state: string;
    address: string;
    landmark: string;
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappDisplay: string;
    email: string;
    instagram: string;
    googleMapsUrl: string;
    googleRating: number;
    reviewCount: number;
  };
  timings: {
    weekdays: string;
    weekdaysSlots: string;
    sunday: string;
    sundaySlots: string;
  };
  heroStats: Array<{
    value: string;
    label: string;
    sublabel: string;
  }>;
  programs: Array<{
    id: string;
    title: string;
    tag: string;
    duration: string;
    intensity: string;
    description: string;
    highlights: string[];
    bestFor: string;
  }>;
  facilityZones: Array<{
    id: string;
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    equipment: string[];
    tag: string;
    span: string; // Tailwind grid span
  }>;
  trainers: Array<{
    id: string;
    name: string;
    role: string;
    experience: string;
    specialties: string[];
    certifications: string[];
    bio: string;
    clientHighlights: string;
  }>;
  memberships: Array<{
    id: string;
    title: string;
    duration: string;
    price: number;
    priceDisplay: string;
    monthlyEquivalent: string;
    badge?: string;
    popular?: boolean;
    features: string[];
  }>;
  testimonials: Array<{
    id: string;
    author: string;
    location: string;
    rating: number;
    program: string;
    quote: string;
    date: string;
    avatarInitials: string;
  }>;
  beforeAfterDemos: Array<{
    id: string;
    title: string;
    member: string;
    gender: 'male' | 'female';
    age: number;
    duration: string;
    stats: {
      weightChange: string;
      bodyFat: string;
      primaryGain: string;
    };
    story: string;
    programUsed: string;
  }>;
}

export const gymConfig: GymConfig = {
  brand: {
    name: "NOIR.FIT",
    tagline: "TRAIN SMART. GET STRONGER.",
    subTagline: "A premium fitness space built around your goals, your progress and your transformation.",
    established: "2024",
    city: "Ranchi",
    state: "Jharkhand",
    address: "Plot 42, 2nd Floor, Circular Road, Lalpur",
    landmark: "Opposite Nucleus Mall Road, Lalpur Chowk",
    phone: "+919835124780",
    phoneDisplay: "+91 98351 24780",
    whatsapp: "919835124780",
    whatsappDisplay: "+91 98351 24780",
    email: "contact@noirfit.demo",
    instagram: "@noir.fit.ranchi",
    googleMapsUrl: "https://maps.google.com/?q=Lalpur+Chowk+Ranchi+Jharkhand",
    googleRating: 4.8,
    reviewCount: 284,
  },
  timings: {
    weekdays: "Monday – Saturday",
    weekdaysSlots: "5:30 AM – 10:30 PM",
    sunday: "Sunday",
    sundaySlots: "7:00 AM – 1:00 PM (Recovery & Open Floor)",
  },
  heroStats: [
    {
      value: "4.8 ★",
      label: "Google Rating",
      sublabel: "280+ verified reviews",
    },
    {
      value: "500+",
      label: "Active Members",
      sublabel: "Men & women in Ranchi",
    },
    {
      value: "5+ Years",
      label: "Coaching Experience",
      sublabel: "Certified fitness trainers",
    },
    {
      value: "100%",
      label: "Personal Attention",
      sublabel: "Form, safety & real plans",
    },
  ],
  programs: [
    {
      id: "fat-loss",
      title: "FAT LOSS",
      tag: "Structured Training & Nutrition",
      duration: "12 Weeks",
      intensity: "Moderate to High",
      description: "Structured training and practical nutrition guidance to help you lose fat, protect muscle and build sustainable daily habits.",
      highlights: [
        "Full-body movements to burn calories and boost metabolism",
        "Targeted cardio conditioning that preserves joints",
        "Simple, high-protein meal advice suited for Indian diets",
        "Bi-weekly body measurements and progress tracking"
      ],
      bestFor: "Anyone looking to drop body fat sustainably without starvation diets",
    },
    {
      id: "muscle-building",
      title: "MUSCLE BUILDING",
      tag: "Progressive Strength Training",
      duration: "16 Weeks",
      intensity: "High",
      description: "Progressive strength training designed to help you gain muscle, increase lifting power and build a balanced athletic physique.",
      highlights: [
        "Proven 4-day and 5-day workout splits",
        "Step-by-step progressive overload on barbell and dumbbell lifts",
        "Targeted exercises for chest, back, shoulders and arms",
        "Recovery protocols to help muscles repair and grow"
      ],
      bestFor: "Men and women wanting visible athletic muscle definition and shape",
    },
    {
      id: "general-fitness",
      title: "GENERAL FITNESS",
      tag: "Strength, Stamina & Energy",
      duration: "Ongoing",
      intensity: "Moderate",
      description: "Build strength, improve stamina and feel better every day. Perfect for beginners and working professionals who want active vitality.",
      highlights: [
        "Balanced blend of strength training, cardio and core stability",
        "Low-pressure movements that protect knees and lower back",
        "Trainer on the floor to explain machines and correct posture",
        "Noticeable increase in day-to-day energy and stamina"
      ],
      bestFor: "Working professionals and first-time gym members wanting all-around health",
    },
    {
      id: "personal-training",
      title: "PERSONAL TRAINING",
      tag: "One-to-One Dedicated Coaching",
      duration: "Monthly / Quarterly",
      intensity: "Customized to You",
      description: "One-to-one coaching with a plan built around your exact goals, fitness level, busy work schedule and body type.",
      highlights: [
        "Dedicated coach guiding every repetition and set",
        "Instant posture corrections to lift safely without joint strain",
        "Weekly diet reviews and habit check-ins via WhatsApp",
        "Clear monthly personal records and milestone tracking"
      ],
      bestFor: "Busy professionals, beginners wanting fast results, or individuals needing personal attention",
    },
    {
      id: "womens-fitness",
      title: "WOMEN'S FITNESS",
      tag: "Strength, Tone & Confidence",
      duration: "12 Weeks",
      intensity: "Tailored & Supportive",
      description: "Strength, fitness and confidence in a safe, supportive environment with female coaches and customized toning routines.",
      highlights: [
        "Focus on glutes, core stability, posture alignment and overall tone",
        "Guidance on free weights without feeling intimidated",
        "Hormone-friendly nutrition and sustainable meal habits",
        "Comfortable, welcoming gym culture in central Ranchi"
      ],
      bestFor: "Women wanting to build strength, drop fat and feel empowered lifting weights",
    },
    {
      id: "functional-fitness",
      title: "FUNCTIONAL FITNESS",
      tag: "Mobility, Agility & Conditioning",
      duration: "8 – 12 Weeks",
      intensity: "Dynamic Circuit",
      description: "Improve real-life movement, joint mobility, cardiovascular stamina and core power for sports and active everyday life.",
      highlights: [
        "Kettlebell swings, battle ropes, slam balls and turf sled pushes",
        "Multi-angle functional movements that build core power",
        "High-energy conditioning intervals that burn calories fast",
        "Flexibility and joint mobility to eliminate desk-job stiffness"
      ],
      bestFor: "Active adults wanting athletic speed, endurance and flexible joints",
    },
  ],
  facilityZones: [
    {
      id: "strength-zone",
      title: "STRENGTH ZONE",
      subtitle: "Free Weights & Power Racks",
      description: "Build strength and muscle with heavy-duty power racks, competition Olympic barbells, calibrated bumper plates, and urethane dumbbells up to 50 kg.",
      features: ["Urethane dumbbells from 2.5kg to 50kg", "3 Full Power Cages with spotter arms", "Olympic flat, incline & decline benches"],
      equipment: ["Power Racks with spotters", "Heavy Olympic Barbells & Plates", "Dumbbells up to 50 kg"],
      tag: "STRENGTH",
      span: "col-span-12 lg:col-span-8",
    },
    {
      id: "cardio-zone",
      title: "CARDIO ZONE",
      subtitle: "Stamina & Heart Health",
      description: "Improve stamina, burn calories and build cardiovascular fitness with modern curved treadmills, cross trainers, rowers and exercise bikes.",
      features: ["Heart rate tracking monitors", "Zero-impact joint-friendly treadmills", "Individual air vents for comfort"],
      equipment: ["Commercial Treadmills", "Cross Trainers & Ellipticals", "Stationary Bikes & Rowers"],
      tag: "CARDIO",
      span: "col-span-12 lg:col-span-4",
    },
    {
      id: "personal-coaching",
      title: "PERSONAL COACHING",
      subtitle: "One-to-One Dedicated Guidance",
      description: "One-to-one coaching designed around your goals. Private assessment area where certified coaches work with you on technique, posture and plans.",
      features: ["Body composition analysis", "Private mobility & assessment mats", "Direct coach progress logging"],
      equipment: ["Functional Trainer Cables", "Safety Squat Bars", "Resistance Bands & Micro-plates"],
      tag: "COACHING",
      span: "col-span-12 lg:col-span-4",
    },
    {
      id: "functional-area",
      title: "FUNCTIONAL AREA",
      subtitle: "Turf, Sled & Conditioning",
      description: "High-density synthetic grass turf lane designed for sled pushes, battle ropes, kettlebell complexes and dynamic agility conditioning.",
      features: ["15-meter sprint & sled turf lane", "Pull-up rig & wall-ball target", "Storage for kettlebells & slam balls"],
      equipment: ["Prowler Sled & Turf", "Cast-Iron Kettlebells (4–32kg)", "Heavy Battle Ropes"],
      tag: "TURF",
      span: "col-span-12 lg:col-span-4",
    },
    {
      id: "training-floor",
      title: "TRAINING FLOOR",
      subtitle: "Spacious Main Gym Floor",
      description: "Wide, air-conditioned 4,500 sq.ft. training floor with shock-absorbing rubber flooring, dual-pulley cable towers and ergonomic pin-loaded machines.",
      features: ["4,500 sq.ft. climate-controlled floor", "High-density sanitized rubber turf", "High airflow & natural lighting"],
      equipment: ["Dual Cable Crossover Towers", "Smith Machines with Counter-Balance", "Adjustable Multi-Angle Benches"],
      tag: "MAIN FLOOR",
      span: "col-span-12 lg:col-span-4",
    },
    {
      id: "recovery-space",
      title: "RECOVERY & MOBILITY",
      subtitle: "Stretch, Cool Down & Restore",
      description: "A calm, dedicated area for pre-workout warm-ups, post-workout foam rolling, assisted stretching and joint mobility drills to prevent soreness.",
      features: ["High-density foam rollers & trigger balls", "Deep tissue massage tools", "Clean air-conditioned stretching zone"],
      equipment: ["Mobility Bands & Stretch Ladders", "Core Yoga Mats & Balance Balls", "Hydration Station"],
      tag: "RECOVERY",
      span: "col-span-12",
    },
  ],
  trainers: [
    {
      id: "arjun-kumar",
      name: "ARJUN KUMAR",
      role: "Head Coach · Strength & Conditioning",
      experience: "8+ Years Experience",
      specialties: ["Strength Training", "Muscle Building", "Posture Correction"],
      certifications: ["CSCS Certified Coach", "Biomechanics Level 2", "First Aid & CPR"],
      bio: "Arjun has coached over 350+ members across Ranchi. He specializes in breaking down compound lifts into simple, safe cues so anyone can lift with rock-solid confidence.",
      clientHighlights: "Guided over 300 members to build lifting confidence and master safe squat and deadlift mechanics.",
    },
    {
      id: "priya-sharma",
      name: "PRIYA SHARMA",
      role: "Fitness Coach · Women's Fitness & Mobility",
      experience: "5+ Years Experience",
      specialties: ["Fat Loss", "Women's Fitness", "Mobility & Posture"],
      certifications: ["ACE Certified Personal Trainer", "Pre & Post Natal Specialist"],
      bio: "Priya focuses on functional stamina, fat loss and building sustainable workout habits. Her warm, encouraging approach makes first-time gym members feel completely at home.",
      clientHighlights: "Helped over 180 female members in Ranchi achieve their fat loss and tone goals sustainably.",
    },
    {
      id: "rohit-singh",
      name: "ROHIT SINGH",
      role: "Performance Coach · Conditioning & Agility",
      experience: "6+ Years Experience",
      specialties: ["Athletic Conditioning", "Cardio Fitness", "Fat Loss"],
      certifications: ["K11 Fitness Academy", "Cross-Training Master Trainer"],
      bio: "Rohit combines high-energy circuit training with barbell fundamentals. Whether you are training for local sports or everyday vigor, he keeps workouts engaging.",
      clientHighlights: "Helped 200+ working professionals build stamina, shed belly fat and stay consistent.",
    },
  ],
  memberships: [
    {
      id: "monthly",
      title: "MONTHLY",
      duration: "1 Month",
      price: 2499,
      priceDisplay: "₹2,499",
      monthlyEquivalent: "₹2,499 / month",
      badge: "FLEXIBLE",
      features: [
        "Full access to strength & cardio floors",
        "Free locker & shower facilities",
        "Initial 30-min fitness assessment",
        "Trainer on floor for form questions",
        "No long-term lock-in commitment"
      ],
    },
    {
      id: "quarterly",
      title: "QUARTERLY",
      duration: "3 Months",
      price: 5999,
      priceDisplay: "₹5,999",
      monthlyEquivalent: "₹1,999 / month",
      badge: "POPULAR CHOICE",
      popular: true,
      features: [
        "Save ₹1,500 compared to monthly plan",
        "Full gym access 7 days a week",
        "Customized workout split sheet",
        "Basic nutrition & protein guide",
        "Monthly body composition tracking",
        "1 Free 1-on-1 PT consultation session"
      ],
    },
    {
      id: "half-yearly",
      title: "HALF-YEARLY",
      duration: "6 Months",
      price: 9999,
      priceDisplay: "₹9,999",
      monthlyEquivalent: "₹1,666 / month",
      badge: "BETTER VALUE",
      features: [
        "Save ₹5,000 across 6 months",
        "Full gym & functional turf access",
        "Bi-weekly progress check-ins",
        "Indian meal planning guidance",
        "2 Free 1-on-1 PT sessions included",
        "Free guest pass (1 per month)"
      ],
    },
    {
      id: "yearly",
      title: "YEARLY",
      duration: "12 Months",
      price: 15999,
      priceDisplay: "₹15,999",
      monthlyEquivalent: "₹1,333 / month",
      badge: "BEST VALUE",
      features: [
        "Lowest monthly rate (Just ₹1,333/mo)",
        "30-day membership freeze option",
        "Complete annual training roadmap",
        "4 Free 1-on-1 PT coaching sessions",
        "Priority locker & towel service",
        "Exclusive NOIR.FIT member t-shirt"
      ],
    },
  ],
  testimonials: [
    {
      id: "t1",
      author: "Vikash Pandey",
      location: "Lalpur, Ranchi",
      rating: 5,
      program: "Fat Loss & Conditioning",
      quote: "The equipment is genuinely modern and the trainers actually pay attention to your form instead of chatting on their phones. Down 9 kg in 3 months.",
      date: "2 weeks ago",
      avatarInitials: "VP",
    },
    {
      id: "t2",
      author: "Ananya Roy",
      location: "Kanke Road, Ranchi",
      rating: 5,
      program: "Women's Fitness & Strength",
      quote: "I was very nervous about joining a gym for the first time. Coach Priya made me feel completely comfortable and taught me machine basics with patience.",
      date: "1 month ago",
      avatarInitials: "AR",
    },
    {
      id: "t3",
      author: "Aman Verma",
      location: "Morabadi, Ranchi",
      rating: 5,
      program: "Muscle Building",
      quote: "Clean environment, air-conditioned, good crowd and no unnecessary overcrowding during peak hours. Best gym in Ranchi without question.",
      date: "3 weeks ago",
      avatarInitials: "AV",
    },
    {
      id: "t4",
      author: "Dr. Saurav Banerjee",
      location: "Bariatu, Ranchi",
      rating: 5,
      program: "Personal Training",
      quote: "With my hectic hospital shifts, Arjun customized a 45-minute training routine that fit my schedule. My back pain from long standing hours is gone.",
      date: "2 months ago",
      avatarInitials: "SB",
    },
  ],
  beforeAfterDemos: [
    {
      id: "case-1",
      title: "12-WEEK FAT LOSS & LEAN MUSCLE",
      member: "Rahul S.",
      gender: "male",
      age: 29,
      duration: "12 Weeks",
      stats: {
        weightChange: "-8.4 KG",
        bodyFat: "26% → 17%",
        primaryGain: "+35 KG on Deadlift",
      },
      story: "Rahul was working long desk hours in Lalpur and wanted to shed stubborn belly fat while building back strength. Combined 4 days of guided barbell training with simple Indian macro planning.",
      programUsed: "Fat Loss & Muscle Building",
    },
    {
      id: "case-2",
      title: "12-WEEK WOMEN'S TONING & STRENGTH",
      member: "Pooja M.",
      gender: "female",
      age: 27,
      duration: "12 Weeks",
      stats: {
        weightChange: "-6.2 KG",
        bodyFat: "28% → 20%",
        primaryGain: "Glute Tone & Posture",
      },
      story: "Pooja wanted to tone up and improve energy. Coach Priya guided her on kettlebell swings, squats and progressive dumbbell presses with sustainable home meal choices.",
      programUsed: "Women's Fitness & Tone",
    },
    {
      id: "case-3",
      title: "16-WEEK LEAN MUSCLE RECOMPOSITION",
      member: "Vikram K.",
      gender: "male",
      age: 31,
      duration: "16 Weeks",
      stats: {
        weightChange: "+4.5 KG",
        bodyFat: "16% → 12%",
        primaryGain: "Chest & Shoulder Width",
      },
      story: "Started as a lean beginner. Focused on progressive overload on squats, bench press, and pull-ups alongside an extra 40g daily protein intake.",
      programUsed: "Muscle Building Program",
    },
  ],
};

export const getWhatsAppLink = (message?: string) => {
  const defaultMsg = "Hi, I'd like to know more about NOIR.FIT gym and membership in Ranchi.";
  const encoded = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${gymConfig.brand.whatsapp}?text=${encoded}`;
};
