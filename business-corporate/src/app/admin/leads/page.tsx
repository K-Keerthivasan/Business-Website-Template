import { LeadsManager } from "@/components/admin/leads-manager";

export default function LeadsPage() {
  return (
    <div className="space-y-8">
      <section className="panel-luxury p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.36em] text-primary">Leads Manager</p>
        <h1 className="mt-4 text-4xl md:text-5xl">Sortable pipeline with in-context lead review.</h1>
        <p className="mt-4 max-w-3xl text-foreground/66">
          The drawer updates status locally, giving the admin section a working interaction model without requiring live Supabase records yet.
        </p>
      </section>
      <LeadsManager />
    </div>
  );
}
