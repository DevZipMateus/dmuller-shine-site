import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import lampadaAcesa from "@/assets/lampada-acesa.png";
import lampadaApagada from "@/assets/lampada-apagada.png";

const Hero = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden transition-colors duration-700"
      style={{
        backgroundImage: `url(${theme === "light" ? lampadaAcesa : lampadaApagada})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundColor: '#000000',
        color: theme === "light" ? '#2c3e50' : '#ffffff',
      }}
    >
      {/* Overlay for text readability */}
      <div 
        className="absolute inset-0 transition-colors duration-700"
        style={{
          backgroundColor: theme === "light" ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          style={{
            textShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          D Muller Comércio
        </h1>
        
        <p 
          className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
          style={{
            textShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)',
          }}
        >
          A luz que você procura, a qualidade que você merece
        </p>

        <p 
          className="text-base md:text-lg mb-12 max-w-2xl mx-auto opacity-90"
          style={{
            textShadow: '0px 2px 5px rgba(0, 0, 0, 0.5)',
          }}
        >
          Desde 2025, proporcionando o que há de melhor em qualidade de iluminação para transformar seus ambientes.
        </p>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="relative z-10 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105"
        style={{
          border: theme === "light" ? '2px solid #2c3e50' : '2px solid #fff',
          backgroundColor: theme === "light" ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
          color: theme === "light" ? '#2c3e50' : '#fff',
          backdropFilter: 'blur(5px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = theme === "light" ? '#2c3e50' : '#fff';
          e.currentTarget.style.color = theme === "light" ? '#fff' : '#000';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = theme === "light" ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';
          e.currentTarget.style.color = theme === "light" ? '#2c3e50' : '#fff';
        }}
      >
        {theme === "light" ? "Apagar a Luz" : "Acender a Luz"}
      </button>
    </section>
  );
};

export default Hero;
