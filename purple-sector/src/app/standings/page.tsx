import TableDemo from "@/components/TableDemo";
import TeamsDemo from "@/components/TeamsDemo";

export default function StandingsPage() {
  return (
    <div className="max-w-5xl mx-auto py-10 flex flex-col gap-12">
      <h1 className="text-3xl font-formula-bold text-f1-purple mb-6">Standings</h1>
      <TableDemo />
      <TeamsDemo />
    </div>
  );
}
