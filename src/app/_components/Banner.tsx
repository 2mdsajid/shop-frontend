import { Button } from '@/components/ui/button';
import React from 'react';

export const Banner: React.FC = () => {
  return (
    <div className="relative h-[600px] bg-marble bg-cover bg-center mt-16">
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 leading-tight">
            Timeless Elegance in Every Detail
          </h1>
          <p className="text-lg md:text-xl text-soft-pink mb-8 font-light">
            Discover our curated collection of luxury handbags, crafted with precision and sophistication
          </p>
          <Button variant="luxury" size="lg" className="hover:scale-105 transform transition">
            Explore Collection
          </Button>
        </div>
      </div>
    </div>
  );
};