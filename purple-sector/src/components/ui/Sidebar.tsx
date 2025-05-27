'use client';

import Link from "next/link";
import { FC } from "react";
import NavButton from "@/components/ui/NavButton";
import AppButton from "@/components/ui/AppButton";



interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-30 md:hidden" 
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      <aside className={`fixed top-0 left-0 h-full z-40 bg-white shadow-lg md:hidden transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} w-3/5`}>
        <div className="flex flex-col p-3 mt-4">
          {/* Close button at top */}
          <button 
            onClick={onClose}
            className="self-end mb-2 text-gray-600 hover:text-gray-900 p-1"
            aria-label="סגור תפריט"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <NavButton href="/my-predictions" text="My Predictions" onClick={onClose} className="text-sm py-2" />
          <NavButton href="/leaderboard" text="Leaderboard" onClick={onClose} className="text-sm py-2" />
          <NavButton href="/schedule" text="Schedule" onClick={onClose} className="text-sm py-2" />
          <NavButton href="/standings" text="Standings" onClick={onClose} className="text-sm py-2" />
          <div className="mt-2">
            <Link href="/login" onClick={onClose} className="block">
              <AppButton className="cursor-pointer border-b-f1-green font-formula-regular text-sm px-4 py-2 w-full">
                Login
              </AppButton>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
