import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const matchData = {
  homeTeam: "Manchester United",
  awayTeam: "Liverpool",
  homeWinProb: 45,
  drawProb: 25,
  awayWinProb: 30,
  stats: [
    { name: "Possession", home: 52, away: 48 },
    { name: "Shots", home: 15, away: 18 },
    { name: "On Target", home: 6, away: 8 },
    { name: "Pass Accuracy", home: 85, away: 82 },
    { name: "xG (Expected Goals)", home: 1.8, away: 2.1 },
  ],
};

const chartData = [
  { name: "Home Win", probability: matchData.homeWinProb, fill: "hsl(var(--primary))" },
  { name: "Draw", probability: matchData.drawProb, fill: "hsl(var(--muted))" },
  { name: "Away Win", probability: matchData.awayWinProb, fill: "hsl(var(--accent))" },
];

export const MatchStats = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="gradient-card border-border">
        <CardHeader>
          <CardTitle>Win Probability</CardTitle>
          <CardDescription>XGBoost model prediction</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">{matchData.homeTeam}</span>
              <Badge variant="outline">{matchData.homeWinProb}%</Badge>
            </div>
            <Progress value={matchData.homeWinProb} className="h-3" />
            
            <div className="flex items-center justify-between">
              <span className="font-medium">Draw</span>
              <Badge variant="outline">{matchData.drawProb}%</Badge>
            </div>
            <Progress value={matchData.drawProb} className="h-3" />
            
            <div className="flex items-center justify-between">
              <span className="font-medium">{matchData.awayTeam}</span>
              <Badge variant="outline">{matchData.awayWinProb}%</Badge>
            </div>
            <Progress value={matchData.awayWinProb} className="h-3" />
          </div>

          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Bar dataKey="probability" radius={[8, 8, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="gradient-card border-border">
        <CardHeader>
          <CardTitle>Match Statistics</CardTitle>
          <CardDescription>Comparative team performance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {matchData.stats.map((stat) => (
            <div key={stat.name} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-primary font-medium">{stat.home}</span>
                <span className="text-muted-foreground">{stat.name}</span>
                <span className="text-accent font-medium">{stat.away}</span>
              </div>
              <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="absolute left-0 h-full bg-primary rounded-full"
                  style={{ width: `${(stat.home / (stat.home + stat.away)) * 100}%` }}
                />
                <div 
                  className="absolute right-0 h-full bg-accent rounded-full"
                  style={{ width: `${(stat.away / (stat.home + stat.away)) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
