import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CarouselDots } from './CarouselDots';
import { CarouselItem } from './CarouselItem';
import { CarouselProps } from './types';
import { useCarouselControls } from './useCarouselControls';


export function Carousel({ items, autoPlayInterval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { goToNext, goToPrevious, goToIndex } = useCarouselControls({
    currentIndex,
    setCurrentIndex,
    itemsLength: items.length,
    autoPlayInterval,
  });

  const renderSlide = useCallback((index: number) => {
    const item = items[index];
    return (
      <CarouselItem
        key={index}
        {...item}
        isActive={currentIndex === index}
      />
    );
  }, [items, currentIndex]);

  return (
    <div className="relative w-full  mx-auto overflow-hidden rounded-xl">
      <div className="relative min-h-[400px] w-full">
        {items.map((_, index) => renderSlide(index))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <CarouselDots
        count={items.length}
        currentIndex={currentIndex}
        onDotClick={goToIndex}
      />
    </div>
  );
}