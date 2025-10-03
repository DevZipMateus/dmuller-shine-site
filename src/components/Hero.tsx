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
      
      {/* Lâmpada PNG animada que responde ao tema */}
      {mounted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none w-[250px] h-[250px] md:w-[350px] md:h-[350px]">
          {/* Lâmpada apagada */}
          <img 
            src={lampadaApagada}
            alt="Lâmpada Apagada"
            className="absolute top-0 left-0 w-full h-full object-contain rotate-180"
            style={{
              opacity: theme === "light" ? 0 : 1,
              filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.3))",
              transformOrigin: "center center",
              backgroundColor: "transparent",
              transition: "opacity 0.5s ease-in-out, filter 0.7s ease-in-out"
            }}
          />
          {/* Lâmpada acesa */}
          <img 
            src={lampadaAcesa}
            alt="Lâmpada Acesa"
            className="absolute top-0 left-0 w-full h-full object-contain rotate-180"
            style={{
              opacity: theme === "light" ? 1 : 0,
              filter: theme === "light"
                ? "drop-shadow(0 0 15px rgba(255, 200, 0, 0.7)) drop-shadow(0 0 30px rgba(255, 200, 0, 0.5)) drop-shadow(0 0 50px rgba(255, 200, 0, 0.3))"
                : "drop-shadow(0 5px 10px rgba(0,0,0,0.3))",
              transformOrigin: "center center",
              backgroundColor: "transparent",
              transition: "opacity 0.5s ease-in-out, filter 0.7s ease-in-out"
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
            <span 
              className="bg-gradient-to-r bg-clip-text text-transparent transition-all duration-700"
              style={{
                backgroundImage: theme === "light" 
                  ? "linear-gradient(to right, #e74c3c, #f1c40f)"
                  : "linear-gradient(to right, #ff6b6b, #ffe66d)",
                filter: theme === "light" ? "drop-shadow(0 0 5px rgba(231, 76, 60, 0.5))" : "none"
              }}
            >
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
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 pt-8">
            <div 
              className="flex items-center gap-2 backdrop-blur-sm px-5 py-3 rounded-full border transition-all duration-300"
              style={{
                background: theme === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.1)",
                borderColor: theme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.2)"
              }}
            >
              <Award 
                className="w-5 h-5" 
                style={{ color: theme === "light" ? "#e67e22" : "#ffc700" }}
              />
              <span 
                className="text-sm font-medium"
                style={{ color: theme === "light" ? "#333" : "#fff" }}
              >
                Qualidade superior
              </span>
            </div>
            <div 
              className="flex items-center gap-2 backdrop-blur-sm px-5 py-3 rounded-full border transition-all duration-300"
              style={{
                background: theme === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.1)",
                borderColor: theme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.2)"
              }}
            >
              <Award 
                className="w-5 h-5" 
                style={{ color: theme === "light" ? "#e67e22" : "#ffc700" }}
              />
              <span 
                className="text-sm font-medium"
                style={{ color: theme === "light" ? "#333" : "#fff" }}
              >
                Produtos certificados
              </span>
            </div>
            <div 
              className="flex items-center gap-2 backdrop-blur-sm px-5 py-3 rounded-full border transition-all duration-300"
              style={{
                background: theme === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.1)",
                borderColor: theme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.2)"
              }}
            >
              <Zap 
                className="w-5 h-5" 
                style={{ color: theme === "light" ? "#e67e22" : "#ffc700" }}
              />
              <span 
                className="text-sm font-medium"
                style={{ color: theme === "light" ? "#333" : "#fff" }}
              >
                Eficiência energética
              </span>
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
