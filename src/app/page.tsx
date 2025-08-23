import { Navbar } from "@/components/navigation/Navbar";
import { Section } from "@/components/sections/Section";
import { HeroParallaxSection } from "@/components/sections/HeroParallaxSection";
import { ContainerScrollSection } from "@/components/sections/ContainerScrollSection";
import { FeaturesGlowCards } from "@/components/sections/FeaturesGlowCards";
// import { LinkPreviewGrid } from "@/components/sections/LinkPreviewGrid";
import { Footer } from "@/components/navigation/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", link: "#home" },
  { name: "Solution", link: "#solution" },
  { name: "Services", link: "#services" },
  { name: "Contact", link: "#contact" },
];

export default function Page() {
  return (
    <main>
      <Navbar items={NAV_ITEMS} />
      {/* HERO */}
      <Section id="home" className={cn("scroll-mt-0 py-0 md:py-0")}>
        <HeroParallaxSection />
      </Section>

      {/* PROBLEM / SOLUTION (ContainerScroll) */}
      <Section id="solution" className={cn("scroll-mt-0 py-0 md:py-0 ")}>
        <ContainerScrollSection />
      </Section>

      {/* PRODUCT DEMO (MacbookScroll) */}
      {/* <Section id="demo">
        <MacbookScrollSection />
      </Section> */}

      {/* SERVICES (GlowingEffect on cards) */}
      <Section id="services" className={cn("scroll-mt-10 py-0 md:py-20 ")}>
        <FeaturesGlowCards />
      </Section>

      {/* RESOURCES / CASE LINKS (LinkPreview) */}
      {/* <Section id="work">
        <LinkPreviewGrid />
      </Section> */}

      <Section id="contact" className={cn("scroll-mt-15 py-0 md:py-10 ")}>
        <ContactSection />
      </Section>

      {/* CTA DOCK (FloatingDock) */}
      {/* <FloatingDockSection /> */}

      <Footer />
    </main>
  );
}
