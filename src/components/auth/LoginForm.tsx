'use client';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { LoginFormValues } from '@/types/auth';
import { useState } from 'react';
import AppButton from '@/components/common/AppButton';
import FormField from '@/components/form/FormField';
import CheckboxField from '@/components/form/CheckboxField';
import FormContainer from '@/components/form/FormContainer';
import FormUtils from '@/utils/formUtils';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  rememberMe: Yup.boolean(),
});

export default function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // Simplified login without backend integration
        console.log('Login submitted:', values);
        
        // Simulate processing
        await new Promise((resolve) => setTimeout(resolve, 800));
        
        toast.success('Login successful!');
        
        // Redirect to home page after successful login
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);
      } catch (error) {
        console.error('Login error:', error);
        toast.error('Login failed. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit} className='w-full' >
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
        placeholder="Your password"
      />

      <CheckboxField
        {...FormUtils.getCheckboxProps(formik, 'rememberMe')}
        label="Remember me"
      />

      <div className="pt-2  ">
        <AppButton
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center"
        >
          {isSubmitting ? (
            <span className="inline-block animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-f1-black mr-2"></span>
          ) : null}
          {isSubmitting ? 'Logging in...' : 'Login'}
        </AppButton>
      </div>

      <div className="text-right">
        <a href="#" className="text-f1-purple hover:text-purple-700 text-sm font-formula-regular">
          Forgot password?
        </a>
      </div>
    </FormContainer>
  );
}
