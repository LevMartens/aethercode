"use client";
import { motion } from "framer-motion";

/**
 * Placeholder for Aceternity UI's HeroParallax.
 * Swap implementation later with actual component markup.
 */
export function HeroParallaxSection() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Custom AI & Mobile Apps for Health, Fitness & Nutrition
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 max-w-2xl text-lg text-muted-foreground"
      >
        Launch a branded nutrition tracker in weeks. White‑label Nørish, rapid
        rebrands, and deep integrations.
      </motion.p>
      <div className="mt-8 flex gap-3">
        <a
          href="#services"
          className="rounded-md bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
        >
          Our Services
        </a>
        <a href="#work" className="rounded-md border px-4 py-2">
          See Work
        </a>
      </div>
    </div>
  );
}
