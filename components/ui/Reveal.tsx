'use client';

import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number; // in ms
  duration?: number; // in ms
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number; // offset distance in px
  className?: string;
  triggerOnce?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  duration = 900,
  direction = 'up',
  distance = 32,
  className = '',
  triggerOnce = true,
}: RevealProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If the browser doesn't support IntersectionObserver, trigger immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.05, // Trigger as soon as 5% of the element enters the viewport
        rootMargin: '0px 0px -30px 0px', // Trigger slightly before it comes fully into view
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [triggerOnce]);

  const getTransform = () => {
    if (hasAnimated) return 'translate(0, 0)';
    switch (direction) {
      case 'up':
        return `translateY(${distance}px)`;
      case 'down':
        return `translateY(-${distance}px)`;
      case 'left':
        return `translateX(${distance}px)`;
      case 'right':
        return `translateX(-${distance}px)`;
      default:
        return 'none';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
      style={{
        opacity: hasAnimated ? 1 : 0,
        transform: getTransform(),
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
