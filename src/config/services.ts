import {
  ClipboardCheck,
  Wrench,
  PaintRoller,
  LayoutGrid,
  HardHat,
  Trees,
  SprayCan,
  type LucideIcon,
} from "lucide-react";

/**
 * WICHTIGER HINWEIS ZUR RECHTLICHEN PRÜFUNG (Handwerksordnung):
 * Die folgenden Kurzbeschreibungen und Tätigkeitslisten wurden bewusst eng
 * und zurückhaltend formuliert, um keine wesentlichen, zulassungspflichtigen
 * Tätigkeiten eines Anlage-A-Handwerks (z. B. Elektro-, Sanitär-, Heizungs-,
 * Dach-, Maurer-, Beton-, Estrich-, Fliesen-, Parkett-, Tischler-, Glaser-,
 * Maler-, Lackierer-, Stuckateur- oder Pflasterarbeiten) als eigenständige
 * Leistung zu bewerben. Sie ersetzen KEINE rechtliche Prüfung: Vor
 * Veröffentlichung müssen die hier hinterlegten Leistungsbeschreibungen
 * zwingend mit der zuständigen Handwerkskammer sowie dem Umfang der
 * tatsächlich bestehenden Gewerbeanmeldung abgeglichen werden.
 */

export type Service = {
  slug: string;
  title: string;
  /**
   * Optionaler, präziserer Anzeigename ausschließlich für die Überschrift in
   * der Leistungen-Übersicht. `title` bleibt unverändert, da es u. a. im
   * Kontaktformular (Auswahl „Gewünschte Leistung“ + E-Mail-Betreff) verwendet
   * wird und dort bewusst nicht umbenannt werden soll.
   */
  sectionTitle?: string;
  icon: LucideIcon;
  intro: string;
  /** Kurzbeschreibung für die aufklappbare Detailansicht. */
  description: string;
  tasks: string[];
  image: string;
  note?: string;
};

