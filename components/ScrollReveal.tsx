import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: 'full' | 'auto';
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  width = 'full',
  direction = 'up'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Keep observing to handle scroll up/down animations
          // Don't unobserve so animations can replay when scrolling up
        } else {
          // When element goes out of view, reset animation for scroll up
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '-50px 0px -50px 0px' // Trigger from both top and bottom
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getTransformStyles = () => {
    const baseTransition = 'opacity 1s cubic-bezier(0.17, 0.55, 0.55, 1), transform 1s cubic-bezier(0.17, 0.55, 0.55, 1)';

    switch (direction) {
      case 'up':
        return {
          transition: baseTransition,
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? 'perspective(1000px) rotateX(0deg) translateY(0) scale(1)'
            : 'perspective(1000px) rotateX(30deg) translateY(100px) scale(0.9)',
        };
      case 'down':
        return {
          transition: baseTransition,
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? 'translateY(0) scale(1)'
            : 'translateY(-100px) scale(0.9)',
        };
      case 'left':
        return {
          transition: baseTransition,
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? 'translateX(0) scale(1)'
            : 'translateX(100px) scale(0.9)',
        };
      case 'right':
        return {
          transition: baseTransition,
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? 'translateX(0) scale(1)'
            : 'translateX(-100px) scale(0.9)',
        };
      case 'fade':
        return {
          transition: 'opacity 1.2s cubic-bezier(0.17, 0.55, 0.55, 1)',
          opacity: isVisible ? 1 : 0,
          transform: 'scale(1)',
        };
      default:
        return {
          transition: baseTransition,
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? 'perspective(1000px) rotateX(0deg) translateY(0) scale(1)'
            : 'perspective(1000px) rotateX(30deg) translateY(100px) scale(0.9)',
        };
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} ${width === 'full' ? 'w-full' : 'inline-block'}`}
      style={{
        ...getTransformStyles(),
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;