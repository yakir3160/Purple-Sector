import StyledTable from "@/components/StyledTable";

export default function TeamsDemo() {
  const data = [
    { TeamName: "Red Bull Racing", _color: "f1-redbull", Podiums: 15, Wins: 10, Points: 650 },
    { TeamName: "Mercedes", _color: "f1-mercedes", Podiums: 12, Wins: 7, Points: 590 },
    { TeamName: "Ferrari", _color: "f1-ferrari", Podiums: 9, Wins: 4, Points: 520 },
    { TeamName: "McLaren", _color: "f1-mclaren", Podiums: 6, Wins: 2, Points: 410 },
    { TeamName: "Aston Martin", _color: "f1-astonmartin", Podiums: 4, Wins: 1, Points: 350 },
    { TeamName: "Alpine", _color: "f1-alpine", Podiums: 2, Wins: 0, Points: 210 },
    { TeamName: "Williams", _color: "f1-williams", Podiums: 0, Wins: 0, Points: 120 },
    { TeamName: "RB (Visa Cash App RB)", _color: "f1-rb", Podiums: 0, Wins: 0, Points: 95 },
    { TeamName: "Stake F1 Team Kick Sauber", _color: "f1-sauber", Podiums: 0, Wins: 0, Points: 80 },
    { TeamName: "Haas", _color: "f1-haas", Podiums: 0, Wins: 0, Points: 60 },
  ].map(({Points, ...rest}) => ({...rest, Points}));

  return (
    <div className="p-8">
      <StyledTable title="Teams Standings" data={data} />
    </div>
  );
}
