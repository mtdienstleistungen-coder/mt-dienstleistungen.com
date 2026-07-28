import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { BeforeAfterSlider } from "@/components/shared/BeforeAfterSlider";

/**
 * Featured Vorher/Nachher-Vergleich speziell für Fußbodenlegearbeiten.
 * Zwei interaktive Schieberegler, nebeneinander (Desktop) bzw.
 * untereinander (Mobil).
 */
export function FloorBeforeAfter() {
  return (
    <ScrollReveal>
      <div className="mb-16 rounded-3xl border border-border/10 bg-surface/60 p-6 sm:p-10">
        <span className="inline-flex items-center rounded-full bg-brand-amber/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-amber">
          Fußbodenlegearbeiten
        </span>
        <h3 className="mt-4 font-display text-2xl font-semibold text-text sm:text-3xl">
          Vorher &amp; Nachher
        </h3>
        <p className="mt-2 text-text/70">So sieht professionelle Fußbodenvorbereitung aus.</p>
        <p className="mt-3 max-w-2xl text-sm text-text/55">
          Wir entfernen alte Bodenbeläge, Kleberreste und bereiten den Untergrund fachgerecht für
          den neuen Bodenbelag vor. Unsere Vorher-/Nachher-Projekte zeigen den Unterschied.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
          <BeforeAfterSlider
            beforeImage="/projects/bodenbelag-rueckbau-vorher.jpeg"
            afterImage="/projects/bodenbelag-rueckbau-nachher.jpeg"
            alt="Fußbodenvorbereitung: Entfernung des alten Belags"
            className="rounded-2xl shadow-card"
          />
          <BeforeAfterSlider
            beforeImage="/projects/fussboden-vorbereitung-vorher.jpeg"
            afterImage="/projects/fussboden-vorbereitung-nachher.jpeg"
            alt="Fußbodenvorbereitung: fachgerecht vorbereiteter Untergrund"
            className="rounded-2xl shadow-card"
          />
          <BeforeAfterSlider
            beforeImage="/projects/flur-vorher.jpeg"
            afterImage="/projects/flur-nachher.jpeg"
            alt="Flur: neu verlegter Bodenbelag"
            showLabels={false}
            className="rounded-2xl shadow-card"
          />
          <BeforeAfterSlider
            beforeImage="/projects/wohnraum-vorher.jpeg"
            afterImage="/projects/wohnraum-nachher.jpeg"
            alt="Flur mit Abzweigung: neu verlegter Bodenbelag"
            showLabels={false}
            className="rounded-2xl shadow-card"
          />
        </div>
      </div>
    </ScrollReveal>
  );
}
