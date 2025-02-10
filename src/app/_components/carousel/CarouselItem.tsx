import React from 'react';
import Image from 'next/image';
import { CarouselItemProps } from './types';

export function CarouselItem({ image, title, description, isActive }: CarouselItemProps) {
  return (
    <div
      className={`absolute inset-0 transition-all duration-500 ease-in-out transform ${
        isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      }`}
    >
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>
    </div>
  );
}

