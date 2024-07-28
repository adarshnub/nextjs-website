// CustomArrows.tsx
import React from 'react';

interface ArrowProps {
  className?: string;
  onClick: () => void;
}

export const PrevArrow: React.FC<ArrowProps> = ({ className, onClick }) => (
  <button className={`arrow ${className} w-[25px] h-[25px]`} onClick={onClick}>
    ❮
  </button>
);

export const NextArrow: React.FC<ArrowProps> = ({ className, onClick }) => (
  <button className={`arrow ${className} w-[25px] h-[25px]`} onClick={onClick}>
    ❯
  </button>
);
