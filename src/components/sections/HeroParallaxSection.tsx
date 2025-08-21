"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
  {
    title: "Nørish — AI meal logging",
    link: "#work",
    thumbnail: "/norish2.png",
  },
  {
    title: "White-label demo (Meal-Prep)",
    link: "#demo",
    thumbnail: "medisync-chat.png",
  },
  {
    title: "Coach dashboard",
    link: "#services",
    thumbnail: "norish-1.png",
  },
  {
    title: "iOS listing",
    link: "#work",
    thumbnail: "lunaflow.png",
  },
  {
    title: "Android listing",
    link: "#work",
    thumbnail: "norish2.png",
  },
  {
    title: "Brand system",
    link: "#services",
    thumbnail: "medisync-chat.png",
  },
  {
    title: "iOS listing",
    link: "#work",
    thumbnail: "lunaflow.png",
  },
  // add up to 15 to fill rows nicely
];

export function HeroParallaxSection() {
  return <HeroParallax products={products} />;
}
