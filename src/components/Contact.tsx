import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Olá! Meu nome é ${formData.name}.%0A%0AEmail: ${formData.email}%0ATelefone: ${formData.phone}%0A%0AMensagem:%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/5592991290525?text=${message}`;
    
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Você será redirecionado para continuar a conversa.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-background w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto w-full">
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Entre em contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para atender você e esclarecer todas as suas dúvidas
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 w-full">
            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8 w-full">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Informações de contato</h3>
                <p className="text-foreground/70 mb-8">
                  Entre em contato conosco através de qualquer um dos canais abaixo. 
                  Estamos à disposição para ajudá-lo.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-secondary/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-foreground/70">R Rio Napo, 14</p>
                  </div>
                </div>

                <a 
                  href="https://wa.me/5592991290525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-secondary/50 p-6 rounded-lg hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-foreground/70">(92) 99129-0525</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 bg-secondary/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-foreground/70">ims.adm2021@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-secondary/50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horário de funcionamento</h4>
                    <p className="text-foreground/70">
                      Segunda a sexta: 08:00 às 18:00<br />
                      Sábado: 08:00 às 13:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-secondary/30 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-border w-full">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Envie sua mensagem</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 w-full">
                <div className="w-full">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="w-full max-w-full"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full max-w-full"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="w-full max-w-full"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Como podemos ajudar você?"
                    rows={5}
                    className="w-full max-w-full resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full max-w-full">
                  Enviar mensagem via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
