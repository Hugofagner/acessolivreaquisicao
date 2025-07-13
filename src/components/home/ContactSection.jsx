import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Estamos prontos para discutir oportunidades de aquisição. Fale conosco e descubra como podemos trabalhar juntos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Phone,
              title: "Telefone",
              info: "+55 (11) 9999-9999",
              description: "Seg-Sex, 9h às 18h"
            },
            {
              icon: Mail,
              title: "E-mail",
              info: "contato@acessolivre.com.br",
              description: "Resposta em até 24h"
            },
            {
              icon: MapPin,
              title: "Escritório",
              info: "São Paulo, SP",
              description: "Atendemos todo o Brasil"
            }
          ].map((contact, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <contact.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">{contact.title}</h3>
              <p className="text-blue-600 font-semibold mb-2">{contact.info}</p>
              <p className="text-slate-600">{contact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;