'use client';

import { App } from "antd";
import { FC } from "react";
import { RiMenuUnfold3Line } from "react-icons/ri";
import AppButton from "@/components/common/AppButton";

interface SidebarToggleButtonProps {
  onClick: () => void;
  className?: string;
}

const SidebarToggleButton: FC<SidebarToggleButtonProps & { isOpen?: boolean }> = ({ onClick, className = "", isOpen }) => {
  return (
    <AppButton
      onClick={onClick}
      className={`min-w-fit z-50   ${className}`}
      aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
    >
      <RiMenuUnfold3Line 
        size={24} 
        className={`md:w-8 md:h-8 transition-transform duration-300 ${isOpen ? '-rotate-180' : ''}`} 
      />
    </AppButton>
  );
};

export default SidebarToggleButton;
