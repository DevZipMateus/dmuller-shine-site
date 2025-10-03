import logo from "@/assets/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <img src={logo} alt="D Muller Comércio" className="h-16 w-auto" />
            <p className="text-foreground/70 text-sm leading-relaxed">
              A luz que você procura, a qualidade que você merece.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Links rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="text-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("produtos");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  Produtos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("sobre");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contato");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-foreground/70 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>(92) 99129-0525</span>
              </li>
              <li className="flex items-center gap-2 text-foreground/70 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>ims.adm2021@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-foreground/70 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>R Rio Napo, 14</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm text-center md:text-left">
              © {currentYear} D Muller Comércio. Todos os direitos reservados.
            </p>
            <p className="text-foreground/60 text-sm">
              CNPJ: 61.571.918/0001-85
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
