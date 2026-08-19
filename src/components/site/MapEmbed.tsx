import { CONTACT } from "@/lib/site-content";

/**
 * Real, interactive Google Map (zoom / drag / pan) for the studio address.
 * Uses the keyless embed endpoint; the address comes from the studio's own details.
 */
export function MapEmbed({ className = "" }: { className?: string }) {
  const query = encodeURIComponent(CONTACT.address);
  return (
    <div className={`relative overflow-hidden border border-cream/12 bg-charcoal-soft ${className}`}>
      <iframe
        title="Google Maps — Via Oropa 54B, Torino"
        src={`https://www.google.com/maps?q=${query}&z=15&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full grayscale-[35%] contrast-[1.05]"
        style={{ border: 0, minHeight: "100%" }}
      />
    </div>
  );
}
