/**
 * Zentrale Unternehmenskonfiguration.
 *
 * Alle Firmendaten und Kontaktinformationen werden hier gepflegt und im
 * gesamten Projekt referenziert. Ändere ausschließlich diese Datei, um
 * Firmendaten anzupassen – der Rest der Seite liest automatisch die
 * aktuellen Werte.
 */

export const company = {
  name: "MT Dienstleistungen",
  shortName: "MT Dienstleistungen",
  legalForm: "MT Dienstleistungen",

  contactPerson: "Markus Fres",

  phone: "+4915901055517",
  phoneDisplay: "0159 01055517",
  email: "mtdienstleistungen@outlook.de",

  address: {
    street: "Im Lichtenfelde 3",
    zip: "33100",
    city: "Paderborn",
    country: "Deutschland",
  },

  region: "Paderborn und Umgebung",

  foundedYear: 2026,
  employeeCount: 1,
  objectsManaged: 15,

  seo: {
    // Noch keine eigene Domain vorhanden – vor dem Livegang durch die echte
    // Domain ersetzen (u. a. relevant für sitemap.xml, robots.txt, JSON-LD).
    siteUrl: "https://www.mt-dienstleistungen-platzhalter.de",
    defaultTitle: "MT Dienstleistungen | Hausmeisterservice und Renovierung in Paderborn",
    defaultDescription:
      "MT Dienstleistungen in Paderborn – zuverlässige Unterstützung bei Hausmeisterservice, Renovierungsarbeiten, Gartenpflege, Bodenarbeiten und Arbeiten rund um Ihre Immobilie.",
    ogImage: "/images/og-cover.jpg",
  },
};

export function googleMapsUrl(): string {
  const query = `${company.address.street}, ${company.address.zip} ${company.address.city}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export type Company = typeof company;
