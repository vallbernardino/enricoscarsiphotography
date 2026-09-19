import { BLOG_URL } from "./home-copy";
import type { Lang } from "./lang";

export type SearchItem = { title: string; excerpt: string; href: string; external?: boolean };

const entries: Record<Lang, SearchItem[]> = {
  en: [
    { title: "Services", excerpt: "Photography for private individuals, companies and professionals.", href: "/services" },
    { title: "Portrait", excerpt: "Natural, carefully directed portrait photography for individuals.", href: "/services" },
    { title: "Family", excerpt: "Relaxed family photography with authentic expressions and connection.", href: "/services" },
    { title: "Marriage", excerpt: "Discreet wedding photography and documentary storytelling.", href: "/services" },
    { title: "Couple photography", excerpt: "Editorial couple photography in Turin and beyond.", href: "/services" },
    { title: "Luxury Photo Tour in Turin", excerpt: "A private photographic experience through Turin.", href: "/services" },
    { title: "Passport and visa photos", excerpt: "Professional compliant identity photographs in the studio.", href: "/services" },
    { title: "Gift vouchers", excerpt: "Give a portrait or photography experience.", href: "/services" },
    { title: "Advertising photography", excerpt: "Visual storytelling for brands, products and services.", href: "/services/advertising" },
    { title: "Corporate portrait", excerpt: "Professional portraits for people, teams and organisations.", href: "/services" },
    { title: "Events", excerpt: "Observational event photography for private and professional occasions.", href: "/services" },
    { title: "Industrial photography", excerpt: "People, processes and production environments within advertising photography.", href: "/services/advertising" },
    { title: "Architecture and interiors", excerpt: "Spaces, interiors and buildings within advertising photography.", href: "/services/advertising" },
    { title: "Holiday homes", excerpt: "Natural property photography for hospitality and holiday homes.", href: "/services/advertising" },
    { title: "Product and catalog", excerpt: "Product, catalogue and commercial photography.", href: "/services/advertising" },
    { title: "Video footage", excerpt: "Moving-image footage for stories, places and businesses.", href: "/services" },
    { title: "Photography courses", excerpt: "Practical photography education with an experienced professional.", href: "/services" },
    { title: "The photographer", excerpt: "Meet Enrico Scarsi, a professional photographer in Turin since 1989.", href: "/photographer" },
    { title: "Contact and studio", excerpt: "Via Oropa 54B, Turin. Phone, email, map and inquiry form.", href: "/contact" },
    { title: "Privacy", excerpt: "Browsing data, third-party services and legal details.", href: "/privacy" },
    { title: "Blog", excerpt: "Stories and articles from Enrico Scarsi Fotografia.", href: BLOG_URL, external: true },
  ],
  it: [
    { title: "Servizi", excerpt: "Fotografia per privati, aziende e professionisti.", href: "/services" },
    { title: "Ritratto", excerpt: "Ritratti naturali e curati per singoli e professionisti.", href: "/services" },
    { title: "Famiglia", excerpt: "Fotografia di famiglia spontanea, autentica e rilassata.", href: "/services" },
    { title: "Matrimonio", excerpt: "Fotografia di matrimonio discreta, con taglio documentaristico.", href: "/services" },
    { title: "Fotografia di coppia", excerpt: "Ritratti di coppia dal linguaggio editoriale, a Torino e non solo.", href: "/services" },
    { title: "Luxury Photo Tour a Torino", excerpt: "Un’esperienza fotografica privata attraverso Torino.", href: "/services" },
    { title: "Fototessere per passaporti e visti", excerpt: "Fototessere professionali conformi ai requisiti, realizzate in studio.", href: "/services" },
    { title: "Buoni regalo", excerpt: "Regala un ritratto o un’esperienza fotografica.", href: "/services" },
    { title: "Fotografia pubblicitaria", excerpt: "Narrazione visiva per brand, prodotti e servizi.", href: "/services/advertising" },
    { title: "Ritratto corporate", excerpt: "Ritratti professionali per persone, team e organizzazioni.", href: "/services" },
    { title: "Eventi", excerpt: "Reportage di eventi privati e professionali.", href: "/services" },
    { title: "Fotografia industriale", excerpt: "Persone, processi e ambienti produttivi nell’ambito della fotografia pubblicitaria.", href: "/services/advertising" },
    { title: "Architettura e interni", excerpt: "Spazi, interni ed edifici nell’ambito della fotografia pubblicitaria.", href: "/services/advertising" },
    { title: "Case vacanza", excerpt: "Fotografia immobiliare naturale per ospitalità e case vacanza.", href: "/services/advertising" },
    { title: "Prodotto e catalogo", excerpt: "Fotografia di prodotto, catalogo e commerciale.", href: "/services/advertising" },
    { title: "Riprese video", excerpt: "Immagini in movimento per storie, luoghi e imprese.", href: "/services" },
    { title: "Corsi di fotografia", excerpt: "Formazione fotografica pratica con un professionista esperto.", href: "/services" },
    { title: "Il fotografo", excerpt: "Enrico Scarsi, fotografo professionista a Torino dal 1989.", href: "/photographer" },
    { title: "Contatti e studio", excerpt: "Via Oropa 54B, Torino. Telefono, email, mappa e modulo di richiesta.", href: "/contact" },
    { title: "Privacy", excerpt: "Dati di navigazione, servizi esterni e informazioni legali.", href: "/privacy" },
    { title: "Blog", excerpt: "Storie e articoli di Enrico Scarsi Fotografia.", href: BLOG_URL, external: true },
  ],
};

const normalize = (value: string) =>
  value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().trim();

export function searchSite(lang: Lang, query: string) {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  return entries[lang].filter((item) => {
    const haystack = normalize(`${item.title} ${item.excerpt}`);
    return words.every((word) => haystack.includes(word));
  });
}