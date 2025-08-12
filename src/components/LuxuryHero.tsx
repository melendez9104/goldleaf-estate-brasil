import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, Award } from "lucide-react";
import heroImage from "@/assets/hero-luxury-property.jpg";
import luxuryVilla from "@/assets/luxury-villa-1.jpg";
import luxuryPenthouse from "@/assets/luxury-penthouse-1.jpg";
import luxuryEstate from "@/assets/luxury-estate-1.jpg";
import luxuryInterior from "@/assets/luxury-interior-1.jpg";

const heroImages = [
  {
    src: heroImage,
    title: "Cobertura Exclusiva",
    subtitle: "Vista panorâmica da cidade"
  },
  {
    src: luxuryVilla,
    title: "Villa Premium",
    subtitle: "Arquitetura contemporânea"
  },
  {
    src: luxuryPenthouse,
    title: "Penthouse Sky",
    subtitle: "Terraço privativo de luxo"
  },
  {
    src: luxuryEstate,
    title: "Estate Waterfront",
    subtitle: "Frente para o mar"
  },
  {
    src: luxuryInterior,
    title: "Sofisticação Interior",
    subtitle: "Design de alta costura"
  }
];

export const LuxuryHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImageIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.6)'
            }}
          />
        ))}
      </div>
      
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/20 via-transparent to-luxury-black/40" />
      
      
      {/* Dynamic Content Based on Current Image */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="mb-4 animate-fade-in-scale">
            <span className="text-luxury-gold font-medium text-lg tracking-wider uppercase">
              {heroImages[currentImageIndex].subtitle}
            </span>
          </div>
          
          <h1 className={`font-heading text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 text-luxury-white leading-tight transition-all duration-700 ${
            isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}>
            <span className="block text-luxury-white/90 text-2xl md:text-3xl font-normal mb-2">
              Imóveis de
            </span>
            <span className="block text-transparent bg-clip-text gold-shimmer font-bold">
              Luxo Exclusivos
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-luxury-white/80 mb-8 max-w-2xl mx-auto font-light">
            Descubra as propriedades mais sofisticadas do Brasil com 
            atendimento premium e consultoria especializada
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="luxury-hero-primary px-6 py-3 text-base font-medium hover-lift"
            >
              <Search className="mr-2 h-4 w-4" />
              Explorar Propriedades
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="luxury-hero-secondary px-6 py-3 text-base font-medium hover-lift"
            >
              <Award className="mr-2 h-4 w-4" />
              Consultoria VIP
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center animate-fade-in-scale bg-luxury-black/30 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl md:text-3xl font-heading font-bold text-luxury-gold mb-1">500+</div>
              <div className="text-luxury-white/70 text-sm">Propriedades Premium</div>
            </div>
            <div className="text-center animate-fade-in-scale bg-luxury-black/30 backdrop-blur-sm rounded-lg p-4" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl md:text-3xl font-heading font-bold text-luxury-gold mb-1">25+</div>
              <div className="text-luxury-white/70 text-sm">Anos de Experiência</div>
            </div>
            <div className="text-center animate-fade-in-scale bg-luxury-black/30 backdrop-blur-sm rounded-lg p-4" style={{ animationDelay: '0.4s' }}>
              <div className="text-2xl md:text-3xl font-heading font-bold text-luxury-gold mb-1">98%</div>
              <div className="text-luxury-white/70 text-sm">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Navigation Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-luxury-gold scale-125 shadow-lg' 
                : 'bg-luxury-white/30 hover:bg-luxury-white/60'
            }`}
          />
        ))}
      </div>
      
      {/* Property Info Overlay */}
      <div className="absolute bottom-8 left-8 z-10 bg-luxury-black/40 backdrop-blur-md border border-luxury-gold/20 rounded-xl p-4 max-w-xs">
        <h3 className="font-heading text-lg font-semibold text-luxury-gold mb-1">
          {heroImages[currentImageIndex].title}
        </h3>
        <p className="text-luxury-white/80 text-sm">
          {heroImages[currentImageIndex].subtitle}
        </p>
      </div>
      
      {/* Floating scroll indicator */}
      <div className="absolute bottom-10 right-1/2 transform translate-x-1/2 text-luxury-gold animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};