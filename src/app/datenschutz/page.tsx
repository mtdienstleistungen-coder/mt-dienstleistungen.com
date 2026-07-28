import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung gemäß DSGVO.",
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <PageHero label="Datenschutz" title="Datenschutzerklärung" />
      <section className="section-y">
        <div className="container-page max-w-3xl space-y-8 text-text/70">
          <div className="rounded-xl border border-brand-amber/30 bg-brand-amber/10 p-4 text-sm text-brand-amber">
            Hinweis: Dieser Text ist ein Entwurf und sollte vor Veröffentlichung rechtlich geprüft
            und bei Bedarf ergänzt werden.
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-text">
              1. Verantwortlicher
            </h2>
            <p className="mt-3">
              {company.name}, {company.contactPerson}
              <br />
              {company.address.street}, {company.address.zip} {company.address.city}
              <br />
              E-Mail: {company.email}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-text">
              2. Keine Cookies, kein Tracking
            </h2>
            <p className="mt-3">
              Diese Website verwendet keine Analyse-, Marketing- oder Trackingdienste und setzt
              keine Cookies zu diesem Zweck. Es werden keine Nutzerdaten an Dritte zu
              Werbezwecken weitergegeben.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-text">
              3. Kontaktformular
            </h2>
            <p className="mt-3">
              Das Kontaktformular auf dieser Website versendet Anfragen nicht automatisiert über
              einen Server. Beim Absenden öffnet sich stattdessen eine vorausgefüllte E-Mail über
              das E-Mail-Programm des Nutzers, die eigenständig abgesendet werden muss. Die dabei
              eingegebenen Daten (Name, Telefonnummer und/oder E-Mail-Adresse, gewünschte
              Leistung, Nachricht) werden ausschließlich zur Bearbeitung der jeweiligen Anfrage
              verwendet.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-text">
              4. Ihre Rechte
            </h2>
            <p className="mt-3">
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung sowie
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Wenden Sie sich hierzu
              gerne an die oben genannte Kontaktadresse.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-text">
              5. Hosting und Schriftarten
            </h2>
            <p className="mt-3">
              Verwendete Schriftarten werden lokal über die Website ausgeliefert, es findet keine
              Verbindung zu externen Font-Servern statt.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
