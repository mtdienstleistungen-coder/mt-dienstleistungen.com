"use client";

import { useEffect, useRef, type RefObject } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const ANIMATION_DURATION_MS = 800;
const WHEEL_THRESHOLD = 4;
const TOUCH_THRESHOLD = 12;
const BOUNDARY_TOLERANCE = 2;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Browser/Eingabegerät melden `deltaY` in völlig unterschiedlichen
// Größenordnungen: die meisten Trackpads und Chrome/Edge liefern Pixelwerte
// (~100 pro Mausrad-Schritt), aber physische Mausräder liefern in manchen
// Browsern (u. a. Firefox) `deltaMode: DOM_DELTA_LINE` mit sehr kleinen
// Werten (oft ±1 bis ±3). Ohne diese Normalisierung unterschreitet ein
// einzelner Mausrad-Schritt dort den WHEEL_THRESHOLD dauerhaft, wodurch
// Scrollen auf dem Intro-Bildschirm scheinbar komplett wirkungslos bleibt.
function normalizeWheelDeltaY(event: WheelEvent): number {
  if (event.deltaMode === 1 /* DOM_DELTA_LINE */) return event.deltaY * 16;
  if (event.deltaMode === 2 /* DOM_DELTA_PAGE */) return event.deltaY * window.innerHeight;
  return event.deltaY;
}

/**
 * Verbindet den Vollbild-Video-Intro-Bereich mit dem darauffolgenden Inhalt:
 * Eine einzelne Scrollbewegung (Mausrad, Trackpad oder Touch) nach unten,
 * solange sich der Besucher im Intro befindet, animiert die Seite flüssig
 * bis zum Seiteninhalt. Eine Scrollbewegung nach oben direkt am Übergang
 * bringt symmetrisch zurück zum Intro.
 *
 * Bewusst ohne CSS-Scroll-Snap als alleinige Lösung: Für die geforderte
 * exakte Dauer (~800ms) und easing (ease-in-out) wird die Scrollposition
 * hier gezielt per requestAnimationFrame animiert. Ergänzend ist im
 * globalen CSS ein sanftes `scroll-snap-type: proximity` als natives
 * Fallback hinterlegt (siehe globals.css).
 *
 * Reagiert nicht auf Tastatur-Scrollen (Bild-ab, Leertaste, Pfeiltasten) –
 * so bleibt normales, unangetastetes Scrollen für Tastatur- und
 * Screenreader-Nutzer erhalten. Bei aktivem prefers-reduced-motion wird
 * die automatische Sprung-Animation vollständig deaktiviert.
 */
export function useScrollSnapIntro(introRef: RefObject<HTMLElement>) {
  const prefersReduced = useReducedMotion();
  const isAnimating = useRef(false);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReduced) return;

    const getIntroHeight = () => introRef.current?.offsetHeight ?? window.innerHeight;

    const animateScrollTo = (target: number) => {
      isAnimating.current = true;
      const start = window.scrollY;
      const distance = target - start;
      const startTime = performance.now();

      // `scroll-behavior: smooth` (global in globals.css) greift auch auf die
      // programmatischen scrollTo-Aufrufe unten zu – der Browser würde also
      // versuchen, JEDEN einzelnen Frame dieser Schleife zusätzlich selbst
      // weich zu animieren und mit der eigenen Easing-Kurve zu überlagern.
      // Das erzeugt genau während des Video→Hero-Übergangs Ruckler. Deshalb
      // wird die CSS-Glättung für die Dauer der manuellen, bereits fein
      // ge-easten rAF-Animation kurz deaktiviert und danach wiederhergestellt.
      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";

      // Sicherheitsnetz: falls requestAnimationFrame mittendrin ins Stocken
      // gerät (z. B. weil der Tab während des Übergangs in den Hintergrund
      // wechselt und rAF pausiert wird), darf die Sperre nicht dauerhaft
      // hängen bleiben – sonst reagiert der Slider danach gar nicht mehr.
      const safetyTimeout = window.setTimeout(() => {
        isAnimating.current = false;
        root.style.scrollBehavior = previousScrollBehavior;
      }, ANIMATION_DURATION_MS + 500);

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / ANIMATION_DURATION_MS, 1);
        window.scrollTo(0, start + distance * easeInOutCubic(progress));

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          window.clearTimeout(safetyTimeout);
          isAnimating.current = false;
          root.style.scrollBehavior = previousScrollBehavior;
        }
      };

      requestAnimationFrame(step);
    };

    const handleWheel = (event: WheelEvent) => {
      if (isAnimating.current) {
        event.preventDefault();
        return;
      }

      const introHeight = getIntroHeight();
      const y = window.scrollY;
      const deltaY = normalizeWheelDeltaY(event);

      if (deltaY > WHEEL_THRESHOLD && y < introHeight - BOUNDARY_TOLERANCE) {
        event.preventDefault();
        animateScrollTo(introHeight);
      } else if (
        deltaY < -WHEEL_THRESHOLD &&
        y > BOUNDARY_TOLERANCE &&
        y <= introHeight + BOUNDARY_TOLERANCE
      ) {
        event.preventDefault();
        animateScrollTo(0);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isAnimating.current) {
        event.preventDefault();
        return;
      }
      if (touchStartY.current === null) return;

      const currentY = event.touches[0]?.clientY ?? touchStartY.current;
      const delta = touchStartY.current - currentY; // positiv = nach oben wischen = nach unten scrollen
      const introHeight = getIntroHeight();
      const y = window.scrollY;

      if (delta > TOUCH_THRESHOLD && y < introHeight - BOUNDARY_TOLERANCE) {
        event.preventDefault();
        touchStartY.current = null;
        animateScrollTo(introHeight);
      } else if (
        delta < -TOUCH_THRESHOLD &&
        y > BOUNDARY_TOLERANCE &&
        y <= introHeight + BOUNDARY_TOLERANCE
      ) {
        event.preventDefault();
        touchStartY.current = null;
        animateScrollTo(0);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [introRef, prefersReduced]);
}
