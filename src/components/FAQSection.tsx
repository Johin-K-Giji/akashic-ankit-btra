import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is an Akashic Record?",
    answer:
      "The Akashic Records are believed to be a cosmic library that contains the history of every soul's journey through all of its lifetimes. It holds information about your past, present, and potential future, as well as insights into your life purpose, karmic patterns, and spiritual growth.",
  },
  {
    question: "Is the workshop live?",
    answer:
      "Yes, the workshop is conducted live over 3 days from 20th to 22nd January 2026. You will interact directly with Dr. Geetanjali V Saxena and fellow participants. Live Q&A sessions are included to address your specific questions.",
  },
  {
    question: "How can this workshop impact my professional life?",
    answer:
      "This workshop can significantly enhance your healing practice by providing you with advanced tools to understand your clients' core issues, karmic patterns, and soul contracts. It can help you differentiate yourself in the market, attract more clients, and increase your income as a healer.",
  },
  {
    question: "Who should attend the Akashic Miracles Masterclass?",
    answer:
      "This masterclass is ideal for Reiki practitioners, energy healers, spiritual coaches, therapists, psychologists, tarot card readers, and anyone looking to upskill their healing abilities or start a new career in holistic healing.",
  },
  {
    question: "What will I receive after completing the workshop?",
    answer:
      "After completing the workshop, you will receive comprehensive knowledge about Akashic Records, practical techniques to access them, and the ability to help your clients heal deeply. You'll also gain access to our exclusive WhatsApp community for ongoing support.",
  },
  {
    question: "Do I need any prior experience in healing?",
    answer:
      "While prior experience in healing modalities can be helpful, it is not mandatory. The workshop is designed to accommodate both beginners and experienced practitioners. Dr. Geetanjali explains concepts from the basics to advanced levels.",
  },
];

const FAQSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToForm = () => {
    const el = document.getElementById("registration-form");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={ref} className="relative overflow-hidden py-14 bg-[#73713E]">
      <div className="container relative max-w-4xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl md:text-4xl font-extrabold text-[#fff]">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ ACCORDION */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="
                  bg-white rounded-2xl
                  border border-[#73713E]/20
                  px-5 shadow-sm
                "
              >
                <AccordionTrigger
                  className="
                    text-left py-4
                    font-semibold text-[#73713E]
                    hover:text-[#73713E]
                    text-sm md:text-base
                  "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-4 text-sm leading-relaxed text-[#73713E]/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.5 }}
          className="text-center mt-10"
        >
       
        </motion.div>

      </div>
    </section>
  );
};

export default FAQSection;
