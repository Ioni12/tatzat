// All page content lives here. Items marked EXAMPLE are placeholders
// to replace once the operator confirms the real details.

export const brand = {
  name: "Tatzat Waterfalls Tour",
  short: "Tatzat",
  tagline: "Explore · Discover · Enjoy",
  operator: "Saranda Coast Tours",
  location: "Saranda, Albania",
};

export const contact = {
  phone: "+355 69 831 0833",
  tel: "tel:+355698310833",
  whatsapp: "https://wa.me/355698310833",
};

export const nav = [
  { label: "Tour", href: "#highlights" },
  { label: "Gallery", href: "#gallery" },
  { label: "Details", href: "#details" },
  { label: "Book", href: "#booking" },
];

// icon = lucide-react icon name, mapped in the component
export const highlights = [
  {
    icon: "Footprints",
    title: "Guided walking tour",
    text: "A local guide leads the way to the waterfall.",
  },
  {
    icon: "Waves",
    title: "Stunning waterfalls",
    text: "Cold, clear water falling through green forest.",
  },
  {
    icon: "Camera",
    title: "Photo spots",
    text: "Stops chosen for the best views and pictures.",
  },
  {
    icon: "Users",
    title: "Small groups",
    text: "Few people per tour, so it stays calm and personal.",
  },
  {
    icon: "Leaf",
    title: "Nature & relaxation",
    text: "Take your time, breathe, and enjoy the mountains.",
  },
];

export const about = {
  title: "A hidden waterfall below Mali i Gjerë",
  text: [
    "Tatzat waterfall sits at the foot of Mali i Gjerë (Wide Mountain), a short drive from Saranda.",
    "The walk in is short and runs beside a loud mountain river. You end up in front of the falls, surrounded by forest.",
  ],
  stats: [
    { value: "~15 min", label: "Walk to the falls" },
    { value: "Small", label: "Group size" },
    { value: "Easy", label: "Difficulty" }, // EXAMPLE
  ],
};

// EXAMPLE values: confirm with the operator
export const details = [
  { icon: "Banknote", label: "Price", value: "€30 per person (example)" },
  { icon: "Clock", label: "Duration", value: "About 5 hours (example)" },
  { icon: "MapPin", label: "Pickup", value: "Saranda center (example)" },
  {
    icon: "CalendarClock",
    label: "Departure",
    value: "Daily, 09:00 (example)",
  },
  {
    icon: "Languages",
    label: "Languages",
    value: "English, Albanian (example)",
  },
];

export const included = [
  "Transport in a minibus",
  "Local guide",
  "Waterfall entry (example)",
];
export const bring = [
  "Water shoes or sturdy sandals",
  "Swimwear and towel",
  "Sunscreen and water",
  "Phone or camera",
];

export const steps = [
  {
    title: "Book",
    text: "Call or message us on WhatsApp with your date and group size.",
  },
  {
    title: "Get picked up",
    text: "We collect you in our van at the agreed meeting point.",
  },
  {
    title: "Walk and enjoy",
    text: "Follow the guide to the falls, swim, take photos, relax.",
  },
];

// Photos live in public/images/. `fallback` is the local illustration shown
// if a photo fails to load. To swap a photo, replace the file (same name)
// or change its src.
export const photos = {
  hero: "/images/waterfall3.jpg",
  about: "/images/waterfall2.jpg",
};

export const gallery = [
  {
    alt: "Waterfall in the forest",
    src: "/images/waterfall.jpg",
    fallback: "/images/waterfall.svg",
  },
  {
    alt: "Cascade over the rocks",
    src: "/images/waterfall3.jpg",
    fallback: "/images/pool.svg",
  },
  {
    alt: "Waterfall and stream",
    src: "/images/hero.jpg",
    fallback: "/images/mountain.svg",
  },
  {
    alt: "Walking trail through the forest",
    src: "/images/trail.jpg",
    fallback: "/images/trail.svg",
  },
  {
    alt: "Hikers on the trail",
    src: "/images/group.jpg",
    fallback: "/images/group.svg",
  },
  { alt: "The tour van", src: "/images/van.jpg", fallback: "/images/van.svg" },
];

// Handles come from the flyer. I could not find the exact profile URLs online,
// so TikTok and Facebook use search links. Replace each href with the real
// profile link once you open the account (copy it from the address bar).
export const socials = [
  {
    name: "Instagram",
    handle: "SarandaCoast.Tour",
    href: "https://www.instagram.com/sarandacoast.tour/",
  },
  {
    name: "TikTok",
    handle: "Saranda Coast Tours",
    href: "https://www.tiktok.com/search?q=Saranda%20Coast%20Tours",
  },
  {
    name: "Facebook",
    handle: "Saranda Coast Realty & Tours",
    href: "https://www.facebook.com/search/groups?q=Saranda%20Coast%20Realty%20%26%20Tours",
  },
];

// EXAMPLE meeting point: replace `query` with the operator's real pickup spot
// (a place name or "lat,lng") and update `label`.
export const meeting = {
  label: "Saranda center (example)",
  note: "Pickup is in the town center. The exact spot is confirmed when you book.",
  query: "Sarandë, Albania",
};
