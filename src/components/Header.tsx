import { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#areas', label: 'Áreas de Atuação' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#inicio');
            }}
            className="flex items-center gap-3"
          >
            <Scale
              className={`h-8 w-8 transition-colors duration-300 ${
                isScrolled ? 'text-accent' : 'text-gold-light'
              }`}
            />
            <div className="flex flex-col">
              <span
                className={`font-display text-xl font-semibold transition-colors duration-300 ${
                  isScrolled ? 'text-primary' : 'text-white'
                }`}
              >
                Bruno Vale
              </span>
              <span
                className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-muted-foreground' : 'text-white/70'
                }`}
              >
                Advocacia
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`text-sm font-medium transition-colors duration-300 link-underline ${
                  isScrolled
                    ? 'text-foreground hover:text-accent'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="btn-gold text-sm">
              <a
                href="https://api.whatsapp.com/send?phone=5582991301991&text=Ol%C3%A1%2C+gostaria+de+falar+com+um+advogado."
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar em Contato
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-foreground hover:text-accent font-medium py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="btn-gold w-full mt-4">
                <a
                  href="https://api.whatsapp.com/send?phone=5582991301991&text=Ol%C3%A1%2C+gostaria+de+falar+com+um+advogado."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Entrar em Contato
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
