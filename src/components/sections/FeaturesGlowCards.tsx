"use client";
import { motion } from "framer-motion";

/** Placeholder for Aceternity GlowingEffect on cards */
const FEATURES = [
  {
    title: "White‑label Nørish",
    body: "Your branding, your App Store listings, our engine.",
  },
  { title: "Rapid Rebrands", body: "Swap colours, copy, and assets in hours." },
  {
    title: "Integrations",
    body: "Stripe, Firebase, webhooks, coach dashboards, and more.",
  },
];

export function FeaturesGlowCards() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <h3 className="text-2xl md:text-4xl font-semibold">Services</h3>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-xl border p-6 shadow-sm hover:shadow-md"
          >
            <div className="text-lg font-medium">{f.title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
