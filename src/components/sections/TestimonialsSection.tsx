import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "BigBees Event was started with a simple vision — to create meaningful networking opportunities for startups and professionals in Odisha.",
    name: "Founder, BigBees Event",
    role: "CEO, BigBees Event",
    image: "/image.png",
  },
  {
    quote:
      "The Odisha Business Excellence Award was a game-changer for our brand visibility. The networking opportunities and recognition we received opened doors to partnerships we never imagined possible.",
    name: "Priya Sharma",
    role: "Founder, Startup Industries",
    image: "/image.png",
  },
  {
    quote:
      " Excited to see a platform focused on connecting Odisha’s startup ecosystem. Looking forward to the first event.",
    name: "Rajesh Kumar",
    role: "Marketing Manager",
    image: "/image.png",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What industry leaders say about working with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="p-6 md:p-8 h-full bg-gradient-card border-border/50 relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                <p className="text-foreground/90 text-sm leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
