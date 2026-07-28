"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MailOpen } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { EasterEggSpot } from "@/components/shared/EasterEggSpot";
import { company } from "@/config/company";
import { services } from "@/config/services";

type FormState = {
  name: string;
  telefon: string;
  email: string;
  leistung: string;
  nachricht: string;
  datenschutz: boolean;
};

const initialState: FormState = {
  name: "",
  telefon: "",
  email: "",
  leistung: "",
  nachricht: "",
  datenschutz: false,
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const inputClass =
  "w-full rounded-xl border border-border/15 bg-background px-4 py-3 text-text placeholder:text-text/30 focus:border-brand-amber";
const labelClass = "mb-1.5 block text-sm font-medium text-text/80";
const errorClass = "mt-1 text-xs text-red-400";

function validate(data: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Bitte geben Sie Ihren Namen an.";
  if (!data.telefon.trim() && !data.email.trim()) {
    errors.telefon = "Bitte geben Sie Telefonnummer oder E-Mail-Adresse an.";
    errors.email = "Bitte geben Sie Telefonnummer oder E-Mail-Adresse an.";
  }
  if (data.email.trim() && !/^\S+@\S+\.\S+$/.test(data.email.trim())) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  }
  if (!data.nachricht.trim()) errors.nachricht = "Bitte beschreiben Sie kurz Ihr Anliegen.";
  if (!data.datenschutz) errors.datenschutz = "Bitte stimmen Sie der Datenschutzerklärung zu.";
  return errors;
}

