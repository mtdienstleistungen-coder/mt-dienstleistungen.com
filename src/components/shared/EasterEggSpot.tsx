"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEasterEggSpot } from "@/components/shared/EasterEggProvider";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

type EasterEggSpotProps = {
  /** Eindeutige ID dieser Auftrittsstelle (siehe EasterEggProvider). */
  id: string;
  /**
   * Tailwind-Positionierungsklassen relativ zum nächsten `position`-Vorfahren
   * (z. B. "bottom-2 right-2 sm:bottom-4 sm:right-4"). Jede Stelle definiert
   * damit selbst ihre eigene, vorher festgelegte "sichere" Ecke – bewusst
   * jeweils im Rand-/Weißraum eines Abschnitts, nie über Fließtext oder
   * Buttons.
   */
  position: string;
};

/**
 * Ein einzelner, potenzieller Auftrittsort des Website-Easter-Eggs (derselbe
 * winkende Mini-Charakter wie im Hero). Rendert nur sichtbares Markup, wenn
 * der EasterEggProvider gerade genau diese Stelle ausgewählt hat – ansonsten
 * unsichtbar und ohne Layout-Einfluss.
 */
export function EasterEggSpot({ id, position }: EasterEggSpotProps) {
  const active = useEasterEggSpot(id);
  const prefersReduced = useReducedMotion();

  return (
    <div
      className={cn(
        "pointer-events-none absolute z-10 h-12 w-12 sm:h-16 sm:w-16",
        position
      )}
      aria-hidden="true"
    >
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{
              opacity: 0,
              y: prefersReduced ? 0 : "45%",
              scale: prefersReduced ? 1 : 0.85,
            }}
            animate={{
              opacity: 1,
              y: prefersReduced ? 0 : [null, -6, 0],
              scale: 1,
              rotate: prefersReduced ? 0 : [0, -6, 5, -3, 0],
            }}
            exit={{
              opacity: 0,
              y: prefersReduced ? 0 : "35%",
              scale: prefersReduced ? 1 : 0.85,
              transition: { duration: prefersReduced ? 0.3 : 0.5, ease: "easeIn" },
            }}
            transition={{
              duration: prefersReduced ? 0.3 : 0.9,
              ease: [0.22, 1, 0.36, 1],
              rotate: { duration: 1.6, ease: "easeInOut" },
            }}
            className="relative h-full w-full drop-shadow-[0_6px_14px_rgb(var(--color-shadow)/0.35)]"
          >
            <Image
              src="/character/handwerker-winkend.png"
              alt=""
              fill
              className="object-contain object-bottom"
              sizes="64px"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
