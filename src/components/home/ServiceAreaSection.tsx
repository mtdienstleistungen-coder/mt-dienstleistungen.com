import { MapPin, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MapPlaceholder } from "@/components/shared/MapPlaceholder";
import { company, googleMapsUrl } from "@/config/company";

export function ServiceAreaSection() {
  return (
    <section id="einsatzgebiet" className="relative section-y scroll-mt-20 bg-surface/40">
      {/* Weicher Übergang von der vorherigen, ungetönten Sektion – gleiches
          Prinzip wie zwischen Hero und Leistungen. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent sm:h-32"
        aria-hidden="true"
      />
      <div className="container-page grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            label="Einsatzgebiet"
            title="Für Sie im Raum Paderborn im Einsatz"
            description={`${company.name} ist Ihr Ansprechpartner für Arbeiten rund um Immobilien, Renovierung und Objektpflege in Paderborn und der näheren Umgebung.`}
          />

          <ScrollReveal delay={0.15}>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border/10 bg-surface/60 p-5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-amber" aria-hidden="true" />
              <div>
                <p className="font-medium text-text">{company.name}</p>
                <p className="text-sm text-text/60">
                  {company.address.street}
                  <br />
                  {company.address.zip} {company.address.city}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <a
              href={googleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-amber px-6 py-3.5 font-semibold text-anthracite-950 shadow-glow transition-transform hover:scale-105"
            >
              In Google Maps öffnen
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="left">
          <MapPlaceholder />
        </ScrollReveal>
      </div>
    </section>
  );
}