export function ContactSection() {
  const [data, setData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    /**
     * WICHTIG: Es ist aktuell kein Backend bzw. E-Mail-Versanddienst
     * eingerichtet. Das Formular täuscht daher keinen serverseitigen Versand
     * vor, sondern öffnet einen vorausgefüllten mailto-Link, damit die
     * Anfrage direkt über das E-Mail-Programm des Nutzers gesendet wird.
     *
     * Für einen echten, serverseitigen Formularversand kann hier später
     * z. B. angebunden werden:
     *  - eigene API-Route (z. B. app/api/contact/route.ts)
     *  - Resend (https://resend.com)
     *  - Formspree (https://formspree.io)
     *  - Nodemailer (SMTP-Versand über eine eigene API-Route)
     *
     * Beispiel für eine spätere API-Anbindung:
     * await fetch("/api/contact", {
     *   method: "POST",
     *   headers: { "Content-Type": "application/json" },
     *   body: JSON.stringify(data),
     * });
     */
    const leistungLabel =
      services.find((s) => s.slug === data.leistung)?.title ?? "keine Angabe";

    const subject = `Anfrage über die Website – ${leistungLabel}`;
    const body = [
      `Name: ${data.name}`,
      `Telefon: ${data.telefon || "–"}`,
      `E-Mail: ${data.email || "–"}`,
      `Gewünschte Leistung: ${leistungLabel}`,
      "",
      "Nachricht:",
      data.nachricht,
    ].join("\n");

    const mailtoLink = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setSent(true);
  };

  return (
    <section id="kontakt" className="relative section-y scroll-mt-20">
      {/* Weicher Übergang von der getönten Einsatzgebiet-Fläche – gleiches
          Prinzip wie zwischen Hero und Leistungen. */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-surface/40 to-transparent sm:h-32"
        aria-hidden="true"
      />
      <div className="container-page">
        <SectionHeading
          label="Kontakt"
          title="Lassen Sie uns über Ihr Projekt sprechen"
          description="Schildern Sie uns kurz Ihr Anliegen. Wir melden uns schnellstmöglich bei Ihnen zurück."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <ScrollReveal direction="right" className="space-y-6">
            <div className="rounded-2xl border border-border/10 bg-surface/60 p-6">
              <p className="font-display text-lg font-semibold text-text">
                {company.contactPerson}
              </p>
              <p className="text-sm text-text/60">{company.name}</p>
              <ul className="mt-5 space-y-3 text-sm text-text/70">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-amber" aria-hidden="true" />
                  <span>
                    {company.address.street}
                    <br />
                    {company.address.zip} {company.address.city}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-brand-amber" aria-hidden="true" />
                  <a href={`tel:${company.phone}`} className="hover:text-text">
                    {company.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-brand-amber" aria-hidden="true" />
                  <a href={`mailto:${company.email}`} className="hover:text-text">
                    {company.email}
                  </a>
                </li>
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${company.phone}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-amber px-5 py-3 text-sm font-semibold text-anthracite-950 shadow-glow transition-transform hover:scale-105"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Jetzt anrufen
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border/20 bg-text/5 px-5 py-3 text-sm font-semibold text-text transition-colors hover:bg-text/10"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  E-Mail schreiben
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center rounded-3xl border border-border/10 bg-surface/60 p-10 text-center"
                role="status"
              >
                <MailOpen className="h-12 w-12 text-brand-amber" aria-hidden="true" />
                <h3 className="mt-4 font-display text-xl font-semibold text-text">
                  Ihr E-Mail-Programm wird geöffnet
                </h3>
                <p className="mt-2 max-w-sm text-sm text-text/65">
                  Bitte senden Sie die vorausgefüllte E-Mail über Ihr E-Mail-Programm ab, damit
                  Ihre Anfrage bei uns ankommt. Es öffnet sich kein automatischer Versand über die
                  Website.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-brand-amber hover:underline"
                >
                  Zurück zum Formular
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl border border-border/10 bg-surface/60 p-6 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="name">Name</label>
                    <input
                      id="name"
                      className={inputClass}
                      value={data.name}
                      onChange={(e) => update("name", e.target.value)}
                    />
                    {errors.name && <p className={errorClass}>{errors.name}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="telefon">Telefonnummer</label>
                    <input
                      id="telefon"
                      type="tel"
                      className={inputClass}
                      value={data.telefon}
                      onChange={(e) => update("telefon", e.target.value)}
                    />
                    {errors.telefon && <p className={errorClass}>{errors.telefon}</p>}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">E-Mail-Adresse</label>
                    <input
                      id="email"
                      type="email"
                      className={inputClass}
                      value={data.email}
                      onChange={(e) => update("email", e.target.value)}
                    />
                    {errors.email && <p className={errorClass}>{errors.email}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="leistung">Gewünschte Leistung</label>
                    <select
                      id="leistung"
                      className={inputClass}
                      value={data.leistung}
                      onChange={(e) => update("leistung", e.target.value)}
                    >
                      <option value="">Bitte auswählen (optional)</option>
                      {services.map((service) => (
                        <option key={service.slug} value={service.slug}>
                          {service.title}
                        </option>
                      ))}
                      <option value="sonstige">Sonstige Anfrage</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="nachricht">Nachricht</label>
                    <textarea
                      id="nachricht"
                      rows={5}
                      className={inputClass}
                      placeholder="Beschreiben Sie kurz Ihr Anliegen…"
                      value={data.nachricht}
                      onChange={(e) => update("nachricht", e.target.value)}
                    />
                    {errors.nachricht && <p className={errorClass}>{errors.nachricht}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="flex items-start gap-3 text-sm text-text/65">
                      <input
                        type="checkbox"
                        checked={data.datenschutz}
                        onChange={(e) => update("datenschutz", e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-border/30 bg-background text-brand-amber"
                      />
                      Ich habe die{" "}
                      <a href="/datenschutz" className="text-brand-amber underline underline-offset-2">
                        Datenschutzerklärung
                      </a>{" "}
                      gelesen und bin mit der Verarbeitung meiner Daten einverstanden.
                    </label>
                    {errors.datenschutz && <p className={errorClass}>{errors.datenschutz}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-amber px-6 py-3.5 text-sm font-semibold text-anthracite-950 shadow-glow transition-transform hover:scale-105"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Anfrage senden
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>

      <EasterEggSpot id="contact-corner" position="bottom-3 left-3 sm:bottom-6 sm:left-6" />
    </section>
  );
}
