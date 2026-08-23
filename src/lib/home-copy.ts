import type { Lang } from "./lang";

export const BRAND = {
  name: "Enrico Scarsi",
  kicker: "Fotografo professionista a Torino",
  kickerEn: "Professional Photographer in Turin",
  since: "1989",
};

/** The studio's existing blog, hosted separately. */
export const BLOG_URL = "https://www.fotografico.it/blog.html";


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
    slideAlts: Record<string, string>;
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
  services: {
    label: string;
    heading: string;
    intro: string;
    view: string;
    categories: { key: string; title: string }[];
    indexLabel: string;
    indexIntro: string;
    groups: { title: string; items: string[] }[];
    soon: string;
  };
  experience: {
    label: string;
    heading: string[];
    body: string[];
    cta: string;
    caption: string;
  };
  torino: {
    title: string;
    heading: string[];
    body: string;
    cta: string;
    caption: string;
    mapLabel: string;
  };
  stories: { label: string; heading: string; read: string; sourceNote: string };
  trust: { google: string; trustpilot: string; visit: string };
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
  advertising: {
    label: string;
    view: string;
    items: { key: string; title: string }[];
    page: { title: string; heading: string; intro: string[] };
  };
  final: { heading: string; strong?: string; support: string; cta: string; caption: string };
  sticky: string;
  call: string;
  back: string;
  legalLinks: { privacy: string; legal: string; contact: string; blog: string; home: string };
  cookieNotice: string[];
  pages: {
    services: { title: string; intro: string };
    photographer: { title: string; intro: string };
    contact: { title: string; intro: string };
    privacy: { title: string; intro: string };
  };
};

