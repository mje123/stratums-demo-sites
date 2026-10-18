// Every fact here comes from flydriftlessaero.com (home, about, fleet/pricing, contact, events pages).
// Photos are Driftless Aero's own, served from their existing Wix media CDN.

export const contact = {
  phone: "608.723.8799",
  tel: "tel:+16087238799",
  sms: "sms:+16087238799",
  email: "driftlessaero@gmail.com",
  mailto: (subject: string) => `mailto:driftlessaero@gmail.com?subject=${encodeURIComponent(subject)}`,
  airport: "Iowa County Airport (KMRJ)",
  street: "3151 State Rd 39, Hangar C",
  city: "Mineral Point, WI 53565",
  maps: "https://www.google.com/maps/search/?api=1&query=Iowa+County+Airport+3151+State+Rd+39+Mineral+Point+WI+53565",
  facebook: "https://www.facebook.com/p/Driftless-Aero-61556527635138/",
  instagram: "https://www.instagram.com/driftlessaero/",
};

export function wix(id: string, w: number, h: number) {
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_80,enc_auto/photo.jpg`;
}

export const img = {
  sunset: "8c5bc3_d48bd2b2ac464c1e9c1ee968cb893235~mv2.jpg",
  cockpitView: "8c5bc3_dfcfe2f25f5d4b45833e0e4109bbb689~mv2.png",
  pilotSmile: "8c5bc3_4450d6e26c1f48cf821e8c7c9043a695~mv2.png",
  studentsGroup: "8c5bc3_a8e4cbf5f502418eb6351d6eeb848d84~mv2.jpg",
  goldenPair: "8c5bc3_cf66c788e7b341be8de4c76cfd4a625d~mv2.jpg",
  checkride: "8c5bc3_87954d626b8644b5b49201551430b322~mv2.jpeg",
  duo: "8c5bc3_d0afbc5815ad48f887d8d843955055c8~mv2.jpg",
  bfr: "8c5bc3_b77d422aeba24769a6b53622d103193a~mv2.jpg",
  couple: "8c5bc3_38e51921130a40aa96bec93feaca8181~mv2.png",
  lowWing: "8c5bc3_a6334a6616f14f64bb9a2ebc9e743df7~mv2.jpg",
  tailwheel: "8c5bc3_51fda1c6536f4b79b65085d617587294~mv2.jpg",
  orangeShirt: "8c5bc3_18b92194f86c4726a4ce720ed5d1cec7~mv2.jpg",
  hangar: "8c5bc3_1e3c979884a54e338ec5aa146ed0c665~mv2.png",
  parade: "8c5bc3_7841f3487ee1453884402e5fc27ca369~mv2.jpg",
  diagram: "8c5bc3_c45a7d8f60994bd091d72bfc89db2696~mv2.jpg",
  sign: "8c5bc3_b2d80bd03f764e9c8c0b8d93b41f1b38~mv2.jpg",
  n2608jHangar: "8c5bc3_7f545ab695db466282977cfbe444ab61~mv2.jpg",
  interior: "8c5bc3_5d203588da944d6f9295c640272202b8~mv2.png",
  panel: "8c5bc3_87ebab5aad9a40e5ad2327ebfcbc4cb2~mv2.png",
  school: "8c5bc3_11386a4c7b154a2d9edee227fdb36c7a~mv2.jpeg",
  hangarEvent: "8c5bc3_9dde0eac6e6d4919aef0e19a5134c89c~mv2.png",
  carShow: "8c5bc3_6fb1a2a5df6645329b920dd341aec7c9~mv2.png",
  booth: "8c5bc3_aeb2d2eb4d2b48559f7e415bfad7bbcc~mv2.jpg",
};

export const rates = [
  { price: "$80", unit: "flight", label: "Discovery flight", note: "Introductory flight lesson" },
  { price: "$115", unit: "/hr wet", label: "Aircraft rental", note: "Cessna 150G, plus tax" },
  { price: "$50", unit: "/hr", label: "Flight & ground instruction", note: "In Driftless Aero aircraft" },
  { price: "$6–8k", unit: "typical", label: "Private Pilot", note: "Typical cost at Driftless Aero" },
];

export const programs = [
  {
    code: "DISC",
    title: "Discovery & Scenic Flights",
    body: "Experience the thrill of flight without the commitment. Perfect for first-timers and aviation enthusiasts. Flights start at $80.",
    image: img.pilotSmile,
  },
  {
    code: "LSA · PPL",
    title: "Light Sport & Private Pilot",
    body: "The foundation of your aviation journey: comprehensive ground school and flight instruction to earn your Light Sport or Private Pilot certificate.",
    image: img.checkride,
  },
  {
    code: "IFR",
    title: "Instrument Training",
    body: "Log simulated instrument time and master flying in instrument conditions, at some of the lowest rates around.",
    image: img.cockpitView,
  },
  {
    code: "CPL",
    title: "Commercial Pilot",
    body: "Master complex maneuvers and the FARs to make the transition to professional flying.",
    image: img.lowWing,
  },
  {
    code: "CFI · CFII",
    title: "Flight Instructor",
    body: "The student becomes the teacher. A simple path through one of the hardest certificates, so you can teach the next generation.",
    image: img.duo,
  },
];

export const services = [
  ["Biennial Flight Reviews", "Handcrafted around your requests by knowledgeable, caring instructors."],
  ["Pinch Hitter Safety Course", "Give your passengers the confidence and competence to help if the unthinkable happens."],
  ["Insurance Checkouts", "A staff with 7,000+ hours in 40+ aircraft types can meet and exceed your insurer's requirements."],
  ["Advanced Endorsements", "High performance, tailwheel, complex, high altitude and more."],
  ["Envelope Expansion", "Current but not confident? A step-by-step program to widen your personal envelope."],
  ["Aircraft & Hangar Sales", "Help finding the right airplane or hangar, or guidance when it's time to sell."],
];

export const instruction = [
  ["Discovery flight / introductory lesson", "$80"],
  ["Instruction in Driftless Aero aircraft", "$50/hr"],
  ["Instruction in your own aircraft", "$70/hr"],
  ["Tailwheel instruction", "$80/hr"],
  ["Cessna 150G rental, wet", "$115/hr + tax"],
];

export const requirements = [
  {
    title: "Private Pilot Certificate",
    cost: "Typical cost at Driftless Aero: $6,000–$8,000",
    items: ["At least 17 years old (16 to solo)", "40 hours of flight time", "Multiple-choice written exam (70% to pass)", "Oral exam", "Flying exam"],
  },
  {
    title: "Instrument Rating",
    cost: "Simulated IFR time at some of the lowest rates around",
    items: ["Private Pilot certificate or higher", "50 hours of PIC cross-country time", "40 hours of actual or simulated IFR", "We are not currently equipped for actual IFR"],
  },
  {
    title: "Commercial Pilot Certificate",
    cost: "Typical cost varies with prior experience",
    items: ["At least 18 years old", "250 hours of flight time", "Multiple-choice written exam (70% to pass)", "Oral exam", "Flying exam"],
  },
];

export const specs = [
  ["Engine", "Continental O-200, 100 hp"],
  ["Cruise", "90 knots"],
  ["Useful load", "510 lb"],
  ["Navigation", "Garmin Aera 660"],
  ["Traffic & weather", "Garmin GDL 50 · ADS-B In/Out · NEXRAD"],
  ["Comfort", "Four-point harnesses with shoulder pads, USB charging, courtesy lighting"],
];

export const team = [
  {
    name: "Dakota Carden",
    role: "Owner · CFI",
    bio: "Originally from Barneveld, Dakota started Driftless Aero in early 2024 after seeing a need for affordable flight training in southwest Wisconsin. An ATP-rated pilot and instructor for over nine years, he still loves the “light bulb” moments. His favorite job? Mowing the grass around the hangar.",
  },
  {
    name: "Britney Boxrucker",
    role: "Chief Flight Instructor · CFI/CFII/MEI",
    bio: "From Cassville, Britney joined in 2024 and set the tone for what quality, personalized training means. She brings airport management and consulting experience, and oversees daily operations.",
  },
  {
    name: "Jeremiah Pinch",
    role: "Flight Instructor · CFI/CFII",
    bio: "From Madison, Jeremiah joined in early 2026 with a background in customer service and aircraft handling, a commercial certificate, and countless hours in Cessna and Piper aircraft. He handles daily flight instruction.",
  },
];

export const testimonials = [
  {
    quote: "I was able to earn my Private Pilot License while working a full-time job, and I did it for far less than I ever expected.",
    more: "I am 47 years old, and I can honestly say they proved you’re never too late to learn something new.",
    name: "Brodie D.",
    tag: "Private Pilot",
  },
  {
    quote: "I have had many different instructors for BFRs over the years. Britney rises above them all — a genuine nice person!",
    more: "In addition, Iowa County Airport is ideal for instruction.",
    name: "Dennis S.",
    tag: "Biennial Flight Review",
  },
  {
    quote: "I’ve been learning to fly with them in their Cessna 150 at a pace that actually fits my budget and schedule, which has been a game-changer.",
    more: "Their lounge and classroom right in the hangar make even the “not-so-fun” parts feel comfortable and welcoming.",
    name: "Jordan C.",
    tag: "Student Pilot",
  },
  {
    quote: "It was a fun, unique experience for my hubby… and the best part — he actually got to fly the plane for most of the flight.",
    more: "If you’re looking for a gift that is out of the box and full of an adventure, I would highly recommend!",
    name: "Dawn M.",
    tag: "Gift Discovery Flight",
  },
];

export const community = [
  { image: img.school, caption: "Aviation career visits at local schools" },
  { image: img.parade, caption: "Hometown parades" },
  { image: img.hangarEvent, caption: "Events in the hangar" },
  { image: img.carShow, caption: "Car shows and runway runs" },
];
