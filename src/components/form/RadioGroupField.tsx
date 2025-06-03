'use client';

import React, { InputHTMLAttributes, ReactNode } from 'react';
import ErrorMessage from './ErrorMessage';

export interface RadioOption {
  value: string;
  label: ReactNode;
}

interface RadioGroupFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  id: string;
  name: string;
  label: string;
  options: RadioOption[];
  value?: string;
  error?: string;
  touched?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  optionClassName?: string;
  radioClassName?: string;
  orientation?: 'vertical' | 'horizontal';
  hideLabel?: boolean;
}

const RadioGroupField: React.FC<RadioGroupFieldProps> = ({
  id,
  name,
  label,
  options,
  value = '',
  error,
  touched,
  containerClassName = '',
  labelClassName = '',
  optionClassName = '',
  radioClassName = '',
  orientation = 'vertical',
  hideLabel = false,
  ...inputProps
}) => {
  const showError = touched && error;
  const flexDirection = orientation === 'vertical' ? 'flex-col space-y-2' : 'flex-row space-x-4';

  return (
    <div className={`${containerClassName}`}>
      {!hideLabel && (
        <label 
          className={`block text-foreground font-formula-regular mb-1 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      
      <div className={`flex ${flexDirection}`}>
        {options.map((option) => (
          <div key={`${id}-${option.value}`} className={`flex items-center ${optionClassName}`}>
            <input
              id={`${id}-${option.value}`}
              name={name}
              type="radio"
              value={option.value}
              checked={value === option.value}
              className={`h-4 w-4 text-f1-purple focus:ring-f1-purple border-gray-300 ${radioClassName} ${
                showError ? 'border-f1-red' : ''
              }`}
              {...inputProps}
            />
            <label 
              htmlFor={`${id}-${option.value}`} 
              className={`ml-2 block text-foreground font-formula-regular`}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      
      <ErrorMessage error={error} touched={touched} />
    </div>
  );
};

export default RadioGroupField;
