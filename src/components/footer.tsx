"use client";

import { useLanguage } from "./providers";

export function Footer() {
  const { locale } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {year} Samuel Abera Mekonn. {locale === "en" ? "All rights reserved." : "መብቶቹ በሙሉ የተጠበቁ ናቸው።"}
        </p>
        <div className="flex items-center gap-4 text-sm font-medium">
          <a href="https://github.com/samuelabera21" target="_blank" rel="noreferrer" className="underline">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/samuelabera21/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
          <a href="https://www.facebook.com/samuelabera21" target="_blank" rel="noreferrer" className="underline">
            Facebook
          </a>
          <a href="https://x.com/samuelabera21" target="_blank" rel="noreferrer" className="underline">
            X
          </a>
          <a href="https://www.tiktok.com/@dn_sami" target="_blank" rel="noreferrer" className="underline">
            TikTok
          </a>
          <a href="mailto:samuelabera.dev@gmail.com" className="underline">
            Email
          </a>
          <a href="#top" className="underline">
            {locale === "en" ? "Back to top" : "ወደ ላይ"}
          </a>
        </div>
      </div>
    </footer>
  );
}
