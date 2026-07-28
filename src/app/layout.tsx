import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { company } from "@/config/company";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HammerCursor } from "@/components/shared/HammerCursor";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { EasterEggProvider } from "@/components/shared/EasterEggProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.seo.siteUrl),
  title: {
    default: company.seo.defaultTitle,
    template: `%s | ${company.name}`,
  },
  description: company.seo.defaultDescription,
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: company.name,
    title: company.seo.defaultTitle,
    description: company.seo.defaultDescription,
  },
  twitter: {
    card: "summary",
    title: company.seo.defaultTitle,
    description: company.seo.defaultDescription,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: company.name,
  description: company.seo.defaultDescription,
  url: company.seo.siteUrl,
  telephone: company.phone,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    postalCode: company.address.zip,
    addressLocality: company.address.city,
    addressCountry: "DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning ist bei next-themes bewusst nötig: die
    // "dark"-Klasse wird per Inline-Skript bereits vor dem Hydrieren gesetzt
    // (verhindert das Aufblitzen des falschen Farbschemas), wodurch sich das
    // serverseitig gerenderte Markup an dieser einen Stelle erwartungsgemäß
    // vom ersten Client-Render unterscheidet.
    <html lang="de" className={`${inter.variable} ${oswald.variable}`} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-background font-sans">
        <ThemeProvider>
          <EasterEggProvider>
            <HammerCursor />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
            />
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-amber focus:px-4 focus:py-2 focus:text-anthracite-950 focus:font-semibold"
            >
              Zum Hauptinhalt springen
            </a>
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
          </EasterEggProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
