"use client";

import { useEffect, useState } from "react";

/**
 * Liefert true, sobald über den übergebenen Schwellenwert hinaus gescrollt wurde.
 * Wird von der Navigation genutzt, um von transparent auf festen Hintergrund zu wechseln.
 */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
