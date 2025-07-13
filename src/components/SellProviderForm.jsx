import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Send } from 'lucide-react';

const steps = [
  { id: 1, title: 'Informações de Contato' },
  { id: 2, title: 'Informações Financeiras' },
  { id: 3, title: 'Base de Clientes' },
  { id: 4, title: 'Estrutura de Rede / Ativos' },
  { id: 5, title: 'Projeto de Rede FTTH' },
  { id: 6, title: 'POPs, Infraestrutura e Energia' },
  { id: 7, title: 'Torres, Rádio e Acesso Técnico' },
  { id: 8, title: 'Equipe e Colaboradores' },
];

const initialFormData = {
  contactName: '',
  email: '',
  providerName: '',
  cityState: '',
  monthlyRevenue1: '',
  monthlyRevenue2: '',
  monthlyRevenue3: '',
  paidClients1: '',
  paidClients2: '',
  paidClients3: '',
  unpaidClients1: '',
  unpaidClients2: '',
  unpaidClients3: '',
  cancelledClients1: '',
  cancelledClients2: '',
  cancelledClients3: '',
  loyaltyContract: '',
  loyaltyPercentage: '',
  pjClients: '',
  fiberClients: '',
  neutralFiberClients: '',
  radioClients: '',
  pacponClients: '',
  ipv4Block: '',
  ipv6Block: '',
  oltType: '',
  activeOlts: '',
  activePons: '',
  availablePons: '',
  oltBrand: '',
  ownCtos: '',
  ctoSignal: '',
  paidPoles: '',
  fiberKm: '',
  ftthKmz: '',
  popCount: '',
  popOwnership: '',
  powerRedundancy: '',
  activeTowers: '',
  remoteAccess: '',
  totalEmployees: '',
  fieldTechs: '',
  internalSupport: '',
  adminStaff: '',
};

const FormInput = ({ label, name, type = 'text', placeholder, value, onChange, required = false }) => (
  <div>
    <label htmlFor={name} className="block text-lg font-medium text-slate-700 mb-2">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300"
    />
  </div>
);

