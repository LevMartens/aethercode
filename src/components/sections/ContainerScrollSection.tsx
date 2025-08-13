"use client";
import { motion } from "framer-motion";

/** Placeholder for Aceternity ContainerScroll */
export function ContainerScrollSection() {
  return (
    <div className="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-2 md:items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold">
          From idea to launch fast
        </h2>
        <p className="mt-4 text-muted-foreground">
          We package brand, content, and integrations so you can launch a
          nutrition app without hiring a dev team. Designed to be rebranded in
          hours, not weeks.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="aspect-video rounded-xl border bg-muted"
      >
        {/* Replace with the real ContainerScroll visuals later */}
      </motion.div>
    </div>
  );
}
