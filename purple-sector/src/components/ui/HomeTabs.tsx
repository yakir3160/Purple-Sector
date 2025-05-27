'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import HomeContent from '@/components/home/HomeContent';
import MyPredictionsContent from '@/components/home/MyPredictionsContent';
import GroupsContent from '@/components/home/GroupsContent';
import LeaderboardContent from '@/components/home/LeaderboardContent';

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs: Tab[] = [
    {
      id: 'home',
      label: 'Home',
      content: null // We'll render content separately
    },
    {
      id: 'predictions',
      label: 'My Predictions',
      content: null
    },
    {
      id: 'groups',
      label: 'Groups',
      content: null
    },
    {
      id: 'leaderboard',
      label: 'Leaderboard',
      content: null
    }
  ];

  // Create a renderContent function to handle proper component rendering
  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return <HomeContent />;
      case 'predictions':
        return <MyPredictionsContent />;
      case 'groups':
        return <GroupsContent />;
      case 'leaderboard':
        return <LeaderboardContent />;
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto  md:px-4 mobile-full-width" dir="auto">
      {/* Tab navigation - dir="auto" supports both LTR and RTL languages */}
      <div className="flex justify-between md:justify-start overflow-x-auto border-b border-gray-200 mb-4 no-scrollbar w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={twMerge(
              'px-2 md:px-4 py-1 md:py-2 font-formula-medium text-sm md:text-base transition-all duration-300 whitespace-nowrap focus:outline-none relative mobile-text-sm mobile-py-1 flex-1',
              activeTab === tab.id 
                ? 'text-f1-purple border-b-2 border-f1-purple' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-purple-50/50 border-b-2 border-transparent'
            )}
            onClick={() => setActiveTab(tab.id)}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            {tab.label}

          </button>
        ))}
      </div>
      
      {/* Tab content with smooth transition */}
      <div className="py-2 md:py-4 transition-opacity duration-300 ease-in-out w-full">
        <div className="md:px-0">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default HomeTabs;
