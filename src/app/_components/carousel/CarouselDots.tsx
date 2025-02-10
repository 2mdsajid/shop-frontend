import React from 'react';

interface CarouselDotsProps {
  count: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

export function CarouselDots({ count, currentIndex, onDotClick }: CarouselDotsProps) {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-2.5 h-2.5 rounded-full transition-all ${
            currentIndex === index
              ? 'bg-white scale-110'
              : 'bg-white/50 hover:bg-white/70'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}