// Every fact here comes from suburbanaviation.com (home, about, flight school, maintenance, hangar, sales, contact).
// Photos are Suburban Aviation's own, copied into /public/suburban-aviation.

export const contact = {
  phone: "734.856.6103",
  tel: "tel:+17348566103",
  street: "4383 Section Road",
  city: "Ottawa Lake, MI 49267",
  hours: "8:00 AM – 6:00 PM, 7 days a week",
  hoursNote: "Except holidays",
  maps: "https://www.google.com/maps/search/?api=1&query=4383+Section+Road+Ottawa+Lake+MI+49267",
  schedule: "https://app.flightschedulepro.com/Account/Login?Company=20347",
  instagram: "http://instagram.com/toledosuburban",
  facebook: "https://www.facebook.com/Suburban-Aviation-Toledo-Suburban-Airport-131936363517559/",
  careers: "https://suburbanaviation.com/join-our-team/",
};

export const asset = (name: string) => `/suburban-aviation/${name}.jpg`;

export const services = [
  {
    key: "01",
    title: "Flight School",
    body: "Cessna Flight Training curriculum that makes becoming a pilot understandable and attainable, in Skyhawks with Garmin avionics.",
    image: "ramp",
    href: "#discovery",
  },
  {
    key: "02",
    title: "Maintenance",
    body: "Cessna factory-trained technicians certified on single and multiengine aircraft. Thousands of aircraft serviced since 1984.",
    image: "shop",
    href: "#maintenance",
  },
  {
    key: "03",
    title: "Hangar Storage",
    body: "Secure, fully enclosed hangars on long or short-term rental. Availability changes often, so call for current openings.",
    image: "hangars",
    href: "#airport",
  },
  {
    key: "04",
    title: "Sales & Pilot Shop",
    body: "Aircraft rental, headsets, training kits, charts and supplies, plus Avidyne avionics sales and installation.",
    image: "panel",
    href: "#shop",
  },
];

export const fleet = [
  { tail: "N6364D", type: "Cessna 172 Skyhawk", panel: "Garmin G500 glass cockpit", rate: "$179", unit: "/hr wet", image: "n6364d" },
  { tail: "N75976", type: "Cessna 172 Skyhawk", panel: "Garmin G500 glass cockpit", rate: "$179", unit: "/hr wet", image: "n75976" },
  { tail: "N49527", type: "Cessna 152", panel: "Traditional steam gauges", rate: "Call", unit: "for current rate" },
];

export const path = [
  ["Discovery Flight", "Take the controls of a Skyhawk with a CFI beside you. $99."],
  ["Cessna Flight Training", "Structured, proven curriculum, from first lesson to first solo."],
  ["Private Pilot", "Earn your certificate and fly friends and family across the region."],
  ["Instrument Rating", "Instrument ground school enrollment is available at the pilot shop."],
];

export const airportData = [
  ["Latitude", "41-44-9.15 N"],
  ["Longitude", "83-39-20.75 W"],
  ["Elevation", "671 ft"],
  ["Runway", "4,807 × 50 ft"],
  ["Surface", "Asphalt"],
  ["Variation", "7 W (2020)"],
];

export const shop = [
  ["Discovery Flight", "$99"],
  ["Cessna Private Pilot Kit", "$329"],
  ["Instrument Ground School", "$450"],
  ["Bose A20 Headset", "$960"],
];
