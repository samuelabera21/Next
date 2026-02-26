"use client";

import { BrainCircuit, Code2, MonitorCog, Wrench } from "lucide-react";
import { content, skills } from "@/lib/content";
import { useLanguage } from "./providers";

const groupIcons = {
  programming: Code2,
  web: MonitorCog,
  ai: BrainCircuit,
  tools: Wrench,
} as const;

export function SkillsSection() {
  const { locale } = useLanguage();

  return (
    <section id="skills" className="scroll-mt-24 py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">{content.skills.title[locale]}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {skills.map((group) => {
          const Icon = groupIcons[group.key as keyof typeof groupIcons];
          return (
            <article key={group.key} className="rounded-2xl border border-border bg-card p-5 ai-hover glass-panel">
              <div className="mb-4 flex items-center gap-2">
                <Icon size={18} className="text-muted-foreground" />
                <h3 className="text-lg font-semibold">
                  {
                    content.skills.groups[
                      group.key as keyof typeof content.skills.groups
                    ][locale]
                  }
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground transition hover:-translate-y-0.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
