import HomeTabs from "@/components/ui/HomeTabs";

const Home = () => {
  return (
   
   <main className=" flex flex-col items-center min-h-screen pt-14 md:pt-20 pb-16 md:pb-20 w-full px-0">
      
      {/* Welcome Banner */}
      <div className="w-full bg-gradient-to-r from-f1-purple to-f1-blue py-3 md:py-8 mb-2 md:mb-4">
        <div className="max-w-4xl mx-auto px-3 md:px-4 mobile-full-width">
          <h1 className="text-xl sm:text-2xl md:text-4xl text-white font-formula-bold mb-1 md:mb-2 text-center md:text-left">
            Welcome to Purple Sector
          </h1>
          <p className="text-white/90 text-center md:text-left text-xs sm:text-sm md:text-base">
            Formula 1 Prediction League - Test your F1 knowledge and compete with friends
          </p>
        </div>
      </div>
      <HomeTabs />
    </main>
  );
};

export default Home;
