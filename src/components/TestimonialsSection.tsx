import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ricardo Mendoza",
    role: "Empresário",
    location: "São Paulo",
    text: "A Luxe Properties superou todas as minhas expectativas. Encontraram exatamente o que eu procurava - uma cobertura exclusiva com vista privilegiada. O atendimento foi impecável do início ao fim.",
    rating: 5,
    property: "Cobertura Duplex - Jardins"
  },
  {
    id: 2,
    name: "Marina Silva",
    role: "Investidora Internacional",
    location: "Miami / São Paulo",
    text: "Como investidora estrangeira, precisava de uma empresa que entendesse tanto o mercado brasileiro quanto as necessidades internacionais. A consultoria estratégica foi fundamental para meu sucesso.",
    rating: 5,
    property: "Villa Premium - Alphaville"
  },
  {
    id: 3,
    name: "Dr. Alexandre Costa",
    role: "Cirurgião",
    location: "Rio de Janeiro",
    text: "Vendi e comprei através da Luxe Properties. A expertise da equipe em avaliações e negociações resultou em valores muito acima das minhas expectativas. Recomendo sem reservas.",
    rating: 5,
    property: "Penthouse - Barra da Tijuca"
  },
  {
    id: 4,
    name: "Isabella Rodriguez",
    role: "Designer de Interiores",
    location: "Brasília",
    text: "O que mais me impressionou foi o acesso a propriedades exclusivas, muitas off-market. A Luxe Properties tem um portfólio que realmente não se encontra em outros lugares.",
    rating: 5,
    property: "Mansão Contemporânea - Lago Sul"
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-24 bg-luxury-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-luxury-white mb-6">
              O Que Dizem Nossos
              <span className="text-luxury-gold"> Clientes</span>
            </h2>
            <p className="text-xl text-luxury-gray max-w-3xl mx-auto">
              Histórias reais de clientes que confiaram na Luxe Properties para suas transações imobiliárias mais importantes
            </p>
          </div>

          <div className="relative">
            {/* Main testimonial display */}
            <div className="luxury-card p-12 text-center relative overflow-hidden">
              <Quote className="absolute top-8 left-8 h-12 w-12 text-luxury-gold opacity-20" />
              <Quote className="absolute bottom-8 right-8 h-12 w-12 text-luxury-gold opacity-20 rotate-180" />
              
              <div className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-luxury-gold fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-luxury-white leading-relaxed mb-8 font-light italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                
                <div className="text-center">
                  <div className="font-heading text-xl font-semibold text-luxury-gold mb-1">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-luxury-gray mb-1">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-sm text-luxury-gray mb-3">
                    {testimonials[currentIndex].location}
                  </div>
                  <div className="text-sm text-luxury-gold font-medium">
                    Adquiriu: {testimonials[currentIndex].property}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="secondary"
                size="icon"
                onClick={prevTestimonial}
                className="luxury-icon-button"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              {/* Pagination dots */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-luxury-gold scale-125' 
                        : 'bg-luxury-gold/30 hover:bg-luxury-gold/60'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="secondary"
                size="icon"
                onClick={nextTestimonial}
                className="luxury-icon-button"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Additional testimonials preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <Card 
                  key={testimonial.id}
                  className="luxury-property-card hover-lift cursor-pointer"
                  onClick={() => goToTestimonial(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-luxury-gold fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-luxury-gray text-sm leading-relaxed mb-4 line-clamp-3">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="text-center">
                      <div className="font-semibold text-luxury-white text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-luxury-gold text-xs">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};