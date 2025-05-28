'use client';

import Link from 'next/link';
import AppButton from '@/components/ui/AppButton';

const AboutPage = () => {
  return (
    <main className="flex flex-col items-center min-h-screen pt-14 md:pt-20 pb-16 md:pb-20 w-full px-0">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 pt-6">
        <h1 className="text-2xl md:text-4xl font-formula-bold mb-6 text-f1-purple">
          About Purple Sector
        </h1>
        
        <div className="bg-white shadow-md rounded-lg p-5 md:p-8 mb-8">
          <h2 className="text-xl font-formula-bold mb-4 text-f1-blue">
            Welcome to F1 Prediction League
          </h2>
          
          <div className="space-y-4">
            <p>
              Purple Sector is the ultimate Formula 1 prediction platform where fans can test their knowledge
              and compete with friends. Named after the iconic purple sector times in F1 timing, our platform
              lets you make predictions for upcoming races and earn points based on accuracy.
            </p>
            
            <h3 className="text-lg font-formula-bold mt-6 mb-2">How It Works</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Predict race results before each Grand Prix weekend</li>
              <li>Earn points based on how accurate your predictions are</li>
              <li>Compete in global leaderboards or create private groups with friends</li>
              <li>Track your stats and improve your prediction skills throughout the season</li>
            </ul>
            
            <h3 className="text-lg font-formula-bold mt-6 mb-2">Scoring System</h3>
            <p>
              Points are awarded based on how close your predictions are to the actual race results.
              Predict pole positions, race winners, podium finishers, fastest laps, and more!
            </p>
            
            <h3 className="text-lg font-formula-bold mt-6 mb-2">Join the Competition</h3>
            <p>
              Create an account to start making predictions, join groups, and compete with F1 fans from around the world.
              The more races you predict, the better your chances of climbing the leaderboard.
            </p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Link href="/">
              <AppButton className="font-formula-medium">
                Back to Home
              </AppButton>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
