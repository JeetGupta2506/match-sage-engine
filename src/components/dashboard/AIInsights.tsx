import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, AlertCircle } from "lucide-react";

export const AIInsights = () => {
  return (
    <Card className="gradient-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-primary" />
          AI-Generated Insights
        </CardTitle>
        <CardDescription>Natural language analysis powered by LLM reasoning</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
          <h4 className="font-semibold mb-2 text-primary">Match Analysis</h4>
          <p className="text-sm leading-relaxed">
            Although Manchester United dominated possession (52%), their poor shot accuracy (40%) and 
            lower expected goals (1.8 vs 2.1) suggest Liverpool created higher quality chances. 
            The momentum shift at the 60th minute indicates a tactical adjustment that neutralized 
            United's attacking threat.
          </p>
        </div>

        <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg">
          <h4 className="font-semibold mb-2 text-accent">Tactical Recommendation</h4>
          <p className="text-sm leading-relaxed">
            Manchester United should consider switching to a more direct attacking approach to bypass 
            Liverpool's midfield press. Mohamed Salah's high impact score (8.7) poses a significant 
            threat on the counter-attack, requiring tighter defensive marking.
          </p>
        </div>

        <div className="p-4 bg-secondary/50 rounded-lg flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-semibold text-sm">Performance Drop Alert</h4>
            <p className="text-sm text-muted-foreground">
              Casemiro's impact score has decreased in the second half. Consider a defensive 
              midfielder substitution to regain midfield control.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
