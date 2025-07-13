import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 glass-effect"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Wifi className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold gradient-text">Acesso Livre</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/#sobre" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Sobre</NavLink>
            <NavLink to="/#servicos" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Serviços</NavLink>
            <NavLink to="/#processo" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Processo</NavLink>
            <NavLink to="/#contato" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Contato</NavLink>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <Link to="/vender-provedor">Vender Provedor</Link>
            </Button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;