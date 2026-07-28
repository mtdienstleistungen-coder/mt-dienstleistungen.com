import { VideoHeroIntro } from "@/components/hero/VideoHeroIntro";
import { AnimatedHero } from "@/components/hero/AnimatedHero";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { IntroSection } from "@/components/home/IntroSection";
import { CompanyHistorySection } from "@/components/home/CompanyHistorySection";
import { AdvantagesSection } from "@/components/home/AdvantagesSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServiceAreaSection } from "@/components/home/ServiceAreaSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function HomePage() {
  return (
    <>
      <VideoHeroIntro />
      <AnimatedHero />
      <ServicesOverview />
      <IntroSection />
      <CompanyHistorySection />
      <AdvantagesSection />
      <BeforeAfterSection />
      <ProcessSection />
      <ServiceAreaSection />
      <ContactSection />
    </>
  );
}
