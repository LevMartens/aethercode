export function Footer() {
  return (
    <footer className="border-t py-10 text-center text-sm text-muted-foreground">
      <div className="mx-auto max-w-6xl px-4">
        © {new Date().getFullYear()} AetherCode Pty Ltd · ABN TBD · Built with
        Next.js
      </div>
    </footer>
  );
}
