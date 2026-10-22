/**
 * Verified details and structured data for Core Fitness Gym Udaipur
 * Sourced from Google Maps Listing (24.5610536, 73.7113316) & verified platform reviews
 */

export interface GymData {
  name: string;
  tagline: string;
  address: {
    plot: string;
    block: string;
    landmark: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    formatted: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  phone: string;
  phoneClean: string;
  rating: {
    score: number;
    totalReviews: number;
    platform: string;
  };
  shifts: {
    weekday: {
      morning: { open: string; close: string; label: string };
      evening: { open: string; close: string; label: string };
    };
    saturday: {
      morning: { open: string; close: string; label: string };
      evening: { open: string; close: string; label: string };
    };
    sunday: {
      isClosed: boolean;
      label: string;
    };
  };
  amenities: Array<{
    name: string;
    description: string;
    category: 'facility' | 'equipment' | 'service';
  }>;
  programs: Array<{
    id: string;
    number: string;
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
    focus: string;
    sessionLength: string;
    coachToMemberRatio: string;
  }>;
  memberships: Array<{
    id: string;
    title: string;
    duration: string;
    price: string;
    badge?: string;
    description: string;
    features: string[];
    recommendedFor: string;
  }>;
  spaces: Array<{
    id: string;
    title: string;
    subtitle: string;
    description: string;
    specifications: string[];
    atmosphere: string;
  }>;
  reviews: Array<{
    id: string;
    author: string;
    rating: number;
    source: string;
    comment: string;
    highlight: string;
    timeframe: string;
  }>;
}

export const GYM_DATA: GymData = {
  name: 'Core Fitness',
  tagline: 'Refined strength, purposeful movement, and enduring vitality in Udaipur.',
  address: {
    plot: 'Plot Number 4',
    block: 'C Block',
    landmark: 'Parshuram Choraha',
    locality: 'Sector 8 / Central Area',
    city: 'Udaipur',
    state: 'Rajasthan',
    pincode: '313002',
    formatted: 'Plot Number 4, C Block, Parshuram Choraha, Central Area / Sector 8, Udaipur, Rajasthan 313002',
  },
  coordinates: {
    lat: 24.5610536,
    lng: 73.7113316,
  },
  googleMapsUrl:
    'https://www.google.com/maps/place/Core+fitness+gym+udaipur/@24.5610536,73.7100547,16.47z/data=!4m9!1m2!8m1!1e4!3m5!1s0x3967ef0a0882d2e3:0x12822ef1854eea36!8m2!3d24.5610536!4d73.7113316!16s%2Fg%2F11ssgpd0ls?entry=ttu&g_ep=EgoyMDI2MTAxOS4wIKXMDSoASAFQAw%3D%3D',
  phone: '+91 88903 77237',
  phoneClean: '918890377237',
  rating: {
    score: 4.8,
    totalReviews: 88,
    platform: 'Google & FITPASS Verified Reviews',
  },
  shifts: {
    weekday: {
      morning: { open: '06:00', close: '12:00', label: '6:00 AM – 12:00 PM' },
      evening: { open: '15:00', close: '21:00', label: '3:00 PM – 9:00 PM' },
    },
    saturday: {
      morning: { open: '06:00', close: '10:00', label: '6:00 AM – 10:00 AM' },
      evening: { open: '15:00', close: '19:00', label: '3:00 PM – 7:00 PM' },
    },
    sunday: {
      isClosed: true,
      label: 'Closed for deep sanitisation & muscle recovery',
    },
  },
  amenities: [
    {
      name: 'Brand-New Machine Fleet',
      description: 'Precision biomechanical selectorized stations and plate-loaded leverage machines.',
      category: 'equipment',
    },
    {
      name: 'Olympic Free Weights Bay',
      description: 'High-tensile barbells, bumper plates, cast iron dumbbells up to 40 kg, and dedicated power cages.',
      category: 'equipment',
    },
    {
      name: 'Functional Turf & Combat Rig',
      description: 'Heavy boxing bags, battle ropes, kettlebells, sled turf, and plyometric boxes.',
      category: 'equipment',
    },
    {
      name: 'Secure Member Lockers',
      description: 'Private, ventilated storage for your training gear and essentials.',
      category: 'facility',
    },
    {
      name: 'Continuous RO Hydration Bar',
      description: 'Chilled reverse-osmosis mineral-balanced water cooler available during all open shifts.',
      category: 'facility',
    },
    {
      name: 'Dedicated On-Premise Parking',
      description: 'Hassle-free parking right outside Plot No. 4 at Parshuram Choraha.',
      category: 'facility',
    },
    {
      name: 'Certified Strength Mentors',
      description: 'Experienced resident coaches guiding technique, posture alignment, and goal pacing.',
      category: 'service',
    },
    {
      name: 'Climate-Controlled Floor',
      description: 'High-volume airflow circulation and active cooling for high-intensity training.',
      category: 'facility',
    },
  ],
  programs: [
    {
      id: 'strength',
      number: '01',
      title: 'Biomechanical Strength & Hypertrophy',
      subtitle: 'Structured resistance protocols for bone density, posture, and lean power.',
      description:
        'Engineered for both beginners and experienced lifters. We prioritize joint longevity, progressive overload, and correct motor patterns across free weights and modern machines.',
      benefits: ['Form-first barbell fundamentals', 'Targeted hypertrophy progressions', 'Spinal and scapular postural restoration'],
      focus: 'Muscular Endurance & Structural Strength',
      sessionLength: '55 – 70 min',
      coachToMemberRatio: 'Floor Coaching Always Available',
    },
    {
      id: 'crossfit-combat',
      number: '02',
      title: 'CrossFit & Combat Conditioning',
      subtitle: 'Dynamic boxing bag drills, explosive sled pushes, and metabolic circuits.',
      description:
        'Harness the intensity of combat sports combined with CrossFit methodology. Designed to elevate cardiovascular capacity, reaction speed, and mental grit without monotony.',
      benefits: ['Heavy bag strike drills & footwork', 'High-aerobic functional circuits', 'Agility, balance, and core power'],
      focus: 'Anaerobic Threshold & Functional Agility',
      sessionLength: '45 – 60 min',
      coachToMemberRatio: 'Small Group & Guided',
    },
    {
      id: 'core-45',
      number: '03',
      title: "CORE's Signature 45-45™ Protocol",
      subtitle: 'Our proven 45-day strength, stamina, and endurance conditioning system.',
      description:
        'A comprehensive physical transformation curriculum custom-developed at Core Fitness. 45 curated training sessions paired with baseline testing and progress tracking to breakthrough plateaus.',
      benefits: ['Baseline VO2 and strength assessment', 'Weekly volume calibration', 'Sustainable nutritional guidelines'],
      focus: 'Endurance, Lean Composition & Discipline',
      sessionLength: '45 Days / 45 Sessions',
      coachToMemberRatio: 'Structured Mentorship',
    },
    {
      id: 'personal-coaching',
      number: '04',
      title: '1-on-1 Personal Training & Body Recomp',
      subtitle: 'Dedicated private coaching tailored to specific weight loss or athletic targets.',
      description:
        'Work directly with a certified coach who crafts your individualized training schedule, adjusts loads in real-time, and ensures every repetition counts toward your specific goal.',
      benefits: ['100% customized program design', 'Direct accountability & form analysis', 'Injury prevention & rehab adjustments'],
      focus: 'Rapid, Safe & Sustained Results',
      sessionLength: '60 min',
      coachToMemberRatio: '1 : 1 Dedicated',
    },
    {
      id: 'mobility-wellness',
      number: '05',
      title: 'Functional Mobility, Yoga & Recovery',
      subtitle: 'Joint decompression, myofascial release, and restorative breathwork.',
      description:
        'Balance high-intensity lifting with mobility protocols designed to alleviate stiffness from desk work or heavy training. Enhances movement freedom and systemic recovery.',
      benefits: ['Hip and thoracic mobility flows', 'Active myofascial self-care', 'Calming breath pacing'],
      focus: 'Longevity & Injury Prevention',
      sessionLength: '45 min',
      coachToMemberRatio: 'Interactive Guided',
    },
  ],
  memberships: [
    {
      id: 'quarterly',
      title: '3-Month Foundations',
      duration: 'Quarterly',
      price: '₹5,500',
      description: 'Ideal for establishing consistent training habits, mastering core mechanics, and resetting baseline stamina.',
      features: [
        'Full access to all morning & evening shifts',
        'Orientation & comprehensive equipment walkthrough',
        'Access to strength floor, cardio & functional turf',
        'Reverse-osmosis hydration station included',
        'Secure member locker facility during visits',
      ],
      recommendedFor: 'Those beginning a structured gym routine',
    },
    {
      id: 'semi-annual',
      title: '6-Month Progressive',
      duration: 'Semi-Annual',
      price: '₹9,500',
      badge: 'Most Popular',
      description: 'The golden timeframe to achieve substantial body recomposition, notable strength gains, and conditioned endurance.',
      features: [
        'Unrestricted access across all operational shifts',
        'Complimentary entry to the CORE 45-45™ program curriculum',
        'Bi-weekly body composition & progress review',
        'Combat & CrossFit area access with bag work',
        'Complimentary locker access & parking privilege',
      ],
      recommendedFor: 'Committed members focused on tangible transformation',
    },
    {
      id: 'annual',
      title: '12-Month Mastery',
      duration: 'Annual',
      price: '₹16,000',
      badge: 'Best Value',
      description: 'Year-round lifestyle commitment with dedicated priority coaching consultations and continuous physical progression.',
      features: [
        'Year-round uninterrupted workout access',
        'Personalized program updates every 60 days',
        'Two complimentary 1-on-1 personal training benchmark sessions',
        'Priority locker allocation & partner guest passes (4/year)',
        'Highest per-month savings and membership freeze option (up to 30 days)',
      ],
      recommendedFor: 'Lifelong fitness devotees and disciplined athletes',
    },
  ],
  spaces: [
    {
      id: 'strength-floor',
      title: 'The Biomechanical Strength Hall',
      subtitle: 'Engineered for clean force production',
      description:
        'Spacious, naturally lit training space outfitted with brand-new selectorized stations, plate-loaded leg presses, lat pull machines, and multi-angle adjustable benches designed for natural joint articulation.',
      specifications: ['Brand-new machine fleet', 'High-density acoustic rubber flooring', 'Optimal lighting for posture observation'],
      atmosphere: 'Calm, focused, unhurried, purposeful',
    },
    {
      id: 'free-weights',
      title: 'The Iron & Barbell Bay',
      subtitle: 'Pure progressive resistance',
      description:
        'Rigid steel power cages, calibrated Olympic barbells, urethane-coated plates, and precision dumbbell sets ranging from 2.5 kg to 40 kg, spaced generously to ensure safe lifting clearance.',
      specifications: ['Dedicated deadlift and squat stations', 'Ergonomic dumbbells with knurled grips', 'Chalk-friendly and safety spotter arms'],
      atmosphere: 'Raw capability meets refined order',
    },
    {
      id: 'functional-combat',
      title: 'CrossFit & Combat Arena',
      subtitle: 'Dynamic explosive movement',
      description:
        'High-density turf strip for sled pushes and farmer walks, heavy boxing punch bags, conditioning battle ropes, kettlebells, and plyo platforms for high-intensity hybrid conditioning.',
      specifications: ['Professional heavy bag mounts', '15-meter sprint and sled turf', 'Plyometric boxes and agility hurdles'],
      atmosphere: 'Energetic, rhythmic, empowering',
    },
    {
      id: 'amenities-lounge',
      title: 'Hydration & Member Sanctuary',
      subtitle: 'Restoration before and after training',
      description:
        'Thoughtfully designed with natural materials, chilled RO hydration counter, clean private locker enclosures, and welcoming seating for warm-ups and post-workout cool-downs.',
      specifications: ['Chilled continuous RO mineral water', 'Individual ventilated lockers', 'Clean hygienic washroom facilities'],
      atmosphere: 'Warm, tactile, welcoming, hospitable',
    },
  ],
  reviews: [
    {
      id: 'rev-1',
      author: 'Aakash Rathore',
      rating: 5,
      source: 'Google Review',
      comment:
        'Core Fitness is easily one of the best equipped and most welcoming gyms in Udaipur. Brand new modern machines, great weights section, and the trainers actually pay attention to your form rather than just pushing personal training. The morning shift atmosphere is fantastic.',
      highlight: 'Brand new modern machines and attentive trainers',
      timeframe: 'Recent Member',
    },
    {
      id: 'rev-2',
      author: 'Priya Sharma',
      rating: 5,
      source: 'Google Review',
      comment:
        'Very clean and safe environment for women. I joined for weight loss and functional training. The trainers helped me structure a sustainable routine and I felt comfortable right from day one. Great location at Parshuram Choraha with easy parking.',
      highlight: 'Very clean, safe environment with great location',
      timeframe: 'Member for 6 Months',
    },
    {
      id: 'rev-3',
      author: 'Mohit Menaria',
      rating: 5,
      source: 'Google Review',
      comment:
        'The combat and CrossFit setup with heavy bags and functional turf gives this gym an edge over other commercial gyms in Sector 8. Outstanding equipment quality and genuine fitness culture. Highly recommend the CORE 45-day program.',
      highlight: 'Combat and CrossFit setup with heavy bags and functional turf',
      timeframe: 'Core 45-45 Graduate',
    },
    {
      id: 'rev-4',
      author: 'Devendra Singh',
      rating: 5,
      source: 'FITPASS Verified',
      comment:
        'Well maintained, excellent air circulation, and brand new equipment. The two shift timings (6-12 morning and 3-9 evening) fit perfectly into a working schedule. Very respectful staff and members.',
      highlight: 'Well maintained with perfect split shift timings',
      timeframe: 'Verified Fitpass Member',
    },
  ],
};
