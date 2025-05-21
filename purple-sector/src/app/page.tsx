import FontExample from "@/components/FontExample";
import TableDemo from "@/components/TableDemo";
import LeaderboardTable from "@/components/LeaderboardDemo";
import TeamsDemo from "@/components/TeamsDemo";

export default function Home() {
  return (
    <div className="flex flex-col items-end min-h-screen p-8 pb-20 gap-16 sm:p-20 font-geist">
      <span className={"text-xl font-formula-italic bg-f1-purple "}>
        {" "}
        Go to nextjs.org →
      </span>
      
     <FontExample />
    </div>
  );
}
