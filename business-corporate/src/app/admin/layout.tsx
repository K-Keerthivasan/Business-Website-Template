import type { Metadata } from "next";
import { AdminNav } from "@/components/admin/admin-nav";

export const metadata: Metadata = {
  title: "Admin",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fdf9ef_0%,#f3ebdc_100%)] dark:bg-[linear-gradient(180deg,#07101c_0%,#0a1628_100%)]">
      <div className="container-shell grid gap-8 py-8 lg:grid-cols-[260px_1fr]">
        <AdminNav />
        <div>{children}</div>
      </div>
    </div>
  );
}
