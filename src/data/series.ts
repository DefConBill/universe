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
  seating?: string;
  dimensions?: string;
  description?: string;
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
  models: Model[];
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
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'lsx-800',
        name: 'LSX 800',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'lsx-850',
        name: 'LSX 850',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'lsx-900',
        name: 'LSX 900',
        description: 'Specs and pricing available on request.',
      },
      {
        slug: 'lsx-30',
        name: 'LSX 30',
        description: 'Specs and pricing available on request.',
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
      "The Twilight Series offers a curated balance of luxury and approachability — refined design, exclusive features, and a quietly powerful hydrotherapy experience tuned for everyday relaxation rather than aggressive therapy. [PLACEHOLDER copy — confirm with Bill.]",
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
        seating: 'Seats 6',
        dimensions: "8' × 7'",
        description: '[PLACEHOLDER] Large family Twilight — open seating, lounge, full-body hydrotherapy.',
      },
      {
        slug: 'ts-67-25',
        name: 'TS 67.25',
        seating: 'Seats 5–6',
        dimensions: "7'9\" × 6'9\"",
        description: '[PLACEHOLDER] Mid-size Twilight — balanced seating with great jet variety.',
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
      "Clarity Spas offer a way to enjoy rejuvenation, comfort and wellness on a whole different level. Built for thoughtful daily use, with clean lines, intuitive controls, and quiet operation that fits naturally into your home. [Description to be expanded with Bill.]",
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
        slug: 'clarity-1',
        name: 'Clarity Model 1',
        seating: 'Seats 5–6',
        description: '[PLACEHOLDER — confirm model lineup with Bill.]',
      },
      {
        slug: 'clarity-2',
        name: 'Clarity Model 2',
        seating: 'Seats 4',
        description: '[PLACEHOLDER — confirm model lineup with Bill.]',
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
      "Slip into a world of benefits that will help to improve your quality of life through purposeful relief and enhanced wellness. The LH series focuses on the therapeutic essentials — accessible pricing, dependable performance, and hydrotherapy that matters. [Description to be expanded with Bill.]",
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
        slug: 'lh-1',
        name: 'LH Model 1',
        seating: 'Seats 5',
        description: '[PLACEHOLDER — confirm model lineup with Bill.]',
      },
      {
        slug: 'lh-2',
        name: 'LH Model 2',
        seating: 'Seats 3–4',
        description: '[PLACEHOLDER — confirm model lineup with Bill.]',
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
      "Five affordable models that bring all the joy of hot tub ownership without the premium price tag. Plug-and-play friendly, perfect for first-time owners, smaller backyards, or anyone who just wants to enjoy the soak. [PLACEHOLDER copy — confirm with Bill.]",
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
        slug: 'ocho-rios-se',
        name: 'Ocho Rios SE',
        seating: 'Seats 5',
        description: '[PLACEHOLDER] Popular mid-size Getaway with full seating and entry-level jets.',
      },
      {
        slug: 'getaway-2',
        name: 'Getaway Model 2',
        seating: 'Seats 4',
        description: '[PLACEHOLDER — confirm full lineup with Bill.]',
      },
      {
        slug: 'getaway-3',
        name: 'Getaway Model 3',
        seating: 'Seats 2–3',
        description: '[PLACEHOLDER — confirm full lineup with Bill.]',
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
