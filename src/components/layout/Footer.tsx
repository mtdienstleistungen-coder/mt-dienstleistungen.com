import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/config/company";
import { mainNav, legalNav } from "@/config/navigation";
import { Logo } from "@/components/layout/Logo";
import { EasterEggSpot } from "@/components/shared/EasterEggSpot";

export function Footer() {
  return (
    <footer className="relative border-t border-border/10 bg-surface">
      <div className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-3">
        <div>
          <a href="#start">
            <Logo />
          </a>
          <p className="mt-4 max-w-xs text-sm text-text/60">
            Zuverlässige Dienstleistungen rund um Ihre Immobilie in {company.region}.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-text/80">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-text/60 transition-colors hover:text-brand-amber">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-text/80">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-text/60">
            <li className="font-medium text-text/80">{company.contactPerson}</li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber" aria-hidden="true" />
              <a href={`tel:${company.phone}`} className="hover:text-brand-amber">
                {company.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="hover:text-brand-amber">
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber" aria-hidden="true" />
              <span>
                {company.address.street}, {company.address.zip} {company.address.city}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-text/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            {legalNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-text">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <EasterEggSpot id="footer-corner" position="bottom-2 right-3 sm:bottom-4 sm:right-6" />
    </footer>
  );
}
