'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormContainer from '@/components/ui/FormContainer';
import FormField from '@/components/ui/FormField';
import CheckboxField from '@/components/ui/CheckboxField';
import AppButton from '@/components/ui/AppButton';
import FormUtils from '@/utils/formUtils';

// Example of a reusable form builder component
interface FormExampleProps {
  title?: string;
  onSubmit: (values: any) => Promise<void>;
  initialValues: Record<string, any>;
  validationSchema: Yup.AnyObjectSchema;
  fields: {
    name: string;
    label: string;
    type: 'text' | 'email' | 'password' | 'number' | 'checkbox' | 'textarea';
    placeholder?: string;
  }[];
  submitButtonText: string;
}

const FormExample: React.FC<FormExampleProps> = ({
  title,
  onSubmit,
  initialValues,
  validationSchema,
  fields,
  submitButtonText,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit} formTitle={title}>
      {fields.map((field) => {
        if (field.type === 'checkbox') {
          return (
            <CheckboxField
              key={field.name}
              {...FormUtils.getCheckboxProps(formik, field.name)}
              label={field.label}
            />
          );
        }
        
        return (
          <FormField
            key={field.name}
            {...FormUtils.getFieldProps(formik, field.name)}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
          />
        );
      })}

      <div className="pt-2">
        <AppButton
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center"
        >
          {isSubmitting ? (
            <span className="inline-block animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-f1-black mr-2"></span>
          ) : null}
          {isSubmitting ? 'Processing...' : submitButtonText}
        </AppButton>
      </div>
    </FormContainer>
  );
};

export default FormExample;
