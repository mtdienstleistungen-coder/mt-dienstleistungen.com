"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { mainNav } from "@/config/navigation";
import { useScrolled } from "@/lib/hooks/useScrolled";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

export function Header() {
  const scrolled = useScrolled(24);
  const [menuOpen, setMenuOpen] = useState(false);
  const solidBackground = scrolled || menuOpen;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          solidBackground
            ? "bg-background/95 shadow-lg shadow-black/30 backdrop-blur"
            : "bg-transparent"
        )}
      >
        <div className="container-page flex h-20 items-center justify-between">
          <Link href="#start" className="relative z-10">
            {/* Solange die Kopfzeile transparent ist, sitzt das Logo immer
                über dem dunklen Hero (Video/AnimatedHero) – dann erzwungen
                weiß, unabhängig vom Tag-/Nacht-Modus. Sobald sie beim
                Scrollen einen eigenen, themenabhängigen Hintergrund bekommt,
                folgt auch das Logo wieder dem aktuellen Modus. */}
            <Logo tone={solidBackground ? "auto" : "light"} />
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-text/70 transition-colors hover:bg-text/10 hover:text-text"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#kontakt"
              className="hidden items-center gap-2 rounded-full bg-brand-amber px-5 py-2.5 text-sm font-semibold text-anthracite-950 shadow-glow transition-transform hover:scale-105 sm:flex"
            >
              Jetzt anfragen
            </a>
            {/* Nur auf Desktop/Tablet hier sichtbar (lg:flex); in der mobilen
                Ansicht lebt der Umschalter stattdessen im MobileMenu, siehe
                dort – vermeidet Dopplung und Platzprobleme in der schmalen
                Header-Zeile. */}
            <ThemeToggle className="hidden lg:flex" />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-text/10 text-text lg:hidden"
              aria-label="Menü öffnen"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
