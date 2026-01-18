import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Manu Bernardo',
    date: 'há 2 semanas',
    rating: 5,
    text: 'Profissionais extremamente competentes e atenciosos. Ganhei minha causa trabalhista e recebi todos os meus direitos. Recomendo muito!',
    avatar: 'M',
  },
  {
    name: 'Abílio da Silva',
    date: 'há 1 mês',
    rating: 5,
    text: 'Estava com medo de processar a empresa, mas o Dr. Bruno me deu toda confiança e segurança. Resultado além das expectativas.',
    avatar: 'A',
  },
  {
    name: 'Hanney Lopes',
    date: 'há 3 semanas',
    rating: 5,
    text: 'Atendimento humanizado e resultado excelente. Consegui todas as verbas que a empresa devia. Muito obrigada pela dedicação!',
    avatar: 'H',
  },
  {
    name: 'Carlos Mendes',
    date: 'há 2 meses',
    rating: 5,
    text: 'Trabalhei 5 anos sem carteira assinada. O escritório conseguiu reconhecer meu vínculo e todos os direitos. Sensacional!',
    avatar: 'C',
  },
  {
    name: 'Patricia Santos',
    date: 'há 1 semana',
    rating: 5,
    text: 'Sofri acidente de trabalho e a empresa queria me demitir. Graças ao Dr. Bruno, consegui estabilidade e indenização.',
    avatar: 'P',
  },
  {
    name: 'Roberto Almeida',
    date: 'há 3 meses',
    rating: 5,
    text: 'Equipe muito profissional. Me mantiveram informado durante todo o processo. Ganhei a causa em tempo recorde!',
    avatar: 'R',
  },
];

const Depoimentos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="depoimentos" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Prova Social
          </span>
          <h2 className="section-title mb-4">Inúmeros Clientes Satisfeitos</h2>
          <p className="section-subtitle mx-auto">
            Veja o que nossos clientes dizem sobre nossa atuação e compromisso com
            seus direitos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elegant relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/20" />
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="font-display font-semibold text-accent text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.date}
                  </div>
                </div>
              </div>

              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Google Review Badge */}
              <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-4 h-4"
                />
                <span className="text-xs text-muted-foreground">
                  Avaliação do Google
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
