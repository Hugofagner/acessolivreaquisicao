import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 mb-4 md:mb-0">
            <Wifi className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">Acesso Livre</span>
          </Link>
          <div className="text-slate-400 text-center md:text-right">
            <p>&copy; 2025 Acesso Livre. Todos os direitos reservados.</p>
            <p className="mt-2">Especialistas em aquisições de provedores de internet</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;