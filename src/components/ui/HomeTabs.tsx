'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import HomeContent from '@/components/home/HomeContent';
import MyPredictionsContent from '@/components/home/MyPredictionsContent';
import GroupsContent from '@/components/home/GroupsContent';
import LeaderboardContent from '@/components/home/LeaderboardContent';
import { PiGarageDuotone, PiGarageFill, PiCardsBold, PiCardsFill } from "react-icons/pi";
import { TbTableDashed, TbTableFilled } from "react-icons/tb";
import { RiGroupLine, RiGroupFill } from "react-icons/ri";

type Tab = {
  id: string;
  label: string;
  icons: React.ReactNode[];
  content: React.ReactNode;
};

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs: Tab[] = [
    {
      id: 'home',
      label: 'Home',
      icons: [<PiGarageDuotone />, <PiGarageFill />],
      content: null
    },
    {
      id: 'predictions',
      label: 'My Predictions',
      icons: [<PiCardsBold />, <PiCardsFill />],
      content: null
    },
    {
      id: 'groups',
      label: 'Groups',
      icons: [<RiGroupLine />, <RiGroupFill />],
      content: null
    },
    {
      id: 'leaderboard',
      label: 'Leaderboard',
      icons: [<TbTableDashed />, <TbTableFilled />],
      content: null
    }
  ];

  // Create a renderContent function to handle proper component rendering
  const renderContent = () => {
    switch (activeTab) {
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
    <div className="" dir="auto">
      <div className="fixed bottom-0 left-0 bg-white shadow-[0_-2px_6px_-1px_rgba(0,0,0,0.1)] flex justify-between md:justify-start overflow-x-auto border-t border-gray-200 no-scrollbar w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={twMerge(
              'p-2 md:px-4 py-3 md:py-2 font-formula-medium text-sm md:text-base transition-all duration-300 whitespace-nowrap focus:outline-none relative mobile-text-sm flex-1',
              activeTab === tab.id
                ? 'text-f1-purple border-t-3 border-f1-purple  '
                : 'text-gray-500 hover:text-gray-700 hover:bg-purple-50/50 border-t-3 border-transparent'
            )}
            onClick={() => setActiveTab(tab.id)}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="text-2xl">
                {activeTab === tab.id ? tab.icons[1] : tab.icons[0]}
              </div>
              {tab.label}
            </div>

          </button>
        ))}
      </div>

      {/* Tab content with smooth transition */}
      <div className="pt-4 pb-20 md:py-4 transition-opacity duration-300 ease-in-out w-full overflow-y-auto">
        <div className="md:px-0">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default HomeTabs;
