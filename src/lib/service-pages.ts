import type { Lang } from "./lang";

export type ServiceSlug =
  | "portrait"
  | "model-portfolio"
  | "casting"
  | "family"
  | "children-ceremonies"
  | "wedding"
  | "couple"
  | "birthdays-anniversaries"
  | "luxury-photo-tour-turin"
  | "passport-visa-photos"
  | "gift-vouchers"
  | "advertising"
  | "corporate-portrait"
  | "events"
  | "video"
  | "photography-courses";

type ServiceSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type ServicePageCopy = {
  title: string;
  eyebrow: string;
  intro: string;
  sourceLabel: string;
  overviewLabel: string;
  detailsLabel: string;
  pricingLabel: string;
  relatedLabel: string;
  allServicesLabel: string;
  cta: string;
  sections: ServiceSection[];
  pricing?: string[];
  facts?: string[];
};

export type ServicePage = {
  slug: ServiceSlug;
  category: "private" | "business" | "other";
  sourceUrls: string[];
  related: ServiceSlug[];
  copy: Record<Lang, ServicePageCopy>;
};

type ServiceLink = { slug: ServiceSlug; label: Record<Lang, string> };

const source = (path: string) => `https://www.fotografico.it/${path}`;

export const servicePages: ServicePage[] = [
  {
    slug: "portrait",
    category: "private",
    sourceUrls: [source("ritratto.htm"), source("social.html"), source("curriculum.html"), source("dating.html")],
    related: ["corporate-portrait", "model-portfolio", "passport-visa-photos"],
    copy: {
      en: {
        title: "Portrait photography",
        eyebrow: "Portraits, profiles, CV and personal image",
        intro:
          "Professional portraits for people who need an authentic, carefully made image: LinkedIn, CV, websites, social profiles, press material, dating profiles and personal presentation.",
        sourceLabel: "Source pages: ritratto, social, curriculum and dating photography.",
        overviewLabel: "What the service is for",
        detailsLabel: "Service details",
        pricingLabel: "Prices and booking",
        relatedLabel: "Continue with",
        allServicesLabel: "All services",
        cta: "Plan a portrait session",
        sections: [
          {
            heading: "A portrait that communicates who you are",
            body: [
              "A carefully made portrait is the first step in communicating professionalism, trust and authority. It is more than an improvised profile picture: it presents personality, style and professional credibility.",
              "The service is suitable for LinkedIn profiles, CVs, personal websites, company pages, team pages, pitch decks, presentations, conferences, press articles, interviews and personal branding. It can be created in the studio or on location, depending on the intended use and the atmosphere required.",
            ],
            bullets: [
              "Headshot, close portrait, half-length and full-length options.",
              "Studio or outdoor/location portraits.",
              "Use for LinkedIn, CV, websites, press, presentations, badges and personal branding.",
              "Guidance on posture, expression and image coherence during the session.",
            ],
          },
          {
            heading: "Social, dating and curriculum photographs",
            body: [
              "Portrait photography covers several practical uses: a simple CV image, a more complete LinkedIn/social profile service, and portraits for dating platforms. In each case the photograph should look credible, natural and current, not artificial or excessively retouched.",
              "For dating profiles, the goal is to avoid fake-looking images and AI-style retouching, presenting the person confidently and credibly through natural expression, clean light and a sense of real presence.",
            ],
          },
        ],
        pricing: [
          "CV/resume photo: €60; includes several studio photographs on a neutral background and 2–3 selected, optimized final images.",
          "LinkedIn/social network portrait: €120; includes two styles, two sets and clothing changes, over 10 selected and retouched final photographs, plus delivery of all photographs via WeTransfer.",
          "Urban & Business dating session in Turin: €200; over 200 photographs, up to four outfit changes, and 15–20 selected and retouched images in high resolution and app-optimized versions. Premium and Glamour sessions outside Turin are quoted individually.",
          "A 50% deposit is required to confirm either service.",
        ],
        facts: ["Studio in Turin, Via Oropa 54B.", "Services can be adapted for private and professional use."],
      },
      it: {
        title: "Ritratto fotografico",
        eyebrow: "Ritratti, profili, curriculum e immagine personale",
        intro:
          "Ritratti professionali per chi ha bisogno di un'immagine autentica e curata: LinkedIn, curriculum, siti web, profili social, stampa, dating e presentazione personale.",
        sourceLabel: "Pagine fonte: ritratto, social, curriculum e fotografie dating.",
        overviewLabel: "A cosa serve",
        detailsLabel: "Dettagli del servizio",
        pricingLabel: "Prezzi e prenotazione",
        relatedLabel: "Continua con",
        allServicesLabel: "Tutti i servizi",
        cta: "Organizza un ritratto",
        sections: [
          {
            heading: "Un ritratto che comunica chi sei",
            body: [
              "Un ritratto curato è il primo passo per comunicare professionalità, affidabilità e autorevolezza. Non è una foto improvvisata per il profilo: presenta personalità, stile e credibilità professionale.",
              "Il servizio è indicato per profili LinkedIn, curriculum, siti personali, pagine aziendali, team page, presentazioni, conferenze, articoli, interviste e personal branding. Può essere realizzato in studio o in location, secondo l'uso finale e l'atmosfera richiesta.",
            ],
            bullets: [
              "Headshot, primo piano, mezzo busto e figura intera.",
              "Ritratti in studio oppure in esterno/location.",
              "Uso per LinkedIn, CV, siti web, stampa, presentazioni, badge e personal branding.",
              "Guida su postura, espressione e coerenza dell'immagine durante la sessione.",
            ],
          },
          {
            heading: "Fotografie per social, dating e curriculum",
            body: [
              "Il ritratto risponde a diversi utilizzi pratici: una foto semplice per il curriculum, un servizio più completo per LinkedIn e social network, e ritratti per piattaforme di dating. In tutti i casi la fotografia deve essere credibile, naturale e attuale, non artificiale o eccessivamente ritoccata.",
              "Per i profili dating, l'obiettivo è evitare immagini finte e ritocchi in stile AI, presentando la persona in modo sicuro ma credibile, con espressione naturale, luce pulita e presenza reale.",
            ],
          },
        ],
        pricing: [
          "Foto curriculum: €60; comprende diversi scatti in studio su fondo neutro e 2–3 fotografie finali selezionate e ottimizzate.",
          "Ritratto LinkedIn/social network: €120; comprende due stili, due set e cambi di abbigliamento, oltre 10 fotografie finali selezionate e post-prodotte, più la consegna di tutti gli scatti via WeTransfer.",
          "Sessione dating Urban & Business a Torino: €200; oltre 200 scatti, fino a quattro cambi d'abito e 15–20 immagini selezionate e post-prodotte, consegnate in alta risoluzione e in versione ottimizzata per le app. Le sessioni Premium e Glamour fuori Torino vengono preventivate singolarmente.",
          "Per confermare il servizio scelto è richiesto un anticipo del 50%.",
        ],
        facts: ["Studio a Torino, Via Oropa 54B.", "Servizi adattabili a esigenze private e professionali."],
      },
    },
  },
  {
    slug: "model-portfolio",
    category: "private",
    sourceUrls: [source("modelle.htm"), source("book_donna.html"), source("book_uomo_torino.htm"), source("agenzie-moda-serie-torino.html")],
    related: ["casting", "portrait", "gift-vouchers"],
    copy: {
      en: {
        title: "Model and actor portfolio",
        eyebrow: "Book fotografico for models, actors and new faces",
        intro:
          "A professional portfolio for people who need credible photographs for agencies, casting calls, personal presentation or model work.",
        sourceLabel: "Source pages: modelle, book donna, book uomo and serious model agencies.",
        overviewLabel: "Studio approach",
        detailsLabel: "What is included",
        pricingLabel: "Price and booking",
        relatedLabel: "Continue with",
        allServicesLabel: "All services",
        cta: "Request portfolio information",
        sections: [
          {
            heading: "Credible photographs for agency presentation",
            body: [
              "Serious agency presentation requires more than a modern phone, a bedroom window and a social-media filter. Agencies evaluate faces, posture, proportions, versatility and credibility through photographs, and low-quality or distorted images can cause a candidate to be rejected immediately.",
              "The studio positions the portfolio as a careful, professional set of images that shows presence, photogenic quality and attention to detail. It is designed to present the person with a coherent and solid image, not with provocative or improvised photographs.",
            ],
          },
          {
            heading: "Safety and serious agencies",
            body: [
              "It is also important to recognize serious fashion agencies. Reliable agencies do not oblige candidates to use only their own photographer, pressure young people into unsuitable photographs, or replace professional selection with vague promises. For minors, a parent should be present.",
              "The service is built around a professional studio environment, guidance during the shoot, and photographs that can be used with agencies, casting opportunities and personal promotional channels.",
            ],
            bullets: [
              "Portfolio for models, actors, extras and new faces.",
              "Guidance on expression, pose, light and image selection.",
              "Studio portraits and, when useful, more editorial images for social channels.",
              "Professional makeup can be included for the female model portfolio service.",
            ],
          },
        ],
        pricing: ["Women’s model portfolio: €400; approximately four hours, professional makeup throughout, 5–6 clothing and set changes, about 250 photographs supplied in high and low resolution, including 30 post-produced images.", "A €200 deposit is required to reserve the date."],
      },
      it: {
        title: "Book per modelle, modelli e attori",
        eyebrow: "Book fotografico per agenzie, casting e immagine personale",
        intro:
          "Un portfolio professionale per chi ha bisogno di fotografie credibili per agenzie, casting, presentazione personale o lavoro come modello/modella.",
        sourceLabel: "Pagine fonte: modelle, book donna, book uomo e agenzie di moda serie.",
        overviewLabel: "Approccio dello studio",
        detailsLabel: "Cosa comprende",
        pricingLabel: "Prezzo e prenotazione",
        relatedLabel: "Continua con",
        allServicesLabel: "Tutti i servizi",
        cta: "Richiedi informazioni sul book",
        sections: [
          {
            heading: "Fotografie credibili per presentarsi alle agenzie",
            body: [
              "Per presentarsi a un'agenzia seria non bastano un telefono recente, una luce in camera e un filtro social. Le agenzie valutano volto, postura, proporzioni, versatilità e credibilità attraverso le fotografie, e immagini scadenti o distorte possono portare a essere scartati subito.",
              "Lo studio presenta il book come una serie di immagini curata e professionale, capace di mostrare presenza scenica, fotogenia e attenzione ai dettagli. L'obiettivo è proporre la persona con un'immagine coerente e solida, non con fotografie provocanti o improvvisate.",
            ],
          },
          {
            heading: "Sicurezza e agenzie serie",
            body: [
              "È importante anche riconoscere le agenzie di moda serie. Le agenzie affidabili non obbligano a usare un loro fotografo, non fanno pressione per fotografie inadatte e non sostituiscono una selezione professionale con promesse generiche. Per i minorenni è importante la presenza di un genitore.",
              "Il servizio si fonda su un ambiente di studio professionale, sulla guida durante lo shooting e su fotografie utilizzabili per agenzie, casting e canali promozionali personali.",
            ],
            bullets: [
              "Book per modelle, modelli, attori, comparse e nuovi volti.",
              "Guida su espressione, posa, luce e selezione delle immagini.",
              "Ritratti in studio e, quando utile, immagini più editoriali per i social.",
              "Il trucco professionale può essere incluso nel servizio book donna.",
            ],
          },
        ],
        pricing: ["Book fotografico donna: €400; circa quattro ore, make-up professionale per tutta la durata, 5–6 cambi di abbigliamento e set, circa 250 fotografie in alta e bassa definizione, di cui 30 post-prodotte.", "Per fissare la data è richiesto un anticipo di €200."],
      },
    },
  },
  {
    slug: "casting",
    category: "private",
    sourceUrls: [source("casting.html"), source("polaroid.html"), source("modelle.htm")],
    related: ["model-portfolio", "portrait"],
    copy: {
      en: {
        title: "Casting and digitals",
        eyebrow: "Actors, extras, models and agency submissions",
        intro:
          "Clean, credible photographs for castings, agency digitals and professional submissions, made to show the person clearly without disguising them.",
        sourceLabel: "Source pages: casting, polaroid and model portfolio.",
        overviewLabel: "Purpose",
        detailsLabel: "Service details",
        pricingLabel: "Prices and booking",
        relatedLabel: "Continue with",
        allServicesLabel: "All services",
        cta: "Prepare casting photographs",
        sections: [
          {
            heading: "Simple photographs, made professionally",
            body: [
              "The official casting and polaroid pages describe images for actors, extras and models who need to present themselves clearly. These photographs should not be over-styled: agencies and productions need to understand the person’s real face, physical presence and range.",
              "The session is guided in the studio with clean light, precise framing and a calm pace, so the final images can be used for casting platforms, agency submissions and portfolio updates.",
            ],
            bullets: ["Casting photographs for actors and extras.", "Polaroid/digitals for modeling agencies.", "Straightforward image selection for professional submission."],
          },
        ],
        pricing: ["Casting service: €180; about two hours, over 120 photographs delivered, including 15 post-produced images. Makeup is not included and can be added for €70.", "Polaroid/digitals service: €60.", "A 50% deposit is required to reserve the date."],
      },
      it: {
        title: "Casting e polaroid",
        eyebrow: "Attori, comparse, modelli e invii alle agenzie",
        intro:
          "Fotografie pulite e credibili per casting, polaroid d'agenzia e candidature professionali, realizzate per mostrare la persona con chiarezza senza trasformarla.",
        sourceLabel: "Pagine fonte: casting, polaroid e book fotografico.",
        overviewLabel: "Obiettivo",
        detailsLabel: "Dettagli del servizio",
        pricingLabel: "Prezzi e prenotazione",
        relatedLabel: "Continua con",
        allServicesLabel: "Tutti i servizi",
        cta: "Prepara le foto per il casting",
        sections: [
          {
            heading: "Fotografie semplici, realizzate professionalmente",
            body: [
              "Le pagine ufficiali dedicate a casting e polaroid descrivono immagini per attori, comparse e modelli che devono presentarsi con chiarezza. Queste fotografie non devono essere troppo costruite: agenzie e produzioni devono capire il volto reale, la presenza fisica e la versatilità della persona.",
              "La sessione viene guidata in studio con luce pulita, inquadratura precisa e ritmo tranquillo, così che le immagini finali possano essere usate per piattaforme casting, invii alle agenzie e aggiornamenti del portfolio.",
            ],
            bullets: ["Fotografie per casting attori e comparse.", "Polaroid/digitals per agenzie di moda.", "Selezione ordinata delle immagini per candidature professionali."],
          },
        ],
        pricing: ["Servizio fotografico casting: €180; circa due ore, oltre 120 fotografie consegnate, di cui 15 post-prodotte. Il make-up non è incluso e può essere aggiunto con un sovrapprezzo di €70.", "Servizio polaroid/digitals: €60.", "Per fissare la data è richiesto un anticipo del 50%."],
      },
    },
  },
  {
    slug: "family",
    category: "private",
    sourceUrls: [source("family.htm"), source("bambini.htm"), source("battesimo.html")],
    related: ["children-ceremonies", "gift-vouchers", "couple"],
    copy: {
      en: {
        title: "Family photography",
        eyebrow: "Families, children, pets and shared memories",
        intro:
          "Family photographs made in the studio, outdoors or at home, with a calm approach that lets people be themselves.",
        sourceLabel: "Source pages: family, children and baptism/communion/confirmation.",
        overviewLabel: "The family session",
        detailsLabel: "What can be included",
        pricingLabel: "Service notes",
        relatedLabel: "Continue with",
        allServicesLabel: "All services",
        cta: "Plan a family session",
        sections: [
          {
            heading: "Images that become part of family memory",
            body: [
              "Family photography preserves real relationships: parents, children, couples, grandparents and even pets can be included. The session can take place in the studio, outdoors in Turin, or in the family’s own home when that is the right setting.",
              "The tone of the session is intentionally relaxed. The goal is not to force everyone into a rigid pose, but to create photographs that feel natural and that still mean something years later.",
            ],
            bullets: ["Studio, outdoor or at-home family sessions.", "Children, parents, grandparents and pets can be included.", "Fine-art prints, canvas, plexiglass, aluminium, framed pieces, albums and high-resolution digital files are available."],
          },
        ],
        facts: ["Available in Turin and, on request, in Cuneo, Asti, Biella, Alessandria, Novara and Vercelli provinces, Valle d'Aosta and Liguria."],
      },
      it: {
        title: "Fotografia di famiglia",
        eyebrow: "Famiglie, bambini, animali e ricordi condivisi",
        intro:
          "Fotografie di famiglia realizzate in studio, all'aperto o a casa, con un approccio calmo che lascia le persone libere di essere sé stesse.",
        sourceLabel: "Pagine fonte: family, bambini e battesimo/comunione/cresima.",
        overviewLabel: "La sessione di famiglia",
        detailsLabel: "Cosa può comprendere",
        pricingLabel: "Note sul servizio",
        relatedLabel: "Continua con",
        allServicesLabel: "Tutti i servizi",
        cta: "Organizza un servizio di famiglia",
        sections: [
          {
            heading: "Immagini che entrano nella memoria della famiglia",
            body: [
              "La fotografia di famiglia conserva relazioni reali: genitori, figli, coppie, nonni e anche animali domestici possono essere inclusi. La sessione può svolgersi in studio, all'aperto a Torino o a casa della famiglia quando è l'ambiente più adatto.",
              "Il tono della sessione è volutamente rilassato. L'obiettivo non è costringere tutti in una posa rigida, ma creare fotografie naturali, capaci di significare qualcosa anche molti anni dopo.",
            ],
            bullets: ["Sessioni di famiglia in studio, all'aperto o a domicilio.", "Bambini, genitori, nonni e animali domestici possono essere inclusi.", "Sono disponibili stampe fine art, tela, plexiglass, alluminio, quadri, album e file digitali ad alta risoluzione."],
          },
        ],
        facts: ["Disponibile a Torino e, su richiesta, nelle province di Cuneo, Asti, Biella, Alessandria, Novara e Vercelli, in Valle d'Aosta e Liguria."],
      },
    },
  },
  {
    slug: "children-ceremonies",
    category: "private",
    sourceUrls: [source("bambini.htm"), source("battesimo.html")],
    related: ["family", "birthdays-anniversaries"],
    copy: {
      en: {
        title: "Children and ceremonies",
        eyebrow: "Children, baptism, first communion and confirmation",
        intro:
          "Photography for children and important family ceremonies, with attention to timing, light and the emotional value of the day.",
        sourceLabel: "Source pages: bambini and battesimo/comunione/cresima.",
        overviewLabel: "Occasions covered",
        detailsLabel: "Service details",
        pricingLabel: "Prices and planning",
        relatedLabel: "Continue with",
        allServicesLabel: "All services",
        cta: "Ask about a ceremony",
        sections: [
          {
            heading: "From children’s portraits to important rites",
            body: [
              "The service covers children’s portraits, casting photographs for children, baptisms, first communions and confirmations. These moments are difficult to repeat, and professional photography handles church light, family movement and important details more reliably than phone snapshots.",
              "At the end of a ceremony service, high-resolution digital images are delivered through WeTransfer or saved to the client’s hard drive or USB drive, with flexible packages and personalized estimates.",
            ],
            bullets: ["Children’s portraits and childhood milestones.", "Baptism, first communion and confirmation.", "Digital high-resolution image delivery.", "For ceremonies, contacting the studio 2–3 months in advance is recommended, especially in spring."],
          },
        ],
        pricing: ["Children’s casting photography: €180; approximately two hours, several looks, and about 15 selected and optimized final images."],
      },
      it: {
        title: "Bambini e cerimonie",
        eyebrow: "Bambini, battesimo, comunione e cresima",
        intro:
          "Fotografia per bambini e cerimonie importanti di famiglia, con attenzione ai tempi, alla luce e al valore emotivo della giornata.",
        sourceLabel: "Pagine fonte: bambini e battesimo/comunione/cresima.",
        overviewLabel: "Occasioni fotografate",
        detailsLabel: "Dettagli del servizio",
        pricingLabel: "Prezzi e pianificazione",
        relatedLabel: "Continua con",
        allServicesLabel: "Tutti i servizi",
        cta: "Chiedi informazioni per una cerimonia",
        sections: [
          {
            heading: "Dal ritratto dei bambini ai riti importanti",
            body: [
              "Il servizio comprende ritratti per bambini, fotografie per casting bambini, battesimi, prime comunioni e cresime. Sono momenti difficili da ripetere, e la fotografia professionale gestisce luci in chiesa, movimento della famiglia e dettagli importanti in modo più affidabile rispetto agli scatti con il telefono.",
              "Al termine del servizio per una cerimonia, le immagini digitali ad alta risoluzione vengono inviate tramite WeTransfer oppure scaricate su hard disk o chiavetta USB del cliente, con pacchetti flessibili e preventivi personalizzati.",
            ],
            bullets: ["Ritratti per bambini e momenti dell'infanzia.", "Battesimo, prima comunione e cresima.", "Consegna digitale ad alta risoluzione.", "Per le cerimonie è consigliato contattare lo studio con 2–3 mesi di anticipo, soprattutto in primavera."],
          },
        ],
        pricing: ["Servizio fotografico per casting bambini: €180; circa due ore, diversi look e circa 15 immagini finali selezionate e ottimizzate."],
      },
    },
  },
  {
    slug: "wedding",
    category: "private",
    sourceUrls: [source("fotografo_matrimonio_torino.htm"), source("matrimonio-torino.html"), source("matrimonio-civile-torino.html"), source("fotografo-matrimonio-religioso-torino.html"), source("fotografo-matrimonio-simbolico-torino.html")],
    related: ["couple", "luxury-photo-tour-turin", "video"],
    copy: {
      en: {
        title: "Wedding photography",
        eyebrow: "Civil, religious and symbolic weddings in Turin",
        intro:
          "Wedding photography with a calm documentary approach, preserving the atmosphere, relationships and gestures of the day.",
        sourceLabel: "Source pages: wedding, civil wedding, religious wedding and symbolic wedding.",
        overviewLabel: "Wedding coverage",
        detailsLabel: "Ceremony types",
        pricingLabel: "Service notes",
        relatedLabel: "Continue with",
        allServicesLabel: "All services",
        cta: "Ask about wedding photography",
        sections: [
          {
            heading: "A narrative record of the day",
            body: [
              "The service covers civil, religious and symbolic ceremonies in Turin. The emphasis is on telling the day through images: preparation, ceremony, guests, details, portraits and the atmosphere around the couple.",
              "The tone is documentary and discreet rather than theatrical. The photographer’s role is to anticipate moments, guide only when useful, and preserve the parts of the day that the couple will want to revisit later.",
            ],
          },
          {
            heading: "Civil, religious and symbolic weddings",
            body: [
              "Civil, religious and symbolic weddings each have different timing, spaces, rules and emotional rhythms. The service remains one coherent wedding offering while respecting each ceremony’s particular context.",
            ],
            bullets: ["Civil weddings in Turin.", "Religious ceremonies and church light conditions.", "Symbolic weddings and personalized celebrations.", "Optional connection with video coverage when needed."],
          },
        ],
      },
      it: {
        title: "Fotografia di matrimonio",
        eyebrow: "Matrimoni civili, religiosi e simbolici a Torino",
        intro:
          "Fotografia di matrimonio con approccio calmo e documentario, per conservare atmosfera, relazioni e gesti della giornata.",
        sourceLabel: "Pagine fonte: matrimonio, matrimonio civile, matrimonio religioso e matrimonio simbolico.",
        overviewLabel: "Racconto del matrimonio",
        detailsLabel: "Tipi di cerimonia",
        pricingLabel: "Note sul servizio",
        relatedLabel: "Continua con",
        allServicesLabel: "Tutti i servizi",
        cta: "Chiedi informazioni per il matrimonio",
        sections: [
          {
            heading: "Un racconto visivo della giornata",
            body: [
              "Il servizio comprende cerimonie civili, religiose e simboliche a Torino. L'attenzione è sul racconto della giornata: preparazione, cerimonia, invitati, dettagli, ritratti e atmosfera intorno alla coppia.",
              "Il tono è documentario e discreto, non teatrale. Il ruolo del fotografo è anticipare i momenti, guidare solo quando serve e conservare ciò che la coppia vorrà riguardare nel tempo.",
            ],
          },
          {
            heading: "Matrimoni civili, religiosi e simbolici",
            body: [
              "Matrimoni civili, religiosi e simbolici hanno tempi, spazi, regole e ritmi emotivi differenti. Il servizio resta un'offerta coerente, rispettando le particolarità di ogni cerimonia.",
            ],
            bullets: ["Matrimoni civili a Torino.", "Cerimonie religiose e gestione della luce in chiesa.", "Matrimoni simbolici e celebrazioni personalizzate.", "Possibile collegamento con il servizio video quando necessario."],
          },
        ],
      },
    },
  },
  {
    slug: "couple",
    category: "private",
    sourceUrls: [source("foto_coppie.html"), source("proposta_matrimonio.html"), source("tour.html")],
    related: ["wedding", "luxury-photo-tour-turin", "gift-vouchers"],
    copy: {
      en: {
        title: "Couple photography",
        eyebrow: "Engagement, proposals and portraits in Turin",
        intro:
          "A couple session can mark an engagement, a proposal, a trip to Turin or a simple moment worth keeping.",
        sourceLabel: "Source pages: couple photography, marriage proposal and luxury photo tour.",
        overviewLabel: "For couples",
        detailsLabel: "How it works",
        pricingLabel: "Service notes",
        relatedLabel: "Continue with",
        allServicesLabel: "All services",
        cta: "Plan a couple session",
        sections: [
          {
            heading: "A quiet way to preserve a shared moment",
            body: [
              "Couple and proposal photography connects portraiture with the city of Turin. The session may be intimate and simple, or planned around a proposal, anniversary, trip or celebration.",
              "The photographer can guide the couple through locations and timing while keeping the images natural. The aim is to preserve gestures, connection and atmosphere without forcing the session into a rigid pose.",
            ],
            bullets: ["Couple portraits and engagement sessions.", "Marriage proposal photography, discreetly planned in advance, with photographs and video of the proposal.", "Possible connection with the Turin photo tour for visitors."],
          },
        ],
      },
      it: {
        title: "Fotografia di coppia",
        eyebrow: "Fidanzamento, proposta e ritratti a Torino",
        intro:
          "Un servizio di coppia può raccontare un fidanzamento, una proposta di matrimonio, un viaggio a Torino o un momento semplice da conservare.",
        sourceLabel: "Pagine fonte: foto di coppia, proposta di matrimonio e luxury photo tour.",
        overviewLabel: "Per le coppie",
        detailsLabel: "Come funziona",
        pricingLabel: "Note sul servizio",
        relatedLabel: "Continua con",
        allServicesLabel: "Tutti i servizi",
        cta: "Organizza un servizio di coppia",
        sections: [
          {
            heading: "Un modo discreto per conservare un momento condiviso",
            body: [
              "La fotografia di coppia e della proposta di matrimonio collega il ritratto alla città di Torino. La sessione può essere intima e semplice, oppure pensata per una proposta, un anniversario, un viaggio o una celebrazione.",
              "Il fotografo può guidare la coppia tra luoghi e tempi della sessione mantenendo le immagini naturali. L'obiettivo è conservare gesti, relazione e atmosfera senza trasformare il servizio in una posa rigida.",
            ],
            bullets: ["Ritratti di coppia e servizi di fidanzamento.", "Proposta di matrimonio pianificata in anticipo e documentata con discrezione attraverso fotografie e video.", "Possibile collegamento con il tour fotografico di Torino per chi visita la città."],
          },
        ],
      },
    },
  },
  {
    slug: "birthdays-anniversaries",
    category: "private",
    sourceUrls: [source("compleanno.html"), source("blog-fotografie-diciottesimo-torino.html")],
    related: ["family", "video"],
    copy: {
      en: {
        title: "Birthdays and anniversaries",
        eyebrow: "Eighteenths, birthdays and private celebrations",
        intro:
          "Photography and, when useful, video for birthdays, eighteenth birthdays, anniversaries and private events in Turin.",
        sourceLabel: "Source pages: birthdays/anniversaries and eighteenth-birthday article.",
        overviewLabel: "Private events",
        detailsLabel: "Service details",
        pricingLabel: "Service notes",
        relatedLabel: "Continue with",
        allServicesLabel: "All services",
        cta: "Ask about a celebration",
        sections: [
          {
            heading: "A record of the people, not only the party",
            body: [
              "Coverage is available for eighteenth birthdays, special birthdays such as 30th, 40th, 50th and 60th celebrations, wedding anniversaries, graduation parties and engagements.",
              "A portable studio with backdrop and professional flash lighting can be installed at the venue for individual and small-group portraits of guests. The photographs are selected and delivered digitally by private link within 48 hours.",
            ],
          },
        ],
      },
      it: {
        title: "Compleanni e anniversari",
        eyebrow: "Diciottesimi, compleanni e feste private",
        intro:
          "Fotografia e, quando utile, video per compleanni, diciottesimi, anniversari ed eventi privati a Torino.",
        sourceLabel: "Pagine fonte: compleanni/anniversari e articolo sui diciottesimi.",
        overviewLabel: "Eventi privati",
        detailsLabel: "Dettagli del servizio",
        pricingLabel: "Note sul servizio",
        relatedLabel: "Continua con",
        allServicesLabel: "Tutti i servizi",
        cta: "Chiedi informazioni per una festa",
        sections: [
          {
            heading: "Il racconto delle persone, non solo della festa",
            body: [
              "Il servizio è disponibile per diciottesimi, compleanni speciali come 30, 40, 50 e 60 anni, anniversari di matrimonio, feste di laurea e fidanzamenti.",
              "Nella location può essere allestito uno studio mobile con fondale e illuminazione flash professionale per ritratti individuali e piccoli gruppi di invitati. Le fotografie vengono selezionate e consegnate in formato digitale tramite link privato entro 48 ore.",
            ],
          },
        ],
      },
    },
  },
  {
    slug: "luxury-photo-tour-turin",
    category: "private",
    sourceUrls: [source("tour.html"), source("tour-english.html")],
    related: ["couple", "family", "wedding"],
    copy: {
      en: {
        title: "Luxury Photo Tour in Turin",
        eyebrow: "Private photographic tour with a professional photographer",
        intro:
          "A premium photo experience in Turin, combining portrait photography with a guided route through the city’s most distinctive locations.",
        sourceLabel: "Source pages: tour and English tour page.",
        overviewLabel: "The experience",
        detailsLabel: "Locations and options",
        pricingLabel: "Service notes",
        relatedLabel: "Continue with",
        allServicesLabel: "All services",
        cta: "Ask about the tour",
        sections: [
          {
            heading: "Turin as part of the photograph",
            body: [
              "This private photographic experience combines a guided discovery of Turin with portraits and family images made in meaningful places around the city.",
              "The premium version includes a chauffeured Mercedes van with tinted windows, pickup from the client’s residence or hotel, and the possibility of an on-call makeup artist. The service is built for visitors, couples, families or anyone who wants photographs that belong unmistakably to Turin.",
            ],
            bullets: ["Piazza San Carlo, Galleria Subalpina, Via Roma and Via Garibaldi.", "Parco del Valentino, Borgo Medievale and Monte dei Cappuccini.", "Basilica di Superga, Casa della Vittoria, Parco Dora, Reggia di Venaria and Stupinigi.", "Photographs are delivered within 24 hours."],
          },
        ],
      },
      it: {
        title: "Luxury Photo Tour a Torino",
        eyebrow: "Tour fotografico privato con fotografo professionista",
        intro:
          "Un'esperienza fotografica premium a Torino, che unisce ritratto e percorso guidato nei luoghi più riconoscibili della città.",
        sourceLabel: "Pagine fonte: tour e pagina tour in inglese.",
        overviewLabel: "L'esperienza",
        detailsLabel: "Luoghi e opzioni",
        pricingLabel: "Note sul servizio",
        relatedLabel: "Continua con",
        allServicesLabel: "Tutti i servizi",
        cta: "Chiedi informazioni sul tour",
        sections: [
          {
            heading: "Torino come parte della fotografia",
            body: [
              "Questa esperienza fotografica privata unisce la scoperta guidata di Torino a ritratti e immagini di famiglia realizzati nei luoghi più significativi della città.",
              "La versione premium include van Mercedes con autista e vetri oscurati, pickup dalla casa o dall'hotel del cliente e la possibilità di una make-up artist su chiamata. Il servizio è pensato per visitatori, coppie, famiglie o chi desidera fotografie legate in modo riconoscibile a Torino.",
            ],
            bullets: ["Piazza San Carlo, Galleria Subalpina, Via Roma e Via Garibaldi.", "Parco del Valentino, Borgo Medievale e Monte dei Cappuccini.", "Basilica di Superga, Casa della Vittoria, Parco Dora, Reggia di Venaria e Stupinigi.", "Le fotografie vengono consegnate entro 24 ore."],
          },
        ],
      },
    },
  },
  {
    slug: "passport-visa-photos",
    category: "private",
    sourceUrls: [source("visa.html"), source("visa-en.html"), source("ETA.html")],
    related: ["portrait", "corporate-portrait"],
    copy: {
      en: {
        title: "Passport and visa photos",
        eyebrow: "Official document photographs for foreign visas",
        intro:
          "Professional ID photographs prepared according to the dimensions required by embassies and official visa procedures.",
        sourceLabel: "Source pages: visa, English visa page and UK ETA page.",
        overviewLabel: "Official specifications",
        detailsLabel: "Formats covered",
        pricingLabel: "Service details",
        relatedLabel: "Continue with",
        allServicesLabel: "All services",
        cta: "Prepare document photos",
        sections: [
          {
            heading: "Correct sizes for different countries",
            body: [
              "Passport and visa photographs must respect the technical requirements of each embassy. Photographs are made in the Turin studio with correct lighting, background, dimensions and format, and can be supplied digitally for online upload or printed on paper.",
            ],
            bullets: ["USA: 51 × 51 mm.", "United Kingdom: 35 × 45 mm.", "Canada: 35 × 45 mm, face 31–36 mm, two copies.", "China: 48 × 33 mm.", "India: 50 × 50 mm.", "Russia: 35 × 45 mm.", "Egypt: 35 × 45 mm or 4 × 6 cm.", "United Arab Emirates: 4 × 6 cm, two copies.", "Brazil: 3 × 4 cm.", "The photograph must be recent, without shadows or retouching; transparent glasses are permitted, while head coverings are accepted only for religious reasons."],
          },
        ],
      },
      it: {
        title: "Fototessere per visti e passaporti",
        eyebrow: "Fotografie ufficiali per documenti e visti esteri",
        intro:
          "Fototessere professionali preparate secondo le dimensioni richieste da ambasciate e procedure ufficiali per i visti.",
        sourceLabel: "Pagine fonte: visa, pagina visa in inglese e pagina ETA Regno Unito.",
        overviewLabel: "Specifiche ufficiali",
        detailsLabel: "Formati coperti",
        pricingLabel: "Dettagli del servizio",
        relatedLabel: "Continua con",
        allServicesLabel: "Tutti i servizi",
        cta: "Prepara le foto per documenti",
        sections: [
          {
            heading: "Formati corretti per paesi diversi",
            body: [
              "Le fotografie per passaporti e visti devono rispettare i requisiti tecnici di ogni ambasciata. Le immagini vengono realizzate nello studio di Torino con illuminazione, sfondo, dimensioni e formato corretti, e possono essere fornite in digitale per il caricamento online oppure stampate su carta.",
            ],
            bullets: ["USA: 51 × 51 mm.", "Regno Unito: 35 × 45 mm.", "Canada: 35 × 45 mm, volto 31–36 mm, due copie.", "Cina: 48 × 33 mm.", "India: 50 × 50 mm.", "Russia: 35 × 45 mm.", "Egitto: 35 × 45 mm oppure 4 × 6 cm.", "Emirati Arabi Uniti: 4 × 6 cm, due copie.", "Brasile: 3 × 4 cm.", "La fotografia deve essere recente, senza ombre o ritocchi; sono ammessi occhiali trasparenti, mentre i copricapi sono consentiti solo per motivi religiosi."],
          },
        ],
      },
    },
  },
  {
    slug: "gift-vouchers",
    category: "private",
    sourceUrls: [source("regalo-donna.htm")],
    related: ["portrait", "family", "couple"],
    copy: {
      en: {
        title: "Gift vouchers",
        eyebrow: "A photography session to give as a gift",
        intro:
          "Gift vouchers for portrait, family or couple sessions, allowing the recipient to choose the moment and type of experience.",
        sourceLabel: "Source page: regalo donna / gift voucher.",
        overviewLabel: "Gift idea",
        detailsLabel: "How it works",
        pricingLabel: "Voucher options",
        relatedLabel: "Continue with",
        allServicesLabel: "All services",
        cta: "Ask for a gift voucher",
        sections: [
          {
            heading: "A personal gift, not another object",
            body: [
              "A voucher can offer an individual or family portrait, a couple session, a fashion or creative portfolio, photography lessons, or another personalized photographic experience. The recipient can agree the date and exact type of session with the studio.",
              "It is suitable for birthdays, anniversaries, personal milestones or moments when a memory is more meaningful than a physical object.",
            ],
            bullets: ["Valid for 12 months.", "Delivered by email or collected from the Turin studio.", "Content, duration and type of service can be personalized."],
          },
        ],
        pricing: ["Social Network portrait voucher: €120.", "Casting photography voucher: €180.", "Women’s model portfolio voucher: €400.", "Other personalized vouchers are available without a published fixed price."],
      },
      it: {
        title: "Buoni regalo",
        eyebrow: "Un servizio fotografico da regalare",
        intro:
          "Buoni regalo per ritratti, servizi di famiglia o di coppia, lasciando alla persona che li riceve la scelta del momento e del tipo di esperienza.",
        sourceLabel: "Pagina fonte: regalo donna / buono regalo.",
        overviewLabel: "Idea regalo",
        detailsLabel: "Come funziona",
        pricingLabel: "Opzioni dei buoni",
        relatedLabel: "Continua con",
        allServicesLabel: "Tutti i servizi",
        cta: "Richiedi un buono regalo",
        sections: [
          {
            heading: "Un regalo personale, non un altro oggetto",
            body: [
              "Un buono può offrire un ritratto individuale o di famiglia, una sessione di coppia, un book moda o creativo, lezioni di fotografia oppure un'altra esperienza fotografica personalizzata. La persona che lo riceve può concordare con lo studio la data e il tipo preciso di servizio.",
              "È indicato per compleanni, anniversari, passaggi personali o momenti in cui un ricordo ha più valore di un oggetto fisico.",
            ],
            bullets: ["Validità di 12 mesi.", "Invio via email oppure ritiro nello studio di Torino.", "Contenuto, durata e tipologia del servizio possono essere personalizzati."],
          },
        ],
        pricing: ["Buono ritratto Social Network: €120.", "Buono servizio fotografico Casting: €180.", "Buono Book fotografico donna: €400.", "Sono disponibili altri buoni personalizzati senza un prezzo fisso pubblicato."],
      },
    },
  },
  {
    slug: "advertising",
    category: "business",
    sourceUrls: [source("pubblicita.htm"), source("fotografiaindustriale.htm"), source("architettura.htm"), source("hotel.html"), source("ristoranti.html"), source("ecommerce.html"), source("quadri.html")],
    related: ["events", "video", "corporate-portrait"],
    copy: {
      en: {
        title: "Advertising photography",
        eyebrow: "Product, commercial, industrial and hospitality imagery",
        intro:
          "One unified advertising-photography service for companies, agencies, hospitality businesses, e-commerce, products, interiors and industrial environments.",
        sourceLabel: "Source pages: pubblicità, industriale, architettura, hotel, ristoranti and ecommerce.",
        overviewLabel: "Advertising photography: how to make your brand visible?",
        detailsLabel: "Professional applications",
        pricingLabel: "Service notes",
        relatedLabel: "Continue with",
        allServicesLabel: "All services",
        cta: "Plan advertising photography",
        sections: [
          {
            heading: "Images that help a brand be seen clearly",
            body: [
              "Advertising photography serves companies, professionals and e-commerce businesses that want to stand out online and offline. A well-crafted image can attract, engage and increase a brand’s visibility when it is built around a clear brief and a coherent visual story.",
              "The workflow is practical: analysis of the brief, planning of the shoot, photography in the studio or on location, and post-production. The result is a set of images for websites, social channels, catalogs, campaigns, booking portals and sales platforms.",
            ],
          },
          {
            heading: "Industrial photography and production environments",
            body: [
              "Photography and video are strategic tools for communicating solidity, competence and quality. The work can document people, production processes, machinery, products and company spaces inside the client’s facilities.",
              "Industrial environments require experience, attention to detail and the ability to turn complex spaces into clear, ordered and visually strong content.",
            ],
          },
          {
            heading: "Hotels, interiors and holiday homes",
            body: [
              "Images are often the first contact between a potential guest and a property. Professional photographs for hotels, resorts, restaurants, B&Bs and holiday homes help communicate comfort, cleanliness, attention to detail and atmosphere on websites, Booking, Airbnb, Wimdu, TripAdvisor and social channels.",
              "For hotels the content frames professional imagery as a strategic investment that supports brand perception and bookings. For holiday homes it highlights the importance of clear, bright photographs that make a property trustworthy and inviting in a competitive market.",
            ],
          },
          {
            heading: "Restaurants, food, product and e-commerce",
            body: [
              "Restaurant photography is described as a way to show dishes, atmosphere and brand care on Instagram, delivery platforms and websites. The official page recommends working with professional cameras and lighting, ideally with enough time and space to create images without interfering with service.",
              "E-commerce photography covers clothing and products made in the Turin studio, with neutral or customized backgrounds and optional models. Accurate reproduction of paintings and artworks is also available for artists, galleries, museums and collectors.",
            ],
            bullets: ["Products and catalogs.", "Advertising campaigns and brand imagery.", "Hotels, interiors and hospitality.", "Holiday homes for Booking, Airbnb, Wimdu and TripAdvisor.", "Restaurants, food and delivery platforms.", "E-commerce clothing and product sets.", "Accurate reproduction of paintings and artworks."],
          },
        ],
        facts: ["Advertising Photography remains one unified offering; industrial, interiors, holiday homes and product/catalog are applications within it.", "Available in Turin and, on request, in Cuneo, Asti, Biella, Alessandria, Novara and Vercelli provinces, Valle d'Aosta and Liguria.", "No fixed advertising-service prices are published; each project is planned around its requirements."],
      },
      it: {
        title: "Fotografia pubblicitaria",
        eyebrow: "Prodotto, commerciale, industriale e hospitality",
        intro:
          "Un unico servizio di fotografia pubblicitaria per aziende, agenzie, hospitality, e-commerce, prodotti, interni e ambienti industriali.",
        sourceLabel: "Pagine fonte: pubblicità, industriale, architettura, hotel, ristoranti ed ecommerce.",
        overviewLabel: "Fotografia pubblicitaria: come rendere visibile il tuo brand?",
        detailsLabel: "Applicazioni professionali",
        pricingLabel: "Note sul servizio",
        relatedLabel: "Continua con",
        allServicesLabel: "Tutti i servizi",
        cta: "Organizza un servizio pubblicitario",
        sections: [
          {
            heading: "Immagini che aiutano un brand a farsi vedere con chiarezza",
            body: [
              "La fotografia pubblicitaria è rivolta ad aziende, professionisti ed e-commerce che desiderano distinguersi online e offline. Un'immagine costruita con cura può attrarre, coinvolgere e aumentare la visibilità del brand quando nasce da un brief chiaro e da una narrazione visiva coerente.",
              "Il flusso di lavoro è concreto: analisi del brief, pianificazione dello shooting, servizio in studio o in location e post-produzione. Il risultato è una serie di immagini per siti web, social, cataloghi, campagne, portali di prenotazione e piattaforme di vendita.",
            ],
          },
          {
            heading: "Fotografia industriale e ambienti produttivi",
            body: [
              "Fotografia e video sono strumenti strategici per comunicare solidità, competenza e qualità. Il lavoro può documentare persone, processi produttivi, macchinari, prodotti e spazi aziendali direttamente presso il cliente.",
              "Gli ambienti industriali richiedono esperienza, attenzione ai dettagli e capacità di trasformare spazi complessi in contenuti chiari, ordinati e di forte impatto visivo.",
            ],
          },
          {
            heading: "Hotel, interni e case vacanza",
            body: [
              "Le immagini sono spesso il primo contatto tra un potenziale ospite e una struttura. Fotografie professionali per hotel, resort, ristoranti, B&B e case vacanza aiutano a comunicare comfort, pulizia, cura dei dettagli e atmosfera su siti web, Booking, Airbnb, Wimdu, TripAdvisor e social.",
              "Per gli hotel il contenuto presenta l'immagine professionale come investimento strategico a supporto del brand e delle prenotazioni. Per le case vacanza evidenzia l'importanza di fotografie chiare e luminose che rendano la struttura affidabile e desiderabile in un mercato competitivo.",
            ],
          },
          {
            heading: "Ristoranti, food, prodotto ed e-commerce",
            body: [
              "La fotografia per ristoranti viene descritta come un modo per mostrare piatti, atmosfera e cura del brand su Instagram, piattaforme delivery e siti web. La pagina ufficiale consiglia di lavorare con fotocamere e illuminazione professionali, idealmente con tempi e spazi adeguati per creare immagini senza interferire con il servizio.",
              "La fotografia e-commerce comprende abbigliamento e prodotti realizzati nello studio di Torino, con sfondo neutro o personalizzato e modelli quando richiesti. È disponibile anche la riproduzione fedele di quadri e opere d'arte per artisti, gallerie, musei e collezionisti.",
            ],
            bullets: ["Prodotti e cataloghi.", "Campagne pubblicitarie e immagini di marca.", "Hotel, interni e hospitality.", "Case vacanza per Booking, Airbnb, Wimdu e TripAdvisor.", "Ristoranti, food e piattaforme delivery.", "Set per abbigliamento e prodotti e-commerce.", "Riproduzione fedele di quadri e opere d'arte."],
          },
        ],
        facts: ["La Fotografia pubblicitaria resta un'unica offerta: industriale, interni, case vacanza e prodotto/catalogo sono applicazioni al suo interno.", "Disponibile a Torino e, su richiesta, nelle province di Cuneo, Asti, Biella, Alessandria, Novara e Vercelli, in Valle d'Aosta e Liguria.", "Non sono pubblicati prezzi fissi per la fotografia pubblicitaria: ogni progetto viene pianificato in base alle sue esigenze."],
      },
    },
  },
  {
    slug: "corporate-portrait",
    category: "business",
    sourceUrls: [source("ritratto.htm"), source("social.html"), source("curriculum.html")],
    related: ["events", "advertising", "portrait"],
    copy: {
      en: {
        title: "Corporate portrait",
        eyebrow: "Professionals, teams, executives and company image",
        intro:
          "Corporate portraits for professionals, teams and organizations that need coherent, credible images for public communication.",
        sourceLabel: "Source pages: ritratto, social and curriculum.",
        overviewLabel: "Professional image",
        detailsLabel: "Use cases",
        pricingLabel: "Pricing found on the official site",
        relatedLabel: "Continue with",
        allServicesLabel: "All services",
        cta: "Plan corporate portraits",
        sections: [
          {
            heading: "A consistent face for professional communication",
            body: [
              "The official portrait page lists corporate websites, team pages, organization charts, presentations, pitches, conferences, articles and interviews among the uses for professional portraits. The service can be created for a single professional or for a company team.",
              "The photographs are built to communicate security, reliability and coherence, with a visual tone adapted to the person, role and company context.",
            ],
            bullets: ["Individual professionals and executives.", "Company teams and About Us pages.", "Medical, legal, institutional, political and executive profiles.", "Press, LinkedIn, badges and internal communication."],
          },
        ],
        pricing: ["CV/resume photo: €60.", "LinkedIn/social network portrait: €120."],
      },
      it: {
        title: "Ritratto corporate",
        eyebrow: "Professionisti, team, dirigenti e immagine aziendale",
        intro:
          "Ritratti corporate per professionisti, team e organizzazioni che hanno bisogno di immagini coerenti e credibili per la comunicazione pubblica.",
        sourceLabel: "Pagine fonte: ritratto, social e curriculum.",
        overviewLabel: "Immagine professionale",
        detailsLabel: "Utilizzi",
        pricingLabel: "Prezzi trovati sul sito ufficiale",
        relatedLabel: "Continua con",
        allServicesLabel: "Tutti i servizi",
        cta: "Organizza ritratti corporate",
        sections: [
          {
            heading: "Un volto coerente per la comunicazione professionale",
            body: [
              "La pagina ufficiale del ritratto indica siti aziendali, team page, organigrammi, presentazioni, pitch, conferenze, articoli e interviste tra gli utilizzi del ritratto professionale. Il servizio può essere realizzato per un singolo professionista o per un team aziendale.",
              "Le fotografie sono costruite per comunicare sicurezza, affidabilità e coerenza, con un tono visivo adattato alla persona, al ruolo e al contesto dell'azienda.",
            ],
            bullets: ["Professionisti individuali e dirigenti.", "Team aziendali e pagine About Us.", "Profili medici, legali, istituzionali, politici ed executive.", "Stampa, LinkedIn, badge e comunicazione interna."],
          },
        ],
        pricing: ["Foto curriculum: €60.", "Ritratto LinkedIn/social network: €120."],
      },
    },
  },
  {
    slug: "events",
    category: "business",
    sourceUrls: [source("eventi.htm"), source("eventi-english.html"), source("blog-fotografia-congresso.html"), source("blog-fotografie-eventi-aperto.html")],
    related: ["video", "corporate-portrait", "advertising"],
    copy: {
      en: {
        title: "Event photography",
        eyebrow: "Corporate events, congresses, conventions and launches",
        intro:
          "Photography for corporate events, congresses and institutional occasions, with discreet coverage and fast, organized delivery.",
        sourceLabel: "Source pages: eventi, English events page and event articles.",
        overviewLabel: "Corporate reportage",
        detailsLabel: "Situations covered",
        pricingLabel: "Notes from the official site",
        relatedLabel: "Continue with",
        allServicesLabel: "All services",
        cta: "Plan event coverage",
        sections: [
          {
            heading: "Not just a few photographs of the day",
            body: [
              "The official event pages describe congresses, corporate meetings, conventions, trade shows, product launches, institutional events and multi-session programs. The service is intended for companies and agencies that need reliable documentation of a day without interrupting its rhythm.",
              "The content emphasizes a single point of contact when photo and video teams are both involved, and the possibility of quick delivery during the event or immediately afterwards when communication deadlines require it.",
            ],
            bullets: ["Scientific and medical congresses.", "Corporate conventions and meetings.", "Institutional events and product launches.", "Trade shows, exhibitions and multi-session events.", "Fast selection and delivery when needed."],
          },
        ],
        facts: ["The official site states availability in Turin, Piedmont and throughout Italy for corporate events."],
      },
      it: {
        title: "Fotografia di eventi",
        eyebrow: "Eventi aziendali, congressi, convention e lanci prodotto",
        intro:
          "Fotografia per eventi aziendali, congressi e occasioni istituzionali, con copertura discreta e consegna organizzata anche in tempi rapidi.",
        sourceLabel: "Pagine fonte: eventi, pagina eventi in inglese e articoli sugli eventi.",
        overviewLabel: "Reportage aziendale",
        detailsLabel: "Situazioni coperte",
        pricingLabel: "Note dal sito ufficiale",
        relatedLabel: "Continua con",
        allServicesLabel: "Tutti i servizi",
        cta: "Organizza la copertura di un evento",
        sections: [
          {
            heading: "Non solo qualche foto della giornata",
            body: [
              "Le pagine ufficiali sugli eventi descrivono congressi, meeting aziendali, convention, fiere, lanci prodotto, eventi istituzionali e programmi con più sessioni. Il servizio è pensato per aziende e agenzie che hanno bisogno di documentare una giornata senza interromperne il ritmo.",
              "Il contenuto sottolinea l'utilità di un unico referente quando sono coinvolti team foto e video, e la possibilità di una consegna rapida durante l'evento o subito dopo quando le scadenze di comunicazione lo richiedono.",
            ],
            bullets: ["Congressi scientifici e medici.", "Convention e meeting aziendali.", "Eventi istituzionali e lanci prodotto.", "Fiere, esposizioni ed eventi con più sessioni.", "Selezione e consegna rapida quando necessario."],
          },
        ],
        facts: ["Il sito ufficiale indica disponibilità a Torino, in Piemonte e in tutta Italia per eventi aziendali."],
      },
    },
  },
  {
    slug: "video",
    category: "other",
    sourceUrls: [source("video.html"), source("eventi.htm")],
    related: ["events", "advertising", "birthdays-anniversaries"],
    copy: {
      en: {
        title: "Video footage",
        eyebrow: "Events, interviews, tutorials and company content",
        intro:
          "Professional video production connected to events, interviews, tutorials, corporate communication and visual storytelling.",
        sourceLabel: "Source pages: video and events.",
        overviewLabel: "Video service",
        detailsLabel: "What the source site shows",
        pricingLabel: "Notes from the official site",
        relatedLabel: "Continue with",
        allServicesLabel: "All services",
        cta: "Ask about video coverage",
        sections: [
          {
            heading: "Video as part of the same visual language",
            body: [
              "The official video page connects professional filming with corporate events, congresses, interviews, tutorials and company communication. It functions naturally beside the event-photography service, especially when speeches, movement, atmosphere or process need to be preserved.",
              "The old page includes several embedded portfolio videos hosted by the studio. The new homepage video section remains unchanged; this internal page carries the service context and explains when video is useful.",
            ],
            bullets: ["Corporate events and congresses.", "Interviews and tutorials.", "Company presentation and process footage.", "Possible coordination with still photography."],
          },
        ],
      },
      it: {
        title: "Riprese video",
        eyebrow: "Eventi, interviste, tutorial e contenuti aziendali",
        intro:
          "Produzione video professionale collegata a eventi, interviste, tutorial, comunicazione aziendale e racconto visivo.",
        sourceLabel: "Pagine fonte: video ed eventi.",
        overviewLabel: "Servizio video",
        detailsLabel: "Cosa mostra il sito fonte",
        pricingLabel: "Note dal sito ufficiale",
        relatedLabel: "Continua con",
        allServicesLabel: "Tutti i servizi",
        cta: "Chiedi informazioni sul video",
        sections: [
          {
            heading: "Il video come parte dello stesso linguaggio visivo",
            body: [
              "La pagina ufficiale del video collega le riprese professionali a eventi aziendali, congressi, interviste, tutorial e comunicazione d'impresa. Il servizio si affianca in modo naturale alla fotografia di eventi, soprattutto quando discorsi, movimento, atmosfera o processi devono essere conservati.",
              "La vecchia pagina include diversi video portfolio incorporati e ospitati dallo studio. La sezione video dell'attuale homepage resta invariata; questa pagina interna conserva il contesto del servizio e spiega quando il video è utile.",
            ],
            bullets: ["Eventi aziendali e congressi.", "Interviste e tutorial.", "Presentazione aziendale e riprese di processi.", "Possibile coordinamento con la fotografia."],
          },
        ],
      },
    },
  },
  {
    slug: "photography-courses",
    category: "other",
    sourceUrls: [source("corso.htm")],
    related: ["portrait", "events"],
    copy: {
      en: {
        title: "Photography courses",
        eyebrow: "Individual lessons in Turin",
        intro:
          "One-to-one photography lessons for people who want to learn with a real camera and direct practical guidance.",
        sourceLabel: "Source page: corso di fotografia.",
        overviewLabel: "Learning format",
        detailsLabel: "Course details",
        pricingLabel: "Notes from the official site",
        relatedLabel: "Continue with",
        allServicesLabel: "All services",
        cta: "Ask about lessons",
        sections: [
          {
            heading: "Individual lessons, not a generic group course",
            body: [
              "The official course page strongly positions the lessons as individual, practical teaching rather than a standardized group course. The format adapts to the learner’s level and questions, making it useful for people who want to understand exposure, light, composition and real camera use.",
              "The source page explicitly requires a real camera — reflex or mirrorless — and does not present the course as smartphone photography training. Students come from Turin and across Piedmont, including Alessandria, Asti, Biella, Cuneo, Novara, Vercelli, VCO and Verbania.",
            ],
            bullets: ["One-to-one lessons.", "Practical work with DSLR or mirrorless cameras.", "No smartphone-only course according to the source page.", "Adapted to the student’s level and photographic goals."],
          },
        ],
      },
      it: {
        title: "Corsi di fotografia",
        eyebrow: "Lezioni individuali a Torino",
        intro:
          "Lezioni individuali di fotografia per chi vuole imparare con una vera macchina fotografica e una guida pratica diretta.",
        sourceLabel: "Pagina fonte: corso di fotografia.",
        overviewLabel: "Formato didattico",
        detailsLabel: "Dettagli del corso",
        pricingLabel: "Note dal sito ufficiale",
        relatedLabel: "Continua con",
        allServicesLabel: "Tutti i servizi",
        cta: "Chiedi informazioni sulle lezioni",
        sections: [
          {
            heading: "Lezioni individuali, non un corso di gruppo generico",
            body: [
              "La pagina ufficiale del corso presenta con forza le lezioni come insegnamento individuale e pratico, non come corso di gruppo standardizzato. Il formato si adatta al livello e alle domande di chi partecipa, ed è utile per capire esposizione, luce, composizione e uso reale della macchina fotografica.",
              "La pagina fonte richiede esplicitamente una vera fotocamera — reflex o mirrorless — e non presenta il corso come formazione di fotografia con smartphone. Gli allievi arrivano da Torino e dal Piemonte, inclusi Alessandria, Asti, Biella, Cuneo, Novara, Vercelli, VCO e Verbania.",
            ],
            bullets: ["Lezioni individuali.", "Lavoro pratico con reflex o mirrorless.", "Nessun corso solo smartphone secondo la pagina fonte.", "Percorso adattato al livello e agli obiettivi fotografici dello studente."],
          },
        ],
      },
    },
  },
];

