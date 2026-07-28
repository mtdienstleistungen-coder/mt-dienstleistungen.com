"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { Logo } from "@/components/layout/Logo";

const POSTER_SRC = "/video/hero-intro-poster.jpg";
const VIDEO_SRC = "/video/hero-intro.mp4";

/**
 * Vollflächiger Video-Startbildschirm (erster Bereich der Website).
 * Auf Mobilgeräten sowie bei aktivem prefers-reduced-motion wird aus
 * Performance- und Datenverbrauchsgründen nur das Standbild gezeigt,
 * das Video bleibt Desktop/Tablet vorbehalten.
 */
export function VideoHeroIntro() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setIsMobile(mediaQuery.matches);
    const handleChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const showVideo = !isMobile && !prefersReduced;

  // Normales, weiches Scrollen zum nächsten Bereich – kein Event-Listener,
  // keine Scroll-Sperre, keine Berechnung: scrollIntoView übernimmt das
  // komplett, Mausrad/Trackpad/Touch/Tastatur bleiben davon unberührt.
  const scrollToContent = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="start"
      ref={sectionRef}
      className="relative h-dvh w-full overflow-hidden bg-anthracite-950"
    >
      {showVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER_SRC}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
      ) : (
        <Image src={POSTER_SRC} alt="" fill priority className="object-cover" />
      )}

      <div
        className="absolute inset-0 bg-gradient-to-t from-anthracite-950/70 via-transparent to-anthracite-950/30"
        aria-hidden="true"
      />

      {/* Verdeckt das Wasserzeichen des KI-Videotools unten rechts, ohne
          wie ein hartkantiger Aufkleber zu wirken – fügt sich als sanfte
          Vignette in den bereits vorhandenen dunklen Verlauf ein. */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-28 w-48 sm:h-36 sm:w-64"
        style={{
          background:
            "radial-gradient(ellipse at bottom right, rgba(10,13,18,0.95) 0%, rgba(10,13,18,0.75) 35%, rgba(10,13,18,0.35) 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-between px-4 py-8 sm:py-10">
        {/* tone="light": diese Fläche ist immer dunkel (Video/Verlauf), auch
            im Tag-Modus – die themenabhängige Textfarbe des Logos würde dort
            sonst im Tag-Modus auf Dunkel kippen und unlesbar werden. */}
        <Logo tone="light" />

        <button
          type="button"
          onClick={scrollToContent}
          aria-label="Zum Seiteninhalt scrollen"
          // Größere Klickfläche (min. 44×44px, WCAG 2.2 SC 2.5.8) statt nur
          // der visuellen Text-/Icon-Größe – zusätzlich dezenter Hover-Kreis
          // als klar erkennbare Interaktionsfläche.
          className="flex flex-col items-center gap-2 rounded-full px-5 py-3 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:text-white"
        >
          <span className="text-xs font-semibold uppercase tracking-widest">Entdecken</span>
          <ChevronDown
            className="h-6 w-6 animate-bounce motion-reduce:animate-none"
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
}
