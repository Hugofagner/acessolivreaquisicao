import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="container mx-auto px-6">
        <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-[-4rem] mb-20 z-10 relative"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
        >
        {[
            { number: "150+", label: "Aquisições Realizadas" },
            { number: "R$ 2.5B", label: "Volume Transacionado" },
            { number: "25", label: "Estados Atendidos" },
            { number: "98%", label: "Taxa de Sucesso" }
        ].map((stat, index) => (
            <motion.div 
            key={index}
            variants={fadeInUp}
            className="text-center bg-white rounded-2xl p-6 shadow-xl"
            >
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
            <div className="text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
        ))}
        </motion.div>
    </div>
  );
};

export default StatsSection;