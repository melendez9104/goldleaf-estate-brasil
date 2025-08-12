import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Heart, Eye } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: 1,
    title: "Cobertura Duplex Exclusiva",
    location: "Ipanema, Rio de Janeiro",
    price: "R$ 8.500.000",
    image: property1,
    bedrooms: 4,
    bathrooms: 5,
    area: "350m²",
    featured: true,
    description: "Vista panorâmica para o mar, acabamentos em mármore italiano"
  },
  {
    id: 2,
    title: "Villa Moderna Premium",
    location: "Alphaville, São Paulo", 
    price: "R$ 12.800.000",
    image: property2,
    bedrooms: 6,
    bathrooms: 7,
    area: "850m²",
    featured: true,
    description: "Arquitetura contemporânea com piscina infinita e spa privativo"
  },
  {
    id: 3,
    title: "Penthouse Sky Lounge",
    location: "Barra da Tijuca, Rio de Janeiro",
    price: "R$ 15.200.000",
    image: property3,
    bedrooms: 5,
    bathrooms: 6,
    area: "450m²", 
    featured: true,
    description: "Terraço privativo com vista 360° da cidade e sistema de automação"
  }
];

export const FeaturedProperties = () => {
  return (
    <section className="py-24 bg-luxury-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-luxury-white mb-6">
            Propriedades
            <span className="text-luxury-gold"> Em Destaque</span>
          </h2>
          <p className="text-xl text-luxury-gray max-w-3xl mx-auto">
            Uma seleção exclusiva dos imóveis mais sofisticados e desejados do nosso portfólio premium
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card 
              key={property.id} 
              className="luxury-property-card group overflow-hidden hover-lift scroll-reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <Button size="sm" variant="secondary" className="luxury-icon-button">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="luxury-icon-button">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Featured badge */}
                {property.featured && (
                  <Badge className="absolute top-4 left-4 luxury-featured-badge">
                    Destaque
                  </Badge>
                )}
                
                {/* Price */}
                <div className="absolute bottom-4 left-4">
                  <div className="font-heading text-2xl font-bold text-luxury-gold">
                    {property.price}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="font-heading text-xl font-semibold text-luxury-white mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-luxury-gray mb-3">
                    <MapPin className="h-4 w-4 mr-1 text-luxury-gold" />
                    {property.location}
                  </div>
                  <p className="text-luxury-gray text-sm leading-relaxed">
                    {property.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between text-sm text-luxury-gray mb-6">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-1 text-luxury-gold" />
                    {property.bedrooms} quartos
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-1 text-luxury-gold" />
                    {property.bathrooms} banheiros
                  </div>
                  <div className="flex items-center">
                    <Square className="h-4 w-4 mr-1 text-luxury-gold" />
                    {property.area}
                  </div>
                </div>
                
                <Button className="w-full luxury-property-button hover-lift">
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="luxury-view-all-button px-8 py-4 text-lg font-semibold hover-lift"
          >
            Ver Todas as Propriedades
          </Button>
        </div>
      </div>
    </section>
  );
};