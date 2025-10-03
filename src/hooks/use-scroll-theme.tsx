import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const useScrollTheme = () => {
  const { theme, setTheme } = useTheme();
  const [isManualControl, setIsManualControl] = useState(false);

  useEffect(() => {
    // Check if user has manually controlled the theme
    const manualControl = sessionStorage.getItem("theme-manual-control");
    if (manualControl === "true") {
      setIsManualControl(true);
      return;
    }

    const handleScroll = () => {
      // If user has taken manual control, don't auto-switch
      if (sessionStorage.getItem("theme-manual-control") === "true") {
        return;
      }

      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Switch to light when scrolling past the "bulb glass" area (around 50% of hero section)
      const switchPoint = heroHeight * 0.5;

      if (scrollPosition > switchPoint && theme === "dark") {
        setTheme("light");
      } else if (scrollPosition <= switchPoint && theme === "light") {
        setTheme("dark");
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme, setTheme]);

  const enableManualControl = () => {
    sessionStorage.setItem("theme-manual-control", "true");
    setIsManualControl(true);
  };

  const resetManualControl = () => {
    sessionStorage.removeItem("theme-manual-control");
    setIsManualControl(false);
  };

  return { isManualControl, enableManualControl, resetManualControl };
};
