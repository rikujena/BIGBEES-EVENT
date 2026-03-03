import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes your market research different from others?",
    answer:
      "We combine traditional research methodologies with advanced data analytics and AI-driven insights. Our approach provides a 360-degree view of your market that goes beyond surface-level data, uncovering hidden opportunities and consumer insights that competitors often miss. We also provide actionable recommendations tailored to your specific business goals.",
  },
  {
    question: "How long does a typical brand strategy project take?",
    answer:
      "Our comprehensive brand strategy projects typically take 8-12 weeks, depending on the scope and complexity. We provide detailed timelines during our initial consultation and maintain regular checkpoints to ensure we're on track with your goals. The process includes discovery, research, strategy development, implementation planning, and measurement framework setup.",
  },
  {
    question: "Do you work with startups as well as established brands?",
    answer:
      "Absolutely! We tailor our approach to each client's stage and budget. For startups, we offer scaled-down packages focused on foundational brand positioning and market entry strategies. For established brands, we provide more comprehensive solutions including brand refresh, expansion strategies, and competitive analysis. We have flexible engagement models to suit different needs.",
  },
  {
    question: "What is included in the Gold and Diamond packages?",
    answer:
      "The Gold Package (₹10,000) includes gold category award consideration, VIP seating, networking opportunities, and certificate recognition. The Diamond Package (₹15,000) offers premium benefits including diamond category consideration, front-row seating, exclusive VIP networking dinner, stage recognition, featured mention in promotions, and a certificate with trophy.",
  },
  {
    question: "How can I become a sponsor for the event?",
    answer:
      "You can apply for sponsorship by filling out our sponsorship application form. We offer multiple tiers including Title Sponsor, Diamond Sponsor, Platinum Sponsor, Gold Sponsor, and Associate Sponsor. Each tier comes with different branding benefits and visibility options. Our team will reach out within 48 hours of your application to discuss the best fit for your brand.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gradient-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
