"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

type EasterEggContextValue = {
  activeSpotId: string | null;
  register: (id: string) => () => void;
};

const EasterEggContext = createContext<EasterEggContextValue | null>(null);

// Sichtbarkeitsdauer und Pausen bewusst als weiter Zufallsbereich: wirkt
// dadurch organischer als ein starres Intervall und verhindert, dass
// Besucher:innen den Rhythmus vorhersehen können.
const VISIBLE_MS = 4000;
const MIN_PAUSE_MS = 25000;
const MAX_PAUSE_MS = 55000;
const INITIAL_DELAY_MS = 9000;

/**
 * Zentrale Steuerung des Website-weiten Easter Eggs: verwaltet, welche der
 * registrierten `EasterEggSpot`-Stellen gerade (falls überhaupt) den
 * Mini-Charakter zeigt. Durch den einen gemeinsamen `activeSpotId`-Zustand
 * ist über die gesamte Website hinweg immer höchstens eine Stelle aktiv.
 */
export function EasterEggProvider({ children }: { children: React.ReactNode }) {
  const registeredIds = useRef<Set<string>>(new Set());
  const [activeSpotId, setActiveSpotId] = useState<string | null>(null);

  const register = useCallback((id: string) => {
    registeredIds.current.add(id);
    return () => {
      registeredIds.current.delete(id);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const scheduleNext = (delay: number) => {
      timer = setTimeout(() => {
        if (cancelled) return;
        const ids = Array.from(registeredIds.current);
        if (ids.length === 0) {
          scheduleNext(3000);
          return;
        }
        const pick = ids[Math.floor(Math.random() * ids.length)];
        setActiveSpotId(pick);
        timer = setTimeout(() => {
          if (cancelled) return;
          setActiveSpotId(null);
          scheduleNext(MIN_PAUSE_MS + Math.random() * (MAX_PAUSE_MS - MIN_PAUSE_MS));
        }, VISIBLE_MS);
      }, delay);
    };

    scheduleNext(INITIAL_DELAY_MS);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  return (
    <EasterEggContext.Provider value={{ activeSpotId, register }}>
      {children}
    </EasterEggContext.Provider>
  );
}

/** Meldet eine Stelle als möglichen Auftrittsort an und liefert zurück, ob sie gerade dran ist. */
export function useEasterEggSpot(id: string): boolean {
  const ctx = useContext(EasterEggContext);

  useEffect(() => {
    return ctx?.register(id);
  }, [ctx, id]);

  return ctx?.activeSpotId === id;
}
