import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Zap, Award, Shield } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import produto1 from "@/assets/produto-1.webp";
import produto2 from "@/assets/produto-2.webp";
import produto3 from "@/assets/produto-3.webp";
import produto4 from "@/assets/produto-4.webp";
import produto5 from "@/assets/produto-5.png";
import produto6 from "@/assets/produto-6.png";
import lampadaLed from "@/assets/lampada-led.png";
import lampadaSuperLed from "@/assets/lampada-super-led.png";
import refletorSuperLed from "@/assets/refletor-super-led.png";

const products = [
  {
    id: 1,
    name: "Luminária pública Plus",
    image: produto1,
    description: "Iluminação pública de alta performance com proteção IP66",
    features: ["IP66", "4.000k / 5.000k", "Garantia: 5 anos"],
  },
  {
    id: 2,
    name: "Luminária pública Evolution",
    image: produto2,
    description: "Design evolutivo para iluminação urbana moderna",
    features: ["IP66", "4.000k / 5.000k", "Garantia: 5 anos"],
  },
  {
    id: 3,
    name: "Luminária High Bay Pro",
    image: produto3,
    description: "Solução profissional para grandes alturas e espaços industriais",
    features: ["IP66", "4.000k / 5.000k", "Garantia: 5 anos"],
  },
  {
    id: 4,
    name: "Luminária High Bay Eco",
    image: produto4,
    description: "Eficiência econômica para ambientes industriais",
    features: ["IP65", "6.500k", "Garantia: 4 anos"],
  },
  {
    id: 7,
    name: "Lâmpada LED",
    image: lampadaLed,
    description: "Linha completa de lâmpadas LED com alta eficiência energética",
    features: [
      "Lâmpada LED 4,9W 100–240V 6500K",
      "Lâmpada LED 7W 100–240V 6500K",
      "Lâmpada LED 9W 100–240V 3000K",
      "Lâmpada LED 9W 100–240V 6500K",
      "Lâmpada LED 12W 100–240V 6500K",
      "Lâmpada LED 15W 100–240V 6500K"
    ],
  },
  {
    id: 8,
    name: "Lâmpada Super Led",
    image: lampadaSuperLed,
    description: "Lâmpadas Super LED de alta potência para ambientes que exigem maior iluminação",
    features: [
      "Lâmpada Super LED 20W 100–240V 6500K",
      "Lâmpada Super LED 30W 100–240V 6500K",
      "Lâmpada Super LED 40W 100–240V 6500K",
      "Lâmpada Super LED 50W 100–240V 6500K",
      "Lâmpada Super LED 65W 100–240V 6500K",
      "Lâmpada Super LED 75W 100–240V 6500K",
      "Lâmpada Super LED 100W 100–240V 6500K E40",
      "Lâmpada Super LED 150W 100–240V 6500K E40"
    ],
  },
  {
    id: 9,
    name: "Refletor Super LED",
    image: refletorSuperLed,
    description: "Refletores Super LED de 30W a 1000W, bivolt (100–240V), luz branca 6500K e proteção IP66.",
    features: [
      "Refletores Super LED de 30W a 1000W, bivolt (100–240V), luz branca 6500K e proteção IP66."
    ],
  },
];

const Products = () => {
  const handleContactProduct = (productName: string) => {
    const message = `Olá! Gostaria de saber mais sobre o produto: ${productName}`;
    const whatsappUrl = `https://wa.me/5592991290525?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="produtos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nossos produtos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções em iluminação LED de alta qualidade para todos os ambientes
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-4 bg-secondary/30 rounded-lg">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-center">Eficiência energética</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-secondary/30 rounded-lg">
              <Award className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium text-center">Alta qualidade</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-secondary/30 rounded-lg">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium text-center">Proteção IP66</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-secondary/30 rounded-lg">
              <ShoppingCart className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium text-center">Pronta entrega</span>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {products.map((product) => (
                  <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <Card className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden">
                        <CardContent className="p-0">
                          {/* Image container */}
                          <div className="relative aspect-square bg-secondary/30 overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>

                          {/* Content */}
                          <div className="p-6 space-y-4">
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-foreground/70 text-sm leading-relaxed">
                              {product.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2">
                              {product.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm text-foreground/70">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>

                            {/* CTA Button */}
                            <Button
                              onClick={() => handleContactProduct(product.name)}
                              variant="default"
                              className="w-full"
                            >
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Consultar preço
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 -translate-x-1/2" />
              <CarouselNext className="right-0 translate-x-1/2" />
            </Carousel>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-foreground/70 mb-4">
              Não encontrou o que procura? Entre em contato conosco!
            </p>
            <Button
              onClick={() => {
                const element = document.getElementById("contato");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="outline"
              size="lg"
            >
              Ver todos os produtos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
