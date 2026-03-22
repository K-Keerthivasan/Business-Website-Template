import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { adminQuickLinks, dashboardHighlights, enquiries, kpis } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <section className="panel-luxury p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.36em] text-primary">Dashboard</p>
        <h1 className="mt-4 text-4xl md:text-5xl">Operational visibility for a premium web presence.</h1>
        <p className="mt-4 max-w-3xl text-foreground/66">
          This admin surface includes KPI cards, recent enquiries, and shortcuts into editing workflows so the boilerplate feels useful immediately.
        </p>
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        {kpis.map((item) => (
          <div key={item.label} className="rounded-[28px] border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
              <item.icon className="size-5 text-primary" />
            </div>
            <p className="mt-5 text-4xl">{item.value}</p>
            <p className="mt-2 text-sm text-emerald-600 dark:text-emerald-400">{item.change} vs last month</p>
          </div>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-[30px] border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <h2 className="text-2xl">Recent Enquiries</h2>
            <Link href="/admin/leads" className="text-sm text-primary">
              View all
            </Link>
          </div>
          <div className="divide-y divide-border">
            {enquiries.slice(0, 4).map((lead) => (
              <div key={lead.id} className="flex flex-col gap-3 px-6 py-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-medium text-foreground">{lead.name}</p>
                  <p className="text-sm text-muted-foreground">{lead.company} &middot; {lead.service}</p>
                </div>
                <Badge variant="outline" className="w-fit">
                  {lead.status}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {dashboardHighlights.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{item.title}</p>
                <item.icon className="size-5 text-primary" />
              </div>
              <p className="mt-4 text-3xl">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        {adminQuickLinks.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="rounded-[28px] border border-border bg-card p-6 transition hover:border-primary/40 hover:bg-card/80"
          >
            <div className="flex items-center justify-between">
              <p className="text-xl">{item.title}</p>
              <item.icon className="size-4 text-primary" />
            </div>
            <p className="mt-4 text-muted-foreground">{item.description}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-primary">
              Open
              <ArrowUpRight className="size-4" />
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
