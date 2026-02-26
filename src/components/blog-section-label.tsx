"use client";

import type { Locale } from "@/lib/content";
import { useLanguage } from "./providers";

export function BlogSectionLabel({ text }: { text: Record<Locale, string> }) {
  const { locale } = useLanguage();
  return <h2 className="text-2xl font-bold sm:text-3xl">{text[locale]}</h2>;
}
