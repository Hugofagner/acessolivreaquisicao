import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SellProviderForm from '@/components/SellProviderForm';

const SellProviderPage = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  return (
    <>
      <Helmet>
        <title>Venda Seu Provedor | AcquireNet Brasil</title>
        <meta name="description" content="Inicie o processo de venda do seu provedor de internet com a AcquireNet Brasil. Oferecemos avaliação justa e um processo transparente." />
      </Helmet>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="gradient-text">Venda seu Provedor</span> com Confiança
            </motion.h1>
            <motion.p 
              className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Preencha o formulário abaixo para iniciar uma avaliação confidencial e sem compromisso do seu provedor de internet. Nossa equipe de especialistas entrará em contato em breve.
            </motion.p>
          </div>

          <motion.div 
            className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-2xl glass-effect"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SellProviderForm />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default SellProviderPage;