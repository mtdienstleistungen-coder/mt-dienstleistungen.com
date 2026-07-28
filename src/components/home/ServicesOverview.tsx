"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ServiceCard } from "@/components/home/ServiceCard";
import { ServiceStage } from "@/components/home/ServiceStage";
import { services } from "@/config/services";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { EasterEggSpot } from "@/components/shared/EasterEggSpot";

const TRANSITION_MS = 600;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Die angeklickte Karte "kippt" leicht per rotateY und gleitet zur Seite
// hinaus, während die übrigen Karten dezent zurücktreten (fade + scale) –
// anschließend blendet die Bühne (ServiceStage) aus der Gegenrichtung ein.
// Beide Zustände teilen sich dieselben Variant-Keys ("visible"/"exit"),
// dadurch spielt "Zurück" exakt dieselbe Bewegung rückwärts ab.
const cardVariants: Variants = {
  visible: { opacity: 1, scale: 1, rotateY: 0, x: 0 },
  exit: (isHero: boolean) =>
    isHero
      ? { opacity: 0.9, scale: 0.97, rotateY: -11, x: -48 }
      : { opacity: 0, scale: 0.94, x: 0 },
};

const cardVariantsReduced: Variants = {
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export function ServicesOverview() {
  // Akkordeon: nur eine Leistung gleichzeitig als große Bühne offen.
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  // Bleibt über das Schließen hinaus gesetzt, damit die Karten beim
  // Zurückkehren ins Raster wissen, welche von ihnen die "Hauptrolle" hatte.
  const [heroSlug, setHeroSlug] = useState<string | null>(null);
  // Verhindert Mehrfachklicks, solange Karten/Bühne noch übergeben.
  const [isAnimating, setIsAnimating] = useState(false);
  const prefersReduced = useReducedMotion();

  const activeService = services.find((service) => service.slug === openSlug) ?? null;

  const guard = (action: () => void) => {
    if (isAnimating) return;
    setIsAnimating(true);
    action();
    window.setTimeout(() => setIsAnimating(false), TRANSITION_MS * 2 + 80);
  };

  const handleOpen = (slug: string) =>
    guard(() => {
      setHeroSlug(slug);
      setOpenSlug(slug);
    });

  const handleClose = () => guard(() => setOpenSlug(null));

  return (
    <section id="leistungen" className="relative section-y scroll-mt-20 bg-surface/40">
      {/* Weicher Übergang von der dunkleren Hero-Fläche in den Leistungen-
          Hintergrundton – ohne diesen Verlauf entsteht ein sichtbarer,
          harter Farbsprung genau an der Sektionsgrenze. Bewusst weiterhin
          "anthracite-950" (nicht das theme-abhängige "background"): die
          Hero-Sektion darüber bleibt in BEIDEN Modi dunkel (siehe
          AnimatedHero/ParallaxBackground), der Übergang muss also immer von
          genau diesem festen Dunkelton ausgehen, auch im Tag-Modus. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-anthracite-950 to-transparent sm:h-32"
        aria-hidden="true"
      />
      <div className="container-page">
        <SectionHeading
          label="Leistungen"
          title="Alles aus einer Hand"
          description="Von der laufenden Betreuung bis zur kompletten Renovierung – ein Ansprechpartner für Ihre Immobilie."
        />

        {/* `perspective` gibt der leichten rotateY-Kippung räumliche Tiefe;
            `overflow-hidden` hält das seitliche Herausgleiten der Karten
            innerhalb der Sektion, damit die Seite nie horizontal scrollt. */}
        <div className="relative mt-14 overflow-hidden" style={{ perspective: 1400 }}>
          <AnimatePresence mode="wait" initial={false}>
            {activeService ? (
              <ServiceStage
                key={activeService.slug}
                service={activeService}
                panelId={`leistung-${activeService.slug}`}
                onBack={handleClose}
              />
            ) : (
              <motion.div
                key="grid"
                // Leere Variants: der Wrapper selbst bleibt unverändert
                // (kein doppeltes Skalieren/Verblassen), er dient nur dazu,
                // die "visible"/"exit"-Zustandslabel an die Karten darunter
                // weiterzureichen (Framer-Motion-Variant-Propagation).
                initial="exit"
                animate="visible"
                exit="exit"
                variants={{ visible: {}, exit: {} }}
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.slug}
                    variants={prefersReduced ? cardVariantsReduced : cardVariants}
                    custom={service.slug === heroSlug}
                    style={{
                      backfaceVisibility: "hidden",
                      transformStyle: "preserve-3d",
                      willChange: "transform, opacity",
                    }}
                    transition={{ duration: prefersReduced ? 0.01 : TRANSITION_MS / 1000, ease: EASE }}
                  >
                    <ScrollReveal delay={Math.min(index * 0.06, 0.3)}>
                      <ServiceCard
                        service={service}
                        panelId={`leistung-${service.slug}`}
                        onOpen={() => handleOpen(service.slug)}
                      />
                    </ScrollReveal>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <EasterEggSpot id="services-corner" position="bottom-3 right-3 sm:bottom-5 sm:right-6" />
    </section>
  );
}
