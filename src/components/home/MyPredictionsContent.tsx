'use client';

import { FC } from 'react';
import AppButton from '@/components/common/AppButton';

const MyPredictionsContent: FC = () => {
  const upcomingPredictions = [
    {
      id: 1,
      race: 'Monaco Grand Prix',
      date: 'May 30, 2025',
      status: 'Open',
    },
    {
      id: 2,
      race: 'Canadian Grand Prix',
      date: 'June 13, 2025',
      status: 'Not Open',
    }
  ];

  const pastPredictions = [
    {
      id: 3,
      race: 'Spanish Grand Prix',
      date: 'May 15, 2025',
      points: 42,
      position: 8,
    },
    {
      id: 4,
      race: 'Miami Grand Prix',
      date: 'May 4, 2025',
      points: 56,
      position: 3,
    }
  ];

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-formula-bold mb-4">My Predictions</h2>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-formula-bold mb-4 text-f1-green">Upcoming Races</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-1 font-formula-bold">Race</th>
                <th className="text-left py-2 px-1 font-formula-bold">Date</th>
                <th className="text-left py-2 px-1 font-formula-bold">Status</th>
                <th className="text-left py-2 px-1 font-formula-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {upcomingPredictions.map((race) => (
                <tr key={race.id} className="border-b">
                  <td className="py-3 px-1">{race.race}</td>
                  <td className="py-3 px-1">{race.date}</td>
                  <td className="py-3 px-1">
                    <span className={`inline-block rounded-full px-3 py-1 text-sm ${
                      race.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {race.status}
                    </span>
                  </td>
                  <td className="py-3 px-1">
                    <AppButton 
                      className="text-sm px-3 py-1"
                      disabled={race.status !== 'Open'}
                    >
                      {race.status === 'Open' ? 'Predict' : 'Coming Soon'}
                    </AppButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-formula-bold mb-4 text-f1-purple">Past Predictions</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-1 font-formula-bold">Race</th>
                <th className="text-left py-2 px-1 font-formula-bold">Date</th>
                <th className="text-left py-2 px-1 font-formula-bold">Points</th>
                <th className="text-left py-2 px-1 font-formula-bold">Position</th>
                <th className="text-left py-2 px-1 font-formula-bold">Details</th>
              </tr>
            </thead>
            <tbody>
              {pastPredictions.map((race) => (
                <tr key={race.id} className="border-b">
                  <td className="py-3 px-1">{race.race}</td>
                  <td className="py-3 px-1">{race.date}</td>
                  <td className="py-3 px-1 font-formula-bold">{race.points}</td>
                  <td className="py-3 px-1">{race.position}th</td>
                  <td className="py-3 px-1">
                    <button className="text-f1-blue hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPredictionsContent;
