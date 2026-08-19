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
      <header className="border-b border-cream/10 pt-36 lg:pt-44">
        <div className="mx-auto max-w-[1440px] px-6 pb-16 lg:px-10 lg:pb-20">
          <Reveal>
            <h1 className="display-hero text-[2.4rem] text-cream sm:text-5xl lg:text-[4rem]">
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
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-10 lg:py-24">
        {label && (
          <span className={`label-xs ${tone === "light" ? "text-ink/45" : "text-champagne"}`}>
            {label}
          </span>
        )}
        {heading && (
          <h2
            className={`mt-6 max-w-2xl font-display text-3xl leading-tight sm:text-4xl ${
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
