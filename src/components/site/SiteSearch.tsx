import { Link } from "@tanstack/react-router";
import { ArrowRight, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";
import type { SearchEntry } from "@/lib/search-index";

export function SiteSearch({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate?: () => void }) {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchEntry[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const label = lang === "it" ? "CERCA" : "SEARCH";
  const placeholder = lang === "it" ? "Cerca servizi, prezzi, blog, video e altro..." : "Search services, prices, blog, video and more...";

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    let current = true;
    if (!query.trim()) {
      setResults([]);
      return () => { current = false; };
    }
    const timer = window.setTimeout(() => {
      import("@/lib/search-index").then(({ searchSite }) => {
        if (current) setResults(searchSite(query, lang));
      });
    }, 90);
    return () => { current = false; window.clearTimeout(timer); };
  }, [query, lang]);

  const close = () => { setOpen(false); setQuery(""); };

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className={`label-xs inline-flex items-center gap-2 text-cream/70 transition-colors hover:text-cream ${mobile ? "py-1" : ""}`} aria-label={label}>
        <Search className="h-3.5 w-3.5" strokeWidth={1.5} /> {label}
      </button>
    );
  }

  return (
    <div className={mobile ? "relative" : "absolute inset-x-0 top-full border-t border-cream/10 bg-charcoal/95 px-6 py-4 backdrop-blur-md"}>
      <div className={mobile ? "relative" : "relative mx-auto max-w-[1440px]"}>
        <Search className="absolute left-0 top-[22px] h-4 w-4 -translate-y-1/2 text-cream/45" strokeWidth={1.5} />
        <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Escape") close(); }} placeholder={placeholder} className="h-11 w-full border-b border-cream/20 bg-transparent pl-7 pr-10 text-sm text-cream outline-none placeholder:text-cream/35 focus:border-logo-yellow" />
        <button type="button" onClick={close} className="absolute right-0 top-[22px] -translate-y-1/2 p-2 text-cream/55 hover:text-cream" aria-label={lang === "it" ? "Chiudi ricerca" : "Close search"}><X className="h-4 w-4" /></button>
        {query.trim() ? (
          <div className={`z-50 mt-3 max-h-[65vh] overflow-y-auto border border-cream/10 bg-charcoal shadow-2xl ${mobile ? "" : "absolute left-0 right-0"}`}>
            {results.length ? results.map((result) => (
              <Link key={result.id} to={result.path} onClick={() => { close(); onNavigate?.(); }} className="group grid gap-2 border-b border-cream/10 px-5 py-4 last:border-0 sm:grid-cols-[10rem_1fr_auto] sm:items-center">
                <span className="label-xs text-logo-yellow">{result.type === "article" ? (lang === "it" ? "ARTICOLO" : "ARTICLE") : (lang === "it" ? "SERVIZIO" : "SERVICE")}</span>
                <span><strong className="block font-display text-base font-normal text-cream">{result.title}</strong><span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-cream/50">{result.excerpt}</span></span>
                <ArrowRight className="hidden h-4 w-4 text-cream/35 transition-transform group-hover:translate-x-1 sm:block" strokeWidth={1.5} />
              </Link>
            )) : <p className="px-5 py-6 text-sm text-cream/55">{lang === "it" ? "Nessun risultato." : "No results."}</p>}
          </div>
        ) : null}
      </div>
    </div>
  );
}