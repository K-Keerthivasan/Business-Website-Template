"use client";

import Link from "next/link";
import { LayoutDashboard, PencilLine, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const adminNav = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/leads", label: "Leads", icon: Users },
  { href: "/admin/content", label: "Content", icon: PencilLine },
] as const;

export function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className="panel-luxury h-fit p-5">
      <div className="flex items-center justify-between gap-3 border-b border-border pb-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-full border border-primary/40 bg-primary/12 font-heading text-lg text-primary">
            K2
          </div>
          <div>
            <div className="text-sm uppercase tracking-[0.34em] text-primary">Admin Panel</div>
            <div className="text-xs text-muted-foreground">Template back office</div>
          </div>
        </Link>
        <ThemeToggle />
      </div>
      <nav className="mt-5 space-y-2">
        {adminNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-foreground/70 transition hover:bg-black/5 hover:text-foreground dark:hover:bg-white/8 dark:hover:text-white",
              (pathname === item.href ||
                (item.href !== "/admin" && pathname.startsWith(item.href))) &&
                "bg-primary/10 text-foreground dark:text-white",
            )}
          >
            <item.icon className="size-4 text-primary" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
