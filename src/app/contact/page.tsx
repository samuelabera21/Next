import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Samuel Abera Mekonn for internships, projects, and collaborations.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
