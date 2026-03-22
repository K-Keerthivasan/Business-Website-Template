"use client";

import { useMemo, useState } from "react";
import { ArrowUpDown, Mail, Phone } from "lucide-react";
import { enquiries, type Enquiry, type LeadStatus } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type SortKey = "name" | "company" | "date" | "status";

const statusClasses: Record<LeadStatus, string> = {
  New: "border-emerald-400/30 bg-emerald-500/15 text-emerald-700 dark:border-emerald-300/20 dark:text-emerald-200",
  Contacted: "border-amber-400/30 bg-amber-500/15 text-amber-700 dark:border-amber-300/20 dark:text-amber-100",
  Closed: "border-slate-400/30 bg-slate-500/15 text-slate-600 dark:border-slate-300/20 dark:text-slate-200",
};

export function LeadsManager() {
  const [leads, setLeads] = useState<Enquiry[]>([...enquiries]);
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(
    enquiries[0]?.id ?? null,
  );
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const selectedLead = leads.find((lead) => lead.id === selectedLeadId) ?? null;

  const sortedLeads = useMemo(() => {
    return [...leads].sort((a, b) => {
      const first = a[sortKey];
      const second = b[sortKey];
      const direction = sortDirection === "asc" ? 1 : -1;
      return String(first).localeCompare(String(second)) * direction;
    });
  }, [leads, sortDirection, sortKey]);

  function toggleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDirection((current) => (current === "asc" ? "desc" : "asc"));
      return;
    }

    setSortKey(key);
    setSortDirection("asc");
  }

  function updateStatus(status: LeadStatus) {
    if (!selectedLeadId) return;

    setLeads((current) =>
      current.map((lead) => (lead.id === selectedLeadId ? { ...lead, status } : lead)),
    );
  }

  return (
    <>
      <div className="overflow-hidden rounded-[28px] border border-border bg-card">
        <table className="w-full text-left">
          <thead className="bg-muted text-xs uppercase tracking-[0.24em] text-muted-foreground">
            <tr>
              {(["name", "company", "date", "status"] as const).map((key) => (
                <th key={key} className="px-6 py-4">
                  <button
                    type="button"
                    onClick={() => toggleSort(key)}
                    className="inline-flex items-center gap-2 hover:text-foreground"
                  >
                    {key}
                    <ArrowUpDown className="size-3.5" />
                  </button>
                </th>
              ))}
              <th className="px-6 py-4">service</th>
            </tr>
          </thead>
          <tbody>
            {sortedLeads.map((lead) => (
              <tr
                key={lead.id}
                className="border-t border-border text-sm text-foreground/78 transition hover:bg-muted/50"
              >
                <td className="px-6 py-4">
                  <button
                    type="button"
                    onClick={() => setSelectedLeadId(lead.id)}
                    className="text-left"
                  >
                    <div className="font-medium text-foreground">{lead.name}</div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {lead.id}
                    </div>
                  </button>
                </td>
                <td className="px-6 py-4">{lead.company}</td>
                <td className="px-6 py-4">{lead.date}</td>
                <td className="px-6 py-4">
                  <Badge variant="outline" className={statusClasses[lead.status]}>
                    {lead.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-foreground/60">{lead.service}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Sheet
        open={Boolean(selectedLead)}
        onOpenChange={(open) => !open && setSelectedLeadId(null)}
      >
        <SheetContent
          side="right"
          className="w-full border-l border-border bg-popover p-0 sm:max-w-xl"
        >
          {selectedLead ? (
            <>
              <SheetHeader className="border-b border-border p-8">
                <SheetTitle className="text-3xl">{selectedLead.name}</SheetTitle>
                <SheetDescription className="text-muted-foreground">
                  {selectedLead.company} &middot; {selectedLead.service}
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-8 p-8">
                <div className="grid gap-4 rounded-[24px] border border-border bg-muted/50 p-5 text-sm">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Mail className="size-4 text-primary" />
                    {selectedLead.email}
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="size-4 text-primary" />
                    Priority budget: {selectedLead.budget}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-primary">
                    Lead Notes
                  </p>
                  <p className="mt-3 text-foreground/74">{selectedLead.notes}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-primary">
                    Update Status
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {(["New", "Contacted", "Closed"] as const).map((status) => (
                      <Button
                        key={status}
                        type="button"
                        variant={selectedLead.status === status ? "default" : "outline"}
                        onClick={() => updateStatus(status)}
                        className={
                          selectedLead.status === status
                            ? "rounded-full bg-primary px-5 text-primary-foreground hover:bg-primary/90"
                            : "rounded-full px-5"
                        }
                      >
                        {status}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </SheetContent>
      </Sheet>
    </>
  );
}
