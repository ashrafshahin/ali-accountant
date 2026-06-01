
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1575290970649-8490709215cf',
    alt: 'Accounting workspace with documents and calculator',
  },
  {
    url: 'https://images.unsplash.com/photo-1551135049-8a33b5883817',
    alt: 'Business professionals analyzing financial data in a meeting',
  },
  {
    url: 'https://images.unsplash.com/photo-1579388735156-3e71549fad0b',
    alt: 'Modern, bright office interior',
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000 ease-in-out',
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          )}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="object-cover w-full h-full"
          />
          {/* Overlay to ensure text readability if overlaid later */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 z-20 pointer-events-none">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full w-12 h-12 bg-background/50 hover:bg-background/90 text-foreground pointer-events-auto backdrop-blur-sm transition-all"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full w-12 h-12 bg-background/50 hover:bg-background/90 text-foreground pointer-events-auto backdrop-blur-sm transition-all"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={cn(
              'w-3 h-3 rounded-full transition-all duration-300',
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/80'
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
