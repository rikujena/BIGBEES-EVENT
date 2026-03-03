import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SponsorshipSection } from "@/components/sections/SponsorshipSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <EventsSection />
        <StatsSection />
        <ServicesSection />
        <GallerySection />
        <ClientsSection />
        <TestimonialsSection />
        <SponsorshipSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
