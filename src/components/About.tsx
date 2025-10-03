import { Sparkles, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre a D Muller Comércio
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Fundada em 2025, a D Muller Comércio nasceu com o compromisso de proporcionar 
                o que há de melhor em qualidade de iluminação. Nosso propósito é iluminar 
                ambientes e transformar espaços com produtos de alta qualidade e eficiência.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Acreditamos que a iluminação adequada pode transformar completamente um ambiente, 
                trazendo conforto, economia e beleza. Por isso, trabalhamos apenas com produtos 
                certificados e de fornecedores confiáveis.
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 shadow-xl">
                <blockquote className="text-xl md:text-2xl font-medium text-center text-foreground/90 italic">
                  "A luz que você procura, a qualidade que você merece"
                </blockquote>
                <p className="text-center mt-4 text-muted-foreground font-medium">
                  Nosso compromisso com você
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Qualidade</h3>
              <p className="text-foreground/70 leading-relaxed">
                Trabalhamos apenas com produtos certificados e de alta qualidade, 
                garantindo durabilidade e eficiência.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compromisso</h3>
              <p className="text-foreground/70 leading-relaxed">
                Nosso compromisso é com a satisfação dos nossos clientes, 
                oferecendo as melhores soluções em iluminação.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Atendimento</h3>
              <p className="text-foreground/70 leading-relaxed">
                Atendimento personalizado e dedicado para cada cliente, 
                porque cada projeto é único e especial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
