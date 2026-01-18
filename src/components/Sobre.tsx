import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';

const stats = [
  { icon: Users, value: '2.500+', label: 'Clientes Atendidos' },
  { icon: Award, value: '15+', label: 'Anos de Experiência' },
  { icon: Shield, value: '95%', label: 'Taxa de Sucesso' },
  { icon: Clock, value: '24h', label: 'Retorno Garantido' },
];

const Sobre = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Sobre Nós
            </span>
            <h2 className="section-title mb-6">
              Protegendo os Direitos dos Trabalhadores há mais de 15 Anos
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                O escritório <strong className="text-primary">Bruno Vale Advocacia</strong> nasceu com a missão
                de oferecer atendimento jurídico de excelência na área trabalhista,
                sempre priorizando a <strong className="text-primary">transparência</strong> e a{' '}
                <strong className="text-primary">dedicação integral</strong> aos interesses dos nossos clientes.
              </p>
              <p>
                Nossa equipe é formada por advogados especializados e atualizados com
                as constantes mudanças na legislação trabalhista brasileira, garantindo
                as melhores estratégias para cada caso.
              </p>
              <p>
                Acreditamos que todo trabalhador merece ter seus direitos respeitados
                e lutamos incansavelmente para que isso aconteça. Seu caso é tratado
                com a importância que merece.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="font-display text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
                alt="Escritório moderno de advocacia"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-display font-semibold text-primary">
                    Atendimento Humanizado
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Cada cliente é único
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
