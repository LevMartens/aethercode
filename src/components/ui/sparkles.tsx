// src/components/ui/sparkles.tsx
"use client";
import React, { useId, useState, useEffect, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "motion/react";

// NEW: tiny in-view hook
function useInViewOnce<T extends HTMLElement>(rootMargin = "0px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { rootMargin }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [rootMargin]);
  return { ref, inView };
}

export const SparklesCore = (props: {
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}) => {
  const {
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const controls = useAnimation();
  const [ready, setReady] = useState(false);
  const { ref, inView } = useInViewOnce<HTMLDivElement>("200px"); // preload slightly before visible

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, transition: { duration: 0.6 } });
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      className={className}
    >
      {/* Mount ONLY when near/in view */}
      {ready && inView && (
        <Particles
          className="h-full w-full"
          options={{
            background: { color: { value: background || "transparent" } },
            fullScreen: { enable: false, zIndex: 1 },
            fpsLimit: 60,
            interactivity: {
              events: {
                resize: { enable: true },
                onClick: { enable: false, mode: [] }, // keep off to save CPU
                onHover: { enable: false, mode: [] },
              },
            },
            particles: {
              number: {
                value: Math.min(particleDensity ?? 300, 400),
                density: { enable: true, width: 400, height: 400 },
              },
              size: { value: { min: minSize ?? 0.6, max: maxSize ?? 1.6 } },
              move: {
                enable: true,
                direction: "none",
                speed: { min: 0.1, max: speed ?? 0.8 },
              },
              color: { value: particleColor || "#ffffff" },
              links: { enable: false },
              opacity: {
                value: { min: 0.1, max: 1 },
                animation: {
                  enable: true,
                  speed: speed ?? 0.8,
                  sync: false,
                  startValue: "random",
                },
              },
              shape: { type: "circle" },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
