import type { ReactNode } from "react";

type Props = {
  caption?: string;
  aspect?: string;
  src?: string;
  alt?: string;
  className?: string;
  tone?: "dark" | "light";
  children?: ReactNode;
};

function LensGlyph({ tone }: { tone: "dark" | "light" }) {
  return (
    <svg
      viewBox="0 0 48 40"
      aria-hidden="true"
      className={`h-9 w-11 ${tone === "dark" ? "text-cream/20" : "text-ink/20"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M1 9h11l3-5h18l3 5h11v30H1z" />
      <path d="M24 32a9 9 0 100-18 9 9 0 000 18z" />
    </svg>
  );
}

/** Photographic frame. Renders a real image when `src` is given, otherwise a quiet placeholder. */
export function PhotoFrame({
  caption,
  aspect = "aspect-[4/5]",
  src,
  alt,
  className = "",
  tone = "dark",
  children,
}: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden ${aspect} ${
        tone === "dark"
          ? "border border-cream/12 bg-[linear-gradient(135deg,#1a1918_0%,#111010_55%,#1c1a18_100%)]"
          : "border border-ink/10 bg-[linear-gradient(135deg,#e9e4da_0%,#f3f0ea_55%,#e4ded2_100%)]"
      } ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? caption ?? ""}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <LensGlyph tone={tone} />
          {caption ? (
            <span
              className={`label-xs ${tone === "dark" ? "text-cream/35" : "text-ink/40"}`}
            >
              {caption}
            </span>
          ) : null}
        </div>
      )}
      {children}
    </div>
  );
}
