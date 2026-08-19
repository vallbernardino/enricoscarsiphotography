import type { Lang } from "./lang";

export const BRAND = {
  name: "Enrico Capuano",
  kicker: "Fotografo in Torino",
  since: "1989",
};

export type NavItem = { label: string; to: string };

type HomeCopy = {
  nav: NavItem[];
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    line3: string;
    since: string;
    cta: string;
    alt: string;
  };
  inquiry: {
    label: string;
    heading: string[];
    support: string[];
    typeLabel: string;
    types: string[];
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    whatsapp: string;
    whatsappPlaceholder: string;
    optional: string;
    tell: string;
    tellPlaceholder: string;
    continueLabel: string;
    continueOptions: string[];
    submit: string;
    sent: string;
  };
  work: {
    label: string;
    heading: string;
    intro: string;
    view: string;
    categories: { key: string; title: string }[];
  };
  experience: {
    label: string;
    heading: string[];
    body: string[];
    cta: string;
    caption: string;
  };
  torino: {
    heading: string[];
    body: string;
    cta: string;
    caption: string;
    mapLabel: string;
  };
  stories: { label: string; heading: string };
  final: { heading: string[]; support: string; cta: string; caption: string };
  sticky: string;
  pages: {
    work: { title: string; intro: string };
    experiences: { title: string; intro: string };
    photographer: { title: string; intro: string };
    contact: { title: string; intro: string };
  };
};

const it: HomeCopy = {
  nav: [
    { label: "Lavori", to: "/work" },
    { label: "Esperienze", to: "/experiences" },
    { label: "Il Fotografo", to: "/photographer" },
    { label: "Contatti", to: "/contact" },
  ],
  hero: {
    eyebrow: "Torino, Italia",
    line1: "Fotografia",
    line2: "per i momenti",
    line3: "che contano.",
    since: "Dal 1989 · oltre 35 anni di mestiere",
    cta: "Scopri le storie",
    alt: "Coppia sul lungo Po a Torino con la Mole Antonelliana sullo sfondo",
  },
  inquiry: {
    label: "Raccontaci il tuo progetto",
    heading: ["Dicci cosa", "stai organizzando."],
    support: [
      "Ogni storia è unica.",
      "Lasciaci qualche dettaglio e ti",
      "risponderemo personalmente.",
    ],
    typeLabel: "Tipo di servizio",
    types: [
      "Proposta di matrimonio",
      "Matrimonio",
      "Coppia / Fidanzamento",
      "Ritratto",
      "Famiglia",
      "Evento",
      "Business / Commerciale",
      "Altro",
    ],
    name: "Nome",
    namePlaceholder: "es. Marco Rossi",
    email: "Email",
    emailPlaceholder: "es. marco@esempio.it",
    whatsapp: "WhatsApp",
    whatsappPlaceholder: "Numero di telefono",
    optional: "facoltativo",
    tell: "Raccontaci",
    tellPlaceholder:
      "Data, luogo, cosa stai organizzando, quante persone o qualsiasi cosa vuoi farci sapere...",
    continueLabel: "Come preferisci continuare?",
    continueOptions: ["Email", "WhatsApp"],
    submit: "Invia richiesta",
    sent: "Grazie. Apri il tuo client per completare l'invio del messaggio.",
  },
  work: {
    label: "Lavori",
    heading: "Sei modi di guardare",
    intro: "Ogni galleria raccoglie un tipo di storia diverso.",
    view: "Vedi la galleria",
    categories: [
      { key: "proposals", title: "Proposte" },
      { key: "weddings", title: "Matrimoni" },
      { key: "couples", title: "Coppie" },
      { key: "portraits", title: "Ritratti" },
      { key: "events", title: "Eventi" },
      { key: "business", title: "Business" },
    ],
  },
  experience: {
    label: "Dal 1989",
    heading: ["Oltre 35 anni", "dietro la macchina."],
    body: [
      "L'esperienza insegna ad anticipare i momenti, a capire le persone e a restare discreti quando serve.",
      "Il risultato non è una posa perfetta: è una fotografia che continua a significare qualcosa anche molti anni dopo.",
    ],
    cta: "Conosci il fotografo",
    caption: "Il fotografo al lavoro",
  },
  torino: {
    heading: ["Torino,", "con un altro", "sguardo."],
    body:
      "Le strade, i portici, il fiume e le colline non sono uno sfondo: diventano parte della storia che stiamo raccontando.",
    cta: "Scopri Torino",
    caption: "Torino, veduta",
    mapLabel: "Lo studio",
  },
  stories: { label: "Storie vere", heading: "Cosa dicono i clienti" },
  final: {
    heading: ["Cosa", "ricorderai?"],
    support: "Fotografiamolo insieme.",
    cta: "Inizia la tua storia",
    caption: "Torino al tramonto",
  },
  sticky: "Inizia la tua storia",
  pages: {
    work: {
      title: "Lavori",
      intro: "Portfolio e categorie fotografiche: ritratto, eventi, corporate, prodotto, matrimoni.",
    },
    experiences: {
      title: "Esperienze e servizi",
      intro: "Tutti i servizi dello studio, per clienti privati e per aziende.",
    },
    photographer: {
      title: "Il fotografo",
      intro: "Metodo, esperienza e approccio al lavoro.",
    },
    contact: { title: "Contatti", intro: "Studio, telefono, email e area di lavoro." },
  },
};

