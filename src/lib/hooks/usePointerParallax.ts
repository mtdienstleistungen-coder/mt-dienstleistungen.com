"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * Liefert federnd geglättete Motion-Values (-1 bis 1) basierend auf der
 * Mausposition relativ zum übergebenen Container. Wird für dezente
 * Parallax-Effekte im Hero-Bereich genutzt. Auf Touch-Geräten bleibt der
 * Wert bei 0, da keine Mausbewegung stattfindet.
 */
export function usePointerParallax<T extends HTMLElement>(enabled = true) {
  const ref = useRef<T>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 120, mass: 0.5 });
  const springY = useSpring(y, { damping: 20, stiffness: 120, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;
    const node = ref.current;
    if (!node) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
      const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
      x.set(relativeX * 2);
      y.set(relativeY * 2);
    };

    const handlePointerLeave = () => {
      x.set(0);
      y.set(0);
    };

    node.addEventListener("pointermove", handlePointerMove);
    node.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      node.removeEventListener("pointermove", handlePointerMove);
      node.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [enabled, x, y]);

  return { ref, x: springX, y: springY };
}
