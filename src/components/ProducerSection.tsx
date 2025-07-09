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
      className={`bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 ${
        isEven ? 'animate-slide-in-left' : 'animate-slide-in-right'
      }`}
    >
      <div className="p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            {producer.name}
          </h2>
          <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {producer.wines.map((wine, index) => (
            <div
              key={wine.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
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