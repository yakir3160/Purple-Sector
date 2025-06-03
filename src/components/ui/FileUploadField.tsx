'use client';

import React, { InputHTMLAttributes, useState } from 'react';
import ErrorMessage from './ErrorMessage';

interface FileUploadFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string;
  label: string;
  error?: string;
  touched?: boolean;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  hideLabel?: boolean;
  acceptedFileTypes?: string; // e.g. '.jpg,.jpeg,.png' or 'image/*'
  maxFileSize?: number; // In bytes
  showPreview?: boolean;
  onFileSelect?: (file: File | null) => void;
}

const FileUploadField: React.FC<FileUploadFieldProps> = ({
  id,
  label,
  error,
  touched,
  containerClassName = '',
  labelClassName = '',
  inputClassName = '',
  hideLabel = false,
  acceptedFileTypes,
  maxFileSize,
  showPreview = false,
  onFileSelect,
  ...props
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [localError, setLocalError] = useState<string | undefined>(error);
  
  const showError = touched && (localError || error);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      
      // Check file size if maxFileSize was provided
      if (maxFileSize && selectedFile.size > maxFileSize) {
        const errorMsg = `File size exceeds ${(maxFileSize / (1024 * 1024)).toFixed(2)} MB`;
        setLocalError(errorMsg);
        setFile(null);
        setPreview(null);
        if (onFileSelect) {
          onFileSelect(null);
        }
        return;
      }
      
      setFile(selectedFile);
      setLocalError(undefined);
      
      if (showPreview) {
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setPreview(fileReader.result as string);
        };
        fileReader.readAsDataURL(selectedFile);
      }
      
      if (onFileSelect) {
        onFileSelect(selectedFile);
      }
    } else {
      setFile(null);
      setPreview(null);
      if (onFileSelect) {
        onFileSelect(null);
      }
    }
  };

  return (
    <div className={`${containerClassName}`}>
      {!hideLabel && (
        <label 
          htmlFor={id} 
          className={`block text-foreground font-formula-regular mb-1 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      
      <div className="relative">
        <div 
          className={`w-full p-3  border border-dashed ${
            showError
              ? 'border-f1-red bg-red-50' 
              : 'border-gray-300 hover:border-f1-purple bg-white hover:bg-gray-50'
          } ${inputClassName}`}
        >
          <input
            id={id}
            name={id}
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleFileChange}
            accept={acceptedFileTypes}
            {...props}
          />
          <div className="text-center">
            {file ? (
              <p className="text-sm text-gray-600 truncate">
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </p>
            ) : (
              <p className="text-sm text-gray-400">
                Drag and drop a file here or click to select a file
              </p>
            )}
          </div>
        </div>
        
        {showPreview && preview && (
          <div className="mt-2">
            {file?.type.startsWith('image/') ? (
              <img 
                src={preview} 
                alt="File preview" 
                className="h-32 object-contain rounded border border-gray-200" 
              />
            ) : (
              <div className="p-3 bg-gray-100 rounded border border-gray-200">
                <p className="text-sm text-gray-600">
                  File selected: {file?.name}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      
      <ErrorMessage error={localError || error} touched={touched} />
    </div>
  );
};

export default FileUploadField;
