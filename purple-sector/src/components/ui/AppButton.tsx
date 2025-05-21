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
        " px-6 py-3 font-formula-medium border-b-4  border-b-f1-purple bg-f1-black text-white  transition-colors hover:bg-white hover:text-black",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default AppButton;
