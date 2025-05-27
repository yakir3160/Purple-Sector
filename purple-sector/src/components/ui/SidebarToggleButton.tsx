'use client';

import { FC } from "react";
import { RiMenuUnfold3Line, RiMenuUnfold4Line } from "react-icons/ri";

interface SidebarToggleButtonProps {
  onClick: () => void;
  className?: string;
}

const SidebarToggleButton: FC<SidebarToggleButtonProps & { isOpen?: boolean }> = ({ onClick, className = "", isOpen }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 absolute left-4 top-1/2 -translate-y-1/2 z z-50  ${className}`}
      aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
    >
      {isOpen ? < RiMenuUnfold4Line size={28} className="md:w-8 md:h-8" /> : <RiMenuUnfold3Line size={28} className="md:w-8 md:h-8" />}
    </button>
  );
};

export default SidebarToggleButton;
