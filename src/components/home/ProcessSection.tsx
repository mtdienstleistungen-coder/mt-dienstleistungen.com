import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { EasterEggSpot } from "@/components/shared/EasterEggSpot";

const steps = [
  {
    number: "01",
    title: "Anfrage senden",
    description: "Beschreiben Sie kurz, welche Arbeiten erledigt werden sollen.",
  },
  {
    number: "02",
    title: "Persönliche Abstimmung",
    description: "Wir klären Umfang, Termin und die nächsten Schritte.",
  },
  {
    number: "03",
    title: "Ausführung",
    description: "Die vereinbarten Arbeiten werden zuverlässig und sorgfältig durchgeführt.",
  },
  {
    number: "04",
    title: "Abschluss",
    description: "Nach Fertigstellung erfolgt eine gemeinsame Kontrolle.",
  },
];

export function ProcessSection() {
  return (
    <section id="ablauf" className="relative section-y scroll-mt-20">
      {/* Weicher Übergang von der getönten Projekte-Fläche – gleiches Prinzip
          wie zwischen Hero und Leistungen. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-surface/40 to-transparent sm:h-32"
        aria-hidden="true"
      />
      <div className="container-page">
        <SectionHeading label="Ablauf" title="So einfach funktioniert es" />

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-text/15 to-transparent lg:block"
            aria-hidden="true"
          />
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={Math.min(index * 0.1, 0.3)}>
              <div className="relative text-center">
                <span className="relative z-10 mx-auto flex h-14 w-24 items-center justify-center font-display text-3xl font-bold text-brand-amber">
                  {step.number}
                </span>
                <h3 className="mt-1 font-display text-lg font-semibold text-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-text/60">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <EasterEggSpot id="process-heading" position="top-2 right-3 sm:top-4 sm:right-8" />
    </section>
  );
}
