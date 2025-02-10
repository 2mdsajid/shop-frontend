import { useEffect, useCallback } from 'react';

interface UseCarouselControlsProps {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  itemsLength: number;
  autoPlayInterval: number;
}

export function useCarouselControls({
  currentIndex,
  setCurrentIndex,
  itemsLength,
  autoPlayInterval,
}: UseCarouselControlsProps) {
  const goToNext = useCallback(() => {
    setCurrentIndex((currentIndex + 1) % itemsLength);
  }, [currentIndex, itemsLength, setCurrentIndex]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((currentIndex - 1 + itemsLength) % itemsLength);
  }, [currentIndex, itemsLength, setCurrentIndex]);

  const goToIndex = useCallback(
    (index: number) => {
      setCurrentIndex(index);
    },
    [setCurrentIndex]
  );

  useEffect(() => {
    const timer = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [goToNext, autoPlayInterval]);

  return { goToNext, goToPrevious, goToIndex };
}