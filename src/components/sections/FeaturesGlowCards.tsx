"use client";

import { Smartphone, Zap, Code, Sparkles, Rocket } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function FeaturesGlowCards() {
  return (
    <ul className="grid grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-12 md:grid-rows-3 md:gap-4 md:px-8 lg:gap-6 lg:px-12 xl:max-h-[34rem] xl:grid-rows-2 xl:px-30">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={
          <Smartphone className="h-4 w-4 text-black dark:text-neutral-400" />
        }
        title="Mobile-first design"
        description="Every app we build looks stunning on mobile. Because that's where your users actually are."
      />

      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Zap className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="AI-powered features"
        description="We integrate cutting-edge AI to make your apps smarter, not just prettier."
      />

      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Code className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Lightning-fast development"
        description="From idea to App Store in weeks, not months. We move at startup speed."
      />

      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="White-label solutions"
        description="Our proven apps, your brand. Skip the development time and launch faster."
      />

      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Rocket className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="MVP to scale"
        description="Start with a working prototype, evolve into a full product. We scale with you."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li
      className={`min-h-[12rem] sm:min-h-[13rem] md:min-h-[14rem] list-none ${area}`}
    >
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-4 sm:gap-5 md:gap-6 overflow-hidden rounded-xl p-5 sm:p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3 sm:gap-4">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-2 sm:space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-lg sm:text-xl md:text-2xl font-semibold text-balance text-black leading-tight dark:text-white">
                {title}
              </h3>
              <p className="font-sans text-sm sm:text-base md:text-base text-black leading-relaxed dark:text-neutral-400">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
