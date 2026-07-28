import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {label && (
        <ScrollReveal>
          <span className="inline-flex items-center rounded-full bg-brand-amber/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-amber">
            {label}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2 className="mt-4 font-display text-3xl font-semibold text-balance text-text sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-balance text-base text-text/65 sm:text-lg">{description}</p>
        </ScrollReveal>
      )}
    </div>
  );
}
