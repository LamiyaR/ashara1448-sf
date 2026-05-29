import { faqs } from "@/lib/data";
import { InlineText } from "@/components/inline-text";

export function FaqSection() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h2 className="text-center font-serif text-2xl font-semibold text-foreground sm:text-3xl">
        General FAQ
      </h2>
      <div className="mt-6 flex flex-col gap-3">
        {faqs.map((f) => {
          const action = f.tone === "action";
          return (
            <div
              key={f.q}
              className={`rounded-lg border border-border border-l-4 bg-card p-4 ${
                action ? "border-l-secondary" : "border-l-primary"
              }`}
            >
              <p className="font-semibold text-foreground">{f.q}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                <InlineText text={f.a} />
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
