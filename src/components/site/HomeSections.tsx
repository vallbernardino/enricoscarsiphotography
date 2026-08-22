import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { homeCopy } from "@/lib/home-copy";
import { CONTACT } from "@/lib/site-content";
import { getReviews, REVIEW_PLATFORMS, REVIEW_SOURCE } from "@/lib/reviews";
import { SERVICE_IMAGES } from "@/lib/hero-slides";
import trustpilotLogo from "@/assets/trustpilot.svg";
import googleLogo from "@/assets/google-g.png";
import enricoPortrait from "@/assets/enrico-portrait.png.asset.json";
import torinoStreet from "@/assets/torino-street.jpg";
import rememberImage from "@/assets/remember.jpg";
import { Reveal } from "./Reveal";
import { MapEmbed, STUDIO_DIRECTIONS_URL, STUDIO_MAPS_URL } from "./MapEmbed";

function ArrowCta({
  children,
  to,
  href,
  tone = "dark",
  external = false,
}: {
  children: string;
  to?: "/" | "/services" | "/photographer" | "/contact" | "/privacy";
  href?: string;
  tone?: "dark" | "light";
  external?: boolean;
}) {
  const cls = `arrow-link label-xs border-b pb-2 transition-colors ${
    tone === "dark"
      ? "border-cream/30 text-cream hover:border-champagne hover:text-champagne"
      : "border-ink/25 text-ink hover:border-champagne hover:text-ink/70"
  }`;
  const inner = (
    <>
      {children}
      {external ? (
        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
      ) : (
        <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
      )}
    </>
  );
  if (to)
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  return (
    <a
      href={href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {inner}
    </a>
  );
}

/* 02 — SERVICES: light, spacious, editorial catalogue */
export function ServicesSection() {
  const { lang } = useLang();
  const t = homeCopy(lang).services;
  const alts = homeCopy(lang).hero.slideAlts;

  return (
    <section id="services" className="relative z-20 bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-6 pt-32 lg:px-10 lg:pt-52">
        <Reveal className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="label-xs text-ink/45">{t.label}</span>
            <h2 className="mt-8 font-display text-[1.6rem] leading-[1.2] sm:text-[2rem]">
              {t.heading}
            </h2>
          </div>
          <p className="max-w-xl text-[0.95rem] leading-[1.95] text-ink/60 lg:col-span-6 lg:col-start-7">
            {t.intro}
          </p>
        </Reveal>
      </div>

      {/* ALL SERVICES reads as the section heading above the categories */}
      <div className="mx-auto mt-24 max-w-[1440px] px-6 lg:mt-36 lg:px-10">
        <Reveal className="border-t border-ink/20 pt-10">
          <h3 className="font-sans text-[0.82rem] font-semibold uppercase tracking-[0.28em] text-ink sm:text-[0.92rem]">
            {t.indexLabel}
          </h3>
          <p className="mt-7 max-w-xl text-[0.95rem] leading-[1.95] text-ink/60">{t.indexIntro}</p>
        </Reveal>
      </div>

      {/* Photography carries the weight: large images, hairline dividers, no cards */}
      <div className="mx-auto mt-16 max-w-[1440px] px-6 lg:mt-24 lg:px-10">
        <div className="grid gap-x-14 gap-y-12 sm:grid-cols-2 sm:gap-y-20 lg:grid-cols-3 lg:gap-y-28">
          {t.categories.map((c, i) => (
            <Reveal key={c.key} delay={(i % 3) * 90}>
              <Link to="/services" className="group block">
                <div className="relative overflow-hidden">
                  <img
                    src={SERVICE_IMAGES[c.key]}
                    alt={alts[c.key] ?? c.title}
                    loading="lazy"
                    className="aspect-[5/4] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03] sm:aspect-[4/5]"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between border-t border-ink/15 pt-4 sm:mt-6 sm:pt-5">
                  <span className="display-editorial text-[0.95rem] tracking-[0.12em] text-ink">
                    {c.title}
                  </span>
                  <span className="arrow-link label-xs text-ink/35 transition-colors group-hover:text-ink">
                    <ArrowRight className="h-3 w-3" strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Complete service index — typographic, never narrowed */}
      <div className="mx-auto mt-28 max-w-[1440px] px-6 pb-32 lg:mt-44 lg:px-10 lg:pb-52">
        <div className="grid gap-x-14 gap-y-16 border-t border-ink/15 pt-16 sm:grid-cols-2 lg:grid-cols-3">
          {t.groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 90}>
              <h4 className="label-xs border-b border-ink/15 pb-4 text-ink/70">{g.title}</h4>
              <ul className="mt-7 space-y-4">
                {g.items.map((item) => (
                  <li key={item} className="text-[0.95rem] leading-relaxed text-ink/75">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <ArrowCta tone="light" to="/services">
            {t.view}
          </ArrowCta>
        </div>
      </div>
    </section>
  );
}

/* 04 — 35+ YEARS: the photographer's portrait and the typography as one composition */
export function ExperienceSection() {
  const { lang } = useLang();
  const t = homeCopy(lang).experience;
  const portraitAlt =
    lang === "it"
      ? "Enrico Scarsi, fotografo a Torino, con la sua macchina fotografica"
      : "Enrico Scarsi, photographer in Turin, holding his camera";

  return (
    <section className="relative z-20 overflow-hidden bg-charcoal">
      {/* Desktop: the portrait occupies the left of the section and dissolves into it */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[64%] lg:block">
        <img
          src={enricoPortrait.url}
          alt={portraitAlt}
          loading="lazy"
          className="h-full w-full object-cover object-[28%_center]"
        />
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-charcoal/10 to-charcoal" />
        <span className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal to-transparent" />
        <span className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />
      </div>

      {/* Mobile: the same photograph above the copy, fading into the darkness below */}
      <div className="relative h-[72svh] lg:hidden">
        <img
          src={enricoPortrait.url}
          alt={portraitAlt}
          loading="lazy"
          className="h-full w-full object-cover object-[32%_18%]"
        />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-16 px-6 pb-28 pt-10 lg:grid-cols-12 lg:gap-24 lg:px-10 lg:py-52 lg:pt-52">
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
          <span className="label-xs text-champagne">{t.label}</span>
          <h2 className="mt-8 font-display text-[1.6rem] leading-[1.22] text-cream sm:text-[2rem]">
            {t.heading.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </h2>
          <div className="mt-10 max-w-lg space-y-6 text-[0.9rem] leading-[1.9] text-muted-warm">
            {t.body.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <div className="mt-12">
            <ArrowCta to="/photographer">{t.cta}</ArrowCta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 05 — TORINO: single full-bleed photograph */
export function TorinoSection() {
  const { lang } = useLang();
  const t = homeCopy(lang).torino;
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
      <div className="relative min-h-[88svh] w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ transform: `translate3d(0, ${offset * 6}%, 0) scale(1.06)` }}
        >
          <img
            src={torinoStreet}
            alt={t.caption}
            loading="lazy"
            className="h-full w-full object-cover object-[45%_center]"
          />
        </div>
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-charcoal/25" />
        <div className="relative mx-auto flex min-h-[88svh] max-w-[1440px] flex-col justify-end px-6 pb-24 lg:px-10 lg:pb-32">
          <Reveal>
            <h2 className="max-w-xl text-cream">
              <span className="display-editorial block text-[2.1rem] leading-[1.05] sm:text-[2.9rem] lg:text-[3.6rem]">
                {t.title}
              </span>
              {t.heading.map((l) => (
                <span
                  key={l}
                  className="mt-3 block font-display text-[1.1rem] normal-case italic leading-[1.35] text-cream/85 sm:text-[1.35rem]"
                >
                  {l}
                </span>
              ))}
            </h2>
            <p className="mt-9 max-w-md text-sm leading-[1.9] text-cream/65">{t.body}</p>
            <div className="mt-11">
              <ArrowCta to="/services">{t.cta}</ArrowCta>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* One testimonial at a time: sharp left switch, then a pause. Swipeable on mobile. */
function TestimonialStrip({
  items,
}: {
  items: { name: string; text: string; source: string }[];
}) {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => {
      setLeaving(true);
      window.setTimeout(() => {
        setIndex((i) => (i + dir + items.length) % items.length);
        setLeaving(false);
      }, 150);
    },
    [items.length],
  );

  useEffect(() => {
    if (items.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => go(1), 5600);
    return () => window.clearTimeout(id);
  }, [index, go, items.length]);

  const current = items[index];
  if (!current) return null;

  return (
    <div
      className="overflow-hidden"
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        const end = e.changedTouches[0]?.clientX;
        touchX.current = null;
        if (start == null || end == null) return;
        if (Math.abs(end - start) < 40) return;
        go(end < start ? 1 : -1);
      }}
    >
      <figure
        className="select-none"
        style={{
          transform: leaving ? "translate3d(-14%, 0, 0)" : "translate3d(0, 0, 0)",
          opacity: leaving ? 0 : 1,
          transition: leaving ? "transform 150ms linear, opacity 150ms linear" : "none",
        }}
      >
        <blockquote className="font-display text-[1.1rem] leading-[1.5] text-ink/85 sm:text-[1.4rem]">
          “{current.text}”
        </blockquote>
        <figcaption className="label-xs mt-6 text-ink/45">
          {current.name} — {current.source}
        </figcaption>
      </figure>

      <div className="mt-10 flex items-center gap-2">
        {items.map((r, i) => (
          <button
            key={r.name}
            type="button"
            aria-label={r.name}
            onClick={() => {
              if (i !== index) go(i > index ? 1 : -1);
            }}
            className={`h-px w-8 transition-colors ${i === index ? "bg-ink" : "bg-ink/20"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* 06 — TRUST: real platforms (Google, Trustpilot) + real client reviews */
export function ReviewsSection() {
  const { lang } = useLang();
  const copy = homeCopy(lang);
  const t = copy.stories;
  const trust = copy.trust;
  const reviews = getReviews(lang);

  return (
    <section id="reviews" className="relative z-20 bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-6 py-32 lg:px-10 lg:py-48">
        <Reveal className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="label-xs text-ink/45">{t.label}</span>
            <h2 className="mt-8 font-display text-[1.6rem] leading-[1.2] sm:text-[2rem]">
              {t.heading}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-[1.9] text-ink/50 lg:col-span-5 lg:col-start-8">
            {t.sourceNote}
          </p>
        </Reveal>

        {/* Platform links — understated, no invented scores */}
        <Reveal className="mt-20 grid gap-px border-y border-ink/15 sm:grid-cols-2">
          <a
            href={REVIEW_PLATFORMS.google}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 px-2 py-8 transition-colors hover:bg-ink/[0.03] sm:px-8"
          >
            <img src={googleLogo} alt="Google" width={22} height={22} className="h-[22px] w-[22px]" />
            <span className="flex-1">
              <span className="block text-sm text-ink/85">{trust.google}</span>
              <span className="label-xs mt-2 block text-ink/35">{trust.visit}</span>
            </span>
            <ArrowUpRight
              className="h-4 w-4 text-ink/30 transition-colors group-hover:text-ink"
              strokeWidth={1.5}
            />
          </a>
          <a
            href={REVIEW_PLATFORMS.trustpilot}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 border-t border-ink/15 px-2 py-8 transition-colors hover:bg-ink/[0.03] sm:border-l sm:border-t-0 sm:px-8"
          >
            <img src={trustpilotLogo} alt="Trustpilot" width={116} height={28} className="h-6 w-auto" />
            <span className="flex-1" />
            <ArrowUpRight
              className="h-4 w-4 text-ink/30 transition-colors group-hover:text-ink"
              strokeWidth={1.5}
            />
          </a>
        </Reveal>

        <Reveal className="mt-20 max-w-2xl">
          <TestimonialStrip items={reviews} />
        </Reveal>

        <div className="mt-20">
          <ArrowCta tone="light" href={REVIEW_PLATFORMS.google} external>
            {t.read}
          </ArrowCta>
        </div>
        <span className="label-xs mt-6 block text-ink/30">{REVIEW_SOURCE.platform}</span>
      </div>
    </section>
  );
}

/* 07 — VISIT THE STUDIO: live interactive map + verified contact details */
export function StudioSection() {
  const { lang } = useLang();
  const t = homeCopy(lang).studio;
  const tel = (n: string) => `tel:${n.replace(/\s/g, "")}`;

  return (
    <section id="studio" className="relative z-20 border-t border-ink/10 bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-6 py-28 lg:px-10 lg:py-40">
        <Reveal className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="label-xs text-ink/45">{t.label}</span>
            <h2 className="mt-8 font-display text-[1.6rem] leading-[1.2] sm:text-[2rem]">
              {t.heading}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-sm leading-[1.9] text-ink/70">
              {t.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-16 border border-ink/12">
          <MapEmbed className="h-[420px] lg:h-[540px]" />
        </Reveal>

        <div className="mt-12 grid gap-10 border-t border-ink/12 pt-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="label-xs text-ink/40">Enrico Scarsi</span>
            <p className="mt-3 text-sm text-ink/70">{CONTACT.address}</p>
            <div className="mt-7 flex flex-wrap gap-8">
              <ArrowCta tone="light" href={STUDIO_MAPS_URL} external>
                {t.openMaps}
              </ArrowCta>
              <ArrowCta tone="light" href={STUDIO_DIRECTIONS_URL} external>
                {t.directions}
              </ArrowCta>
            </div>
          </div>

          <dl className="grid gap-8 sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
            <div>
              <dt className="label-xs text-ink/40">{t.phoneLabel}</dt>
              <dd className="mt-3 text-sm">
                <a href={tel(CONTACT.phone1)} className="link-draw text-ink/80">
                  {CONTACT.phone1}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label-xs text-ink/40">{t.mobileLabel}</dt>
              <dd className="mt-3 text-sm">
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw text-ink/80"
                >
                  {CONTACT.phone2}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label-xs text-ink/40">{t.emailLabel}</dt>
              <dd className="mt-3 break-all text-sm">
                <a href={`mailto:${CONTACT.email}`} className="link-draw text-ink/80">
                  {CONTACT.email}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

/* 08 — FINAL CTA: full-bleed photograph, the subject reaching past the section edge */
export function FinalCta() {
  const { lang } = useLang();
  const t = homeCopy(lang).final;
  const strong = t.strong;

  return (
    <section className="relative z-30 -mt-16 min-h-[86svh] bg-charcoal pt-16 lg:-mt-24 lg:pt-24">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={rememberImage}
          alt={t.caption}
          loading="lazy"
          className="h-full w-full object-cover object-[38%_center]"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/45" />
        <span className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-charcoal/90 to-transparent" />
      </div>
      <div className="relative mx-auto flex min-h-[86svh] max-w-[1440px] flex-col justify-center px-6 lg:px-10">
        <Reveal>
          <h2 className="display-editorial text-[1.6rem] leading-[1.22] text-cream sm:text-[2.1rem] lg:text-[2.6rem]">
            {t.heading.map((l, i) => (
              <span key={l} className={`block ${i === 1 ? "italic normal-case" : ""}`}>
                {strong && l.includes(strong) ? (
                  <>
                    {l.split(strong)[0]}
                    <em className="not-italic text-champagne">{strong}</em>
                    {l.split(strong)[1]}
                  </>
                ) : (
                  l
                )}
              </span>
            ))}
          </h2>
          <p className="mt-8 text-sm text-cream/65">{t.support}</p>
          <div className="mt-11">
            <ArrowCta href="#inquiry">{t.cta}</ArrowCta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
