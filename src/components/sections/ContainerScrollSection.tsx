"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function ContainerScrollSection() {
  return (
    <div className="flex flex-col overflow-visible pt-4">
      <ContainerScroll
        titleComponent={
          <div className="mx-auto max-w-3xl ">
            <h1 className="mt-0 text-4xl font-semibold">
              Launch your branded nutrition app
              <br />
              <span className="mt-1 inline-block text-4xl leading-none md:text-[5.5rem] font-bold">
                <span className="sr-only">Scroll Animations</span>
                <div className="h-10 md:h-16">
                  {/* <TextHoverEffect text="In Weeks, Not Months" /> */}
                </div>
              </span>
            </h1>
            <p className="mt-4 text-muted-foreground">
              White-label Nørish, rapid rebrands, and deep integrations without
              hiring an in-house team.
            </p>
          </div>
        }
      >
        {/* Replace this with your own asset, e.g. /public/linear.webp */}
        <Image
          src="/linear.webp"
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