const en: HomeCopy = {
  nav: [
    { label: "Work", to: "/work" },
    { label: "Experiences", to: "/experiences" },
    { label: "The Photographer", to: "/photographer" },
    { label: "Contact", to: "/contact" },
  ],
  hero: {
    eyebrow: "Torino, Italia",
    line1: "Photography",
    line2: "for moments",
    line3: "that matter.",
    since: "Since 1989 · 35+ years in business",
    cta: "Explore the stories",
    alt: "Couple on the Po riverside in Turin with the Mole Antonelliana behind them",
  },
  inquiry: {
    label: "Let's plan your story",
    heading: ["Tell us what", "you're planning."],
    support: ["Every story is unique.", "Share a few details and we'll", "get back to you personally."],
    typeLabel: "Type of photoshoot",
    types: [
      "Proposal",
      "Wedding",
      "Couple / Engagement",
      "Portrait",
      "Family",
      "Event",
      "Business / Commercial",
      "Other",
    ],
    name: "Your name",
    namePlaceholder: "e.g. John Doe",
    email: "Email",
    emailPlaceholder: "e.g. john@example.com",
    whatsapp: "WhatsApp",
    whatsappPlaceholder: "Phone number",
    optional: "optional",
    tell: "Tell us about it",
    tellPlaceholder:
      "Date, location, what you're planning, number of people, or anything you'd like us to know...",
    continueLabel: "How would you like to continue?",
    continueOptions: ["Email", "WhatsApp"],
    submit: "Send inquiry",
    sent: "Thank you. Your message app will open to finish sending.",
  },
  work: {
    label: "Work",
    heading: "Six ways of looking",
    intro: "Each gallery holds a different kind of story.",
    view: "View gallery",
    categories: [
      { key: "proposals", title: "Proposals" },
      { key: "weddings", title: "Weddings" },
      { key: "couples", title: "Couples" },
      { key: "portraits", title: "Portraits" },
      { key: "events", title: "Events" },
      { key: "business", title: "Business" },
    ],
  },
  experience: {
    label: "Since 1989",
    heading: ["35+ years behind", "the camera."],
    body: [
      "Experience teaches you to anticipate moments, to understand people, and to stay discreet when it counts.",
      "The result is not a perfect pose: it is a photograph that still means something many years later.",
    ],
    cta: "Meet the photographer",
    caption: "The photographer at work",
  },
  torino: {
    heading: ["Torino,", "through a", "different lens."],
    body:
      "The streets, the arcades, the river and the hills are not a backdrop: they become part of the story being told.",
    cta: "Discover Torino",
    caption: "Torino, city view",
    mapLabel: "The studio",
  },
  stories: { label: "Real stories", heading: "What my clients say" },
  final: {
    heading: ["What will you", "remember?"],
    support: "Let's capture it together.",
    cta: "Start your story",
    caption: "Torino at dusk",
  },
  sticky: "Start your story",
  pages: {
    work: {
      title: "Work",
      intro: "Portfolio and photography categories: portrait, events, corporate, product, weddings.",
    },
    experiences: {
      title: "Experiences & services",
      intro: "Every service offered by the studio, for private and corporate clients.",
    },
    photographer: { title: "The photographer", intro: "Method, experience and approach." },
    contact: { title: "Contact", intro: "Studio, phone, email and coverage area." },
  },
};

export const homeCopy = (lang: Lang): HomeCopy => (lang === "it" ? it : en);
