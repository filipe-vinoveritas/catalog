import React from 'react';
import { Wine } from '../types/wine';
import { Wine as WineIcon } from 'lucide-react';

interface WineCardProps {
  wine: Wine;
}

const WineCard: React.FC<WineCardProps> = ({ wine }) => {
  return (
    <div className=" bg-white rounded-lg overflow-hidden shadow-lg p-[0.08rem] flex w-[40vw]">
      <div className="flex items-center gap-5 bg-gradient-to-br from-white to-cream/30">
        {wine.imageUrl ? (
          <img
            src={wine.imageUrl}
            alt={wine.name}
            className="w-28 h-28 object-cover rounded-lg"
          />
        ) : (
          <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-burgundy/20 to-wine-purple/20 rounded-lg border border-gold/40">
            <WineIcon className="w-8 h-8 text-burgundy" />
          </div>
        )}
        <h3 className="text-xl font-bold text-charcoal group-hover:text-burgundy transition-colors duration-300">
          {wine.name}
        </h3>
      </div>
      {/* {wine.description && (
        <p className="text-charcoal/70 text-sm leading-relaxed line-clamp-3 group-hover:text-charcoal transition-colors duration-300 px-6">
          {wine.description}
        </p>
      )} */}
      {/* Decorative bottom border */}
      <div className="mt-2 h-1 bg-gradient-to-r from-burgundy via-gold to-burgundy rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 mx-6"></div>
    </div>
  );
};

export default WineCard;