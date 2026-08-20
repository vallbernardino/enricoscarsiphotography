import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import heroAsset from "@/assets/hero-torino.png.asset.json";
import { useLang } from "@/lib/lang";
import { homeCopy } from "@/lib/home-copy";

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
      {/* Full-bleed photograph, gentle parallax only */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate3d(0, ${p * 9}%, 0) scale(1.04)`,
          transition: "transform 120ms linear",
        }}
      >
        <img
          src={heroAsset.url}
          alt={t.alt}
          className="h-full w-full object-cover object-[58%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/15 to-charcoal/35" />
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
          className="display-editorial soft-in mt-6 text-[1.55rem] leading-[1.16] text-cream sm:text-[2.1rem] lg:text-[2.9rem]"
          style={{ animationDelay: "260ms" }}
        >
          <span className="block">{t.line1}</span>
          <span className="block">{t.line2}</span>
          <span className="block italic">{t.line3}</span>
        </h1>

        <p
          className="soft-in mt-7 text-[0.8rem] tracking-wide text-cream/65"
          style={{ animationDelay: "440ms" }}
        >
          {t.since}
        </p>

        <a
          href="#inquiry"
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
