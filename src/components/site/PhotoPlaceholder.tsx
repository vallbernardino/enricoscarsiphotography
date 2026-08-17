type Props = {
  /** Frame id in EXIF style, e.g. IMG_014 */
  id?: string;
  /** Mono caption describing what belongs here */
  caption: string;
  /** Tailwind aspect utility, e.g. "aspect-[4/5]" */
  aspect?: string;
  /** Future: real image source; layout stays identical once provided */
  src?: string;
  alt?: string;
  className?: string;
  sprockets?: boolean;
};

function CameraGlyph() {
  return (
    <svg
      viewBox="0 0 48 40"
      aria-hidden="true"
      className="h-10 w-12 text-stone/35"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
    >
      <path d="M1 9h11l3-5h18l3 5h11v30H1z" />
      <path d="M24 32a9 9 0 100-18 9 9 0 000 18z" />
      <path d="M24 27a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
  );
}

export function PhotoPlaceholder({
  id,
  caption,
  aspect = "aspect-[4/5]",
  src,
  alt,
  className = "",
  sprockets = false,
}: Props) {
  return (
    <figure className={className}>
      {sprockets ? <div className="sprockets h-[3px] w-full" /> : null}
      <div className={`hairline relative w-full overflow-hidden bg-frame ${aspect}`}>
        {src ? (
          <img src={src} alt={alt ?? caption} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <CameraGlyph />
            <span className="mono-label text-stone/70">{id ?? "IMG"}</span>
          </div>
        )}
      </div>
      <figcaption className="mono-label mt-2 block">
        {id ? `${id} — ` : ""}
        {caption}
      </figcaption>
    </figure>
  );
}
