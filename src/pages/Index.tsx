import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AreasAtuacao from '@/components/AreasAtuacao';
import Sobre from '@/components/Sobre';
import FAQ from '@/components/FAQ';
import Depoimentos from '@/components/Depoimentos';
import Contato from '@/components/Contato';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AreasAtuacao />
        <Sobre />
        <FAQ />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
