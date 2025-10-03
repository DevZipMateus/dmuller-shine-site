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
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: theme === "light" ? "drop-shadow(0 0 40px rgba(255, 199, 0, 0.7))" : ""
            }}
          >
            {/* Base da lâmpada */}
            <g className="transition-all duration-500">
              <rect x="38" y="70" width="24" height="4" rx="1" fill="#b0b0b0"/>
              <rect x="36" y="74" width="28" height="4" rx="1" fill="#c0c0c0"/>
              <rect x="38" y="78" width="24" height="4" rx="1" fill="#b0b0b0"/>
              <rect x="36" y="82" width="28" height="4" rx="1" fill="#c0c0c0"/>
              <path d="M40 86h20v4a2 2 0 0 1-2 2H42a2 2 0 0 1-2-2v-4z" fill="#444"/>
            </g>
            
            {/* Bulbo da lâmpada */}
            <g className="transition-all duration-500">
              <path 
                d="M50 0 C30 0 20 25 20 45 C20 65 35 70 50 70 C65 70 80 65 80 45 C80 25 70 0 50 0 Z" 
                fill="rgba(255,255,255,0.1)"
                className="transition-all duration-500"
              />
              <path 
                d="M45 50 C 48 55, 52 55, 55 50" 
                stroke={theme === "light" ? "#ffc700" : "#555"}
                strokeWidth="1.5" 
                fill="none"
                className="transition-all duration-500"
                style={{
                  filter: theme === "light" ? "drop-shadow(0 0 3px #ffc700)" : ""
                }}
              />
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
