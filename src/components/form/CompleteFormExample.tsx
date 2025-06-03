'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormContainer from '@/components/form/FormContainer';
import FormField from '@/components/form/FormField';
import FormRow from '@/components/form/FormRow';
import CheckboxField from '@/components/form/CheckboxField';
import RadioGroupField from '@/components/form/RadioGroupField';
import FileUploadField from '@/components/form/FileUploadField';
import AppButton from '@/components/common/AppButton';
import FormUtils from '@/utils/formUtils';
import { toast } from 'react-toastify';

// Example survey form schema
const SurveyFormSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  age: Yup.number()
    .min(18, 'You must be at least 18 years old')
    .max(120, 'Please enter a valid age')
    .required('Age is required'),
  occupation: Yup.string().required('Occupation is required'),
  experienceLevel: Yup.string()
    .oneOf(['beginner', 'intermediate', 'advanced', 'expert'], 'Please select an experience level')
    .required('Experience level is required'),
  preferredLanguage: Yup.string().required('Preferred language is required'),
  interestedFrameworks: Yup.array().of(Yup.string())
    .min(1, 'Please select at least one framework'),
  startDate: Yup.date().required('Start date is required'),
  feedbackType: Yup.string()
    .oneOf(['suggestion', 'issue', 'compliment'], 'Please select a feedback type'),
  feedback: Yup.string()
    .when('feedbackType', {
      is: (val: string) => val && val.length > 0,
      then: (schema) => schema.required('Feedback is required'),
    }),
  resume: Yup.mixed(),
  receiveUpdates: Yup.boolean(),
  termsAccepted: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

// Example language options
const languageOptions = [
  { value: '', label: 'Select a language' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'php', label: 'PHP' },
  { value: 'ruby', label: 'Ruby' },
  { value: 'swift', label: 'Swift' },
  { value: 'kotlin', label: 'Kotlin' },
];

// Example framework options
const frameworkOptions = [
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'next', label: 'Next.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'laravel', label: 'Laravel' },
  { value: 'django', label: 'Django' },
  { value: 'aspnet', label: 'ASP.NET' },
  { value: 'spring', label: 'Spring' },
];

// Experience level options
const experienceLevelOptions = [
  { value: 'beginner', label: 'Beginner (0-1 years)' },
  { value: 'intermediate', label: 'Intermediate (1-3 years)' },
  { value: 'advanced', label: 'Advanced (3-5 years)' },
  { value: 'expert', label: 'Expert (5+ years)' },
];

// Feedback type options
const feedbackTypeOptions = [
  { value: 'suggestion', label: 'Suggestion' },
  { value: 'issue', label: 'Issue/Problem' },
  { value: 'compliment', label: 'Compliment' },
];

interface SurveyFormValues {
  fullName: string;
  email: string;
  age: number | '';
  occupation: string;
  experienceLevel: string;
  preferredLanguage: string;
  interestedFrameworks: string[];
  startDate: string;
  feedbackType: string;
  feedback: string;
  resume: File | null;
  receiveUpdates: boolean;
  termsAccepted: boolean;
}

/**
 * A comprehensive form example that demonstrates all form components
 */
