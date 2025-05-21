import LeaderboardTable from "@/components/LeaderboardDemo";

export default function LeaderboardPage() {
  return (
    <div className="flex flex-col items-end min-h-screen p-8 pb-20 gap-16 sm:p-20 font-geist">
      <LeaderboardTable />
    </div>
  );
}
