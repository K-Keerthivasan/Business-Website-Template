"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/mock-data";

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4800);

    return () => window.clearInterval(interval);
  }, []);

  const active = testimonials[activeIndex];

  return (
    <div className="panel-luxury relative overflow-hidden p-8 md:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.2),transparent_22%)]" />
      <AnimatePresence mode="wait">
        <motion.div
          key={active.author}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative"
        >
          <p className="max-w-4xl text-2xl leading-relaxed text-foreground md:text-3xl dark:text-white">
            "{active.quote}"
          </p>
          <div className="mt-8 flex items-center justify-between gap-6">
            <div>
              <p className="text-lg text-primary">{active.author}</p>
              <p className="text-sm uppercase tracking-[0.24em] text-foreground/55 dark:text-white/55">
                {active.title}
              </p>
            </div>
            <div className="flex gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.author}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-10 bg-primary"
                      : "w-2.5 bg-black/18 dark:bg-white/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
