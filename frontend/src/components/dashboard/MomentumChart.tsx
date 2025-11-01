import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, AreaChart } from "recharts";

const momentumData = [
  { minute: 0, home: 50, away: 50 },
  { minute: 15, home: 55, away: 45 },
  { minute: 30, home: 60, away: 40 },
  { minute: 45, home: 58, away: 42 },
  { minute: 60, home: 48, away: 52 },
  { minute: 75, home: 45, away: 55 },
  { minute: 90, home: 52, away: 48 },
];

export const MomentumChart = () => {
  return (
    <Card className="gradient-card border-border">
      <CardHeader>
        <CardTitle>Momentum Analysis</CardTitle>
        <CardDescription>LSTM time-series prediction of performance shifts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={momentumData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="minute" 
                stroke="hsl(var(--muted-foreground))"
                label={{ value: 'Match Time (minutes)', position: 'insideBottom', offset: -5 }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                label={{ value: 'Momentum %', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="home" 
                stackId="1"
                stroke="hsl(var(--primary))" 
                fill="hsl(var(--primary))"
                fillOpacity={0.6}
                name="Home Team"
              />
              <Area 
                type="monotone" 
                dataKey="away" 
                stackId="2"
                stroke="hsl(var(--accent))" 
                fill="hsl(var(--accent))"
                fillOpacity={0.6}
                name="Away Team"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Key Moment Detected
          </h4>
          <p className="text-sm text-muted-foreground">
            At 60th minute, the momentum shifted significantly in favor of the away team. 
            This correlates with a substitution and tactical change in formation.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
