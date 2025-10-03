import { ToggleRight, ToggleLeft } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useScrollTheme } from "@/hooks/use-scroll-theme";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { enableManualControl } = useScrollTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isLight = theme === "light";

  const handleToggle = () => {
    setTheme(isLight ? "dark" : "light");
    enableManualControl();
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-24 right-6 z-40 bg-background/80 backdrop-blur-sm border border-border p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label={isLight ? "Mudar para modo escuro" : "Mudar para modo claro"}
    >
      {isLight ? (
        <ToggleRight className="w-7 h-7 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
      ) : (
        <ToggleLeft className="w-7 h-7 text-muted-foreground" />
      )}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {isLight ? "Modo escuro" : "Modo claro"}
      </span>
    </button>
  );
};

export default ThemeToggle;
