import React from 'react';
import { Wine } from '../types/wine';
import { Wine as WineIcon } from 'lucide-react';

interface WineCardProps {
  wine: Wine;
}

const WineCard: React.FC<WineCardProps> = ({ wine }) => {
  return (
    <div className="group bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden border border-custom hover:border-primary/20">
      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden bg-surface">
        {wine.imageUrl ? (
          <img
            src={wine.imageUrl}
            alt={wine.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface to-secondary">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                <WineIcon className="w-8 h-8 text-primary/60" />
              </div>
              <p className="text-sm text-muted font-medium">Imagem não disponível</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-burgundy leading-tight line-clamp-3">
          {wine.name}
        </h3>
      </div>
    </div>
  );
};

export default WineCard;