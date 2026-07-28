import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

type PageHeroProps = {
  label: string;
  title: string;
  description?: string;
};

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-cinematic-gradient pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="absolute inset-0 bg-amber-glow" aria-hidden="true" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:24px_24px]" aria-hidden="true" />

      <div className="container-page relative">
        <ScrollReveal>
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1.5 text-xs text-white/50">
            <Link href="/" className="hover:text-white">
              Startseite
            </Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span className="text-white/80">{label}</span>
          </nav>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-4xl font-semibold text-balance text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </ScrollReveal>
        {description && (
          <ScrollReveal delay={0.2}>
            <p className="mt-5 max-w-2xl text-balance text-lg text-white/70">{description}</p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
