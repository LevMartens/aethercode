"use client";
import { motion } from "framer-motion";

/** Placeholder for Aceternity LinkPreview */
const LINKS = [
  { title: "Nørish", href: "#", desc: "AI meal logging demo" },
  { title: "Client Case A", href: "#", desc: "White‑label launch" },
  {
    title: "Lev Portfolio",
    href: "/lev-portfolio",
    desc: "Founder bio & work",
  },
];

export function LinkPreviewGrid() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <h3 className="text-2xl md:text-4xl font-semibold">Selected work</h3>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {LINKS.map((l, i) => (
          <motion.a
            key={l.title}
            href={l.href}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-xl border p-6 hover:bg-muted"
          >
            <div className="font-medium">{l.title}</div>
            <p className="mt-1 text-sm text-muted-foreground">{l.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
