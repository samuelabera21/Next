"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const currentTheme = theme ?? "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card transition hover:bg-accent"
      aria-label="Toggle theme"
    >
      {currentTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
