// Add this file to src/types/form.ts

/**
 * Types related to form components and utilities
 */

export interface SelectOption {
  value: string;
  label: string;
}

export interface FileUploadProps {
  file: File | null;
  fileUrl: string | null;
}

export interface FormTouchedErrors {
  [key: string]: string;
}

export enum InputType {
  TEXT = 'text',
  EMAIL = 'email',
  PASSWORD = 'password',
  NUMBER = 'number',
  DATE = 'date',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  FILE = 'file',
  TEXTAREA = 'textarea',
  SELECT = 'select',
}

export enum FormLayoutType {
  STANDARD = 'standard',
  COMPACT = 'compact',
  FLOATING_LABEL = 'floating-label',
}

/**
 * Common validation patterns for form fields
 */
export const ValidationPatterns = {
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
  URL: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
  PHONE: /^\+?[1-9]\d{1,14}$/,
  ZIP_CODE_US: /^\d{5}(-\d{4})?$/,
  ALPHA_NUMERIC: /^[a-zA-Z0-9]*$/,
  NUMBERS_ONLY: /^\d+$/,
  LETTERS_ONLY: /^[a-zA-Z\s]*$/,
};
