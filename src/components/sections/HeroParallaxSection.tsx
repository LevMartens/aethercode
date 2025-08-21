"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";

const products = [
  {
    title: "Nørish — AI meal logging",
    link: "#work",
    thumbnail: "/medisync-basic.png",
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
    thumbnail: "medisync-chat.png",
  },
  {
    title: "Android listing",
    link: "#work",
    thumbnail: "medisync-chat.png",
  },
  {
    title: "Brand system",
    link: "#services",
    thumbnail: "medisync-chat.png",
  },
  // add up to 15 to fill rows nicely
];

export function HeroParallaxSection() {
  return <HeroParallax products={products} />;
}
