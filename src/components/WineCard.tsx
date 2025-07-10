import React from 'react';
import { Wine } from '../types/wine';
import { Wine as WineIcon } from 'lucide-react';

interface WineCardProps {
  wine: Wine;
}

const WineCard: React.FC<WineCardProps> = ({ wine }) => {
  return (
    <div className=" bg-white rounded-xl shadow-card border  ">
      {/* Image Container */}
      <div>
        {wine.imageUrl ? (
          <img
            src={wine.imageUrl}
            alt={wine.name}
            className="w-full h-80 object-cover rounded-t-xl border-cream border-8"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface to-secondary">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-burgundy/10 rounded-full flex items-center justify-center">
                <WineIcon className="w-8 h-8 text-burgundy/60" />
              </div>
              <p className="text-sm text-muted font-medium">Imagem não disponível</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 bg-cream">
        <h3 className="text-base font-bold text-charcoal leading-tight">
          {wine.name}
        </h3>
      </div>
    </div>
  );
};

export default WineCard;