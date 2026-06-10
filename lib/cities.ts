import { BRAND } from "./site";

export type Place = {
  name: string;
  blurb: string;
};

export type City = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  intro: string[];
  placesHeading: string;
  places: Place[];
};

export const cities: City[] = [
  {
    slug: "pune",
    name: "Pune",
    metaTitle: `Rent a Cab in Pune with ${BRAND} | ${BRAND}`,
    metaDescription: `Explore Pune and nearby getaways in comfort with ${BRAND}. Stress-free rentals for historic, spiritual, and nature-rich experiences.`,
    heroTitle: `Rent a Cab in Pune with ${BRAND}`,
    intro: [
      `Exploring Pune becomes wonderfully convenient with ${BRAND}. Begin your day at the iconic Shaniwar Wada, where centuries of Maratha history live on in its ancient walls. Visit the serene Aga Khan Palace, a landmark of India's freedom struggle, and walk its peaceful gardens. For a moment of devotion, stop at the magnificent Dagdusheth Halwai Ganpati Temple, a vibrant symbol of the city's culture.`,
      `If you love the outdoors, our cabs can take you to the calm Pashan Lake or scenic Vetal Tekdi, ideal for unwinding amid nature. Looking for adventure? Our well-kept cabs reach Sinhagad Fort, a trekker's favourite with sweeping views and a slice of Maratha valour. Planning a day trip? Discover the hill stations of Lonavala and Khandala, the ancient Karla and Bhaja Caves, or the tranquil waters of Pawna Lake — all just a couple of hours away.`,
      `With ${BRAND}, you explore at your own pace, free from the stress of unfamiliar roads or parking. Clean, well-maintained cabs and professional drivers keep you comfortable and safe, whether you travel solo, with family, or with friends. Sit back, relax, and focus on making memories while we handle the logistics. Book your ride today and let the journey be as memorable as the destination.`,
    ],
    placesHeading: "Places to visit in Pune with Premium Rental Cabs",
    places: [
      { name: "Shaniwar Wada", blurb: "Step into history at Shaniwar Wada, where every corner tells a tale of Maratha glory." },
      { name: "Dagdusheth Halwai Ganpati Temple", blurb: "Seek blessings at Dagdusheth Temple, a true symbol of Pune's spirituality." },
      { name: "Aga Khan Palace", blurb: "Discover the elegance of Aga Khan Palace, a serene blend of history and heritage." },
      { name: "Pashan Lake", blurb: "Escape to the tranquility of Pashan Lake, a haven for nature lovers." },
      { name: "Vetal Tekdi", blurb: "Climb Vetal Tekdi and soak in panoramic views of Pune's natural beauty." },
      { name: "Sinhagad Fort", blurb: "Conquer the heights of Sinhagad Fort and relive the bravery of the Marathas." },
      { name: "Lonavala & Khandala", blurb: "Experience the misty charm of Lonavala and Khandala, Pune's favourite hill stations." },
      { name: "Karla and Bhaja Caves", blurb: "Unearth ancient Buddhist marvels at Karla and Bhaja Caves." },
      { name: "Pawna Lake", blurb: "Unwind by the serene waters of Pawna Lake, a perfect weekend retreat." },
    ],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    metaTitle: `Rent a Cab in Mumbai with ${BRAND} | ${BRAND}`,
    metaDescription: `Travel across Mumbai and beyond in comfort with ${BRAND}. Reliable rentals for sightseeing, airport transfers, and outstation trips.`,
    heroTitle: `Rent a Cab in Mumbai with ${BRAND}`,
    intro: [
      `Discovering Mumbai is effortless with ${BRAND}. Start at the majestic Gateway of India, watch the waves along Marine Drive, and feel the energy of the city that never sleeps. Visit the tranquil Siddhivinayak Temple, stroll the sands of Juhu Beach, or step back in time at the Chhatrapati Shivaji Maharaj Terminus.`,
      `From business commutes to family outings and airport pickups, our cabs are ready around the clock. Skip the crowded trains and busy roads — relax in a clean, comfortable cab while a professional driver navigates the city for you.`,
      `With ${BRAND}, every Mumbai journey is smooth and stress-free. Book your ride today and explore the Maximum City at your own pace.`,
    ],
    placesHeading: "Places to visit in Mumbai with Premium Rental Cabs",
    places: [
      { name: "Gateway of India", blurb: "Begin your Mumbai story at the iconic Gateway of India by the Arabian Sea." },
      { name: "Marine Drive", blurb: "Cruise along Marine Drive and watch the Queen's Necklace light up the bay." },
      { name: "Siddhivinayak Temple", blurb: "Seek blessings at the revered Siddhivinayak Temple in the heart of the city." },
      { name: "Juhu Beach", blurb: "Relax on the lively sands of Juhu Beach, a Mumbai favourite at sunset." },
      { name: "Chhatrapati Shivaji Terminus", blurb: "Admire the grand Victorian architecture of this UNESCO World Heritage station." },
      { name: "Elephanta Caves", blurb: "Sail to the ancient rock-cut Elephanta Caves for a glimpse of timeless artistry." },
      { name: "Sanjay Gandhi National Park", blurb: "Breathe in green calm at Sanjay Gandhi National Park within the city limits." },
      { name: "Haji Ali Dargah", blurb: "Visit the serene Haji Ali Dargah resting gracefully on the sea." },
      { name: "Bandra-Worli Sea Link", blurb: "Glide across the stunning Bandra-Worli Sea Link with the skyline in view." },
    ],
  },
  {
    slug: "nashik",
    name: "Nashik",
    metaTitle: `Rent a Cab in Nashik with ${BRAND} | ${BRAND}`,
    metaDescription: `Discover Nashik's temples, vineyards, and getaways with ${BRAND}. Comfortable, reliable cab rentals for every journey.`,
    heroTitle: `Rent a Cab in Nashik with ${BRAND}`,
    intro: [
      `Exploring Nashik is a delight with ${BRAND}. Begin at the sacred Trimbakeshwar Temple, take in the spiritual calm of the Ramkund and Panchavati, and let the holy Godavari set the rhythm of your day.`,
      `Nashik is also the wine capital of India — visit the celebrated vineyards of Sula and beyond, or head to the cool hill retreats nearby. Our clean, well-maintained cabs and experienced drivers make every stop comfortable and easy.`,
      `With ${BRAND}, you travel Nashik at your own pace, free from the hassle of routes and parking. Book your ride today and savour every moment.`,
    ],
    placesHeading: "Places to visit in Nashik with Premium Rental Cabs",
    places: [
      { name: "Trimbakeshwar Temple", blurb: "Seek blessings at the sacred Trimbakeshwar, one of the twelve Jyotirlingas." },
      { name: "Panchavati", blurb: "Walk the spiritual lanes of Panchavati along the holy Godavari." },
      { name: "Sula Vineyards", blurb: "Sip and unwind at the renowned vineyards of India's wine capital." },
      { name: "Pandavleni Caves", blurb: "Explore the ancient rock-cut Pandavleni Caves carved into the hills." },
      { name: "Sula & Ramkund", blurb: "Experience the sacred Ramkund, a centre of faith and tradition." },
      { name: "Anjneri Hills", blurb: "Trek the scenic Anjneri Hills, believed to be the birthplace of Hanuman." },
      { name: "Saptashrungi", blurb: "Visit the hilltop shrine of Saptashrungi for divine views and devotion." },
      { name: "Coin Museum", blurb: "Step into history at the unique Coin Museum, a rare collection in India." },
      { name: "Igatpuri", blurb: "Escape to the misty green slopes of Igatpuri, perfect for a quiet retreat." },
    ],
  },
  {
    slug: "satara",
    name: "Satara",
    metaTitle: `Rent a Cab in Satara with ${BRAND} | ${BRAND}`,
    metaDescription: `Explore Satara's forts, waterfalls, and valleys with ${BRAND}. Dependable cab rentals for scenic and historic journeys.`,
    heroTitle: `Rent a Cab in Satara with ${BRAND}`,
    intro: [
      `Satara unfolds beautifully with ${BRAND}. Stand atop Kaas Plateau, a UNESCO-listed valley of flowers, and witness the famous reverse waterfall at Chalkewadi. History lovers can explore the mighty Ajinkyatara Fort overlooking the city.`,
      `From the tranquil Thoseghar Waterfalls to the vast Koyna backwaters, Satara is a paradise for nature seekers. Our comfortable cabs and skilled drivers take you everywhere with ease.`,
      `With ${BRAND}, every Satara journey is smooth and memorable. Book your ride today and let the hills welcome you.`,
    ],
    placesHeading: "Places to visit in Satara with Premium Rental Cabs",
    places: [
      { name: "Kaas Plateau", blurb: "Wander the UNESCO-listed Valley of Flowers in full seasonal bloom." },
      { name: "Thoseghar Waterfalls", blurb: "Feel the spray of the spectacular Thoseghar Waterfalls amid lush hills." },
      { name: "Ajinkyatara Fort", blurb: "Climb Ajinkyatara Fort for sweeping views over the city of Satara." },
      { name: "Sajjangad Fort", blurb: "Find peace at Sajjangad, the resting place of Saint Ramdas." },
      { name: "Koyna Dam", blurb: "Take in the vast calm of the Koyna backwaters and Shivsagar Lake." },
      { name: "Chalkewadi", blurb: "Watch windmills turn and the famous reverse waterfall at Chalkewadi." },
      { name: "Mayani Bird Sanctuary", blurb: "Spot flamingos and migratory birds at the serene Mayani Sanctuary." },
      { name: "Vajrai Waterfall", blurb: "Marvel at Vajrai, one of India's tallest perennial waterfalls." },
      { name: "Natraj Mandir", blurb: "Pause for devotion at the peaceful Natraj Mandir near the hills." },
    ],
  },
  {
    slug: "kolhapur",
    name: "Kolhapur",
    metaTitle: `Rent a Cab in Kolhapur with ${BRAND} | ${BRAND}`,
    metaDescription: `Discover Kolhapur's temples, palaces, and heritage with ${BRAND}. Comfortable, reliable cab rentals for every journey.`,
    heroTitle: `Rent a Cab in Kolhapur with ${BRAND}`,
    intro: [
      `Kolhapur comes alive with ${BRAND}. Begin with blessings at the revered Mahalaxmi Temple, then admire the grandeur of the New Palace and the historic Rankala Lake at sunset.`,
      `Famous for its cuisine, wrestling heritage, and craftsmanship, Kolhapur is a city of soul. Our clean cabs and friendly drivers help you experience every flavour and landmark in comfort.`,
      `With ${BRAND}, exploring Kolhapur is effortless. Book your ride today and discover the city's royal charm.`,
    ],
    placesHeading: "Places to visit in Kolhapur with Premium Rental Cabs",
    places: [
      { name: "Mahalaxmi Temple", blurb: "Seek blessings at the ancient and revered Mahalaxmi (Ambabai) Temple." },
      { name: "New Palace", blurb: "Admire the regal architecture and museum of the historic New Palace." },
      { name: "Rankala Lake", blurb: "Relax by the scenic Rankala Lake, perfect for an evening stroll." },
      { name: "Panhala Fort", blurb: "Explore the sprawling Panhala Fort and its tales of Maratha valour." },
      { name: "Jyotiba Temple", blurb: "Climb to the hilltop Jyotiba Temple for devotion and grand views." },
      { name: "Shalini Palace", blurb: "Glimpse old-world elegance at the lakeside Shalini Palace." },
      { name: "Rajaram Lake", blurb: "Enjoy the calm waters and greenery around Rajaram Lake." },
      { name: "Khasbag Maidan", blurb: "Feel Kolhapur's wrestling legacy at the historic Khasbag arena." },
      { name: "Town Hall Museum", blurb: "Step into local history at the charming Town Hall Museum." },
    ],
  },
  {
    slug: "mahabaleshwar",
    name: "Mahabaleshwar",
    metaTitle: `Rent a Cab in Mahabaleshwar with ${BRAND} | ${BRAND}`,
    metaDescription: `Escape to the hills of Mahabaleshwar with ${BRAND}. Reliable cab rentals for viewpoints, lakes, and scenic getaways.`,
    heroTitle: `Rent a Cab in Mahabaleshwar with ${BRAND}`,
    intro: [
      `Mahabaleshwar is pure mountain magic with ${BRAND}. Chase sunrises at Wilson Point, gaze over the valleys from Arthur's Seat, and boat across the serene Venna Lake surrounded by strawberry farms.`,
      `This beloved hill station offers misty viewpoints, old temples, and fresh mountain air at every turn. Our well-maintained cabs and careful drivers make the winding roads a pleasure rather than a worry.`,
      `With ${BRAND}, every Mahabaleshwar escape is comfortable and carefree. Book your ride today and breathe in the hills.`,
    ],
    placesHeading: "Places to visit in Mahabaleshwar with Premium Rental Cabs",
    places: [
      { name: "Arthur's Seat", blurb: "Stand at Arthur's Seat and gaze over dramatic valleys and cliffs." },
      { name: "Venna Lake", blurb: "Boat across the tranquil Venna Lake amid lush green surroundings." },
      { name: "Wilson Point", blurb: "Catch a glorious sunrise from Wilson Point, the highest in the hills." },
      { name: "Mapro Garden", blurb: "Savour fresh strawberries and treats at the popular Mapro Garden." },
      { name: "Pratapgad Fort", blurb: "Relive Maratha history at the mighty hilltop Pratapgad Fort." },
      { name: "Elephant's Head Point", blurb: "Admire the iconic cliff shaped like an elephant's head and trunk." },
      { name: "Lingmala Waterfall", blurb: "Feel the mist of the cascading Lingmala Waterfall in full flow." },
      { name: "Lodwick Point", blurb: "Take in panoramic valley vistas from peaceful Lodwick Point." },
      { name: "Panchgani", blurb: "Visit nearby Panchgani for tabletop views and cool mountain breezes." },
    ],
  },
  {
    slug: "ratnagiri",
    name: "Ratnagiri",
    metaTitle: `Rent a Cab in Ratnagiri with ${BRAND} | ${BRAND}`,
    metaDescription: `Discover Ratnagiri's beaches, forts, and Konkan charm with ${BRAND}. Comfortable cab rentals for coastal getaways.`,
    heroTitle: `Rent a Cab in Ratnagiri with ${BRAND}`,
    intro: [
      `The Konkan coast beckons with ${BRAND}. Walk the golden sands of Ganpatipule, explore the seaside Ratnadurg Fort, and taste the world-famous Alphonso mangoes in their homeland.`,
      `Ratnagiri blends pristine beaches, historic landmarks, and warm coastal hospitality. Our comfortable cabs and local drivers make every stretch of the journey relaxed and scenic.`,
      `With ${BRAND}, exploring Ratnagiri is a breeze. Book your ride today and let the sea air guide you.`,
    ],
    placesHeading: "Places to visit in Ratnagiri with Premium Rental Cabs",
    places: [
      { name: "Ganpatipule Beach", blurb: "Relax on the golden sands of Ganpatipule beside its seaside temple." },
      { name: "Ratnadurg Fort", blurb: "Explore the horseshoe-shaped Ratnadurg Fort overlooking the sea." },
      { name: "Thibaw Palace", blurb: "Step into history at the elegant Thibaw Palace and its museum." },
      { name: "Bhatye Beach", blurb: "Unwind on the calm, palm-lined shores of Bhatye Beach." },
      { name: "Jaigad Fort", blurb: "Visit the coastal Jaigad Fort guarding the Shastri river mouth." },
      { name: "Aare Ware Beaches", blurb: "Drive the scenic coastal road between the twin Aare-Ware beaches." },
      { name: "Pawas", blurb: "Find serenity at the spiritual retreat of Pawas near Ratnagiri." },
      { name: "Mandavi Beach", blurb: "Enjoy the black sands and quiet of charming Mandavi Beach." },
      { name: "Velneshwar", blurb: "Discover the peaceful temple-town beach of Velneshwar." },
    ],
  },
  {
    slug: "shirdi",
    name: "Shirdi",
    metaTitle: `Rent a Cab in Shirdi with ${BRAND} | ${BRAND}`,
    metaDescription: `Plan a comfortable pilgrimage to Shirdi with ${BRAND}. Reliable cab rentals for the Sai Baba temple and nearby shrines.`,
    heroTitle: `Rent a Cab in Shirdi with ${BRAND}`,
    intro: [
      `A peaceful pilgrimage to Shirdi awaits with ${BRAND}. Begin at the revered Sai Baba Samadhi Mandir, visit Dwarkamai and Chavadi, and feel the calm devotion that fills the town.`,
      `Shirdi welcomes millions of devotees every year, and getting around should be the easy part. Our clean cabs and courteous drivers ensure a smooth, restful journey for you and your family.`,
      `With ${BRAND}, your visit to Shirdi is comfortable and worry-free. Book your ride today and travel with peace of mind.`,
    ],
    placesHeading: "Places to visit in Shirdi with Premium Rental Cabs",
    places: [
      { name: "Sai Baba Samadhi Mandir", blurb: "Seek blessings at the sacred shrine of Shri Sai Baba." },
      { name: "Dwarkamai", blurb: "Visit Dwarkamai, the mosque where Sai Baba spent his days." },
      { name: "Chavadi", blurb: "Walk to Chavadi, a place close to Sai Baba's daily life." },
      { name: "Shani Shingnapur", blurb: "Take a short trip to the famous Shani Shingnapur temple." },
      { name: "Khandoba Mandir", blurb: "Pause for devotion at the historic hilltop Khandoba Mandir." },
      { name: "Lendi Baug", blurb: "Find quiet greenery at the peaceful garden of Lendi Baug." },
      { name: "Gurusthan", blurb: "Visit Gurusthan, where Sai Baba was first seen as a young ascetic." },
      { name: "Sai Heritage Village", blurb: "Explore the life and times of Sai Baba at the Heritage Village." },
      { name: "Wet N Joy Water Park", blurb: "Enjoy a fun family break at the nearby Wet N Joy Water Park." },
    ],
  },
  {
    slug: "sambhajinagar",
    name: "Sambhajinagar",
    metaTitle: `Rent a Cab in Sambhajinagar with ${BRAND} | ${BRAND}`,
    metaDescription: `Explore the heritage of Sambhajinagar (Aurangabad) with ${BRAND}. Comfortable cab rentals for caves, forts, and monuments.`,
    heroTitle: `Rent a Cab in Sambhajinagar with ${BRAND}`,
    intro: [
      `The historic city of Sambhajinagar opens up with ${BRAND}. Marvel at the UNESCO World Heritage Ajanta and Ellora Caves, admire the Bibi Ka Maqbara, and step back in time at Daulatabad Fort.`,
      `Rich in art, architecture, and history, Sambhajinagar rewards curious travellers at every turn. Our comfortable cabs and knowledgeable drivers make sightseeing easy and relaxed.`,
      `With ${BRAND}, discovering Sambhajinagar is effortless. Book your ride today and walk through living history.`,
    ],
    placesHeading: "Places to visit in Sambhajinagar with Premium Rental Cabs",
    places: [
      { name: "Ajanta Caves", blurb: "Witness the breathtaking Buddhist art of the UNESCO Ajanta Caves." },
      { name: "Ellora Caves", blurb: "Stand in awe before the rock-cut wonders of the Ellora Caves." },
      { name: "Bibi Ka Maqbara", blurb: "Admire the 'Taj of the Deccan', the elegant Bibi Ka Maqbara." },
      { name: "Daulatabad Fort", blurb: "Climb the formidable Daulatabad Fort with its clever defences." },
      { name: "Grishneshwar Temple", blurb: "Seek blessings at the Grishneshwar Jyotirlinga near Ellora." },
      { name: "Panchakki", blurb: "See the ingenious medieval water mill at historic Panchakki." },
      { name: "Aurangabad Caves", blurb: "Explore the serene rock-cut Aurangabad Caves above the city." },
      { name: "Salim Ali Lake", blurb: "Spot birds and unwind at the tranquil Salim Ali Lake." },
      { name: "Siddharth Garden", blurb: "Relax with family at the green Siddharth Garden and zoo." },
    ],
  },
];

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);
export const citySlugs = cities.map((c) => c.slug);
