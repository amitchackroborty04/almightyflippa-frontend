import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "It has survived not only five centuries, but also the leap into electron?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "It has survived not only five centuries, but also the leap into electron?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "It has survived not only five centuries, but also the leap into electron?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "It has survived not only five centuries, but also the leap into electron?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "It has survived not only five centuries, but also the leap into electron?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      question: "It has survived not only five centuries, but also the leap into electron?",
      answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ]

  return (
    <section className="relative w-full bg-background px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Got questions?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Aspiring Legal Network and how it can support you at every stage of
            your journey.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border border-border rounded-lg px-6 data-[state=open]:bg-card/50 data-[state=open]:border-primary transition-colors"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-colors py-4">
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-primary text-lg flex-shrink-0">❓</span>
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2 pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
