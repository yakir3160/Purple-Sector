'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { RegisterFormValues } from '@/types/auth';
import { useState } from 'react';
import AppButton from '@/components/common/AppButton';
import FormField from '@/components/form/FormField';
import CheckboxField from '@/components/form/CheckboxField';
import FormContainer from '@/components/form/FormContainer';
import FormUtils from '@/utils/formUtils';

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters')
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  agreeToTerms: Yup.boolean()
    .oneOf([true], 'You must agree to the terms and conditions')
    .required('You must agree to the terms and conditions'),
});

export default function RegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik<RegisterFormValues>({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false,
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // Simplified registration without backend integration
        console.log('Registration submitted:', values);
        
        // Simulate processing
        await new Promise((resolve) => setTimeout(resolve, 1000));
        
        toast.success('Registration successful! You can now login.');
        
        // Reset form after successful registration
        formik.resetForm();
        
        // Switch to login tab after a delay
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent('switchToLogin'));
        }, 2000);
      } catch (error) {
        console.error('Registration error:', error);
        toast.error('Registration failed. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit} className='w-full'>
      <FormField
        {...FormUtils.getFieldProps(formik, 'username')}
        label="Username"
        type="text"
        placeholder="Choose a username"
      />

      <FormField
        {...FormUtils.getFieldProps(formik, 'email')}
        label="Email"
        type="email"
        placeholder="Your email address"
      />

      <FormField
        {...FormUtils.getFieldProps(formik, 'password')}
        label="Password"
        type="password"
        placeholder="Create a password"
      />

      <FormField
        {...FormUtils.getFieldProps(formik, 'confirmPassword')}
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
      />

      <CheckboxField
        {...FormUtils.getCheckboxProps(formik, 'agreeToTerms')}
        label={
          <>
            I agree to the <a href="#" className="text-f1-purple hover:text-purple-700">Terms and Conditions</a> and <a href="#" className="text-f1-purple hover:text-purple-700">Privacy Policy</a>
          </>
        }
      />

      <div className="pt-2">
        <AppButton
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center"
        >
          {isSubmitting ? (
            <span className="inline-block animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-f1-black mr-2"></span>
          ) : null}
          {isSubmitting ? 'Creating Account...' : 'Register'}
        </AppButton>
      </div>
    </FormContainer>
  );
}
