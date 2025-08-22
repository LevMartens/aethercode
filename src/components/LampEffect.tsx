"use client";
import React from "react";
import { LampContainer } from "@/components/ui/lamp";

export function Lamp({ children }: { children: React.ReactNode }) {
  return <LampContainer>{children}</LampContainer>;
}
