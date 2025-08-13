export function ContactSection() {
  return (
    <div className="mx-auto max-w-2xl px-6">
      <h3 className="text-2xl md:text-4xl font-semibold">Book a demo</h3>
      <p className="mt-3 text-muted-foreground">
        Tell us about your brand and we’ll share a tailored demo.
      </p>

      {/* Tally embed (replace with your form URL later) */}
      <div className="mt-6 rounded-xl border">
        <iframe
          src="https://tally.so/r/your-form-id?transparentBackground=1"
          width="100%"
          height="520"
          title="Book a demo"
          className="rounded-xl"
        />
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Prefer email?{" "}
        <a className="underline" href="mailto:lev@aethercode.com.au">
          lev@aethercode.com.au
        </a>
      </p>
    </div>
  );
}
