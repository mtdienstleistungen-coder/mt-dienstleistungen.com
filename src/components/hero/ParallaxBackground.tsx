"use client";

import { motion, useMotionValue, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Wrench, Hammer, PaintRoller, Ruler } from "lucide-react";
import { useRef } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type ParallaxBackgroundProps = {
  pointerX?: MotionValue<number>;
  pointerY?: MotionValue<number>;
  /** Ob die Hero-Sektion aktuell sichtbar ist (pausiert Endlos-Animationen, wenn nicht). */
  isActive?: boolean;
};

const dustParticles = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  size: 2 + ((i * 7) % 4),
  duration: 5 + (i % 6),
  delay: (i % 5) * 0.6,
}));

const TOOL_DEPTHS = [20, 35, 15, 28] as const;
const TOOL_META = [
  { Icon: Wrench, className: "left-[8%] top-[20%] h-16 w-16 rotate-[-18deg]" },
  { Icon: Hammer, className: "right-[12%] top-[15%] h-20 w-20 rotate-[14deg]" },
  { Icon: PaintRoller, className: "left-[15%] bottom-[18%] h-16 w-16 rotate-[8deg]" },
  { Icon: Ruler, className: "right-[8%] bottom-[24%] h-14 w-14 rotate-[-10deg]" },
] as const;

export function ParallaxBackground({ pointerX, pointerY, isActive = true }: ParallaxBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const skylineY = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : 80]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : 140]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : 40]);

  const fallbackX = useMotionValue(0);
  const fallbackY = useMotionValue(0);
  const px = pointerX ?? fallbackX;
  const py = pointerY ?? fallbackY;

  // Feste Anzahl an Hooks (keine Erzeugung innerhalb einer Schleife/Bedingung),
  // damit die Rules of Hooks unabhängig von Motion-Präferenz eingehalten werden.
  const toolTranslateX0 = useTransform(px, (v) => v * TOOL_DEPTHS[0]);
  const toolTranslateY0 = useTransform(py, (v) => v * TOOL_DEPTHS[0]);
  const toolTranslateX1 = useTransform(px, (v) => v * TOOL_DEPTHS[1]);
  const toolTranslateY1 = useTransform(py, (v) => v * TOOL_DEPTHS[1]);
  const toolTranslateX2 = useTransform(px, (v) => v * TOOL_DEPTHS[2]);
  const toolTranslateY2 = useTransform(py, (v) => v * TOOL_DEPTHS[2]);
  const toolTranslateX3 = useTransform(px, (v) => v * TOOL_DEPTHS[3]);
  const toolTranslateY3 = useTransform(py, (v) => v * TOOL_DEPTHS[3]);

  const toolTransforms = [
    { x: toolTranslateX0, y: toolTranslateY0 },
    { x: toolTranslateX1, y: toolTranslateY1 },
    { x: toolTranslateX2, y: toolTranslateY2 },
    { x: toolTranslateX3, y: toolTranslateY3 },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-cinematic-gradient">
      {/* animierter Farbverlauf / bewegte Lichtquelle */}
      <motion.div className="absolute inset-0" style={{ y: glowY }}>
        <div className="absolute left-1/4 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-amber/20 blur-[100px]" />
        <div className="absolute right-1/4 top-2/3 h-[28rem] w-[28rem] translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[110px]" />
      </motion.div>

      {/* dezente Rasterstruktur für Tiefenwirkung */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]"
        aria-hidden="true"
      />

      {/* urbane Silhouette / Gebäude im Hintergrund */}
      <motion.svg
        style={{ y: skylineY }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 h-1/2 w-full text-anthracite-900/80"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,320 L0,180 L60,180 L60,120 L120,120 L120,200 L180,200 L180,90 L250,90 L250,180 L310,180 L310,140 L380,140 L380,220 L450,220 L450,60 L520,60 L520,180 L600,180 L600,110 L670,110 L670,200 L740,200 L740,150 L820,150 L820,70 L890,70 L890,190 L960,190 L960,130 L1030,130 L1030,210 L1100,210 L1100,95 L1170,95 L1170,180 L1240,180 L1240,140 L1310,140 L1310,220 L1380,220 L1380,160 L1440,160 L1440,320 Z"
        />
      </motion.svg>

      {/* animierte Werkzeug-Silhouetten */}
      {TOOL_META.map(({ Icon, className }, index) => (
        <motion.div
          key={index}
          className={`pointer-events-none absolute text-white/[0.06] ${className}`}
          style={prefersReduced ? undefined : toolTransforms[index]}
          animate={prefersReduced || !isActive ? undefined : { y: [0, -18, 0] }}
          transition={{ duration: 7 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className="h-full w-full" strokeWidth={1.2} />
        </motion.div>
      ))}

      {/* Staubpartikel – nur gerendert, solange der Hero sichtbar ist: 18
          endlos laufende Animationen kosten sonst dauerhaft Hauptthread-Zeit,
          auch weit nachdem der Besucher weitergescrollt ist. */}
      {!prefersReduced &&
        isActive &&
        dustParticles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-white/40"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* dezenter Rauch / Nebel */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-anthracite-950 via-anthracite-950/40 to-transparent" />
      <div className="grain-overlay absolute inset-0" />
    </div>
  );
}
