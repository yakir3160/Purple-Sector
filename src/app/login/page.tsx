'use client';

import { useState } from 'react';
import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <div className="min-h-[90vh] flex items-start  justify-center bg-background px-4 py-10  sm:px-6 lg:px-8 h-fit">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="shadow-lg max-w-md w-full bg-white overflow-hidden transition-all duration-300 ease-in-out opacity-100">
        {/* Tab Navigation */}
        <div className="flex text-center">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-4  text-lg transition-all duration-300 relative ${
              activeTab === 'login'
                ? 'font-formula-bold border-t-2 border-f1-purple text-black bg-white'
                : 'font-formula-regular border-t-2 border-transparent text-black bg-gray-100 hover:border-f1-purple/20'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`flex-1 py-4 text-lg transition-all duration-300 relative ${
              activeTab === 'register'
                ? 'font-formula-bold border-t-2 border-f1-purple text-black bg-white'
                : 'font-formula-regular border-t-2 border-transparent text-black bg-gray-100 hover:border-f1-purple/20'
            }`}
          >
            Register
          </button>
        </div>

        {/* Form Container */}
        <div className="p-8 relative min-h-[400px]">
          {activeTab === 'login' ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
}
