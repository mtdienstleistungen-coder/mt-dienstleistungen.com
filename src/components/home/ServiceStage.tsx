"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { Service } from "@/config/services";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type ServiceStageProps = {
  service: Service;
  panelId: string;
  onBack: () => void;
};

const DURATION = 0.6;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Große, zentrale "Bühne" für eine einzelne Leistung. Blendet aus der dem
 * Kartenraster entgegengesetzten Seite ein (translateX + leichtes rotateY +
 * scale), während die Karten im Raster in die Gegenrichtung austreten (siehe
 * ServicesOverview). `backfaceVisibility`/`transformStyle`/`perspective`
 * sorgen dafür, dass die minimale Rotation räumlich wirkt, ohne dass je eine
 * "Rückseite" sichtbar würde.
 */
export function ServiceStage({ service, panelId, onBack }: ServiceStageProps) {
  const prefersReduced = useReducedMotion();
  const Icon = service.icon;
  const heading = service.sectionTitle ?? service.title;

  const transition = { duration: prefersReduced ? 0.01 : DURATION, ease: EASE };

  return (
    <motion.div
      id={panelId}
      role="region"
      aria-label={`Details: ${heading}`}
      initial={
        prefersReduced
          ? { opacity: 0 }
          : { opacity: 0, scale: 0.97, rotateY: 11, x: 48 }
      }
      animate={{ opacity: 1, scale: 1, rotateY: 0, x: 0 }}
      exit={
        prefersReduced
          ? { opacity: 0 }
          : { opacity: 0, scale: 0.97, rotateY: 11, x: 48 }
      }
      transition={transition}
      style={{
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
        willChange: "transform, opacity",
      }}
      className="rounded-2xl border border-border/10 bg-surface/60 p-6 sm:p-10"
    >
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-amber hover:text-brand-amber-light"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Zurück
      </button>

      <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-amber/15 text-brand-amber">
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-display text-2xl font-semibold text-text sm:text-3xl">
        {heading}
      </h3>
      <p className="mt-3 max-w-2xl text-text/70">{service.description}</p>

      <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
        {service.tasks.map((task) => (
          <li key={task} className="flex items-start gap-2 text-sm text-text/60">
            <span
              className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-amber"
              aria-hidden="true"
            />
            {task}
          </li>
        ))}
      </ul>

      {service.note && <p className="mt-6 text-xs text-text/40">{service.note}</p>}
    </motion.div>
  );
}
