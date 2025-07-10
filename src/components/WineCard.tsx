import React from 'react';
import { Wine } from '../types/wine';
import { Wine as WineIcon } from 'lucide-react';

interface WineCardProps {
  wine: Wine;
}

const WineCard: React.FC<WineCardProps> = ({ wine }) => {
  return (
    <div className="group bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-custom hover:border-gold/30 p-4">
      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-charcoal/5 to-charcoal/10 rounded-lg mb-4 border border-charcoal/10">
        {wine.imageUrl ? (
          <img
            src={wine.imageUrl}
            alt={wine.name}
            className="w-full h-full object-cover rounded-lg p-2"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-charcoal/5 to-charcoal/15 rounded-lg">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-charcoal/10 rounded-full flex items-center justify-center">
                <WineIcon className="w-8 h-8 text-charcoal/60" />
              </div>
              <p className="text-sm text-charcoal/60 font-medium">Imagem não disponível</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-2">
        <h3 className="text-sm font-semibold text-gold leading-tight line-clamp-3 hover:text-burgundy transition-colors duration-300">
          {wine.name}
        </h3>
      </div>
    </div>
  );
};

export default WineCard;