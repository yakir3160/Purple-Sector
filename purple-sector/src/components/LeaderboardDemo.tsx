import StyledTable from "@/components/StyledTable";

export default function LeaderboardTable() {
  const data = [
    { Player: "Yakir", League: "F1 Masters", "W-L": "23-12", Accuracy: (23/(23+12)).toFixed(2), Points: 320 },
    { Player: "Dana", League: "F1 Masters", "W-L": "21-14", Accuracy: (21/(21+14)).toFixed(2), Points: 295 },
    { Player: "Amit", League: "F1 Legends", "W-L": "19-15", Accuracy: (19/(19+15)).toFixed(2), Points: 270 },
    { Player: "Noa", League: "F1 Legends", "W-L": "17-16", Accuracy: (17/(17+16)).toFixed(2), Points: 250 },
    { Player: "Lior", League: "F1 Pros", "W-L": "15-17", Accuracy: (15/(15+17)).toFixed(2), Points: 230 },
  ].map(({ Points, ...rest }) => ({ ...rest, Points }));

  return (
    <div className="p-8">
      <StyledTable title="Leaderboard" data={data} />
    </div>
  );
}
