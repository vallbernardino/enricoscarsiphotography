import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Search, X } from "lucide-react";
import { useDeferredValue, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLang } from "@/lib/lang";
import { searchSite } from "@/lib/search-index";

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lang } = useLang();
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const results = searchSite(lang, deferredQuery);
  const copy = lang === "it"
    ? { title: "Cerca nel sito", placeholder: "Servizi, fotografo, informazioni…", empty: "Nessun risultato trovato.", close: "Chiudi ricerca" }
    : { title: "Search the site", placeholder: "Services, photographer, information…", empty: "No results found.", close: "Close search" };

  useEffect(() => {
    if (!open) return;
    const prior = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => inputRef.current?.focus(), 20);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      prior?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-[80] bg-charcoal/95 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="search-title">
      <div className="mx-auto flex h-full max-w-[1100px] flex-col px-6 pb-10 pt-24 lg:px-10 lg:pt-32">
        <div className="flex items-center justify-between border-b border-cream/15 pb-6">
          <h2 id="search-title" className="label-xs text-cream/55">{copy.title}</h2>
          <button type="button" onClick={onClose} aria-label={copy.close} className="p-2 text-cream/65 transition-colors hover:text-cream">
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
        <label className="mt-10 flex items-center gap-4 border-b border-cream/35 pb-5">
          <Search className="h-5 w-5 shrink-0 text-champagne" strokeWidth={1.4} />
          <input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder={copy.placeholder} className="min-w-0 flex-1 bg-transparent font-display text-2xl text-cream outline-none placeholder:text-cream/25 sm:text-4xl" />
        </label>
        <div className="mt-8 overflow-y-auto" aria-live="polite">
          {query.trim() && !results.length ? <p className="text-sm text-muted-warm">{copy.empty}</p> : null}
          <ul className="divide-y divide-cream/10">
            {results.map((item) => (
              <li key={`${item.href}-${item.title}`}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={onClose} className="group grid gap-3 py-6 sm:grid-cols-[1fr_1.5fr_auto] sm:items-center">
                    <span className="font-display text-lg text-cream">{item.title}</span><span className="text-sm leading-relaxed text-muted-warm">{item.excerpt}</span><ArrowUpRight className="h-4 w-4 text-cream/40 transition-transform group-hover:translate-x-1" />
                  </a>
                ) : (
                  <Link to={item.href as "/" | "/services" | "/services/advertising" | "/photographer" | "/contact" | "/privacy"} onClick={onClose} className="group grid gap-3 py-6 sm:grid-cols-[1fr_1.5fr_auto] sm:items-center">
                    <span className="font-display text-lg text-cream">{item.title}</span><span className="text-sm leading-relaxed text-muted-warm">{item.excerpt}</span><ArrowUpRight className="h-4 w-4 text-cream/40 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>,
    document.body,
  );
}