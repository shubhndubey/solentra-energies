export const ZONES = {
  MPCZ: { code: "MPCZ", label: "Central Zone" },
  MPWZ: { code: "MPWZ", label: "Western Zone" },
};

export const CITIES = [
  // ===== MPCZ — Central Zone =====
  {
    slug: "bhopal",
    name: "Bhopal",
    zone: "MPCZ",
    tagline: "The City of Lakes",
    blurb:
      "Bhopal's mix of independent bungalows around the lakes and dense apartment colonies in Kolar and Bawadiya Kalan makes it one of our busiest installation routes in the Central Zone.",
    testimonials: [
      {
        quote:
          "Our monthly bill dropped from around ₹3,800 to under ₹400. The subsidy paperwork was the part I dreaded most, and Solentra's team filed everything for us.",
        name: "Anurag Sharma",
        area: "Kolar Road, Bhopal · 3kW system",
      },
      {
        quote:
          "I compared three installers before choosing Solentra. They were the only ones who gave me a written breakdown of the subsidy amount before asking for any payment.",
        name: "Priyanka Nair",
        area: "Bawadiya Kalan, Bhopal · 4kW system",
      },
    ],
  },
  {
    slug: "damoh",
    name: "Damoh",
    zone: "MPCZ",
    tagline: "A growing town in the Bundelkhand belt",
    blurb:
      "Homes in Damoh tend to have generous, unshaded rooftop space, which usually means a straightforward, efficient install for us.",
    testimonials: [
      {
        quote:
          "The team explained the whole net-metering process clearly, which I hadn't understood properly from other quotes I'd collected.",
        name: "Rajendra Chaurasia",
        area: "Damoh · 3kW residential",
      },
      {
        quote:
          "Installation was finished in a single day, and the paperwork follow-up happened entirely over phone calls — I didn't need to chase anyone.",
        name: "Sunita Tiwari",
        area: "Damoh · 2kW residential",
      },
    ],
  },
  {
    slug: "gwalior",
    name: "Gwalior",
    zone: "MPCZ",
    tagline: "The historic fort city",
    blurb:
      "From heritage-adjacent bungalows to newer colonies near the Gwalior-Chambal belt, our surveys account for the varied roof structures common across the city.",
    testimonials: [
      {
        quote:
          "I was worried solar wouldn't suit our older roof, but the site survey settled that quickly with a mounting plan that worked for our structure.",
        name: "Deepak Bhargava",
        area: "Gwalior · 4kW residential",
      },
      {
        quote:
          "Our society's committee had a lot of questions about long-term maintenance. Solentra sat through a full meeting to answer them before we signed anything.",
        name: "Meenal Kulkarni",
        area: "Gwalior · Housing society",
      },
    ],
  },
  {
    slug: "hoshangabad",
    name: "Hoshangabad",
    zone: "MPCZ",
    tagline: "On the banks of the Narmada",
    blurb:
      "Hoshangabad's steady residential growth along the Narmada has brought more homeowners to rooftop solar over the last couple of years, and it's now a regular stop on our installation calendar.",
    testimonials: [
      {
        quote:
          "The technician arrived exactly when scheduled, which I honestly didn't expect for a smaller town like ours.",
        name: "Vikram Chouhan",
        area: "Hoshangabad · 3kW residential",
      },
      {
        quote:
          "Solentra's quote broke down every cost line item, which made it easy to compare against a local vendor's estimate.",
        name: "Anita Verma",
        area: "Hoshangabad · 2kW residential",
      },
    ],
  },
  {
    slug: "sehore",
    name: "Sehore",
    zone: "MPCZ",
    tagline: "A growing satellite town near Bhopal",
    blurb:
      "As Sehore grows alongside Bhopal, we've extended our regular installation routes here, keeping response times short for site visits and after-sales calls alike.",
    testimonials: [
      {
        quote:
          "Everything, from paperwork to installation, was handled without us having to travel to Bhopal even once.",
        name: "Kavita Yadav",
        area: "Sehore · 2kW residential",
      },
      {
        quote:
          "The follow-up after installation was better than I expected — someone actually called to check the system was performing as promised.",
        name: "Harish Malviya",
        area: "Sehore · 3kW residential",
      },
    ],
  },
  {
    slug: "shivpuri",
    name: "Shivpuri",
    zone: "MPCZ",
    tagline: "Gateway to Madhav National Park",
    blurb:
      "Shivpuri's independent houses, many with large flat rooftops, are well suited to solar — our site visits here usually confirm space for a bigger system than the homeowner initially expected.",
    testimonials: [
      {
        quote:
          "I'd assumed our roof was too small for a good-sized system, but the survey found room for more panels than I thought possible.",
        name: "Ramesh Yadav",
        area: "Shivpuri · 4kW residential",
      },
      {
        quote:
          "Clear communication throughout — I always knew what stage my application was at with the DISCOM.",
        name: "Shweta Rathore",
        area: "Shivpuri · 3kW residential",
      },
    ],
  },

  // ===== MPWZ — Western Zone =====
  {
    slug: "badnagar",
    name: "Badnagar",
    zone: "MPWZ",
    isHq: true,
    tagline: "Solentra Energies' head office",
    blurb:
      "Badnagar is where Solentra Energies is headquartered, and it's where our engineering, subsidy-filing, and customer service teams are based for the entire Western Zone.",
    testimonials: [
      {
        quote:
          "Being able to just walk into their office when I had questions made the whole process feel a lot less intimidating.",
        name: "Mahesh Patidar",
        area: "Badnagar · 3kW residential",
      },
      {
        quote:
          "Our system was commissioned faster than most of our neighbours' who used other installers, probably because the head office is right here.",
        name: "Sarita Vyas",
        area: "Badnagar · 4kW residential",
      },
    ],
  },
  {
    slug: "badnawar",
    name: "Badnawar",
    zone: "MPWZ",
    tagline: "An agricultural town in the Dhar district",
    blurb:
      "Badnawar's independent farmhouses and in-town homes both fall within easy reach of our Badnagar head office, keeping site-visit and service turnaround quick.",
    testimonials: [
      {
        quote:
          "We run a small storage facility alongside our home, and Solentra sized the system to cover both loads properly.",
        name: "Nitin Solanki",
        area: "Badnawar · 5kW residential",
      },
      {
        quote:
          "No pressure to buy anything extra — they only recommended what our roof could actually support.",
        name: "Kiran Chouhan",
        area: "Badnawar · 3kW residential",
      },
    ],
  },
  {
    slug: "dewas",
    name: "Dewas",
    zone: "MPWZ",
    tagline: "Industrial town near Indore",
    blurb:
      "Being close to Indore's supply chain, Dewas gets some of our fastest installation turnarounds for both homes and small industrial units.",
    testimonials: [
      {
        quote:
          "Quick site visit, clear quote, and installation within a couple of weeks. No back and forth needed.",
        name: "Priya Malviya",
        area: "Dewas · 3kW residential",
      },
      {
        quote:
          "The team coordinated the DISCOM inspection date with us in advance, so there was no long wait around at home.",
        name: "Ajay Rajput",
        area: "Dewas · 4kW residential",
      },
    ],
  },
  {
    slug: "dhar",
    name: "Dhar",
    zone: "MPWZ",
    tagline: "Historic town on the Malwa plateau",
    blurb:
      "Dhar's mix of older heritage-adjacent homes and newer residential layouts means our site surveys here often involve a bit more structural assessment than average — which we build into the timeline upfront.",
    testimonials: [
      {
        quote:
          "They were upfront that our roof needed some reinforcement before installation, instead of just quoting a number and dealing with it later.",
        name: "Suresh Yadav",
        area: "Dhar · 3kW residential",
      },
      {
        quote:
          "Straightforward process from quote to commissioning, with regular updates by phone.",
        name: "Rekha Chouhan",
        area: "Dhar · 2kW residential",
      },
    ],
  },
  {
    slug: "indore",
    name: "Indore",
    zone: "MPWZ",
    tagline: "Madhya Pradesh's commercial hub",
    blurb:
      "Indore's mix of dense residential colonies and industrial belts like Pithampur means we install everything from 2kW rooftop systems to large commercial arrays here.",
    testimonials: [
      {
        quote:
          "We run a small manufacturing unit near Indore and needed a system sized around our actual load curve, not a generic package. Solentra's design matched our usage closely.",
        name: "Rekha Patidar",
        area: "Pithampur, Indore · 15kW commercial",
      },
      {
        quote:
          "Our housing society got quotes from four installers. Solentra was the only one that presented the subsidy math to our committee in person.",
        name: "Alok Mishra",
        area: "Vijay Nagar, Indore · Housing society",
      },
    ],
  },
  {
    slug: "mandsaur",
    name: "Mandsaur",
    zone: "MPWZ",
    tagline: "Known for its opium and garlic trade",
    blurb:
      "Mandsaur's independent houses, often with sizeable open rooftops, tend to comfortably support 3–5kW systems once we account for local shading patterns.",
    testimonials: [
      {
        quote:
          "The whole process, from survey to net metering, was explained clearly at every step. No surprises on the final bill.",
        name: "Govind Sharma",
        area: "Mandsaur · 3kW residential",
      },
      {
        quote:
          "Our electricity bill during summer used to be our biggest monthly expense. That's no longer true after the install.",
        name: "Pooja Joshi",
        area: "Mandsaur · 4kW residential",
      },
    ],
  },
  {
    slug: "neemuch",
    name: "Neemuch",
    zone: "MPWZ",
    tagline: "A major mandi town for opium and spices",
    blurb:
      "Neemuch's traders and homeowners alike are increasingly asking about solar for both homes and small commercial premises near the mandi area.",
    testimonials: [
      {
        quote:
          "We wanted a system that could handle our shop's daytime load. Solentra sized it correctly after actually looking at our meter readings.",
        name: "Manoj Agarwal",
        area: "Neemuch · Commercial",
      },
      {
        quote:
          "Site visit, quote, and installation all happened faster than I expected for a town our size.",
        name: "Usha Rathi",
        area: "Neemuch · 3kW residential",
      },
    ],
  },
  {
    slug: "ratlam",
    name: "Ratlam",
    zone: "MPWZ",
    tagline: "A trading and textile hub",
    blurb:
      "Ratlam's mix of homes and small trading establishments benefits from rooftop solar sized to steady daytime usage patterns.",
    testimonials: [
      {
        quote:
          "We compared a few installers, and Solentra was the only one that actually walked us through the subsidy numbers in writing.",
        name: "Ashok Rathore",
        area: "Ratlam · 3kW residential",
      },
      {
        quote:
          "Our system has been running for a few months now, and the savings match almost exactly what we were quoted.",
        name: "Nisha Vora",
        area: "Ratlam · 4kW residential",
      },
    ],
  },
  {
    slug: "ujjain",
    name: "Ujjain",
    zone: "MPWZ",
    tagline: "The temple city on the Shipra",
    blurb:
      "Ujjain's residential neighbourhoods and small commercial establishments near the temple town are a growing part of our installation base.",
    testimonials: [
      {
        quote:
          "The whole process, from survey to net metering, was explained clearly at every step. No surprises on the final bill.",
        name: "Meera Joshi",
        area: "Ujjain · 3kW residential",
      },
      {
        quote:
          "We were nervous about a solar company being far from Ujjain, but the local service response was quick whenever we called.",
        name: "Deepak Purohit",
        area: "Ujjain · 2kW residential",
      },
    ],
  },
];

export function getCity(slug) {
  return CITIES.find((c) => c.slug === slug);
}

export function citiesByZone() {
  return Object.keys(ZONES).map((code) => ({
    zone: ZONES[code],
    cities: CITIES.filter((c) => c.zone === code),
  }));
}
