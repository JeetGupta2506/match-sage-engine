import { ChatInterface } from "@/components/ChatInterface";
import { Navigation } from "@/components/Navigation";

const Chat = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ChatInterface />
    </div>
  );
};

export default Chat;
