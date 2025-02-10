import { categories } from '@/lib/data';
import React from 'react';

export const CategorySection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">
                {category.icon}
              </span>
              <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};