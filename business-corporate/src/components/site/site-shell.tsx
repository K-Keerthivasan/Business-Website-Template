"use client";

import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { DemoBanner } from "@/components/site/demo-banner";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { primaryNav } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const isActiveLink = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <div className="relative min-h-screen overflow-hidden pt-12 md:pb-9">
      <DemoBanner />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(10,22,40,0.08),transparent_28%)] dark:bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(248,246,241,0.08),transparent_24%)]" />
      <header className="sticky top-12 z-40 border-b border-[rgba(10,22,40,0.08)] bg-[#f8f6f1]/72 backdrop-blur-xl dark:border-white/10 dark:bg-[#091120]/70">
        <div className="container-shell flex items-center justify-between gap-4 py-4 sm:gap-6 sm:py-5">
          <Link href="/" className="min-w-0 flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/45 bg-primary/10 font-heading text-base text-primary sm:size-11 sm:text-lg">K2</div>
            <div className="min-w-0">
              <div className="truncate text-[11px] uppercase tracking-[0.28em] text-primary sm:text-sm sm:tracking-[0.36em]">K2 Digital Media</div>
              <div className="hidden text-xs text-foreground/55 sm:block">Corporate template boilerplate</div>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-2 md:flex">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm text-foreground/70 transition hover:bg-black/5 hover:text-foreground dark:hover:bg-white/8",
                    isActiveLink(item.href) && "bg-black/5 text-foreground dark:bg-white/10 dark:text-white",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden" aria-label="Open navigation menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(88vw,24rem)] border-l border-[rgba(10,22,40,0.08)] bg-[#f8f6f1]/96 px-0 dark:border-white/10 dark:bg-[#091120]/96">
                <SheetHeader className="border-b border-[rgba(10,22,40,0.08)] px-6 py-5 dark:border-white/10">
                  <SheetTitle className="text-xl">Navigation</SheetTitle>
                  <SheetDescription>Browse the main site sections.</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-2 px-4 py-5">
                  {primaryNav.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "rounded-2xl px-4 py-3 text-base text-foreground/78 transition hover:bg-black/5 hover:text-foreground dark:hover:bg-white/8",
                          isActiveLink(item.href) && "bg-black/5 text-foreground dark:bg-white/10 dark:text-white",
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="relative z-10 flex-1 pb-24 md:pb-0">{children}</main>
      <footer className="border-t border-[rgba(10,22,40,0.08)] bg-[#f4efe4]/70 dark:border-white/10 dark:bg-[#08101d]/85">
        <div className="container-shell grid gap-10 py-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-primary">K2 Digital Media</p>
            <h2 className="mt-4 text-3xl">Built for firms that want gravitas without sacrificing conversion.</h2>
          </div>
          <div className="grid gap-4 text-sm text-foreground/68">
            <p>Refined luxury aesthetic with a Next.js App Router foundation, shadcn primitives, mock admin workflows, and motion-ready sections.</p>
            <Link href="/admin" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-primary">
              Enter admin experience
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
