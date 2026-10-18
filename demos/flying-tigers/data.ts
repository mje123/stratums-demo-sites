// Every fact here comes from flytigers.net (home, programs, fleet, FAQ, staff pages).
// Photos are Flying Tigers' own, served from their existing Wix media CDN.

export const contact = {
  name: "Flying Tigers Flight School",
  street: "12711 Blume Avenue",
  city: "Houston, TX 77034",
  phone: "281-484-8000",
  tel: "tel:+12814848000",
  email: "info@flytigers.net",
  mailto: (subject: string) => `mailto:info@flytigers.net?subject=${encodeURIComponent(subject)}`,
  maps: "https://www.google.com/maps/search/?api=1&query=12711+Blume+Ave+Houston+TX+77034",
  instagram: "https://www.instagram.com/goflyingtigers",
  facebook: "https://www.facebook.com/goflyingtigers",
  schedule: "https://app.flightschedulepro.com/Account/Login",
};

/** Resized, auto-format (AVIF/WebP) image from the school's Wix media library. */
export function wix(id: string, w: number, h: number, crop = "") {
  return `https://static.wixstatic.com/media/${id}/v1/${crop}fill/w_${w},h_${h},al_c,q_80,enc_auto/photo.jpg`;
}

export const img = {
  sunset: "fb5b57_3e1f7da69c114b7aba87bb17d57be84b~mv2.png",
  ellington: "8c9d02_2a63e99551e34c4cb2a426ff1a4c7c77~mv2.jpg",
  studentCheetah: "8c9d02_a4a754ec96134b15a859f9451ef806ce~mv2.jpg",
  glassCockpit: "8c9d02_3963bb33033e4005b198e51d6523598d~mv2.jpg",
  cessnaHangar: "8c9d02_2e503ff7d7b44a8391675905a15d4d3f~mv2.jpg",
  cessnaTaa: "fb5b57_9d04e46a72654d06ae7aa4af657109fd~mv2.jpg",
  cessnaRamp: "8c9d02_059462b63c954b08bfbfb3d6c13b7cf1~mv2.png",
  cheetah: "fb5b57_e3d624bf371b49cbaa18807dbd7ebaf0~mv2.jpg",
  cheetah2: "fb5b57_3c7a019cc78041aa944e7f1cc2309f8b~mv2.jpg",
  tiger: "8c9d02_0d87f3a544194e70a856db0a6b0bc3bd~mv2.jpg",
  flightDesign: "8c9d02_70fe3e79fe2d4d778e554feca695da80~mv2.jpg",
  instructor: "8c9d02_ca8b4e8adf994d348eb2a99c3249bbbc~mv2.png",
  team: "67a14f_2a2e7c2588e14a9c851c87b90f5c5f69~mv2.jpeg",
};

export type Program = {
  code: string;
  title: string;
  tagline: string;
  body: string;
  ground: string;
  flight: string;
  estimate: string;
  image: string;
  focus?: string;
};

export const programs: Program[] = [
  {
    code: "PPL",
    title: "Private Pilot",
    tagline: "Your first step in learning to fly",
    body: "Our instructors lead you from your first flight, through your first solo, and beyond. Includes books and materials plus written and flight tests.",
    ground: "35 hrs ground school",
    flight: "35 hrs flight time",
    estimate: "Est. $20,000–$22,000",
    image: img.cessnaHangar,
  },
  {
    code: "IR",
    title: "Instrument Rating",
    tagline: "Fly solely by reference to instruments",
    body: "One of the most valuable ratings you can add to your certificate. Fun, challenging, and a must-have for commercial flying.",
    ground: "30 hrs ground school",
    flight: "35 hrs flight time",
    estimate: "Est. $11,000–$14,000",
    image: img.glassCockpit,
    focus: "50% 40%",
  },
  {
    code: "CPL",
    title: "Commercial Pilot",
    tagline: "Earn the ability to fly for compensation",
    body: "Fly at a higher standard. Training that sharpens every skill you have and prepares you for flying as a profession.",
    ground: "35 hrs ground school",
    flight: "120 hrs flight time",
    estimate: "Est. $30,000+",
    image: img.cheetah2,
  },
  {
    code: "CFI",
    title: "Flight Instructor",
    tagline: "Train the pilots of tomorrow",
    body: "Whether you're considering a career change or improving your own skills, everything you need to become a successful, skillful instructor.",
    ground: "40 hrs ground school",
    flight: "25 hrs flight time",
    estimate: "Est. $8,000+",
    image: img.instructor,
    focus: "50% 25%",
  },
  {
    code: "CFII",
    title: "Instrument Instructor",
    tagline: "Teach a wider range of students",
    body: "Add instrument instruction to your CFI. Must be a CFI and instrument proficient to begin.",
    ground: "10 hrs ground school",
    flight: "6 hrs flight time",
    estimate: "From $2,900",
    image: img.cessnaTaa,
  },
];

