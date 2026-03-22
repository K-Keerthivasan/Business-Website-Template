import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";

export const metadata: Metadata = {
  title: "Contact",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@k2digitalmedia.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (416) 555-0189",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Toronto, Ontario | Serving North America",
  },
] as const;

export default function ContactPage() {
  return (
    <div className="container-shell py-16 md:py-24">
      <div className="grid overflow-hidden rounded-[36px] border border-[rgba(10,22,40,0.1)] bg-white/72 dark:border-white/10 dark:bg-[#08101d]/75 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-luxury-mesh relative border-b border-[rgba(10,22,40,0.08)] px-8 py-12 dark:border-white/10 lg:border-r lg:border-b-0 lg:px-12 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.52),transparent_22%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(248,246,241,0.12),transparent_22%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Contact</p>
            <h1 className="mt-6 text-5xl leading-[0.96] md:text-6xl">
              Bring us in when the website needs to feel credible before the first call.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-foreground/70 dark:text-white/70">
              Use this split layout for premium inbound conversion: atmospheric left panel, clear form flow on the right.
            </p>
            <div className="mt-12 grid gap-4 text-sm">
              {contactDetails.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[22px] border border-[rgba(10,22,40,0.08)] bg-white/55 px-4 py-4 dark:border-white/10 dark:bg-white/6"
                >
                  <div className="flex items-center gap-3 text-primary">
                    <item.icon className="size-4" />
                    <span className="text-xs uppercase tracking-[0.24em]">{item.label}</span>
                  </div>
                  <p className="mt-3 text-base text-foreground/78 dark:text-white/78">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-8 py-12 lg:px-12 lg:py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Project Enquiry</p>
          <h2 className="mt-4 text-3xl">Tell us what needs to change.</h2>
          <p className="mt-4 max-w-2xl text-foreground/66 dark:text-white/66">
            The form uses animated fields and realistic placeholders so the page feels production-ready.
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
