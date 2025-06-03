'use client';

import React from 'react';

interface ErrorMessageProps {
  error?: string;
  touched?: boolean;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ 
  error, 
  touched, 
  className = '' 
}) => {
  return (
    <div className={`h-3 mt-1 ${className}`}>
      {touched && error && (
        <div className="text-f1-red text-sm">{error}</div>
      )}
    </div>
  );
};

export default ErrorMessage;
