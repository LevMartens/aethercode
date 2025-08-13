"use client";
import { motion } from "framer-motion";

/** Placeholder for Aceternity FloatingDock */
export function FloatingDockSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky bottom-4 mx-auto flex w-full justify-center px-4"
    >
      <div className="rounded-full border bg-background/80 backdrop-blur px-4 py-2 shadow-lg">
        <a href="#services" className="px-3 text-sm">
          Services
        </a>
        <span className="mx-2 opacity-40">·</span>
        <a href="/lev-portfolio" className="px-3 text-sm">
          Founder
        </a>
        <span className="mx-2 opacity-40">·</span>
        <a href="#work" className="px-3 text-sm">
          Work
        </a>
        <span className="mx-2 opacity-40">·</span>
        <a href="#contact" className="px-3 text-sm">
          Book a demo
        </a>
      </div>
    </motion.div>
  );
}
