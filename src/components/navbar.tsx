"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { content } from "@/lib/content";
import { LanguageToggle } from "./language-toggle";
import { useLanguage } from "./providers";

const ThemeToggleNoSSR = dynamic(
  () => import("./theme-toggle").then((module) => module.ThemeToggle),
  {
    ssr: false,
    loading: () => <div className="h-9 w-9 rounded-full border border-border" aria-hidden />,
  },
);

export function Navbar() {
  const { locale } = useLanguage();

  const links = [
    { href: "/", label: content.nav.home[locale] },
    { href: "/#about", label: content.nav.about[locale] },
    { href: "/#skills", label: content.nav.skills[locale] },
    { href: "/projects", label: content.nav.projects[locale] },
    { href: "/blog", label: content.nav.blog[locale] },
    { href: "/contact", label: content.nav.contact[locale] },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur glass-panel">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-semibold tracking-wide sm:text-base">
          Samuel Abera Mekonn
        </Link>
        <div className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition hover:text-foreground hover:-translate-y-0.5"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggleNoSSR />
        </div>
      </nav>
    </header>
  );
}
