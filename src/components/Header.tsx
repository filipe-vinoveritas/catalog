import React from 'react';
import { Wine, Grape } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center animate-fade-in-up">
          <div className="flex items-center justify-center mb-8">
            <Grape className="w-10 h-10 mr-4 text-white/90" />
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Vino Veritas
            </h1>
            <Wine className="w-10 h-10 ml-4 text-white/90" />
          </div>
          <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto mb-8">
            Catálogo Premium de Vinhos Selecionados
          </p>
          <div className="w-24 h-1 bg-white/80 mx-auto rounded-full"></div>
          <p className="text-lg text-white/80 mt-6 max-w-xl mx-auto">
            Descubra a excelência dos vinhos importados
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;