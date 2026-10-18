// Every fact here comes from venturenorthaviation.com (home, course pages, storage, charter, contact).
// Landscape photos are Unsplash (Northwoods mood); the charter photo is Venture North's own.

export const contact = {
  phone: "218-879-6599",
  tel: "tel:+12188796599",
  email: "Staff@VentureNorthAviation.com",
  mailto: (subject: string) => `mailto:Staff@VentureNorthAviation.com?subject=${encodeURIComponent(subject)}`,
  street: "125 Wheaton Road",
  city: "Cloquet, MN 55720",
  unicom: "122.80",
  maps: "https://www.google.com/maps/search/?api=1&query=125+Wheaton+Road+Cloquet+MN+55720",
  facebook: "https://www.facebook.com/venturenorthaviation",
  instagram: "https://www.instagram.com/venturenorthaviation/",
  youtube: "https://www.youtube.com/user/VentureNorthAviation",
  tiktok: "https://www.tiktok.com/@venturenorthaviation",
  finance: "https://finance.aopa.org/flight-training-finance",
};

export type Course = { days: string; unit: string; name: string; cat: string; body: string };

export const courses: Course[] = [
  { days: "10", unit: "days", name: "Instrument Rating", cat: "Instrument", body: "Complete accelerated IFR course with 36 hours of instrument ground instruction and real IFR flying from the very beginning. Checkride with a DPE on day 10." },
  { days: "5", unit: "days", name: "Instrument Finish-Up / IFR Transition", cat: "Instrument", body: "Finish an instrument rating you've already started, or transition into a new avionics platform. Single-pilot, scenario-based." },
  { days: "21", unit: "days", name: "Private Pilot", cat: "Private", body: "An upscale, fully immersive program averaging 45 hours of flight instruction, with written test prep and a DPE checkride on day 21." },
  { days: "5", unit: "days", name: "Private Pilot Finish-Up", cat: "Private", body: "Close out the training you've already started, with a dedicated instructor and unlimited instruction." },
  { days: "5", unit: "days", name: "Commercial Pilot", cat: "Commercial", body: "Focused on single-pilot commercial operations, with the practical test recommendation on day 5." },
  { days: "5", unit: "days", name: "Commercial Multi-Engine Add-On", cat: "Commercial", body: "Add multi-engine privileges to your commercial certificate in one focused week." },
  { days: "5", unit: "days", name: "Single-Engine ATP", cat: "Commercial", body: "Accelerated Airline Transport Pilot training, airplane single-engine land." },
  { days: "90", unit: "days", name: "Professional Pilot Program", cat: "Commercial", body: "Private Pilot + Instrument Rating + Commercial Pilot in a single 90-day program." },
  { days: "5", unit: "days", name: "Initial Flight Instructor (CFI)", cat: "Instructor", body: "A dedicated, immersive CFI program with unlimited flight and ground training, about 12 hours in our Cessna, Piper or Cirrus." },
  { days: "5", unit: "days", name: "Instrument Instructor (CFII)", cat: "Instructor", body: "Add the instrument instructor rating in one week." },
  { days: "10", unit: "days", name: "CFI & CFII Combined", cat: "Instructor", body: "Two weeks: CFI in week one, CFII in week two, with practical test recommendations for both." },
  { days: "3", unit: "days", name: "Seaplane Rating", cat: "Specialty", body: "Single-pilot seaplane operations in a PA-18-160 Super Cub on Wipline floats. Or try the 5-day Wilderness Seaplane Adventure." },
];

export const categories = ["All", "Instrument", "Private", "Commercial", "Instructor", "Specialty"];

export const includes = [
  ["Your own instructor", "A flight instructor exclusively assigned to you for the entire course."],
  ["Unlimited instruction", "Unlimited ground and flight instruction, plus simulator training on instructor courses."],
  ["Training materials", "Course materials included, so you arrive ready and leave prepared."],
  ["Checkride ready", "FAA practical test recommendation built into the final day."],
  ["Your plane or ours", "Train in your own aircraft or our Cessna, Piper and Cirrus fleet."],
  ["Stay & get around", "Hotel and housing available, plus rental vehicle transportation."],
];

export const steps = [
  ["Call or email", "Talk through your goals and pick the course that fits."],
  ["Apply", "We email a one-page application and your course prerequisites."],
  ["Arrive & meet your instructor", "Flight instructor courses typically start on a Monday. Your instructor is yours for the whole course."],
  ["Fly every day", "Unlimited, scenario-based training. Train the way you fly."],
  ["Checkride", "Finish with your practical test recommendation, or a DPE checkride on the 10- and 21-day courses."],
];

export const fleet = [
  ["Piper Archer LX", "PA-28-181", "Garmin G1000 NXi"],
  ["Piper Warrior", "PA-28-151", "Garmin 430 WAAS · G5s · Garmin 375"],
  ["Cirrus SR22 G3", "Perspective", "Garmin Perspective · GPS WAAS"],
  ["Cirrus SR22", "Avidyne", "Avidyne · Garmin 430 WAAS"],
  ["Cessna 172", "CE-172", "Garmin 430 WAAS"],
  ["Piper Super Cub", "PA-18-160", "Wipline 2100 floats"],
];

export const stories = [
  { name: "Malik", from: "Minnesota", what: "5-Day IFR Finish-Up", earned: "Instrument Rating", plane: "Piper" },
  { name: "Ye", from: "California", what: "10-Day Instrument Rating Course", earned: "IFR Rating", plane: "Piper" },
  { name: "Jennifer", from: "California", what: "5-Day CFI Course", earned: "Flight Instructor Certificate", plane: "Cirrus" },
  { name: "Nanette", from: "Texas", what: "10-Day IFR Course", earned: "Instrument Rating", plane: "Piper" },
];

export const services = [
  ["Heated hangar storage", "Singles to jets, as space allows. Monthly single-engine hangar from $179."],
  ["Charter & air rides", "Aircraft charter, air rides and aerial photography. Call for a quote."],
  ["Aircraft consulting & management", "Detailed programs for prospective and current owners."],
  ["Maintenance", "Detailed maintenance programs for your aircraft."],
  ["Fuel", "Jet A and 100LL, with self-serve fuel."],
  ["FAA pilot exams", "Private, Instrument, Commercial and more."],
];

export const facility = ["Conference rooms", "Pilot briefing rooms", "Pilot lounge with recliners & TV", "Private shower", "Rental vehicle transportation", "Aircraft tie-downs"];
