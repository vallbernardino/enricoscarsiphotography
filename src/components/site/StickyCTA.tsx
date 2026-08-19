import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import { homeCopy } from "@/lib/home-copy";

export function StickyCTA({ href = "#inquiry" }: { href?: string }) {
  const { lang } = useLang();
  const label = homeCopy(lang).sticky;
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > (window.innerHeight || 800) * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={href}
      className={`arrow-link label-xs fixed bottom-6 right-6 z-40 bg-champagne px-6 py-4 text-charcoal shadow-lg transition-all duration-700 hover:bg-cream ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      {label}
      <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
    </a>
  );
}
