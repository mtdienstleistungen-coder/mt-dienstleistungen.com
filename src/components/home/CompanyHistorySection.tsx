import { Users, Building2, CalendarDays, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { EasterEggSpot } from "@/components/shared/EasterEggSpot";
import { company } from "@/config/company";

const stats = [
  { icon: Users, value: company.employeeCount, label: "Mitarbeiter", animate: true },
  { icon: Building2, value: company.objectsManaged, label: "Betreute Objekte", animate: true },
  { icon: CalendarDays, value: company.foundedYear, label: "Gründung", animate: false },
];

export function CompanyHistorySection() {
  return (
    <section className="relative section-y">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <ScrollReveal direction="right">
              <span className="inline-flex items-center rounded-full bg-brand-amber/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-amber">
                Unsere Geschichte
              </span>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <h2 className="mt-4 font-display text-3xl font-semibold text-balance text-text sm:text-4xl">
                Unsere Geschichte
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="mt-5 space-y-4 text-text/65">
                <p>
                  {company.name} wurde im Jahr {company.foundedYear} von {company.contactPerson}{" "}
                  in Paderborn gegründet.
                </p>
                <p>
                  Von Beginn an war das Ziel, Privatkunden, Unternehmen und Hausverwaltungen mit
                  zuverlässigen Dienstleistungen rund um Immobilien, Reinigung, Gartenpflege und
                  Objektbetreuung zu unterstützen.
                </p>
                <p>
                  Als inhabergeführtes Unternehmen stehen persönliche Betreuung, Zuverlässigkeit
                  und eine saubere Ausführung im Mittelpunkt. Jeder Auftrag wird mit Sorgfalt
                  geplant und professionell umgesetzt.
                </p>
                <p>
                  Aktuell betreut {company.name} bereits vier Objekte und wächst kontinuierlich
                  weiter. Der persönliche Kontakt zu den Kunden sowie eine hohe Servicequalität
                  stehen dabei immer an erster Stelle.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-5">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={stat.label} direction="left" delay={0.1 + index * 0.1}>
                  <div className="flex items-center gap-5 rounded-2xl border border-border/10 bg-surface/60 p-6 shadow-card transition-transform hover:-translate-y-1">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-amber/15 text-brand-amber">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-display text-3xl font-bold text-text sm:text-4xl">
                        {stat.animate ? (
                          <AnimatedCounter value={stat.value} />
                        ) : (
                          stat.value
                        )}
                      </p>
                      <p className="mt-1 text-sm text-text/60">{stat.label}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <ScrollReveal delay={0.15} className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-text/65">
            Wir freuen uns darauf, auch Ihr Objekt zuverlässig zu betreuen.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-brand-amber px-6 py-3.5 font-semibold text-anthracite-950 shadow-glow transition-transform hover:scale-105"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </ScrollReveal>
      </div>

      <EasterEggSpot id="stats-corner" position="bottom-3 right-3 sm:bottom-6 sm:right-6" />
    </section>
  );
}
