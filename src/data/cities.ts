/**
 * Cities served by Hot Tub Universe — drives /areas-we-serve/[city]/ pages.
 *
 * Each city has its own substantive page targeting "hot tubs [city]" queries.
 * Avoid thin doorway pages — every city has authentic geographic context,
 * neighborhood mentions, and delivery info specific to that area.
 *
 * Add a new city by appending an entry to the `cities` array.
 */

export type CityFaq = {
  q: string;
  a: string;
};

export type CityReason = {
  title: string;
  description: string;
};

export type City = {
  slug: string;             // URL slug, e.g. 'halifax-hot-tubs'
  name: string;             // Display name, e.g. 'Halifax'
  driveTimeText: string;    // "10 min" / "Our home city"
  direction: string;        // Short positioning line
  pageTitle: string;
  pageDescription: string;
  heroTagline: string;
  intro: string;            // Opening paragraph (city-specific context)
  reasons: CityReason[];    // 3-4 "why HTU customers here choose us" cards
  neighborhoods?: string[]; // Specific neighborhoods/areas mentioned in copy
  delivery: string;         // Delivery & service paragraph specific to this city
  faqs: CityFaq[];
};

export const cities: City[] = [
  {
    slug: 'bedford-hot-tubs',
    name: 'Bedford',
    driveTimeText: 'Our home city',
    direction: 'Our showroom is here',
    pageTitle: 'Hot Tubs and Swim Spas in Bedford, NS | Hot Tub Universe',
    pageDescription:
      "Hot Tub Universe is Bedford's local hot tub dealer — our showroom is at 20 Duke Street. Same-day site assessments, fast service across Bedford and West Bedford.",
    heroTagline: "We're your neighbourhood hot tub dealer — right here in Bedford.",
    intro:
      "If you live in Bedford, you've already won the proximity game. Our showroom at 20 Duke Street, Unit 109 is probably less than a ten-minute drive from your front door — and you can drop by during showroom hours to sit in a hot tub before you decide. That kind of neighbourhood-dealer relationship doesn't exist with national chains or online catalogues. From Sunnyside to West Bedford, Bedford South to the Hammonds Plains Road corridor, our delivery and service crews have been in and out of Bedford homes for over a decade. We know the streets, we know the access challenges, and we know what works.",
    reasons: [
      {
        title: 'Walk in any time during showroom hours',
        description:
          "No appointment needed. Browse, sit in a few tubs, ask questions, and leave without anyone pressuring you. Mon–Sat, 10am to 5pm.",
      },
      {
        title: 'Same-day site assessments',
        description:
          "If you're considering a purchase, we can usually swing by your backyard within 24 hours to confirm access, electrical, and placement — and give you a precise quote.",
      },
      {
        title: 'Fast service when you need it',
        description:
          "Bedford is our backyard too. Most service calls happen within 2–3 days. Same techs who installed it come back when you need them.",
      },
      {
        title: 'Built into the community',
        description:
          "We're a Bedford business, not a national chain with a Bedford address. We've serviced hot tubs for hundreds of Bedford households — many of which we sold over the years.",
      },
    ],
    neighborhoods: ['Sunnyside', 'West Bedford', 'Bedford South', 'Hammonds Plains Road corridor'],
    delivery:
      "Single-day install for nearly every Bedford address. Our truck handles most driveways without trouble; cranes are rarely needed except for unusual elevation or fully enclosed backyards. The 240V circuit goes in before delivery (we can recommend Bedford electricians we trust). Same-day handover means you can be soaking the night your tub arrives.",
    faqs: [
      {
        q: "Can I just walk into your Bedford showroom?",
        a: "Yes — Mon through Sat, 10am to 5pm. We're at 20 Duke Street, Unit 109. No appointment needed. Browse, ask questions, and we'll show you whatever you'd like to see.",
      },
      {
        q: "How quickly can you do a site assessment in Bedford?",
        a: "Usually within 24 hours. We'll come check your backyard access, electrical, and placement, then give you a precise quote with no surprises.",
      },
      {
        q: "How long does a service call take in Bedford?",
        a: "Most Bedford service calls happen within 2–3 days of you contacting us. Our techs are based here — you're not waiting for someone driving in from out of town.",
      },
    ],
  },
  {
    slug: 'halifax-hot-tubs',
    name: 'Halifax',
    driveTimeText: '15 min',
    direction: 'South of Bedford across Magazine Hill',
    pageTitle: 'Hot Tubs and Swim Spas in Halifax, NS | Hot Tub Universe',
    pageDescription:
      "Halifax's locally owned hot tub dealer — 15 minutes from our Bedford showroom. Delivery and service across South End, West End, Clayton Park, and the entire Halifax peninsula and mainland.",
    heroTagline: "Halifax's locally owned hot tub dealer — 15 minutes from the showroom.",
    intro:
      "Halifax homes come in every shape and size — from peninsula heritage houses with narrow side yards to newer mainland developments in Clayton Park and Larry Uteck with spacious backyards. We've installed hot tubs in all of them. The showroom in Bedford is a fifteen-minute drive across Magazine Hill, and our delivery and service teams cross into Halifax every week — often multiple times a day. Whether you're in the South End looking at a Twilight Series for a tight courtyard, or in Mainland South considering a Legend for a generous backyard, the conversation starts the same way: come visit the showroom, then we'll come look at your space.",
    reasons: [
      {
        title: 'Local dealer beats big-box on service',
        description:
          "We deliver, install, and service across Halifax. You call us, not a national 1-800 number. Service techs come to your home — you don't haul anything anywhere.",
      },
      {
        title: 'Backyard access is half the battle',
        description:
          "Halifax peninsula homes often have narrow side yards, mature trees, and tight fences. We do a free site assessment before quoting so you know exactly what'll fit and whether crane delivery is needed.",
      },
      {
        title: 'Every Halifax neighborhood covered',
        description:
          "South End, West End, North End, Clayton Park, Fairview, Mainland South, Larry Uteck, Spryfield — our crews have delivered to all of them and know the local quirks.",
      },
      {
        title: 'Reliable through Atlantic winters',
        description:
          "Halifax weather is unforgiving. Our service team works year-round and our Master Spas lineup is built for Atlantic-climate use without surprise energy bills.",
      },
    ],
    neighborhoods: ['South End', 'West End', 'North End', 'Clayton Park', 'Larry Uteck', 'Fairview', 'Mainland South', 'Spryfield'],
    delivery:
      "Most Halifax addresses are single-day installs. Our truck handles standard driveway access well; older peninsula homes with very narrow side gates or tight rear access may need a crane lift, which we'll confirm at the site assessment. We cross Magazine Hill or the bridges depending on your address — either way, the drive is built into our standard delivery, no extra charge.",
    faqs: [
      {
        q: "I'm on the Halifax peninsula — will a hot tub even fit in my yard?",
        a: "Almost certainly yes, but a free site assessment confirms exactly which models work for your access and footprint. Even tight South End row-house yards usually have room for one of the Twilight or Clarity compact models.",
      },
      {
        q: "Will I need a crane for delivery?",
        a: "Usually no. Crane lifts come into play for fully enclosed backyards with no side access, or hillside lots with elevation challenges. We check at site assessment and price accordingly — no surprise fees.",
      },
      {
        q: "Do you service hot tubs across Halifax year-round?",
        a: "Yes. Our techs cross into Halifax weekly through every winter. Most service calls in Halifax happen within 3 days of your call.",
      },
      {
        q: "What about delivery costs to Halifax from Bedford?",
        a: "Halifax delivery is included in our standard install pricing. The 15-minute drive is built in — no extra fee.",
      },
    ],
  },
  {
    slug: 'dartmouth-hot-tubs',
    name: 'Dartmouth',
    driveTimeText: '20 min',
    direction: 'East across the harbour from our Bedford showroom',
    pageTitle: 'Hot Tubs and Swim Spas in Dartmouth, NS | Hot Tub Universe',
    pageDescription:
      "Hot Tub Universe delivers hot tubs and swim spas across Dartmouth — Lake Banook, Dartmouth Crossing, Crichton Park, and surrounding neighborhoods. 20 minutes from our Bedford showroom.",
    heroTagline: "Hot tubs and swim spas delivered across the harbour to Dartmouth.",
    intro:
      "Dartmouth is a twenty-minute drive east of Bedford, across the harbour via the Macdonald or A. Murray MacKay bridge. The mix of established homes around Lake Banook, newer subdivisions near Dartmouth Crossing, family neighborhoods in Westphal and Russell Lake, and waterfront properties along the Bedford Basin side gives Dartmouth one of the most varied backyard landscapes in HRM. We've installed hot tubs in all of it — single-storey bungalows, mid-century splits, new builds, and waterfront homes on slopes. Our crew makes the bridge crossing multiple times a week and knows the access routes.",
    reasons: [
      {
        title: 'Cross-harbour delivery is routine',
        description:
          "Our crews cross into Dartmouth several times a week — bridges and ferry-side traffic patterns are built into our delivery windows. No premium charged for the trip.",
      },
      {
        title: 'Local service even from across the harbour',
        description:
          "Dartmouth service calls typically see a tech onsite within 3 days. We don't farm out service — same team that installed it comes back when you need them.",
      },
      {
        title: "We know the harder Dartmouth properties",
        description:
          "Lake Banook lakefront slopes, Eastern Passage road access, Crichton Park hill homes — we've delivered to each. Site assessment surfaces any tricky access before delivery day.",
      },
      {
        title: 'Backyards that fit bigger tubs',
        description:
          "Dartmouth's lots are typically more generous than the Halifax peninsula's. Lounge-style hot tubs and even small swim spas often work where they'd be impossible on a Halifax row-house lot.",
      },
    ],
    neighborhoods: ['Dartmouth Crossing', 'Lake Banook', 'Crichton Park', 'Westphal', 'Russell Lake', 'Woodlawn'],
    delivery:
      "Most Dartmouth addresses are single-day installs. The bridge crossing is built into our standard delivery — no extra fee. Lakefront properties with elevation or slope sometimes need a crane lift, which we'll confirm during the free site assessment. Standard 240V electrical install is the same as anywhere else in HRM — we can recommend Dartmouth electricians we trust if you don't have one.",
    faqs: [
      {
        q: "Does the bridge crossing cost extra for delivery?",
        a: "No. Dartmouth delivery is included in our standard install pricing. We cross the harbour as part of normal delivery routes.",
      },
      {
        q: "I'm on a Lake Banook waterfront lot. Any special considerations?",
        a: "Lakefront and hillside properties sometimes have elevation, slope, or limited access that affects placement. We'll check at the free site assessment and plan accordingly — crane lifts are occasionally needed.",
      },
      {
        q: "How long is service response in Dartmouth?",
        a: "Most Dartmouth service calls happen within 3 days. The bridge doesn't slow us down — our techs cross it routinely.",
      },
      {
        q: "Can you handle delivery in winter to Dartmouth?",
        a: "Yes. We deliver and install year-round, planning around weather windows. Bridge closures are rare and we work around them.",
      },
    ],
  },
  {
    slug: 'sackville-hot-tubs',
    name: 'Sackville',
    driveTimeText: '10 min',
    direction: 'North of Bedford via Highway 102',
    pageTitle: 'Hot Tubs and Swim Spas in Sackville, NS | Hot Tub Universe',
    pageDescription:
      "Sackville's neighbourhood hot tub dealer — 10 minutes from our Bedford showroom via Highway 102. Single-day install standard across Middle Sackville, Upper Sackville, and the Beaver Bank Road corridor.",
    heroTagline: "Ten minutes north of our showroom — your neighbourhood hot tub dealer.",
    intro:
      "Sackville sits ten minutes up Highway 102 from our Bedford showroom — one of the shortest delivery zones in HRM, and a community we know well. Established neighborhoods from Middle Sackville through Upper Sackville feature the kind of suburban single-family homes with backyards built for hot tubs. Generous lots, established trees, and homes with the electrical headroom to add a 240V circuit. We've delivered into Sackville every season for years and our service techs are out there nearly every week.",
    reasons: [
      {
        title: 'Proximity matters — service is fast',
        description:
          "Ten minutes between our showroom and most Sackville addresses. Service calls typically see a tech onsite within 2–3 days, often sooner.",
      },
      {
        title: 'Suburban backyards built for the job',
        description:
          "Most Sackville homes have ample backyard space, 240V access already wired close by, and straightforward driveway delivery. Single-day install is the norm.",
      },
      {
        title: 'Decades of Sackville installs',
        description:
          "Many of the hot tubs we service in Sackville today are ones we sold five, ten, fifteen years ago. Long-term ownership support included.",
      },
      {
        title: 'Trade-ins and upgrades supported',
        description:
          "Upgrading from an older Sackville hot tub? We can often take the old one in trade or coordinate disposal. Ask at site assessment.",
      },
    ],
    neighborhoods: ['Middle Sackville', 'Upper Sackville', 'Beaver Bank Road corridor', 'Sackville Drive'],
    delivery:
      "Same-day install for nearly every Sackville address. Standard truck delivery — crane lifts are rare here thanks to spacious lots and driveway access. Highway 102 makes the run from our Bedford showroom about as quick as cross-town traffic allows. Most installs are wrapped before lunch.",
    faqs: [
      {
        q: "What's the drive time from your showroom to Sackville?",
        a: "About 10 minutes north on Highway 102 to Middle Sackville; closer to 15 for the Upper Sackville and Beaver Bank area.",
      },
      {
        q: "Can I trade in my old hot tub when buying a new one?",
        a: "Often yes — depends on the model and condition. Give us a call to discuss, or we can take a look during your site assessment.",
      },
      {
        q: "How long is service response in Sackville?",
        a: "Typically 2–3 days. Sackville is one of our closest service zones and gets prompt response.",
      },
    ],
  },
  {
    slug: 'lower-sackville-hot-tubs',
    name: 'Lower Sackville',
    driveTimeText: '12 min',
    direction: 'Just north of Bedford',
    pageTitle: 'Hot Tubs and Swim Spas in Lower Sackville, NS | Hot Tub Universe',
    pageDescription:
      "Lower Sackville's neighbourhood hot tub dealer — 12 minutes from our Bedford showroom. Hot tubs, swim spas, delivery and service across the Sackville Drive and Cobequid Road corridors.",
    heroTagline: "Lower Sackville's neighbourhood hot tub dealer — 12 minutes away.",
    intro:
      "Lower Sackville sits between the Bedford Basin and Middle Sackville along Highway 102 and the Sackville Drive corridor — about a twelve-minute drive from our showroom. The community is a mix of post-war single-family homes with mature backyards, newer subdivisions, and townhomes near Cobequid Road and Glendale. Hot tub placement is usually straightforward, and our delivery crew makes the run several times a month.",
    reasons: [
      {
        title: 'Easy delivery via Highway 102',
        description:
          "Twelve minutes straight up the highway. No bridge, no harbour crossing, no congestion. Same-day install is standard.",
      },
      {
        title: 'Mature backyards designed for outdoor living',
        description:
          "Lower Sackville's established homes typically have the space, the privacy from neighbours, and the electrical infrastructure to support a hot tub addition without major renovations.",
      },
      {
        title: 'Local service with neighbourhood knowledge',
        description:
          "We've installed and serviced hot tubs across the Sackville Drive and Cobequid corridors for years. Many of our service techs grew up in or near the area.",
      },
    ],
    neighborhoods: ['Sackville Drive corridor', 'Cobequid Road', 'Glendale', 'First Lake area'],
    delivery:
      "Standard single-day install for most Lower Sackville addresses. Most lots have driveway access for the delivery truck. The 240V electrical circuit goes in before delivery — we can recommend local electricians if you don't already have one.",
    faqs: [
      {
        q: "How is Lower Sackville different from Sackville proper?",
        a: "Lower Sackville is the area between Bedford Basin and Middle Sackville along the Sackville Drive corridor. Slightly closer to our showroom and a different mix of housing stock — mostly post-war single-family with some newer development.",
      },
      {
        q: "Can your delivery truck handle my Lower Sackville driveway?",
        a: "Almost certainly yes. Most Lower Sackville driveways are standard residential — we check during the free site assessment if there's any doubt.",
      },
      {
        q: "How fast can you respond to service in Lower Sackville?",
        a: "Typically 2–3 days. Our crews are in and out of the Sackville corridor multiple times a week.",
      },
    ],
  },
  {
    slug: 'cole-harbour-hot-tubs',
    name: 'Cole Harbour',
    driveTimeText: '25 min',
    direction: 'East of Dartmouth',
    pageTitle: 'Hot Tubs and Swim Spas in Cole Harbour, NS | Hot Tub Universe',
    pageDescription:
      "Cole Harbour's hot tub dealer — 25 minutes east of our Bedford showroom. Family-home backyards built for hot tubs. Single-day install, year-round service across Cole Harbour, Forest Hills, and Westphal.",
    heroTagline: "Hot tubs and swim spas for Cole Harbour family homes.",
    intro:
      "Cole Harbour is one of HRM's most established suburban communities — quiet streets, mature trees, family homes with spacious backyards. About twenty-five minutes east of our Bedford showroom; we cross the harbour, then head east on Highway 111. Cole Harbour residents make up a meaningful portion of our customer base, and for good reason: the family-home setup here is well-suited to hot tub ownership. Generous lots, established backyards, and the kind of long-term homeowners who want to invest in their outdoor living space.",
    reasons: [
      {
        title: 'Backyards built for hot tubs',
        description:
          "Established Cole Harbour lots typically have the space, privacy, and electrical access we need. Most installs are single-day with no special access requirements.",
      },
      {
        title: 'Family-focused install experience',
        description:
          "Morning delivery, same-day install, your family soaking that evening. We handle electrical coordination if you need it.",
      },
      {
        title: "We know the route — and the area",
        description:
          "Cross the harbour, take the 111. We make the trip routinely and know which Cole Harbour streets have access quirks.",
      },
    ],
    neighborhoods: ['Cole Harbour proper', 'Forest Hills', 'Westphal', 'Russell Lake area'],
    delivery:
      "Single-day install standard. Allow for our 25-minute drive each way to your address from Bedford. Most Cole Harbour driveways accommodate the delivery truck easily — crane lifts are uncommon. Service calls typically take 3–4 days for Cole Harbour addresses; we batch the trip with other east-of-Dartmouth visits.",
    faqs: [
      {
        q: "Is there a delivery charge for Cole Harbour?",
        a: "Cole Harbour delivery is included in our standard install pricing. The drive is built in.",
      },
      {
        q: "How is service response for Cole Harbour?",
        a: "Typically 3–4 days. We batch east-of-Dartmouth service trips, which keeps response reasonable without adding travel costs to your bill.",
      },
      {
        q: "Do you install swim spas in Cole Harbour too?",
        a: "Yes — and many Cole Harbour backyards have the space for one. Our H2X and Michael Phelps swim spas are popular here.",
      },
    ],
  },
  {
    slug: 'eastern-passage-hot-tubs',
    name: 'Eastern Passage',
    driveTimeText: '28 min',
    direction: "HRM's easternmost coastal community",
    pageTitle: 'Hot Tubs and Swim Spas in Eastern Passage, NS | Hot Tub Universe',
    pageDescription:
      "Eastern Passage's hot tub dealer. 28 minutes east of our Bedford showroom. Coastal-ready hot tubs and swim spas delivered to Fisherman's Cove, Cow Bay, Hartlen Point, and surrounding areas.",
    heroTagline: "Coastal living deserves a hot tub. We deliver to Eastern Passage.",
    intro:
      "Eastern Passage is HRM's easternmost coastal community — Fisherman's Cove, the waterfront, the quiet streets that feel a world away from downtown Halifax. About twenty-eight minutes east of our Bedford showroom. We service Eastern Passage homes year-round and have installed hot tubs in both oceanfront and inland properties. The coastal location adds a few wrinkles: salt air, exposed positioning, and sometimes tighter access on older streets. None of it is a problem — our spas are built for it, and we plan ahead.",
    reasons: [
      {
        title: 'Coastal-climate ready',
        description:
          "Master Spas tubs are built for Atlantic Canada's wind, salt air, and winter swings. Eastern Passage's coastal exposure is well within their design envelope.",
      },
      {
        title: 'We know the access routes',
        description:
          "Older Eastern Passage streets sometimes have narrow access or angled driveways. We plan delivery routes in advance and bring the right truck for your address.",
      },
      {
        title: 'Service that comes to you',
        description:
          "The 28-minute drive doesn't slow us down — we maintain hot tubs across Eastern Passage routinely. Same techs, same response time as elsewhere in the area.",
      },
    ],
    neighborhoods: ["Fisherman's Cove", 'Cow Bay', 'Hartlen Point'],
    delivery:
      "Single-day install for most Eastern Passage addresses. Older homes near the water with narrow side access may require a site assessment for delivery planning — occasionally a crane lift is the right call. All our hot tubs are saltwater-and-salt-air ready out of the box; no special prep needed for coastal exposure.",
    faqs: [
      {
        q: "Is salt air a problem for hot tubs in Eastern Passage?",
        a: "Not with the spas we carry. Master Spas and our other lines are built for coastal climates. We do recommend a quality cover to extend cabinet life — included with every install.",
      },
      {
        q: "I'm right on the water. Anything special I should know?",
        a: "Waterfront properties sometimes have slope, exposed siting (high winds), or tighter back-lot access. We'll check at site assessment and plan placement and delivery accordingly.",
      },
      {
        q: "How long is service response in Eastern Passage?",
        a: "Typically 3–4 days. We batch east-coast service trips for efficiency.",
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getOtherCities(slug: string): City[] {
  return cities.filter((c) => c.slug !== slug);
}
