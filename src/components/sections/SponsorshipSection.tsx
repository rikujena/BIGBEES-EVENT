import { motion } from "framer-motion";
import { Eye, Users, Megaphone, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const benefits = [
  {
    icon: Eye,
    title: "Premium Brand Visibility",
    description: "Your brand showcased to top business leaders, entrepreneurs, and decision-makers.",
  },
  {
    icon: Users,
    title: "Targeted Audience",
    description: "Direct access to high-value corporate and industry professionals.",
  },
  {
    icon: Megaphone,
    title: "Multi-Channel Promotion",
    description: "Brand exposure through stage mentions, banners, media, and digital promotions.",
  },
  {
    icon: Award,
    title: "Exclusive Recognition",
    description: "Sponsors receive on-stage recognition, certificates, and branding privileges based on sponsorship tier.",
  },
];

export const SponsorshipSection = () => {
  return (
    <section id="sponsorship" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Become a Sponsor
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Partner with us for the Odisha Business Excellence Award 2026 and gain premium brand visibility
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 md:p-8 bg-gradient-card border-border/50">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Sponsorship Application
              </h3>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Contact Person Name *</label>
                    <Input placeholder="Your name" className="bg-secondary/50 border-border" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Business Email *</label>
                    <Input type="email" placeholder="email@company.com" className="bg-secondary/50 border-border" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Company / Brand Name *</label>
                    <Input placeholder="Company name" className="bg-secondary/50 border-border" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Contact Number *</label>
                    <Input type="tel" placeholder="+91 XXX XXX XXXX" className="bg-secondary/50 border-border" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Sponsorship Category *</label>
                    <Select>
                      <SelectTrigger className="bg-secondary/50 border-border">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="title">Title Sponsor</SelectItem>
                        <SelectItem value="diamond">Diamond Sponsor</SelectItem>
                        <SelectItem value="platinum">Platinum Sponsor</SelectItem>
                        <SelectItem value="gold">Gold Sponsor</SelectItem>
                        <SelectItem value="associate">Associate Sponsor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Estimated Budget *</label>
                    <Select>
                      <SelectTrigger className="bg-secondary/50 border-border">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50k-1l">₹50,000 – ₹1,00,000</SelectItem>
                        <SelectItem value="1l-2l">₹1,00,000 – ₹2,00,000</SelectItem>
                        <SelectItem value="2l+">₹2,00,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Brand Objectives (Optional)</label>
                  <Textarea
                    placeholder="Tell us about your sponsorship goals..."
                    className="bg-secondary/50 border-border min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold font-semibold">
                  Apply for Sponsorship
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              Why Sponsor This Event?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-card/50 border border-border/50"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
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
