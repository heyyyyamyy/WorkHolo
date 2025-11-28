import React from 'react';

interface LogoProps {
  className?: string;
}

const logoSrc = '/workholo logo.png';

export const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <img
      src={logoSrc}
      alt="WorkHolo logo"
      className={`${className} object-contain`}
      loading="lazy"
      decoding="async"
    />
  );
};

export default Logo;