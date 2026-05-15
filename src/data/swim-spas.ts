/**
 * Swim spa series data — drives /swim-spas/[swimspa]/ pages.
 *
 * Mirrors the structure of series.ts so the dynamic templates stay parallel.
 * Same Series type — a swim spa is just another product series with different
 * highlights, FAQs, and model lists.
 */

import type { Series } from './series';
export type { Series, Model, SubSeries, Highlight, FAQ } from './series';

export const swimSpas: Series[] = [
  {
    slug: 'michael-phelps',
    brand: 'Master Spas',
    name: 'Michael Phelps Signature',
    shortName: 'Michael Phelps',
    tagline: "Train, recover, and unwind — designed with the most decorated Olympian in history.",
    description:
      "The Michael Phelps Signature Swim Spas by Master Spas were designed with input from 23-time Olympic gold medalist Michael Phelps. Built for serious swimmers who also want to unwind, with a powerful adjustable swim current paired with full hydrotherapy seats — a pool and a hot tub in one footprint.",
    hero: '/images/series-michael-phelps.jpg',
    cardImage: '/images/series-michael-phelps.jpg',
    pageTitle: 'Michael Phelps Signature Swim Spas | Hot Tub Universe — Bedford NS',
    pageDescription:
      'Master Spas Michael Phelps Signature swim spas at Hot Tub Universe in Bedford. Swim, train, and recover year-round. Delivery and service across Halifax & HRM.',
    highlights: [
      {
        title: 'Adjustable Swim Current',
        description:
          'Variable current strength accommodates beginners through competitive swimmers — train at your pace, any season.',
        icon: 'jets',
      },
      {
        title: 'Michael Phelps Designed',
        description:
          'Input from the most decorated Olympian in history shapes the swim mechanics, ergonomics, and recovery features.',
        icon: 'design',
      },
      {
        title: 'Hydrotherapy Built In',
        description:
          'Dedicated therapy seats with massage jets — recover after a swim or use the spa half independently.',
        icon: 'therapy',
      },
      {
        title: 'Year-Round Atlantic Use',
        description:
          'Full-foam insulation and efficient pumps mean it operates through Halifax winters without surprise energy bills.',
        icon: 'energy',
      },
    ],
    models: [
      {
        slug: 'signature-pro',
        name: 'MP Signature Pro',
        description: 'Velocity Propulsion · 53 jets · Pro-grade swim training',
        longDescription:
          "Changing the way you will swim and relax at home with the MP Signature Pro. Bringing next-level performance to your backyard, the MP Signature Pro has an all-new swim system — perfect for serious athletes and fitness enthusiasts alike. However, a swim spa is about more than just swimming. Combining the benefits of a pool with the therapy of a hot tub, the MP Signature Pro will become your favorite spot to unwind. Ultra-therapeutic massage jets ease stress, tension, and muscle soreness, providing relaxation and rejuvenation for all.",
        image: '/images/model-signature-pro.jpg',
        downShot: '/images/downshot-signature-pro.jpg',
        pdfUrl: '/pdfs/feature-sheet-signature-pro.pdf',
        dimensions: '231" x 94" x 60"',
        dimensionsMetric: '587 cm x 239 cm x 153 cm',
        weightDry: '3,455 lbs (1,568 kg)',
        weightFull: '24,775 lbs (11,238 kg)',
        gallons: '2,445 (9,256 L)',
        power: '240 V / 60 Amp',
        jets: '53 Stainless Steel',
        pumps: '3',
        waterFeatures: '1 Waterfall, 6 Fountains',
        waterCare: 'EcoPur® Charge + UV',
        lighting: 'Waterline',
        features: [
          'SwimNumber System™',
          'Velocity Propulsion System (VSP)',
          'StressRelief Neck & Shoulder Seat',
          'Xtreme Therapy™ Cove',
          'Nonslip Comfort Floor System',
          'H2Xercise™ Fitness System',
          'Mast3rPur™ Water Management System',
          'Deluxe Quad-Fold Cover',
          'Wi-Fi Module',
        ],
      },
      {
        slug: 'momentum-d',
        name: 'MP Momentum Deep',
        description: 'Dual zone — cool swim, warm soak · 45 jets · 230" length',
        longDescription:
          "With the MP Momentum Deep, a dual-zone swim spa, you don't have to choose between a backyard swimming pool and a hot tub. Two sets of temperature controls allow you to exercise in cooler water and retreat into warm water up to 104 degrees. A generous swim area is ideal for stationary swimming, aquatic fitness, and recreation. The innovative propulsion system delivers a smooth, wide current that you can adjust based on your goals. The adjoining hot tub features ergonomic seating and adjustable jets that target your pressure points to promote relaxation and recovery — for your body and mind.",
        image: '/images/model-momentum-d.jpg',
        downShot: '/images/downshot-momentum-d.jpg',
        pdfUrl: '/pdfs/feature-sheet-momentum-d.pdf',
        dimensions: '231" x 94" x 60"',
        dimensionsMetric: '587 cm x 239 cm x 153 cm',
        weightDry: '3,700 lbs (1,679 kg)',
        weightFull: '24,390 lbs (11,064 kg)',
        gallons: '2,325 (8,798 L)',
        power: '240 V — 2× 32 Amp + 1× 16 Amp (dual zone)',
        jets: '45 Stainless Steel',
        pumps: '3',
        waterFeatures: '1 Waterfall, 4 Fountains',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Waterline',
        features: [
          'SwimNumber System™',
          'Wave XP Pro Propulsion™',
          'Master Blaster® Foot Therapy',
          'StressRelief Neck & Shoulder Seat',
          'Xtreme Therapy™ Cove',
          'Nonslip Comfort Floor System',
          'H2Xercise™ Fitness System',
          'Deluxe Quad-Fold Cover',
          'Wi-Fi Module',
        ],
      },
    ],
    faqs: [
      {
        q: 'How is a swim spa different from a hot tub or a pool?',
        a: 'A swim spa is a hybrid — half hot tub, half compact lap pool. A powerful adjustable jet creates a swim current you swim against in place, so the spa stays a manageable size (typically 15-19 feet long). You get year-round swimming, hot tub hydrotherapy, and exercise in one footprint.',
      },
      {
        q: 'Can I actually train seriously in a Michael Phelps swim spa?',
        a: 'Yes. The Michael Phelps Signature line is built specifically for serious swimmers. The adjustable current ranges from beginner-friendly to competitive-level — Olympic and triathlon athletes use them for in-season training.',
      },
      {
        q: 'What\'s the electrical requirement?',
        a: 'Most Michael Phelps swim spas require a dedicated 240V 50-60 amp service installed by a licensed electrician. We can recommend HRM electricians we trust if you need help finding one.',
      },
      {
        q: 'How big is it and will it fit my backyard?',
        a: 'Swim spas are typically 15-19 feet long and 7-8 feet wide. Larger than a hot tub, much smaller than a pool. We do a free site assessment before any purchase to confirm access, electrical, and placement.',
      },
      {
        q: 'How long does delivery and installation take?',
        a: 'For Halifax-area customers, install is typically a one-day job once your pad and electrical are ready. Crane delivery is sometimes needed depending on backyard access — we handle the coordination.',
      },
      {
        q: 'Will it really work through a Halifax winter?',
        a: 'Yes — Michael Phelps swim spas are built for year-round operation including cold climates. Many of our HRM customers swim through winter and consider it the best months for use.',
      },
    ],
  },
  {
    slug: 'h2x',
    brand: 'Master Spas',
    name: 'H2X Swim Spas',
    shortName: 'H2X',
    tagline: "Powerful jetted swim current for serious swimmers — pool, hot tub, fitness tool in one.",
    description:
      "The H2X line pairs a high-performance jetted swim current with hydrotherapy seats. Built for swimmers who also want to recover and unwind, in a footprint that fits backyards where a pool can't. Same place, same water, year-round use.",
    hero: '/images/series-h2x.jpg',
    cardImage: '/images/series-h2x.jpg',
    pageTitle: 'H2X Swim Spas | Hot Tub Universe — Bedford NS',
    pageDescription:
      'Master Spas H2X swim spas at Hot Tub Universe in Bedford. Powerful jetted swim current plus hydrotherapy seats. Delivery and service across Halifax & HRM.',
    highlights: [
      {
        title: 'High-Performance Swim Jets',
        description:
          'A strong jetted current built for serious training and continuous swimming — adjustable for any skill level.',
        icon: 'jets',
      },
      {
        title: 'Therapy Seats Included',
        description:
          'Dedicated hydrotherapy seats next to the swim lane — recover after exercise or soak independently.',
        icon: 'therapy',
      },
      {
        title: 'Compact, Backyard-Friendly Footprint',
        description:
          'Fits in HRM backyards where a traditional pool can\'t — and unlike a pool, you can use it year-round.',
        icon: 'design',
      },
      {
        title: 'Energy-Efficient Build',
        description:
          'Full-foam insulation and quality pumps keep operating costs predictable through Atlantic winters.',
        icon: 'energy',
      },
    ],
    subSeries: [
      {
        slug: 'challenger',
        name: 'H2X Challenger',
        description: 'The flagship H2X line. Six airless VIP jets create a smooth, wide current ideal for swimmers of all levels, with programmable AquaSpeed VSP™ controls that let you fine-tune pace for endurance, intervals, or recovery.',
        bestFor: 'Athletes and fitness enthusiasts',
        models: [
          {
            slug: 'challenger-21-d',
            name: 'Challenger 21D',
            description: '21-foot dual zone · Sun lounge · 53 jets · Flagship Challenger',
            longDescription:
              "Redefine backyard living with the H2X Challenger 21D. This dual-zone swim spa design provides an expansive swim area, a separate hot tub section, and an integrated sun lounge. Offering the benefits of a pool with the therapy of a hot tub, this 21-foot swim spa is the perfect spot for swimming in place, water exercise, recreation, and relaxation. Personalize your sessions with independent temperature controls, adjustable jets, and LED lighting.",
            image: '/images/model-challenger-21-d.jpg',
            pdfUrl: '/pdfs/feature-sheet-challenger-21-d.pdf',
            dimensions: '257" x 94" x 60"',
            dimensionsMetric: '653 cm x 239 cm x 153 cm',
            weightDry: '3,735 lbs (1,695 kg)',
            weightFull: '20,850 lbs (9,458 kg)',
            gallons: '1,830 (6,928 L)',
            power: '240 V / 100 Amp',
            propulsion: 'Airless VIP Technology',
            jets: '53 Stainless Steel (incl. 6 Airless VIP Jets and 2 Master Blasters®)',
            pumps: '5',
            waterFeatures: '8',
            waterCare: 'EcoPur® Charge filtration + Standard Ozone',
            lighting: 'Waterline',
          },
          {
            slug: 'challenger-19-d-max',
            name: 'Challenger 19D MAX',
            description: '19-foot · Largest swim area in the H2X lineup · 47 jets',
            longDescription:
              "Get more with the H2X Challenger 19D MAX. With the largest swim area of any H2X swim spa, this 19-foot model is perfect for swimming in place, water exercise, or an afternoon of relaxation. The variable speed current meets you at your fitness level, whether you want a challenging workout or recovery session. After a workout, enjoy the relaxation and rejuvenation of the contoured hot tub seats with built-in massage jets and the Xtreme Therapy Cove.",
            image: '/images/model-challenger-19-d-max.jpg',
            pdfUrl: '/pdfs/feature-sheet-challenger-19-d-max.pdf',
            dimensions: '231" x 94" x 60"',
            dimensionsMetric: '587 cm x 239 cm x 153 cm',
            weightDry: '3,335 lbs (1,513 kg)',
            weightFull: '24,230 lbs (10,991 kg)',
            gallons: '2,350 (8,896 L)',
            power: '240 V / 50 Amp',
            propulsion: 'Airless VIP Technology',
            jets: '47 Stainless Steel (incl. 6 Airless VIP Jets)',
            pumps: '3',
            waterFeatures: '5',
            waterCare: 'EcoPur® Charge filtration + Standard Ozone',
            lighting: 'Waterline',
          },
          {
            slug: 'challenger-15-d',
            name: 'Challenger 15D',
            description: '15-foot compact · 47 jets · Airless VIP swim system',
            longDescription:
              "Train, recover, and relax in the comfort of your backyard with the H2X Challenger 15D. With an obstacle-free swim area, you can swim, exercise, and enjoy quality time with your family. Updated for 2025, the airless swim current delivers a superior swim experience that you can adjust based on your goals and fitness level. Seamlessly combining the benefits of a pool with a hot tub, this 15-foot swim spa features strategically placed massage jets that can be adjusted for your needs.",
            image: '/images/model-challenger-15-d.jpg',
            pdfUrl: '/pdfs/feature-sheet-challenger-15-d.pdf',
            dimensions: '180" x 94" x 60"',
            dimensionsMetric: '458 cm x 239 cm x 153 cm',
            weightDry: '2,520 lbs (1,144 kg)',
            weightFull: '17,120 lbs (7,766 kg)',
            gallons: '1,595 (6,038 L)',
            power: '240 V / 50 Amp',
            propulsion: 'Airless VIP Technology',
            jets: '47 Stainless Steel (incl. 6 Airless VIP Jets)',
            pumps: '3',
            waterFeatures: '5',
            waterCare: 'EcoPur® Charge filtration + Standard Ozone',
            lighting: 'Waterline',
          },
        ],
      },
      {
        slug: 'trainer',
        name: 'H2X Trainer',
        description: 'High-performance air-injected VIP jets with adjustable swim current. Hydrotherapy and relaxation are built in, with the Xtreme Therapy Cove, massaging jets, and adjustable temperature.',
        bestFor: 'Fitness enthusiasts and therapy seekers',
        models: [
          {
            slug: 'trainer-21-deep',
            name: 'Trainer 21 Deep',
            description: 'Specs and pricing available on request.',
          },
          {
            slug: 'trainer-21',
            name: 'Trainer 21',
            description: 'Specs and pricing available on request.',
          },
          {
            slug: 'trainer-19-deep-max',
            name: 'Trainer 19 Deep MAX',
            description: 'Specs and pricing available on request.',
          },
          {
            slug: 'trainer-15-deep',
            name: 'Trainer 15 Deep',
            description: 'Specs and pricing available on request.',
          },
          {
            slug: 'trainer-15',
            name: 'Trainer 15',
            description: 'Specs and pricing available on request.',
          },
          {
            slug: 'trainer-12',
            name: 'Trainer 12',
            description: 'Specs and pricing available on request.',
          },
        ],
      },
      {
        slug: 'therapool',
        name: 'H2X Therapool',
        description: 'Fitness-oriented with air-injected flow stream jets and dual-speed control. Up to three flow stream jets complement the natural resistance of water — ideal for small spaces and aqua therapy. Heated up to a soothing 99 degrees.',
        bestFor: 'Small spaces and aqua therapy seekers',
        models: [
          {
            slug: 'therapool-15',
            name: 'Therapool 15',
            description: 'Specs and pricing available on request.',
          },
          {
            slug: 'therapool-13',
            name: 'Therapool 13',
            description: 'Specs and pricing available on request.',
          },
          {
            slug: 'therapool-d',
            name: 'Therapool D',
            description: 'Specs and pricing available on request.',
          },
          {
            slug: 'therapool-se',
            name: 'Therapool SE',
            description: 'Specs and pricing available on request.',
          },
        ],
      },
    ],
    comparison: [
      { label: 'Best for',         values: ['Athletes, fitness',     'Fitness + therapy',         'Small spaces, aqua therapy'] },
      { label: 'Swim system',      values: ['6 Airless VIP Jets',    '4 Air-Injected VIP Jets',   '2–3 Flow Stream Jets'] },
      { label: 'Speed control',    values: ['Programmable (AquaSpeed VSP)', 'Adjustable',         'Dual speed'] },
      { label: 'Pumps',            values: ['3–5',                   '2–4',                       '2'] },
      { label: 'Both swim & hot tub', values: ['Yes',                'Yes',                       '—'] },
      { label: 'Sun Lounger',      values: ['Yes',                   'Yes (select models)',       '—'] },
      { label: 'Xtreme Therapy Cove', values: ['Yes',                'Yes',                       '—'] },
      { label: 'Tier',             values: ['Premium',               'Mid',                       'Entry'] },
    ],
    faqs: [
      {
        q: 'How is the H2X different from the Michael Phelps line?',
        a: 'Both are Master Spas swim spas with similar fundamentals. The Michael Phelps Signature line carries the Phelps brand and design input — typically positioned slightly higher. H2X is the workhorse competitor — same year-round, serious-swimmer focus, often at a more accessible price point. We carry both so you can compare side-by-side at the showroom.',
      },
      {
        q: 'Is the swim current strong enough for daily training?',
        a: 'Yes. H2X swim spas are built for serious swimmers. The jetted current is adjustable across the range from beginner-friendly to advanced training intensity.',
      },
      {
        q: 'What\'s the maintenance like compared to a pool?',
        a: 'Much simpler. Swim spas hold a fraction of the water a pool does, so chemistry is easier and cheaper to maintain. No annual opening and closing. No winter cover wrestling. We walk you through water care at handover.',
      },
      {
        q: 'How long does install take?',
        a: 'Typically a one-day install for HRM-area customers once your pad and electrical are ready. We coordinate delivery, crane (if needed), and electrical sign-off.',
      },
      {
        q: 'Will it hold up to Halifax winters?',
        a: 'Yes — H2X swim spas are designed for year-round cold-climate use. Many of our customers in HRM swim through every winter and report it\'s the best season for use.',
      },
    ],
  },
];

export function getSwimSpa(slug: string): Series | undefined {
  return swimSpas.find((s) => s.slug === slug);
}

export function getOtherSwimSpas(slug: string): Series[] {
  return swimSpas.filter((s) => s.slug !== slug);
}
