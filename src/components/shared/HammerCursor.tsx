"use client";

import { useEffect, useRef } from "react";
import { Hammer } from "lucide-react";

const CURSOR_SIZE = 30;

// Versatz vom Boundingbox-Ursprung der (horizontal gespiegelten) Grafik zur
// tatsächlichen Kopf-/Schlagfläche des Hammers – so liegt der reale Klickpunkt
// eindeutig an der Spitze und nicht irgendwo in der leeren Fläche der Icon-Box.
const HOTSPOT_X = 4;
const HOTSPOT_Y = 13;

// Elemente, bei deren Hover der Hammer dezent reagiert (Links, Buttons,
// Formularfelder, Navigations- und Kartenelemente). ".group" markiert in
// diesem Projekt bereits bestehende interaktive Karten/Slider-Container.
const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, summary, label, [role="button"], [role="link"], [tabindex]:not([tabindex="-1"]), .group';

/**
 * Ersetzt den System-Mauszeiger auf Geräten mit präziser Zeigersteuerung durch
 * einen kleinen Hammer. Rein dekorativ (aria-hidden, pointer-events: none) und
 * ohne jede Auswirkung auf Klicks, Tastaturnavigation oder Fokuszustände –
 * die Positionierung läuft komplett unabhängig von React-State über
 * requestAnimationFrame + direkte DOM-Refs, damit keine Re-Renders durch
 * Mausbewegungen entstehen.
 */
export function HammerCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Nur auf Geräten mit echter Maus/Trackpad aktivieren – auf Touch-Geräten
    // bleibt die normale Bedienung unangetastet, es wird gar nichts registriert.
    const mediaQuery = window.matchMedia("(pointer: fine) and (hover: hover)");
    if (!mediaQuery.matches) return;

    const cursor = cursorRef.current;
    const icon = iconRef.current;
    if (!cursor || !icon) return;

    // Die CSS-Regel, die den nativen Cursor versteckt, greift ausschließlich
    // über diese Klasse. Läuft dieses Skript aus irgendeinem Grund nicht (z. B.
    // Fehler vor diesem Punkt), bleibt automatisch der normale System-Cursor
    // sichtbar – kein manuelles Fallback nötig.
    document.documentElement.classList.add("hammer-cursor-active");

    let rafId = 0;
    let lastX = -1000;
    let lastY = -1000;
    let hasShown = false;
    let lastInteractiveTarget: Element | null = null;
    let strikeTimeout: number | undefined;

    // Bewegung ausschließlich per transform: translate3d im rAF-Takt – kein
    // React-State, kein Re-Render, rein GPU-beschleunigtes Compositing.
    const loop = () => {
      cursor.style.transform = `translate3d(${lastX - HOTSPOT_X}px, ${lastY - HOTSPOT_Y}px, 0)`;
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    const handlePointerMove = (event: PointerEvent) => {
      lastX = event.clientX;
      lastY = event.clientY;
      if (!hasShown) {
        hasShown = true;
        cursor.classList.add("is-visible");
      }
    };

    // pointerover statt eines Checks bei jeder Mausbewegung: feuert nur beim
    // tatsächlichen Wechsel des Elements, spart unnötige closest()-Aufrufe.
    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const interactiveEl = target?.closest(INTERACTIVE_SELECTOR) ?? null;
      if (interactiveEl === lastInteractiveTarget) return;
      lastInteractiveTarget = interactiveEl;
      cursor.classList.toggle("is-hover", Boolean(interactiveEl));
    };

    // Rein dekorative Schlag-Animation über pointerdown (nicht click): läuft
    // parallel zur eigentlichen Interaktion und verzögert diese in keiner
    // Weise, da nichts blockiert oder preventDefault aufgerufen wird.
    const handlePointerDown = () => {
      cursor.classList.remove("is-striking");
      void icon.offsetWidth; // Reflow erzwingen, damit die Animation bei schnellen Klicks neu startet
      cursor.classList.add("is-striking");
      window.clearTimeout(strikeTimeout);
      strikeTimeout = window.setTimeout(() => {
        cursor.classList.remove("is-striking");
      }, 400);
    };

    const handleLeaveViewport = () => {
      cursor.classList.remove("is-visible");
      hasShown = false;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleLeaveViewport);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(strikeTimeout);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerdown", handlePointerDown);
      document.documentElement.removeEventListener("mouseleave", handleLeaveViewport);
      document.documentElement.classList.remove("hammer-cursor-active");
    };
  }, []);

  return (
    <div ref={cursorRef} className="hammer-cursor" aria-hidden="true">
      <div ref={iconRef} className="hammer-cursor__icon">
        <Hammer
          width={CURSOR_SIZE}
          height={CURSOR_SIZE}
          strokeWidth={2.4}
          className="text-brand-amber"
          style={{ transform: "scaleX(-1)" }}
        />
      </div>
      <span className="hammer-cursor__spark hammer-cursor__spark--1" />
      <span className="hammer-cursor__spark hammer-cursor__spark--2" />
    </div>
  );
}
