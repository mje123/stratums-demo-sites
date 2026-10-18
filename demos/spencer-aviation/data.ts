// Every fact here comes from flyspenceraviation.com (home, about, testimonials, training, ground school, scheduling, costs).
// Photos and award badges are Spencer Aviation's own, copied into /public/spencer-aviation.

export const contact = {
  email: "spenceraviationinfo@gmail.com",
  mailto: (subject: string) => `mailto:spenceraviationinfo@gmail.com?subject=${encodeURIComponent(subject)}`,
  schedule: "http://app.flightschedulepro.com/Account/Login/12687",
};

export const asset = (name: string) => `/spencer-aviation/${name}.jpg`;

export const locations = [
  {
    name: "Spencer Aviation Delaware",
    airport: "Delaware Municipal Airport",
    detail: "Inside the Jetstream Corporate Center on the northeast side of the airport. Park in the general airport lot and walk through the pedestrian gate.",
    area: "Southwest of Delaware, just north of Powell, Lewis Center, Worthington, Dublin and Westerville.",
    city: "Delaware, OH 43015",
    maps: "https://www.google.com/maps/search/?api=1&query=Jetstream+Corporate+Center+Delaware+Municipal+Airport+Delaware+OH",
  },
  {
    name: "Spencer Aviation Union County",
    airport: "Union County Airport",
    detail: "Inside the SkyVista Aviation building, on the southeast side of Marysville, a short drive off Route 33.",
    area: "760 Clymer Rd",
    city: "Marysville, OH 43040",
    maps: "https://www.google.com/maps/search/?api=1&query=760+Clymer+Rd+Marysville+OH+43040",
  },
];

export const awards = [
  { year: "2023", title: "Distinguished Flight School", image: "award-2023" },
  { year: "2021", title: "Flight Training Experience Survey", image: "award-2021" },
  { year: "2019", title: "Best Flight School, Great Lakes Region", image: "award-2019" },
  { year: "2018", title: "Distinguished Flight School", image: "award-2018" },
  { year: "2017", title: "Flight Training Experience Survey", image: "award-2017" },
  { year: "2016", title: "Honor Roll", image: "award-2016" },
  { year: "2014", title: "Honor Roll", image: "award-2014" },
  { year: "2013", title: "Honor Roll", image: "award-2013" },
  { year: "2012", title: "Honor Roll · #2 of top 50 in the U.S.", image: "award-2012" },
];

export const goals = [
  ["Keep flying fun", "Exciting and challenging, every single lesson."],
  ["A place to hang out", "A comfortable atmosphere where pilots want to spend time."],
  ["Aircraft done right", "Reasonable costs, maintained mechanically and cosmetically."],
  ["Gold Seal instruction", "Instructors whose main goal is your training and your success."],
  ["Instructors held to a standard", "Regular check flights for every flight instructor."],
  ["Syllabus-driven", "Written syllabus so you always know your standards, progress and next goals."],
];

export const programs = [
  { code: "PPL", title: "Private Pilot", body: "Choose from a wide variety of aircraft makes and models, with syllabus-based training and objective progress checks along the way." },
  { code: "IR", title: "Instrument", body: "Instrument ground schools, syllabus-based training, Redbird simulator time and a variety of aircraft for instrument work." },
  { code: "CPL", title: "Commercial", body: "Complex and commercial training in the Piper Arrow IV, building toward a career as a professional pilot." },
  { code: "CFI", title: "Flight Instructor", body: "Learn to teach from a team that requires regular check flights of its own instructors." },
];

export const extras = [
  "Designated examiner on staff for flight tests",
  "Medical exams at our facility",
  "Written exams on site",
  "Pilot financing options",
  "Online scheduling",
  "Training 7 days a week, year-round",
];

export const fleet = [
  { name: "Diamond DA20-C1 Eclipse", count: "×2", note: "Composite trainer with Garmin 430WAAS, chosen as a trainer for the U.S. Air Force Academy and Naval Academy.", image: "da20" },
  { name: "Cessna 172 Skyhawk", count: "×3", note: "The industry standard for professional flight training for decades.", image: "c172" },
  { name: "Piper Archer II & Arrow IV", count: "×2", note: "Garmin 430WAAS, Garmin G5 and L-3 NGT-9000 ADS-B. Ideal for complex, instrument, commercial and CFI training.", image: "archer" },
  { name: "Cessna 150", count: "", note: "Two nav/coms and Garmin GPS.", image: "c150" },
  { name: "Redbird TD-2 Simulator", count: "", note: "G1000 and standard instrument options.", image: "redbird" },
];

export const instructorCreds = [
  "Gold Seal Flight Instructor with Basic and Advanced Ground Instructor certificates",
  "Over 30 years of flight instruction",
  "35+ years flying everything from Piper Cubs to P-51 Mustangs to corporate aircraft",
  "Airframe & Powerplant technician",
  "Two college degrees in aviation",
];

export const studentQuotes = [
  "I was up in the sky within 30 minutes of arriving and addicted shortly after.",
  "This is the second flight school I've been able to experience and they are worlds apart.",
  "I felt welcomed into your community of aspiring aviators and became quickly impressed with the level of knowledge and professionalism shown.",
  "They consistently provide outstanding customer service, expert instruction, and good value to their students.",
  "Spencer Aviation continually brings in flight instructors that are there for not only building their own hours, but have a genuine interest in teaching and coaching others how to fly, no matter what level.",
  "Great facilities, airplanes and instructors. The Owner genuinely cares about the customers.",
];

export const groundQuotes = [
  "The in-person, classroom experience, with the ability to ask questions and receive clarification made the learning experience much more effective than just reading books or watching videos. Plus it was much more fun.",
  "Loved every minute of class. Very good pace. Subjects well explained.",
  "10/10 would attend ground school again.",
];

export const noFees = ["No initiation fee", "No monthly fees", "No airport tax", "Fuel included in rental", "Pay as you go, per lesson", "All aircraft hangared & preheated"];
