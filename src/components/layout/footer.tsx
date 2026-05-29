export function Footer() {
  return (
    <footer className="mt-8 border-t border-border bg-card">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-10 text-center">
        {/* Placeholder monogram — replace with the official Ashara 1448 logo
            at public/images/icons/ashara-logo.svg. */}
        <div
          className="flex size-14 items-center justify-center rounded-full border-2 border-primary text-primary"
          aria-hidden
        >
          <span className="font-serif text-lg font-semibold leading-none">
            1448
          </span>
        </div>

        <p className="font-serif text-base font-medium text-foreground">
          Ashara Mubaraka 1448H Relay Center — San Francisco Bay Area
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm">
          <a
            href="https://sanfrancisco.thedawoodibohras.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-secondary hover:underline"
          >
            sanfrancisco.thedawoodibohras.com
          </a>
        </div>

        <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
          This site is maintained by volunteers of Anjuman-e-Najmi for the
          benefit of mehmano. Information is updated as it becomes available.
        </p>
      </div>
    </footer>
  );
}
