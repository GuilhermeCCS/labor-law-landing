import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Qual o prazo de pagamento da rescisão?',
    answer:
      'Em caso de demissão por justa causa ou aviso prévio indenizado, a empresa tem até 10 dias corridos para efetuar o pagamento das verbas rescisórias. No caso de aviso prévio trabalhado, o pagamento deve ser feito no primeiro dia útil após o término do aviso.',
  },
  {
    question: 'O que é rescisão indireta?',
    answer:
      'A rescisão indireta ocorre quando o empregador comete falta grave, como não pagar salários em dia, assédio moral, não recolher FGTS, entre outras situações previstas no Art. 483 da CLT. Neste caso, o trabalhador pode "demitir" a empresa e receber todas as verbas como se tivesse sido demitido sem justa causa.',
  },
  {
    question: 'A empresa pode me trocar de horário sem meu consentimento?',
    answer:
      'Não. A alteração de horário de trabalho só pode ser feita com o consentimento do empregado. Mudanças unilaterais que causem prejuízo ao trabalhador são proibidas pela CLT (Art. 468). Exceções podem existir em casos específicos previstos em convenção coletiva.',
  },
  {
    question: 'Não precisa assinar a carteira nos primeiros três meses?',
    answer:
      'MITO! A carteira de trabalho deve ser assinada desde o primeiro dia de trabalho. A anotação deve ser feita em até 5 dias úteis. O período de experiência não isenta a empresa dessa obrigação. Trabalhar sem registro é ilegal e você pode buscar seus direitos na Justiça.',
  },
  {
    question: 'Quais são meus direitos se for demitido sem justa causa?',
    answer:
      'Você tem direito a: aviso prévio (trabalhado ou indenizado), saldo de salário, férias proporcionais + 1/3, 13º salário proporcional, multa de 40% sobre o FGTS, liberação do FGTS para saque e guias para seguro-desemprego.',
  },
  {
    question: 'Posso processar a empresa se sofrer assédio moral?',
    answer:
      'Sim. O assédio moral no trabalho é passível de indenização por danos morais. É importante reunir provas como mensagens, e-mails, gravações (permitidas em casos de assédio) e testemunhas. O prazo para entrar com a ação é de até 2 anos após o fim do contrato de trabalho.',
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="py-24 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Tire Suas Dúvidas
          </span>
          <h2 className="section-title mb-4">Dúvidas Frequentes</h2>
          <p className="section-subtitle mx-auto">
            Respondemos as perguntas mais comuns sobre direitos trabalhistas para
            ajudá-lo a entender melhor sua situação.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border-none shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-display text-lg font-medium text-primary hover:text-accent hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
