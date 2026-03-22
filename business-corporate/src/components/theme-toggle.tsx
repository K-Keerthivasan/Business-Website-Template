"use client";

import { useEffect, useState } from "react";
import { Moon, SunMedium } from "lucide-react";
import { Button } from "@/components/ui/button";

const storageKey = "k2-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    setTheme(root.classList.contains("dark") ? "dark" : "light");
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.toggle("dark", nextTheme === "dark");
    root.dataset.theme = nextTheme;
    localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="rounded-full border-[rgba(10,22,40,0.12)] bg-white/65 text-foreground hover:bg-white dark:border-white/12 dark:bg-white/6 dark:hover:bg-white/10"
    >
      {theme === "dark" ? (
        <SunMedium className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </Button>
  );
}
