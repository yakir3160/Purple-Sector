'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import FormContainer from '@/components/ui/FormContainer';
import FormField from '@/components/ui/FormField';
import FormRow from '@/components/ui/FormRow';
import CheckboxField from '@/components/ui/CheckboxField';
import RadioGroupField from '@/components/ui/RadioGroupField';
import FileUploadField from '@/components/ui/FileUploadField';
import AppButton from '@/components/ui/AppButton';
import FormUtils from '@/utils/formUtils';

// Example profile form schema
const ProfileFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  displayName: Yup.string().required('Display name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  bio: Yup.string().max(200, 'Bio must be less than 200 characters'),
  country: Yup.string().required('Country is required'),
  city: Yup.string(),
  gender: Yup.string().oneOf(['male', 'female', 'other', 'prefer-not-to-say'], 'Please select a valid option'),
  dateOfBirth: Yup.date().nullable().max(new Date(), 'Date cannot be in the future'),
  favoriteTeam: Yup.string(),
  profileVisibility: Yup.string().oneOf(['public', 'private', 'friends'], 'Please select a valid option'),
  receiveNotifications: Yup.boolean(),
  emailUpdates: Yup.boolean(),
  profilePicture: Yup.mixed(),
});

interface ProfileFormValues {
  name: string;
  displayName: string;
  email: string;
  bio: string;
  country: string;
  city: string;
  gender: string;
  dateOfBirth: Date | null;
  favoriteTeam: string;
  profileVisibility: string;
  receiveNotifications: boolean;
  emailUpdates: boolean;
  profilePicture: File | null;
}

// Additional options for radio button groups
const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
];

const visibilityOptions = [
  { value: 'public', label: 'Public - Anyone can view your profile' },
  { value: 'friends', label: 'Friends Only - Only connections can view' },
  { value: 'private', label: 'Private - Only you can view your profile' },
];

const countryOptions = [
  { value: '', label: 'Select a country' },
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
  { value: 'it', label: 'Italy' },
  { value: 'es', label: 'Spain' },
];

const teamOptions = [
  { value: '', label: 'Select a team (optional)' },
  { value: 'mercedes', label: 'Mercedes' },
  { value: 'redbull', label: 'Red Bull Racing' },
  { value: 'ferrari', label: 'Ferrari' },
  { value: 'mclaren', label: 'McLaren' },
  { value: 'astonmartin', label: 'Aston Martin' },
  { value: 'alpine', label: 'Alpine' },
  { value: 'williams', label: 'Williams' },
  { value: 'haas', label: 'Haas' },
  { value: 'rb', label: 'RB' },
  { value: 'sauber', label: 'Sauber' },
];

const ProfileForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik<ProfileFormValues>({
    initialValues: {
      name: '',
      displayName: '',
      email: '',
      bio: '',
      country: '',
      city: '',
      gender: 'prefer-not-to-say',
      dateOfBirth: null,
      favoriteTeam: '',
      profileVisibility: 'private',
      receiveNotifications: true,
      emailUpdates: false,
      profilePicture: null,
    },
    validationSchema: ProfileFormSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // Simulate API call
        console.log('Profile data submitted:', values);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.success('Profile updated successfully!');
      } catch (error) {
        console.error('Form submission error:', error);
        toast.error('Failed to update profile. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit} formTitle="Edit Profile">
      <FormField
        {...FormUtils.getFieldProps(formik, 'name')}
        label="Full Name"
        type="text"
        placeholder="Your full name"
      />

      <FormField
        {...FormUtils.getFieldProps(formik, 'displayName')}
        label="Display Name"
        type="text"
        placeholder="Name shown to other users"
      />

      <FormField
        {...FormUtils.getFieldProps(formik, 'email')}
        label="Email Address"
        type="email"
        placeholder="Your email address"
      />

      <FormField
        {...FormUtils.getFieldProps(formik, 'bio')}
        label="Bio"
        as="textarea"
        placeholder="Short description about yourself"
      />

      <FormField
        {...FormUtils.getFieldProps(formik, 'country')}
        label="Country"
        as="select"
        options={countryOptions}
      />

      <FormField
        {...FormUtils.getFieldProps(formik, 'city')}
        label="City"
        type="text"
        placeholder="Your city"
      />

      <RadioGroupField
        {...FormUtils.getRadioGroupProps(formik, 'gender')}
        label="Gender"
        options={genderOptions}
      />

      <FormField
        {...FormUtils.getFieldProps(formik, 'dateOfBirth')}
        label="Date of Birth"
        type="date"
      />

      <FormField
        {...FormUtils.getFieldProps(formik, 'favoriteTeam')}
        label="Favorite Team"
        as="select"
        options={teamOptions}
      />

      <RadioGroupField
        {...FormUtils.getRadioGroupProps(formik, 'profileVisibility')}
        label="Profile Visibility"
        options={visibilityOptions}
      />

      <CheckboxField
        {...FormUtils.getCheckboxProps(formik, 'receiveNotifications')}
        label="Receive email notifications"
      />

      <CheckboxField
        {...FormUtils.getCheckboxProps(formik, 'emailUpdates')}
        label="Receive email updates"
      />

      <FileUploadField
        {...FormUtils.getFileUploadProps(formik, 'profilePicture')}
        label="Profile Picture"
        helperText="Upload a profile picture (optional)"
      />

      <div className="pt-4">
        <AppButton
          type="submit"
          disabled={isSubmitting}
          className="w-full flex justify-center items-center"
        >
          {isSubmitting ? (
            <span className="inline-block animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-f1-black mr-2"></span>
          ) : null}
          {isSubmitting ? 'Saving...' : 'Save Profile'}
        </AppButton>
      </div>
    </FormContainer>
  );
};

export default ProfileForm;
