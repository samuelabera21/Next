"use client";

import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { content, projects } from "@/lib/content";
import { useLanguage } from "./providers";

function canEmbedLivePreview(liveUrl: string) {
  return Boolean(liveUrl) && !liveUrl.includes("github.com");
}

export function ProjectsSection({ showAll = true }: { showAll?: boolean }) {
  const { locale } = useLanguage();
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="scroll-mt-24 py-16">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold sm:text-3xl">{content.projectsTitle[locale]}</h2>
        {!showAll && (
          <Link href="/projects" className="text-sm font-semibold text-primary underline">
            {locale === "en" ? "View all" : "ሁሉንም ይመልከቱ"}
          </Link>
        )}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <article
            key={project.title}
            className="overflow-hidden rounded-2xl border border-border bg-card ai-hover glass-panel"
          >
            <div className="relative h-44 w-full">
              {canEmbedLivePreview(project.live) ? (
                <iframe
                  src={project.live}
                  title={`${project.title} live preview`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent to-background px-4 text-center text-sm font-semibold text-muted-foreground">
                  {project.title}
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {project.description[locale]}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3 text-sm font-semibold">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-w-24 items-center justify-center gap-2 rounded-xl border border-border px-4 py-2 transition hover:bg-accent"
                >
                  <Github size={16} />
                  {locale === "en" ? "Code" : "ኮድ"}
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-w-24 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2 text-white transition hover:opacity-90"
                >
                  <ExternalLink size={16} />
                  {locale === "en" ? "Live" : "ቀጥታ"}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
