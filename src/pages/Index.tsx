import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThemeToggle from "@/components/ThemeToggle";
import { useScrollTheme } from "@/hooks/use-scroll-theme";

const Index = () => {
  // Enable automatic theme switching based on scroll position
  useScrollTheme();
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <ThemeToggle />
    </div>
  );
};

export default Index;
