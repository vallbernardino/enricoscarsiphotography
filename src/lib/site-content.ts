import type { Lang } from "./lang";

export type Copy = {
  htmlLang: string;
  meta: { title: string; description: string };
  brand: { name: string; kicker: string };
  nav: { label: string; href: string }[];
  actions: { call: string; email: string; whatsapp: string };
  chooser: { title: string; hint: string };
  hero: {
    caption: string;
    headline: string;
    sub: string;
    ctas: [string, string, string];
    stats: { label: string; value: string }[];
  };
  privates: { heading: string; body: string[]; frames: { id: string; caption: string }[] };
  corporate: { heading: string; body: string[]; frames: { id: string; caption: string }[] };
  method: { heading: string; intro: string; steps: { n: string; title: string; body: string }[] };
  services: {
    heading: string;
    intro: string;
    items: string[];
    callouts: { kicker: string; title: string; body: string; cta: string }[];
  };
  coverage: { heading: string; body: string[]; cities: string[]; caption: string };
  portfolio: { heading: string; intro: string; tabs: string[]; frames: { id: string; caption: string; tab: string }[] };
  reviews: {
    heading: string;
    badge: string;
    ratingLabel: string;
    items: { quote: string; name: string; source: string }[];
  };
  about: { heading: string; caption: string; body: string[] };
  contact: {
    heading: string;
    addressLabel: string;
    address: string;
    addressNote: string;
    phoneLabel: string;
    emailLabel: string;
    vatLabel: string;
    mapCaption: string;
    socialLabel: string;
  };
  footer: { legal: string; copyright: string };
};

