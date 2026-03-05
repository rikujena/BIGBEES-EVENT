import { motion } from "framer-motion";
import { Calendar, MapPin, Check, CreditCard, Wallet, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/* ✅ Razorpay TS fix */
declare global {
  interface Window {
    Razorpay: any;
  }
}

const packages = [
  {
    name: "Gold Package",
    price: "₹11,999",
    amount: 11999,
    badge: "Gold Package",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "One Pass to attend the gala awards ceremony",
      "On Stage Award by Chief Guest",
      "Lavish Lunch at Taj Vivanta",
      "Press Release in Electronic and Digital media",
      "Candid photo shoot & Video session",
      "Access to Red Carpet Interview and Photo Booth",
      "Social media REEL & Certificate with Momento",
      "30 mins interactive session with other Entrepreneurs",
      "Normal seating arrangement",
    ],
  },
  {
    name: "Diamond Package",
    price: "₹14,999",
    amount: 14999,
    badge: "Diamond Package",
    featured: true,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "One Pass to attend the gala awards ceremony",
      "On Stage Award by Chief Guest",
      "Lavish Lunch at Taj Vivanta",
      "Press Release in Electronic and Digital media",
      "Candid photo shoot & Video session",
      "Access to Red Carpet Interview and Photo Booth",
      "Social media REEL with Collaboration with BBE",
      "Certificate with Momento",
      "30 mins interactive session with other Entrepreneurs",
      "Free Big Bees Event Membership & Magazine advertisement",
      "Premium seating arrangement",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const EventsSection = () => {

  /* ✅ Razorpay Handler */
  const handlePayment = async (amount: number) => {
    try {
      const res = await fetch(`http://bigbeesevent-backend.onrender.com/api/payment/create-order?amount=${amount}`, {
        method: "POST",
      });

      const data = await res.json();

      const options = {
        key: "rzp_test_SL7exg0vwiJFTa",
        amount: data.amount,
        currency: "INR",
        name: "Odisha Business Excellence Award",
        description: "Seat Booking",
        order_id: data.id,
        handler: function (response: any) {
          alert("Payment Successful: " + response.razorpay_payment_id);
        },
        theme: {
          color: "#f59e0b",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (err) {
      console.error(err);
      alert("Payment failed. Try again.");
    }
  };

  return (
    <section id="events" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Upcoming Events & Workshops
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join our exclusive events and learn from industry experts. Limited seats available!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {packages.map((pkg) => (
            <motion.div key={pkg.name} variants={itemVariants}>
              <Card
                className={`overflow-hidden h-full bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 ${
                  pkg.featured ? "ring-2 ring-primary/50 shadow-gold" : ""
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <Badge className={`absolute top-4 left-4 ${pkg.featured ? 'bg-gradient-gold text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>
                    {pkg.badge}
                  </Badge>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    Odisha Business Excellence Award 2026
                  </h3>

                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-2xl font-bold text-gradient-gold mb-4">{pkg.price}</div>

                  <Button
                    onClick={() => handlePayment(pkg.amount)}
                    className={`w-full font-semibold ${
                      pkg.featured
                        ? "bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold"
                        : "bg-coral text-foreground hover:bg-coral/90"
                    }`}
                  >
                    Book Your Seat
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};