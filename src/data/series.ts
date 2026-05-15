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
  downShot?: string;          // top-down interior layout image, e.g. /images/downshot-lsx-700.jpg
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
  propulsion?: string;        // swim spa only — e.g. 'Airless VIP Technology'
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
  bestFor?: string;        // short positioning line (e.g. "Athletes and fitness enthusiasts")
  models: Model[];
};

export type ComparisonRow = {
  label: string;
  values: string[];        // one value per sub-series, in the same order as Series.subSeries
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
  /**
   * Optional comparison table for sub-series. When present and the page has
   * subSeries, the template renders a comparison grid below the sub-series cards.
   */
  comparison?: ComparisonRow[];
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
        downShot: '/images/downshot-lsx-700.jpg',
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
          "The LSX 900 is a statement in luxury and design — the flagship of the Legend Series. Spacious open seating accommodates up to eight adults, with 72 stainless-steel jets and premium therapy seats delivering hydrotherapy that earns its name. From the exclusive StressRelief Neck and Shoulder Seat to the Master Blaster Foot Therapy, this is the soak you remember the next day.",
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
        description: 'Seats 7 · 43 jets · Adjustable pillows and ambient LED lighting',
        longDescription:
          "Where comfort meets quality. The TS 8.25 gives you the space you seek for relaxation and well-being. This seven-person hot tub features premium hydrotherapy jets, adjustable pillows, and ambient LED lighting. With a stress-less water care system and all-weather cabinet with built-in lighting, owning and caring for your hot tub is simple.",
        image: '/images/model-ts-8-25.jpg',
        pdfUrl: '/pdfs/feature-sheet-ts-8-25.pdf',
        seating: 'Seats 7',
        seatingCapacity: 7,
        dimensions: '94" x 94" x 38"',
        dimensionsMetric: '239 cm x 239 cm x 97 cm',
        weightDry: '1,100 lbs (499 kg)',
        weightFull: '5,690 lbs (2,581 kg)',
        gallons: '395 (1,496 L)',
        power: '240 V / 50 Amp',
        jets: '43 Stainless Steel',
        pumps: '2',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Orion Light System™',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Blaster® Foot Massage Therapy',
          'Master Force™ Bio-Magnetic Therapy System',
          'WiFi Module',
          'Nonslip Comfort Mat',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'ts-8-2',
        name: 'TS 8.2',
        description: 'Seats 6 · 46 jets · Full-size lounge and StressRelief therapy seat',
        longDescription:
          "Experience head-to-toe relaxation with the TS 8.2. Roomy enough for six adults, this hot tub features thoughtful jet arrangements — including a full-size lounge and StressRelief Neck and Shoulder Seat. Premium water filtration, topside controls, and built-in Wi-Fi offer a stress-less ownership experience. 46 stainless jets and the Master Blaster Foot Therapy round out a spa built for daily use.",
        image: '/images/model-ts-8-2.jpg',
        pdfUrl: '/pdfs/feature-sheet-ts-8-2.pdf',
        seating: 'Seats 6',
        seatingCapacity: 6,
        dimensions: '94" x 94" x 38"',
        dimensionsMetric: '239 cm x 239 cm x 97 cm',
        weightDry: '1,065 lbs (484 kg)',
        weightFull: '5,345 lbs (2,425 kg)',
        gallons: '380 (1,439 L)',
        power: '240 V / 50 Amp',
        jets: '46 Stainless Steel',
        pumps: '2',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Orion Light System™',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Blaster® Foot Massage Therapy',
          'Master Force™ Bio-Magnetic Therapy System',
          'WiFi Module',
          'Nonslip Comfort Mat',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'ts-7-25',
        name: 'TS 7.25',
        description: 'Seats 7 · 37 jets · Targeted hydrotherapy for high-tension areas',
        longDescription:
          "The modern approach to the ancient practice of hydrotherapy. The TS 7.25 features 37 premium massage jets, thoughtfully placed to target high-tension areas across the neck, back, and feet. From the StressRelief Neck and Shoulder Seat to the Master Blaster Foot Therapy, every seat delivers something. Seven-seat capacity makes it a strong family-and-friends choice without going up to the 94-inch footprint.",
        image: '/images/model-ts-7-25.jpg',
        pdfUrl: '/pdfs/feature-sheet-ts-7-25.pdf',
        seating: 'Seats 7',
        seatingCapacity: 7,
        dimensions: '84" x 84" x 38"',
        dimensionsMetric: '214 cm x 214 cm x 97 cm',
        weightDry: '919 lbs (417 kg)',
        weightFull: '4,760 lbs (2,160 kg)',
        gallons: '305 (1,155 L)',
        power: '240 V / 50 Amp',
        jets: '37 Stainless Steel',
        pumps: '2',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Orion Light System™',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Blaster® Foot Massage Therapy',
          'Master Force™ Bio-Magnetic Therapy System',
          'WiFi Module',
          'Nonslip Comfort Mat',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'ts-7-2',
        name: 'TS 7.2',
        description: 'Seats 6 · 38 jets · Best-selling Twilight with full-size lounge',
        longDescription:
          "The best-selling TS 7.2 just got better with an updated design and even more thoughtful details. From a full-size lounge to adjustable spa pillows, you will have room to stretch out or spend time with those you love most. The StressRelief Neck and Shoulder Seat targets an area where you feel tension most, while a waterfall and LED lighting set the mood.",
        image: '/images/model-ts-7-2.jpg',
        pdfUrl: '/pdfs/feature-sheet-ts-7-2.pdf',
        seating: 'Seats 6',
        seatingCapacity: 6,
        dimensions: '84" x 84" x 38"',
        dimensionsMetric: '214 cm x 214 cm x 97 cm',
        weightDry: '980 lbs (445 kg)',
        weightFull: '4,635 lbs (2,103 kg)',
        gallons: '305 (1,155 L)',
        power: '240 V / 50 Amp',
        jets: '38 Stainless Steel',
        pumps: '2',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Orion Light System™',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Blaster® Foot Massage Therapy',
          'Master Force™ Bio-Magnetic Therapy System',
          'WiFi Module',
          'Nonslip Comfort Mat',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'ts-67-25',
        name: 'TS 67.25',
        description: 'Seats 5 · 28 jets · Space-saving with cascading waterfall',
        longDescription:
          "A space-saving hot tub that is big on relaxation, the TS 67.25 offers the best in hydrotherapy. This five-person spa features premium massage jets, including the Master Blaster Foot Therapy, cascading waterfall, and brilliant LED lighting. The modern design and all-weather cabinet will help you create your dream backyard oasis.",
        image: '/images/model-ts-67-25.jpg',
        pdfUrl: '/pdfs/feature-sheet-ts-67-25.pdf',
        seating: 'Seats 5',
        seatingCapacity: 5,
        dimensions: '70" x 84" x 34"',
        dimensionsMetric: '178 cm x 214 cm x 87 cm',
        weightDry: '809 lbs (367 kg)',
        weightFull: '3,740 lbs (1,697 kg)',
        gallons: '240 (909 L)',
        power: '240 V / 50 Amp',
        jets: '28 Stainless Steel',
        pumps: '2',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Orion Light System™',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Blaster® Foot Massage Therapy',
          'Master Force™ Bio-Magnetic Therapy System',
          'WiFi Module',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'ts-6-2',
        name: 'TS 6.2',
        description: 'Seats 5 · 30 jets · Space-conscious with the latest hydrotherapy',
        longDescription:
          "Experience uncompromised wellness and unmatched relaxation with the all-new TS 6.2. This space-conscious hot tub features the latest hydrotherapy jets, ergonomic seating, and an energy-efficient design. With built-in Wi-Fi and an advanced control system, dialing in your soak has never been easier. Five-seat capacity in a 78-inch footprint — generous comfort without a backyard-overhauling install.",
        image: '/images/model-ts-6-2.jpg',
        pdfUrl: '/pdfs/feature-sheet-ts-6-2.pdf',
        seating: 'Seats 5',
        seatingCapacity: 5,
        dimensions: '78" x 78" x 34"',
        dimensionsMetric: '199 cm x 199 cm x 87 cm',
        weightDry: '755 lbs (343 kg)',
        weightFull: '3,770 lbs (1,711 kg)',
        gallons: '250 (947 L)',
        power: '240 V / 50 Amp',
        jets: '30 Stainless Steel',
        pumps: '2',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Orion Light System™',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Blaster® Foot Massage Therapy',
          'Master Force™ Bio-Magnetic Therapy System',
          'WiFi Module',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'ts-240x',
        name: 'TS 240X',
        description: 'Seats 3 · 26 jets · Corner-fit design for smaller backyards',
        longDescription:
          "Maximize your backyard relaxation with the TS 240X, a corner spa that combines premium features with a space-saving design. Thoughtfully crafted for up to three adults, it offers a full hydrotherapy experience with powerful massage jets, including the exclusive Master Blaster Foot Therapy. Adjustable spa pillows and ambient lighting complete the soothing atmosphere.",
        image: '/images/model-ts-240x.jpg',
        pdfUrl: '/pdfs/feature-sheet-ts-240x.pdf',
        seating: 'Seats 3',
        seatingCapacity: 3,
        dimensions: '78" x 78" x 34"',
        dimensionsMetric: '199 cm x 199 cm x 87 cm',
        weightDry: '715 lbs (325 kg)',
        weightFull: '2,980 lbs (1,352 kg)',
        gallons: '205 (777 L)',
        power: '240 V / 50 Amp',
        jets: '26 Stainless Steel',
        pumps: '2',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Orion Light System™',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Blaster® Foot Massage Therapy',
          'Master Force™ Bio-Magnetic Therapy System',
          'WiFi Module',
          'Deluxe Tapered Cover',
        ],
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
        description: 'Seats 7 · 52 jets · Open seating for up to 8 adults',
        longDescription:
          "The spacious Balance 9 has an open seating arrangement with room for up to eight adults. Take advantage of the 52 adjustable massage jets while appreciating features such as LED lighting and a waterfall. The Balance 9 is designed for those who want to enjoy life and share it with others.",
        image: '/images/model-balance-9.jpg',
        pdfUrl: '/pdfs/feature-sheet-balance-9.pdf',
        seating: 'Seats 7',
        seatingCapacity: 7,
        dimensions: '108" x 94" x 38"',
        dimensionsMetric: '275 cm x 239 cm x 97 cm',
        weightDry: '1,080 lbs (490 kg)',
        weightFull: '6,755 lbs (3,065 kg)',
        gallons: '525 (1,988 L)',
        power: '240 V / 50 Amp',
        jets: '52 Stainless Steel',
        pumps: '2',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Interior LED Lighting',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Force™ Bio-Magnetic Therapy System',
          'Backlit Cupholders',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'balance-8',
        name: 'Balance 8',
        description: 'Seats 5 · 43 jets · Dual therapy pumps and generous space',
        longDescription:
          "The Balance 8 offers generous space and seating, giving you room to stretch out or enjoy time with others. With dual therapy pumps and 43 massaging jets, every seat is designed to deliver soothing hydrotherapy — including the StressRelief Neck and Shoulder Seat as the daily anchor. Thoughtful details like backlit cupholders, interior LED lighting, and an all-weather cabinet make this spa an inviting space for daily relaxation and lasting comfort.",
        image: '/images/model-balance-8.jpg',
        pdfUrl: '/pdfs/feature-sheet-balance-8.pdf',
        seating: 'Seats 5',
        seatingCapacity: 5,
        dimensions: '94" x 94" x 36"',
        dimensionsMetric: '239 cm x 239 cm x 92 cm',
        weightDry: '930 lbs (422 kg)',
        weightFull: '5,195 lbs (2,357 kg)',
        gallons: '400 (1,515 L)',
        power: '240 V / 50 Amp',
        jets: '43 Stainless Steel',
        pumps: '2',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Interior LED Lighting',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Force™ Bio-Magnetic Therapy System',
          'Backlit Cupholders',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'precision-8',
        name: 'Precision 8',
        description: 'Seats 7 · 43 jets · Open seating with full therapy',
        longDescription:
          "Step up to the largest Precision model — an open seating design with space for up to seven adults, without compromising on the therapy. The Precision 8 features 43 thoughtfully placed jets and dual therapy pumps, with the StressRelief Neck and Shoulder Seat as the centerpiece of every soak. Cascade waterfall and ambient LED lighting round out a spa designed for families, gatherings, and the long-soak end of the day.",
        image: '/images/model-precision-8.jpg',
        pdfUrl: '/pdfs/feature-sheet-precision-8.pdf',
        seating: 'Seats 7',
        seatingCapacity: 7,
        dimensions: '94" x 94" x 36"',
        dimensionsMetric: '239 cm x 239 cm x 92 cm',
        weightDry: '963 lbs (437 kg)',
        weightFull: '6,180 lbs (2,804 kg)',
        gallons: '470 (1,780 L)',
        power: '240 V / 50 Amp',
        jets: '43 Stainless Steel',
        pumps: '2',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Interior LED Lighting',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Force™ Bio-Magnetic Therapy System',
          'Backlit Cupholders',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'balance-7',
        name: 'Balance 7',
        description: 'Seats 5 · 38 jets · Contoured lounge in the most popular size',
        longDescription:
          "Better backyard living begins with the Balance 7. Combining our most popular size spa with much-loved features such as a contoured lounge and reverse-molded StressRelief Neck and Shoulder Seat, enjoy an incomparable relaxation experience. The adjustable massage jets bring therapeutic relief to your high-tension areas and details like contoured comfort pillows enhance overall comfort and support.",
        image: '/images/model-balance-7.jpg',
        pdfUrl: '/pdfs/feature-sheet-balance-7.pdf',
        seating: 'Seats 5',
        seatingCapacity: 5,
        dimensions: '84" x 84" x 36"',
        dimensionsMetric: '214 cm x 214 cm x 92 cm',
        weightDry: '842 lbs (382 kg)',
        weightFull: '4,605 lbs (2,089 kg)',
        gallons: '340 (1,288 L)',
        power: '240 V / 50 Amp',
        jets: '38 Stainless Steel',
        pumps: '2',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Interior LED Lighting',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Force™ Bio-Magnetic Therapy System',
          'Backlit Cupholders',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'precision-7',
        name: 'Precision 7',
        description: 'Seats 7 · 38 jets · Cascade waterfall and LED lighting',
        longDescription:
          "Set the mood for relaxation with the soothing cascade waterfall and glowing LED lighting. The Precision 7 offers seating for friends or family, with 38 therapy jets to target key stress points and help ease the cares of the day. Spacious and thoughtfully designed, this spa delivers comfort and hydrotherapy in every seat.",
        image: '/images/model-precision-7.jpg',
        pdfUrl: '/pdfs/feature-sheet-precision-7.pdf',
        seating: 'Seats 7',
        seatingCapacity: 7,
        dimensions: '84" x 84" x 36"',
        dimensionsMetric: '214 cm x 214 cm x 92 cm',
        weightDry: '885 lbs (402 kg)',
        weightFull: '5,270 lbs (2,391 kg)',
        gallons: '370 (1,401 L)',
        power: '240 V / 50 Amp',
        jets: '38 Stainless Steel',
        pumps: '2',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Interior LED Lighting',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Force™ Bio-Magnetic Therapy System',
          'Backlit Cupholders',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'balance-6',
        name: 'Balance 6',
        description: 'Seats 5 · 30 jets · Full-size lounge in a compact footprint',
        longDescription:
          "With 30 jets, LED lighting, and a water feature, this five-person hot tub delivers plenty of relaxation in a compact 78-inch footprint. The Balance 6 has multiple jet arrangements and a full-size lounge, so you can stretch out for the full hydrotherapy experience or sit upright with a drink in the backlit cupholder beside you. A solid entry point into the Clarity Series for couples, small families, or smaller backyards.",
        image: '/images/model-balance-6.jpg',
        pdfUrl: '/pdfs/feature-sheet-balance-6.pdf',
        seating: 'Seats 5',
        seatingCapacity: 5,
        dimensions: '78" x 78" x 34"',
        dimensionsMetric: '199 cm x 199 cm x 87 cm',
        weightDry: '670 lbs (304 kg)',
        weightFull: '3,890 lbs (1,765 kg)',
        gallons: '275 (1,041 L)',
        power: '240 V / 50 Amp',
        jets: '30 Stainless Steel',
        pumps: '1',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Interior LED Lighting',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Force™ Bio-Magnetic Therapy System',
          'Backlit Cupholders',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'balance-6-cs',
        name: 'Balance 6 CS',
        description: 'Seats 5 · 30 jets · 110V plug-and-play, no electrician needed',
        longDescription:
          "This comfortable five-person hot tub features 30 hydrotherapy jets, LED lighting, and a waterfall for added ambience. The Balance 6 CS is a 110V plug-and-play — no electrician, no special wiring, no waiting. Perfect for condos, renters, or anyone who wants their first hot tub up and running the same day it's delivered. The only plug-and-play tub across our entire hot tub lineup.",
        image: '/images/model-balance-6-cs.jpg',
        pdfUrl: '/pdfs/feature-sheet-balance-6-cs.pdf',
        seating: 'Seats 5',
        seatingCapacity: 5,
        dimensions: '78" x 78" x 34"',
        dimensionsMetric: '199 cm x 199 cm x 87 cm',
        weightDry: '670 lbs (304 kg)',
        weightFull: '3,890 lbs (1,765 kg)',
        gallons: '275 (1,041 L)',
        power: '120 V / 15 Amp (plug-and-play)',
        jets: '30 Stainless Steel',
        pumps: '1',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Interior LED Lighting',
        features: [
          'StressRelief Neck and Shoulder Seat™',
          'Master Force™ Bio-Magnetic Therapy System',
          'Backlit Cupholders',
          'Deluxe Tapered Cover',
        ],
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
        description: 'Seats 6 · 23 jets · Contoured seating and full-size lounge',
        longDescription:
          "The LH L7 is designed to help you recharge and relax at home. With contoured seating and a full-size lounge, this spa combines the soothing benefits of heat and massage for a truly comforting hydrotherapy experience. Featuring 23 jets and ergonomic seating, the LH L7 makes it easy to escape the stress of the day and enjoy time for yourself or with others.",
        image: '/images/model-l7.jpg',
        pdfUrl: '/pdfs/feature-sheet-l7.pdf',
        seating: 'Seats 6',
        seatingCapacity: 6,
        dimensions: '84" x 84" x 36"',
        dimensionsMetric: '214 cm x 214 cm x 92 cm',
        weightDry: '800 lbs (363 kg)',
        weightFull: '4,540 lbs (2,060 kg)',
        gallons: '315 (1,193 L)',
        power: '240 V / 50 Amp',
        jets: '23 Stainless Steel',
        pumps: '2',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Colorscape Lighting',
        features: [
          'Master Clear Salt System Ready',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 's7',
        name: 'S7',
        description: 'Seats 7 · 23 jets · Spacious open layout',
        longDescription:
          "An open invitation to unwind. Designed with a spacious, open layout, the LH S7 delivers exceptional hydrotherapy at an approachable price point. Enjoy 23 targeted jets, soothing Colorscape LED lighting, and an easy-to-use control panel that makes relaxation simple. Master Clear Salt System Ready and a deluxe tapered cover make ownership just as easy as the soak.",
        image: '/images/model-s7.jpg',
        pdfUrl: '/pdfs/feature-sheet-s7.pdf',
        seating: 'Seats 7',
        seatingCapacity: 7,
        dimensions: '84" x 84" x 36"',
        dimensionsMetric: '214 cm x 214 cm x 92 cm',
        weightDry: '776 lbs (352 kg)',
        weightFull: '4,825 lbs (2,189 kg)',
        gallons: '330 (1,250 L)',
        power: '240 V / 50 Amp',
        jets: '23 Stainless Steel',
        pumps: '2',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Colorscape Lighting',
        features: [
          'Master Clear Salt System Ready',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'l6',
        name: 'L6',
        description: 'Seats 6 · 16 jets · Ergonomic seats and full-size lounge',
        longDescription:
          "Taking care of yourself should feel effortless. With the LH L6, it truly does. This six-person hot tub helps you manage stress, rest more deeply, and enjoy meaningful moments with family. Settle into the ergonomic seats or stretch out in the full lounge, all while 16 targeted jets deliver therapeutic hydrotherapy that helps you feel your best.",
        image: '/images/model-l6.jpg',
        pdfUrl: '/pdfs/feature-sheet-l6.pdf',
        seating: 'Seats 6',
        seatingCapacity: 6,
        dimensions: '78" x 78" x 34"',
        dimensionsMetric: '199 cm x 199 cm x 87 cm',
        weightDry: '650 lbs (295 kg)',
        weightFull: '3,805 lbs (1,726 kg)',
        gallons: '245 (928 L)',
        power: '240 V / 50 Amp (convertible to 120 V / 15 Amp plug-and-play)',
        jets: '16 Stainless Steel',
        pumps: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Colorscape Lighting',
        features: [
          'Master Clear Salt System Ready',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 's6',
        name: 'S6',
        description: 'Seats 7 · 16 jets · Open seating layout',
        longDescription:
          "Relaxation should be easy, and the LH S6 makes it just that. This comfortable spa features an open seating layout and thoughtfully positioned jets that provide soothing, balanced hydrotherapy. Master Clear Salt System Ready, Colorscape LED lighting, and a deluxe tapered cover round out a welcoming space designed for connection, comfort, and everyday well-being.",
        image: '/images/model-s6.jpg',
        pdfUrl: '/pdfs/feature-sheet-s6.pdf',
        seating: 'Seats 7',
        seatingCapacity: 7,
        dimensions: '78" x 78" x 34"',
        dimensionsMetric: '199 cm x 199 cm x 87 cm',
        weightDry: '633 lbs (288 kg)',
        weightFull: '4,055 lbs (1,840 kg)',
        gallons: '255 (966 L)',
        power: '240 V / 50 Amp (convertible to 120 V / 15 Amp plug-and-play)',
        jets: '16 Stainless Steel',
        pumps: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Colorscape Lighting',
        features: [
          'Master Clear Salt System Ready',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'l5',
        name: 'L5',
        description: 'Seats 3 · 16 jets · 120V plug-and-play, no electrician needed',
        longDescription:
          "With its compact footprint and thoughtful design, the L5 makes it easy to add a hot tub to your routine. Featuring 16 soothing jets, LED lighting, and comfortable headrests, this three-person spa delivers dependable comfort and everyday relaxation without stretching your space or your budget. The 120V plug-and-play install — convertible to 240V later — means no electrician on day one.",
        image: '/images/model-l5.jpg',
        pdfUrl: '/pdfs/feature-sheet-l5.pdf',
        seating: 'Seats 3',
        seatingCapacity: 3,
        dimensions: '78" x 60" x 34"',
        dimensionsMetric: '199 cm x 153 cm x 87 cm',
        weightDry: '570 lbs (259 kg)',
        weightFull: '2,670 lbs (1,212 kg)',
        gallons: '185 (701 L)',
        power: '120 V / 15 Amp (plug-and-play, convertible to 240 V / 50 Amp)',
        jets: '16 Stainless Steel',
        pumps: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Colorscape Lighting',
        features: [
          'Master Clear Salt System Ready',
          'Deluxe Tapered Cover',
        ],
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
        description: 'Seats 5 · 40 jets · Largest Getaway, with dual therapy pumps',
        longDescription:
          "The largest hot tub in the Getaway Series, the Bar Harbor LE offers a full-size lounge, contoured seating, and 40 powerful jets — the most in the Getaway lineup. With room for the whole family, dual therapy pumps, and a 240V hardwired install, it's the Getaway choice when you want serious hydrotherapy without stepping up to a Master Spas series.",
        image: '/images/model-bar-harbor-le.jpg',
        pdfUrl: '/pdfs/feature-sheet-bar-harbor-le.pdf',
        seating: 'Seats 5',
        seatingCapacity: 5,
        dimensions: '86" x 86" x 35"',
        dimensionsMetric: '219 cm x 219 cm x 89 cm',
        weightDry: '660 lbs (300 kg)',
        weightFull: '4,840 lbs (2,196 kg)',
        gallons: '390 (1,477 L)',
        power: '240 V / 50 Amp',
        jets: '40 Stainless Steel',
        pumps: '2',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Colorscape Lighting',
        features: [
          'Backlit Cupholders',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'bar-harbor-se',
        name: 'Bar Harbor SE',
        description: 'Seats 5 · 25 jets · Plug-and-play 120V with full-size lounge',
        longDescription:
          "With a full-size lounge, bucket seating, and 25 targeted jets, the Bar Harbor SE brings hydrotherapy home. Seating up to five, it's a versatile hot tub that makes relaxation simple for family or friends. Plug-and-play installation with a 120V GFCI cord means you can be soaking the same day it's delivered — no electrician required, convertible to 240V later if you want more heating power.",
        image: '/images/model-bar-harbor-se.jpg',
        pdfUrl: '/pdfs/feature-sheet-bar-harbor-se.pdf',
        seating: 'Seats 5',
        seatingCapacity: 5,
        dimensions: '86" x 86" x 35"',
        dimensionsMetric: '219 cm x 219 cm x 89 cm',
        weightDry: '600 lbs (273 kg)',
        weightFull: '4,780 lbs (2,169 kg)',
        gallons: '390 (1,477 L)',
        power: '120 V / 15 Amp plug-and-play (GFCI cord included, convertible to 240 V / 50 Amp)',
        jets: '25 Stainless Steel',
        pumps: '1',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Colorscape Lighting',
        features: [
          'Backlit Cupholders',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'ocho-rios-se',
        name: 'Ocho Rios SE',
        description: 'Seats 4 · 17 jets · Compact plug-and-play backyard retreat',
        longDescription:
          "Perfect for four, the Ocho Rios SE combines ergonomic seating with 17 targeted jets to create a personal hot tub escape. Compact in size but full of comfort, it's designed to transform your backyard into a go-to retreat. Plug-and-play 120V install with a GFCI cord — no electrician needed — and convertible to 240V down the road if you want to upgrade.",
        image: '/images/model-ocho-rios-se.jpg',
        pdfUrl: '/pdfs/feature-sheet-ocho-rios-se.pdf',
        seating: 'Seats 4',
        seatingCapacity: 4,
        dimensions: '86" x 72" x 34"',
        dimensionsMetric: '219 cm x 183 cm x 87 cm',
        weightDry: '535 lbs (243 kg)',
        weightFull: '3,155 lbs (1,432 kg)',
        gallons: '225 (852 L)',
        power: '120 V / 15 Amp plug-and-play (GFCI cord included, convertible to 240 V / 50 Amp)',
        jets: '17 Stainless Steel',
        pumps: '1',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Colorscape Lighting',
        features: [
          'Backlit Cupholders',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'ocho-rios-cs',
        name: 'Ocho Rios CS',
        description: 'Seats 4 · 28 jets · Waterfall sconce and 240V hydrotherapy',
        longDescription:
          "With seating for four, the Ocho Rios CS features 28 jets, a relaxing waterfall sconce, and backlit cupholders to keep your favorite beverage close by. The 240V hardwired install delivers stronger heating and more reliable jet performance year-round — and it's convertible to 120V plug-and-play if your space requires it. Easy evenings, weekend downtime, year-round comfort.",
        image: '/images/model-ocho-rios-cs.jpg',
        pdfUrl: '/pdfs/feature-sheet-ocho-rios-cs.pdf',
        seating: 'Seats 4',
        seatingCapacity: 4,
        dimensions: '86" x 72" x 34"',
        dimensionsMetric: '219 cm x 183 cm x 87 cm',
        weightDry: '550 lbs (250 kg)',
        weightFull: '3,170 lbs (1,438 kg)',
        gallons: '225 (852 L)',
        power: '240 V / 50 Amp (convertible to 120 V / 15 Amp plug-and-play)',
        jets: '28 Stainless Steel',
        pumps: '1',
        waterFeatures: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Colorscape Lighting',
        features: [
          'Backlit Cupholders',
          'Deluxe Tapered Cover',
        ],
      },
      {
        slug: 'san-miguel',
        name: 'San Miguel',
        description: 'Seats 3 · 17 jets · Smallest footprint, plug-and-play 120V',
        longDescription:
          "Space at a premium? Enjoy the soothing comfort of the San Miguel from the Getaway Spas. Designed to make the most of a small footprint — just 79\" x 69\" — this three-person hot tub features 17 jets, Colorscape LED lighting, and a comfortable layout. 120V plug-and-play means it works in spaces where a dedicated electrical install isn't practical.",
        image: '/images/model-san-miguel.jpg',
        pdfUrl: '/pdfs/feature-sheet-san-miguel.pdf',
        seating: 'Seats 3',
        seatingCapacity: 3,
        dimensions: '79" x 69" x 32"',
        dimensionsMetric: '201 cm x 176 cm x 82 cm',
        weightDry: '450 lbs (205 kg)',
        weightFull: '2,510 lbs (1,139 kg)',
        gallons: '180 (682 L)',
        power: '120 V / 15 Amp plug-and-play (GFCI cord included, convertible to 240 V / 50 Amp)',
        jets: '17 Stainless Steel',
        pumps: '1',
        waterCare: 'EcoPur® Charge + Ozone',
        lighting: 'Colorscape Lighting',
        features: [
          'Backlit Cupholders',
          'Deluxe Tapered Cover',
        ],
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
