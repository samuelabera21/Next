"use client";

import { ThemeProvider } from "next-themes";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/lib/content";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function Providers({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "en";
    }

    const saved = window.localStorage.getItem("locale") as Locale | null;
    return saved === "am" ? "am" : "en";
  });

  useEffect(() => {
    window.localStorage.setItem("locale", locale);
  }, [locale]);

  const updateLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
  };

  const languageValue = useMemo(
    () => ({ locale, setLocale: updateLocale }),
    [locale],
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageContext.Provider value={languageValue}>
        {children}
      </LanguageContext.Provider>
    </ThemeProvider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within Providers");
  }
  return context;
}
