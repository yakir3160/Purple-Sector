import StyledTable from "@/components/ui/StyledTable";

export default function TableDemo() {
  const data = [
    { Name: "Max Verstappen", Flag: "🇳🇱", Team: "Red Bull", Wins: 5, Podiums: 10, Points: 420 },
    { Name: "Lewis Hamilton", Flag: "🇬🇧", Team: "Mercedes", Wins: 6, Podiums: 11, Points: 350 },
    { Name: "Charles Leclerc", Flag: "🇲🇨", Team: "Ferrari", Wins: 1, Podiums: 6, Points: 290 },
  ].map(({Points, ...rest}) => ({...rest, Points}));

  return (
    <div className="p-8">
      <StyledTable title="Drivers Standings" data={data} />
    </div>
  );
}
