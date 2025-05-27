'use client';

import { FC, useState } from 'react';
import AppButton from '@/components/ui/AppButton';

type Group = {
  id: number;
  name: string;
  members: number;
  position?: number;
  ownerName?: string;
};

const GroupsContent: FC = () => {
  const [showCreateGroup, setShowCreateGroup] = useState(false);
  
  const myGroups: Group[] = [
    { id: 1, name: 'F1 Fans Israel', members: 42, position: 1, ownerName: 'You' },
    { id: 2, name: 'Tel Aviv Racers', members: 28, position: 3, ownerName: 'David Cohen' },
    { id: 3, name: 'Company League', members: 15, position: 2, ownerName: 'Sarah Miller' },
  ];
  
  const publicGroups: Group[] = [
    { id: 4, name: 'Global F1 Fans', members: 231 },
    { id: 5, name: 'Ferrari Tifosi', members: 156 },
    { id: 6, name: 'Mercedes AMG Fans', members: 189 },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-6 px-2 md:px-4">
        <h2 className="text-2xl font-formula-bold">Groups</h2>
        <AppButton 
          className={`font-formula-medium ${showCreateGroup ? 'border-b-4 border-f1-red' : ''} `}
          onClick={() => setShowCreateGroup(!showCreateGroup)}
        >
          {showCreateGroup ? 'Cancel' : 'Create Group'}
        </AppButton>
      </div>
      
      {showCreateGroup && (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 border-l-4 border-f1-green">
          <h3 className="text-xl font-formula-bold mb-4 text-f1-green">Create New Group</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="group-name" className="block text-sm font-formula-medium mb-1">
                Group Name
              </label>
              <input 
                type="text" 
                id="group-name" 
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-f1-green"
                placeholder="Enter a name for your group"
              />
            </div>
            <div>
              <label htmlFor="group-description" className="block text-sm font-formula-medium mb-1">
                Description
              </label>
              <textarea 
                id="group-description" 
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-f1-green"
                rows={3}
                placeholder="Tell others what your group is about"
              ></textarea>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="group-private" className="mr-2" />
              <label htmlFor="group-private" className="text-sm font-formula-medium">
                Private Group (Invitation Only)
              </label>
            </div>
            <div className="flex justify-end">
              <AppButton className="font-formula-bold">
                Create Group
              </AppButton>
            </div>
          </form>
        </div>
      )}
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-xl font-formula-bold mb-4 text-f1-purple">My Groups</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-1 font-formula-bold">Group Name</th>
                <th className="text-left py-2 px-1 font-formula-bold">Members</th>
                <th className="text-left py-2 px-1 font-formula-bold">Your Position</th>
                <th className="text-left py-2 px-1 font-formula-bold">Group Owner</th>
                <th className="text-left py-2 px-1 font-formula-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {myGroups.map((group) => (
                <tr key={group.id} className="border-b">
                  <td className="py-3 px-1 font-formula-medium">{group.name}</td>
                  <td className="py-3 px-1">{group.members}</td>
                  <td className="py-3 px-1">{group.position}st</td>
                  <td className="py-3 px-1">{group.ownerName}</td>
                  <td className="py-3 px-1">
                    <button className="text-f1-blue hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-formula-bold mb-4 text-f1-red">Public Groups</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 px-1 font-formula-bold">Group Name</th>
                <th className="text-left py-2 px-1 font-formula-bold">Members</th>
                <th className="text-left py-2 px-1 font-formula-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {publicGroups.map((group) => (
                <tr key={group.id} className="border-b">
                  <td className="py-3 px-1 font-formula-medium">{group.name}</td>
                  <td className="py-3 px-1">{group.members}</td>
                  <td className="py-3 px-1">
                    <button className="text-f1-green hover:underline">Join</button>
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

export default GroupsContent;
