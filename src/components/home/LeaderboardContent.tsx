'use client';

import { FC } from 'react';
import Link from 'next/link';
import AppButton from '@/components/common/AppButton';

type User = {
  id: number;
  position: number;
  name: string;
  points: number;
  change: number; // positive for up, negative for down, 0 for no change
  country: string;
};

const LeaderboardContent: FC = () => {
  const topUsers: User[] = [
    { id: 1, position: 1, name: 'Max Superfan', points: 756, change: 0, country: '🇳🇱' },
    { id: 2, position: 2, name: 'Lando2023', points: 734, change: 2, country: '🇬🇧' },
    { id: 3, position: 3, name: 'FerrariForever', points: 721, change: -1, country: '🇮🇹' },
    { id: 4, position: 4, name: 'Yakir A.', points: 705, change: 1, country: '🇮🇱' },
    { id: 5, position: 5, name: 'LewisIsTheGoat', points: 698, change: -2, country: '🇬🇧' },
    { id: 6, position: 6, name: 'Checo123', points: 684, change: 0, country: '🇲🇽' },
    { id: 7, position: 7, name: 'AlpineRacer', points: 651, change: 3, country: '🇫🇷' },
    { id: 8, position: 8, name: 'HamiltonFan44', points: 639, change: -1, country: '🇺🇸' },
    { id: 9, position: 9, name: 'DannyRic3', points: 622, change: 2, country: '🇦🇺' },
    { id: 10, position: 10, name: 'VettelForever', points: 615, change: -2, country: '🇩🇪' },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-formula-bold">Global Leaderboard</h2>
        <Link href="/leaderboard">
          <AppButton className="font-formula-medium">
            Full Leaderboard
          </AppButton>
        </Link>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-3 font-formula-bold">Position</th>
                <th className="text-left py-2 px-3 font-formula-bold">Name</th>
                <th className="text-left py-2 px-3 font-formula-bold">Country</th>
                <th className="text-right py-2 px-3 font-formula-bold">Points</th>
                <th className="text-right py-2 px-3 font-formula-bold">Change</th>
              </tr>
            </thead>
            <tbody>
              {topUsers.map((user) => (
                <tr key={user.id} className={`border-b ${user.name === 'Yakir A.' ? 'bg-purple-50' : ''}`}>
                  <td className="py-3 px-3">{user.position}</td>
                  <td className="py-3 px-3 font-formula-medium">{user.name}</td>
                  <td className="py-3 px-3">{user.country}</td>
                  <td className="py-3 px-3 text-right font-formula-bold">{user.points}</td>
                  <td className="py-3 px-3 text-right">
                    {user.change > 0 && (
                      <span className="text-green-600">↑{user.change}</span>
                    )}
                    {user.change < 0 && (
                      <span className="text-red-600">↓{Math.abs(user.change)}</span>
                    )}
                    {user.change === 0 && (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex justify-center">
          <Link href="/leaderboard">
            <AppButton className="font-formula-medium">
              View Complete Standings
            </AppButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardContent;
