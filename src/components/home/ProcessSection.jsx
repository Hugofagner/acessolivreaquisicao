import React from 'react';
import { motion } from 'framer-motion';

const ProcessSection = () => {
  return (
    <section id="processo" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nosso <span className="gradient-text">Processo</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Um processo estruturado e transparente que garante aquisições bem-sucedidas para todas as partes envolvidas.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {[
            {
              step: "01",
              title: "Identificação e Contato Inicial",
              description: "Identificamos provedores com potencial de aquisição e estabelecemos primeiro contato para avaliar interesse mútuo."
            },
            {
              step: "02", 
              title: "Avaliação Preliminar",
              description: "Realizamos análise inicial da empresa, incluindo receita, base de clientes, infraestrutura e posição no mercado."
            },
            {
              step: "03",
              title: "Proposta e Negociação",
              description: "Apresentamos proposta de aquisição baseada em avaliação justa e iniciamos processo de negociação transparente."
            },
            {
              step: "04",
              title: "Due Diligence Completa",
              description: "Conduzimos auditoria detalhada de todos os aspectos financeiros, legais e operacionais da empresa."
            },
            {
              step: "05",
              title: "Fechamento e Integração",
              description: "Finalizamos a aquisição e iniciamos processo de integração cuidadosa para garantir continuidade dos serviços."
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-start mb-12 last:mb-0"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;