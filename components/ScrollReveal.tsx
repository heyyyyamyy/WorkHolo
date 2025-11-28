import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: 'full' | 'auto';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  width = 'full'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing to keep it visible
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px'
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

  return (
    <div
      ref={ref}
      className={`${className} ${width === 'full' ? 'w-full' : 'inline-block'}`}
      style={{
        transition: 'opacity 1s cubic-bezier(0.17, 0.55, 0.55, 1), transform 1s cubic-bezier(0.17, 0.55, 0.55, 1)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'perspective(1000px) rotateX(0deg) translateY(0) scale(1)' 
          : 'perspective(1000px) rotateX(30deg) translateY(100px) scale(0.9)',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;