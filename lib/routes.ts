import { BRAND } from "./site";

export type CabRoute = {
  slug: string;
  from: string;
  to: string;
  km: number;
  duration: string;
  sedanFare: string;
  suvFare: string;
  about: string[];
};

export const routes: CabRoute[] = [
  {
    slug: "pune-to-mumbai",
    from: "Pune",
    to: "Mumbai",
    km: 150,
    duration: "3–3.5 hours",
    sedanFare: "₹2,800",
    suvFare: "₹3,800",
    about: [
      `The Pune to Mumbai route via the Mumbai–Pune Expressway is one of the busiest intercity corridors in India, and ${BRAND} runs it every day. Whether you are heading to Mumbai airport for a flight, travelling for business in BKC or Lower Parel, or visiting family, our one-way cabs get you there without the hassle of buses or trains.`,
      `We track flight timings for airport drops, plan around expressway traffic, and offer doorstep pickup from any location in Pune — Hinjewadi, Kharadi, Kothrud, or the railway station. Food court and rest stops on the expressway are always at your convenience.`,
    ],
  },
  {
    slug: "mumbai-to-pune",
    from: "Mumbai",
    to: "Pune",
    km: 150,
    duration: "3–3.5 hours",
    sedanFare: "₹2,800",
    suvFare: "₹3,800",
    about: [
      `Travelling from Mumbai to Pune is quickest by road, and ${BRAND} makes it comfortable. We pick you up from anywhere in Mumbai — the international airport, Andheri, Dadar, Navi Mumbai or Thane — and drop you at your doorstep in Pune.`,
      `Our drivers know the expressway exits and Pune city routes well, so whether your destination is Hinjewadi IT Park, Camp or Hadapsar, you reach without detours. One-way fares mean you never pay for the return journey.`,
    ],
  },
  {
    slug: "pune-to-mahabaleshwar",
    from: "Pune",
    to: "Mahabaleshwar",
    km: 120,
    duration: "3 hours",
    sedanFare: "₹2,500",
    suvFare: "₹3,500",
    about: [
      `Mahabaleshwar is Pune's favourite weekend escape, and the winding ghat roads are best left to a professional driver. ${BRAND} runs daily cabs from Pune to Mahabaleshwar with experienced drivers who handle the hills smoothly.`,
      `Stop for strawberries at Mapro Garden, take in the views at Panchgani, and let us handle the parking at crowded viewpoints. Round-trip packages with local sightseeing are also available.`,
    ],
  },
  {
    slug: "pune-to-shirdi",
    from: "Pune",
    to: "Shirdi",
    km: 185,
    duration: "4.5 hours",
    sedanFare: "₹3,500",
    suvFare: "₹4,800",
    about: [
      `Thousands of devotees travel from Pune to Shirdi every week, and ${BRAND} makes the pilgrimage comfortable for families and senior citizens. We pick you up early morning so you reach in time for darshan, or plan an overnight stay as you prefer.`,
      `Combine your trip with Shani Shingnapur or Nashik on the way back. Our drivers know the temple town well and will guide you on parking and timings.`,
    ],
  },
  {
    slug: "mumbai-to-shirdi",
    from: "Mumbai",
    to: "Shirdi",
    km: 240,
    duration: "5.5 hours",
    sedanFare: "₹4,500",
    suvFare: "₹6,000",
    about: [
      `The Mumbai to Shirdi journey by cab is far more comfortable than crowded trains, especially for families with children or elders. ${BRAND} offers doorstep pickup from anywhere in Mumbai, Navi Mumbai or Thane.`,
      `Travel via the Kasara ghat with rest stops on the way, and reach the Sai Baba temple refreshed. We also arrange same-day return or multi-day temple circuits covering Nashik and Trimbakeshwar.`,
    ],
  },
  {
    slug: "pune-to-kolhapur",
    from: "Pune",
    to: "Kolhapur",
    km: 230,
    duration: "4.5 hours",
    sedanFare: "₹4,200",
    suvFare: "₹5,600",
    about: [
      `The Pune to Kolhapur drive down NH-48 is smooth and scenic, passing Satara and the Western Ghats. ${BRAND} runs this route regularly for devotees visiting Mahalaxmi Temple, business travellers and families.`,
      `Stop at Karad for the famous local food, or plan a detour to Panhala Fort. One-way drops and round trips both available with transparent fares.`,
    ],
  },
  {
    slug: "pune-to-nashik",
    from: "Pune",
    to: "Nashik",
    km: 210,
    duration: "4.5 hours",
    sedanFare: "₹3,800",
    suvFare: "₹5,200",
    about: [
      `From the wine capital's vineyards to the Trimbakeshwar Jyotirlinga, Nashik draws travellers from Pune all year round. ${BRAND} offers comfortable one-way and round-trip cabs on this route with doorstep pickup.`,
      `The drive via Sangamner is comfortable with good highway food stops. Combine your trip with Shirdi — it falls conveniently en route.`,
    ],
  },
  {
    slug: "mumbai-to-nashik",
    from: "Mumbai",
    to: "Nashik",
    km: 170,
    duration: "3.5 hours",
    sedanFare: "₹3,200",
    suvFare: "₹4,400",
    about: [
      `The Mumbai–Nashik highway makes this one of the easiest getaways from the city. ${BRAND} picks you up from any Mumbai location and gets you to Nashik's vineyards, temples or your business meeting on time.`,
      `Weekend wine-tasting trips to Sula, pilgrimages to Trimbakeshwar, or Kumbh-time travel — we run them all with experienced highway drivers.`,
    ],
  },
  {
    slug: "pune-to-satara",
    from: "Pune",
    to: "Satara",
    km: 110,
    duration: "2.5 hours",
    sedanFare: "₹2,200",
    suvFare: "₹3,200",
    about: [
      `Satara is the gateway to the Kaas Plateau, Thoseghar Waterfalls and Sajjangad, and it's a quick highway run from Pune. ${BRAND} offers one-way drops and full-day sightseeing packages on this route.`,
      `In flower season (September–October), book early — Kaas Plateau trips fill up fast. Our drivers know the plateau timings and entry rules.`,
    ],
  },
  {
    slug: "mumbai-to-mahabaleshwar",
    from: "Mumbai",
    to: "Mahabaleshwar",
    km: 260,
    duration: "5.5 hours",
    sedanFare: "₹4,800",
    suvFare: "₹6,500",
    about: [
      `Escape Mumbai for the cool heights of Mahabaleshwar without driving the ghats yourself. ${BRAND} runs comfortable cabs via the expressway and Poladpur or Panchgani routes, with experienced hill drivers.`,
      `Ideal for family holidays and honeymoons — doorstep pickup anywhere in Mumbai, Navi Mumbai or Thane, with flexible stops for meals on the way.`,
    ],
  },
  {
    slug: "pune-to-ratnagiri",
    from: "Pune",
    to: "Ratnagiri",
    km: 300,
    duration: "6.5 hours",
    sedanFare: "₹5,500",
    suvFare: "₹7,500",
    about: [
      `The drive from Pune to the Konkan coast is one of Maharashtra's most beautiful, descending through the Western Ghats to the sea. ${BRAND} makes the long journey comfortable with experienced ghat drivers and flexible meal stops.`,
      `Visit Ganpatipule, taste authentic Konkan cuisine, or head home for the Ganpati festival — we run this route in all seasons, including the monsoon when the ghats are at their greenest.`,
    ],
  },
  {
    slug: "navi-mumbai-to-pune",
    from: "Navi Mumbai",
    to: "Pune",
    km: 120,
    duration: "2.5 hours",
    sedanFare: "₹2,400",
    suvFare: "₹3,400",
    about: [
      `Based right here in Kalamboli, ${BRAND} is Navi Mumbai's local cab service for Pune travel. Pickup from Vashi, Nerul, Kharghar, Panvel or Kalamboli is quick — you're on the expressway within minutes.`,
      `Daily one-way drops for professionals, students and families, with early-morning and late-night availability. Being local means our cabs reach you faster and fares stay lower.`,
    ],
  },
];

