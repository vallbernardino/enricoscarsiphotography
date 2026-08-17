import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "it" | "en";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  chosen: boolean;
};

const LangContext = createContext<Ctx>({ lang: "it", setLang: () => {}, chosen: true });

const STORAGE_KEY = "es-lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("it");
  const [chosen, setChosen] = useState(true);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "it" || stored === "en") {
        setLangState(stored);
        setChosen(true);
      } else {
        setChosen(false);
      }
    } catch {
      setChosen(false);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    setChosen(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* in-memory fallback */
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang, chosen: chosen || !hydrated }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
