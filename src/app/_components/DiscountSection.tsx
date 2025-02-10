import { DUMMY_BAGS_DATA } from '@/lib/data';
import React from 'react';
import { ProductCard } from './ProductCard';

export const DiscountSection: React.FC = () => {
  const discountedProducts = DUMMY_BAGS_DATA.filter(product => product?.hasDiscount && product.hasDiscount.value > 0);
  
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
          Special Offers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {discountedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};