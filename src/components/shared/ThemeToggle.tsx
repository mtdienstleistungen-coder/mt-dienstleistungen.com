"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

/**
 * Tag-/Nacht-Umschalter. Zeigt bewusst erst nach dem Mounten ein Icon an
 * (next-themes kennt den aufgelösten Modus serverseitig nicht), um einen
 * Hydration-Mismatch zu vermeiden – bis dahin ein unsichtbarer Platzhalter
 * in gleicher Größe, damit kein Layout-Sprung entsteht.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Zum Tag-Modus wechseln" : "Zum Nacht-Modus wechseln"}
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border/20 bg-surface/60 text-text/70 transition-colors hover:border-brand-amber/40 hover:text-brand-amber",
        className
      )}
    >
      {mounted ? (
        isDark ? (
          <Moon className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Sun className="h-5 w-5" aria-hidden="true" />
        )
      ) : (
        <span className="block h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
