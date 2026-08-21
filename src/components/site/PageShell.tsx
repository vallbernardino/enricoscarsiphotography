import type { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { StickyCTA } from "./StickyCTA";
import { Reveal } from "./Reveal";

export function PageShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-charcoal">
      <SiteNav />
      <header className="border-b border-cream/10 pt-40 lg:pt-52">
        <div className="mx-auto max-w-[1440px] px-6 pb-20 lg:px-10 lg:pb-28">
          <Reveal>
            <h1 className="display-editorial text-[1.6rem] text-cream sm:text-[2rem] lg:text-[2.4rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-warm">{intro}</p>
          </Reveal>
        </div>
      </header>
      <main>{children}</main>
      <SiteFooter />
      <StickyCTA href="/contact" />
    </div>
  );
}

export function PageSection({
  label,
  heading,
  children,
  tone = "dark",
}: {
  label?: string;
  heading?: string;
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <section
      className={`border-b ${
        tone === "light" ? "border-ink/10 bg-paper text-ink" : "border-cream/10 bg-charcoal"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-10 lg:py-32">
        {label && (
          <span className={`label-xs ${tone === "light" ? "text-ink/45" : "text-champagne"}`}>
            {label}
          </span>
        )}
        {heading && (
          <h2
            className={`mt-7 max-w-2xl font-display text-[1.5rem] leading-[1.22] sm:text-[1.8rem] ${
              tone === "light" ? "text-ink" : "text-cream"
            }`}
          >
            {heading}
          </h2>
        )}
        <div className={label || heading ? "mt-12" : ""}>{children}</div>
      </div>
    </section>
  );
}
