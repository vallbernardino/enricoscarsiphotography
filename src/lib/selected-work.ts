import wedding from "@/assets/slide-weddings.jpg";
import events from "@/assets/slide-events.jpg";
import torino from "@/assets/torino-street.jpg";
import advertising from "@/assets/adv-product.jpg";
import family from "@/assets/work-family.jpg";
import corporate from "@/assets/work-corporate.jpg";
import interior from "@/assets/work-interior.jpg";
import industrial from "@/assets/work-industrial.jpg";
import product from "@/assets/work-product.jpg";
import course from "@/assets/work-course.jpg";

export const SELECTED_WORK = [
  { key: "family", src: family, width: 1280, height: 1600, className: "col-span-7 row-span-8", position: "center" },
  { key: "wedding", src: wedding, width: 1024, height: 1280, className: "col-span-5 row-span-6", position: "50% 38%" },
  { key: "torino", src: torino, width: 1536, height: 1024, className: "col-span-5 row-span-5", position: "center" },
  { key: "corporate", src: corporate, width: 1280, height: 1600, className: "col-span-4 row-span-7", position: "center" },
  { key: "events", src: events, width: 1024, height: 1280, className: "col-span-8 row-span-6", position: "center" },
  { key: "industrial", src: industrial, width: 1600, height: 1200, className: "col-span-7 row-span-5", position: "center" },
  { key: "interior", src: interior, width: 1600, height: 1200, className: "col-span-5 row-span-6", position: "center" },
  { key: "product", src: product, width: 1280, height: 1600, className: "col-span-4 row-span-7", position: "center" },
  { key: "advertising", src: advertising, width: 1024, height: 768, className: "col-span-4 row-span-5", position: "center" },
  { key: "course", src: course, width: 1600, height: 1200, className: "col-span-4 row-span-6", position: "center" },
] as const;

export const SELECTED_WORK_ALTS = {
  it: {
    family: "Famiglia ritratta in un momento spontaneo a Torino",
    wedding: "Reportage di matrimonio",
    torino: "Torino osservata attraverso la fotografia",
    corporate: "Ritratto corporate nel luogo di lavoro",
    events: "Reportage fotografico di un evento",
    industrial: "Fotografia industriale in produzione",
    interior: "Fotografia di architettura e interni",
    product: "Fotografia di prodotto e catalogo",
    advertising: "Fotografia pubblicitaria",
    course: "Corso di fotografia in studio",
  },
  en: {
    family: "A family photographed in a candid moment in Turin",
    wedding: "Wedding reportage",
    torino: "Turin observed through photography",
    corporate: "Corporate portrait in the workplace",
    events: "Event photography reportage",
    industrial: "Industrial photography on location",
    interior: "Architecture and interiors photography",
    product: "Product and catalogue photography",
    advertising: "Advertising photography",
    course: "Photography course in the studio",
  },
} as const;