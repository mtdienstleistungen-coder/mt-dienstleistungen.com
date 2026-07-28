import { SectionHeading } from "@/components/shared/SectionHeading";
import { FloorBeforeAfter } from "@/components/home/FloorBeforeAfter";
import { CleaningBeforeAfter } from "@/components/home/CleaningBeforeAfter";
import { GardenBeforeAfter } from "@/components/home/GardenBeforeAfter";

export function BeforeAfterSection() {
  return (
    <section id="projekte" className="relative section-y scroll-mt-20 bg-surface/40">
      {/* Weicher Übergang von der vorherigen, ungetönten Sektion – gleiches
          Prinzip wie zwischen Hero und Leistungen. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent sm:h-32"
        aria-hidden="true"
      />
      <div className="container-page">
        <SectionHeading
          label="Projekte"
          title="Vorher. Nachher. Sauber erledigt."
          description="Ein sauber vorbereiteter Untergrund ist die Grundlage für ein langlebiges Ergebnis."
        />

        <div className="mt-14">
          <FloorBeforeAfter />
          <CleaningBeforeAfter />
          <GardenBeforeAfter />
        </div>
      </div>
    </section>
  );
}
