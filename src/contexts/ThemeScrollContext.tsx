import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useTheme } from "next-themes";

interface ThemeScrollContextType {
  isManualControl: boolean;
  enableManualControl: () => void;
  resetManualControl: () => void;
}

const ThemeScrollContext = createContext<ThemeScrollContextType | undefined>(undefined);

export const ThemeScrollProvider = ({ children }: { children: ReactNode }) => {
  const { theme, setTheme } = useTheme();
  const [isManualControl, setIsManualControl] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has manually controlled the theme
    const manualControl = sessionStorage.getItem("theme-manual-control");
    if (manualControl === "true") {
      setIsManualControl(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Check initial scroll position and set theme accordingly
    const checkInitialPosition = () => {
      if (sessionStorage.getItem("theme-manual-control") === "true") {
        return;
      }

      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      const switchPoint = heroHeight * 0.35;

      if (scrollPosition > switchPoint && theme === "dark") {
        setTheme("light");
      } else if (scrollPosition < switchPoint && theme === "light") {
        setTheme("dark");
      }
    };

    checkInitialPosition();

    const handleScroll = () => {
      // If user has taken manual control, don't auto-switch
      if (sessionStorage.getItem("theme-manual-control") === "true") {
        return;
      }

      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Switch to light when scrolling past the "bulb glass" area (around 35% of hero section)
      const switchPoint = heroHeight * 0.35;
      const buffer = 10; // Small buffer to prevent flickering

      if (scrollPosition > switchPoint + buffer && theme === "dark") {
        setTheme("light");
      } else if (scrollPosition < switchPoint - buffer && theme === "light") {
        setTheme("dark");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme, setTheme, mounted]);

  const enableManualControl = () => {
    sessionStorage.setItem("theme-manual-control", "true");
    setIsManualControl(true);
  };

  const resetManualControl = () => {
    sessionStorage.removeItem("theme-manual-control");
    setIsManualControl(false);
  };

  return (
    <ThemeScrollContext.Provider value={{ isManualControl, enableManualControl, resetManualControl }}>
      {children}
    </ThemeScrollContext.Provider>
  );
};

export const useThemeScroll = () => {
  const context = useContext(ThemeScrollContext);
  if (context === undefined) {
    throw new Error("useThemeScroll must be used within a ThemeScrollProvider");
  }
  return context;
};
