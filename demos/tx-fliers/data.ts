// Gulf Coast Flight Training (txfliers.com): every fact, quote and caption below comes from their site.
// Photo captions mirror the captions on their Student Achievements page.

export const img = (n: string) => `/tx-fliers/${n}.jpg`;

export const contact = {
  name: "Gulf Coast Flight Training",
  phone: "361-737-5102",
  tel: "tel:+13617375102",
  email: "Yvonne@TxFliers.com",
  hours: "9:00 am – 5:00 pm",
  airport: "Ingleside Regional Airport (KTFP)",
  street: "3141 FM 3512",
  city: "Aransas Pass, Texas 78336",
  directions:
    "https://www.google.com/maps/dir//FBO,+Entrance+to+San+Patricio+County+office,+3141+FM3512,+Aransas+Pass,+TX+78336/@27.9137247,-97.2183943,7708m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x86685151dd103775:0xacc8eab2d0dbb0f7!2m2!1d-97.2091717!2d27.913951?entry=ttu",
  embed: "https://maps.google.com/maps?q=3141%20FM%203512%2C%20Aransas%20Pass%2C%20TX%2078336&t=k&z=13&output=embed",
  facebook: "https://www.facebook.com/profile.php?id=61587179531589",
  instagram: "https://www.instagram.com/gulfcoastflighttraining",
  google: "https://maps.app.goo.gl/RN5XpWYjoWYMG8bB6",
  serving: ["Corpus Christi", "Portland", "Padre Island", "Rockport"],
};

export type Program = { key: string; code: string; title: string; kicker: string; body: string; points: string[] };

export const programs: Program[] = [
  {
    key: "discovery",
    code: "DSC",
    title: "Discovery Flight",
    kicker: "Start here",
    body: "Experience being at the controls with an FAA-Certificated Flight Instructor, then talk through how training can fit your goals.",
    points: ["Pre-flight briefing", "A short flight, with you at the controls", "Debrief with tailored feedback", "Typically 30–45 minutes"],
  },
  {
    key: "private",
    code: "PPL",
    title: "Private Pilot",
    kicker: "Your license to fly",
    body: "Earn your FAA Private Pilot certificate with a standardized syllabus, a structured flight training program, and one-on-one instruction from an FAA Certificated Flight Instructor.",
    points: ["Standardized syllabus", "Structured flight training program", "One-on-one instruction", "Carefully structured lesson plans"],
  },
  {
    key: "instrument",
    code: "IFR",
    title: "Instrument Rating",
    kicker: "Fly in more conditions",
    body: "Build your familiarity with the panel. If you want to fly in more conditions, you'll want an Instrument Rating. Get your cross-country flights and plenty of instrument time with Gulf Coast.",
    points: ["Build familiarity with the panel", "Fly in more conditions", "Cross-country flights", "Plenty of instrument time"],
  },
  {
    key: "commercial",
    code: "CPL",
    title: "Commercial Pilot",
    kicker: "Aviation as a career",
    body: "Built on your Private Pilot certificate and a specified number of flight hours. Training typically involves instrument and multi-engine training, the foundation for careers such as flight instructor, charter pilot or airline transport pilot.",
    points: ["Requires a Private Pilot certificate", "Specified flight hours", "Instrument and multi-engine training", "Career paths: CFI, charter, airline"],
  },
];

export const pillars = [
  { title: "Safety", body: "Our commitment to safety in every situation prepares our students to become safer pilots in their own adventures." },
  { title: "Structure", body: "We keep our students on track within each program with carefully structured lesson plans." },
  { title: "Clarity", body: "Gulf Coast teaches complex concepts in a clear and concise manner, fit for all levels of pilot experience." },
  { title: "Passion", body: "We are passionate about aviation and dedicated to providing high-quality flight training to our students." },
];

export const alanCreds = [
  "FAA Certificated Flight Instructor (CFI)",
  "Advanced Ground Instructor (AGI)",
  "Commercial certificate, Instrument rating",
  "Flying privately since 1998",
  "Civil Air Patrol Mission Pilot & Instructor Pilot",
  "FAA Safety Team Representative",
  "AOPA · NAFI · SAFE member",
  "Retired Naval Aircrewman",
];

export type Shot = { src: string; caption: string; kind: "solo" | "private" | "discovery" };

export const gallery: Shot[] = [
  { src: "ryan-h-private", caption: "Ryan H earns his Private Pilot Certificate · Jan 2024", kind: "private" },
  { src: "miel-solo", caption: "1st solo! Congratulations Miel · 12/20/23", kind: "solo" },
  { src: "thad-private", caption: "Thad, our newest Private Pilot · 12/2/23", kind: "private" },
  { src: "discovery-fun", caption: "Having fun on a discovery flight", kind: "discovery" },
  { src: "jim-s-private", caption: "Jim S earns his Private Pilot Certificate · Jan 2024", kind: "private" },
  { src: "solo-sept-2024", caption: "Congratulations! First solo flight", kind: "solo" },
  { src: "dillon", caption: "Dillon says you're never too young or too old to start flying", kind: "discovery" },
  { src: "ronnie-private", caption: "Ronnie achieves a lifelong dream: private pilot", kind: "private" },
  { src: "ryan-h-solo", caption: "Ryan H's first solo · May 2023", kind: "solo" },
  { src: "discovery-joy", caption: "Seeing the joy after a discovery flight never gets old", kind: "discovery" },
  { src: "solo-lsa", caption: "First solo in an LSA · July '23", kind: "solo" },
  { src: "private-mar-2023", caption: "New FAA Private Pilot · March 2023", kind: "private" },
  { src: "monty-solo", caption: "First solo flight · Dec 2021", kind: "solo" },
  { src: "young-pilot", caption: "A very young & bold pilot", kind: "discovery" },
  { src: "first-solo", caption: "First solo!", kind: "solo" },
  { src: "first-flight", caption: "1st flight", kind: "discovery" },
  { src: "solo-time", caption: "Solo time!", kind: "solo" },
];

