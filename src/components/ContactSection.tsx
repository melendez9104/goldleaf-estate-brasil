import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

export const ContactSection = () => {
  const handleWhatsApp = () => {
    const message = "Olá! Gostaria de mais informações sobre os imóveis de luxo da Luxe Properties.";
    const phone = "5511999999999"; // Número do WhatsApp da empresa
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 bg-luxury-black-light relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-luxury-white mb-6">
              Entre em
              <span className="text-luxury-gold"> Contato</span>
            </h2>
            <p className="text-xl text-luxury-gray max-w-3xl mx-auto">
              Nossa equipe de especialistas está pronta para atendê-lo com a excelência que você merece
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="luxury-card p-8">
              <h3 className="font-heading text-2xl font-semibold text-luxury-white mb-6">
                Solicite uma Consultoria
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-luxury-gold mb-2">
                      Nome Completo *
                    </label>
                    <Input 
                      placeholder="Seu nome completo"
                      className="luxury-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-luxury-gold mb-2">
                      E-mail *
                    </label>
                    <Input 
                      type="email"
                      placeholder="seu@email.com"
                      className="luxury-input"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-luxury-gold mb-2">
                      Telefone *
                    </label>
                    <Input 
                      placeholder="(11) 99999-9999"
                      className="luxury-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-luxury-gold mb-2">
                      Interesse
                    </label>
                    <Select>
                      <SelectTrigger className="luxury-select">
                        <SelectValue placeholder="Tipo de interesse" />
                      </SelectTrigger>
                      <SelectContent className="luxury-dropdown">
                        <SelectItem value="buy">Comprar Imóvel</SelectItem>
                        <SelectItem value="sell">Vender Imóvel</SelectItem>
                        <SelectItem value="invest">Investimento</SelectItem>
                        <SelectItem value="consult">Consultoria</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-gold mb-2">
                    Orçamento Previsto
                  </label>
                  <Select>
                    <SelectTrigger className="luxury-select">
                      <SelectValue placeholder="Faixa de orçamento" />
                    </SelectTrigger>
                    <SelectContent className="luxury-dropdown">
                      <SelectItem value="500k-1m">R$ 500K - 1M</SelectItem>
                      <SelectItem value="1m-3m">R$ 1M - 3M</SelectItem>
                      <SelectItem value="3m-5m">R$ 3M - 5M</SelectItem>
                      <SelectItem value="5m-10m">R$ 5M - 10M</SelectItem>
                      <SelectItem value="10m+">R$ 10M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-luxury-gold mb-2">
                    Mensagem
                  </label>
                  <Textarea 
                    placeholder="Conte-nos mais sobre suas necessidades..."
                    className="luxury-input min-h-32 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit"
                    className="luxury-search-button flex-1 hover-lift"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </Button>
                  
                  <Button 
                    type="button"
                    onClick={handleWhatsApp}
                    className="luxury-whatsapp-button flex-1 hover-lift"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Direto
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="luxury-card p-8">
                <h3 className="font-heading text-2xl font-semibold text-luxury-white mb-6">
                  Informações de Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-luxury-white mb-1">Telefone</h4>
                      <p className="text-luxury-gray">(11) 3000-0000</p>
                      <p className="text-luxury-gray">(11) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-luxury-white mb-1">E-mail</h4>
                      <p className="text-luxury-gray">contato@luxeproperties.com.br</p>
                      <p className="text-luxury-gray">vendas@luxeproperties.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-luxury-white mb-1">Endereço</h4>
                      <p className="text-luxury-gray">
                        Av. Faria Lima, 3477 - Conj. 142<br />
                        Itaim Bibi, São Paulo - SP<br />
                        CEP: 04538-133
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-luxury-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-luxury-white mb-1">Horário</h4>
                      <p className="text-luxury-gray">
                        Segunda à Sexta: 9h às 18h<br />
                        Sábado: 9h às 14h<br />
                        Plantão 24h para clientes VIP
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="luxury-card p-8 text-center bg-gradient-to-br from-luxury-gold/10 to-luxury-gold/5 border-luxury-gold/30">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-green-500/20 rounded-full">
                  <MessageCircle className="h-8 w-8 text-green-400" />
                </div>
                
                <h3 className="font-heading text-xl font-semibold text-luxury-white mb-2">
                  Atendimento Imediato
                </h3>
                
                <p className="text-luxury-gray mb-6">
                  Fale conosco agora pelo WhatsApp e receba atendimento personalizado em tempo real
                </p>
                
                <Button 
                  onClick={handleWhatsApp}
                  className="luxury-whatsapp-button w-full hover-lift"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Iniciar Conversa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};