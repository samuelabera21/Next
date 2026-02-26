import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio projects by Samuel Abera Mekonn across web and AI.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <ScrollReveal>
          <ProjectsSection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
