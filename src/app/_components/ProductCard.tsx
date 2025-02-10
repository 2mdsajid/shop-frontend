import React from 'react';
import { Heart, Flame } from 'lucide-react';
import { TBasicBagInfo } from '@/lib/global-types';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: TBasicBagInfo;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="luxury-card group">
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button 
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 shadow-md hover:bg-rose-gold hover:text-white transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart className="h-5 w-5" />
        </button>
        {product.hasDiscount && product.hasDiscount?.value > 0 && (
          <div className="absolute top-4 left-4 bg-rose-gold text-white px-3 py-1 rounded-full text-sm font-medium">
            Save {product.hasDiscount?.value}%
          </div>
        )}
        {product.isNew && (
          <div className="absolute bottom-4 left-4 bg-champagne text-rose-gold px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <Flame className="w-4 h-4 mr-1" /> Trending
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-medium mb-2 text-gray-900">{product.name}</h3>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xl font-medium text-rose-gold">${product.price.toFixed(2)}</span>
          {product.hasDiscount && product.hasDiscount?.value > 0 && (
            <span className="text-sm text-gray-400 line-through">${product.price.toFixed(2)}</span>
          )}
        </div>
        <Button variant="outline" className="w-full">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};