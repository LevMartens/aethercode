import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Section({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("scroll-mt-24 py-20 md:py-28", className)}
      {...props}
    />
  );
}
