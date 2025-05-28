import HomeTabs from "@/components/ui/HomeTabs";
import WelcomeBanner from "@/components/ui/WelcomeBanner";

const Home = () => {
  return (
   
   <main className=" flex flex-col items-center min-h-screen pt-14 md:pt-20 pb-16 md:pb-20 w-full px-0">
      
      {/* Welcome Banner Component */}
      <WelcomeBanner />
      <HomeTabs />
    </main>
  );
};

export default Home;
