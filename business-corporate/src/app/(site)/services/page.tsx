import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/site/animated-section";
import { SectionHeading } from "@/components/site/section-heading";
import { Button } from "@/components/ui/button";
import { pricingPlans, processTimeline, services } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <div className="container-shell py-16 md:py-24">
      <AnimatedSection className="max-w-5xl">
        <p className="text-xs uppercase tracking-[0.4em] text-primary">Services</p>
        <h1 className="mt-6 text-5xl leading-[0.96] md:text-7xl">
          Strategic digital services for firms that need elegance, clarity, and commercial sharpness.
        </h1>
        <p className="mt-8 max-w-3xl text-lg text-foreground/72 dark:text-white/72">
          This page combines oversized section headers, rich icon cards, a process timeline, and a premium pricing table so the template already feels like a real engagement site.
        </p>
      </AnimatedSection>

      <AnimatedSection className="mt-16" delay={0.05}>
        <SectionHeading
          eyebrow="Core Offers"
          title="Six flagship offers with enough depth to support a polished launch."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="panel-luxury flex flex-col gap-5 p-7">
              <div className="flex size-14 items-center justify-center rounded-2xl border border-primary/35 bg-primary/10">
                <service.icon className="size-6 text-primary" />
              </div>
              <h2 className="text-2xl">{service.title}</h2>
              <p className="text-foreground/68 dark:text-white/68">{service.description}</p>
            </article>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]" delay={0.1}>
        <SectionHeading
          eyebrow="Process"
          title="An advisory-grade delivery cadence."
          description="The timeline section gives service pages real structure instead of stacked blurbs."
        />
        <div className="space-y-5">
          {processTimeline.map((item) => (
            <div key={item.phase} className="panel-luxury relative overflow-hidden p-6">
              <div className="absolute inset-y-0 left-0 w-1 bg-primary" />
              <div className="pl-6">
                <p className="text-xs uppercase tracking-[0.3em] text-primary">{item.phase}</p>
                <h3 className="mt-3 text-2xl">{item.title}</h3>
                <p className="mt-3 text-foreground/66 dark:text-white/66">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="mt-20" delay={0.12}>
        <SectionHeading
          eyebrow="Engagement Models"
          title="Pricing presented with confidence rather than generic SaaS tropes."
          align="center"
        />
        <div className="mt-12 grid gap-5 xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.tier}
              className={`rounded-[30px] border p-8 ${
                plan.featured
                  ? "border-primary/50 bg-[linear-gradient(180deg,rgba(201,168,76,0.2),rgba(255,255,255,0.45))] dark:bg-[linear-gradient(180deg,rgba(201,168,76,0.18),rgba(248,246,241,0.04))]"
                  : "border-[rgba(10,22,40,0.1)] bg-white/70 dark:border-white/10 dark:bg-white/5"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.26em] text-primary">{plan.tier}</p>
              <p className="mt-5 text-5xl">{plan.price}</p>
              <p className="mt-4 text-foreground/68 dark:text-white/68">{plan.summary}</p>
              <ul className="mt-8 space-y-3 text-sm text-foreground/74 dark:text-white/74">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild className="h-12 rounded-full bg-primary px-6 text-sm uppercase tracking-[0.22em] text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">
              Request Proposal
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  );
}
