import { MapPin } from "lucide-react";

type MapPlaceholderProps = {
  className?: string;
};

/**
 * Statischer Karten-Platzhalter. Es werden bewusst keine externen Karten-
 * oder Trackingdienste eingebunden, solange keine Nutzerzustimmung vorliegt.
 * Später kann hier z. B. eine zustimmungsbasierte Google-Maps- oder
 * OpenStreetMap-Einbindung ergänzt werden.
 */
export function MapPlaceholder({ className }: MapPlaceholderProps) {
  return (
    <div
      className={`relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-border/10 bg-surface/60 ${className ?? ""}`}
    >
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgb(var(--color-text)/0.15)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--color-text)/0.15)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="relative flex flex-col items-center gap-2 text-text/50">
        <MapPin className="h-10 w-10 text-brand-amber" aria-hidden="true" />
        <span className="text-sm">Karten-Platzhalter</span>
      </div>
    </div>
  );
}
