"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ContainerScrollSection() {
  return (
    <div className="flex flex-col overflow-visible ">
      <ContainerScroll
        titleComponent={
          <div className="mx-auto max-w-3xl">
            <h1 className="mt-0 text-4xl font-semibold">
              From concept to MVP in weeks
            </h1>
            <p className="mb-20 mt-4 text-muted-foreground">
              We build and ship functional prototypes fast. Test your ideas with
              real users before committing to full development.
            </p>
          </div>
        }
      >
        {/* Replace this with your own asset, e.g. /public/linear.webp */}
        <Image
          src="/Dashboard-1.png"
          alt="AetherCode product showcase"
          width={1400}
          height={720}
          className="mx-auto h-full rounded-2xl object-cover object-left-top"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}
