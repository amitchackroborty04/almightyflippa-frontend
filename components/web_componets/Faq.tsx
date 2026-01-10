import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

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
    <section className="relative w-full bg-black px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-[#FBB41D]">Got questions?</span>
          </h2>
          <p className="text-lg text-[#E7E7E7] max-w-2xl mx-auto">
            Find answers to common questions about Aspiring Legal Network and how it can support you at every stage of
            your journey.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`item-${idx}`}
              className="border border-[#FFFF00] rounded-lg px-5  data-[state=open]:border-[#FFFF00] transition-colors"
            >
              <AccordionTrigger className="text-left font-medium  transition-colors py-4">
                <div className="flex items-center gap-3 flex-1 pb-1">
                  <span className="">
                    <Image src="/assets/queation.png" alt="Phone Mockup" width={1000} height={1000} className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] object-cover" />
                  </span>
                  <span className="text-[#FFFFFF] text-sm md:text-[18px] font-medium ">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[#131313] text-xs md:text-base pt-2 pb-4 bg-[#E7E7E7] py-2 px-4 ">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
