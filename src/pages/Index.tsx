import { LuxuryHero } from "@/components/LuxuryHero";
import { PropertySearch } from "@/components/PropertySearch";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LuxuryHero />
      <PropertySearch />
      <FeaturedProperties />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
