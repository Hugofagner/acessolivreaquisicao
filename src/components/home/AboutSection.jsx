import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, HeartHandshake as Handshake, Target } from 'lucide-react';

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Especialistas</span> em Aquisições
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Somos uma empresa especializada exclusivamente na aquisição de provedores de internet no Brasil. 
            Nossa missão é identificar, avaliar e adquirir provedores com potencial de crescimento, 
            criando valor para todos os envolvidos no processo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Foco Estratégico",
              description: "Concentramos 100% dos nossos esforços na aquisição de provedores de internet, garantindo expertise especializada."
            },
            {
              icon: Handshake,
              title: "Parcerias Sólidas",
              description: "Construímos relacionamentos duradouros baseados em transparência, confiança e benefícios mútuos."
            },
            {
              icon: TrendingUp,
              title: "Crescimento Sustentável",
              description: "Impulsionamos o crescimento do setor através de aquisições estratégicas e investimentos inteligentes."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="glass-effect rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;