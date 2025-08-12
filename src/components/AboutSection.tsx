import { Award, Shield, Globe, TrendingUp, Users, Star } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Excelência Reconhecida",
    description: "25 anos de tradição no mercado imobiliário de luxo brasileiro com mais de 500 transações bem-sucedidas"
  },
  {
    icon: Shield,
    title: "Segurança Garantida", 
    description: "Processos jurídicos rigorosos e certificações internacionais garantem transações seguras e confiáveis"
  },
  {
    icon: Globe,
    title: "Alcance Global",
    description: "Rede internacional de parceiros para atender clientes brasileiros e investidores estrangeiros"
  },
  {
    icon: TrendingUp,
    title: "Consultoria Estratégica",
    description: "Análises de mercado especializadas e assessoria completa para maximizar seus investimentos"
  },
  {
    icon: Users,
    title: "Atendimento VIP",
    description: "Equipe dedicada 24/7 com especialistas em imóveis de alto padrão e relacionamento personalizado"
  },
  {
    icon: Star,
    title: "Portfólio Exclusivo",
    description: "Acesso a propriedades únicas e oportunidades off-market não disponíveis ao público geral"
  }
];

export const AboutSection = () => {
  return (
    <section className="py-24 bg-luxury-black-light relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-luxury-white mb-6">
              Sobre a
              <span className="text-luxury-gold"> Luxe Properties</span>
            </h2>
            <p className="text-xl text-luxury-gray max-w-3xl mx-auto leading-relaxed">
              Pioneiros no segmento de imóveis de luxo no Brasil, oferecemos experiência incomparável 
              e acesso exclusivo às propriedades mais sofisticadas do país
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="luxury-card p-8 text-center hover-lift scroll-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 luxury-glow rounded-full bg-luxury-gold/10">
                    <IconComponent className="h-8 w-8 text-luxury-gold" />
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-luxury-white mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-luxury-gray leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="luxury-card p-12 text-center">
            <h3 className="font-heading text-3xl font-bold text-luxury-white mb-8">
              Nossa Trajetória de <span className="text-luxury-gold">Sucesso</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-luxury-gold mb-2">R$ 2.5B</div>
                <div className="text-luxury-gray text-sm uppercase tracking-wider">Volume Transacionado</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-luxury-gold mb-2">500+</div>
                <div className="text-luxury-gray text-sm uppercase tracking-wider">Imóveis Vendidos</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-luxury-gold mb-2">25</div>
                <div className="text-luxury-gray text-sm uppercase tracking-wider">Anos de Mercado</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-luxury-gold mb-2">98%</div>
                <div className="text-luxury-gray text-sm uppercase tracking-wider">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-luxury-gold to-transparent" />
      </div>
    </section>
  );
};