import { Phone, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { BeforeAfterSlider } from "@/components/shared/BeforeAfterSlider";
import { company } from "@/config/company";

type GardenProject = {
  slug: string;
  title: string;
  description: string;
  before: string;
  after: string;
  alt: string;
};

const gardenProjects: GardenProject[] = [
  {
    slug: "beetpflege",
    title: "Beetpflege und Neugestaltung",
    description:
      "Entfernung von Unkraut, alten Pflanzen und überflüssiger Dekoration sowie Vorbereitung und Pflege der Gartenfläche für ein sauberes Gesamtbild.",
    before: "/projects/gartenpflege-vorher.png",
    after: "/projects/gartenpflege-nachher.png",
    alt: "Vorher-Nachher-Vergleich einer Gartenpflege",
  },
  {
    slug: "aussenanlagen",
    title: "Pflege von Garten- und Außenanlagen",
    description:
      "Rückschnitt, Beetpflege, Reinigung und professionelle Aufwertung der gesamten Außenanlage für ein gepflegtes Erscheinungsbild.",
    before: "/projects/garten-hecke-vorher.png",
    after: "/projects/garten-hecke-nachher.png",
    alt: "Vorher-Nachher-Vergleich einer gepflegten Außenanlage",
  },
];

export function GardenBeforeAfter() {
  return (
    <ScrollReveal>
      <div className="mb-16 rounded-3xl border border-border/10 bg-surface/60 p-6 sm:p-10">
        <span className="inline-flex items-center rounded-full bg-brand-amber/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-amber">
          Garten- und Außenanlagenpflege
        </span>
        <h3 className="mt-4 font-display text-2xl font-semibold text-text sm:text-3xl">
          Vorher &amp; Nachher
        </h3>
        <p className="mt-2 text-text/70">
          Professionelle Garten- und Außenanlagenpflege mit sichtbaren Ergebnissen.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-text/55">
          Ein gepflegter Garten hinterlässt einen positiven Eindruck. {company.name} übernimmt
          zuverlässig die Pflege von Grünflächen, Beeten, Hecken und Außenanlagen. Unsere
          Vorher-/Nachher-Projekte zeigen den Unterschied.
        </p>
        <p className="mt-2 text-xs text-text/40">
          Für Privatkunden, Vermieter, Hausverwaltungen und Gewerbeobjekte in {company.region}.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {gardenProjects.map((project) => (
            <div
              key={project.slug}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/10 bg-background/60 shadow-card transition-shadow hover:shadow-glow"
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
            Ihr Garten braucht wieder Pflege?
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-amber px-6 py-3 text-sm font-semibold text-anthracite-950 shadow-glow transition-transform hover:scale-105"
            >
              Jetzt Gartenpflege anfragen
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
