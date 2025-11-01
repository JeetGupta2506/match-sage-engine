import { Hero } from "@/components/Hero";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/analytics");
  };

  return (
    <div className="min-h-screen">
      <Hero onGetStarted={handleGetStarted} />
    </div>
  );
};

export default Index;
