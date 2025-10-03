import { Button } from "@/components/ui/button";
import { Award, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
      
      {/* Lâmpada SVG animada que responde ao tema */}
      {mounted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-700">
          <svg 
            className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rotate-180 transition-all duration-700 animate-fade-in"
            viewBox="0 0 100 120" 
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: theme === "light" 
                ? "drop-shadow(0 0 10px rgba(255, 199, 0, 0.4)) drop-shadow(0 0 20px rgba(255, 199, 0, 0.3)) drop-shadow(0 0 30px rgba(255, 199, 0, 0.2))"
                : "drop-shadow(0 5px 10px rgba(0,0,0,0.3))"
            }}
          >
            {/* Bulbo apagado (modo escuro) */}
            <g 
              className="transition-opacity duration-700"
              style={{ opacity: theme === "light" ? 0 : 1 }}
            >
              <path 
                d="M50 10 C30 10 18 35 18 60 C18 80 30 90 50 90 C70 90 82 80 82 60 C82 35 70 10 50 10 Z" 
                fill="rgba(25,25,25,0.7)" 
                stroke="#666" 
                strokeWidth="0.5"
              />
              <path 
                d="M65 25 C60 20 40 20 35 25 L40 30 C45 25 55 25 60 30 Z" 
                fill="rgba(255,255,255,0.1)"
              />
              <path 
                d="M70 40 C65 35 45 35 40 40 L45 45 C50 40 60 40 65 45 Z" 
                fill="rgba(255,255,255,0.05)"
              />
            </g>

            {/* Bulbo aceso (modo claro) */}
            <g 
              className="transition-opacity duration-700"
              style={{ opacity: theme === "light" ? 1 : 0 }}
            >
              <path 
                d="M50 10 C30 10 18 35 18 60 C18 80 30 90 50 90 C70 90 82 80 82 60 C82 35 70 10 50 10 Z" 
                fill="rgba(255,255,255,0.1)" 
                stroke="#cccccc" 
                strokeWidth="0.5"
              />
              <path 
                d="M65 25 C60 20 40 20 35 25 L40 30 C45 25 55 25 60 30 Z" 
                fill="rgba(255,255,255,0.4)"
              />
              <path 
                d="M70 40 C65 35 45 35 40 40 L45 45 C50 40 60 40 65 45 Z" 
                fill="rgba(255,255,255,0.2)"
              />
            </g>

            {/* Filamento */}
            <g className="transition-all duration-500">
              <line 
                x1="50" 
                y1="65" 
                x2="50" 
                y2="72" 
                stroke="#666" 
                strokeWidth="0.8"
                className="transition-all duration-500"
              />
              <path 
                d="M45 72 C48 77, 52 77, 55 72" 
                stroke={theme === "light" ? "#ffecb3" : "#666"}
                strokeWidth={theme === "light" ? "2" : "1.5"}
                fill="none"
                className="transition-all duration-500"
                style={{
                  filter: theme === "light" 
                    ? "drop-shadow(0 0 5px #ffecb3) drop-shadow(0 0 10px rgba(255,199,0,0.5))" 
                    : ""
                }}
              />
            </g>
            
            {/* Soquete */}
            <g className="transition-all duration-500">
              <rect x="38" y="90" width="24" height="4" rx="1" fill="#b0b0b0"/>
              <rect x="36" y="94" width="28" height="4" rx="1" fill="#c0c0c0"/>
              <rect x="38" y="98" width="24" height="4" rx="1" fill="#b0b0b0"/>
              <rect x="36" y="102" width="28" height="4" rx="1" fill="#c0c0c0"/>
              <path d="M40 106h20v4a2 2 0 0 1-2 2H42a2 2 0 0 1-2-2v-4z" fill="#444"/>
            </g>
          </svg>
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
