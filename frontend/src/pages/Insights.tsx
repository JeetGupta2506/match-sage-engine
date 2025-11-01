import { AIInsights } from "@/components/dashboard/AIInsights";
import { Navigation } from "@/components/Navigation";

const Insights = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="container px-4 py-16 mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">AI Insights</h2>
          <p className="text-muted-foreground">
            Real-time AI-powered insights and recommendations
          </p>
        </div>
        <AIInsights />
      </section>
    </div>
  );
};

export default Insights;
