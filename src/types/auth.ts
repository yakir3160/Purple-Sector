export interface LoginFormValues {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterFormValues {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}
