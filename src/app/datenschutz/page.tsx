import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { company } from "@/config/company";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung gemäß DSGVO.",
  robots: { index: false, follow: true },
};

const linkClass = "text-brand-amber underline underline-offset-2 hover:text-brand-amber-light";
const h2Class = "font-display text-xl font-semibold text-text";
const h3Class = "mt-6 font-display text-base font-semibold text-text";
const listClass = "mt-2 list-disc space-y-1.5 pl-5";

export default function DatenschutzPage() {
  return (
    <>
      <PageHero label="Datenschutz" title="Datenschutzerklärung" />
      <section className="section-y">
        <div className="container-page max-w-3xl space-y-10 text-text/70">
          <div>
            <h2 className={h2Class}>1. Einleitung</h2>
            <p className="mt-3">
              Der Schutz Ihrer persönlichen Daten hat höchste Priorität. Diese
              Datenschutzerklärung erläutert die Art, den Umfang und den Zweck der Verarbeitung
              personenbezogener Daten (im Folgenden „Daten“ genannt) in Zusammenhang mit dem
              Onlineangebot. Dies umfasst die zugehörige Website, Funktionen und Inhalte sowie die
              externen Onlinepräsenzen, wie beispielsweise die Social-Media-Profile (im Folgenden
              zusammengefasst als „Onlineangebot“). Ihre personenbezogenen Daten werden vertraulich
              behandelt und es wird strikt den gesetzlichen Datenschutzvorschriften sowie den
              Bestimmungen dieser Datenschutzerklärung entsprochen.
            </p>

            <h3 className={h3Class}>Allgemeine Hinweise</h3>
            <p className="mt-2">
              Diese Datenschutzerklärung gibt Ihnen einen umfassenden Überblick darüber, was mit
              Ihren personenbezogenen Daten geschieht, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Informationen, die dazu genutzt werden können, Sie
              persönlich zu identifizieren. Detaillierte Informationen zum Datenschutz entnehmen Sie
              bitte dieser vollständigen Datenschutzerklärung.
            </p>

            <h3 className={h3Class}>Verantwortliche Stelle</h3>
            <p className="mt-2">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die
              Kontaktdaten des Verantwortlichen finden Sie im Abschnitt „2. Verantwortlicher“ in
              dieser Datenschutzerklärung.
            </p>

            <h3 className={h3Class}>Erhebung Ihrer Daten</h3>
            <p className="mt-2">
              Personenbezogene Daten werden zum einen dadurch erhoben, dass Sie diese aktiv
              mitteilen, z. B. durch das Ausfüllen eines Kontaktformulars. Andere Daten werden
              automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch die
              IT-Systeme des Verantwortlichen erfasst. Hierbei handelt es sich vor allem um
              technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
              Seitenaufrufs). Diese Datenerfassung erfolgt automatisch, sobald Sie die Website
              betreten.
            </p>

            <h3 className={h3Class}>Verwendung Ihrer Daten</h3>
            <p className="mt-2">
              Ein Teil der Daten wird erhoben, um die fehlerfreie Bereitstellung der Website
              sicherzustellen. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
              werden, um das Angebot zu optimieren und auf Ihre Bedürfnisse anzupassen.
            </p>

            <h3 className={h3Class}>Datenübermittlung an externe Stellen</h3>
            <p className="mt-2">
              Im Rahmen der Geschäftstätigkeit des Verantwortlichen kann es erforderlich sein,
              personenbezogene Daten an externe Stellen zu übermitteln. Diese Übermittlung erfolgt
              ausschließlich unter bestimmten Bedingungen: wenn die Weitergabe zur Erfüllung eines
              Vertrags notwendig ist, wenn eine gesetzliche Verpflichtung besteht, beispielsweise
              an Steuerbehörden, wenn ein berechtigtes Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO
              vorliegt, oder wenn eine andere rechtliche Grundlage die Datenübermittlung erlaubt.
              Beim Einsatz externer Dienstleister zur Datenverarbeitung erfolgt die Weitergabe
              personenbezogener Daten ausschließlich auf Grundlage eines gültigen Vertrags zur
              Auftragsverarbeitung gemäß Art. 28 DSGVO. Wenn eine gemeinsame Verarbeitung der Daten
              mit anderen Stellen stattfindet, wird ein Vertrag über die gemeinsame Verarbeitung
              gemäß Art. 26 DSGVO abgeschlossen.
            </p>

            <h3 className={h3Class}>Widerruf von Einwilligungen zur Datenverarbeitung</h3>
            <p className="mt-2">
              Bestimmte Datenverarbeitungen können nur mit Ihrer ausdrücklichen Einwilligung
              erfolgen. Diese Einwilligung kann jederzeit widerrufen werden. Die Rechtmäßigkeit der
              bis zum Zeitpunkt des Widerrufs erfolgten Datenverarbeitung bleibt durch den Widerruf
              unberührt.
            </p>

            <h3 className={h3Class}>
              Widerspruchsrecht bei spezifischen Datenverarbeitungen und Werbemaßnahmen
              (Art. 21 DSGVO)
            </h3>
            <p className="mt-2">
              Erfolgt die Verarbeitung Ihrer personenbezogenen Daten auf der Basis von Art. 6
              Abs. 1 lit. e oder f DSGVO, haben Sie das Recht, jederzeit gegen diese Verarbeitung
              Widerspruch einzulegen, sofern Sie Gründe haben, die sich aus Ihrer besonderen
              Situation ergeben. Dies betrifft auch das Profiling, das auf diesen Bestimmungen
              basiert. Die konkrete Rechtsgrundlage der Datenverarbeitung finden Sie in dieser
              Datenschutzerklärung. Bei einem Widerspruch wird der Verantwortliche Ihre
              personenbezogenen Daten nicht mehr verarbeiten, es sei denn, es können zwingende
              schutzwürdige Gründe nachgewiesen werden, die Ihre Interessen, Rechte und Freiheiten
              überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder
              Verteidigung von Rechtsansprüchen (Widerspruch gemäß Art. 21 Abs. 1 DSGVO).
            </p>
            <p className="mt-2">
              Werden Ihre personenbezogenen Daten für Zwecke der Direktwerbung genutzt, steht
              Ihnen das Recht zu, jederzeit Widerspruch gegen diese Verarbeitung einzulegen. Dies
              gilt auch für das Profiling, sofern es in Verbindung mit Direktwerbung steht. Nach
              Ihrem Widerspruch wird der Verantwortliche Ihre personenbezogenen Daten nicht mehr
              für diese Werbezwecke verwenden (Widerspruch gemäß Art. 21 Abs. 2 DSGVO).
            </p>

            <h3 className={h3Class}>Rechte gemäß Datenschutz-Grundverordnung</h3>
            <p className="mt-2">
              Sie haben das Recht, bei Verstößen gegen die DSGVO eine Beschwerde bei einer
              zuständigen Aufsichtsbehörde einzureichen. Dieses Recht kann insbesondere in dem
              Mitgliedstaat ausgeübt werden, in dem sich der gewöhnliche Aufenthaltsort, der
              Arbeitsplatz oder der Ort des mutmaßlichen Verstoßes befindet. Andere
              verwaltungsrechtliche oder gerichtliche Rechtsbehelfe bleiben hiervon unberührt.
            </p>
            <p className="mt-2">
              Personenbezogene Daten, die auf Basis einer Einwilligung oder zur Erfüllung eines
              Vertrags automatisiert verarbeitet werden, können in einem strukturierten, gängigen
              und maschinenlesbaren Format angefordert werden. Auf Wunsch kann auch eine direkte
              Übermittlung dieser Daten an einen anderen Verantwortlichen erfolgen, sofern dies
              technisch möglich ist.
            </p>
            <p className="mt-2">
              Jede betroffene Person hat das Recht, unentgeltlich Auskunft über ihre gespeicherten
              personenbezogenen Daten, deren Herkunft, Empfänger sowie den Zweck der
              Datenverarbeitung zu erhalten. Darüber hinaus besteht ein Recht auf Berichtigung
              oder Löschung dieser Daten, sofern gesetzliche Bestimmungen dies zulassen. Bei
              weiteren Fragen oder Anliegen zum Thema personenbezogene Daten kann jederzeit Kontakt
              mit dem Verantwortlichen aufgenommen werden.
            </p>
            <p className="mt-2">
              Es besteht das Recht, die Einschränkung der Verarbeitung personenbezogener Daten zu
              verlangen, wenn die Richtigkeit der Daten bestritten wird und eine Überprüfung
              aussteht. Auch bei unrechtmäßiger Verarbeitung kann anstelle einer Löschung die
              Einschränkung der Datenverarbeitung verlangt werden. Weiterhin kann die Einschränkung
              gefordert werden, wenn die Daten nicht mehr benötigt werden, aber zur Geltendmachung,
              Ausübung oder Verteidigung von Rechtsansprüchen erforderlich sind. Bei Widerspruch
              gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO besteht, bis zur Klärung, wessen
              Interessen überwiegen, ebenfalls das Recht auf Einschränkung.
            </p>
            <p className="mt-2">
              Sind die personenbezogenen Daten in der Verarbeitung eingeschränkt, dürfen diese,
              abgesehen von der Speicherung, nur mit Einwilligung der betroffenen Person oder zur
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen, zum Schutz der
              Rechte anderer natürlicher oder juristischer Personen oder aus Gründen eines
              wichtigen öffentlichen Interesses der EU oder eines Mitgliedstaates verarbeitet
              werden.
            </p>
          </div>

          <div>
            <h2 className={h2Class}>2. Verantwortlicher</h2>
            <p className="mt-3">
              Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der
              Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p className="mt-3">
              Firma: {company.name}
              <br />
              Vertreten durch: Herr {company.contactPerson}
              <br />
              Adresse: {company.address.street}, {company.address.zip} {company.address.city}
              <br />
              E-Mail: {company.email}
              <br />
              Telefon: {company.phoneDisplay}
            </p>
          </div>

          <div>
            <h2 className={h2Class}>3. Auftragsverarbeiter</h2>
            <p className="mt-3">
              Die Zusammenarbeit erfolgt mit verschiedenen Auftragsverarbeitern, die im Auftrag
              Daten verarbeiten. Diese Dienstleister sind vertraglich verpflichtet, die Daten
              vertraulich zu behandeln und ausschließlich im Rahmen der jeweiligen Dienstleistung
              zu nutzen. Zudem gibt es Fälle, in denen die Verantwortung für die Datenverarbeitung
              gemeinsam mit anderen Stellen getragen wird. In solchen Fällen werden die
              Verantwortlichkeiten transparent geregelt und dokumentiert, um die Einhaltung der
              Datenschutzanforderungen sicherzustellen.
            </p>
          </div>

          <div>
            <h2 className={h2Class}>4. Begriffsbestimmungen</h2>
            <p className="mt-3">
              Um die Transparenz dieser Datenschutzerklärung zu gewährleisten und sie für
              jedermann verständlich zu machen, werden in dieser Erklärung vorrangig Begriffe
              verwendet, die auch in der Datenschutz-Grundverordnung (DSGVO) definiert sind. Die
              vollständigen gesetzlichen Definitionen finden sich in Art. 4 DSGVO. Im Folgenden
              werden die wichtigsten Begriffe im Zusammenhang mit dieser Datenschutzerklärung
              erläutert:
            </p>
            <ul className={listClass}>
              <li>
                <strong className="text-text">Personenbezogene Daten:</strong> Dies umfasst alle
                Informationen, die sich auf eine identifizierte oder identifizierbare natürliche
                Person (im Folgenden „betroffene Person“) beziehen. Eine Person gilt als
                identifizierbar, wenn sie direkt oder indirekt, insbesondere durch Zuordnung zu
                einer Kennung wie einem Namen, einer Kennnummer, Standortdaten, einer
                Online-Kennung (z. B. Cookie) oder einem oder mehreren spezifischen Merkmalen
                identifiziert werden kann, die Ausdruck der physischen, physiologischen,
                genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität
                dieser Person sind.
              </li>
              <li>
                <strong className="text-text">Verarbeitung:</strong> Dieser Begriff umfasst jede
                Handlung oder eine Reihe von Handlungen, die im Zusammenhang mit
                personenbezogenen Daten durchgeführt werden, unabhängig davon, ob sie mit oder
                ohne Hilfe automatisierter Verfahren erfolgen. Dies kann das Erheben, Erfassen,
                Organisieren, Ordnen, Speichern, Anpassen oder Verändern, Auslesen, Abfragen,
                Verwenden, Offenlegen durch Übermittlung, Verbreiten oder eine andere Form der
                Bereitstellung, Abgleichen oder Verknüpfen, Einschränken, Löschen oder Vernichten
                von Daten umfassen.
              </li>
              <li>
                <strong className="text-text">Verantwortlicher:</strong> Dies ist die natürliche
                oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder
                gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
                personenbezogenen Daten entscheidet.
              </li>
              <li>
                <strong className="text-text">Auftragsverarbeiter:</strong> Eine natürliche oder
                juristische Person, Behörde, Einrichtung oder andere Stelle, die
                personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.
              </li>
              <li>
                <strong className="text-text">Einwilligung:</strong> Jede freiwillig, für den
                bestimmten Fall, in informierter Weise und unmissverständlich abgegebene
                Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen
                bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie
                mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden
                ist.
              </li>
              <li>
                <strong className="text-text">Website:</strong> Die Website bezeichnet das
                gesamte Internetangebot, das von dem Verantwortlichen unter einer spezifischen
                URL bereitgestellt wird. Dazu gehören sämtliche durch den Verantwortlichen
                publizierten Inhalte, Informationen, Funktionen und Dienste, die dem Nutzer über
                diese URL zugänglich gemacht werden. Die Website dient als digitale Plattform zur
                Bereitstellung von Informationen, Dienstleistungen und zur Interaktion zwischen
                dem Verantwortlichen und den Nutzern.
              </li>
              <li>
                <strong className="text-text">Endgerät:</strong> Ein Endgerät ist ein
                elektronisches Gerät, das in der Lage ist, auf das Internet zuzugreifen und
                Webseiten zu laden. Dazu zählen unter anderem Computer, Laptops, Tablets und
                Smartphones.
              </li>
            </ul>
            <p className="mt-3">
              Diese Begriffsbestimmungen helfen dabei, die Datenschutzerklärung besser zu
              verstehen und die Bedeutung der verwendeten Begriffe nachzuvollziehen.
            </p>
          </div>

          <div>
            <h2 className={h2Class}>5. Hosting</h2>
            <p className="mt-3">
              Diese Website wird auf den Servern eines externen Dienstleisters gehostet, um Ihnen
              eine zuverlässige und sichere Nutzung dieses Onlineangebots zu gewährleisten.
            </p>
            <p className="mt-2">
              Die Datenverarbeitung durch den Hosting-Anbieter erfolgt gemäß Art. 6 Abs. 1 lit. f
              DSGVO, da der Verantwortliche ein berechtigtes Interesse daran hat, eine stabile und
              sichere Website bereitzustellen. Sollte es notwendig sein, die Einwilligung des
              Nutzers einzuholen (beispielsweise für die Nutzung bestimmter Cookies oder
              Tracking-Technologien), basiert die Datenverarbeitung auf der Einwilligung des
              Nutzers gemäß Art. 6 Abs. 1 lit. a DSGVO sowie § 25 Abs. 1 TTDSG. Ihre Einwilligung
              können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>
            <p className="mt-2">
              Der Hosting-Anbieter ist:
              <br />
              GitHub, Inc.
              <br />
              88 Colin P. Kelly Jr. Street
              <br />
              San Francisco, CA 94107
              <br />
              USA
            </p>
            <p className="mt-2">
              Details zur Datenverarbeitung und zum Datenschutz können Sie der
              Datenschutzerklärung des Hosting-Anbieters entnehmen. Diese finden Sie hier:{" "}
              <a
                href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                github.com/de/site-policy/privacy-policies/github-general-privacy-statement
              </a>
              .
            </p>
            <p className="mt-2">
              Um sicherzustellen, dass Ihre Daten im Einklang mit den geltenden
              Datenschutzvorschriften verarbeitet werden, wurde mit dem Hosting-Anbieter ein
              Vertrag zur Auftragsverarbeitung (AVV) abgeschlossen. Dieser Vertrag verpflichtet den
              Hosting-Anbieter, die personenbezogenen Daten der Webseitenbesucher ausschließlich
              nach den Anweisungen des Verantwortlichen und in Übereinstimmung mit der DSGVO zu
              verarbeiten. Der Hosting-Anbieter garantiert durch technische und organisatorische
              Maßnahmen einen umfassenden Schutz Ihrer Daten.
            </p>
          </div>

          <div>
            <h2 className={h2Class}>6. Rechtliche Grundlagen der Datenverarbeitung</h2>
            <p className="mt-3">
              Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage der
              Datenschutz-Grundverordnung (DSGVO) sowie weiterer relevanter gesetzlicher
              Bestimmungen. Je nach Zweck der Datenverarbeitung kommen unterschiedliche
              Rechtsgrundlagen zur Anwendung.
            </p>
            <p className="mt-2">
              Sofern Sie der Verarbeitung Ihrer personenbezogenen Daten zugestimmt haben, erfolgt
              diese auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Dies gilt
              insbesondere für die Verarbeitung besonderer Kategorien personenbezogener Daten
              gemäß Art. 9 Abs. 2 lit. a DSGVO sowie für die Übermittlung personenbezogener Daten
              in Drittländer nach Art. 49 Abs. 1 lit. a DSGVO. Ihre Einwilligung kann jederzeit
              widerrufen werden.
            </p>
            <p className="mt-2">
              Die Verarbeitung Ihrer Daten kann zur Erfüllung eines Vertrags oder zur Durchführung
              vorvertraglicher Maßnahmen notwendig sein und erfolgt in diesem Fall auf Grundlage
              von Art. 6 Abs. 1 lit. b DSGVO. Darüber hinaus kann eine Verarbeitung erforderlich
              sein, um rechtlichen Verpflichtungen nachzukommen, was dann gemäß Art. 6 Abs. 1
              lit. c DSGVO geschieht.
            </p>
            <p className="mt-2">
              In bestimmten Fällen erfolgt die Verarbeitung zur Wahrung berechtigter Interessen des
              Verantwortlichen oder eines Dritten, sofern nicht Ihre Interessen oder Grundrechte
              und Grundfreiheiten überwiegen. Diese Verarbeitung basiert auf Art. 6 Abs. 1 lit. f
              DSGVO.
            </p>
            <p className="mt-2">
              Für bestimmte Verarbeitungen können zudem nationale Regelungen, wie beispielsweise
              § 25 TTDSG bei der Speicherung von Cookies oder dem Zugriff auf Informationen auf
              Ihrem Endgerät, zur Anwendung kommen. Die jeweils anwendbaren Rechtsgrundlagen werden
              in den spezifischen Abschnitten dieser Datenschutzerklärung detailliert erläutert.
            </p>
          </div>

          <div>
            <h2 className={h2Class}>
              7. Datenweitergabe an unsichere Drittstaaten und nicht DPF-zertifizierte
              US-Unternehmen
            </h2>
            <p className="mt-3">
              Falls auf dieser Website Tools von Unternehmen eingesetzt werden, die ihren Sitz in
              datenschutzrechtlich unsicheren Drittstaaten haben, oder US-Tools verwendet werden,
              deren Anbieter nicht nach dem EU-US Data Privacy Framework (DPF) zertifiziert sind,
              können Ihre personenbezogenen Daten in diese Staaten übertragen und dort verarbeitet
              werden. Es wird darauf hingewiesen, dass in datenschutzrechtlich unsicheren
              Drittstaaten kein Datenschutzniveau gewährleistet werden kann, das dem der EU
              entspricht. Für die USA als unsicheren Drittstaat wird grundsätzlich kein mit der EU
              vergleichbares Datenschutzniveau garantiert. Eine Datenübertragung in die USA ist
              daher nur dann zulässig, wenn der Empfänger entweder eine Zertifizierung unter dem
              „EU-US Data Privacy Framework“ (DPF) besitzt oder über geeignete zusätzliche
              Garantien verfügt. Ausführliche Informationen zu möglichen Übermittlungen an
              Drittstaaten einschließlich der Datenempfänger finden Sie in dieser
              Datenschutzerklärung.
            </p>
          </div>

          <div>
            <h2 className={h2Class}>8. Speicherdauer</h2>
            <p className="mt-3">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
              wurde, verbleiben personenbezogene Daten beim Verantwortlichen, bis der Zweck für die
              Datenverarbeitung entfällt. Wenn ein berechtigtes Löschungsersuchen geltend gemacht
              wird oder eine Einwilligung zur Datenverarbeitung widerrufen wird, werden die
              betreffenden Daten gelöscht, sofern keine anderen rechtlich zulässigen Gründe für die
              Speicherung der personenbezogenen Daten vorliegen (z. B. steuer- oder
              handelsrechtliche Aufbewahrungsfristen). In diesen Fällen erfolgt die Löschung nach
              Fortfall dieser Gründe.
            </p>
            <p className="mt-2">
              Der Verantwortliche speichert personenbezogene Daten nur so lange, wie es zur
              Erfüllung der jeweiligen Zwecke erforderlich ist, für die die Daten erhoben wurden.
              Hierzu zählen insbesondere die Erfüllung vertraglicher Verpflichtungen, die
              Einhaltung gesetzlicher Aufbewahrungsfristen sowie die Wahrung berechtigter
              Interessen des Verantwortlichen, wie z. B. IT-Sicherheit und Schutz vor Missbrauch.
              Sollte die Verarbeitung personenbezogener Daten auf einer Einwilligung beruhen,
              erfolgt die Speicherung bis zum Widerruf dieser Einwilligung durch die betroffene
              Person. Ein solcher Widerruf ist jederzeit mit Wirkung für die Zukunft möglich.
              Danach werden die Daten unverzüglich gelöscht, es sei denn, es liegen gesetzliche
              Aufbewahrungspflichten oder andere vorrangige rechtliche Gründe vor, die eine weitere
              Speicherung erforderlich machen.
            </p>
            <p className="mt-2">
              Zusammenfassend werden personenbezogene Daten nach Erfüllung des Zwecks oder Wegfall
              der rechtlichen Grundlage für die Speicherung gelöscht, es sei denn, es bestehen
              weiterhin rechtliche Verpflichtungen oder berechtigte Interessen, die eine weitere
              Speicherung rechtfertigen.
            </p>
          </div>

          <div>
            <h2 className={h2Class}>9. Sicherheitsmaßnahmen und Datenminimierung</h2>
            <p className="mt-3">
              Es werden umfassende technische und organisatorische Maßnahmen ergriffen, um Ihre
              personenbezogenen Daten wirksam vor zufälliger oder unrechtmäßiger Zerstörung,
              Verlust, Veränderung oder unbefugter Offenlegung bzw. unbefugtem Zugriff zu
              schützen. Dabei wird darauf geachtet, dass ausschließlich die für den jeweiligen
              Zweck unbedingt erforderlichen Daten erhoben und verarbeitet werden. Diese Strategie
              der Datenminimierung trägt dazu bei, das Risiko für Missbrauch und unberechtigten
              Zugriff deutlich zu verringern. Die Sicherheitsmaßnahmen werden kontinuierlich an
              den Stand der Technik angepasst, um den Schutz Ihrer Daten dauerhaft auf einem hohen
              Niveau zu gewährleisten.
            </p>
          </div>

          <div>
            <h2 className={h2Class}>10. SSL/TLS-Verschlüsselung</h2>
            <p className="mt-3">
              Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, werden dem aktuellen
              Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL oder TLS) über
              HTTPS verwendet. SSL (Secure Socket Layer) bzw. TLS (Transport Layer Security) sind
              Protokolle zur Verschlüsselung von Datenübertragungen im Internet. Dadurch wird
              sichergestellt, dass die zwischen Ihrem Browser und dem Server ausgetauschten Daten
              vor unbefugtem Zugriff geschützt sind. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an
              dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </div>

          <div>
            <h2 className={h2Class}>11. Speicherung von Nutzerinformationen in Log-Files</h2>
            <p className="mt-3">
              Bei jedem Zugriff auf die Website werden automatisch Informationen allgemeiner Natur
              erfasst, die Ihr Browser an den Server übermittelt. Diese Informationen werden in
              sogenannten Log-Files gespeichert und umfassen im Regelfall:
            </p>
            <ul className={listClass}>
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von welcher der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und User-Agent-String</li>
              <li>Betriebssystem</li>
              <li>Name Ihres Access-Providers</li>
              <li>HTTP-Statuscode</li>
            </ul>
            <p className="mt-3">
              Die Speicherung dieser Daten erfolgt aus Sicherheitsgründen, zur Gewährleistung eines
              reibungslosen Verbindungsaufbaus der Website, zur komfortablen Nutzung der Website,
              zur Auswertung der Systemsicherheit und -stabilität sowie zu weiteren
              administrativen Zwecken. Rechtsgrundlage für die Datenverarbeitung ist Art. 6
              Abs. 1 lit. f DSGVO. Das berechtigte Interesse ergibt sich aus den genannten Zwecken
              zur Datenerhebung. In keinem Fall werden die erhobenen Daten zu dem Zweck verwendet,
              Rückschlüsse auf Ihre Person zu ziehen. Die gespeicherten Daten werden anonymisiert
              oder gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>
          </div>

          <div>
            <h2 className={h2Class}>12. Cookies</h2>
            <p className="mt-3">
              Diese Website verwendet Cookies. Dabei handelt es sich um kleine Dateien, die Ihr
              Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet, Smartphone
              o. ä.) gespeichert werden, wenn Sie die Seite besuchen. Cookies richten auf Ihrem
              Endgerät keinen Schaden an und enthalten keine Viren, Trojaner oder sonstige
              Schadsoftware.
            </p>
            <p className="mt-2">
              In dem Cookie werden Informationen abgelegt, die sich jeweils im Zusammenhang mit
              dem spezifisch eingesetzten Endgerät ergeben. Dies bedeutet jedoch nicht, dass der
              Verantwortliche dadurch unmittelbar Kenntnis von Ihrer Identität erhält.
            </p>
            <p className="mt-2">
              Der Einsatz von Cookies dient einerseits dazu, die Nutzung des Angebots für Sie
              angenehmer zu gestalten. So setzt der Verantwortliche sogenannte Session-Cookies ein,
              um zu erkennen, dass Sie einzelne Seiten der Website bereits besucht haben. Diese
              werden nach Verlassen der Seite automatisch gelöscht.
            </p>
            <p className="mt-2">
              Darüber hinaus setzt der Verantwortliche ebenfalls zur Optimierung der
              Benutzerfreundlichkeit temporäre Cookies ein, die für einen bestimmten festgelegten
              Zeitraum auf Ihrem Endgerät gespeichert werden. Besuchen Sie die Seite erneut, um die
              Dienste in Anspruch zu nehmen, wird automatisch erkannt, dass Sie bereits dort waren
              und welche Eingaben und Einstellungen Sie getätigt haben, um diese nicht noch einmal
              eingeben zu müssen.
            </p>
            <p className="mt-2">
              Zum anderen setzt der Verantwortliche Cookies ein, um die Nutzung der Website
              statistisch zu erfassen und zum Zwecke der Optimierung des Angebotes für Sie
              auszuwerten. Diese Cookies ermöglichen es dem Verantwortlichen, bei einem erneuten
              Besuch der Seite automatisch zu erkennen, dass Sie bereits dort waren. Diese Cookies
              werden nach einer jeweils definierten Zeit automatisch gelöscht.
            </p>
            <p className="mt-2">
              Die durch Cookies verarbeiteten Daten sind für die genannten Zwecke zur Wahrung
              berechtigter Interessen des Verantwortlichen sowie Dritter nach Art. 6 Abs. 1 S. 1
              lit. f DSGVO erforderlich.
            </p>
            <p className="mt-2">
              Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch
              so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden oder stets
              ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Die vollständige
              Deaktivierung von Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen der
              Website nutzen können.
            </p>
          </div>

          <div>
            <h2 className={h2Class}>13. Cookie-Consent-Banner</h2>
            <p className="mt-3">
              Diese Website verwendet ein Cookie-Consent-Banner, um Ihre Einwilligungen zur
              Nutzung von Cookies zu verwalten. Anbieter dieses Dienstes ist:
            </p>
            <p className="mt-2">
              Cookiebot
              <br />
              Usercentrics A/S, Havnegade 39, 1058 Kopenhagen, Dänemark
            </p>
            <p className="mt-2">
              Weitere Informationen zur Datenverarbeitung finden Sie unter:{" "}
              <a
                href="https://www.cookiebot.com/de/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                cookiebot.com/de/privacy-policy
              </a>
              .
            </p>

            <h3 className={h3Class}>Funktionsweise und Zweck</h3>
            <p className="mt-2">
              Das Cookie-Consent-Banner setzt ein technisch notwendiges Cookie, um Ihre
              Cookie-Einwilligungen zu speichern. Dieses Cookie verarbeitet keine
              personenbezogenen Daten. Es speichert lediglich Ihre gewählten Einstellungen, die
              Sie bei Betreten der Website getroffen haben, einschließlich:
            </p>
            <ul className={listClass}>
              <li>Einwilligung oder Ablehnung bestimmter Cookies</li>
              <li>Zeitpunkt der Einwilligung</li>
              <li>Dauer der Speicherung der Einstellungen</li>
              <li>Rechtsgrundlage der Datenverarbeitung</li>
            </ul>
            <p className="mt-3">
              Die Datenverarbeitung durch das Cookie-Consent-Banner erfolgt gemäß Art. 6 Abs. 1
              lit. f DSGVO. Das berechtigte Interesse des Verantwortlichen besteht darin, die
              rechtmäßige Einwilligung zur Nutzung von Cookies sicherzustellen. Falls eine
              Einwilligung abgefragt wurde, basiert die Verarbeitung auf Art. 6 Abs. 1 lit. a
              DSGVO.
            </p>

            <h3 className={h3Class}>Speicherdauer und Löschung</h3>
            <p className="mt-2">
              Die gespeicherten Daten bleiben so lange gespeichert, bis Sie die Cookies in Ihrem
              Browser selbst löschen oder die Einwilligungen widerrufen. Ihre Einstellungen können
              Sie jederzeit in den Cookie-Einstellungen dieser Website ändern.
            </p>
          </div>

          <div>
            <h2 className={h2Class}>14. Nutzung des Kontaktformulars</h2>
            <p className="mt-3">
              Bei Fragen jeglicher Art besteht die Möglichkeit, über ein auf dieser Website
              bereitgestelltes Formular Kontakt mit dem Verantwortlichen aufzunehmen. Um zu
              wissen, von wem die Anfrage stammt und um diese beantworten zu können, ist die
              Angabe folgender Daten erforderlich: Name, Telefonnummer und/oder E-Mail-Adresse
              sowie die Nachricht selbst; die Angabe der gewünschten Leistung ist optional.
            </p>
            <p className="mt-2">
              Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit dem Verantwortlichen
              erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage der freiwillig erteilten
              Einwilligung.
            </p>
            <p className="mt-2">
              Die für die Benutzung des Kontaktformulars erhobenen personenbezogenen Daten werden
              nach Erledigung der gestellten Anfrage regelmäßig gelöscht.
            </p>
          </div>

          <div>
            <h2 className={h2Class}>15. Anfragen per E-Mail oder Telefon</h2>
            <p className="mt-3">
              Es besteht die Möglichkeit, Anfragen per E-Mail oder telefonisch an den
              Verantwortlichen zu richten. Die dabei übermittelten personenbezogenen Daten (z. B.
              Name, E-Mail-Adresse, Telefonnummer und die Anfrage selbst) werden vom
              Verantwortlichen ausschließlich zum Zwecke der Bearbeitung der Anfrage und etwaiger
              Anschlussfragen verarbeitet und gespeichert.
            </p>
            <p className="mt-2">
              Die Rechtsgrundlage für diese Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, da
              die Verarbeitung zur Erfüllung eines Vertrags oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist. Wenn die Verarbeitung nicht auf einen
              Vertrag bezogen ist, erfolgt sie auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, da der
              Verantwortliche ein berechtigtes Interesse an der Bearbeitung und Beantwortung der
              Anfragen hat.
            </p>
          </div>

          <div>
            <h2 className={h2Class}>16. Untersagung der Zusendung von Werbe-E-Mails</h2>
            <p className="mt-3">
              Die Nutzung der im Impressum veröffentlichten Kontaktdaten zur Übersendung von nicht
              ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit
              untersagt. Jegliche unautorisierte Verwendung der Kontaktdaten für Werbezwecke
              stellt eine Verletzung der Rechte des Betreibers dieser Website dar und wird nicht
              toleriert. Der Betreiber dieser Website behält sich ausdrücklich rechtliche Schritte
              vor, falls es zu Verstößen kommt, insbesondere bei der unverlangten Zusendung von
              Werbeinformationen wie Spam-E-Mails.
            </p>

            <h3 className={h3Class}>Versenden an Bestandskunden ohne Einwilligung</h3>
            <p className="mt-2">
              Newsletter werden an Bestandskunden auch ohne deren ausdrückliche Einwilligung unter
              bestimmten Voraussetzungen versendet. Dies ist gemäß Art. 6 Abs. 1 lit. f DSGVO
              zulässig, wenn die folgenden Bedingungen erfüllt sind:
            </p>
            <ul className={listClass}>
              <li>
                <strong className="text-text">Bestandskundeneigenschaft:</strong> Der Kunde hat im
                Zusammenhang mit dem Verkauf einer Ware oder Dienstleistung seine E-Mail-Adresse
                hinterlegt.
              </li>
              <li>
                <strong className="text-text">
                  Direktwerbung für eigene ähnliche Produkte oder Dienstleistungen:
                </strong>{" "}
                Der Newsletter enthält nur Werbung für eigene ähnliche Produkte oder
                Dienstleistungen.
              </li>
              <li>
                <strong className="text-text">Hinweis auf Widerspruchsrecht:</strong> Der Kunde
                wurde bereits bei der Erhebung der E-Mail-Adresse und in jedem Newsletter klar und
                deutlich darauf hingewiesen, dass er der Verwendung seiner E-Mail-Adresse
                jederzeit widersprechen kann, ohne dass hierfür andere als die
                Übermittlungskosten nach den Basistarifen entstehen.
              </li>
              <li>
                <strong className="text-text">Kein Widerspruch des Kunden:</strong> Der Kunde hat
                der Verwendung seiner E-Mail-Adresse nicht widersprochen.
              </li>
            </ul>
            <p className="mt-3">
              Diese Art des Newsletter-Versands erfolgt auf Grundlage des berechtigten Interesses
              des Verantwortlichen, Bestandskunden über ähnliche Produkte oder Dienstleistungen zu
              informieren und die Geschäftsbeziehung zu pflegen. Die Verarbeitung der Daten erfolgt
              gemäß Art. 6 Abs. 1 lit. f DSGVO. Selbstverständlich können Kunden jederzeit der
              Verwendung ihrer E-Mail-Adresse zu diesem Zweck widersprechen. Hierzu reicht eine
              formlose Mitteilung per E-Mail an den Verantwortlichen oder die Nutzung des
              „Austragen“-Links im jeweiligen Newsletter.
            </p>
          </div>

          <div>
            <h2 className={h2Class}>17. Verarbeitung von Kunden- und Vertragsdaten</h2>
            <p className="mt-3">
              Personenbezogene Kunden- und Vertragsdaten werden zur Begründung, inhaltlichen
              Ausgestaltung und Änderung der Vertragsbeziehungen erhoben, verarbeitet und genutzt.
              Dazu können Name, Adresse, E-Mail-Adresse und Telefonnummer gehören. Diese
              Informationen sind notwendig, um Dienstleistungen zur Verfügung zu stellen und zu
              kommunizieren. Je nach gewählter Zahlungsmethode werden auch Zahlungsinformationen
              wie Kreditkartendaten, Bankverbindungsdaten oder Informationen zu anderen
              Zahlungsdiensten erfasst, die ausschließlich für den Zahlungsprozess verwendet
              werden.
            </p>
            <p className="mt-2">
              Zusätzlich werden Nutzungs- und Bestelldaten verarbeitet, einschließlich
              Informationen über Bestellungen, die genutzten Dienstleistungen, Preise und
              Lieferdetails. Personenbezogene Daten über die Inanspruchnahme dieser Website
              (Nutzungsdaten) werden nur erhoben, verarbeitet und genutzt, soweit dies
              erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder
              abzurechnen.
            </p>
            <p className="mt-2">
              Die Verarbeitung personenbezogener Daten erfolgt auf verschiedenen
              Rechtsgrundlagen. Gemäß Art. 6 Abs. 1 lit. b DSGVO erfolgt die Datenverarbeitung zur
              Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen,
              beispielsweise zur Abwicklung von Bestellungen und zur Bereitstellung von
              Dienstleistungen. Zudem erfolgt die Verarbeitung nach Art. 6 Abs. 1 lit. c DSGVO zur
              Erfüllung rechtlicher Verpflichtungen, einschließlich gesetzlicher
              Aufbewahrungspflichten. Darüber hinaus erfolgt die Verarbeitung gemäß Art. 6 Abs. 1
              lit. f DSGVO zur Wahrung berechtigter Interessen, wie der Verbesserung von
              Dienstleistungen und der Sicherstellung der IT-Sicherheit.
            </p>
            <p className="mt-2">
              Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der
              Geschäftsbeziehung und Ablauf der ggf. bestehenden gesetzlichen
              Aufbewahrungsfristen gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
            </p>

            <h3 className={h3Class}>Zahlungsdienst</h3>
            <p className="mt-2">
              Derzeit steht auf dieser Website kein Online-Zahlungsdienst zur Verfügung.
            </p>
          </div>

          <div>
            <h2 className={h2Class}>18. Google Fonts</h2>
            <p className="mt-3">
              Auf dieser Website werden Google Fonts verwendet. Google Fonts ist ein Dienst der
              Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Dieser Dienst
              ermöglicht die Nutzung von Schriftarten, die von Google bereitgestellt werden, um
              die visuelle Gestaltung dieser Website zu verbessern.
            </p>
            <p className="mt-2">
              Beim Abrufen der Google Fonts von den Servern von Google wird Ihre IP-Adresse an die
              Server von Google in die USA übertragen. Google speichert diese Informationen und
              verwendet sie zur Analyse der Nutzung der Fonts.
            </p>
            <p className="mt-2">
              Google ist unter dem EU-US Data Privacy Framework (DPF) zertifiziert, welches einen
              angemessenen Schutz für die Übertragung von personenbezogenen Daten aus der EU in
              die USA gewährleistet. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet
              sich zur Einhaltung strenger Datenschutzstandards. Weitere Informationen zum EU-US
              DPF finden Sie unter:{" "}
              <a
                href="https://www.dataprivacyframework.gov"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                dataprivacyframework.gov
              </a>
              .
            </p>
            <p className="mt-2">
              Zusätzliche Informationen zur Verarbeitung Ihrer personenbezogenen Daten durch
              Google finden Sie in der Google-Datenschutzerklärung unter:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className={h2Class}>19. Karten-Dienst</h2>
            <p className="mt-3">
              Diese Website verwendet einen Karten-Dienst, um Ihnen geografische Informationen und
              eine interaktive Nutzererfahrung zu bieten. Die Einbindung erfolgt durch einen
              Drittanbieter, der personenbezogene Daten verarbeiten kann, wenn Sie dessen Dienst
              nutzen.
            </p>
            <p className="mt-2">
              Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
              zur Erfüllung des Vertrags, insbesondere zur Bereitstellung von geografischen
              Informationen und Diensten, sowie im berechtigten Interesse an einem reibungslosen,
              komfortablen und sicheren Nutzungserlebnis gemäß Art. 6 Abs. 1 lit. f DSGVO. Soweit
              für bestimmte Handlungen Ihre Einwilligung erforderlich ist, erfolgt die
              Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Einwilligungen sind
              jederzeit mit Wirkung für die Zukunft widerrufbar.
            </p>
            <p className="mt-2">Im Folgenden finden Sie detaillierte Informationen zum Karten-Dienst:</p>

            <h3 className={h3Class}>Google Maps</h3>
            <p className="mt-2">
              Um Karten und geografische Informationen auf dieser Website bereitzustellen, wird
              Google Maps genutzt. Google Maps ist ein Dienst der Google Ireland Limited, Gordon
              House, Barrow Street, Dublin 4, Irland. Beim Besuch einer Seite mit eingebetteten
              Google Maps wird eine Verbindung zu den Servern von Google hergestellt. Dabei können
              personenbezogene Daten wie Ihre IP-Adresse und Ihre Interaktionen mit der Karte an
              Google übertragen werden.
            </p>
            <p className="mt-2">
              Google ist unter dem EU-US Data Privacy Framework (DPF) zertifiziert, was einen
              angemessenen Schutz für die Übertragung von personenbezogenen Daten aus der EU in die
              USA gewährleistet. Weitere Informationen zum EU-US DPF finden Sie unter:{" "}
              <a
                href="https://www.dataprivacyframework.gov"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                dataprivacyframework.gov
              </a>
              .
            </p>
            <p className="mt-2">
              Weitere Informationen zur Verarbeitung Ihrer personenbezogenen Daten durch Google
              Maps finden Sie in der Datenschutzerklärung von Google:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
