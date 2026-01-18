import { Scale, Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ];

  const services = [
    'Direito Trabalhista',
    'Ações de Bancários',
    'Vínculo Empregatício',
    'Acidente de Trabalho',
    'Rescisão Indireta',
    'Horas Extras',
  ];

  return (
    <footer className="bg-navy-gradient text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="#inicio" className="flex items-center gap-3 mb-6">
              <Scale className="h-8 w-8 text-gold-light" />
              <div>
                <span className="font-display text-xl font-semibold">
                  Bruno Vale
                </span>
                <span className="block text-xs tracking-widest text-white/60 uppercase">
                  Advocacia
                </span>
              </div>
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Escritório especializado em Direito Trabalhista, defendendo os
              direitos dos trabalhadores com dedicação e transparência.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-gold-light transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Nossos Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+5582999999999"
                  className="flex items-center gap-3 text-white/70 hover:text-gold-light transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  (82) 99999-9999
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@brunovaleadvocacia.com.br"
                  className="flex items-center gap-3 text-white/70 hover:text-gold-light transition-colors text-sm"
                >
                  <Mail className="h-4 w-4" />
                  contato@brunovaleadvocacia.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} Bruno Vale Advocacia. Todos os direitos reservados.
            </p>
            <p className="text-white/50 text-sm">
              OAB/AL 12.345
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