export const getRoute = (slug: string) => routes.find((r) => r.slug === slug);
export const routeSlugs = routes.map((r) => r.slug);

export const routeFaqs = (r: CabRoute) => [
  {
    q: `How far is ${r.to} from ${r.from} by road?`,
    a: `${r.to} is about ${r.km} km from ${r.from} by road, which takes around ${r.duration} by cab depending on traffic and the time of day.`,
  },
  {
    q: `How much does a cab from ${r.from} to ${r.to} cost?`,
    a: `A one-way cab from ${r.from} to ${r.to} starts at approximately ${r.sedanFare} for a sedan and ${r.suvFare} for an SUV. Tolls and state taxes are extra. Fares are indicative — call us for an exact quote for your travel date.`,
  },
  {
    q: `Do you provide one-way cab service from ${r.from} to ${r.to}?`,
    a: `Yes. ${BRAND} specialises in one-way drops from ${r.from} to ${r.to} — you pay only for the one-way journey, not the return. Round trips and multi-day packages are also available.`,
  },
  {
    q: `How do I book a ${r.from} to ${r.to} cab?`,
    a: `Use the booking form on this page or call us 24/7. We confirm your booking with the driver and cab details before pickup, and pick you up from your doorstep anywhere in ${r.from}.`,
  },
];
