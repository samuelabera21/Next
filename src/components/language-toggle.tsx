"use client";

import { useLanguage } from "@/components/providers";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "en" ? "am" : "en")}
      className="rounded-full border border-border px-3 py-1.5 text-sm font-medium transition hover:bg-accent"
      aria-label="Toggle language"
    >
      {locale === "en" ? "አማ" : "EN"}
    </button>
  );
}
