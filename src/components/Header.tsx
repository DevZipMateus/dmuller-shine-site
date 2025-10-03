import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="D Muller Comércio" className="h-12 w-auto" />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-foreground/80 hover:text-primary font-medium transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground/80 hover:text-primary font-medium transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground/80 hover:text-primary font-medium transition-colors"
            >
              Contato
            </button>
          </nav>

          <a
            href="https://wa.me/5592991290525"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md font-medium hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
