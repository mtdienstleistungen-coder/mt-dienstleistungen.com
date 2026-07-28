import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  /**
   * "auto" (Standard) folgt dem Tag-/Nacht-Modus. "light" erzwingt weiße
   * Schrift unabhängig vom Modus – für Stellen, an denen das Logo garantiert
   * über einem dunklen Hintergrund sitzt (Video-Hero, transparente
   * Kopfzeile über dem Hero), wo die themenabhängige Textfarbe im Tag-Modus
   * sonst auf Dunkel kippen und unlesbar werden würde.
   */
  tone?: "auto" | "light";
};

/**
 * Das orangefarbene Feld ist ein rein grafisches Markenzeichen ohne Text
 * (bewusst kein Bild-Logo, damit Größe/Farbe an jeder Stelle konsistent per
 * CSS gesteuert werden). Der Firmenname steht ausschließlich als Schriftzug
 * daneben.
 */
export function Logo({ className, markClassName, showWordmark = true, tone = "auto" }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-amber font-display text-base font-bold tracking-tight text-anthracite-950",
          markClassName
        )}
        aria-hidden="true"
      >
        MT
      </span>
      {showWordmark && (
        <span
          className={cn(
            "font-display text-base font-semibold leading-tight sm:text-lg",
            tone === "light" ? "text-white" : "text-text"
          )}
        >
          Dienstleistungen
        </span>
      )}
    </span>
  );
}
