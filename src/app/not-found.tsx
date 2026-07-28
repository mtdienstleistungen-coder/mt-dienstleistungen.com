import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-7xl font-bold text-brand-amber">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-text">
        Seite nicht gefunden
      </h1>
      <p className="mt-2 max-w-md text-text/60">
        Die gesuchte Seite existiert nicht oder wurde verschoben.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-amber px-6 py-3 font-semibold text-anthracite-950"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Zurück zur Startseite
      </Link>
    </section>
  );
}
