import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TrendingUp, TrendingDown } from "lucide-react";

const players = [
  { 
    name: "Mohamed Salah", 
    team: "Liverpool",
    impactScore: 8.7, 
    trend: "up",
    stats: { goals: 2, assists: 1, keyPasses: 5, shotAccuracy: 78 }
  },
  { 
    name: "Bruno Fernandes", 
    team: "Man United",
    impactScore: 7.9, 
    trend: "up",
    stats: { goals: 1, assists: 2, keyPasses: 7, shotAccuracy: 65 }
  },
  { 
    name: "Casemiro", 
    team: "Man United",
    impactScore: 7.5, 
    trend: "down",
    stats: { goals: 0, assists: 0, keyPasses: 3, shotAccuracy: 55 }
  },
  { 
    name: "Virgil van Dijk", 
    team: "Liverpool",
    impactScore: 7.2, 
    trend: "up",
    stats: { goals: 0, assists: 0, keyPasses: 2, shotAccuracy: 45 }
  },
];

export const PlayerImpact = () => {
  return (
    <Card className="gradient-card border-border">
      <CardHeader>
        <CardTitle>Player Impact Scores</CardTitle>
        <CardDescription>AI-calculated weighted performance metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {players.map((player, idx) => (
            <div 
              key={player.name}
              className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
            >
              <div className="flex items-center gap-3 flex-1">
                <Avatar className="h-12 w-12 bg-primary/20">
                  <AvatarFallback className="bg-primary/20 text-primary font-bold">
                    {player.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{player.name}</h4>
                    {player.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-accent" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-destructive" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{player.team}</p>
                </div>

                <div className="flex gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-primary">{player.stats.goals}</div>
                    <div className="text-muted-foreground text-xs">Goals</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">{player.stats.assists}</div>
                    <div className="text-muted-foreground text-xs">Assists</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">{player.stats.keyPasses}</div>
                    <div className="text-muted-foreground text-xs">Key Passes</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">{player.stats.shotAccuracy}%</div>
                    <div className="text-muted-foreground text-xs">Accuracy</div>
                  </div>
                </div>

                <Badge className="text-lg font-bold px-4 py-2 glow-effect">
                  {player.impactScore}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
