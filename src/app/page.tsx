import { AboutSection } from "@/components/about-section";
import { BlogPreviewSection } from "@/components/blog-preview-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SkillsSection } from "@/components/skills-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="top" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <SkillsSection />
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <ProjectsSection showAll={false} />
        </ScrollReveal>
        <ScrollReveal delay={180}>
          <BlogPreviewSection />
        </ScrollReveal>
        <ScrollReveal delay={220}>
          <ContactSection compact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
