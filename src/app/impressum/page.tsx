import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 TMG.",
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero label="Impressum" title="Impressum" />
      <section className="section-y">
        <div className="container-page max-w-3xl space-y-8 text-text/70">
          <div className="rounded-xl border border-brand-amber/30 bg-brand-amber/10 p-4 text-sm text-brand-amber">
            Hinweis: Dieser Text ist ein Entwurf auf Basis der vorliegenden Kontaktdaten und sollte
            vor Veröffentlichung rechtlich geprüft werden (u. a. Vollständigkeit gemäß § 5 TMG,
            ggf. Umsatzsteuer-ID, Rechtsform).
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-text">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mt-3">
              {company.name}
              <br />
              {company.contactPerson}
              <br />
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
              <br />
              {company.address.country}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-text">Kontakt</h2>
            <p className="mt-3">
              Telefon: {company.phoneDisplay}
              <br />
              E-Mail: {company.email}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-text">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="mt-3">
              {company.contactPerson}
              <br />
              {company.address.street}, {company.address.zip} {company.address.city}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-text">Haftungshinweis</h2>
            <p className="mt-3">
              Trotz sorgfältiger inhaltlicher Kontrolle wird keine Haftung für die Inhalte
              externer Links übernommen. Für den Inhalt verlinkter Seiten sind ausschließlich
              deren Betreiber verantwortlich.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