const it: Copy = {
  htmlLang: "it",
  meta: {
    title: "Enrico Scarsi Fotografia — Fotografo a Torino",
    description:
      "Studio fotografico a Torino: ritratto, famiglia, eventi aziendali, pubblicitaria e catalogo. Reportage e ritratto in Piemonte, Valle d'Aosta e Liguria.",
  },
  brand: { name: "Enrico Scarsi — Fotografia", kicker: "Studio fotografico · Torino" },
  nav: [
    { label: "Chi Siamo", href: "#chi-siamo" },
    { label: "Privati", href: "#privati" },
    { label: "Aziende", href: "#aziende" },
    { label: "Servizi", href: "#servizi" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Recensioni", href: "#recensioni" },
    { label: "Contatti", href: "#contatti" },
  ],
  actions: { call: "Telefona", email: "Email", whatsapp: "WhatsApp" },
  chooser: { title: "Scegli la lingua", hint: "Puoi cambiarla in qualsiasi momento dal menu." },
  hero: {
    caption: "STUDIO, VIA OROPA 54B",
    headline: "Fotografo a Torino. Oltre il semplice scatto.",
    sub: "La passione per la fotografia incontra professionalità ed esperienza: reportage, ritratto, eventi e fotografia pubblicitaria a Torino e in tutto il Piemonte.",
    ctas: ["Telefona allo Studio", "Scrivi un'Email", "Messaggio WhatsApp"],
    stats: [
      { label: "Valutazione Google", value: "4,9 ★" },
      { label: "Recensioni", value: "371" },
      { label: "Sede", value: "Torino" },
    ],
  },
  privates: {
    heading: "Servizi Fotografici per Clienti Privati",
    body: [
      "Ogni sessione viene costruita sulla persona che ha davanti l'obiettivo: ritratti individuali, fotografia di famiglia, servizi di coppia e maternità, pensati sulle vostre esigenze e sui vostri tempi.",
      "L'obiettivo non è una posa perfetta ma uno scatto autentico, che restituisca il carattere reale di chi viene fotografato. In studio l'atmosfera è tranquilla e attenta: mettere le persone a proprio agio è la condizione necessaria perché nascano immagini spontanee.",
    ],
    frames: [
      { id: "IMG_002", caption: "RITRATTO" },
      { id: "IMG_003", caption: "FAMIGLIA" },
      { id: "IMG_004", caption: "COPPIA" },
      { id: "IMG_005", caption: "MATERNITÀ" },
    ],
  },
  corporate: {
    heading: "Servizi Fotografici per Aziende e Professionisti",
    body: [
      "Reportage di eventi aziendali e congressi, fiere ed esposizioni: immagini che raccontano l'atmosfera reale della giornata, non una versione costruita a posteriori.",
      "Accanto al reportage, fotografia editoriale, campagne pubblicitarie e cataloghi prodotto. L'esperienza maturata nella fotografia pubblicitaria permette di realizzare visual coerenti, capaci di rafforzare l'identità del marchio nei diversi canali di comunicazione.",
    ],
    frames: [
      { id: "IMG_006", caption: "EVENTO AZIENDALE" },
      { id: "IMG_007", caption: "PUBBLICITARIA" },
      { id: "IMG_008", caption: "CATALOGO" },
    ],
  },
  method: {
    heading: "Il Nostro Metodo",
    intro: "Tre passaggi, sempre gli stessi, per privati e aziende.",
    steps: [
      {
        n: "01",
        title: "Ascolto e Primo Contatto",
        body: "Ogni primo contatto viene trattato singolarmente, senza formule preconfezionate. Con i clienti privati si parla di emozioni e ricordi da conservare; con le aziende di comunicazione e di obiettivi di marca. La domanda che guida il colloquio è sempre la stessa: come possiamo esservi davvero utili?",
      },
      {
        n: "02",
        title: "Pianificazione",
        body: "Prima dello shooting si definisce tutto ciò che può fare la differenza. Ai privati suggeriamo abbigliamento, palette di colori e mood più adatti. Alle aziende dedichiamo una pianificazione dettagliata di tempi, logistica e destinazione finale delle immagini.",
      },
      {
        n: "03",
        title: "L'Esperienza Durante lo Shooting",
        body: "Con famiglie e ritratti conta l'empatia e un clima rilassato, in cui nessuno si senta osservato. Con i clienti professionali la stessa cura diventa precisione, discrezione e affidabilità: sapere quando essere presenti e quando restare invisibili.",
      },
    ],
  },
  services: {
    heading: "Tutti i Servizi",
    intro: "Studio e location, per persone e per imprese.",
    items: [
      "Book fotografico professionale per modelle e attrici",
      "Servizio fotografico per siti web e e-commerce",
      "Casting per attori e modelli",
      "Servizio fotografico per case vacanza",
      "Luxury Photo Tour a Torino",
      "Fotografo corporate ed eventi",
      "Servizio fotografico per la famiglia",
      "Servizio fotografico per aziende e uffici",
      "Fotografo di matrimonio",
      "Riprese video per eventi, interviste, tutorial",
      "Corso di fotografia — lezioni individuali",
      "Fototessere per visti e passaporti",
      "Buoni regalo",
    ],
    callouts: [
      {
        kicker: "Buoni regalo",
        title: "Regala un servizio fotografico",
        body: "Un buono regalo per un ritratto, un servizio di famiglia o di coppia: la persona che lo riceve scegliera' data e tipo di sessione.",
        cta: "Richiedi informazioni",
      },
      {
        kicker: "Fototessere",
        title: "Fototessere per Visto USA e passaporti stranieri",
        body: "Fototessere a norma per visti, passaporti e documenti, con i formati richiesti dalle diverse ambasciate. Consegna in studio.",
        cta: "Telefona allo studio",
      },
    ],
  },
  coverage: {
    heading: "Dove Lavoriamo",
    body: [
      "Lo studio è a Torino e lavora in tutto il Piemonte: Cuneo, Asti, Alessandria, Novara, Vercelli, Biella e Verbano Cusio Ossola, comprese le Langhe e il Roero, il Monferrato, il Lago Maggiore e il Lago d'Orta, le valli di Susa e dell'Ossola e le zone alpine.",
      "Ci spostiamo inoltre in Valle d'Aosta (Aosta, Courmayeur, Cervinia, Saint Vincent) e in Liguria (Genova, Savona, Imperia, La Spezia).",
    ],
    cities: [
      "Torino",
      "Cuneo",
      "Asti",
      "Alessandria",
      "Novara",
      "Vercelli",
      "Biella",
      "Verbania",
      "Aosta",
      "Genova",
    ],
    caption: "MAPPA — PIEMONTE / VALLE D'AOSTA / LIGURIA",
  },
  portfolio: {
    heading: "Portfolio",
    intro: "Le immagini verranno inserite qui: ogni riquadro è una posizione già impaginata.",
    tabs: ["Tutti", "Ritratto", "Eventi", "Corporate", "Prodotto", "Matrimoni"],
    frames: [
      { id: "IMG_009", caption: "RITRATTO", tab: "Ritratto" },
      { id: "IMG_010", caption: "EVENTI", tab: "Eventi" },
      { id: "IMG_011", caption: "CORPORATE", tab: "Corporate" },
      { id: "IMG_012", caption: "PRODOTTO", tab: "Prodotto" },
      { id: "IMG_013", caption: "MATRIMONI", tab: "Matrimoni" },
      { id: "IMG_014", caption: "RITRATTO", tab: "Ritratto" },
      { id: "IMG_015", caption: "EVENTI", tab: "Eventi" },
      { id: "IMG_016", caption: "CORPORATE", tab: "Corporate" },
      { id: "IMG_017", caption: "PRODOTTO", tab: "Prodotto" },
      { id: "IMG_018", caption: "MATRIMONI", tab: "Matrimoni" },
    ],
  },
  reviews: {
    heading: "Cosa Dicono i Nostri Clienti",
    badge: "4,9 ★",
    ratingLabel: "371 recensioni Google",
    items: [
      {
        quote:
          "Ho scelto lo studio per il servizio di ritratto di mio figlio di diciassette anni. Enrico sa mettere a proprio agio anche gli adolescenti e il risultato è naturale e spontaneo.",
        name: "Barbara Cappi",
        source: "Cliente privata",
      },
      {
        quote:
          "Avevo richieste molto precise e sono stato pienamente soddisfatto. Ho apprezzato anche il supporto nella preparazione dei contenuti per la pubblicazione dopo lo shooting.",
        name: "Edoardo Busti",
        source: "Cliente professionale",
      },
      {
        quote:
          "Professionale e attento. Le immagini sono naturali e pulite, perfette per un utilizzo professionale.",
        name: "Enrico Mauro",
        source: "Cliente professionale",
      },
      {
        quote:
          "Fototessere di ottima qualità a un prezzo giusto, e una bella conversazione con Enrico durante l'attesa.",
        name: "Ashish Thodupunuri",
        source: "Recensione Google",
      },
      {
        quote:
          "Enrico è stato fotografo e guida allo stesso tempo: ci ha raccontato la storia di Torino mentre fotografava la mia famiglia nei luoghi simbolo della città.",
        name: "Marco Martinetti",
        source: "Recensione Google",
      },
      {
        quote:
          "Lo shooting è stato divertente e le foto per il CV e i documenti di lavoro sono venute esattamente come le immaginavo.",
        name: "Arnaud Ruch",
        source: "Recensione Google",
      },
    ],
  },
  about: {
    heading: "Enrico Scarsi, Fotografo a Torino",
    caption: "ENRICO SCARSI",
    body: [
      "Fotografo con studio a Torino, specializzato in ritratto e reportage, al lavoro con clienti privati e professionali in tutta la regione.",
      "Un approccio calmo e attento, che mette a proprio agio chi viene fotografato, unito a un investimento costante in attrezzatura e tecnica per restare al passo con la fotografia contemporanea.",
    ],
  },
  contact: {
    heading: "Contatti",
    addressLabel: "Indirizzo",
    address: "Via Oropa 54B, Vanchiglietta/Vanchiglia, 10153 Torino TO",
    addressNote: "A pochi passi da Corso Belgio e Corso Casale",
    phoneLabel: "Telefono",
    emailLabel: "Email",
    vatLabel: "P. IVA",
    mapCaption: "GOOGLE MAPS",
    socialLabel: "Social",
  },
  footer: {
    legal:
      "Questo sito non utilizza cookie di profilazione e non raccoglie né traccia dati personali degli utenti. La mappa dello studio e i caratteri tipografici sono forniti da Google, che può impostare propri cookie tecnici: i dettagli sono nella pagina Privacy.",
    copyright: "Enrico Scarsi Fotografia — P.IVA 05529370016",
  },
};

const en: Copy = {
  htmlLang: "en",
  meta: {
    title: "Enrico Scarsi Fotografia — Photographer in Turin",
    description:
      "Photography studio in Turin: portraits, family, corporate events, advertising and catalog work across Piedmont, Valle d'Aosta and Liguria.",
  },
  brand: { name: "Enrico Scarsi — Fotografia", kicker: "Photography studio · Turin" },
  nav: [
    { label: "About", href: "#chi-siamo" },
    { label: "Private", href: "#privati" },
    { label: "Corporate", href: "#aziende" },
    { label: "Services", href: "#servizi" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Reviews", href: "#recensioni" },
    { label: "Contact", href: "#contatti" },
  ],
  actions: { call: "Call", email: "Email", whatsapp: "WhatsApp" },
  chooser: { title: "Choose your language", hint: "You can switch at any time from the menu." },
  hero: {
    caption: "STUDIO, VIA OROPA 54B",
    headline: "Photographer in Turin. Beyond the simple shot.",
    sub: "A passion for photography meets professionalism and experience: reportage, portraiture, events, and advertising photography in Turin and across Piedmont.",
    ctas: ["Call the Studio", "Send an Email", "WhatsApp Message"],
    stats: [
      { label: "Google rating", value: "4.9 ★" },
      { label: "Reviews", value: "371" },
      { label: "Based in", value: "Turin" },
    ],
  },
  privates: {
    heading: "Professional Photography Services for Private Clients",
    body: [
      "Every session is built around the person in front of the lens: individual portraits, family photography, couples and maternity sessions, shaped by your needs and your pace.",
      "The aim is not a perfect pose but an authentic frame that carries the real personality of the person photographed. The studio is calm and attentive, because people only look spontaneous once they feel at ease.",
    ],
    frames: [
      { id: "IMG_002", caption: "PORTRAIT" },
      { id: "IMG_003", caption: "FAMILY" },
      { id: "IMG_004", caption: "COUPLE" },
      { id: "IMG_005", caption: "MATERNITY" },
    ],
  },
  corporate: {
    heading: "Professional Photography Services for Professional Clients",
    body: [
      "Reportage of corporate events and conferences, trade shows and exhibitions: images that hold the real atmosphere of the day rather than a version staged afterwards.",
      "Alongside reportage: editorial work, advertising campaigns and product catalogs. Long experience in advertising photography means coherent visuals that reinforce brand identity across channels.",
    ],
    frames: [
      { id: "IMG_006", caption: "CORPORATE EVENT" },
      { id: "IMG_007", caption: "ADVERTISING" },
      { id: "IMG_008", caption: "CATALOG" },
    ],
  },
  method: {
    heading: "Our Method",
    intro: "Three steps, the same ones for private and corporate clients.",
    steps: [
      {
        n: "01",
        title: "Listening & First Contact",
        body: "Every first contact is handled individually, with no ready-made formula. With private clients the conversation is about emotions and memories worth keeping; with businesses it is about communication and brand goals. One question guides it throughout: how can we really help you?",
      },
      {
        n: "02",
        title: "Planning Before the Shoot",
        body: "Everything that can make a difference is settled beforehand. Private clients get guidance on clothing, colour palette and mood. Corporate clients get detailed planning of timing, logistics and the final use of the images.",
      },
      {
        n: "03",
        title: "The Experience During the Shoot",
        body: "With families and portraits what matters is empathy and a relaxed atmosphere in which nobody feels watched. With professional clients the same care becomes precision, discretion and reliability: knowing when to be present and when to stay invisible.",
      },
    ],
  },
  services: {
    heading: "All Services",
    intro: "In studio and on location, for people and for companies.",
    items: [
      "Professional photo book for models and actresses",
      "Photography for websites and e-commerce",
      "Casting photography for actors and models",
      "Vacation rental photography",
      "Luxury Photo Tour in Turin",
      "Corporate and Event Photographer",
      "Family photography",
      "Photography for companies and offices",
      "Wedding photographer",
      "Video for events, interviews, tutorials",
      "Photography course — private lessons",
      "Passport & visa photo service",
      "Gift vouchers",
    ],
    callouts: [
      {
        kicker: "Gift vouchers",
        title: "Gift a photography session",
        body: "A voucher for a portrait, family or couple session: whoever receives it chooses the date and the type of shoot.",
        cta: "Request information",
      },
      {
        kicker: "ID photos",
        title: "Passport photos for US visas and foreign passports",
        body: "Compliant photos for visas, passports and official documents, in the formats required by different embassies. Collected at the studio.",
        cta: "Call the studio",
      },
    ],
  },
  coverage: {
    heading: "Where We Work",
    body: [
      "The studio is based in Turin and works across Piedmont: Cuneo, Asti, Alessandria, Novara, Vercelli, Biella and Verbano Cusio Ossola, including the Langhe and Roero, Monferrato, Lake Maggiore and Lake Orta, the Susa and Ossola valleys and the Alps.",
      "We also travel to Valle d'Aosta (Aosta, Courmayeur, Cervinia, Saint Vincent) and Liguria (Genoa, Savona, Imperia, La Spezia).",
    ],
    cities: [
      "Turin",
      "Cuneo",
      "Asti",
      "Alessandria",
      "Novara",
      "Vercelli",
      "Biella",
      "Verbania",
      "Aosta",
      "Genoa",
    ],
    caption: "MAP — PIEDMONT / VALLE D'AOSTA / LIGURIA",
  },
  portfolio: {
    heading: "Portfolio",
    intro: "Images will be placed here: each frame is a position already laid out.",
    tabs: ["All", "Portrait", "Events", "Corporate", "Product", "Weddings"],
    frames: [
      { id: "IMG_009", caption: "PORTRAIT", tab: "Portrait" },
      { id: "IMG_010", caption: "EVENTS", tab: "Events" },
      { id: "IMG_011", caption: "CORPORATE", tab: "Corporate" },
      { id: "IMG_012", caption: "PRODUCT", tab: "Product" },
      { id: "IMG_013", caption: "WEDDINGS", tab: "Weddings" },
      { id: "IMG_014", caption: "PORTRAIT", tab: "Portrait" },
      { id: "IMG_015", caption: "EVENTS", tab: "Events" },
      { id: "IMG_016", caption: "CORPORATE", tab: "Corporate" },
      { id: "IMG_017", caption: "PRODUCT", tab: "Product" },
      { id: "IMG_018", caption: "WEDDINGS", tab: "Weddings" },
    ],
  },
  reviews: {
    heading: "What Our Clients Say",
    badge: "4.9 ★",
    ratingLabel: "371 Google reviews",
    items: [
      {
        quote:
          "I booked a portrait session for my seventeen-year-old son. Enrico knows how to put even teenagers at ease, and the results are natural and spontaneous.",
        name: "Barbara Cappi",
        source: "Private client",
      },
      {
        quote:
          "I had very specific requirements and was fully satisfied. I also appreciated the help preparing the content for publication after the shoot.",
        name: "Edoardo Busti",
        source: "Professional client",
      },
      {
        quote:
          "Professional and attentive. The images are natural and clean, exactly right for professional use.",
        name: "Enrico Mauro",
        source: "Professional client",
      },
      {
        quote:
          "Excellent passport and ID photos at a fair price, plus a great conversation with Enrico while waiting.",
        name: "Ashish Thodupunuri",
        source: "Google review",
      },
      {
        quote:
          "Enrico was photographer and guide at once, telling us the history of Turin while shooting my family at the city's landmarks.",
        name: "Marco Martinetti",
        source: "Google review",
      },
      {
        quote:
          "The shoot was genuinely fun and the CV and work-document photos came out exactly as I had imagined.",
        name: "Arnaud Ruch",
        source: "Google review",
      },
    ],
  },
  about: {
    heading: "Enrico Scarsi, Photographer in Turin",
    caption: "ENRICO SCARSI",
    body: [
      "A Turin-based photographer specialising in portraiture and reportage, working with both private and professional clients across the region.",
      "A calm, attentive approach that puts subjects at ease, together with continual investment in equipment and technique to keep pace with contemporary photography.",
    ],
  },
  contact: {
    heading: "Contact",
    addressLabel: "Address",
    address: "Via Oropa 54B, Vanchiglietta/Vanchiglia, 10153 Torino TO",
    addressNote: "A short walk from Corso Belgio and Corso Casale",
    phoneLabel: "Phone",
    emailLabel: "Email",
    vatLabel: "VAT",
    mapCaption: "GOOGLE MAPS",
    socialLabel: "Social",
  },
  footer: {
    legal:
      "This website uses no profiling cookies and neither collects nor tracks users' personal data. The studio map and the typefaces are served by Google, which may set its own technical cookies — details on the Privacy page.",
    copyright: "Enrico Scarsi Fotografia — VAT 05529370016",
  },
};

export const CONTACT = {
  address: "Via Oropa 54B, 10153 Torino TO",
  phone1: "+39 011 8998291",
  phone2: "+39 348 9229300",
  email: "enrico.scarsi@gmail.com",
  vat: "05529370016",
  whatsapp: "+393489229300",
};

export const copyFor = (lang: Lang): Copy => (lang === "it" ? it : en);
