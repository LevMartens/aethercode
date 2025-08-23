"use client";
import Link from "next/link";
import { useState } from "react";
import {
  NavbarX,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { ThemeToggle } from "../ThemeToggle";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

// Custom Logo Component
const AetherCodeLogo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <span className="font-semibold text-black dark:text-white">
        AetherCode
      </span>
    </Link>
  );
};

interface NavItem {
  name: string;
  link: string;
}

interface NavbarProps {
  items?: NavItem[];
}

export function Navbar({ items }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full ">
      <NavbarX className="fixed inset-x-0 top-0 z-50">
        {/* Desktop Navigation */}
        <NavBody className="backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
          <AetherCodeLogo />
          <NavItems items={items || []} />
          <div className="flex items-center gap-3">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 rounded-full border px-3 py-1 text-xs hover:bg-accent"
            >
              <Link href="/lev-portfolio">Lev&apos;s Portfolio</Link>
            </HoverBorderGradient>
            <ThemeToggle />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <MobileNavHeader>
            <AetherCodeLogo />
            <div className="flex items-center gap-3">
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="backdrop-blur supports-[backdrop-filter]:bg-background/95"
          >
            <div className="flex justify-end w-full">
              <ThemeToggle />
            </div>
            {(items || []).map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 text-sm hover:opacity-80"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4 pt-4 border-t border-border/40">
              <HoverBorderGradient
                containerClassName="rounded-full w-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2 rounded-full border px-3 py-2 text-xs hover:bg-accent w-full"
              >
                <Link
                  href="/lev-portfolio"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Lev&apos;s Portfolio
                </Link>
              </HoverBorderGradient>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </NavbarX>
    </div>
  );
}
