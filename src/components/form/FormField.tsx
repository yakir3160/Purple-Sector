'use client';

import React, { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from 'react';
import ErrorMessage from './ErrorMessage';

type InputElementProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id'>;
type TextareaElementProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'>;
type SelectElementProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id'>;

interface BaseFormFieldProps {
  id: string;
  label: string;
  error?: string;
  touched?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  hideLabel?: boolean;
  renderRight?: ReactNode;
  type?: string;
  as?: 'input' | 'textarea' | 'select';
  options?: Array<{ value: string; label: string }>;
}

type FormFieldProps = BaseFormFieldProps & (InputElementProps | TextareaElementProps | SelectElementProps);

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  error,
  touched,
  containerClassName = '',
  labelClassName = '',
  inputClassName = '',
  hideLabel = false,
  renderRight,
  as = 'input',
  options = [],
  ...props
}) => {
  const showError = touched && error;
  const type = props.type || 'text';
  
  // Common classes for all input types
  const commonClasses = `w-full p-3  bg-white text-foreground border focus:outline-none ${
    showError
      ? 'border-f1-red' 
      : 'border-gray-300 focus:border-f1-purple'
  } ${inputClassName}`;
  
  return (
    <div className={`${containerClassName}`}>
      {!hideLabel && (
        <label 
          htmlFor={id} 
          className={`block text-foreground font-formula-regular  ${labelClassName}`}
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        {as === 'textarea' ? (
          <textarea
            id={id}
            name={id}
            className={commonClasses}
            rows={4}
            {...props as TextareaElementProps}
          />
        ) : as === 'select' ? (
          <select
            id={id}
            name={id}
            className={commonClasses}
            {...props as SelectElementProps}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            className={commonClasses}
            {...props as InputElementProps}
          />
        )}
        
        {renderRight && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            {renderRight}
          </div>
        )}
      </div>
      
      <ErrorMessage error={error} touched={touched} />
    </div>
  );
};

export default FormField;
