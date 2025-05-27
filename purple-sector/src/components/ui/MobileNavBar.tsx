'use client';

import { useState, useEffect } from "react";
import Sidebar from "@/components/ui/Sidebar";
import Logo from "@/components/ui/Logo";
import SidebarToggleButton from "@/components/ui/SidebarToggleButton";

const MobileNavBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="w-full fixed top-0 left-0 z-40 bg-background md:hidden pb-0">
            <div className="relative flex items-center justify-center px-0 h-12 w-full">
                <SidebarToggleButton
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  isOpen={sidebarOpen}
                />
                <Logo />
            </div>
            {mounted && <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
        </header>
    );
};

export default MobileNavBar;
