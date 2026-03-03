import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "ODISHA BUSINESS EXCELLENCE AWARD",
    year: "2026",
    subtitle: "A Grand Night of Recognition & Prestige",
    description:
      "Celebrate outstanding entrepreneurs, business leaders, and organizations for excellence, innovation, and leadership at Odisha's most prestigious business award night.",
    cta1: { text: "View Event Details", href: "#events" },
    cta2: { text: "Become a Sponsor", href: "#sponsorship" },
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "HONOURING BUSINESS LEADERS",
    year: "",
    subtitle: "Where Excellence Gets Recognized",
    description:
      "Join top CEOs, founders, and industry experts for an exclusive evening of awards, networking, and celebration at Taj Vivanta, Bhubaneswar.",
    cta1: { text: "Book Your Seat", href: "#events" },
    cta2: { text: "View Packages", href: "#events" },
    image: "https://images.unsplash.com/photo-1515169067865-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "PREMIUM AWARD NIGHT EXPERIENCE",
    year: "",
    subtitle: "Networking • Recognition • Visibility",
    description:
      "Gain high-value exposure, industry recognition, and premium networking opportunities through Gold and Diamond award packages.",
    cta1: { text: "Gold Package", href: "#events" },
    cta2: { text: "Diamond Package", href: "#events" },
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "SPONSOR THE MOST PRESTIGIOUS EVENT",
    year: "",
    subtitle: "Elevate Your Brand Visibility",
    description:
      "Partner with us as a sponsor and position your brand among Odisha's most influential business leaders and decision-makers.",
    cta1: { text: "Apply for Sponsorship", href: "#sponsorship" },
    cta2: { text: "Contact Us", href: "#contact" },
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
              <span className="text-foreground">{slides[currentSlide].title}</span>
              {slides[currentSlide].year && (
                <span className="block text-gradient-gold">{slides[currentSlide].year}</span>
              )}
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium mt-4 mb-6">
              {slides[currentSlide].subtitle}
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold font-semibold px-8"
                asChild
              >
                <a href={slides[currentSlide].cta1.href}>{slides[currentSlide].cta1.text}</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-8"
                asChild
              >
                <a href={slides[currentSlide].cta2.href}>{slides[currentSlide].cta2.text}</a>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/30 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-background/50 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/30 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-background/50 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-20 text-sm text-muted-foreground bg-background/30 backdrop-blur-sm px-3 py-1 rounded-full">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
};
