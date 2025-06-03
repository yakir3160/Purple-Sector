'use client';

import React, { ReactNode } from 'react';

interface FormRowProps {
  children: ReactNode;
  className?: string;
  gap?: number; // Gap between children in rem units
}

const FormRow: React.FC<FormRowProps> = ({
  children,
  className = '',
  gap = 4,
}) => {
  // Convert children to an array even if it's a single child
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div 
      className={`flex flex-col sm:flex-row w-full ${className}`}
      style={{ gap: `${gap * 0.25}rem` }}
    >
      {childrenArray.map((child, index) => (
        <div 
          key={index} 
          className="flex-1"
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default FormRow;
