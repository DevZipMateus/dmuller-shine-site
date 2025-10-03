import { Button } from "@/components/ui/button";
import { Award, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import lampadaAcesa from "@/assets/lampada-acesa.png";
import lampadaApagada from "@/assets/lampada-apagada.png";

const Hero = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      {/* Lâmpada de fundo que responde ao tema */}
      {mounted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-700">
          <img 
            src={theme === "light" ? lampadaAcesa : lampadaApagada}
            alt="Lâmpada"
            className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-contain opacity-50 md:opacity-60 rotate-180 transition-all duration-700 animate-fade-in mix-blend-screen"
            style={{
              filter: theme === "light" ? "drop-shadow(0 0 60px rgba(250, 204, 21, 0.5))" : "none"
            }}
          />
        </div>
      )}
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main heading - H1 */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              D Muller Comércio
            </span>
          </h1>

          {/* Subtitle - H2 */}
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light max-w-3xl mx-auto">
            A luz que você procura, a qualidade que você merece
          </h2>

          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Desde 2025, proporcionando o que há de melhor em qualidade de iluminação para transformar seus ambientes.
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-border shadow-sm">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Qualidade superior</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-border shadow-sm">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Produtos certificados</span>
            </div>
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-3 rounded-lg border border-border shadow-sm">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Eficiência energética</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("contato")}
            >
              Entre em contato
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection("sobre")}
            >
              Conheça nossa história
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
