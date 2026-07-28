import { UserCheck, CalendarCheck, Sparkles, Puzzle, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { company } from "@/config/company";

const advantages = [
  { icon: UserCheck, title: "Persönlicher Ansprechpartner", description: "Ein fester Ansprechpartner begleitet Ihre Anfrage direkt." },
  { icon: CalendarCheck, title: "Zuverlässige Terminabstimmung", description: "Vereinbarte Termine werden zuverlässig eingehalten." },
  { icon: Sparkles, title: "Saubere und sorgfältige Ausführung", description: "Gründliche Arbeit mit sichtbarem Anspruch an Ordnung." },
  { icon: Puzzle, title: "Individuelle Lösungen", description: "Jedes Anliegen wird passend zur jeweiligen Situation gelöst." },
  { icon: MapPin, title: `Einsatz in ${company.region}`, description: "Kurze Wege durch regionale Nähe vor Ort." },
];

export function AdvantagesSection() {
  return (
    <section id="vorteile" className="section-y scroll-mt-20">
      <div className="container-page">
        <SectionHeading label="Warum wir" title="Darauf können Sie sich verlassen" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={Math.min(index * 0.08, 0.3)}>
                <div className="h-full rounded-2xl border border-border/10 bg-surface/60 p-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-amber/15 text-brand-amber">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-text">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-text/60">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