export const services: Service[] = [
  {
    slug: "hausmeisterservice",
    title: "Hausmeisterservice",
    icon: ClipboardCheck,
    intro:
      "Die laufende Betreuung Ihrer Immobilie – zuverlässig, regelmäßig und mit einem wachsamen Blick für Details.",
    description:
      "Zuverlässige Betreuung und Pflege von Immobilien, Gemeinschaftsflächen und Außenbereichen. Der Service umfasst regelmäßige Kontroll-, Pflege- und einfache Hilfstätigkeiten rund um das Gebäude.",
    tasks: [
      "Regelmäßige Objekt- und Sichtkontrollen",
      "Kontrolle von Gemeinschaftsräumen und Außenflächen",
      "Bereitstellen und Zurückstellen von Abfallbehältern",
      "Austausch frei zugänglicher Leuchtmittel, soweit keine Arbeiten an der Elektroinstallation erforderlich sind",
      "Einfache Montagearbeiten ohne Eingriff in zulassungspflichtige Gewerke",
      "Aufnahme und Weiterleitung festgestellter Schäden",
      "Koordination externer Fachbetriebe",
      "Winterdienst, sofern vom Betrieb angeboten und angemeldet",
    ],
    image: "/projects/treppenhaus-vorher-nachher.png",
  },
  {
    slug: "reparatur-wartung",
    title: "Reparatur und Wartung",
    icon: Wrench,
    intro:
      "Kleine Schäden, bevor sie groß werden: schnelle, saubere Reparatur- und Wartungsarbeiten an Ihrer Immobilie.",
    description:
      "Kleine Instandhaltungs-, Montage- und Ausbesserungsarbeiten, die ohne Eingriff in zulassungspflichtige technische Anlagen ausgeführt werden können.",
    tasks: [
      "Nachziehen und Befestigen lockerer Schrauben",
      "Einstellen und Schmieren einfacher Beschläge",
      "Austausch einfacher, nicht fest installierter Bauteile",
      "Montage von Regalen, Gardinenstangen und ähnlichen Einrichtungsgegenständen",
      "Kleinere Ausbesserungen an Möbeln und Einrichtungsgegenständen",
      "Erneuerung einfacher Silikon- oder Acrylfugen, soweit rechtlich und fachlich zulässig",
      "Regelmäßige Sicht- und Funktionskontrollen",
      "Weiterleitung größerer Schäden an einen Fachbetrieb",
    ],
    image: "/projects/fenster-reinigung-vorher-nachher.png",
  },
  {
    slug: "renovierung",
    title: "Renovierungsarbeiten",
    icon: PaintRoller,
    intro:
      "Vom frischen Anstrich bis zur kompletten Wohnungsaufbereitung – Renovierung mit Auge für saubere Ausführung.",
    description:
      "Unterstützende Arbeiten zur optischen Auffrischung und Vorbereitung von Innenräumen, soweit diese nicht den wesentlichen Tätigkeitsbereich eines zulassungspflichtigen Handwerks betreffen.",
    tasks: [
      "Entfernen von Tapeten und losen Altbelägen",
      "Vorbereitende Reinigungs- und Abdeckarbeiten",
      "Demontage nicht tragender Einrichtungsgegenstände",
      "Anbringen einfacher Dekorationselemente",
      "Montage vorgefertigter Einrichtungs- und Ausstattungsgegenstände",
      "Kleinere kosmetische Ausbesserungen, sofern zulässig",
      "Entsorgung und besenreine Übergabe nach Abschluss der Arbeiten",
    ],
    image: "/projects/treppenhaus-vorher-nachher.png",
  },
  {
    slug: "bodenlegearbeiten",
    title: "Fußbodenlegearbeiten",
    icon: LayoutGrid,
    intro:
      "Fachgerechte Verlegung moderner Bodenbeläge, inklusive Untergrundvorbereitung und sauberem Abschluss.",
    description:
      "Fachgerechte Vorbereitung und Verlegung ausgewählter Bodenbeläge im Rahmen des angemeldeten Bodenlegergewerbes.",
    tasks: [
      "Verlegung von Laminat",
      "Verlegung von Vinyl- und Designbelägen",
      "Verlegung von Teppichboden",
      "Verlegung von Kork- und Linoleumbelägen, soweit vom angemeldeten Tätigkeitsumfang umfasst",
      "Entfernen geeigneter Altbeläge",
      "Montage passender Sockelleisten",
      "Einfache Untergrundvorbereitung, soweit sie nicht dem Estrichlegerhandwerk zuzuordnen ist",
      "Pflege und Austausch einzelner geeigneter Bodenbeläge",
    ],
    image: "/projects/bodenbelag-rueckbau-vorher-nachher.jpeg",
    note: "Parkettverlegung ist ein zulassungspflichtiges Handwerk und wird hier bewusst nicht als Leistung genannt, solange keine entsprechende handwerksrechtliche Berechtigung vorliegt.",
  },
  {
    slug: "abbrucharbeiten",
    title: "Abbrucharbeiten bei Sanierungen",
    icon: HardHat,
    intro:
      "Rückbau und Entkernung als saubere Vorbereitung für Ihre Sanierung – fachgerecht sortiert und entsorgt.",
    description:
      "Kontrollierte Rückbau- und Demontagearbeiten im nicht tragenden Innenbereich als Vorbereitung für Renovierungs- und Sanierungsmaßnahmen.",
    tasks: [
      "Demontage von Bodenbelägen",
      "Entfernung von Tapeten und Wandverkleidungen",
      "Demontage einfacher Einbauten und Möbel",
      "Rückbau nicht tragender und nicht sicherheitsrelevanter Bauteile, soweit zulässig",
      "Trennung und Sortierung anfallender Materialien",
      "Abtransport und fachgerechte Entsorgung",
      "Besenreine Übergabe der Arbeitsbereiche",
    ],
    image: "/projects/bodenbelag-rueckbau-vorher-nachher.jpeg",
    note: "Abbruch tragender Wände, Eingriffe in die Gebäudestatik, Arbeiten an schadstoffbelasteten Materialien (u. a. Asbest) sowie Eingriffe in Elektro-, Gas-, Heizungs- oder Wasserleitungen sind ausdrücklich nicht Teil dieser Leistung und werden ausschließlich durch entsprechend qualifizierte Fachbetriebe ausgeführt.",
  },
  {
    slug: "garten-aussenanlagen",
    title: "Garten- und Außenanlagenpflege",
    icon: Trees,
    intro:
      "Gepflegte Außenanlagen das ganze Jahr über – von der Rasenpflege bis zur Wintervorbereitung.",
    description:
      "Regelmäßige Pflege und Sauberhaltung von Gärten, Grünflächen, Wegen und Außenbereichen.",
    tasks: [
      "Rasenmähen",
      "Laub- und Unkrautbeseitigung",
      "Bewässerung von Pflanzen und Grünflächen",
      "Pflege von Beeten",
      "Einfacher Rückschnitt von Hecken und Sträuchern",
      "Reinigung von Wegen und Außenflächen",
      "Beseitigung von Grünschnitt",
      "Saisonale Pflegearbeiten",
      "Kontrolle und Sauberhaltung von Außenanlagen",
    ],
    image: "/projects/garten-hecke-vorher-nachher.png",
  },
  {
    slug: "reinigungsarbeiten",
    title: "Reinigungsarbeiten aller Art",
    // Nur für die Kartenüberschrift präziser benannt; das Kontaktformular
    // verwendet weiterhin `title`, siehe Kommentar am Service-Typ oben.
    sectionTitle: "Gebäude- und Unterhaltsreinigung",
    icon: SprayCan,
    intro:
      "Von der laufenden Treppenhausreinigung bis zur Bauendreinigung – gründlich, zuverlässig und termintreu.",
    description:
      "Gründliche und zuverlässige Reinigung von privaten, gewerblichen und gemeinschaftlich genutzten Innen- und Außenbereichen.",
    tasks: [
      "Unterhaltsreinigung",
      "Treppenhausreinigung",
      "Büro- und Praxisreinigung",
      "Wohnungsreinigung",
      "Bauendreinigung",
      "Glas- und Fensterreinigung",
      "Reinigung von Gemeinschaftsflächen",
      "Reinigung von Böden und Oberflächen",
      "Reinigung nach Umzügen oder Renovierungsmaßnahmen",
      "Reinigung von Eingangs- und Außenbereichen",
    ],
    image: "/projects/fenster-reinigung-vorher-nachher.png",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