const CompleteFormExample: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formik = useFormik<SurveyFormValues>({
    initialValues: {
      fullName: '',
      email: '',
      age: '',
      occupation: '',
      experienceLevel: '',
      preferredLanguage: '',
      interestedFrameworks: [],
      startDate: '',
      feedbackType: '',
      feedback: '',
      resume: null,
      receiveUpdates: false,
      termsAccepted: false,
    },
    validationSchema: SurveyFormSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // Simulate API call
        console.log('Form submitted:', values);
        await new Promise((resolve) => setTimeout(resolve, 1200));
        
        toast.success('Form submitted successfully!');
        
        // Reset form
        formik.resetForm();
      } catch (error) {
        console.error('Form submission error:', error);
        toast.error('Form submission failed. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  // Handle checkbox group changes for frameworks
  const handleFrameworkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const { interestedFrameworks } = formik.values;
    
    if (checked) {
      formik.setFieldValue('interestedFrameworks', [...interestedFrameworks, value]);
    } else {
      formik.setFieldValue(
        'interestedFrameworks',
        interestedFrameworks.filter((framework) => framework !== value)
      );
    }
  };
  
  // Show all validation errors on submit attempt
  const handleSubmitClick = () => {
    if (!formik.isValid) {
      FormUtils.setAllFieldsTouched(formik);
    }
  };

  return (
    <FormContainer 
      onSubmit={formik.handleSubmit} 
      formTitle="Developer Survey Form" 
      className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8"
    >
      {/* Personal Information Section */}
      <div className="mb-8">
        <h3 className="text-lg font-formula-bold mb-4 text-f1-purple">Personal Information</h3>
        
        <FormRow>
          <FormField
            {...FormUtils.getFieldProps(formik, 'fullName')}
            label="Full Name"
            placeholder="John Doe"
          />
          
          <FormField
            {...FormUtils.getFieldProps(formik, 'email')}
            label="Email Address"
            type="email"
            placeholder="john.doe@example.com"
          />
        </FormRow>
        
        <FormRow>
          <FormField
            {...FormUtils.getFieldProps(formik, 'age')}
            label="Age"
            type="number"
            placeholder="Enter your age"
          />
          
          <FormField
            {...FormUtils.getFieldProps(formik, 'occupation')}
            label="Occupation"
            placeholder="Software Developer"
          />
        </FormRow>
        
        <FormRow>
          <RadioGroupField
            {...FormUtils.getRadioGroupProps(formik, 'experienceLevel', experienceLevelOptions, 'vertical')}
            label="Experience Level"
          />
          
          <FileUploadField
            {...FormUtils.getFileUploadProps(formik, 'resume', '.pdf,.doc,.docx', 2 * 1024 * 1024)}
            label="Upload Resume (Optional)"
          />
        </FormRow>
      </div>
      
      {/* Development Preferences Section */}
      <div className="mb-8">
        <h3 className="text-lg font-formula-bold mb-4 text-f1-purple">Development Preferences</h3>
        
        <FormField
          {...FormUtils.getSelectProps(formik, 'preferredLanguage', languageOptions)}
          label="Preferred Programming Language"
        />
        
        <div className="mt-4">
          <label className="block text-foreground font-formula-regular mb-1">
            Frameworks/Libraries You're Interested In (Select all that apply)
          </label>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {frameworkOptions.map((option) => (
              <CheckboxField
                key={option.value}
                id={`framework-${option.value}`}
                name="interestedFrameworks"
                value={option.value}
                checked={formik.values.interestedFrameworks.includes(option.value)}
                onChange={handleFrameworkChange}
                onBlur={formik.handleBlur}
                label={option.label}
              />
            ))}
          </div>
          
          {formik.touched.interestedFrameworks && formik.errors.interestedFrameworks && (
            <div className="text-f1-red text-sm mt-1">
              {formik.errors.interestedFrameworks as string}
            </div>
          )}
        </div>
        
        <FormField
          {...FormUtils.getFieldProps(formik, 'startDate')}
          label="When can you start?"
          type="date"
        />
      </div>
      
      {/* Feedback Section */}
      <div className="mb-8">
        <h3 className="text-lg font-formula-bold mb-4 text-f1-purple">Feedback</h3>
        
        <RadioGroupField
          {...FormUtils.getRadioGroupProps(formik, 'feedbackType', feedbackTypeOptions, 'horizontal')}
          label="Feedback Type"
        />
        
        <FormField
          {...FormUtils.getTextareaProps(formik, 'feedback')}
          label="Your Feedback"
          placeholder="Please share your thoughts..."
        />
      </div>
      
      {/* Preferences and Terms */}
      <div className="mb-4">
        <CheckboxField
          {...FormUtils.getCheckboxProps(formik, 'receiveUpdates')}
          label="Receive updates about new features and opportunities"
        />
        
        <CheckboxField
          {...FormUtils.getCheckboxProps(formik, 'termsAccepted')}
          label={
            <span>
              I agree to the <a href="#" className="text-f1-purple hover:text-purple-700">Terms and Conditions</a> and <a href="#" className="text-f1-purple hover:text-purple-700">Privacy Policy</a>
            </span>
          }
        />
      </div>
      
      {/* Submit Button */}
      <div className="pt-4">
        <AppButton
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto flex justify-center items-center"
          onClick={handleSubmitClick}
        >
          {isSubmitting ? (
            <span className="inline-block animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-f1-black mr-2"></span>
          ) : null}
          {isSubmitting ? 'Submitting...' : 'Submit Survey'}
        </AppButton>
      </div>
    </FormContainer>
  );
};

export default CompleteFormExample;
