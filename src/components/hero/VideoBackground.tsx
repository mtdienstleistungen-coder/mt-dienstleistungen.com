"use client";

import { useEffect, useState } from "react";
import { ParallaxBackground } from "@/components/hero/ParallaxBackground";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import type { MotionValue } from "framer-motion";

type VideoBackgroundProps = {
  /**
   * Wenn kein videoSrc übergeben wird, läuft die Komponente automatisch im
   * Standardmodus (animierte Bild-/Parallax-Ebenen). Sobald ein echtes
   * MP4/WebM vorliegt, genügt es, videoSrc + poster zu setzen.
   */
  videoSrc?: string;
  posterSrc?: string;
  pointerX?: MotionValue<number>;
  pointerY?: MotionValue<number>;
  /** Ob die Hero-Sektion aktuell sichtbar ist (steuert Pausieren von Endlos-Animationen). */
  isActive?: boolean;
};

export function VideoBackground({
  videoSrc,
  posterSrc,
  pointerX,
  pointerY,
  isActive = true,
}: VideoBackgroundProps) {
  const prefersReduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMobile(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Video-Modus nur auf größeren Bildschirmen und ohne reduzierte Bewegung;
  // mobil sowie bei prefers-reduced-motion greift die performante Bildanimation.
  const shouldPlayVideo = Boolean(videoSrc) && !isMobile && !prefersReduced;

  if (shouldPlayVideo && videoSrc) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-anthracite-950">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/webm" />
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-anthracite-950/30 to-anthracite-950/10" />
      </div>
    );
  }

  return <ParallaxBackground pointerX={pointerX} pointerY={pointerY} isActive={isActive} />;
}
