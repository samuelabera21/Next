"use client";

import Link from "next/link";
import { content } from "@/lib/content";
import { useLanguage } from "./providers";

export function HeroSection() {
  const { locale } = useLanguage();

  return (
    <section className="flex min-h-[86vh] items-center" id="home">
      <div className="max-w-3xl rounded-3xl border border-border/60 p-6 glass-panel sm:p-8">
        <p className="mb-4 inline-flex rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.15em] text-muted-foreground soft-pulse">
          Samuel Abera Mekonn
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          {content.hero.tagline[locale]}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {content.hero.description[locale]}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:opacity-90 ai-hover"
          >
            {content.hero.ctaProjects[locale]}
          </Link>
          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:bg-accent ai-hover"
          >
            {content.hero.ctaResume[locale]}
          </a>
        </div>
      </div>
    </section>
  );
}
