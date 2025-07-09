import Header from './components/Header';
import ProducerSection from './components/ProducerSection';
import { catalog } from './data/catalogData';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-surface font-display">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          {catalog.map((producer, index) => (
            <ProducerSection
              key={producer.id}
              producer={producer}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-white border-t border-custom py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-1 bg-gold-gradient mx-auto mb-6 rounded-full"></div>
          <h3 className="text-2xl font-bold text-gold mb-2">Vino Veritas</h3>
          <p className="text-[#64748b]">Catálogo Premium de Vinhos</p>
          <p className="text-muted mt-4 text-sm">
            Descubra a excelência dos vinhos selecionados
          </p>
        </div>
      </footer> */}
    </div>
  );
}

export default App;