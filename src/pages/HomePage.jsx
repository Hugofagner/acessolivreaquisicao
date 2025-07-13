import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import ProcessSection from '@/components/home/ProcessSection';
import CTASection from '@/components/home/CTASection';
import ContactSection from '@/components/home/ContactSection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Acesso Livre - Especialistas em Aquisições de Provedores de Internet</title>
        <meta name="description" content="Líder em aquisições de provedores de internet no Brasil. Conectamos oportunidades, expandimos negócios e impulsionamos o crescimento do setor de telecomunicações." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <CTASection />
        <ContactSection />
      </motion.div>
    </>
  );
};

export default HomePage;