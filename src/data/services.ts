export type Service = {
  slug: string;
  title: string;
  short: string;
  blurb: string;
  bullets: string[];
  icon: "solar" | "battery" | "compliance" | "maintenance" | "industrial" | "agri";
};

export const services: Service[] = [
  {
    slug: "solar-power",
    title: "Solar Power Installations",
    short: "Grid-tied & hybrid PV systems",
    blurb:
      "Cut your monthly electricity bill and generate your own clean energy with a properly engineered solar PV system. We design, supply and install grid-tied and hybrid systems using top-tier panels and inverters, sized to your actual consumption — never oversold.",
    bullets: [
      "Tier-1 JA Solar & Canadian Solar panels",
      "Deye, Sunsynk, Victron & LuxPower inverters",
      "Full system design, COC and commissioning",
    ],
    icon: "solar",
  },
  {
    slug: "battery-backup",
    title: "Battery Backup Solutions",
    short: "Stay on through every load-shedding stage",
    blurb:
      "Keep your lights, Wi-Fi, fridges and security systems running through any stage of load-shedding. We size battery backup around your essentials and budget — from a single 5 kWh wall-mount unit up to multi-rack lithium banks.",
    bullets: [
      "Dyness, Sunsynk & Deye lithium batteries",
      "Seamless changeover (UPS-grade) options",
      "Expandable — start small, add capacity later",
    ],
    icon: "battery",
  },
  {
    slug: "coc",
    title: "Electrical Compliance Certificates",
    short: "COC inspections for sale, rental & insurance",
    blurb:
      "We issue Certificates of Compliance on every installation we complete and offer standalone COC inspections for property transfers, rentals and insurance claims. Fast turnaround across the Cape Town metro.",
    bullets: [
      "Department of Labour registered",
      "Detailed defect reporting & remedial quotes",
      "Same-week turnaround in most cases",
    ],
    icon: "compliance",
  },
  {
    slug: "electrical-maintenance",
    title: "General Electrical Maintenance",
    short: "Repairs, fault-finding, upgrades",
    blurb:
      "From a tripping DB board to a full re-wire, our qualified electricians handle residential and commercial repairs, fault-finding, lighting upgrades and DB board replacements — neatly and to spec.",
    bullets: [
      "DB board upgrades & surge protection",
      "Lighting design & LED retrofits",
      "Fault-finding & emergency call-outs",
    ],
    icon: "maintenance",
  },
  {
    slug: "commercial",
    title: "Commercial & Industrial",
    short: "3-phase solar & power solutions",
    blurb:
      "Reduce operating costs and protect production with 3-phase solar, hybrid and backup systems for offices, factories, warehouses and agricultural sites. We handle the full project — feasibility, design, install and aftercare.",
    bullets: [
      "Three-phase Deye & Atess inverters",
      "Production-line UPS & generator sync",
      "Energy monitoring & remote diagnostics",
    ],
    icon: "industrial",
  },
  {
    slug: "agricultural",
    title: "Agricultural Solar",
    short: "Pumps, pack houses & off-grid farms",
    blurb:
      "Solar-powered borehole pumps, irrigation, cold rooms and off-grid farmhouses across the Western Cape. Diesel-free, low-maintenance and built for the realities of farm life.",
    bullets: [
      "Solar borehole & irrigation pumping",
      "Off-grid farmhouse & worker housing",
      "Cold-room and pack-house power",
    ],
    icon: "agri",
  },
];
