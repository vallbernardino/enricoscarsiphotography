import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import heroAsset from "@/assets/hero-torino.png.asset.json";
import { useLang } from "@/lib/lang";
import { homeCopy } from "@/lib/home-copy";

function Words({ text, base, italic = false }: { text: string; base: number; italic?: boolean }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`} className="word-reveal mr-[0.28em]">
          <span
            className={italic ? "italic text-champagne" : undefined}
            style={{ animationDelay: `${base + i * 110}ms` }}
          >
            {w}
          </span>
        </span>
      ))}
    </>
  );
}

export function Hero() {
  const { lang } = useLang();
  const t = homeCopy(lang).hero;
  const ref = useRef<HTMLDivElement | null>(null);
  const [p, setP] = useState(0);

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

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-charcoal">
      {/* Full-bleed photograph with gentle parallax + entrance scale */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate3d(0, ${p * 12}%, 0) scale(${1.06 - p * 0.02})`,
          transition: "transform 120ms linear",
        }}
      >
        <img
          src={heroAsset.url}
          alt={t.alt}
          className="h-full w-full object-cover object-[62%_center] sm:object-center"
          style={{ animation: "word-rise 0ms" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/35 to-charcoal/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-charcoal/45" />
      </div>

      {/* Headline */}
      <div
        className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-24 lg:justify-center lg:px-10 lg:pb-0"
        style={{ opacity: 1 - p * 1.15, transform: `translate3d(0, ${p * -6}vh, 0)` }}
      >
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 opacity-0" style={{ animation: "word-rise 900ms cubic-bezier(0.16,1,0.3,1) 200ms forwards" }}>
            <span className="label-xs text-cream/70">{t.eyebrow}</span>
            <span className="h-px w-14 bg-champagne/60" />
          </div>

          <h1 className="display-hero sheen mt-7 text-[2.7rem] text-cream sm:text-[4rem] lg:text-[5.4rem]">
            <span className="block">
              <Words text={t.line1} base={500} />
            </span>
            <span className="block">
              <Words text={t.line2} base={700} />
            </span>
            <span className="block">
              <Words text={t.line3} base={950} italic />
            </span>
          </h1>

          <p
            className="mt-8 text-sm text-cream/65 opacity-0"
            style={{ animation: "word-rise 900ms cubic-bezier(0.16,1,0.3,1) 1500ms forwards" }}
          >
            {t.since}
          </p>

          <a
            href="#inquiry"
            className="arrow-link label-xs mt-9 inline-flex border-b border-cream/40 pb-2 text-cream opacity-0 transition-colors hover:border-champagne hover:text-champagne"
            style={{ animation: "word-rise 900ms cubic-bezier(0.16,1,0.3,1) 1700ms forwards" }}
          >
            {t.cta}
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
