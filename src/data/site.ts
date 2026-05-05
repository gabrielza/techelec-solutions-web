export const site = {
  name: "Techelec Solutions",
  legalName: "Techelec Solutions (Pty) Ltd",
  tagline: "Sustainable energy. Affordable prices.",
  description:
    "Cape Town based solar, backup power and electrical specialists. Master Deye installers offering grid-tied, hybrid and off-grid systems for homes, businesses and farms — backed by a Certificate of Compliance on every job.",
  url: "https://techelecsolutions.co.za",
  phone: "+27 81 477 6241",
  phoneDisplay: "081 477 6241",
  whatsapp: "27814776241",
  whatsappMessage:
    "Hi Techelec, I'd like to chat about a solar / backup / electrical solution.",
  email: "info@techelecsolutions.co.za",
  address: {
    street: "13 Gladioli Street",
    suburb: "Kuilsriver",
    city: "Cape Town",
    postal: "7580",
    country: "South Africa",
    region: "Western Cape",
    geo: { lat: -33.915538, lng: 18.6560594 },
  },
  hours: "Mon – Fri: 08:00 – 17:00 · Sat: 08:00 – 13:00",
  social: {
    facebook: "https://www.facebook.com/techelecsolution/",
    instagram: "https://www.instagram.com/techelecsolutions/",
    google: "https://maps.app.goo.gl/?cid=16064569500127618358",
  },
  certifications: [
    { name: "Master Deye Installer", note: "Certified hybrid inverter specialists" },
    { name: "PV GreenCard", note: "SAPVIA accredited solar installer" },
    { name: "ECASA / Dept. of Labour", note: "Registered electrical contractor" },
  ],
  brands: [
    "Deye", "Sunsynk", "Victron", "LuxPower", "Atess",
    "JA Solar", "Canadian Solar", "Dyness",
  ],
};

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const telLink = `tel:${site.phone.replace(/\s/g, "")}`;
