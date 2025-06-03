'use client';

import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import AppButton from '@/components/ui/AppButton';

export default function ProfilePage() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-900 pt-4 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="text-center">
              <div className="h-24 w-24 rounded-full bg-indigo-600 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {user?.email?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
              
              <h2 className="text-xl font-bold text-white">{user?.email}</h2>
              <p className="text-gray-400 mt-2">Account Member</p>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-white">Account Information</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400">Email</label>
                  <div className="mt-1 text-white">{user?.email}</div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400">Account Status</label>
                  <div className="mt-1 text-white">Active</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <AppButton
                onClick={logout}
                className="w-full border-b-red-600"
              >
                Logout
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
