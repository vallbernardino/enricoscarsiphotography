import advertising from "@/assets/adv-product.jpg";
import property from "@/assets/adv-vacation.jpg";
import family from "@/assets/work-family.jpg";
import corporate from "@/assets/work-corporate.jpg";
import course from "@/assets/work-course.jpg";
import industrial from "@/assets/work-industrial.jpg";
import interior from "@/assets/work-interior.jpg";
import product from "@/assets/work-product.jpg";
import business from "@/assets/slide-business.jpg";
import events from "@/assets/slide-events.jpg";
import portraits from "@/assets/slide-portraits.jpg";
import studio from "@/assets/slide-studio.jpg";
import wedding from "@/assets/slide-weddings.jpg";
import torino from "@/assets/torino-street.jpg";
import type { Lang } from "./lang";

export const selectedWorkCopy: Record<Lang, { label: string; description: string; view: string }> = {
  en: {
    label: "SELECTED WORK",
    description:
      "A moving portfolio across portraits, families, weddings, Turin stories, events, business imagery, interiors, industry, products and photography education.",
    view: "VIEW ALL",
  },
  it: {
    label: "LAVORI SELEZIONATI",
    description:
      "Un portfolio in movimento tra ritratti, famiglie, matrimoni, racconti a Torino, eventi, fotografia per aziende, interni, industria, prodotti e formazione fotografica.",
    view: "VEDI TUTTO",
  },
};

export const SELECTED_WORK_ITEMS = {
  portrait: {
    src: portraits,
    width: 1920,
    height: 1088,
    position: "50% 44%",
    alt: {
      en: "Natural portrait photography in soft studio light",
      it: "Ritratto naturale con luce morbida in studio",
    },
  },
  family: {
    src: family,
    width: 1280,
    height: 1600,
    position: "50% 42%",
    alt: {
      en: "A family photographed in a candid moment in Turin",
      it: "Famiglia fotografata in un momento spontaneo a Torino",
    },
  },
  wedding: {
    src: wedding,
    width: 1920,
    height: 1088,
    position: "50% 40%",
    alt: {
      en: "Wedding reportage with natural light and documentary framing",
      it: "Reportage di matrimonio con luce naturale e taglio documentaristico",
    },
  },
  couple: {
    src: studio,
    width: 1920,
    height: 1088,
    position: "50% 46%",
    alt: {
      en: "Editorial couple photography with a quiet, natural mood",
      it: "Fotografia di coppia dal tono editoriale, naturale e discreto",
    },
  },
  torino: {
    src: torino,
    width: 1920,
    height: 1200,
    position: "50% 50%",
    alt: {
      en: "Turin street photography for a private photo tour",
      it: "Fotografia di strada a Torino per un photo tour privato",
    },
  },
  business: {
    src: business,
    width: 1920,
    height: 1088,
    position: "50% 43%",
    alt: {
      en: "Professional portrait context for business and identity photography",
      it: "Contesto di ritratto professionale per aziende e immagini identificative",
    },
  },
  corporate: {
    src: corporate,
    width: 1280,
    height: 1600,
    position: "50% 42%",
    alt: {
      en: "Corporate portrait in the workplace",
      it: "Ritratto corporate nel luogo di lavoro",
    },
  },
  events: {
    src: events,
    width: 1920,
    height: 1088,
    position: "50% 45%",
    alt: {
      en: "Observational event photography for professional occasions",
      it: "Reportage di eventi professionali con sguardo discreto",
    },
  },
  advertising: {
    src: advertising,
    width: 1280,
    height: 1024,
    position: "50% 50%",
    alt: {
      en: "Advertising and commercial photography for a product story",
      it: "Fotografia pubblicitaria e commerciale per il racconto di un prodotto",
    },
  },
  industrial: {
    src: industrial,
    width: 1600,
    height: 1200,
    position: "50% 50%",
    alt: {
      en: "Industrial photography showing process and production environment",
      it: "Fotografia industriale di processo e ambiente produttivo",
    },
  },
  interior: {
    src: interior,
    width: 1600,
    height: 1200,
    position: "50% 50%",
    alt: {
      en: "Architecture and interiors photography with natural atmosphere",
      it: "Fotografia di architettura e interni con atmosfera naturale",
    },
  },
  property: {
    src: property,
    width: 1280,
    height: 1024,
    position: "50% 50%",
    alt: {
      en: "Holiday home and property photography with lived-in detail",
      it: "Fotografia per case vacanza e immobili con dettagli autentici",
    },
  },
  product: {
    src: product,
    width: 1280,
    height: 1600,
    position: "50% 50%",
    alt: {
      en: "Product and catalogue photography with refined texture",
      it: "Fotografia di prodotto e catalogo con texture curate",
    },
  },
  course: {
    src: course,
    width: 1600,
    height: 1200,
    position: "50% 50%",
    alt: {
      en: "Photography course setting with practical professional guidance",
      it: "Corso di fotografia con guida pratica e professionale",
    },
  },
} as const;

export type SelectedWorkKey = keyof typeof SELECTED_WORK_ITEMS;

type SelectedWorkFrame = {
  key: SelectedWorkKey;
  className: string;
};

export const SELECTED_WORK_DESKTOP_COLUMNS: readonly (readonly SelectedWorkFrame[])[] = [
  [
    { key: "portrait", className: "h-[42svh]" },
    { key: "torino", className: "h-[30svh]" },
    { key: "industrial", className: "h-[36svh]" },
    { key: "couple", className: "h-[44svh]" },
  ],
  [
    { key: "family", className: "h-[58svh]" },
    { key: "events", className: "h-[34svh]" },
    { key: "interior", className: "h-[46svh]" },
    { key: "advertising", className: "h-[32svh]" },
  ],
  [
    { key: "wedding", className: "h-[38svh]" },
    { key: "corporate", className: "h-[52svh]" },
    { key: "property", className: "h-[34svh]" },
    { key: "product", className: "h-[46svh]" },
    { key: "course", className: "h-[34svh]" },
  ],
] as const;

export const SELECTED_WORK_MOBILE_COLUMNS: readonly (readonly SelectedWorkFrame[])[] = [
  [
    { key: "portrait", className: "h-[250px]" },
    { key: "family", className: "h-[330px]" },
    { key: "torino", className: "h-[220px]" },
    { key: "corporate", className: "h-[310px]" },
    { key: "interior", className: "h-[240px]" },
    { key: "product", className: "h-[320px]" },
  ],
  [
    { key: "wedding", className: "h-[220px]" },
    { key: "couple", className: "h-[260px]" },
    { key: "events", className: "h-[230px]" },
    { key: "industrial", className: "h-[250px]" },
    { key: "property", className: "h-[230px]" },
    { key: "advertising", className: "h-[220px]" },
    { key: "course", className: "h-[240px]" },
  ],
] as const;