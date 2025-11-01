import { Link, useLocation } from "react-router-dom";
import { BarChart3, MessageSquare, Home, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl">Match Sage</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                className="gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </Button>
            </Link>
            
            <Link to="/analytics">
              <Button
                variant={isActive("/analytics") ? "default" : "ghost"}
                className="gap-2"
              >
                <BarChart3 className="w-4 h-4" />
                Analytics
              </Button>
            </Link>
            
            <Link to="/insights">
              <Button
                variant={isActive("/insights") ? "default" : "ghost"}
                className="gap-2"
              >
                <Lightbulb className="w-4 h-4" />
                AI Insights
              </Button>
            </Link>
            
            <Link to="/chat">
              <Button
                variant={isActive("/chat") ? "default" : "ghost"}
                className="gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                AI Chat
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
