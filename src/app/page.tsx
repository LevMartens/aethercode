import { Navbar } from "@/components/navigation/Navbar";
import { Section } from "@/components/sections/Section";
import { HeroParallaxSection } from "@/components/sections/HeroParallaxSection";
import { ContainerScrollSection } from "@/components/sections/ContainerScrollSection";
import { MacbookScrollSection } from "@/components/sections/MacbookScrollSection";
import { FloatingDockSection } from "@/components/sections/FloatingDockSection";
import { FeaturesGlowCards } from "@/components/sections/FeaturesGlowCards";
import { LinkPreviewGrid } from "@/components/sections/LinkPreviewGrid";
import { Footer } from "@/components/navigation/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <main>
      <Navbar />
      {/* HERO */}
      <Section id="home" className={cn("scroll-mt-0 py-0 md:py-0")}>
        <HeroParallaxSection />
      </Section>

      {/* PROBLEM / SOLUTION (ContainerScroll) */}
      <Section id="solution" className="py-10 md:py-16 -mt-8 ">
        <ContainerScrollSection />
      </Section>

      {/* PRODUCT DEMO (MacbookScroll) */}
      <Section id="demo">
        <MacbookScrollSection />
      </Section>

      {/* SERVICES (GlowingEffect on cards) */}
      <Section id="services">
        <FeaturesGlowCards />
      </Section>

      {/* RESOURCES / CASE LINKS (LinkPreview) */}
      <Section id="work">
        <LinkPreviewGrid />
      </Section>

      <Section id="contact">
        <ContactSection />
      </Section>

      {/* CTA DOCK (FloatingDock) */}
      {/* <FloatingDockSection /> */}

      <Footer />
    </main>
  );
}
