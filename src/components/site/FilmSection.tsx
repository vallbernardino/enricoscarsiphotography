import { useLang } from "@/lib/lang";

const filmCopy = {
  en: {
    label: "A FILM OF REAL MOMENTS",
    lead: "More than photographs.",
    accent: "PEOPLE. PLACES. EMOTIONS.",
    aria: "A film of real moments photographed by Enrico Scarsi",
  },
  it: {
    label: "UN FILM DI MOMENTI REALI",
    lead: "Più che fotografie.",
    accent: "PERSONE. LUOGHI. EMOZIONI.",
    aria: "Un film di momenti reali fotografati da Enrico Scarsi",
  },
} as const;

export function FilmSection() {
  const { lang } = useLang();
  const copy = filmCopy[lang];

  return (
    <section className="relative z-10 min-h-[72svh] overflow-hidden bg-charcoal lg:min-h-[92svh]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/selected-work-poster.jpg"
        aria-label={copy.aria}
      >
        <source src="/media/selected-work-mobile.mp4" media="(max-width: 767px)" type="video/mp4" />
        <source src="/media/selected-work-1080.mp4" type="video/mp4" />
      </video>
      <span className="pointer-events-none absolute inset-0 bg-charcoal/35" />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal/75 to-transparent" />

      <div className="relative mx-auto flex min-h-[72svh] max-w-[1440px] flex-col justify-end px-6 pb-20 lg:min-h-[92svh] lg:px-10 lg:pb-28">
        <p className="label-xs text-logo-yellow">{copy.label}</p>
        <p className="mt-5 max-w-3xl font-display text-[1.65rem] leading-[1.25] text-cream sm:text-[2.2rem] lg:text-[2.8rem]">
          {copy.lead} <span className="text-logo-yellow">{copy.accent}</span>
        </p>
      </div>
    </section>
  );
}