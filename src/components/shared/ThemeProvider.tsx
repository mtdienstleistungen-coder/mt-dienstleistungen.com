"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Dünner Client-Wrapper um next-themes: startet beim ersten Besuch immer im
 * Hell-Modus (unabhängig von der Systemeinstellung des Besuchers), speichert
 * eine bewusste Auswahl des Besuchers dauerhaft in localStorage
 * (next-themes-Standardverhalten) und setzt die entsprechende Klasse bereits
 * vor dem Hydrieren per Inline-Skript, damit kein falsches Farbschema kurz
 * aufblitzt.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      {children}
    </NextThemesProvider>
  );
}
