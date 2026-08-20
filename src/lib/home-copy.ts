import type { Lang } from "./lang";

export const BRAND = {
  name: "Enrico Scarsi",
  kicker: "Fotografo professionista a Torino",
  kickerEn: "Professional Photographer in Turin",
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
  stories: { label: string; heading: string; read: string; sourceNote: string };
  studio: {
    label: string;
    heading: string;
    lines: string[];
    openMaps: string;
    directions: string;
    phoneLabel: string;
    mobileLabel: string;
    emailLabel: string;
  };
  final: { heading: string[]; support: string; cta: string; caption: string };
  sticky: string;
  legalLinks: { privacy: string; legal: string; contact: string };
  pages: {
    work: { title: string; intro: string };
    experiences: { title: string; intro: string };
    photographer: { title: string; intro: string };
    contact: { title: string; intro: string };
    privacy: { title: string; intro: string };
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
    since: "Dal 1989 · oltre 35 anni dietro la macchina fotografica",
    cta: "Scopri le storie",
    alt: "Coppia sul lungo Po a Torino con la Mole Antonelliana sullo sfondo",
  },
  inquiry: {
    label: "Raccontaci il tuo progetto",
    heading: ["Dicci cosa", "stai organizzando."],
    support: ["Ogni storia è unica.", "Lasciaci qualche dettaglio: risponderemo personalmente."],
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
      "Significa anche saper lavorare in situazioni diverse — una piazza affollata, una luce difficile, una famiglia intimidita dall'obiettivo — con la calma di chi lo ha già fatto molte volte.",
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
  stories: {
    label: "Storie vere",
    heading: "Cosa ricordano i clienti",
    read: "Leggi la recensione",
    sourceNote: "Recensioni verificate pubblicate dai clienti dello studio.",
  },
  studio: {
    label: "Visita lo studio",
    heading: "Ci trovi a Torino.",
    lines: [
      "Via Oropa 54B, Vanchiglietta / Vanchiglia",
      "A pochi passi da Corso Belgio e Corso Casale.",
    ],
    openMaps: "Apri in Google Maps",
    directions: "Indicazioni stradali",
    phoneLabel: "Telefono",
    mobileLabel: "Cellulare / WhatsApp",
    emailLabel: "Email",
  },
  final: {
    heading: ["Cosa", "ricorderai?"],
    support: "Fotografiamolo insieme.",
    cta: "Inizia la tua storia",
    caption: "Torino al tramonto",
  },
  sticky: "Richiedi informazioni",
  legalLinks: { privacy: "Privacy", legal: "Informazioni legali", contact: "Contatti" },
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
    privacy: {
      title: "Privacy e informazioni legali",
      intro: "Come questo sito tratta i dati di navigazione e quali servizi esterni utilizza.",
    },
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
    since: "Since 1989 · 35+ years behind the camera",
    cta: "Explore the stories",
    alt: "Couple on the Po riverside in Turin with the Mole Antonelliana behind them",
  },
  inquiry: {
    label: "Let's plan your story",
    heading: ["Tell us what", "you're planning."],
    support: ["Every story is unique.", "Share a few details and we'll reply personally."],
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
      "It also means working calmly in very different situations — a crowded square, difficult light, a family made shy by the lens — because you have done it many times before.",
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
  stories: {
    label: "Real stories",
    heading: "What clients remember",
    read: "Read review",
    sourceNote: "Verified reviews published by the studio's clients.",
  },
  studio: {
    label: "Visit the studio",
    heading: "Find us in Torino.",
    lines: [
      "Via Oropa 54B, Vanchiglietta / Vanchiglia",
      "Close to Corso Belgio and Corso Casale.",
    ],
    openMaps: "Open in Google Maps",
    directions: "Get directions",
    phoneLabel: "Telephone",
    mobileLabel: "Mobile / WhatsApp",
    emailLabel: "Email",
  },
  final: {
    heading: ["What will you", "remember?"],
    support: "Let's capture it together.",
    cta: "Start your story",
    caption: "Torino at dusk",
  },
  sticky: "Inquire",
  legalLinks: { privacy: "Privacy", legal: "Legal information", contact: "Contact" },
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
    privacy: {
      title: "Privacy & legal information",
      intro: "How this website handles browsing data and which external services it uses.",
    },
  },
};

export const homeCopy = (lang: Lang): HomeCopy => (lang === "it" ? it : en);
