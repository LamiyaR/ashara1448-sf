import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { firstTimeTips, firstTimeTipsTitle } from "@/lib/data";

export function FirstTimeTips() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-6">
      <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
        {firstTimeTipsTitle}
      </h2>
      <Accordion type="single" collapsible className="mt-4">
        {firstTimeTips.map((tip) => (
          <AccordionItem key={tip.heading} value={tip.heading}>
            <AccordionTrigger className="text-left font-medium text-primary">
              {tip.heading}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {tip.body}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
