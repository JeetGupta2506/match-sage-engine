import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MatchStats } from "./dashboard/MatchStats";
import { PlayerImpact } from "./dashboard/PlayerImpact";
import { MomentumChart } from "./dashboard/MomentumChart";
import { AIInsights } from "./dashboard/AIInsights";

export const Dashboard = () => {
  return (
    <section className="container px-4 py-16 mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Analytics Dashboard</h2>
        <p className="text-muted-foreground">
          Real-time match analysis powered by machine learning models
        </p>
      </div>

      <Tabs defaultValue="match" className="space-y-6">
        <TabsList className="bg-secondary">
          <TabsTrigger value="match">Match Analysis</TabsTrigger>
          <TabsTrigger value="player">Player Impact</TabsTrigger>
          <TabsTrigger value="momentum">Momentum</TabsTrigger>
        </TabsList>

        <TabsContent value="match" className="space-y-6">
          <MatchStats />
          <AIInsights />
        </TabsContent>

        <TabsContent value="player" className="space-y-6">
          <PlayerImpact />
          <AIInsights />
        </TabsContent>

        <TabsContent value="momentum" className="space-y-6">
          <MomentumChart />
          <AIInsights />
        </TabsContent>
      </Tabs>
    </section>
  );
};