const FormSelect = ({ label, name, value, onChange, options, required = false }) => (
  <div>
    <label htmlFor={name} className="block text-lg font-medium text-slate-700 mb-2">{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-300 bg-white"
    >
      <option value="" disabled>Selecione...</option>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

const SellProviderForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, steps.length));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀"
    });
  };

  const slideVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '-100%' },
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-700">Etapa {currentStep} de {steps.length}</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / steps.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
        <h3 className="text-2xl font-bold mt-4 text-slate-800">{steps[currentStep - 1].title}</h3>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="space-y-6"
        >
          {currentStep === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput label="Seu Nome" name="contactName" value={formData.contactName} onChange={handleChange} placeholder="Ex: João da Silva" required />
              <FormInput label="Seu E-mail" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Ex: joao.silva@email.com" required />
              <FormInput label="Nome do Provedor" name="providerName" value={formData.providerName} onChange={handleChange} placeholder="Ex: Internet Rápida Ltda." required />
              <FormInput label="Cidade/Estado de Atuação" name="cityState" value={formData.cityState} onChange={handleChange} placeholder="Ex: São Paulo, SP" required />
            </div>
          )}
          {currentStep === 2 && (
            <div className="space-y-4">
              <p className="text-lg font-medium text-slate-700">Total de mensalidades recebidas (últimos 3 meses)</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormInput label="Mês 1" name="monthlyRevenue1" type="number" value={formData.monthlyRevenue1} onChange={handleChange} placeholder="R$" />
                <FormInput label="Mês 2" name="monthlyRevenue2" type="number" value={formData.monthlyRevenue2} onChange={handleChange} placeholder="R$" />
                <FormInput label="Mês 3" name="monthlyRevenue3" type="number" value={formData.monthlyRevenue3} onChange={handleChange} placeholder="R$" />
              </div>
              <p className="text-lg font-medium text-slate-700 pt-4">Total de clientes que pagaram</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormInput label="Mês 1" name="paidClients1" type="number" value={formData.paidClients1} onChange={handleChange} />
                <FormInput label="Mês 2" name="paidClients2" type="number" value={formData.paidClients2} onChange={handleChange} />
                <FormInput label="Mês 3" name="paidClients3" type="number" value={formData.paidClients3} onChange={handleChange} />
              </div>
              <p className="text-lg font-medium text-slate-700 pt-4">Total de clientes que não pagaram</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormInput label="Mês 1" name="unpaidClients1" type="number" value={formData.unpaidClients1} onChange={handleChange} />
                <FormInput label="Mês 2" name="unpaidClients2" type="number" value={formData.unpaidClients2} onChange={handleChange} />
                <FormInput label="Mês 3" name="unpaidClients3" type="number" value={formData.unpaidClients3} onChange={handleChange} />
              </div>
              <p className="text-lg font-medium text-slate-700 pt-4">Total de clientes que cancelaram</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormInput label="Mês 1" name="cancelledClients1" type="number" value={formData.cancelledClients1} onChange={handleChange} />
                <FormInput label="Mês 2" name="cancelledClients2" type="number" value={formData.cancelledClients2} onChange={handleChange} />
                <FormInput label="Mês 3" name="cancelledClients3" type="number" value={formData.cancelledClients3} onChange={handleChange} />
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormSelect label="Clientes têm contrato de fidelidade?" name="loyaltyContract" value={formData.loyaltyContract} onChange={handleChange} options={['Sim', 'Não']} />
              <FormInput label="Percentual de clientes com fidelidade (%)" name="loyaltyPercentage" type="number" value={formData.loyaltyPercentage} onChange={handleChange} placeholder="Ex: 80" />
              <FormInput label="Total de clientes PJ / Empresas" name="pjClients" type="number" value={formData.pjClients} onChange={handleChange} />
              <FormInput label="Total de clientes na fibra" name="fiberClients" type="number" value={formData.fiberClients} onChange={handleChange} />
              <FormInput label="Total de clientes na fibra de terceiros" name="neutralFiberClients" type="number" value={formData.neutralFiberClients} onChange={handleChange} />
              <FormInput label="Total de clientes no rádio" name="radioClients" type="number" value={formData.radioClients} onChange={handleChange} />
              <FormInput label="Total de clientes no pacpon / cabo" name="pacponClients" type="number" value={formData.pacponClients} onChange={handleChange} />
            </div>
          )}
          {currentStep === 4 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormSelect label="Possui bloco próprio de IPv4?" name="ipv4Block" value={formData.ipv4Block} onChange={handleChange} options={['Sim', 'Não']} />
              <FormSelect label="Possui bloco de IPv6?" name="ipv6Block" value={formData.ipv6Block} onChange={handleChange} options={['Sim', 'Não']} />
              <FormSelect label="OLT utilizada" name="oltType" value={formData.oltType} onChange={handleChange} options={['GPON', 'EPON', 'Ambos']} />
              <FormInput label="Quantidade de OLTs ativas" name="activeOlts" type="number" value={formData.activeOlts} onChange={handleChange} />
              <FormInput label="Quantidade de PONs ativas" name="activePons" type="number" value={formData.activePons} onChange={handleChange} />
              <FormInput label="Quantidade de PONs disponíveis" name="availablePons" type="number" value={formData.availablePons} onChange={handleChange} />
              <FormInput label="Marca das OLTs" name="oltBrand" value={formData.oltBrand} onChange={handleChange} />
              <FormInput label="Quantidade de CTOs próprias na rede" name="ownCtos" type="number" value={formData.ownCtos} onChange={handleChange} />
              <FormInput label="Média de sinal das CTOs (dBm)" name="ctoSignal" value={formData.ctoSignal} onChange={handleChange} placeholder="Ex: -21" />
            </div>
          )}
          {currentStep === 5 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput label="Quantidade de postes pagos" name="paidPoles" type="number" value={formData.paidPoles} onChange={handleChange} />
              <FormInput label="KM de fibra lançados (exceto drop)" name="fiberKm" type="number" value={formData.fiberKm} onChange={handleChange} />
              <FormSelect label="Rede FTTH documentada com KMZ?" name="ftthKmz" value={formData.ftthKmz} onChange={handleChange} options={['Sim', 'Não']} />
            </div>
          )}
          {currentStep === 6 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput label="Quantidade de POPs (local das OLTs)" name="popCount" type="number" value={formData.popCount} onChange={handleChange} />
              <FormSelect label="POPs são alugados ou próprios?" name="popOwnership" value={formData.popOwnership} onChange={handleChange} options={['Alugados', 'Próprios', 'Misto']} />
              <FormSelect label="Possui estrutura de redundância de energia?" name="powerRedundancy" value={formData.powerRedundancy} onChange={handleChange} options={['Sim', 'Não']} />
            </div>
          )}
          {currentStep === 7 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput label="Quantidade de torres ativas" name="activeTowers" type="number" value={formData.activeTowers} onChange={handleChange} />
              <FormSelect label="Aparelhos dos clientes acessíveis remotamente?" name="remoteAccess" value={formData.remoteAccess} onChange={handleChange} options={['Sim', 'Não']} />
            </div>
          )}
          {currentStep === 8 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput label="Quantidade total de colaboradores" name="totalEmployees" type="number" value={formData.totalEmployees} onChange={handleChange} />
              <FormInput label="Técnicos de campo" name="fieldTechs" type="number" value={formData.fieldTechs} onChange={handleChange} />
              <FormInput label="Atendimento / Suporte (interno)" name="internalSupport" type="number" value={formData.internalSupport} onChange={handleChange} />
              <FormInput label="Administrativo" name="adminStaff" type="number" value={formData.adminStaff} onChange={handleChange} />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-between">
        <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 1} className="border-2 border-slate-400 text-slate-600 hover:bg-slate-100">
          <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
        </Button>
        {currentStep < steps.length ? (
          <Button type="button" onClick={nextStep} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            Próximo <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button type="submit" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600">
            Enviar Avaliação <Send className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </form>
  );
};

export default SellProviderForm;