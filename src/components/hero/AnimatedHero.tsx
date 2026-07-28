"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import gsap from "gsap";
import { Phone, ChevronDown } from "lucide-react";
import { VideoBackground } from "@/components/hero/VideoBackground";
import { HeroCharacter } from "@/components/hero/HeroCharacter";
import { usePointerParallax } from "@/lib/hooks/usePointerParallax";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { company } from "@/config/company";

type AnimatedHeroProps = {
  videoSrc?: string;
  posterSrc?: string;
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function AnimatedHero({ videoSrc, posterSrc }: AnimatedHeroProps) {
  const prefersReduced = useReducedMotion();
  const { ref: parallaxRef, x, y } = usePointerParallax<HTMLDivElement>(!prefersReduced);
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const beamTweenRef = useRef<gsap.core.Tween | null>(null);

  // Löst die einmalige Introsequenz erst aus, wenn der Hero tatsächlich in
  // den sichtbaren Bereich kommt – nicht schon beim Seitenaufbau, während der
  // Besucher noch das Video davor sieht. So wirkt der Übergang vom Video zum
  // Hero wie eine fortlaufende Sequenz statt eines bereits abgeschlossenen,
  // unsichtbar abgespielten Effekts.
  const heroRevealed = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  // Läuft dauerhaft mit (kein "once"), damit endlos wiederholte Animationen
  // pausiert werden können, sobald der Hero wieder aus dem Sichtbereich
  // scrollt – spart Hauptthread-Arbeit, ohne dass ein Unterschied sichtbar ist.
  const heroActive = useInView(sectionRef, { margin: "0px" });

  // GSAP-Timeline für die "cineastische Introsequenz": leichter Zoom-in beim
  // Erscheinen der Szene sowie eine langsame, endlos wiederholte Lichtstrahl-
  // Kamerafahrt. Framer Motion übernimmt parallel die gestaffelten Text-
  // Animationen (ebenfalls an heroRevealed gekoppelt, siehe unten).
  useEffect(() => {
    if (prefersReduced || !heroRevealed) return;

    const ctx = gsap.context(() => {
      if (sceneRef.current) {
        // Opacity+Scale statt eines animierten blur()-Filters: ein
        // animierter Weichzeichner zwingt den Browser, auf jedem Frame die
        // gesamte (bereits komplexe) Hintergrundebene neu zu rastern, statt
        // nur Compositor-Eigenschaften (transform/opacity) zu verschieben.
        gsap.fromTo(
          sceneRef.current,
          { scale: 1.08, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out", force3D: true }
        );
      }

      if (beamRef.current) {
        beamTweenRef.current = gsap.fromTo(
          beamRef.current,
          { xPercent: -60, opacity: 0 },
          {
            xPercent: 160,
            opacity: 0.5,
            duration: 6,
            repeat: -1,
            repeatDelay: 3,
            ease: "power1.inOut",
            force3D: true,
          }
        );
      }
    });

    return () => ctx.revert();
  }, [heroRevealed, prefersReduced]);

  // Pausiert die endlos laufende Lichtstrahl-Animation, sobald der Hero
  // nicht sichtbar ist, statt sie unbegrenzt im Hintergrund weiterlaufen zu
  // lassen, während der Besucher längst weiter unten auf der Seite ist.
  useEffect(() => {
    const tween = beamTweenRef.current;
    if (!tween) return;
    if (heroActive) tween.play();
    else tween.pause();
  }, [heroActive]);

  return (
    <section
      ref={sectionRef}
      className="snap-start relative flex min-h-[92vh] scroll-mt-20 items-center overflow-hidden pt-20"
    >
      <div ref={sceneRef} className="absolute inset-0">
        <div ref={parallaxRef} className="absolute inset-0">
          <VideoBackground
            videoSrc={videoSrc}
            posterSrc={posterSrc}
            pointerX={x}
            pointerY={y}
            isActive={heroActive}
          />
        </div>
      </div>

      {/* bewegte Lichtquelle / Kamerafahrt */}
      <div
        ref={beamRef}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={heroRevealed ? "visible" : "hidden"}
          className="relative z-10 text-center lg:text-left"
        >
          <motion.span
            variants={staggerItem}
            className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-amber backdrop-blur"
          >
            {company.name} · {company.region}
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="mt-6 font-display text-4xl font-semibold text-balance text-white sm:text-5xl lg:text-6xl"
          >
            Zuverlässige Dienstleistungen rund um Ihre Immobilie
          </motion.h1>

          {/* Eine gestraffte Zeile statt zweier inhaltlich überlappender
              Absätze – klarere Hierarchie, besser scannbar und auf kleinen
              Bildschirmen bleibt der Call-to-Action eher im sichtbaren
              Bereich, ohne dass Informationen verloren gehen. */}
          <motion.p
            variants={staggerItem}
            className="mx-auto mt-6 max-w-xl text-balance text-lg text-white/70 lg:mx-0"
          >
            Professionelle Arbeiten für Haus, Wohnung, Garten und Renovierung – zuverlässig für
            Privatkunden, Vermieter und Unternehmen in Paderborn und Umgebung.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-amber px-7 py-4 font-semibold text-anthracite-950 shadow-glow transition-transform hover:scale-105"
            >
              Kostenlos anfragen
            </a>
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {company.phoneDisplay} anrufen
            </a>
          </motion.div>
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <HeroCharacter pointerX={x} pointerY={y} revealed={heroRevealed} isActive={heroActive} />
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={prefersReduced || !heroActive ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <ChevronDown className="h-6 w-6 text-white/50" />
      </motion.div>
    </section>
  );
}
