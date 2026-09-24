import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import desktopShowreel from "@/assets/enrico-video-showreel-desktop.mp4.asset.json";
import mobileShowreel from "@/assets/enrico-video-showreel-mobile.mp4.asset.json";
import showreelPoster from "@/assets/enrico-video-showreel-poster.jpg.asset.json";
import { useLang } from "@/lib/lang";

const filmCopy = {
  en: {
    label: "VIDEO",
    description: "Professional video production for companies, professionals and brands.",
    action: "DISCOVER VIDEO",
    aria: "Professional video production showreel by Enrico Scarsi",
  },
  it: {
    label: "VIDEO",
    description: "Produzione video professionale per aziende, professionisti e brand.",
    action: "SCOPRI I VIDEO",
    aria: "Showreel di produzioni video professionali di Enrico Scarsi",
  },
} as const;

export function FilmSection() {
  const { lang } = useLang();
  const copy = filmCopy[lang];

  return (
    <section className="relative z-10 min-h-[78svh] overflow-hidden bg-charcoal lg:min-h-[92svh]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={showreelPoster.url}
        aria-label={copy.aria}
      >
        <source src={mobileShowreel.url} media="(max-width: 767px)" type="video/mp4" />
        <source src={desktopShowreel.url} type="video/mp4" />
      </video>
      <span className="pointer-events-none absolute inset-0 bg-charcoal/20" />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-charcoal/80 to-transparent" />

      <div className="relative mx-auto flex min-h-[78svh] max-w-[1440px] flex-col items-center justify-end px-6 pb-16 text-center sm:pb-20 lg:min-h-[92svh] lg:px-10 lg:pb-24">
        <p className="label-xs text-logo-yellow">{copy.label}</p>
        <p className="mt-4 max-w-xl text-sm leading-[1.8] text-cream sm:text-[0.95rem]">{copy.description}</p>
        <Link to="/services" className="arrow-link label-xs mt-5 inline-flex border-b border-logo-yellow/60 pb-2 text-logo-yellow">
          {copy.action}
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}