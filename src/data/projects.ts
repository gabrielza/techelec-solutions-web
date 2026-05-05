export type Project = {
  title: string;
  category: "Residential" | "Commercial" | "Agricultural";
  location: string;
  size: string;
  components: string;
  description: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Residential Hybrid System — Kuilsriver",
    category: "Residential",
    location: "Kuilsriver, Cape Town",
    size: "5 kW hybrid + 5 kWh battery",
    components: "Deye 5 kW hybrid inverter · Dyness 5 kWh lithium",
    description:
      "Wall-mounted hybrid setup providing whole-home backup through every stage of load-shedding, with PV-ready DC inputs for the homeowner's planned panel array.",
  },
  {
    title: "8 kW Hybrid + 10 kWh Storage — Northern Suburbs",
    category: "Residential",
    location: "Brackenfell, Cape Town",
    size: "8 kW hybrid · 10 kWh battery · 10 × 460 W panels",
    components: "Deye 8 kW · Dyness 2 × 5.12 kWh · JA Solar 460 W",
    description:
      "Full hybrid system covering 70%+ of monthly consumption with seamless backup of the entire home — fridges, geyser-element switching, Wi-Fi and security included.",
  },
  {
    title: "Three-Phase Backup — Light Industrial",
    category: "Commercial",
    location: "Stikland Industrial",
    size: "12 kW three-phase backup",
    components: "Deye 12 kW 3-phase hybrid · 15 kWh lithium",
    description:
      "Production-floor backup keeping CNC controllers, compressors and lighting running through outages, with surge protection on the incoming supply.",
  },
];
