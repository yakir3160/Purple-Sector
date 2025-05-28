'use client';

import { FC } from 'react';
import AppButton from '@/components/ui/AppButton';
import { useTabContext } from '@/contexts/TabContext';

const HomeContent: FC = () => {
  const { setActiveTab } = useTabContext();

  const goToPredictionsTab = () => {
    setActiveTab('predictions');
  };

  return (
    <div className="flex flex-col items-center w-full px-0 md:px-2">
      <h2 className="text-2xl font-formula-bold mb-4 text-center">Welcome to Purple Sector</h2>
      
      <div className="bg-white shadow-md rounded-lg p-4 md:p-6 mb-4 md:mb-6 w-full">
        <h3 className="text-xl font-formula-bold mb-4 text-f1-purple">Next Race</h3>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-formula-medium">Monaco Grand Prix</p>
            <p className="text-sm text-gray-600">May 30, 2025</p>
          </div>
          <AppButton onClick={goToPredictionsTab} className="font-formula-bold">Make Predictions</AppButton>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full">
        <div className="bg-white shadow-md rounded-lg p-4 md:p-6">
          <h3 className="text-xl font-formula-bold mb-3 md:mb-4 text-f1-red">Latest Results</h3>
          <p className="font-formula-medium">Spanish Grand Prix</p>
          <ol className="mt-2 space-y-1">
            <li className="flex justify-between">
              <span>1. Max Verstappen</span>
              <span className="text-gray-600">Red Bull</span>
            </li>
            <li className="flex justify-between">
              <span>2. Lando Norris</span>
              <span className="text-gray-600">McLaren</span>
            </li>
            <li className="flex justify-between">
              <span>3. Lewis Hamilton</span>
              <span className="text-gray-600">Mercedes</span>
            </li>
          </ol>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-formula-bold mb-4 text-f1-green">Your Stats</h3>
          <div className="space-y-2">
            <p className="flex justify-between">
              <span>Points:</span>
              <span className="font-formula-bold">325</span>
            </p>
            <p className="flex justify-between">
              <span>Rank:</span>
              <span className="font-formula-bold">23rd</span>
            </p>
            <p className="flex justify-between">
              <span>Accurate Predictions:</span>
              <span className="font-formula-bold">64%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
