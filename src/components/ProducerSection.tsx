import React from 'react';
import WineCard from './WineCard';
import { Producer } from '../types/wine';


interface ProducerSectionProps {
  producer: Producer;
  isEven: boolean;
}

const ProducerSection: React.FC<ProducerSectionProps> = ({ producer, isEven }) => {
  return (
    <section
      className={`rounded-lg overflow-hidden shadow-xl  ${isEven
        ? 'bg-gradient-to-br from-burgundy to-wine-purple animate-slide-in-left'
        : 'bg-gradient-to-br from-wine-purple to-burgundy animate-slide-in-right'
        }`}
    >
      <div className="p-8 md:p-12 relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-orange/5 rounded-full blur-2xl"></div>

        <div className="text-center mb-12 relative z-10">
          <h2 className="text-5xl md:text-6xl  font-bold text-gold mb-6 tracking-wide drop-shadow-lg">
            {producer.name}
          </h2>

          <div className="w-24 h-2 bg-gold-gradient mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="flex flex-wrap gap-8 relative z-10">
          {producer.wines.map((wine) => (
            <div
              key={wine.id}
            // className="animate-fade-in-up"
            // style={{ animationDelay: `${index * 0.1}s` }}
            >
              <WineCard wine={wine} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProducerSection;