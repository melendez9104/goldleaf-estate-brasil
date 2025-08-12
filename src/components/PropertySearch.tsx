import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Home, DollarSign, Bed } from "lucide-react";

export const PropertySearch = () => {
  return (
    <section className="py-20 bg-luxury-black-light relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-luxury-white mb-4">
              Encontre Sua
              <span className="text-luxury-gold"> Propriedade Ideal</span>
            </h2>
            <p className="text-xl text-luxury-gray max-w-2xl mx-auto">
              Use nossa busca avançada para encontrar o imóvel perfeito que atende a todos os seus critérios
            </p>
          </div>
          
          <div className="luxury-card rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-luxury-gold mb-2">Localização</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-luxury-gold h-5 w-5" />
                  <Input 
                    placeholder="Cidade, bairro ou região"
                    className="luxury-input pl-10"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-luxury-gold mb-2">Tipo</label>
                <Select>
                  <SelectTrigger className="luxury-select">
                    <SelectValue placeholder="Tipo de imóvel" />
                  </SelectTrigger>
                  <SelectContent className="luxury-dropdown">
                    <SelectItem value="apartment">Apartamento</SelectItem>
                    <SelectItem value="house">Casa</SelectItem>
                    <SelectItem value="penthouse">Cobertura</SelectItem>
                    <SelectItem value="mansion">Mansão</SelectItem>
                    <SelectItem value="commercial">Comercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-luxury-gold mb-2">Quartos</label>
                <Select>
                  <SelectTrigger className="luxury-select">
                    <SelectValue placeholder="Nº quartos" />
                  </SelectTrigger>
                  <SelectContent className="luxury-dropdown">
                    <SelectItem value="1">1 quarto</SelectItem>
                    <SelectItem value="2">2 quartos</SelectItem>
                    <SelectItem value="3">3 quartos</SelectItem>
                    <SelectItem value="4">4+ quartos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-luxury-gold mb-2">Preço</label>
                <Select>
                  <SelectTrigger className="luxury-select">
                    <SelectValue placeholder="Faixa de preço" />
                  </SelectTrigger>
                  <SelectContent className="luxury-dropdown">
                    <SelectItem value="500k-1m">R$ 500K - 1M</SelectItem>
                    <SelectItem value="1m-2m">R$ 1M - 2M</SelectItem>
                    <SelectItem value="2m-5m">R$ 2M - 5M</SelectItem>
                    <SelectItem value="5m+">R$ 5M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="luxury-search-button px-12 py-4 text-lg font-semibold hover-lift"
              >
                <Search className="mr-2 h-5 w-5" />
                Buscar Propriedades
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};