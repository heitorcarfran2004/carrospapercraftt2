import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/content";
import ScrollCta from "@/components/ScrollCta";

const Faq = () => {
  return (
    <section className="bg-card px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-10 text-4xl font-bold text-foreground md:text-5xl">Dúvidas?</h2>

        <Accordion type="single" collapsible className="text-left">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              value={`item-${i}`}
              className="border-craft-dashed mb-3 rounded-xl border-b-0 bg-white px-4"
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12">
          <ScrollCta>QUERO COMEÇAR AGORA</ScrollCta>
        </div>
      </div>
    </section>
  );
};

export default Faq;
