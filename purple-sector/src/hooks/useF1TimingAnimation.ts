import { useState, useEffect } from 'react';

export function useF1TimingAnimation({ repeatInterval = 0 } = {}) {
  const [showTiming, setShowTiming] = useState(false);
  const [timingValue, setTimingValue] = useState('-0.000');

  const generateRandomTiming = () => {
    const random = (Math.random() * 1.299 + 0.001).toFixed(3);
    if (Math.random() < 0.7) {
      return `-0.${random.substring(2)}`;
    }
    return `-${random}`;
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const runAnimationSequence = () => {
      setShowTiming(true);
      setTimingValue(generateRandomTiming());
      setTimeout(() => {
        setShowTiming(false);
      }, 1750); 
    };
    runAnimationSequence();
    const intervalId = setInterval(runAnimationSequence, repeatInterval > 0 ? repeatInterval : 5000); // Increased interval for smoother transitions
    return () => clearInterval(intervalId);
  }, [repeatInterval]);

  return { showTiming, timingValue };
}
