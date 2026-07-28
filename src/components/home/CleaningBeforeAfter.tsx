import { Phone, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { BeforeAfterSlider } from "@/components/shared/BeforeAfterSlider";
import { company } from "@/config/company";

type CleaningProject = {
  slug: string;
  title: string;
  description: string;
  before: string;
  after: string;
  alt: string;
};

const cleaningProjects: CleaningProject[] = [
  {
    slug: "gehweg",
    title: "Gehweg- und Außenflächenreinigung",
    description:
      "Entfernung von Unkraut, Schmutz und Ablagerungen für ein gepflegtes Erscheinungsbild rund um das Gebäude.",
    before: "/projects/gehweg-reinigung-vorher.png",
    after: "/projects/gehweg-reinigung-nachher.png",
    alt: "Vorher-Nachher-Vergleich einer gereinigten Gehwegfläche",
  },
  {
    slug: "briefkaesten",
    title: "Reinigung von Briefkastenanlagen",
    description:
      "Gründliche Reinigung von Oberflächen, Kanten und schwer erreichbaren Bereichen für einen sauberen Hauseingang.",
    before: "/projects/briefkaesten-vorher.jpeg",
    after: "/projects/briefkaesten-nachher.jpeg",
    alt: "Vorher-Nachher-Vergleich gereinigter Briefkastenanlagen",
  },
  {
    slug: "fenster",
    title: "Fensterreinigung",
    description: "Sorgfältige Reinigung der Glasflächen für streifenfreie Fenster und klare Sicht.",
    before: "/projects/fenster-reinigung-vorher.png",
    after: "/projects/fenster-reinigung-nachher.png",
    alt: "Vorher-Nachher-Vergleich eines gereinigten Fensters",
  },
  {
    slug: "treppe",
    title: "Treppenreinigung",
    description:
      "Reinigung von Stufen, Kanten und angrenzenden Flächen für einen gepflegten und einladenden Innenbereich.",
    before: "/projects/treppenhaus-vorher.png",
    after: "/projects/treppenhaus-nachher.png",
    alt: "Vorher-Nachher-Vergleich einer gereinigten Holztreppe",
  },
];

export function CleaningBeforeAfter() {
  return (
    <ScrollReveal>
      <div className="mb-16 rounded-3xl border border-border/10 bg-surface/60 p-6 sm:p-10">
        <span className="inline-flex items-center rounded-full bg-brand-amber/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-amber">
          Reinigungsarbeiten aller Art
        </span>
        <h3 className="mt-4 font-display text-2xl font-semibold text-text sm:text-3xl">
          Vorher &amp; Nachher
        </h3>
        <p className="mt-2 text-text/70">Saubere Ergebnisse, die man sofort sieht.</p>
        <p className="mt-3 max-w-2xl text-sm text-text/55">
          Ob Gehwege, Briefkastenanlagen, Fenster oder Treppen – {company.name} sorgt für eine
          gründliche und zuverlässige Reinigung. Unsere Vorher-/Nachher-Beispiele zeigen, welchen
          Unterschied eine professionelle Ausführung macht.
        </p>
        <p className="mt-2 text-xs text-text/40">
          Für private Haushalte, Vermieter, Hausverwaltungen und Gewerbeobjekte in {company.region}.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {cleaningProjects.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-border/10 bg-background/60 shadow-card"
            >
              <BeforeAfterSlider
                beforeImage={project.before}
                afterImage={project.after}
                alt={project.alt}
              />
              <div className="p-5">
                <h4 className="font-display text-base font-semibold text-text">
                  {project.title}
                </h4>
                <p className="mt-2 text-sm text-text/60">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 border-t border-border/10 pt-8 text-center">
          <p className="font-display text-lg font-semibold text-text">
            Auch Ihre Flächen sollen wieder gepflegt aussehen?
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-amber px-6 py-3 text-sm font-semibold text-anthracite-950 shadow-glow transition-transform hover:scale-105"
            >
              Reinigung anfragen
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border/20 bg-text/5 px-6 py-3 text-sm font-semibold text-text transition-colors hover:bg-text/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Jetzt anrufen
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
