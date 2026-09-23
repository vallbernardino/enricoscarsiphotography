import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import {
  SELECTED_WORK_DESKTOP_COLUMNS,
  SELECTED_WORK_ITEMS,
  SELECTED_WORK_MOBILE_COLUMNS,
  selectedWorkCopy,
  type SelectedWorkKey,
} from "@/lib/selected-work";
import { Reveal } from "./Reveal";

type ColumnProps = {
  frames: readonly { key: SelectedWorkKey; className: string }[];
  index: number;
  mode: "desktop" | "mobile";
};

function WorkFrame({ itemKey, className }: { itemKey: SelectedWorkKey; className: string }) {
  const { lang } = useLang();
  const item = SELECTED_WORK_ITEMS[itemKey];

  return (
    <figure className={`w-full shrink-0 overflow-hidden bg-charcoal-soft ${className}`}>
      <img
        src={item.src}
        alt={item.alt[lang]}
        width={item.width}
        height={item.height}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
        style={{ objectPosition: item.position }}
      />
    </figure>
  );
}

function ScrollingColumn({ frames, index, mode }: ColumnProps) {
  const renderSequence = (copyIndex: number) => (
    <div className="selected-work-sequence" aria-hidden={copyIndex === 1}>
      {frames.map((frame) => (
        <WorkFrame key={`${copyIndex}-${frame.key}`} itemKey={frame.key} className={frame.className} />
      ))}
    </div>
  );

  return (
    <div className={`selected-work-column selected-work-column-${mode}-${index} overflow-hidden`}>
      <div className="selected-work-track">
        {renderSequence(0)}
        {renderSequence(1)}
      </div>
    </div>
  );
}

export function SelectedWork() {
  const { lang } = useLang();
  const copy = selectedWorkCopy[lang];

  return (
    <section id="selected-work" className="relative z-10 overflow-hidden bg-paper py-20 text-ink sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <Reveal className="lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <p className="label-xs text-ink/45">{copy.label}</p>
            <p className="mt-8 max-w-[24rem] text-sm leading-[1.9] text-ink/60">{copy.description}</p>
            <Link to="/services" className="arrow-link label-xs mt-8 inline-flex border-b border-ink/25 pb-2 text-ink">
              {copy.view}
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>

        <div className="hidden h-[112svh] min-h-[820px] max-h-[1180px] grid-cols-12 gap-5 overflow-hidden lg:col-span-9 lg:grid" aria-label={copy.label}>
          {SELECTED_WORK_DESKTOP_COLUMNS.map((frames, index) => (
            <div key={`desktop-${index}`} className={index === 1 ? "col-span-5 pt-[8svh]" : "col-span-3"}>
              <ScrollingColumn frames={frames} index={index} mode="desktop" />
            </div>
          ))}
        </div>

        <div className="grid h-[760px] grid-cols-2 gap-3 overflow-hidden sm:h-[880px] lg:hidden" aria-label={copy.label}>
          {SELECTED_WORK_MOBILE_COLUMNS.map((frames, index) => (
            <ScrollingColumn key={`mobile-${index}`} frames={frames} index={index} mode="mobile" />
          ))}
        </div>
      </div>
    </section>
  );
}