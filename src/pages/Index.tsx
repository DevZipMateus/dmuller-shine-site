import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="w-full overflow-x-hidden">
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
