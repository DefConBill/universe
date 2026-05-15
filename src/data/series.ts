/**
 * Hot tub series data — drives /hot-tubs/[series]/ pages.
 *
 * Add a new series by appending a new object to this array.
 * Mark prose copy clearly as [PLACEHOLDER] while it's not finalized so we can
 * grep for it later.
 */

export type Model = {
  slug: string;
  name: string;

  // Display copy
  description?: string;       // brief one-liner — shown on series page card
  longDescription?: string;   // marketing paragraph — shown on model detail page hero

  // Assets
  image?: string;             // hero photo path under /public, e.g. /images/model-lsx-700.jpg
  pdfUrl?: string;            // feature sheet path, e.g. /pdfs/feature-sheet-lsx-700.pdf

  // Specs (all optional — fill in what's available per model)
  seating?: string;           // freeform — e.g. "Seats 5" or "Seats 5–6"
  seatingCapacity?: number;   // numeric — used in Product schema
  dimensions?: string;        // imperial — '84" x 84" x 38"'
  dimensionsMetric?: string;  // metric — '214 cm x 214 cm x 97 cm'
  weightDry?: string;         // '1,095 lbs (497 kg)'
  weightFull?: string;        // '4,565 lbs (2,071 kg)'
  gallons?: string;           // '305 (1,155 L)'
  power?: string;             // '240 V / 50 Amp'
  jets?: string;              // '62 Stainless Steel'
  pumps?: string;             // '3'
  waterFeatures?: string;
  waterCare?: string;         // 'EcoPur® Charge + Ozone'
  lighting?: string;          // 'Orion Light System™'

  // Exclusive features list
  features?: string[];
};

export type SubSeries = {
  slug: string;            // e.g. 'challenger', 'trainer', 'therapool'
  name: string;            // displayed heading, e.g. 'H2X Challenger'
  description?: string;    // optional intro paragraph
  models: Model[];
};

export type Highlight = {
  title: string;
  description: string;
  icon: 'jets' | 'therapy' | 'design' | 'energy' | 'warranty' | 'water';
};

export type FAQ = {
  q: string;
  a: string;
};

export type Series = {
  slug: string;            // URL slug, e.g. 'legend-series'
  brand: string;           // displayed brand chip — 'Master Spas', 'Clarity', 'Getaway'
  name: string;            // 'Legend Series'
  shortName: string;       // 'Legend' — used in headings, breadcrumbs
  tagline: string;         // one-line subhead
  description: string;     // 2-3 sentence pitch
  hero: string;            // hero photo path under /public
  cardImage: string;       // image for cross-sell cards on other series pages
  pageTitle: string;       // <title>
  pageDescription: string; // meta description
  highlights: Highlight[];
  /**
   * A series can hold its models flat OR group them into sub-series.
   * Use `models` for a flat list (most series).
   * Use `subSeries` for nested groupings (e.g. H2X → Challenger / Trainer / Therapool).
   * One should be populated; the page template handles either.
   */
  models?: Model[];
  subSeries?: SubSeries[];
  faqs: FAQ[];
};

