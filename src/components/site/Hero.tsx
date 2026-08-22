import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { useLang } from "@/lib/lang";
import { homeCopy } from "@/lib/home-copy";
import { HERO_SLIDES } from "@/lib/hero-slides";

/**
 * Pacing: the first two photographs change reasonably quickly so the opening
 * never feels stuck, then the sequence slows down and alternates so each
 * photograph has time to be looked at.
 */
const HOLD_MS = [3400, 4200, 8000, 9500, 8000, 9500, 8000];


export function Hero() {
  const { lang } = useLang();
  const t = homeCopy(lang).hero;
  const ref = useRef<HTMLDivElement | null>(null);
  const [p, setP] = useState(0);
  const [index, setIndex] = useState(0);

  /* Gentle parallax only — the typography itself never animates. */
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const h = window.innerHeight || 1;
        setP(Math.min(1, Math.max(0, window.scrollY / h)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  /* Slow cinematic cross-fade through the studio's breadth of work. */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(
      () => setIndex((i) => (i + 1) % HERO_SLIDES.length),
      HOLD_MS[index] ?? 8000,
    );
    return () => window.clearTimeout(id);
  }, [index]);


  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-charcoal">
      {/* Full-bleed photography, slow cross-fade, gentle parallax */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate3d(0, ${p * 9}%, 0) scale(1.04)`,
          transition: "transform 120ms linear",
        }}
      >
        {HERO_SLIDES.map((s, i) => (
          <img
            key={s.key}
            src={s.src}
            alt={i === 0 ? t.alt : (t.slideAlts[s.key] ?? "")}
            {...(i === 0 ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              objectPosition: s.position,
              opacity: index === i ? 1 : 0,
              transform: index === i ? "scale(1.03)" : "scale(1)",
              transition: "opacity 2600ms ease-in-out, transform 9000ms linear",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-charcoal/35" />
      </div>

      {/* Typography: centred, restrained, static */}
      <div
        className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col items-center justify-end px-6 pb-20 text-center lg:pb-24"
        style={{ opacity: 1 - p * 1.2 }}
      >
        <div className="soft-in" style={{ animationDelay: "120ms" }}>
          <span className="label-xs text-cream/70">{t.eyebrow}</span>
        </div>

        <h1
          className="display-editorial soft-in mt-6 text-[1.45rem] leading-[1.16] text-cream sm:text-[1.95rem] lg:text-[2.6rem]"
          style={{ animationDelay: "260ms" }}
        >
          <span className="block">{t.line1}</span>
          <span className="block">{t.line2}</span>
          <span className="block italic normal-case">{t.line3}</span>
        </h1>

        <p
          className="soft-in mt-7 text-[0.8rem] tracking-wide text-cream/70"
          style={{ animationDelay: "440ms" }}
        >
          {t.since}
        </p>

        <a
          href="#services"
          className="arrow-link label-xs soft-in mt-12 inline-flex text-cream/80 transition-colors hover:text-champagne"
          style={{ animationDelay: "600ms" }}
        >
          {t.cta}
          <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}
