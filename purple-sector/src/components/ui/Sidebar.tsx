'use client';

import Link from "next/link";
import { FC } from "react";
import NavButton from "@/components/ui/NavButton";
import AppButton from "@/components/ui/AppButton";
import SidebarToggleButton from "@/components/ui/SidebarToggleButton";


interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside className={`fixed top-0 left-0 h-full z-40 bg-white shadow-lg md:hidden transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} w-1/2`}>
      <div className="flex flex-col p-4 mt-6 ">
        <NavButton href="/my-predictions" text="My Predictions" onClick={onClose} />
        <NavButton href="/leaderboard" text="Leaderboard" onClick={onClose} />
        <NavButton href="/schedule" text="Schedule" onClick={onClose} />
        <NavButton href="/standings" text="Standings" onClick={onClose} />
        <Link href="/login" onClick={onClose}>
          <AppButton className="cursor-pointer border-b-f1-green font-formula-regular">
            Login
          </AppButton>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
