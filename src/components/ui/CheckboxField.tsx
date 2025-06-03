'use client';

import React, { InputHTMLAttributes, ReactNode } from 'react';
import ErrorMessage from './ErrorMessage';

interface CheckboxFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: ReactNode;
  error?: string;
  touched?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  id,
  label,
  error,
  touched,
  containerClassName = '',
  labelClassName = '',
  inputClassName = '',
  ...inputProps
}) => {
  return (
    <div className={`${containerClassName}`}>
      <div className="flex items-center">
        <input
          id={id}
          name={id}
          type="checkbox"
          className={`h-4 w-4 text-f1-purple focus:ring-f1-purple border-gray-300 rounded ${inputClassName}`}
          {...inputProps}
        />
        <label htmlFor={id} className={`ml-2 block text-foreground font-formula-regular ${labelClassName}`}>
          {label}
        </label>
      </div>
      
      <ErrorMessage error={error} touched={touched} />
    </div>
  );
};

export default CheckboxField;
