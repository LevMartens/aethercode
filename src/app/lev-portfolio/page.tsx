import { Navbar } from "@/components/navigation/Navbar";
import { Section } from "@/components/sections/Section";

interface NavItem {
  name: string;
  link: string;
}

const NAV_ITEMS: NavItem[] = [
  // { name: "Home", link: "#home" },
  // { name: "Solution", link: "#solution" },
  // { name: "Services", link: "#services" },
  // { name: "Contact", link: "#contact" },
];

export default function LevPortfolio() {
  return (
    <main>
      <Navbar items={NAV_ITEMS} />
      <Section id="lev" className="pt-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl md:text-5xl font-bold">
            Lev&apos;s Portfolio
          </h1>
          <p className="mt-4 text-muted-foreground">
            Founder at AetherCode & Software Engineer at Caesars Entertainment.
          </p>

          <div className="mt-10 space-y-6">
            <section>
              <h2 className="text-xl font-semibold">Recent Work</h2>
              <ul className="mt-3 space-y-2 text-sm md:text-base">
                <li>
                  Trading platform for 140+ Caesars traders managing dynamic
                  sports markets
                </li>
                <li>
                  Same Game Parlay UIs handling 300,000+ requests/minute during
                  Super Bowl
                </li>
                <li>Seven sportsbook brands at BetCloud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Tech Stack</h2>
              <p className="mt-3 text-sm md:text-base text-muted-foreground">
                React, React Native, Next.js, TypeScript, Go, Node.js, Firebase,
                Kubernetes, GraphQL
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Contact</h2>
              <div className="mt-3 space-x-4 text-sm">
                <a
                  href="mailto:levmartens@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  levmartens@gmail.com
                </a>
                <span className="text-muted-foreground">•</span>
                <a
                  href="https://levmartens.dev"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  levmartens.dev
                </a>
              </div>
            </section>
          </div>
        </div>
      </Section>
    </main>
  );
}
