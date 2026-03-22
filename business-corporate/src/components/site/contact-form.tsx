"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const fields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "Alex Morgan",
  },
  {
    name: "email",
    label: "Work Email",
    type: "email",
    placeholder: "alex@northlineadvisory.com",
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    placeholder: "Northline Advisory",
  },
  {
    name: "service",
    label: "Interested Service",
    type: "text",
    placeholder: "Corporate Website Relaunch",
  },
] as const;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(() => {
    setSubmitted(true);
    reset();
    window.setTimeout(() => setSubmitted(false), 2400);
  });

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {fields.map((field, index) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="space-y-2"
        >
          <Label htmlFor={field.name} className="text-foreground/78">
            {field.label}
          </Label>
          <Input
            id={field.name}
            type={field.type}
            placeholder={field.placeholder}
            {...register(field.name)}
            className="h-12 rounded-2xl border-[rgba(10,22,40,0.12)] bg-white/70 px-4 text-foreground placeholder:text-foreground/35 focus-visible:border-primary dark:border-white/14 dark:bg-white/6 dark:text-white dark:placeholder:text-white/35"
          />
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.35 }}
        className="space-y-2"
      >
        <Label htmlFor="message" className="text-foreground/78">
          Project Brief
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          className="min-h-36 rounded-3xl border-[rgba(10,22,40,0.12)] bg-white/70 px-4 py-3 text-foreground placeholder:text-foreground/35 focus-visible:border-primary dark:border-white/14 dark:bg-white/6 dark:text-white dark:placeholder:text-white/35"
          placeholder="Tell us about the repositioning, relaunch, or campaign outcome your team is aiming for."
        />
      </motion.div>
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <Button
          type="submit"
          className="h-12 rounded-full bg-primary px-6 text-sm uppercase tracking-[0.22em] text-primary-foreground hover:bg-primary/90"
        >
          Submit Enquiry
        </Button>
        <p className="text-sm text-foreground/60 dark:text-white/58">
          Mock submission flow ready for Supabase wiring.
        </p>
      </div>
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-200"
        >
          Enquiry staged successfully. Connect this handler to Supabase or Resend next.
        </motion.div>
      ) : null}
    </form>
  );
}
