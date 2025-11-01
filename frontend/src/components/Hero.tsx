import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Brain, TrendingUp } from "lucide-react";

export const Hero = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      
      <div className="container px-4 py-16 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-4">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI-Powered Sports Analytics</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Unlock The Power of{" "}
            <span className="text-gradient">Data-Driven</span> Sports Insights
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Advanced machine learning models combined with generative AI to deliver predictive analytics, 
            player impact scoring, and tactical insights for football, basketball, and cricket.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2 glow-effect" onClick={onGetStarted}>
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="p-6 bg-card rounded-xl border border-border">
              <BarChart3 className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Match Predictions</h3>
              <p className="text-sm text-muted-foreground">
                XGBoost models analyze team stats to predict outcomes with high accuracy
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-xl border border-border">
              <TrendingUp className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-semibold mb-2">Player Impact</h3>
              <p className="text-sm text-muted-foreground">
                Advanced metrics reveal which players truly influence match results
              </p>
            </div>
            
            <div className="p-6 bg-card rounded-xl border border-border">
              <Brain className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">AI Analyst</h3>
              <p className="text-sm text-muted-foreground">
                Chat with AI to get tactical insights and strategic recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