export const fleet = [
  {
    make: "Cessna",
    model: "172",
    note: "The classic high-wing trainer. Our 172s include a G600 glass-panel Technically Advanced Aircraft.",
    image: img.cessnaRamp,
  },
  {
    make: "Grumman",
    model: "Cheetah",
    note: "Low-wing Grumman with a sliding canopy, flown across our training programs.",
    image: img.cheetah,
  },
  {
    make: "Grumman",
    model: "Tiger",
    note: "The O-360-powered sibling of the Cheetah, equipped with Garmin G5 and GNS 430W avionics.",
    image: img.tiger,
    crop: "crop/x_0,y_0,w_1200,h_785/", // trims a photo credit bar
  },
  {
    make: "Flight Design",
    model: "Light Sport",
    note: "Rotax-powered with a Dynon SkyView display and autopilot.",
    image: img.flightDesign,
  },
];

export const avionics = ["Garmin G600", "GNS 530W", "GNS 430W", "Garmin G5", "Dynon SkyView", "Lycoming O-320 & O-360"];

export const path = [
  { step: "Discovery Flight", detail: "Take the controls with an instructor and see if flying is for you." },
  { step: "Private Pilot", detail: "Solo from age 16, checkride from 17. Fly yourself, friends and family." },
  { step: "Instrument", detail: "Fly through clouds and weather by reference to instruments." },
  { step: "Commercial", detail: "Raise your standard and earn the right to fly for compensation." },
  { step: "CFI & CFII", detail: "Teach others, build hours, and pass on what you've learned." },
];

// Milestones as celebrated on @goflyingtigers and shown on the current site.
export const milestones = [
  { kind: "CFII", name: "Eric Alcantar", line: "Flying Tigers' newest CFII" },
  { kind: "CFI", name: "Reese Rothermel", line: "Aviation's newest CFI" },
  { kind: "CFI", name: "Gabriel Massie", line: "The world's newest CFI" },
  { kind: "Commercial", name: "Christopher Stelly", line: "Our newest commercial pilot" },
  { kind: "Commercial", name: "Bryan Meyer", line: "Commercial Pilot checkride complete" },
  { kind: "Instrument", name: "Mark Ruiz", line: "Passed his 141 Instrument checkride" },
  { kind: "Instrument", name: "John Crow", line: "Our newest instrument-rated pilot" },
  { kind: "Instrument", name: "Hayes Hamilton", line: "Instrument rating. Now onto commercial" },
  { kind: "Private", name: "Maya Whitlow", line: "Clear skies and tailwinds" },
  { kind: "Private", name: "Collin Grebel", line: "Passed his Part 61 PPL checkride" },
  { kind: "First Solo", name: "Brennan Gukhool", line: "Three beautiful laps in the pattern" },
  { kind: "First Solo", name: "Ellie", line: "First solo in the book" },
];

export const instructors = [
  "Dan Randolph — Chief Pilot",
  "Zach Smith — CFI, CFII",
  "Nathan Kunkle — CFI, CFII",
  "Ethan Mattison — CFI, CFII",
  "Marianne Cowan — CFI, CFII",
  "Brett Pinfold — CFI, CFII",
  "Nathan Watters — CFI, CFII",
  "Andrew Keller — CFI",
];
