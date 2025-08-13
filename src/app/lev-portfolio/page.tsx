import { Navbar } from "@/components/navigation/Navbar";
import { Section } from "@/components/sections/Section";

export default function LevPortfolio() {
  return (
    <main>
      <Navbar />
      <Section id="lev" className="pt-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl md:text-5xl font-bold">Lev — Portfolio</h1>
          <p className="mt-4 text-muted-foreground">
            Founder at AetherCode. This page doubles as our founder bio for
            client pitches and my personal portfolio for roles. Public work
            samples include Nørish and screenshots of products built while
            employed at other companies (clearly credited).
          </p>
          <div className="mt-10 space-y-6">
            <section>
              <h2 className="text-xl font-semibold">Highlights</h2>
              <ul className="mt-3 list-disc pl-6 text-sm md:text-base">
                <li>
                  High-traffic web & mobile UIs used by millions globally.
                </li>
                <li>
                  White‑label AI nutrition engine (Nørish) – Firebase + RN.
                </li>
                <li>
                  Rapid brandable deployments for meal‑prep & fitness brands.
                </li>
              </ul>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
