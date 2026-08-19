import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { homeCopy } from "@/lib/home-copy";
import { copyFor } from "@/lib/site-content";
import { PhotoFrame } from "./PhotoFrame";
import { Reveal } from "./Reveal";
import { MapEmbed } from "./MapEmbed";

function ArrowCta({
  children,
  to,
  href,
  tone = "dark",
}: {
  children: string;
  to?: string;
  href?: string;
  tone?: "dark" | "light";
}) {
  const cls = `arrow-link label-xs border-b pb-2 transition-colors ${
    tone === "dark"
      ? "border-cream/35 text-cream hover:border-champagne hover:text-champagne"
      : "border-ink/30 text-ink hover:border-ink hover:text-ink"
  }`;
  const inner = (
    <>
      {children}
      <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
    </>
  );
  if (to)
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  return (
    <a href={href} className={cls}>
      {inner}
    </a>
  );
}

/* 03 — WORK: warm-white breathing room, photography-first gallery entrances */
export function WorkSection() {
  const { lang } = useLang();
  const t = homeCopy(lang).work;
  return (
    <section className="relative z-20 bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-6 pt-24 lg:px-10 lg:pt-32">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="label-xs text-ink/45">{t.label}</span>
            <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">{t.heading}</h2>
          </div>
          <p className="max-w-xs text-sm text-ink/60">{t.intro}</p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-2 lg:grid-cols-3">
        {t.categories.map((c, i) => (
          <Reveal key={c.key} variant="mask" delay={i * 90}>
            <Link to="/work" className="group relative block overflow-hidden">
              <PhotoFrame aspect="aspect-[4/5] lg:aspect-[3/2]" tone="light" caption={c.title} />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <span className="block font-display text-2xl uppercase tracking-[0.12em] text-cream transition-transform duration-700 group-hover:-translate-y-1 lg:text-3xl">
                  {c.title}
                </span>
                <span className="arrow-link label-xs mt-3 inline-flex text-cream/70">
                  {t.view}
                  <ArrowRight className="h-3 w-3" strokeWidth={1.5} />
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* 04 — EXPERIENCE: one photographer image + typography, no timeline */
export function ExperienceSection() {
  const { lang } = useLang();
  const t = homeCopy(lang).experience;
  return (
    <section className="relative z-20 bg-charcoal">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-6 py-24 lg:grid-cols-12 lg:gap-20 lg:px-10 lg:py-36">
        <Reveal variant="mask" className="lg:col-span-6">
          <PhotoFrame aspect="aspect-[4/5]" caption={t.caption} />
        </Reveal>
        <Reveal className="lg:col-span-6 lg:pl-6" delay={120}>
          <span className="label-xs text-champagne">{t.label}</span>
          <h2 className="mt-7 font-display text-4xl leading-[1.06] text-cream sm:text-5xl lg:text-[3.6rem]">
            {t.heading.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
          <div className="mt-8 max-w-lg space-y-5 text-[0.95rem] leading-relaxed text-muted-warm">
            {t.body.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <div className="mt-10">
            <ArrowCta to="/photographer">{t.cta}</ArrowCta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 05 — TORINO: one full-bleed frame + interactive map */
export function TorinoSection() {
  const { lang } = useLang();
  const t = homeCopy(lang).torino;
  const c = copyFor(lang);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = document.getElementById("torino");
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const h = window.innerHeight || 1;
        setOffset(Math.max(-1, Math.min(1, (h / 2 - (rect.top + rect.height / 2)) / h)));
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
    <section id="torino" className="relative z-20 bg-charcoal">
      <div className="relative min-h-[86svh] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ transform: `translate3d(0, ${offset * 7}%, 0) scale(1.08)` }}
        >
          <PhotoFrame aspect="h-full" caption={t.caption} className="h-full" />
        </div>
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-charcoal/35" />
        <div className="relative mx-auto flex min-h-[86svh] max-w-[1440px] flex-col justify-end px-6 pb-20 lg:px-10 lg:pb-28">
          <Reveal>
            <h2 className="display-hero max-w-2xl text-[2.4rem] text-cream sm:text-6xl lg:text-[4.6rem]">
              {t.heading.map((l, i) => (
                <span key={l} className={`block ${i === 2 ? "italic normal-case text-champagne" : ""}`}>
                  {l}
                </span>
              ))}
            </h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-cream/70">{t.body}</p>
            <div className="mt-9">
              <ArrowCta to="/experiences">{t.cta}</ArrowCta>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-20 lg:grid-cols-12 lg:px-10">
        <Reveal className="lg:col-span-4">
          <span className="label-xs text-champagne">{t.mapLabel}</span>
          <p className="mt-6 font-display text-2xl leading-snug text-cream">{c.contact.address}</p>
          <p className="mt-3 text-sm text-muted-warm">{c.contact.addressNote}</p>
        </Reveal>
        <Reveal variant="mask" className="lg:col-span-8">
          <MapEmbed className="h-[340px] lg:h-[420px]" />
        </Reveal>
      </div>
    </section>
  );
}

/* 06 — REAL STORIES: light editorial, subtle carousel */
export function StoriesSection() {
  const { lang } = useLang();
  const t = homeCopy(lang).stories;
  const items = copyFor(lang).reviews.items;
  const [page, setPage] = useState(0);
  const perPage = 3;
  const pages = Math.ceil(items.length / perPage);
  const shown = items.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="relative z-20 bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="text-center">
          <span className="label-xs text-ink/45">{t.label}</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl">{t.heading}</h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {shown.map((r) => (
            <Reveal key={r.name} as="figure" className="max-w-sm">
              <blockquote className="font-display text-xl leading-relaxed text-ink/85">
                <span className="text-champagne">“</span>
                {r.quote}
                <span className="text-champagne">”</span>
              </blockquote>
              <figcaption className="label-xs mt-6 text-ink/45">
                {r.name} · {r.source}
              </figcaption>
            </Reveal>
          ))}
        </div>

        {pages > 1 && (
          <div className="mt-14 flex items-center justify-center gap-3">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-px w-10 transition-colors ${
                  page === i ? "bg-ink" : "bg-ink/25 hover:bg-ink/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* 07 — FINAL CTA: full-bleed emotional conclusion */
export function FinalCta() {
  const { lang } = useLang();
  const t = homeCopy(lang).final;
  return (
    <section className="relative z-20 min-h-[80svh] overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <PhotoFrame aspect="h-full" caption={t.caption} className="h-full" />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/40" />
      </div>
      <div className="relative mx-auto flex min-h-[80svh] max-w-[1440px] flex-col justify-center px-6 lg:px-10">
        <Reveal>
          <h2 className="display-hero text-[2.6rem] text-cream sm:text-6xl lg:text-[5rem]">
            {t.heading.map((l, i) => (
              <span key={l} className={`block ${i === 1 ? "italic normal-case text-champagne" : ""}`}>
                {l}
              </span>
            ))}
          </h2>
          <p className="mt-7 text-sm text-cream/70">{t.support}</p>
          <div className="mt-9">
            <ArrowCta href="#inquiry">{t.cta}</ArrowCta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
