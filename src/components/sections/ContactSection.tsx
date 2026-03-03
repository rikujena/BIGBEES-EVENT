import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";


const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    content: "House no 1, Lane Number 2, Adarsh Vihar, Aryapalli, Patia, Bhubaneswar, Odisha 751024",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 7205576669",
  },
  {
    icon: Mail,
    title: "Email",
    content: "odishabusinessaward@bigbeesevent.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM",
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get in touch with our team to discuss your brand transformation journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 md:p-8 bg-gradient-card border-border/50">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Full Name *</label>
                    <Input placeholder="Your name" className="bg-secondary/50 border-border" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Email Address *</label>
                    <Input type="email" placeholder="email@example.com" className="bg-secondary/50 border-border" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Phone Number</label>
                    <Input type="tel" placeholder="+91 XXX XXX XXXX" className="bg-secondary/50 border-border" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Subject *</label>
                    <Input placeholder="How can we help?" className="bg-secondary/50 border-border" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Message *</label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    className="bg-secondary/50 border-border min-h-[120px]"
                  />
                </div>
                <Button className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold font-semibold">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Get in Touch
            </h3>
            <p className="text-muted-foreground mb-8">
              Ready to transform your brand? Reach out to our team for a consultation.
            </p>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