export const additionalServiceLinks: ServiceLink[] = [
  { slug: "model-portfolio", label: { en: "Model and actor portfolio", it: "Book per modelle, modelli e attori" } },
  { slug: "casting", label: { en: "Casting and digitals", it: "Casting e polaroid" } },
  { slug: "children-ceremonies", label: { en: "Children and ceremonies", it: "Bambini e cerimonie" } },
  { slug: "birthdays-anniversaries", label: { en: "Birthdays and anniversaries", it: "Compleanni e anniversari" } },
];

export const serviceGroupsForArchive: { title: Record<Lang, string>; items: ServiceLink[] }[] = [
  {
    title: { en: "Portrait archive", it: "Archivio ritratto" },
    items: [
      { slug: "model-portfolio", label: { en: "Model and actor portfolio", it: "Book per modelle, modelli e attori" } },
      { slug: "casting", label: { en: "Casting and digitals", it: "Casting e polaroid" } },
    ],
  },
  {
    title: { en: "Family occasions", it: "Occasioni di famiglia" },
    items: [
      { slug: "children-ceremonies", label: { en: "Children and ceremonies", it: "Bambini e cerimonie" } },
      { slug: "birthdays-anniversaries", label: { en: "Birthdays and anniversaries", it: "Compleanni e anniversari" } },
    ],
  },
];

