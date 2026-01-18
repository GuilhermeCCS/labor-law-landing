import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Phone,
    title: 'WhatsApp / Telefone',
    value: '(82) 99130-1991',
    href: 'https://api.whatsapp.com/send?phone=5582991301991&text=Ol%C3%A1%2C+gostaria+de+falar+com+um+advogado.',
  },
  {
    icon: Mail,
    title: 'E-mail',
    value: 'contato@brunovaleadvocacia.com.br',
    href: 'mailto:contato@brunovaleadvocacia.com.br',
  },
  {
    icon: MapPin,
    title: 'Endereço',
    value: 'Empresarial Primeum Office, Maceió - AL',
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Horário de Atendimento',
    value: 'Seg - Sex: 08h às 18h',
    href: null,
  },
];

const Contato = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Mensagem enviada!',
      description: 'Entraremos em contato em breve.',
    });
    setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
  };

  return (
    <section id="contato" className="py-24 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Fale Conosco
          </span>
          <h2 className="section-title mb-4">Entre em Contato</h2>
          <p className="section-subtitle mx-auto">
            Estamos prontos para ouvir você e defender seus direitos. Preencha o
            formulário ou use um de nossos canais de atendimento.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <h3 className="font-display text-2xl font-semibold text-primary mb-6">
                Envie sua Mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome Completo
                    </label>
                    <Input
                      type="text"
                      placeholder="Seu nome"
                      value={formData.nome}
                      onChange={(e) =>
                        setFormData({ ...formData, nome: e.target.value })
                      }
                      required
                      className="bg-secondary/50 border-border focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="bg-secondary/50 border-border focus:border-accent"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    WhatsApp / Telefone
                  </label>
                    <Input
                      type="tel"
                      placeholder="(82) 99130-1991"
                      value={formData.telefone}
                    onChange={(e) =>
                      setFormData({ ...formData, telefone: e.target.value })
                    }
                    required
                    className="bg-secondary/50 border-border focus:border-accent"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Sua Mensagem
                  </label>
                  <Textarea
                    placeholder="Descreva brevemente sua situação..."
                    rows={5}
                    value={formData.mensagem}
                    onChange={(e) =>
                      setFormData({ ...formData, mensagem: e.target.value })
                    }
                    required
                    className="bg-secondary/50 border-border focus:border-accent resize-none"
                  />
                </div>
                <Button type="submit" className="btn-gold w-full group">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-card rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                    <info.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {info.title}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary hover:text-accent transition-colors text-sm"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="font-medium text-primary text-sm">
                      {info.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="rounded-xl overflow-hidden shadow-lg h-[280px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31450.78123456!2d-35.735833!3d-9.665833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014578c39db9f7%3A0xb8d4dc0f0a9f8a0!2sMacei%C3%B3%2C%20AL!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do escritório"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
