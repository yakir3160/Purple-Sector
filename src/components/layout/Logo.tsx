import Link from "next/link";
import "@/app/globals.css";
import { FC } from 'react';
import { useF1TimingAnimation } from '@/hooks/useF1TimingAnimation';

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className = '' }) => {

  const { showTiming, timingValue } = useF1TimingAnimation({ 
    repeatInterval: 15000
  });

  return (
    <div className={` flex items-center justify-center   w-[185px] md:w-[250px]  bg-black border-b-4 border-f1-purple  h-[43px] md:h-[57px]    ${className}`}>
      <Link
        href="/"
             className="text-white no-underline hover:text-f1-purple transition-colors font-formula-regular text-2xl md:text-3xl tracking-widest  p-2 md:p-3"
      >
        <span className="flex justify-center items-center logo-text-container">
          {showTiming ? (

            <span className="text-2xl md:text-3xl tracking-tight select-none f1-timing-animation-replace">
              <span className="text-f1-green text-center">{timingValue}</span>
            </span>
          ) : (
        
            <span className="logo-animated-text font-formula-italic  text-nowrap  text-2xl md:text-3xl tracking-tight select-none">
              Purple Sector
            </span>
          )}
        </span>
      </Link>
    </div>
  );
};

export default Logo;