const labelToSlug: Record<Lang, Record<string, ServiceSlug>> = {
  en: {
    Portrait: "portrait",
    Family: "family",
    Marriage: "wedding",
    "Couple photography": "couple",
    "Luxury Photo Tour in Turin": "luxury-photo-tour-turin",
    "Passport and visa photos": "passport-visa-photos",
    "Gift vouchers": "gift-vouchers",
    "Advertising photography": "advertising",
    "Corporate portrait": "corporate-portrait",
    "Event photography": "events",
    "Industrial photography": "advertising",
    "Architecture and interiors": "advertising",
    "Holiday homes": "advertising",
    "Product and catalog": "advertising",
    "Video footage": "video",
    "Photography courses": "photography-courses",
  },
  it: {
    Ritratto: "portrait",
    Famiglia: "family",
    Matrimonio: "wedding",
    "Fotografia di coppia": "couple",
    "Luxury Photo Tour a Torino": "luxury-photo-tour-turin",
    "Fototessere per visti e passaporti": "passport-visa-photos",
    "Buoni regalo": "gift-vouchers",
    "Fotografia pubblicitaria": "advertising",
    "Ritratto corporate": "corporate-portrait",
    "Fotografia di eventi": "events",
    "Fotografia industriale": "advertising",
    "Architettura e interni": "advertising",
    "Case vacanza": "advertising",
    "Prodotto e catalogo": "advertising",
    "Riprese video": "video",
    "Corsi di fotografia": "photography-courses",
  },
};

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((service) => service.slug === slug);
}

export function getServiceSlugForLabel(label: string, lang: Lang): ServiceSlug | undefined {
  return labelToSlug[lang][label];
}

export function getServiceTitle(slug: ServiceSlug, lang: Lang) {
  const page = getServicePage(slug);
  return page?.copy[lang].title ?? slug;
}


export const serviceRouteAliases: Record<string, ServiceSlug> = {
  advertising: "advertising",
  industrial: "advertising",
  architecture: "advertising",
  interiors: "advertising",
  "holiday-homes": "advertising",
  products: "advertising",
  portrait: "portrait",
  "corporate-portrait": "corporate-portrait",
  "model-portfolio": "model-portfolio",
  casting: "casting",
  family: "family",
  "children-ceremonies": "children-ceremonies",
  wedding: "wedding",
  couple: "couple",
  "birthdays-anniversaries": "birthdays-anniversaries",
  "luxury-photo-tour-turin": "luxury-photo-tour-turin",
  "passport-visa-photos": "passport-visa-photos",
  "gift-vouchers": "gift-vouchers",
  events: "events",
  video: "video",
  "photography-courses": "photography-courses",
};

export const serviceSlugs = servicePages.map((service) => service.slug);
