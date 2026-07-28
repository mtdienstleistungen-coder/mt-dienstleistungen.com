import Image from "next/image";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { company } from "@/config/company";

export function IntroSection() {
  return (
    <section id="ueber-uns" className="relative section-y scroll-mt-20">
      {/* Weicher Übergang von der getönten Leistungen-Fläche (bg-surface/40)
          in den reinen Hintergrundton dieser Sektion – gleiches Prinzip wie
          zwischen Hero und Leistungen, hier nur mit der Ausgangsfarbe der
          jeweils vorherigen Sektion. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-surface/40 to-transparent sm:h-32"
        aria-hidden="true"
      />
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <ScrollReveal direction="right">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-border/10 bg-surface/60 shadow-card">
            <Image
              src="/character/inhaber-foto-original.jpg"
              alt={`${company.contactPerson} von ${company.name}`}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 480px, 90vw"
            />
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <span className="inline-flex items-center rounded-full bg-brand-amber/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-amber">
              Über {company.name}
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="mt-4 font-display text-3xl font-semibold text-balance text-text sm:text-4xl">
              Ihr zuverlässiger Ansprechpartner in Paderborn
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-5 text-text/65">
              {company.name} steht für saubere Arbeit, persönliche Betreuung und zuverlässige
              Ausführung. Ansprechpartner {company.contactPerson} begleitet Ihre Anfrage direkt
              und sorgt für eine unkomplizierte Abstimmung von der ersten Kontaktaufnahme bis zum
              Abschluss der Arbeiten.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
