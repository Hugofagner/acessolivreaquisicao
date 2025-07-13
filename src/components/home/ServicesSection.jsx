import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Zap, Award, Globe, CheckCircle } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Oferecemos soluções completas para aquisições de provedores, desde a avaliação inicial até a integração final.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Building2,
              title: "Avaliação de Provedores",
              description: "Análise completa da infraestrutura, base de clientes, receita e potencial de crescimento."
            },
            {
              icon: Users,
              title: "Due Diligence",
              description: "Processo rigoroso de verificação financeira, legal e operacional antes da aquisição."
            },
            {
              icon: Zap,
              title: "Integração Rápida",
              description: "Processo otimizado de integração que minimiza interrupções e maximiza sinergias."
            },
            {
              icon: Award,
              title: "Valorização Justa",
              description: "Metodologia transparente de avaliação que garante preços justos para vendedores."
            },
            {
              icon: Globe,
              title: "Expansão Geográfica",
              description: "Estratégia de crescimento através de aquisições em regiões estratégicas do Brasil."
            },
            {
              icon: CheckCircle,
              title: "Suporte Contínuo",
              description: "Acompanhamento pós-aquisição para garantir transição suave e crescimento sustentável."
            }
          ].map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-800">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;