"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";
import { useEffect } from "react";
import { mainNav } from "@/config/navigation";
import { company } from "@/config/company";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-[60] flex flex-col bg-background lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Umschalter lebt hier (statt zusätzlich im Header) für die mobile
              Ansicht – sauber neben dem Schließen-Button in derselben Zeile,
              verschiebt keine bestehenden Elemente. */}
          <div className="container-page flex h-20 items-center justify-between">
            <ThemeToggle />
            <button
              type="button"
              onClick={onClose}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-text/10 text-text"
              aria-label="Menü schließen"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav
            aria-label="Mobile Hauptnavigation"
            className="container-page flex flex-1 flex-col justify-center gap-2 pb-16"
          >
            {mainNav.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
              >
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-2xl px-4 py-4 font-display text-3xl font-semibold tracking-wide text-text transition-colors hover:text-brand-amber"
                >
                  {item.label}
                </a>
              </motion.div>
            ))}
          </nav>

          <div className="container-page flex flex-col gap-4 border-t border-border/10 pb-10 pt-6">
            <a
              href="#kontakt"
              onClick={onClose}
              className="rounded-full bg-brand-amber px-6 py-4 text-center text-base font-semibold text-anthracite-950"
            >
              Jetzt anfragen
            </a>
            <div className="flex flex-col gap-3 text-sm text-text/70">
              <a href={`tel:${company.phone}`} className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-amber" aria-hidden="true" />
                {company.phoneDisplay}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-amber" aria-hidden="true" />
                {company.email}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
