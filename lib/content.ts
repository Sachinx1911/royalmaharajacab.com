import { BRAND } from "./site";

export const stats = [
  { value: "10K+", label: "Happy Customers", key: "Customers" },
  { value: "12+", label: "Years of Experience", key: "Experience" },
  { value: "20+", label: "Strong Team", key: "Team" },
  { value: "4.7/5", label: "Highly rated on Google Reviews", key: "Rating" },
];

export type Feature = {
  icon: string;
  title: string;
  text: string;
};

export const features: Feature[] = [
  {
    icon: "rupee",
    title: "Affordable Rates",
    text: "Travel without stretching your budget, with affordable and transparent pricing with no hidden costs.",
  },
  {
    icon: "door",
    title: "Doorstep Pickup and Drops",
    text: "Enjoy ultimate convenience with cab pickups and drops on your preferred location or airport.",
  },
  {
    icon: "car",
    title: "Wide Range of Vehicles",
    text: "From economy to premium, our fleet has vehicles for every need.",
  },
  {
    icon: "clock",
    title: "24/7 Support",
    text: "Dedicated customer support team to assist you anytime during your journey.",
  },
  {
    icon: "sparkle",
    title: "Clean and Well-Maintained Cabs",
    text: "Each cab undergoes regular servicing and thorough sanitization to ensure a spotless, fresh environment for every ride.",
  },
  {
    icon: "shield",
    title: "Professional Drivers",
    text: "Travel with peace of mind in the hands of licensed, insured professional chauffeurs.",
  },
  {
    icon: "bolt",
    title: "Easy Booking Process",
    text: "Book your One-way or Outstation cab in minutes on our user-friendly website.",
  },
];

export type Service = {
  icon: string;
  title: string;
  text: string;
};

export const services: Service[] = [
  {
    icon: "plane",
    title: "Airport Pickups & Drops",
    text: "Enjoy quick and convenient Pickups & Drops from airports across Mumbai, Pune, Kolhapur and Nashik. Arrive and travel with ease.",
  },
  {
    icon: "route",
    title: "One-Way Intercity Drops",
    text: "Enjoy ultimate convenience with One-Way cabs from and to preferred location in cities across Maharashtra.",
  },
  {
    icon: "mountain",
    title: "Out-Station Trips",
    text: "Explore Maharashtra's beautiful destinations with comfortable Out-station cab options for every adventure.",
  },
  {
    icon: "car",
    title: "Cab rental in Mumbai",
    text: "Ideal for road trips or business needs, our cabs are available from Mumbai to various cities of Maharashtra and vice-versa.",
  },
  {
    icon: "pin",
    title: "Cab rental in Pune",
    text: "Discover the best way to explore Pune. From city tours to business commutes, we've got you covered.",
  },
];

export type Step = {
  number: string;
  title: string;
  text: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Booking and Selection",
    text: "Choose your source and destination, vehicle type options, pickup and drop locations through our website.",
  },
  {
    number: "02",
    title: "Pickup and Commute",
    text: "Receive pickup at your preferred pick-up location including major airports.",
  },
  {
    number: "03",
    title: "On the Road Support",
    text: "Our support team is available around the clock to assist you throughout your commute.",
  },
  {
    number: "04",
    title: "Drop and Review",
    text: "Flexible drop options to ensure your journey ends as smoothly as it began.",
  },
];

export const homeFaqs = [
  {
    q: `What services does ${BRAND} offer?`,
    a: `${BRAND} provides one-way intercity drops, outstation round-trips, airport pickups and drops, and local cab rentals across Maharashtra — including Pune, Mumbai, Navi Mumbai, Nashik, Shirdi, Mahabaleshwar, Kolhapur, Satara and Ratnagiri.`,
  },
  {
    q: `How do I book a cab with ${BRAND}?`,
    a: `Use the booking form on this page to select your pickup and drop locations, or call our 24/7 support line. We confirm your booking with driver and cab details before pickup.`,
  },
  {
    q: "Are there any hidden charges in your fares?",
    a: "No. We believe in complete transparency — the fare quoted at booking is what you pay. Tolls, parking and state taxes are communicated upfront and billed at actuals.",
  },
  {
    q: "Do you operate 24/7?",
    a: "Yes. Our cabs and customer support are available round the clock, including early-morning airport pickups and late-night drops.",
  },
  {
    q: "Do I have to pay return fare on a one-way trip?",
    a: "No. With our one-way cab service you pay only for the distance you travel — no return fare, unlike traditional round-trip-only operators.",
  },
  {
    q: "Can I book a cab for the same day?",
    a: "Yes, same-day bookings are accepted subject to cab availability. For guaranteed availability, especially on weekends and holidays, we recommend booking a few hours in advance.",
  },
];

export type Testimonial = {
  name: string;
  when: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sahil G.",
    when: "1 month ago",
    text: `Our trip from Pune to Mahabaleshwar was very convenient. The driver was polite and accommodating and patiently showed us around. The car was very neat and clean. Overall a great experience and trustworthy service with ${BRAND}.`,
  },
  {
    name: "Amruta P.",
    when: "2 months ago",
    text: `I am happy with the service — they are always on time and drive safely. I have used their cabs four times now for different cities and had a safe journey every time. Well done ${BRAND} team, keep up the good work.`,
  },
  {
    name: "Prayag P.",
    when: "1 month ago",
    text: `Highly impressed. The team is very reliable, professional and polite. All the cars are always clean, on time and driven with the utmost respect for safety. I had an amazing experience.`,
  },
  {
    name: "Vishal K.",
    when: "1 month ago",
    text: `It's an easy and trustworthy cab service option. So many good experiences, and the way they build a strong bond between passenger and driver is wonderful. Great service! 😇`,
  },
  {
    name: "Niketa M.",
    when: "2 months ago",
    text: `Travelled with family for a 3-day outstation trip and booked ${BRAND}. The service and driver are highly recommended. Safe driving, a clean car and timely pickup and drop at reasonable rates. We will book again.`,
  },
  {
    name: "Purushottam K.",
    when: "1 month ago",
    text: `Recently used ${BRAND} for Pune-Mumbai-Pune travel. It was a pleasant experience. The driver was on time for the pickup and very helpful. Billing was straightforward. No hidden charges.`,
  },
];
