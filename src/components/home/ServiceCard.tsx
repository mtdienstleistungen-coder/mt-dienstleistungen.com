import { ChevronRight } from "lucide-react";
import type { Service } from "@/config/services";

type ServiceCardProps = {
  service: Service;
  panelId: string;
  onOpen: () => void;
};

/**
 * Kollabierte Leistungskachel (reine Vorschau). Die Detailansicht lebt in
 * `ServiceStage` und wird von `ServicesOverview` gesteuert – diese
 * Komponente kennt nur ihren eigenen Vorschau-Zustand, keine Animation.
 *
 * Das Leistungs-Icon erscheint ausschließlich noch als großes, dezentes
 * Hintergrund-Motiv (kein kleines Badge mehr) – ein einheitliches Muster für
 * alle sieben Karten statt einer Sonderlösung pro Leistung.
 */
export function ServiceCard({ service, panelId, onOpen }: ServiceCardProps) {
  const Icon = service.icon;
  const heading = service.sectionTitle ?? service.title;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/10 bg-surface/60 p-6 transition-colors hover:border-brand-amber/40">
      {/* Großes Hintergrund-Icon: negativer z-index hält es sicher hinter dem
          (nicht positionierten) Text-/Button-Inhalt, ohne dass die übrigen
          Elemente selbst positioniert werden müssten. pointer-events-none
          verhindert jede Interaktion damit; die Verschiebung nach rechts/unten
          zieht das Icon in eine diagonale Ecklage (von der Überschrift oben
          links weg), das umgebende overflow-hidden der Karte schneidet den
          Überstand sauber am Rand ab statt es zu stauchen. Die Skalierung bei
          Hover ist bewusst sehr dezent (5 %) und läuft über dieselbe
          group-Klasse wie der bestehende Rahmen-Hover-Effekt der Karte.

          Farbe kommt bewusst aus dem gemeinsamen "text"-Designtoken statt aus
          Amber: der Token ist im Tag-Modus dunkles Navy, im Nacht-Modus Weiß –
          folgt damit automatisch dem aktiven Modus, ohne eine eigene
          "dark:"-Farbvariante zu benötigen. Die Deckkraft liegt in beiden
          Modi im Bereich 12–18 % (Nacht-Modus am oberen Rand, da Weiß auf
          dunklem Grund bei gleicher Deckkraft dezenter wirkt als Navy auf
          hellem Grund). Der sehr dezente, ebenfalls themenabhängige
          drop-shadow (über dieselbe --color-shadow-Variable wie die
          Karten-Schatten) hebt das Icon minimal vom Hintergrund ab, ohne
          eigenständig sichtbar zu werden. */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <Icon
          className="h-[85%] w-[85%] translate-x-[10%] translate-y-[10%] text-text opacity-[0.15] drop-shadow-[0_6px_16px_rgb(var(--color-shadow)/0.12)] transition-transform duration-500 ease-out group-hover:scale-105 dark:opacity-[0.18]"
          strokeWidth={1.25}
        />
      </div>

      <h3 className="font-display text-base font-semibold text-text">{heading}</h3>
      <p className="mt-2 flex-1 text-sm text-text/60">{service.intro}</p>

      <button
        type="button"
        onClick={onOpen}
        aria-expanded={false}
        aria-controls={panelId}
        className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-amber hover:text-brand-amber-light"
      >
        Mehr …
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </button>
    </div>
  );
}
