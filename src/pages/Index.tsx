import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Dashboard } from "@/components/Dashboard";
import { ChatInterface } from "@/components/ChatInterface";

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  const handleGetStarted = () => {
    setShowDashboard(true);
    // Smooth scroll to dashboard
    setTimeout(() => {
      const dashboardEl = document.getElementById("dashboard");
      dashboardEl?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Hero onGetStarted={handleGetStarted} />
      
      {showDashboard && (
        <>
          <div id="dashboard">
            <Dashboard />
          </div>
          <ChatInterface />
        </>
      )}
    </div>
  );
};

export default Index;
