import { useLang } from "@/lib/lang";
import { BRAND } from "@/lib/home-copy";

/** Refined first-visit entrance: choose a language, warm-white, no cookie-banner vibes. */
export function LanguageGate() {
  const { setLang, chosen } = useLang();
  if (chosen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-paper/95 px-6 backdrop-blur-sm">
      <div className="soft-in w-full max-w-md text-center text-ink">
        <span className="display-editorial block text-lg tracking-[0.16em] sm:text-xl">
          {BRAND.name}
        </span>
        <span className="label-xs mt-4 block text-ink/55">Fotografo professionista a Torino</span>

        <span className="mx-auto mt-10 block h-px w-12 bg-champagne" />

        <span className="label-xs mt-10 block text-ink/45">Select your language</span>

        <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => setLang("en")}
            className="label-xs border border-ink/25 px-9 py-4 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLang("it")}
            className="label-xs border border-ink/25 px-9 py-4 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
          >
            Italiano
          </button>
        </div>
      </div>
    </div>
  );
}
