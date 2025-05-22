'use client';

import { useState } from "react";
import Sidebar from "@/components/ui/Sidebar";
import Logo from "@/components/ui/Logo";
import SidebarToggleButton from "@/components/ui/SidebarToggleButton";

const MobileNavBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 z-40 bg-background md:hidden pb-4">
            <div className="relative flex items-center justify-center px-8 h-16">
                <SidebarToggleButton
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  isOpen={sidebarOpen}
                />
                <Logo />
            </div>
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </header>
    );
};

export default MobileNavBar;
