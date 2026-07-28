"use client";

import { useEffect, useState } from "react";

/**
 * Liefert true, wenn der Nutzer "prefers-reduced-motion: reduce" aktiviert hat.
 * Wird verwendet, um aufwendige Animationen (Parallax, Hero, Zähler) zu deaktivieren.
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReduced;
}
