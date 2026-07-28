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
  taxId: "DE460356463",

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
    siteUrl: "https://www.mt-dienstleistungen.com",
    defaultTitle: "MT Dienstleistungen | Hausmeisterservice und Renovierung in Paderborn",
    defaultDescription:
      "MT Dienstleistungen in Paderborn – zuverlässige Unterstützung bei Hausmeisterservice, Renovierungsarbeiten, Gartenpflege, Bodenarbeiten und weiteren Leistungen rund um Ihre Immobilie.",
  },
};

export function googleMapsUrl(): string {
  const query = `${company.address.street}, ${company.address.zip} ${company.address.city}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export type Company = typeof company;
