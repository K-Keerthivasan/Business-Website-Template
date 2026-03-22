"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote, Star } from "lucide-react";
import { AnimatedSection } from "@/components/site/animated-section";
import { SectionHeading } from "@/components/site/section-heading";
import { TestimonialsCarousel } from "@/components/site/testimonials-carousel";
import { Button } from "@/components/ui/button";
import { services, team } from "@/lib/mock-data";

const heroMetrics = [
  ["42%", "Average lift in qualified enquiries after relaunch"],
  ["12", "Board-facing websites launched in the last year"],
  ["4.9/5", "Average client satisfaction across strategy and delivery"],
] as const;

export default function HomePage() {
  return (
    <div className="pb-20">
      <section className="container-shell pt-14 pb-18 md:pt-24">
        <div className="bg-luxury-mesh panel-luxury relative overflow-hidden px-8 py-16 md:px-14 md:py-24">
          <div className="absolute inset-y-0 right-0 hidden w-[34%] border-l border-[rgba(10,22,40,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.4),transparent)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(248,246,241,0.08),transparent)] lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/8 to-transparent" />
          <div className="relative grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xs uppercase tracking-[0.42em] text-primary"
              >
                Editorial websites for modern firms
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.08 }}
                className="mt-6 max-w-5xl text-5xl leading-[0.94] md:text-7xl"
              >
                We craft <span className="text-gold-gradient">prestige-first</span> digital systems that make serious companies look inevitable.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.18 }}
                className="mt-8 max-w-2xl text-lg text-foreground/72 md:text-xl dark:text-white/72"
              >
                Cinematic storytelling, conversion architecture, and boardroom-grade messaging for consultancies, advisory firms, and premium B2B operators.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button asChild className="h-12 rounded-full bg-primary px-6 text-sm uppercase tracking-[0.22em] text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">
                    Book Consultation
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 rounded-full border-[rgba(10,22,40,0.12)] bg-white/60 px-6 text-sm uppercase tracking-[0.22em] text-foreground hover:bg-white dark:border-white/12 dark:bg-white/6 dark:text-white dark:hover:bg-white/10"
                >
                  <Link href="/services">View Services</Link>
                </Button>
              </motion.div>
            </div>
            <div className="grid gap-4 self-end lg:pl-8">
              {heroMetrics.map(([value, label], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: 0.22 + index * 0.1 }}
                  className="rounded-[28px] border border-[rgba(10,22,40,0.1)] bg-white/72 p-6 dark:border-white/10 dark:bg-[#08101d]/70"
                >
                  <p className="text-4xl text-primary">{value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.22em] text-foreground/58 dark:text-white/58">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="container-shell py-16" delay={0.05}>
        <SectionHeading
          eyebrow="Capabilities"
          title="Signature services designed for firms that sell trust, expertise, and transformation."
          description="Each service line is packaged to look elevated on the surface and work commercially underneath."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.28 }}
              className="group panel-luxury p-7"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl border border-primary/35 bg-primary/10">
                <service.icon className="size-6 text-primary" />
              </div>
              <h3 className="mt-6 text-2xl transition group-hover:text-primary">
                {service.title}
              </h3>
              <p className="mt-4 text-foreground/68 dark:text-white/68">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell py-16" delay={0.1}>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Leadership"
            title="A senior team built to balance strategy, design taste, and delivery discipline."
            description="The template includes realistic executive bios so the site feels launch-ready instead of skeletal."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {team.map((member) => (
              <div key={member.name} className="rounded-[28px] border border-[rgba(10,22,40,0.1)] bg-white/70 p-6 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center justify-between">
                  <p className="text-xl">{member.name}</p>
                  <Star className="size-4 text-primary" />
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-primary">
                  {member.role}
                </p>
                <p className="mt-4 text-foreground/66 dark:text-white/66">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell py-16" delay={0.12}>
        <SectionHeading
          eyebrow="Social Proof"
          title="Client feedback with enough specificity to feel believable on day one."
          align="center"
        />
        <div className="mt-12">
          <TestimonialsCarousel />
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell py-16" delay={0.15}>
        <div className="panel-luxury bg-[linear-gradient(135deg,rgba(201,168,76,0.2),rgba(255,255,255,0.45))] px-8 py-12 dark:bg-[linear-gradient(135deg,rgba(201,168,76,0.16),rgba(9,17,32,0.22))] md:px-14 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-primary">Next Step</p>
              <h2 className="mt-4 max-w-3xl text-4xl md:text-5xl">
                Ready to turn a generic corporate site into an asset that looks expensive and sells confidence?
              </h2>
            </div>
            <Button asChild className="h-12 rounded-full bg-primary px-6 text-sm uppercase tracking-[0.22em] text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Start a Project
                <Quote className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
