import { ContentEditorPanel } from "@/components/admin/content-editor-panel";

export default function ContentPage() {
  return (
    <div className="space-y-8">
      <section className="panel-luxury p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.36em] text-primary">Content Editor</p>
        <h1 className="mt-4 text-4xl md:text-5xl">Edit hero messaging, services, and team content from one panel.</h1>
        <p className="mt-4 max-w-3xl text-foreground/66">
          This tabbed CRUD-style panel gives the template a realistic starting point for future Supabase-backed publishing.
        </p>
      </section>
      <ContentEditorPanel />
    </div>
  );
}
