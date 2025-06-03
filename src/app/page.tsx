import HomeTabs from "@/components/layout/HomeTabs";
import WelcomeBanner from "@/components/common/WelcomeBanner";
import { TabProvider } from "@/contexts/TabContext";

const Home = () => {
  return (
   <TabProvider>
     <main className=" flex flex-col items-center min-h-screen pt-4 pb-16 md:pb-20 w-full px-0">
      
        {/* Welcome Banner Component */}
        <WelcomeBanner />
        <HomeTabs />
      </main>
   </TabProvider>
  );
};

export default Home;
