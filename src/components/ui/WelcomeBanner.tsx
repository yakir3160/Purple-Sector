'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoMdCloseCircleOutline } from "react-icons/io";

const WelcomeBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Use localStorage to remember if the user has closed the banner
  useEffect(() => {
    setIsMounted(true);
    const bannerClosed = localStorage.getItem('welcomeBannerClosed');
    if (bannerClosed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
    localStorage.setItem('welcomeBannerClosed', 'true');
  };

  if (!isMounted || !isVisible) return null;

  return (
    <div className="w-full bg-gradient-to-r from-f1-purple to-f1-blue py-3 md:py-6 mb-2 md:mb-4 relative">
      <div className="max-w-4xl mx-auto px-3 md:px-4 mobile-full-width">
        <button 
          onClick={closeBanner}
          className="absolute bottom-2 right-2 md:top-3 md:right-4 text-white/80 hover:text-white transition-colors"
          aria-label="סגור הודעה"
        >
          <IoMdCloseCircleOutline className="size-8" />
        </button>
        
        <h1 className="text-xl sm:text-2xl md:text-4xl text-white font-formula-bold mb-1 md:mb-2 text-center md:text-left">
          Welcome to Purple Sector
        </h1>
        <p className="text-white/90 text-center md:text-left text-xs sm:text-sm md:text-base">
          Formula 1 Prediction League - Test your F1 knowledge and compete with friends
        </p>
        
        <div className="mt-2 md:mt-3 text-center md:text-left">
          <Link href="/about" className="inline-block text-white font-formula-medium text-sm underline hover:text-white/80 transition-colors">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBanner;
