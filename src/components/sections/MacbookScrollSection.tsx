"use client";
import { motion } from "framer-motion";

/** Placeholder for Aceternity MacbookScroll */
export function MacbookScrollSection() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl md:text-3xl font-semibold"
      >
        Product demo
      </motion.h3>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="aspect-video rounded-xl border bg-muted" />
        <div className="aspect-video rounded-xl border bg-muted" />
      </div>
      <p className="mt-4 text-muted-foreground">
        Drop in your screen recordings or replace this component with
        Aceternity’s MacbookScroll.
      </p>
    </div>
  );
}
