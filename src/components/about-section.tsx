"use client";

import Image from "next/image";
import { content } from "@/lib/content";
import { useLanguage } from "./providers";

export function AboutSection() {
  const { locale } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">{content.about.title[locale]}</h2>
      <div className="mt-6 grid gap-6 rounded-2xl border border-border bg-card p-6 md:grid-cols-[220px_1fr]">
        <div className="flex items-center justify-center">
          <div className="relative h-44 w-44 overflow-hidden rounded-full border border-border bg-accent">
            <Image
              src="/samuel-profile.jpg"
              alt="Samuel Abera Mekonn"
              fill
              className="object-cover"
              sizes="176px"
              priority
            />
          </div>
        </div>
        <div>
          <p className="leading-7 text-muted-foreground">{content.about.summary[locale]}</p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-muted-foreground">
            {content.about.achievements[locale].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-5 text-sm font-medium">{content.about.languages[locale]}</p>
        </div>
      </div>
    </section>
  );
}
