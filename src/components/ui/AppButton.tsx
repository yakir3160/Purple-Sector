import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

const AppButton = ({ className = "", children = "Button", ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "px-4 md:px-6 py-2 md:py-3 min-w-[90px] font-formula-medium text-sm md:text-base border-b-4 border-b-f1-green bg-f1-black text-white transition-colors hover:bg-white hover:text-black",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default AppButton;
