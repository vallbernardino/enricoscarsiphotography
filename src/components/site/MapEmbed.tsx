import { CONTACT } from "@/lib/site-content";

/** Verified studio address — never the city centre. */
export const STUDIO_QUERY = "Enrico Scarsi Fotografo, Via Oropa 54B, 10153 Torino TO, Italia";
export const STUDIO_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  STUDIO_QUERY,
)}`;
export const STUDIO_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  STUDIO_QUERY,
)}`;

/**
 * Real, interactive Google Map (zoom / drag / pan / marker) for the studio address.
 * Keyless embed endpoint; the location is resolved by Google from the verified address.
 */
export function MapEmbed({ className = "" }: { className?: string }) {
  const query = encodeURIComponent(STUDIO_QUERY);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <iframe
        title={`Google Maps — ${CONTACT.address}`}
        src={`https://www.google.com/maps?q=${query}&z=16&output=embed`}
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full"
        style={{ border: 0, minHeight: "100%" }}
      />
    </div>
  );
}
