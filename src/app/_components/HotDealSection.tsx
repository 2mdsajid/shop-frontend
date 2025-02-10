import { DUMMY_BAGS_DATA } from '@/lib/data';
import React from 'react';
import { ProductCard } from './ProductCard';

export const HotDealsSection: React.FC = () => {
  const hotProducts = DUMMY_BAGS_DATA.filter(product => product.isNew);
  
  return (
    <section className="py-12 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
          🔥 Hot Right Now
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {hotProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};