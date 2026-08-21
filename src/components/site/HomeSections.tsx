import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { homeCopy } from "@/lib/home-copy";
import { CONTACT } from "@/lib/site-content";
import { getReviews, REVIEW_PLATFORMS, REVIEW_SOURCE } from "@/lib/reviews";
import { SERVICE_IMAGES } from "@/lib/hero-slides";
import trustpilotLogo from "@/assets/trustpilot.svg";
import googleLogo from "@/assets/google-g.png";
import { PhotoFrame } from "./PhotoFrame";
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
      <div className="mx-auto max-w-[1440px] px-6 pt-28 lg:px-10 lg:pt-44">
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

      {/* Photography carries the weight: large images, hairline dividers, no cards */}
      <div className="mx-auto mt-20 max-w-[1440px] px-6 lg:mt-32 lg:px-10">
        <div className="grid gap-x-14 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-28">
          {t.categories.map((c, i) => (
            <Reveal key={c.key} delay={(i % 3) * 90}>
              <Link to="/services" className="group block">
                <div className="relative overflow-hidden">
                  <img
                    src={SERVICE_IMAGES[c.key]}
                    alt={alts[c.key] ?? c.title}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between border-t border-ink/15 pt-5">
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
      <div className="mx-auto mt-28 max-w-[1440px] px-6 pb-28 lg:mt-40 lg:px-10 lg:pb-44">
        <Reveal className="border-t border-ink/15 pt-12">
          <span className="label-xs text-ink/45">{t.indexLabel}</span>
          <p className="mt-6 max-w-xl text-[0.95rem] leading-[1.95] text-ink/60">{t.indexIntro}</p>
        </Reveal>

        <div className="mt-16 grid gap-x-14 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {t.groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 90}>
              <h3 className="label-xs border-b border-ink/15 pb-4 text-ink/70">{g.title}</h3>
              <ul className="mt-6 space-y-4">
                {g.items.map((item) => (
                  <li key={item} className="text-[0.95rem] leading-relaxed text-ink/75">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <ArrowCta tone="light" to="/services">
            {t.view}
          </ArrowCta>
        </div>
      </div>
    </section>
  );
}

/* 04 — 35+ YEARS: one photograph, concise editorial copy (unchanged treatment) */
export function ExperienceSection() {
  const { lang } = useLang();
  const t = homeCopy(lang).experience;
  return (
    <section className="relative z-20 bg-charcoal">
      <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-6 py-28 lg:grid-cols-12 lg:gap-24 lg:px-10 lg:py-44">
        <Reveal variant="mask" className="lg:col-span-6">
          <PhotoFrame aspect="aspect-[4/5]" caption={t.caption} />
        </Reveal>
        <Reveal className="lg:col-span-6 lg:pl-4" delay={120}>
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
          <PhotoFrame aspect="h-full" caption={t.caption} className="h-full" />
        </div>
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-charcoal/25" />
        <div className="relative mx-auto flex min-h-[88svh] max-w-[1440px] flex-col justify-end px-6 pb-24 lg:px-10 lg:pb-32">
          <Reveal>
            <h2 className="display-editorial max-w-xl text-[1.5rem] leading-[1.24] text-cream sm:text-[1.9rem] lg:text-[2.3rem]">
              {t.heading.map((l, i) => (
                <span key={l} className={`block ${i === 2 ? "italic normal-case" : ""}`}>
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

/* 06 — TRUST: real platforms (Google, Trustpilot) + real client reviews */
export function ReviewsSection() {
  const { lang } = useLang();
  const copy = homeCopy(lang);
  const t = copy.stories;
  const trust = copy.trust;
  const reviews = getReviews(lang);

  return (
    <section id="reviews" className="relative z-20 bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-6 py-28 lg:px-10 lg:py-40">
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
        <Reveal className="mt-16 grid gap-px border-y border-ink/15 sm:grid-cols-2">
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

        <div className="mt-20 grid gap-x-16 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal
              key={r.name}
              as="figure"
              delay={(i % 3) * 90}
              className="border-t border-ink/12 pt-8"
            >
              <blockquote className="text-[0.95rem] leading-[1.9] text-ink/80">{r.text}</blockquote>
              <figcaption className="mt-7">
                <span className="label-xs block text-ink">{r.name}</span>
                <span className="mt-2 block text-xs text-ink/45">
                  {r.source} · {REVIEW_SOURCE.platform}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <ArrowCta tone="light" href={REVIEW_PLATFORMS.google} external>
            {t.read}
          </ArrowCta>
        </div>
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
      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-36">
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

/* 08 — FINAL CTA: full-bleed, calm ending */
export function FinalCta() {
  const { lang } = useLang();
  const t = homeCopy(lang).final;
  return (
    <section className="relative z-20 min-h-[78svh] overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <PhotoFrame aspect="h-full" caption={t.caption} className="h-full" />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-charcoal/30" />
      </div>
      <div className="relative mx-auto flex min-h-[78svh] max-w-[1440px] flex-col justify-center px-6 lg:px-10">
        <Reveal>
          <h2 className="display-editorial text-[1.6rem] leading-[1.22] text-cream sm:text-[2.1rem] lg:text-[2.6rem]">
            {t.heading.map((l, i) => (
              <span key={l} className={`block ${i === 1 ? "italic normal-case" : ""}`}>
                {l}
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