const it: HomeCopy = {
  nav: [
    { label: "Home", to: "/" },
    { label: "Servizi", to: "/services" },
    { label: "Il Fotografo", to: "/photographer" },
    { label: "Contatti", to: "/contact" },
  ],
  hero: {
    eyebrow: "Torino, Italia",
    line1: "Fotografia",
    line2: "per i momenti",
    line3: "che contano.",
    since: "Dal 1989 · oltre 35 anni dietro la macchina fotografica",
    cta: "Scopri i servizi",
    alt: "Coppia sul lungo Po a Torino con la Mole Antonelliana sullo sfondo",
    slideAlts: {
      weddings: "Sposi sotto i portici di Torino",
      families: "Famiglia fotografata all'aperto in città",
      portraits: "Ritratto in studio con luce naturale",
      events: "Reportage di un evento in un palazzo storico",
      business: "Fotografia aziendale in ufficio",
      studio: "Interno dello studio fotografico",
    },
  },
  inquiry: {
    label: "Raccontaci il tuo progetto",
    heading: ["Dicci cosa", "stai organizzando."],
    support: ["Ogni storia è unica.", "Lasciaci qualche dettaglio: risponderemo personalmente."],
    typeLabel: "Tipo di servizio",
    types: [
      "Ritratto",
      "Famiglia",
      "Matrimonio / Proposta",
      "Coppia",
      "Evento",
      "Ritratto corporate",
      "Pubblicitaria / Catalogo",
      "Industriale",
      "Architettura / Interni",
      "Case vacanza",
      "Luxury Photo Tour a Torino",
      "Fototessere per visti",
      "Buono regalo",
      "Riprese video",
      "Corso di fotografia",
      "Altro",
    ],
    name: "Nome",
    namePlaceholder: "es. Marco Rossi",
    email: "Email",
    emailPlaceholder: "es. marco@esempio.it",
    whatsapp: "WhatsApp / Telefono",
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
  services: {
    label: "Servizi",
    heading: "Cosa fotografiamo",
    intro:
      "Uno studio fotografico a Torino aperto a esigenze molto diverse: persone, famiglie, eventi, imprese, prodotti e architettura. Ogni servizio nasce da un ascolto iniziale e da una pianificazione condivisa.",
    view: "Scopri di più",
    categories: [
      { key: "weddings", title: "Matrimoni / Proposte" },
      { key: "families", title: "Famiglie" },
      { key: "portraits", title: "Ritratti" },
      { key: "events", title: "Eventi" },
      { key: "business", title: "Business" },
      { key: "studio", title: "Studio" },
    ],
    indexLabel: "Tutti i servizi",
    indexIntro: "L'offerta completa dello studio, per clienti privati e professionali.",
    groups: [
      {
        title: "Privati",
        items: [
          "Ritratto",
          "Famiglia",
          "Matrimonio",
          "Fotografia di coppia",
          "Luxury Photo Tour a Torino",
          "Fototessere per visti e passaporti",
          "Buoni regalo",
        ],
      },
      {
        title: "Aziende e professionisti",
        items: [
          "Fotografia pubblicitaria",
          "Ritratto corporate",
          "Fotografia di eventi",
          "Fotografia industriale",
          "Architettura e interni",
          "Case vacanza",
          "Prodotto e catalogo",
        ],
      },
      {
        title: "Inoltre",
        items: ["Riprese video", "Corsi di fotografia"],
      },
    ],
    soon: "Pagina di servizio in arrivo — nel frattempo scrivici o telefona allo studio.",
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
    title: "Torino",
    heading: ["con un altro sguardo."],
    body:
      "Le strade, i portici, il fiume e le colline non sono uno sfondo: diventano parte della storia che stiamo raccontando — per una famiglia, un ritratto, un evento o un'azienda.",
    cta: "Vedi i servizi",
    caption: "Torino, veduta",
    mapLabel: "Lo studio",
  },
  stories: {
    label: "Fiducia",
    heading: "Cosa ricordano i clienti",
    read: "Leggi le recensioni",
    sourceNote:
      "Le recensioni sono pubblicate dai clienti sulle piattaforme verificate dello studio.",
  },
  trust: {
    google: "Recensioni Google",
    trustpilot: "Trustpilot",
    visit: "Apri il profilo",
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
  advertising: {
    label: "Fotografia pubblicitaria",
    view: "Vedi la fotografia pubblicitaria",
    items: [
      { key: "industrial", title: "Fotografia industriale" },
      { key: "architecture", title: "Architettura / Interni" },
      { key: "vacation", title: "Case vacanza" },
      { key: "product", title: "Prodotto / Commerciale" },
    ],
    page: {
      title: "Fotografia pubblicitaria",
      heading: "Fotografia pubblicitaria: come rendere visibile il tuo brand?",
      intro: [
        "Un'immagine costruita con cura può attrarre, coinvolgere e aumentare la visibilità del tuo brand.",
        "Lavoriamo con aziende, agenzie di comunicazione e liberi professionisti per creare fotografie che raccontano prodotti e servizi con una narrazione visiva forte ed efficace.",
      ],
    },
  },
  final: {
    heading: "Cosa ricorderai?",
    strong: "ricorderai",
    support: "Fotografiamolo insieme.",
    cta: "Dicci cosa stai organizzando",
    caption: "Torino al tramonto",
  },
  sticky: "Richiedi informazioni",
  call: "Chiama lo studio",
  back: "Servizi",
  legalLinks: {
    privacy: "Privacy",
    legal: "Informazioni legali",
    contact: "Contatti",
    blog: "Blog",
    home: "Home",
  },
  cookieNotice: [
    "Questo sito non utilizza alcun tipo di cookie, né tecnici né di profilazione.",
    "La navigazione avviene senza raccolta né tracciamento dei dati personali degli utenti.",
  ],
  pages: {
    services: {
      title: "Servizi",
      intro:
        "Tutti i servizi dello studio, per clienti privati e per aziende: ritratto, famiglia, matrimonio, eventi, pubblicitaria, industriale, architettura, video e corsi.",
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
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
    { label: "The Photographer", to: "/photographer" },
    { label: "Contact", to: "/contact" },
  ],
  hero: {
    eyebrow: "Torino, Italia",
    line1: "Photography",
    line2: "for moments",
    line3: "that matter.",
    since: "Since 1989 · 35+ years behind the camera",
    cta: "Explore the services",
    alt: "Couple on the Po riverside in Turin with the Mole Antonelliana behind them",
    slideAlts: {
      weddings: "Bride and groom under the arcades of Turin",
      families: "Family photographed outdoors in the city",
      portraits: "Studio portrait in natural light",
      events: "Event reportage in a historic Italian palazzo",
      business: "Corporate photography in an office",
      studio: "Interior of the photography studio",
    },
  },
  inquiry: {
    label: "Let's plan your story",
    heading: ["Tell us what", "you're planning."],
    support: ["Every story is unique.", "Share a few details and we'll reply personally."],
    typeLabel: "Type of photoshoot",
    types: [
      "Portrait",
      "Family",
      "Wedding / Proposal",
      "Couple",
      "Event",
      "Corporate portrait",
      "Advertising / Catalogue",
      "Industrial",
      "Architecture / Interiors",
      "Vacation property",
      "Luxury Photo Tour in Turin",
      "Visa photography",
      "Gift voucher",
      "Video / filming",
      "Photography course",
      "Other",
    ],
    name: "Your name",
    namePlaceholder: "e.g. John Doe",
    email: "Email",
    emailPlaceholder: "e.g. john@example.com",
    whatsapp: "WhatsApp / Phone",
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
  services: {
    label: "Services",
    heading: "What we photograph",
    intro:
      "A photography studio in Turin working across very different needs: people, families, events, companies, products and architecture. Every commission starts with listening and shared planning.",
    view: "Find out more",
    categories: [
      { key: "weddings", title: "Weddings / Proposals" },
      { key: "families", title: "Families" },
      { key: "portraits", title: "Portraits" },
      { key: "events", title: "Events" },
      { key: "business", title: "Business" },
      { key: "studio", title: "Studio" },
    ],
    indexLabel: "All services",
    indexIntro: "The studio's complete offering, for private and professional clients.",
    groups: [
      {
        title: "Private",
        items: [
          "Portrait",
          "Family",
          "Wedding",
          "Couple photography",
          "City Tour photography",
          "Visa photography",
          "Gift voucher",
        ],
      },
      {
        title: "Business & professional",
        items: [
          "Advertising photography",
          "Corporate portrait",
          "Event photography",
          "Industrial photography",
          "Architecture / interiors",
          "Vacation property photography",
          "Product / commercial photography",
        ],
      },
      {
        title: "Additional",
        items: ["Video / filming", "Photography courses"],
      },
    ],
    soon: "Service page coming soon — in the meantime write to us or call the studio.",
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
    title: "Torino",
    heading: ["through a different lens."],
    body:
      "The streets, the arcades, the river and the hills are not a backdrop: they become part of the story being told — for a family, a portrait, an event or a company.",
    cta: "See the services",
    caption: "Torino, city view",
    mapLabel: "The studio",
  },
  stories: {
    label: "Trust",
    heading: "What clients remember",
    read: "Read the reviews",
    sourceNote: "Reviews are published by clients on the studio's verified review platforms.",
  },
  trust: {
    google: "Google Reviews",
    trustpilot: "Trustpilot",
    visit: "Open profile",
  },
  studio: {
    label: "Visit the studio",
    heading: "Find us in Torino.",
    lines: ["Via Oropa 54B, Vanchiglietta / Vanchiglia", "Close to Corso Belgio and Corso Casale."],
    openMaps: "Open in Google Maps",
    directions: "Get directions",
    phoneLabel: "Telephone",
    mobileLabel: "Mobile / WhatsApp",
    emailLabel: "Email",
  },
  advertising: {
    label: "Advertising photography",
    view: "See advertising photography",
    items: [
      { key: "industrial", title: "Industrial photography" },
      { key: "architecture", title: "Architecture / Interiors" },
      { key: "vacation", title: "Vacation property photography" },
      { key: "product", title: "Product / Commercial photography" },
    ],
    page: {
      title: "Advertising photography",
      heading: "Advertising photography: how to make your brand visible?",
      intro: [
        "A well-crafted image can attract, engage, and boost your brand's visibility.",
        "We work with companies, communications agencies, and freelancers to create photographs that showcase products and services through strong, effective visual storytelling.",
      ],
    },
  },
  final: {
    heading: "What will you remember?",
    strong: "you",
    support: "Let's capture it together.",
    cta: "Tell us what you're planning",
    caption: "Torino at dusk",
  },
  sticky: "Inquire",
  call: "Call the studio",
  back: "Services",
  legalLinks: {
    privacy: "Privacy",
    legal: "Legal information",
    contact: "Contact",
    blog: "Blog",
    home: "Home",
  },
  cookieNotice: [
    "This website does not use any type of cookies, including technical cookies or profiling cookies.",
    "Browsing takes place without the collection or tracking of users' personal data.",
  ],
  pages: {
    services: {
      title: "Services",
      intro:
        "Every service offered by the studio, for private and business clients: portrait, family, wedding, events, advertising, industrial, architecture, video and courses.",
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
