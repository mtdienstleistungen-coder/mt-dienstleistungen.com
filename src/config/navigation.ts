export type NavItem = {
  label: string;
  href: string;
};

/**
 * Anker-Navigation für die One-Page-Website. Jeder Eintrag scrollt zum
 * jeweiligen Abschnitt auf der Startseite (siehe id-Attribute in
 * src/app/page.tsx).
 */
export const mainNav: NavItem[] = [
  { label: "Start", href: "#start" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Projekte", href: "#projekte" },
  { label: "Kontakt", href: "#kontakt" },
];

export const legalNav: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];
