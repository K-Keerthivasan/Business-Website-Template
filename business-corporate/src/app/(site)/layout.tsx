import type { Metadata } from "next";
import { SiteShell } from "@/components/site/site-shell";

export const metadata: Metadata = {
  title: "Luxury Corporate Template",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell>{children}</SiteShell>;
}
