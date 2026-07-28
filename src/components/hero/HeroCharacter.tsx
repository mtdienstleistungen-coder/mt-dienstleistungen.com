"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, type MotionValue } from "framer-motion";
import { company } from "@/config/company";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type HeroCharacterProps = {
  pointerX?: MotionValue<number>;
  pointerY?: MotionValue<number>;
  className?: string;
  /** Ob die einmalige Eintritts-Animation abgespielt werden soll (an tatsächliche Sichtbarkeit gekoppelt). */
  revealed?: boolean;
  /** Ob die Hero-Sektion aktuell sichtbar ist (pausiert die endlos laufenden Loops, wenn nicht). */
  isActive?: boolean;
};

export function HeroCharacter({
  pointerX,
  pointerY,
  className,
  revealed = true,
  isActive = true,
}: HeroCharacterProps) {
  const prefersReduced = useReducedMotion();
  const fallbackX = useMotionValue(0);
  const fallbackY = useMotionValue(0);
  const px = pointerX ?? fallbackX;
  const py = pointerY ?? fallbackY;

  const rotateFromX = useTransform(py, (v) => v * -4);
  const rotateFromY = useTransform(px, (v) => v * 4);
  const translateFromX = useTransform(px, (v) => v * 10);

  const loopsActive = isActive && !prefersReduced;

  return (
    <div className={`relative ${className ?? ""}`}>
      {/* animierter Schatten */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-8 w-2/3 -translate-x-1/2 rounded-full bg-black/50 blur-xl"
        animate={loopsActive ? { scaleX: [1, 0.85, 1], opacity: [0.5, 0.35, 0.5] } : undefined}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={
          pointerX && pointerY && !prefersReduced
            ? { rotateX: rotateFromX, rotateY: rotateFromY, x: translateFromX }
            : undefined
        }
        initial={{ opacity: 0, y: 60, scale: 0.92 }}
        animate={{
          opacity: revealed ? 1 : 0,
          y: !revealed || prefersReduced ? 0 : loopsActive ? [0, -14, 0] : 0,
          scale: revealed ? 1 : 0.92,
        }}
        transition={{
          opacity: { duration: 0.8, delay: revealed ? 0.3 : 0 },
          scale: { duration: 0.8, delay: revealed ? 0.3 : 0 },
          y:
            !loopsActive || prefersReduced
              ? { duration: 0 }
              : { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="relative [perspective:1000px] [transform-style:preserve-3d]"
      >
        <div className="relative aspect-[3/4] w-full">
          <Image
            src="/character/handwerker-winkend.png"
            alt={`${company.contactPerson}, freundlicher Handwerker von ${company.name}, winkt und zeigt den Daumen hoch`}
            fill
            className="object-contain object-bottom drop-shadow-2xl"
            sizes="(min-width: 1024px) 480px, 320px"
          />

          {/* Lichtreflex über Kleidung */}
          {loopsActive && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent"
              style={{ mixBlendMode: "overlay", clipPath: "inset(0)" }}
              animate={{ x: ["-120%", "140%"] }}
              transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}
