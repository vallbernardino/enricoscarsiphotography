import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "fade" | "mask";

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  variant = "fade",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "li" | "figure";
  variant?: Variant;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = variant === "mask" ? "mask-open" : "fade-up";
  const active = variant === "mask" ? "mask-open-in" : "fade-up-in";
  const Comp = Tag as "div";

  return (
    <Comp
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${base} ${shown ? active : ""} ${className}`}
    >
      {children}
    </Comp>
  );
}
