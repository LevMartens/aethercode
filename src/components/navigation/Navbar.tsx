"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../ThemeToggle";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#solution", label: "Solution" },
  { href: "#demo", label: "Demo" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        scrolled ? "border-b" : ""
      )}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold">
          AetherCode
        </Link>
        <div className="hidden gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm hover:opacity-80"
            >
              {item.label}
            </a>
          ))}
        </div>
        <Link
          href="/lev-portfolio"
          className="rounded-full border px-3 py-1 text-xs hover:bg-accent"
        >
          Lev Portfolio
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
