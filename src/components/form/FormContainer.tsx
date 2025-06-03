'use client';

import React, { FormHTMLAttributes, ReactNode } from 'react';

interface FormContainerProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  className?: string;
  formTitle?: string;
  isSubmitting?: boolean;
}

const FormContainer: React.FC<FormContainerProps> = ({
  children,
  className = '',
  formTitle,
  isSubmitting = false,
  ...formProps
}) => {
  return (
    <div className="w-full">
      {formTitle && (
        <h2 className="text-xl font-formula-bold mb-4 text-center">{formTitle}</h2>
      )}
      <form className={`space-y-3 ${className}`} {...formProps}>
        {children}
      </form>
    </div>
  );
};

export default FormContainer;
