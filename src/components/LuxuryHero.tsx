import { Button } from "@/components/ui/button";
import { Search, MapPin, Home, Award } from "lucide-react";
import heroImage from "@/assets/hero-luxury-property.jpg";

export const LuxuryHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-luxury-white leading-tight">
            <span className="block">Imóveis de</span>
            <span className="block text-transparent bg-clip-text gold-shimmer">
              Luxo Exclusivos
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-luxury-gray mb-8 max-w-2xl mx-auto font-light">
            Descubra as propriedades mais sofisticadas do Brasil com 
            atendimento premium e consultoria especializada
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="luxury-hero-primary px-8 py-6 text-lg font-semibold hover-lift"
            >
              <Search className="mr-2 h-5 w-5" />
              Explorar Propriedades
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="luxury-hero-secondary px-8 py-6 text-lg font-semibold hover-lift"
            >
              <Award className="mr-2 h-5 w-5" />
              Consultoria VIP
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-fade-in-scale">
              <div className="text-3xl md:text-4xl font-heading font-bold text-luxury-gold mb-2">500+</div>
              <div className="text-luxury-gray">Propriedades Premium</div>
            </div>
            <div className="text-center animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-luxury-gold mb-2">25+</div>
              <div className="text-luxury-gray">Anos de Experiência</div>
            </div>
            <div className="text-center animate-fade-in-scale" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-luxury-gold mb-2">98%</div>
              <div className="text-luxury-gray">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-luxury-gold animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};