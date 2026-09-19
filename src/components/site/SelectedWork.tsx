import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";
import { SELECTED_WORK, SELECTED_WORK_ALTS } from "@/lib/selected-work";
import { Reveal } from "./Reveal";

export function SelectedWork() {
  const { lang } = useLang();
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [motion, setMotion] = useState({ progress: 0, reduced: false });
  const copy = lang === "it"
    ? { label: "Lavori selezionati", heading: "Storie, persone, luoghi.", body: "Una selezione che attraversa il ritratto, la famiglia, gli eventi e il lavoro per aziende: fotografie diverse, unite dallo stesso sguardo.", view: "Vedi tutti i servizi", filmA: "Un film", filmB: "di momenti veri", filmBody: "Più che fotografie.", filmWords: "Persone. Luoghi. Emozioni." }
    : { label: "Selected work", heading: "Stories, people, places.", body: "A selection spanning portraiture, family, events and commissioned work for businesses: different photographs, connected by the same way of seeing.", view: "View all services", filmA: "A film", filmB: "of real moments", filmBody: "More than photographs.", filmWords: "People. Places. Emotions." };

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setMotion({ progress: 1, reduced: true }); return; }
    let frame = 0;
    let drift = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const el = sectionRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const range = Math.max(1, rect.height - window.innerHeight);
        const scrollProgress = Math.max(0, Math.min(1, -rect.top / range));
        const active = rect.top <= 0 && rect.bottom >= window.innerHeight && scrollProgress < 0.92;
        if (active) drift = Math.min(1, drift + Math.min(32, now - last) * 0.000012);
        setMotion({ progress: Math.min(1, scrollProgress + drift), reduced: false });
      }
      last = now;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const bentoProgress = Math.min(1, motion.progress / 0.76);
  const filmVisible = motion.reduced || motion.progress >= 0.82;
  const bentoOpacity = motion.reduced ? 0 : Math.max(0, 1 - Math.max(0, motion.progress - 0.72) / 0.1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (filmVisible && !motion.reduced) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [filmVisible, motion.reduced]);

  return (
    <section ref={sectionRef} className="relative z-10 h-[310svh] bg-charcoal text-cream">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="absolute inset-0 bg-charcoal" style={{ visibility: filmVisible ? "visible" : "hidden", opacity: filmVisible ? 1 : 0, transition: motion.reduced ? "none" : "opacity 900ms ease" }}>
          <video ref={videoRef} className="h-full w-full object-cover" muted loop playsInline preload="metadata" poster="/media/selected-work-poster.jpg" aria-label={lang === "it" ? "Film di un matrimonio all'aperto" : "Film of an outdoor wedding"}>
            <source media="(max-width: 700px)" src="/media/selected-work-mobile.mp4" type="video/mp4" />
            <source src="/media/selected-work-1080.mp4" type="video/mp4" />
          </video>
          <span className="absolute inset-0 bg-charcoal/45" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 text-center lg:px-10">
            <p className="label-xs text-cream/70">{copy.filmA}</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-cream sm:text-6xl"><span className="block">{copy.filmB}</span></h2>
            <p className="mt-8 text-sm text-cream/75">{copy.filmBody}</p>
            <p className="label-xs mt-4 text-cream">{copy.filmWords}</p>
          </div>
        </div>

        <div className="absolute inset-0 bg-paper text-ink" style={{ opacity: bentoOpacity, visibility: bentoOpacity <= 0 ? "hidden" : "visible" }}>
          <div className="mx-auto max-w-[1440px] px-6 pt-24 lg:px-10 lg:pt-28">
            <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-6"><span className="label-xs text-ink/45">{copy.label}</span><h2 className="mt-6 font-display text-[2rem] leading-[1.1] sm:text-[3rem]">{copy.heading}</h2></div>
              <div className="lg:col-span-5 lg:col-start-8"><p className="text-sm leading-[1.9] text-ink/60">{copy.body}</p><Link to="/services" className="arrow-link label-xs mt-7 inline-flex border-b border-ink/25 pb-2 text-ink">{copy.view}<ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} /></Link></div>
            </Reveal>
          </div>
          <div className="absolute inset-x-0 top-[55svh] mx-auto h-[112svh] max-w-[1440px] overflow-hidden px-3 sm:px-6 lg:top-[38svh] lg:px-10">
            <div className="grid h-[190svh] grid-cols-12 auto-rows-[4.8svh] gap-2.5 sm:gap-4 lg:h-[205svh] lg:auto-rows-[6svh] lg:gap-5" style={{ transform: `translate3d(0, ${-bentoProgress * 46}%, 0)`, willChange: "transform" }}>
              {SELECTED_WORK.map((item) => <figure key={item.key} className={`${item.className} overflow-hidden bg-charcoal-soft`}><img src={item.src} alt={SELECTED_WORK_ALTS[lang][item.key]} width={item.width} height={item.height} loading="lazy" decoding="async" className="h-full w-full object-cover" style={{ objectPosition: item.position }} /></figure>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}