export const series: Series[] = [
  {
    slug: 'legend-series',
    brand: 'Master Spas',
    name: 'Legend Series',
    shortName: 'Legend',
    tagline: "Master Spas' premium therapeutic line, designed with Michael Phelps.",
    description:
      "Designed in collaboration with 23-time Olympic gold medalist Michael Phelps, the Legend Series brings world-class hydrotherapy into your backyard. Deep ergonomic seating, the most powerful jet configurations Master Spas builds, and the construction quality of a tub designed for elite recovery.",
    hero: '/images/series-legend.jpg',
    cardImage: '/images/series-legend.jpg',
    pageTitle: 'Master Spas Legend Series Hot Tubs | Hot Tub Universe — Bedford NS',
    pageDescription:
      'Master Spas Legend Series hot tubs at Hot Tub Universe in Bedford. Premium hydrotherapy designed with Michael Phelps. Delivery and service across Halifax & HRM.',
    highlights: [
      {
        title: 'Signature Hydrotherapy',
        description:
          'Powerful jet configurations engineered for muscle recovery and deep therapeutic relief.',
        icon: 'jets',
      },
      {
        title: 'Michael Phelps Designed',
        description:
          'Collaboration with the most decorated Olympian in history brings elite recovery science home.',
        icon: 'design',
      },
      {
        title: 'Built for Atlantic Winters',
        description:
          'Full-foam insulation and the Master Spas Eco-Pur filtration system keep operating costs low year-round.',
        icon: 'energy',
      },
      {
        title: 'Industry-Leading Warranty',
        description:
          'Master Spas backs every Legend with a comprehensive warranty. We handle service locally so you never deal with the manufacturer.',
        icon: 'warranty',
      },
    ],
    models: [
      {
        slug: 'lsx-700',
        name: 'LSX 700',
        description: 'Seats 5 · 62 jets · Exclusive StressRelief therapy seat',
        longDescription:
          "Experience effortless refinement with a hot tub designed with your well-being in mind. From the exclusive StressRelief Neck and Shoulder Seat™ to the soothing foot therapy feature, the LSX 700 is crafted down to the smallest detail for ultimate relaxation and lasting comfort. With 62 powerful, precisely placed jets, every seat delivers the perfect balance of luxury and performance.",
        image: '/images/model-lsx-700.jpg',
        pdfUrl: '/pdfs/feature-sheet-lsx-700.pdf',
        seating: 'Seats 5',
        seatingCapacity: 5,
        dimensions: '84" x 84" x 38"',
        dimensionsMetric: '214 cm x 214 cm x 97 cm',
        weightDry: '1,095 lbs (497 kg)',
        weightFull: '4,565 lbs (2,071 kg)',
        gallons: '305 (1,155 L)',
        power: '240 V / 50 Amp',
        jets: '62 Stainless Steel',
        pumps: '3',
        waterFeatures: '3',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Orion Light System™',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Blaster® Foot Massage Therapy',
          'Master Force™ Bio-Magnetic Therapy System',
          'Vac-Formed ABS Pan Bottom',
          'WiFi Module',
          'Secondary Remote',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'lsx-800',
        name: 'LSX 800',
        description: 'Seats 6 · 70 jets · StressRelief therapy seat and full-body lounge',
        longDescription:
          "Blending spacious comfort with unrivaled performance, the LSX 800 redefines relaxation at home. Thoughtfully designed for up to six adults, it features the exclusive StressRelief Neck and Shoulder Seat, a full-body lounge, and Master Blaster Foot Therapy for comprehensive hydrotherapy. With 70 precisely placed jets and elegant styling throughout, the LSX 800 delivers a level of power, comfort, and refinement that sets it apart.",
        image: '/images/model-lsx-800.jpg',
        pdfUrl: '/pdfs/feature-sheet-lsx-800.pdf',
        seating: 'Seats 6',
        seatingCapacity: 6,
        dimensions: '94" x 94" x 38"',
        dimensionsMetric: '239 cm x 239 cm x 97 cm',
        weightDry: '1,330 lbs (604 kg)',
        weightFull: '5,860 lbs (2,659 kg)',
        gallons: '410 (1,553 L)',
        power: '240 V / 50 Amp',
        jets: '70 Stainless Steel',
        pumps: '3',
        waterFeatures: '3',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Orion Light System™',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Blaster® Foot Massage Therapy',
          'Master Force™ Bio-Magnetic Therapy System',
          'Vac-Formed ABS Pan Bottom',
          'WiFi Module',
          'Secondary Remote',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'lsx-850',
        name: 'LSX 850',
        description: 'Seats 7 · 59 jets · Open seating, premium therapy',
        longDescription:
          "The LSX 850 combines the luxury of the Legend Series with the freedom of open seating. Designed to accommodate up to seven adults, this model features premium therapy seats and 59 intentionally placed jets for a personalized hydrotherapy experience. With elegant styling and space for effortless connection, the LSX 850 delivers relaxation and performance at the highest level.",
        image: '/images/model-lsx-850.jpg',
        pdfUrl: '/pdfs/feature-sheet-lsx-850.pdf',
        seating: 'Seats 7',
        seatingCapacity: 7,
        dimensions: '94" x 94" x 38"',
        dimensionsMetric: '239 cm x 239 cm x 97 cm',
        weightDry: '1,170 lbs (531 kg)',
        weightFull: '5,760 lbs (2,613 kg)',
        gallons: '395 (1,496 L)',
        power: '240 V / 50 Amp',
        jets: '59 Stainless Steel',
        pumps: '3',
        waterFeatures: '3',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Orion Light System™',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Blaster® Foot Massage Therapy',
          'Master Force™ Bio-Magnetic Therapy System',
          'Vac-Formed ABS Pan Bottom',
          'WiFi Module',
          'Secondary Remote',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'lsx-900',
        name: 'LSX 900',
        description: 'Seats 8 · 72 jets · The flagship — maximum comfort',
        longDescription:
          "The LSX 900 is a statement in luxury and design, offering spacious comfort and seating for up to eight adults. With 72 powerful jets, premium therapy seats, and elegant styling throughout, this model is crafted for those who want the very best in relaxation and performance.",
        image: '/images/model-lsx-900.jpg',
        pdfUrl: '/pdfs/feature-sheet-lsx-900.pdf',
        seating: 'Seats 8',
        seatingCapacity: 8,
        dimensions: '108" x 94" x 38"',
        dimensionsMetric: '275 cm x 239 cm x 97 cm',
        weightDry: '1,485 lbs (674 kg)',
        weightFull: '7,055 lbs (3,201 kg)',
        gallons: '490 (1,855 L)',
        power: '240 V / 50 Amp',
        jets: '72 Stainless Steel',
        pumps: '3',
        waterFeatures: '3',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Orion Light System™',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Blaster® Foot Massage Therapy',
          'Master Force™ Bio-Magnetic Therapy System',
          'Vac-Formed ABS Pan Bottom',
          'WiFi Module',
          'Secondary Remote',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'lsx-30',
        name: 'LSX 30',
        description: 'Seats 5 · 63 jets · 30th-anniversary Xtreme Therapy seat',
        longDescription:
          "The LSX 30 celebrates three decades of innovation and craftsmanship. Reintroducing the whirlpool-style therapy seat, this model combines the nostalgia of a classic with the precision of modern technology. A variable-speed motor allows you to personalize your massage experience — from gentle relaxation to deep-tissue relief — and even create custom programs tailored to your needs. With a full-size lounge and premium features, this spa delivers the ultimate in comfort, recovery, and performance.",
        image: '/images/model-lsx-30.jpg',
        pdfUrl: '/pdfs/feature-sheet-lsx-30.pdf',
        seating: 'Seats 5',
        seatingCapacity: 5,
        dimensions: '94" x 94" x 38"',
        dimensionsMetric: '239 cm x 239 cm x 97 cm',
        weightDry: '1,128 lbs (512 kg)',
        weightFull: '4,930 lbs (2,237 kg)',
        gallons: '345 (1,306 L)',
        power: '240 V / 60 Amp',
        jets: '63 Stainless Steel',
        pumps: '3',
        waterFeatures: '3',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Orion Light System™',
        features: [
          'Xtreme Therapy™ Seat',
          'StressRelief Neck and Shoulder Seat™',
          'Master Blaster® Foot Massage Therapy',
          'Master Force™ Bio-Magnetic Therapy System',
          'Variable Speed Pump',
          'Vac-Formed ABS Pan Bottom',
          'WiFi Module',
          'Secondary Remote',
          'Nonslip Comfort Mat',
          'Deluxe Tapered Cover',
        ],
      },
    ],
    faqs: [
      {
        q: 'How much does a Legend Series hot tub cost?',
        a: 'Pricing varies by model and configuration. Most Legend Series tubs fall in the premium range. Visit the Bedford showroom or request a quote and we\'ll walk you through your options based on your space and needs.',
      },
      {
        q: 'How many people does a Legend Series hot tub seat?',
        a: 'Depending on the model, Legend Series tubs seat between 5 and 8 people. The LSX 850 is our largest at 8 seats; the LSX 560 is a more compact 5-6 seater.',
      },
      {
        q: 'What are the electrical requirements?',
        a: 'Legend Series tubs require a dedicated 240V 50-60 amp service installed by a licensed electrician. We can recommend HRM electricians we trust if you need help finding one.',
      },
      {
        q: 'How long does delivery and installation take?',
        a: 'For Halifax-area customers, our delivery and install crew typically completes the job in one day once your pad and electrical are ready. We coordinate the entire process.',
      },
      {
        q: 'Do you service Legend Series hot tubs in Halifax?',
        a: 'Yes. Our local technicians service every Master Spas tub we sell — and we can service tubs you bought elsewhere too. Service typically takes 2–4 days from your call.',
      },
    ],
  },
  {
    slug: 'twilight-series',
    brand: 'Master Spas',
    name: 'Twilight Series',
    shortName: 'Twilight',
    tagline: 'Where every soak feels like a getaway.',
    description:
      "The Twilight Series offers a curated balance of luxury and approachability — refined design, exclusive features, and a quietly powerful hydrotherapy experience tuned for everyday relaxation rather than aggressive therapy.",
    hero: '/images/series-twilight.jpg',
    cardImage: '/images/series-twilight.jpg',
    pageTitle: 'Master Spas Twilight Series Hot Tubs | Hot Tub Universe — Bedford NS',
    pageDescription:
      'Master Spas Twilight Series hot tubs at Hot Tub Universe in Bedford. Luxury everyday spas with refined design and hydrotherapy. Delivery and service across Halifax & HRM.',
    highlights: [
      {
        title: 'Refined Everyday Hydrotherapy',
        description: 'Tuned for daily soaks — relaxing, restorative, never overwhelming.',
        icon: 'therapy',
      },
      {
        title: 'Exclusive Design Touches',
        description: 'Premium cabinetry, ambient lighting, and ergonomic seating that fit any backyard.',
        icon: 'design',
      },
      {
        title: 'Quiet, Efficient Operation',
        description: 'Full-foam insulation and energy-efficient pumps keep monthly running costs predictable.',
        icon: 'energy',
      },
      {
        title: 'Master Spas Quality',
        description: 'Same construction standards as the Legend line, in a more approachable package.',
        icon: 'warranty',
      },
    ],
    models: [
      {
        slug: 'ts-8-25',
        name: 'TS 8.25',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'ts-8-2',
        name: 'TS 8.2',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'ts-7-25',
        name: 'TS 7.25',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'ts-7-2',
        name: 'TS 7.2',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'ts-67-25',
        name: 'TS 67.25',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'ts-6-2',
        name: 'TS 6.2',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'ts-240x',
        name: 'TS 240X',
        description: 'Specs and pricing available on request.',
      },
    ],
    faqs: [
      {
        q: 'How is the Twilight Series different from the Legend Series?',
        a: 'Legend is the premium therapy-focused line — designed with Michael Phelps for elite recovery. Twilight is more about relaxed everyday luxury — same Master Spas build quality, tuned for unwinding rather than intensive therapy.',
      },
      {
        q: 'Will a Twilight tub fit in a typical Halifax backyard?',
        a: 'Yes. Both Twilight models we carry fit in most backyards with room to spare. We do a free site assessment to confirm access, electrical, and placement before any purchase.',
      },
      {
        q: 'What\'s the warranty?',
        a: 'Master Spas offers a comprehensive multi-year warranty on Twilight Series tubs. We handle all warranty work locally — call us, not the manufacturer.',
      },
      {
        q: 'How long until I can soak after install?',
        a: 'Typically the same day. Fill, prime, balance the water chemistry, and you\'re in. Our install crew walks you through everything.',
      },
    ],
  },
  {
    slug: 'clarity-series',
    brand: 'Clarity',
    name: 'Clarity Series',
    shortName: 'Clarity',
    tagline: 'Rejuvenation, comfort, and wellness — on a different level.',
    description:
      "Clarity Spas offer a way to enjoy rejuvenation, comfort and wellness on a whole different level. Built for thoughtful daily use, with clean lines, intuitive controls, and quiet operation that fits naturally into your home.",
    hero: '/images/series-clarity.jpg',
    cardImage: '/images/series-clarity.jpg',
    pageTitle: 'Clarity Spas Hot Tubs | Hot Tub Universe — Bedford NS',
    pageDescription:
      'Clarity Series hot tubs at Hot Tub Universe in Bedford. Rejuvenation, comfort and wellness, on a different level. Delivery and service across Halifax & HRM.',
    highlights: [
      {
        title: 'Built for Wellness',
        description: 'Designed around comfort, calm, and the simple ritual of getting in every day.',
        icon: 'therapy',
      },
      {
        title: 'Quiet, Efficient Operation',
        description: 'Premium insulation and pump systems keep both noise and running costs low.',
        icon: 'energy',
      },
      {
        title: 'Intuitive Controls',
        description: 'Clean, modern interface — no menu-diving for the things you use every day.',
        icon: 'design',
      },
      {
        title: 'Quality That Lasts',
        description: 'Solid build, dependable performance, supported by our local service team.',
        icon: 'warranty',
      },
    ],
    models: [
      {
        slug: 'balance-9',
        name: 'Balance 9',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'balance-8',
        name: 'Balance 8',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'precision-8',
        name: 'Precision 8',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'balance-7',
        name: 'Balance 7',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'precision-7',
        name: 'Precision 7',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'balance-6',
        name: 'Balance 6',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'balance-6-cs',
        name: 'Balance 6 CS',
        description: 'Specs and pricing available on request.',
      },
    ],
    faqs: [
      {
        q: 'How does Clarity compare to Master Spas?',
        a: 'Clarity is a different brand we carry alongside Master Spas. Clarity tubs prioritize a cleaner, more minimal everyday spa experience. We\'ll walk you through both at the showroom so you can decide what fits.',
      },
      {
        q: 'Is the Clarity Series energy-efficient?',
        a: 'Yes. All Clarity tubs we sell are built with quality insulation and energy-conscious pump systems — important for Halifax winters when efficiency really matters.',
      },
      {
        q: 'Do you service Clarity Spas locally?',
        a: 'Yes. Our technicians service every tub we sell, including the Clarity line. Service typically takes 2–4 days from your call.',
      },
    ],
  },
  {
    slug: 'lh-series',
    brand: 'Master Spas',
    name: 'LH Series',
    shortName: 'LH',
    tagline: 'Purposeful relief. Enhanced wellness.',
    description:
      "Slip into a world of benefits that will help to improve your quality of life through purposeful relief and enhanced wellness. The LH series focuses on the therapeutic essentials — accessible pricing, dependable performance, and hydrotherapy that matters.",
    hero: '/images/series-lh.jpg',
    cardImage: '/images/series-lh.jpg',
    pageTitle: 'LH Series Hot Tubs | Hot Tub Universe — Bedford NS',
    pageDescription:
      'LH Series hot tubs at Hot Tub Universe in Bedford. Purposeful relief and enhanced wellness at an accessible price. Delivery and service across Halifax & HRM.',
    highlights: [
      {
        title: 'Focused Hydrotherapy',
        description: 'The essential therapy jets and seating without the premium upcharge.',
        icon: 'therapy',
      },
      {
        title: 'Approachable Pricing',
        description: 'The most accessible Master Spas tier — same trusted build, friendlier number.',
        icon: 'design',
      },
      {
        title: 'Low Operating Cost',
        description: 'Efficient pumps and full-foam insulation keep your monthly costs in check.',
        icon: 'energy',
      },
      {
        title: 'Local Service Included',
        description: 'Our HRM-based technicians handle every install and every service call.',
        icon: 'warranty',
      },
    ],
    models: [
      {
        slug: 'l7',
        name: 'L7',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 's7',
        name: 'S7',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'l6',
        name: 'L6',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 's6',
        name: 'S6',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'l5',
        name: 'L5',
        description: 'Specs and pricing available on request.',
      },
    ],
    faqs: [
      {
        q: 'How is the LH Series different from the Twilight or Legend lines?',
        a: 'LH is Master Spas\' more accessible tier — focused on the core hydrotherapy experience without the premium luxury features of Twilight or the therapy-elite jets of Legend. Great choice for couples and small families.',
      },
      {
        q: 'How much does an LH Series tub cost?',
        a: 'LH is our most affordable Master Spas line. Pricing varies by model and options — request a quote or visit the showroom for a precise number based on your space.',
      },
      {
        q: 'Is it harder to find service for the lower-tier line?',
        a: 'Not at all. We service every Master Spas tub we sell — Legend, Twilight, Clarity, LH — with the same local team and the same response time (typically 2-4 days).',
      },
    ],
  },
  {
    slug: 'getaway-hot-tubs',
    brand: 'Getaway',
    name: 'Getaway Hot Tubs',
    shortName: 'Getaway',
    tagline: 'Affordable, plug-and-play hot tubs for first-time owners.',
    description:
      "Five affordable models that bring all the joy of hot tub ownership without the premium price tag. Plug-and-play friendly, perfect for first-time owners, smaller backyards, or anyone who just wants to enjoy the soak.",
    hero: '/images/series-getaway.jpg',
    cardImage: '/images/series-getaway.jpg',
    pageTitle: 'Getaway Hot Tubs | Hot Tub Universe — Bedford NS',
    pageDescription:
      'Affordable plug-and-play Getaway hot tubs at Hot Tub Universe in Bedford. Five models, perfect for first-time owners or smaller backyards. Halifax delivery and service.',
    highlights: [
      {
        title: 'Plug-and-Play Ready',
        description: 'Some Getaway models run on a standard 110V outlet — no electrician required.',
        icon: 'energy',
      },
      {
        title: 'Affordable Entry Point',
        description: 'The most accessible way into hot tub ownership without sacrificing quality.',
        icon: 'design',
      },
      {
        title: 'Compact-Friendly Footprints',
        description: 'Sized for townhouses, decks, and smaller backyards across HRM.',
        icon: 'water',
      },
      {
        title: 'Same Local Service',
        description: 'Backed by the same HRM-based service team as the rest of our lineup.',
        icon: 'warranty',
      },
    ],
    models: [
      {
        slug: 'bar-harbor-le',
        name: 'Bar Harbor LE',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'bar-harbor-se',
        name: 'Bar Harbor SE',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'ocho-rios-se',
        name: 'Ocho Rios SE',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'ocho-rios-cs',
        name: 'Ocho Rios CS',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'san-miguel',
        name: 'San Miguel',
        description: 'Specs and pricing available on request.',
      },
    ],
    faqs: [
      {
        q: 'Can I really plug a Getaway into a regular outlet?',
        a: 'Some Getaway models — yes. They run on standard 110V household power, which makes them perfect for renters, condos, or anyone who wants to skip the electrician. Larger Getaway models still need a 240V dedicated circuit.',
      },
      {
        q: 'How does Getaway compare to Master Spas?',
        a: 'Getaway is a more affordable line focused on ease and accessibility. Master Spas tubs are more premium with stronger jets, better insulation, and higher-end finishes. Both are great — different price points, different priorities.',
      },
      {
        q: 'Will it really hold up to a Halifax winter?',
        a: 'Yes — Getaway tubs are built for year-round use including cold climates. We\'ve installed Getaways across HRM that have been running through every winter since.',
      },
      {
        q: 'Do you deliver and install Getaways too?',
        a: 'Same delivery and install service as every other tub we sell. One-day install in most HRM addresses.',
      },
    ],
  },
];

export function getSeries(slug: string): Series | undefined {
  return series.find((s) => s.slug === slug);
}

export function getOtherSeries(slug: string): Series[] {
  return series.filter((s) => s.slug !== slug);
}
