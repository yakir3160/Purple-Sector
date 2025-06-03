'use client';

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Logo from "@/components/layout/Logo";
import SidebarToggleButton from "./SidebarToggleButton";
import { MdAccountBox } from "react-icons/md";
import { App } from "antd";
import AppButton from "@/components/common/AppButton";
import Link from "next/link";

const MobileNavBar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="w-full fixed top-0 left-0 z-40 bg-background md:hidden py-3">
            <div className="relative flex items-center justify-around h-14 w-full ">
                <SidebarToggleButton
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  isOpen={sidebarOpen}
                />
                <Logo />
                <Link href="/profile">
                  <AppButton
                    className="cursor-pointer min-w-fit"
                  >
                    <MdAccountBox size={24} />
                  </AppButton>
                </Link>
            </div>
            {mounted && <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />}
        </header>
    );
};

export default MobileNavBar;