export type Review = { name: string; headline: string; body: string; tag: string };

export const reviews: Review[] = [
  {
    name: "Ian C",
    tag: "Private Pilot in 3 months",
    headline: "The perfect place to learn to fly",
    body: "As someone who had no aviation experience, choosing a flight school can be an intimidating process. My first call with Yvonne and meeting Alan immediately made me feel comfortable and gave me a clear understanding about the journey from start to finish. I became a Private Pilot in just 3 months and am very grateful to have had Alan as my first instructor.",
  },
  {
    name: "Thad C.",
    tag: "Started at 60",
    headline: "Gulf Coast Flight Training has done a great job teaching me to fly.",
    body: "At 60 years old, I was skeptical about learning to fly. I had no experience, and with Alan's support, direction, and a lot of patience, I am now a private pilot working on my IFR rating. … Alan's training stresses safety above all else, and I confidently flew with my wife without any reservations, the day after receiving my license.",
  },
  {
    name: "Ryan H., Ph.D.",
    tag: "Private Pilot",
    headline: "From the first lesson it was evident Alan has a true passion for flying and aviation.",
    body: "As a new student it is often intimidating taking the controls of an aircraft but Alan created an engaging and enjoyable learning environment in the cockpit and during debriefs. His ability to teach complex concepts in a clear and concise manner puts most nerves at ease which allows for complete immersion in the flight lesson.",
  },
  {
    name: "Ronnie L.",
    tag: "Family, career, own pace",
    headline: "I am truly lucky and fortunate to have Alan as my flight instructor.",
    body: "Alan will allow you to learn and train at your desired pace. This is important for me with a family, busy schedule, and career. Alan has gone out of his way to make sure I received the proper training while becoming a safe and proficient pilot.",
  },
  {
    name: "Robert B.",
    tag: "Army helicopter pilot → ATP",
    headline: "Alan has continued to be very helpful in my growth as a professional ATP pilot.",
    body: "I came to Gulf Coast Flight Training after serving as an Army helicopter pilot for 8 years, and wanted to broaden my experience. … Once I was ready to take my checkride, he was able to find a DPE in a reasonable amount of time and helped me prepare for a successful practical exam.",
  },
  {
    name: "Andrea",
    tag: "Private Pilot",
    headline: "He genuinely cared about my aviation journey.",
    body: "I'm incredibly grateful to Gulf Coast Flight Training for helping me earn my private pilot certificate. Alan is a patient, organized, and knowledgeable instructor. … Also, as a side note, the area around McCampbell-Porter Airport is a beautiful location to learn how to fly.",
  },
  {
    name: "Bill W.",
    tag: "Licensed pilot",
    headline: "Thank you, Alan.",
    body: "Thank you for your patience, wisdom, and knowledge. I could not have chosen a better mentor and instructor to help guide my path to my license. Learning to fly has been a great experience for me. I look forward to many years of adventure and enjoyment in the air.",
  },
];

export const faq: [string, string][] = [
  ["What happens on a discovery flight?", "You'll be at the controls with an FAA-Certificated Flight Instructor. It starts with a pre-flight briefing, then a short flight, then a debrief with tailored feedback on how training can fit your goals."],
  ["How long does a discovery flight take?", "Typically 30–45 minutes."],
  ["What does it cost?", "Pricing isn't posted online. Call 361-737-5102 or email Yvonne@TxFliers.com and Yvonne will walk you through current rates."],
  ["Who will I fly with?", "Alan \"Gator\" O'Martin: an FAA Certificated Flight Instructor and Advanced Ground Instructor with a Commercial certificate and Instrument rating, flying privately since 1998."],
  ["Can I train around a busy schedule?", "Students say yes. In Ronnie L.'s words: \"Alan will allow you to learn and train at your desired pace. This is important for me with a family, busy schedule, and career.\""],
  ["Where do you fly from?", "Ingleside Regional Airport (KTFP), 3141 FM 3512, Aransas Pass, Texas, just outside of Portland and Corpus Christi. We proudly serve Corpus Christi, Portland, Padre Island and Rockport."],
  ["What programs do you offer?", "Discovery flights, Private Pilot, Instrument Rating and Commercial Pilot training."],
  ["When are you open?", "9:00 am to 5:00 pm."],
];

export const toolkit = [
  { name: "Flight Service", what: "File flight plans, pilot briefings", href: "https://www.1800wxbrief.com/" },
  { name: "Aviation Weather", what: "METARs, TAFs, PIREPs, SIGMETs, G-AIRMETs and more", href: "https://aviationweather.gov/" },
  { name: "SkyVector", what: "VFR charts online", href: "https://skyvector.com/" },
  { name: "FAAST & WINGS", what: "FAA Safety, WINGS program, courses and webinars", href: "https://www.faasafety.gov/" },
  { name: "AOPA", what: "Resources from the Aircraft Owners and Pilots Association", href: "https://www.aopa.org/" },
  { name: "FAA IACRA", what: "Airman certification and rating applications (FTN, 8710)", href: "https://iacra.faa.gov/IACRA/Default.aspx" },
];
