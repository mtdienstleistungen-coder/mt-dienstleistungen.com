"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Dünner Client-Wrapper um next-themes: übernimmt beim ersten Besuch die
 * System-Einstellung (enableSystem), speichert eine bewusste Auswahl des
 * Besuchers dauerhaft in localStorage (next-themes-Standardverhalten) und
 * setzt die Klasse "dark" bereits vor dem Hydrieren per Inline-Skript, damit
 * kein falsches Farbschema kurz aufblitzt.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
