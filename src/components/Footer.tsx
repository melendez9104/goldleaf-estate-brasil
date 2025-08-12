import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-black-darker border-t border-luxury-gold/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl font-bold text-luxury-gold mb-4">
              Luxe Properties
            </h3>
            <p className="text-luxury-gray leading-relaxed mb-6">
              Especialistas em imóveis de luxo no Brasil, oferecendo experiência incomparável 
              e acesso exclusivo às propriedades mais sofisticadas do país.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-luxury-gold/10 rounded-lg flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-luxury-gold/10 rounded-lg flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-luxury-gold/10 rounded-lg flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-luxury-gold/10 rounded-lg flex items-center justify-center text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-luxury-white mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                "Propriedades em Destaque",
                "Busca Avançada", 
                "Avaliação Gratuita",
                "Consultoria VIP",
                "Blog Imobiliário",
                "Trabalhe Conosco"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-luxury-gray hover:text-luxury-gold transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-luxury-white mb-4">
              Nossos Serviços
            </h4>
            <ul className="space-y-3">
              {[
                "Venda de Imóveis de Luxo",
                "Compra Assessorada",
                "Investimentos Imobiliários",
                "Gestão Patrimonial",
                "Consultoria Internacional",
                "Financiamento Especializado"
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-luxury-gray hover:text-luxury-gold transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-luxury-white mb-4">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-luxury-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-luxury-gray text-sm">
                    Av. Faria Lima, 3477 - Conj. 142<br />
                    Itaim Bibi, São Paulo - SP
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                <div>
                  <p className="text-luxury-gray text-sm">(11) 3000-0000</p>
                  <p className="text-luxury-gray text-sm">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                <p className="text-luxury-gray text-sm">contato@luxeproperties.com.br</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-luxury-gold/5 rounded-lg border border-luxury-gold/20">
              <p className="text-luxury-gold text-sm font-medium mb-1">Plantão 24h</p>
              <p className="text-luxury-gray text-xs">
                Atendimento exclusivo para clientes VIP
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-luxury-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-luxury-gray text-sm">
              © {currentYear} Luxe Properties Brasil. Todos os direitos reservados.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a 
                href="#" 
                className="text-luxury-gray hover:text-luxury-gold transition-colors duration-300"
              >
                Política de Privacidade
              </a>
              <a 
                href="#" 
                className="text-luxury-gray hover:text-luxury-gold transition-colors duration-300"
              >
                Termos de Uso
              </a>
              <a 
                href="#" 
                className="text-luxury-gray hover:text-luxury-gold transition-colors duration-300"
              >
                CRECI: 12345-J
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};