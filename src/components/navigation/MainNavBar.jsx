'use client';
import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/layout/Logo";
import NavButton from "@/components/navigation/NavButton";
import AppButton from "@/components/common/AppButton";
import Sidebar from "@/components/navigation/Sidebar";
import SidebarToggleButton from "@/components/navigation/SidebarToggleButton";
import { MdAccountBox } from "react-icons/md";

const MainNavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="py-4 w-full flex items-center justify-between px-8 fixed top-0 bg-background z-50 pb-6">
      <Logo  />

      {/* Desktop navigation */}
      <div className="hidden md:flex space-x-8 text-lg h-full items-start py-0">
        <NavButton href="/my-predictions" text="My Predictions" />
        <NavButton href="/leaderboard" text="Leaderboard" />
        <NavButton href="/schedule" text="Schedule" />
        <NavButton href="/standings" text="Standings" />
        <Link href="/login">
          <AppButton className="cursor-pointer border-b-f1-green font-formula-regular">
            <MdAccountBox className="inline-block mr-2 size-5" />
            Login
          </AppButton>
        </Link>
      </div>

      {/* Mobile/Tablet sidebar toggle */}
      <div className="md:hidden">
        <SidebarToggleButton onClick={() => setSidebarOpen(true)} />
      </div>

      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </nav>
  );
};

export default MainNavBar;