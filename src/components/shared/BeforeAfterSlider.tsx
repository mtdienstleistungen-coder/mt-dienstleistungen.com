"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt?: string;
  className?: string;
  /** Blendet die Vorher-/Nachher-Badges aus für einen rein minimalistischen Vergleich ohne Beschriftung. */
  showLabels?: boolean;
};

/**
 * Wiederverwendbarer interaktiver Vorher-/Nachher-Vergleich. Beide Bilder
 * liegen exakt übereinander; das Nachher-Bild wird per CSS clip-path anhand
 * der Schieberegler-Position freigegeben. Bedienbar per Maus, Touch und
 * Tastatur (Pfeiltasten, Pos1/Ende).
 */
export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Vorher",
  afterLabel = "Nachher",
  alt = "Vorher-Nachher-Vergleich",
  className,
  showLabels = true,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const prefersReduced = useReducedMotion();
  const introPlayed = useRef(false);

  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  // Breite separat per ResizeObserver verfolgen, damit die Trennlinie/der
  // Griff unten per transform (Pixelwert) statt per `left: %` positioniert
  // werden können – `left` löst bei jeder Positionsänderung Layout/Reflow
  // aus, während `transform` rein compositor-seitig (GPU) läuft.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setContainerWidth(el.getBoundingClientRect().width);
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setContainerWidth(entry.contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Intro: startet bei 50 %, fährt einmalig 50 → 70 → 30 → 50 (~2s), sobald
  // der Slider erstmals in den sichtbaren Bereich scrollt. Danach übernimmt
  // ausschließlich der Besucher die Kontrolle.
  useEffect(() => {
    if (!isInView || introPlayed.current || prefersReduced) return;
    introPlayed.current = true;

    const controls = animate(50, [70, 30, 50], {
      duration: 2,
      ease: "easeInOut",
      onUpdate: (latest) => setPosition(latest),
    });

    return () => controls.stop();
  }, [isInView, prefersReduced]);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Pointer-Capture ist ein optionales Komfort-Feature (verhindert, dass
      // das Ziehen abbricht, wenn der Zeiger den Container verlässt). Schlägt
      // es fehl, funktioniert der Slider dennoch über die normalen
      // pointermove-Events weiter.
    }
    setIsDragging(true);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateFromClientX(event.clientX);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    try {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    } catch {
      // siehe handlePointerDown
    }
    setIsDragging(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const step = event.shiftKey ? 10 : 5;
    if (event.key === "ArrowLeft") {
      setPosition((p) => Math.max(0, p - step));
      event.preventDefault();
    } else if (event.key === "ArrowRight") {
      setPosition((p) => Math.min(100, p + step));
      event.preventDefault();
    } else if (event.key === "Home") {
      setPosition(0);
      event.preventDefault();
    } else if (event.key === "End") {
      setPosition(100);
      event.preventDefault();
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative aspect-[3/4] w-full touch-none select-none overflow-hidden",
        className
      )}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ cursor: "ew-resize" }}
    >
      {/* Vorher-Bild (unten, immer vollständig sichtbar) */}
      <Image
        src={beforeImage}
        alt={`${alt} – ${beforeLabel}`}
        fill
        className="pointer-events-none object-cover object-top"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />

      {/* Nachher-Bild (oben, per clip-path freigegeben) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={afterImage}
          alt={`${alt} – ${afterLabel}`}
          fill
          className="object-cover object-top"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      {/* Labels – optional, bleiben bei showLabels immer sichtbar */}
      {showLabels && (
        <>
          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-anthracite-950/85 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow">
            {beforeLabel}
          </span>
          <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-brand-amber-dark px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow">
            {afterLabel}
          </span>
        </>
      )}

      {/* Vertikale Trennlinie – Position per transform (translate-x-Utility,
          GPU/Compositor) statt `left: %`, da `left` bei jedem Pointermove
          Layout/Reflow auslösen würde. Die -50%-Zentrierung wird direkt in
          den CSS-Variablenwert eingerechnet (calc mischt px- und %-Anteil,
          Prozent bezieht sich dabei auf die Boxbreite des Elements selbst). */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-0.5 translate-x-[var(--slider-x)] bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] will-change-transform"
        style={{ "--slider-x": `calc(${(position / 100) * containerWidth}px - 50%)` } as React.CSSProperties}
      />

      {/* Griff */}
      <div
        role="slider"
        tabIndex={0}
        aria-label={`${alt}: Schieberegler zwischen ${beforeLabel} und ${afterLabel}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-orientation="horizontal"
        onKeyDown={handleKeyDown}
        className={cn(
          "absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 translate-x-[var(--slider-x)] items-center justify-center rounded-full",
          "border border-white/40 bg-white/25 text-white shadow-lg backdrop-blur-md will-change-transform",
          "transition-transform duration-200 ease-out",
          "hover:scale-110 focus-visible:scale-110",
          isDragging && "scale-110"
        )}
        style={
          {
            "--slider-x": `calc(${(position / 100) * containerWidth}px - 50%)`,
            cursor: "ew-resize",
          } as React.CSSProperties
        }
      >
        <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
      </div>
    </div>
  );
}
