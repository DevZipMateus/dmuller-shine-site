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
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
      style={{
        backgroundImage: `url(${theme === "light" ? lampadaAcesa : lampadaApagada})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundColor: theme === "light" ? '#ffffff' : '#000000',
      }}
    >

      {/* Content with dark backdrop */}
      <div 
        className="relative z-10 text-center px-8 py-10 max-w-4xl mx-auto rounded-2xl"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(5px)',
        }}
      >
        <h1 
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
        >
          D Muller Comércio
        </h1>
        
        <p 
          className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-white"
        >
          A luz que você procura, a qualidade que você merece
        </p>

        <p 
          className="text-base md:text-lg mb-0 max-w-2xl mx-auto text-white opacity-90"
        >
          Desde 2025, proporcionando o que há de melhor em qualidade de iluminação para transformar seus ambientes.
        </p>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="relative z-10 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 mt-8"
        style={{
          border: '2px solid rgba(0, 0, 0, 0.5)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          backdropFilter: 'blur(5px)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        }}
      >
        {theme === "light" ? "Apagar a Luz" : "Acender a Luz"}
      </button>
    </section>
  );
};

export default Hero;
