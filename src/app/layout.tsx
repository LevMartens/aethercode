import "@/app/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "AetherCode — Custom AI & Mobile Apps",
  description:
    "AetherCode builds custom AI & mobile apps for health, fitness, and nutrition brands. White‑label Nørish and rapid brandable deployments.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
