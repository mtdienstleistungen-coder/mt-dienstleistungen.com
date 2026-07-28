import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 DDG.",
  robots: { index: false, follow: true },
};

const h2Class = "font-display text-xl font-semibold text-text";

export default function ImpressumPage() {
  return (
    <>
      <PageHero label="Impressum" title="Impressum" />
      <section className="section-y">
        <div className="container-page max-w-3xl space-y-8 text-text/70">
          <div>
            <h2 className={h2Class}>Website</h2>
            <p className="mt-3">
              Dieses Impressum gilt für alle Angebote unter der Domain{" "}
              <a
                href={company.seo.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-amber underline underline-offset-2 hover:text-brand-amber-light"
              >
                {company.seo.siteUrl.replace(/^https?:\/\//, "")}
              </a>{" "}
              inklusive aller Subdomains (Unterseiten).
            </p>
          </div>

          <div>
            <h2 className={h2Class}>Angaben gemäß § 5 DDG</h2>
            <p className="mt-3">
              {company.contactPerson}
              <br />
              {company.address.street}
              <br />
              {company.address.zip} {company.address.city}
              <br />
              {company.address.country}
            </p>
            <p className="mt-3">
              Telefon: {company.phoneDisplay}
              <br />
              E-Mail: {company.email}
              <br />
              Kontakt:{" "}
              <a
                href={company.seo.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-amber underline underline-offset-2 hover:text-brand-amber-light"
              >
                {company.seo.siteUrl.replace(/^https?:\/\//, "")}
              </a>
            </p>
          </div>

          <div>
            <h2 className={h2Class}>Wirtschafts-Identifikationsnummer</h2>
            <p className="mt-3">{company.taxId}</p>
          </div>

          <div>
            <h2 className={h2Class}>Vertretungsberechtigte Personen</h2>
            <p className="mt-3">{company.contactPerson}, Inhaber</p>
          </div>

          <div>
            <h2 className={h2Class}>
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="mt-3">
              {company.contactPerson}
              <br />
              {company.address.street}, {company.address.zip} {company.address.city}
            </p>
          </div>

          <div>
            <h2 className={h2Class}>Haftungshinweis</h2>
            <p className="mt-3">
              Trotz sorgfältiger inhaltlicher Kontrolle wird keine Haftung für die Inhalte
              externer Links übernommen. Für den Inhalt verlinkter Seiten sind ausschließlich
              deren Betreiber verantwortlich.
            </p>
          </div>

          <div>
            <h2 className={h2Class}>Gültigkeit</h2>
            <p className="mt-3">Dieses Impressum gilt ab dem 25. Juli 2026.</p>
          </div>
        </div>
      </section>
    </>
  );
}
