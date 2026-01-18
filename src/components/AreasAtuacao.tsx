import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Building2, FileWarning, HeartPulse, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const areas = [
  {
    icon: Briefcase,
    title: 'Advocacia de Direito Trabalhista',
    description:
      'Defesa completa dos seus direitos trabalhistas, desde a análise do caso até a execução da sentença.',
    features: ['Ações Trabalhistas', 'Recursos', 'Execução'],
  },
  {
    icon: Building2,
    title: 'Bancários',
    description:
      'Especialistas em causas de bancários, incluindo desvio de função e cargo de confiança.',
    features: ['Desvio de Função', 'Horas Extras', 'Cargo de Confiança'],
  },
  {
    icon: FileWarning,
    title: 'Trabalhador sem Carteira',
    description:
      'Recuperamos todos os seus direitos trabalhistas mesmo sem registro em carteira.',
    features: ['Vínculo Empregatício', 'Verbas Rescisórias', 'FGTS'],
  },
  {
    icon: HeartPulse,
    title: 'Acidente de Trabalho',
    description:
      'Lutamos por indenizações justas em casos de acidentes e doenças ocupacionais.',
    features: ['Indenizações', 'Pensões', 'Danos Morais'],
  },
];

const AreasAtuacao = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="areas" className="py-24 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Nossos Serviços
          </span>
          <h2 className="section-title mb-4">Áreas de Atuação</h2>
          <p className="section-subtitle mx-auto">
            Oferecemos soluções jurídicas especializadas para proteger seus direitos
            trabalhistas com experiência e dedicação.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-elegant group cursor-pointer"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                <area.icon className="h-7 w-7 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-primary mb-3">
                {area.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {area.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {area.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2.5 py-1 bg-secondary text-xs font-medium text-muted-foreground rounded-md"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Button
                variant="ghost"
                className="p-0 h-auto text-accent hover:text-accent-foreground hover:bg-transparent group/btn"
              >
                Saiba Mais
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasAtuacao;
