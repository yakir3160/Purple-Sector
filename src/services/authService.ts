import { LoginFormValues, RegisterFormValues } from '@/types/auth';

// This is a mock service. In a real application, you would make API calls to your backend.
export const AuthService = {
  // Login function
  login: async (values: LoginFormValues): Promise<{ success: boolean; message: string }> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Mock login logic - replace with actual API calls in a real app
    if (values.email === 'user@example.com' && values.password === 'Password123!') {
      return { success: true, message: 'Login successful' };
    }
    
    return { 
      success: false, 
      message: 'Invalid credentials. Try using user@example.com and Password123!'
    };
  },
  
  // Registration function
  register: async (values: RegisterFormValues): Promise<{ success: boolean; message: string }> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Mock registration logic - replace with actual API calls in a real app
    if (values.email.includes('@')) {
      return { success: true, message: 'Registration successful' };
    }
    
    return { 
      success: false, 
      message: 'Registration failed. Please try again.' 
    };
  },
  
  // Logout function
  logout: async (): Promise<void> => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    // Clear local session data
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    // Additional logout logic would go here
  }
};
