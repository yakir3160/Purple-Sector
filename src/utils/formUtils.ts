'use client';

import { FormikProps } from 'formik';
import { RadioOption } from '@/components/form/RadioGroupField';

/**
 * Helper function to get field props from formik for standard input fields
 * @param formik Formik instance
 * @param fieldName Field name in the formik values
 * @returns Props that can be spread into FormField component
 */
export const getFieldProps = <T extends Record<string, any>>(
  formik: FormikProps<T>, 
  fieldName: keyof T
) => {
  return {
    id: fieldName as string,
    name: fieldName as string,
    value: formik.values[fieldName] as string,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    error: formik.errors[fieldName] as string | undefined,
    touched: (formik.touched[fieldName] as boolean) || false,
  };
};

/**
 * Helper function to get field props from formik for checkbox fields
 * @param formik Formik instance
 * @param fieldName Field name in the formik values
 * @returns Props that can be spread into CheckboxField component
 */
export const getCheckboxProps = <T extends Record<string, any>>(
  formik: FormikProps<T>, 
  fieldName: keyof T
) => {
  return {
    id: fieldName as string,
    name: fieldName as string,
    checked: Boolean(formik.values[fieldName]),
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    error: formik.errors[fieldName] as string | undefined,
    touched: (formik.touched[fieldName] as boolean) || false,
  };
};

/**
 * Helper function to get field props from formik for textarea fields
 * @param formik Formik instance
 * @param fieldName Field name in the formik values
 * @returns Props that can be spread into FormField component with as="textarea"
 */
export const getTextareaProps = <T extends Record<string, any>>(
  formik: FormikProps<T>, 
  fieldName: keyof T
) => {
  return {
    ...getFieldProps(formik, fieldName),
    as: 'textarea' as const,
  };
};

/**
 * Helper function to get field props from formik for select fields
 * @param formik Formik instance
 * @param fieldName Field name in the formik values
 * @param options Array of option objects with value and label properties
 * @returns Props that can be spread into FormField component with as="select"
 */
export const getSelectProps = <T extends Record<string, any>>(
  formik: FormikProps<T>, 
  fieldName: keyof T,
  options: Array<{ value: string; label: string }>
) => {
  return {
    ...getFieldProps(formik, fieldName),
    as: 'select' as const,
    options,
  };
};

/**
 * Helper function to get field props from formik for radio group fields
 * @param formik Formik instance
 * @param fieldName Field name in the formik values
 * @param options Array of radio option objects with value and label properties
 * @param orientation 'vertical' or 'horizontal' layout for radio buttons
 * @returns Props that can be spread into RadioGroupField component
 */
export const getRadioGroupProps = <T extends Record<string, any>>(
  formik: FormikProps<T>,
  fieldName: keyof T,
  options: RadioOption[],
  orientation: 'vertical' | 'horizontal' = 'vertical'
) => {
  return {
    id: fieldName as string,
    name: fieldName as string,
    value: formik.values[fieldName] as string,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    error: formik.errors[fieldName] as string | undefined,
    touched: (formik.touched[fieldName] as boolean) || false,
    options,
    orientation,
  };
};

/**
 * Helper function to get field props from formik for file upload fields
 * @param formik Formik instance
 * @param fieldName Field name in the formik values
 * @param acceptedFileTypes Optional string for accepted file types
 * @param maxFileSize Optional maximum file size in bytes
 * @param showPreview Whether to show a preview of the uploaded file
 * @returns Props that can be spread into FileUploadField component
 */
export const getFileUploadProps = <T extends Record<string, any>>(
  formik: FormikProps<T>,
  fieldName: keyof T,
  acceptedFileTypes?: string,
  maxFileSize?: number,
  showPreview = false
) => {
  return {
    id: fieldName as string,
    name: fieldName as string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      // Call formik's handleChange
      formik.handleChange(e);
      
      // Set the file value
      if (e.currentTarget.files && e.currentTarget.files.length > 0) {
        formik.setFieldValue(fieldName as string, e.currentTarget.files[0]);
      } else {
        formik.setFieldValue(fieldName as string, null);
      }
    },
    onBlur: formik.handleBlur,
    error: formik.errors[fieldName] as string | undefined,
    touched: (formik.touched[fieldName] as boolean) || false,
    acceptedFileTypes,
    maxFileSize,
    showPreview,
  };
};

/**
 * Get all form values that have been touched and have errors
 * @param formik Formik instance
 * @returns Object containing only the fields that have been touched and have errors
 */
export const getTouchedErrors = <T extends Record<string, any>>(
  formik: FormikProps<T>
) => {
  return Object.keys(formik.touched)
    .filter(key => formik.touched[key] && formik.errors[key])
    .reduce((acc, key) => {
      acc[key] = formik.errors[key];
      return acc;
    }, {} as Record<string, any>);
};

/**
 * Helper to set all fields as touched (useful for showing all validation errors)
 * @param formik Formik instance
 */
export const setAllFieldsTouched = <T extends Record<string, any>>(
  formik: FormikProps<T>
) => {
  const touchedFields = Object.keys(formik.values).reduce((acc, key) => {
    acc[key] = true;
    return acc;
  }, {} as Record<string, boolean>);
  
  formik.setTouched(touchedFields);
};

// Export form utils as a single object
const FormUtils = {
  getFieldProps,
  getCheckboxProps,
  getTextareaProps,
  getSelectProps,
  getRadioGroupProps,
  getFileUploadProps,
  getTouchedErrors,
  setAllFieldsTouched,
};

export default FormUtils;
