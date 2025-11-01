import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Send, Bot, User } from "lucide-react";
import { toast } from "sonner";
import { callSportsAnalyst } from "@/lib/api";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI Sports Analyst. Ask me anything about match statistics, player performance, or tactical insights. For example, 'Why did Liverpool perform better in the second half?' or 'Which player had the biggest impact?'"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await callSportsAnalyst(
        [...messages, userMessage].map(m => ({ role: m.role, content: m.content }))
      );

      const assistantMessage: Message = {
        role: "assistant",
        content: response
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      
      if (errorMessage.includes('429') || errorMessage.includes('Rate limit')) {
        toast.error("Rate limit exceeded. Please try again in a moment.");
      } else if (errorMessage.includes('402') || errorMessage.includes('usage limit')) {
        toast.error("AI usage limit reached. Please add credits to continue.");
      } else if (errorMessage.includes('Failed to fetch') || errorMessage.includes('NetworkError')) {
        toast.error("Cannot connect to backend. Make sure the API server is running.");
      } else {
        toast.error("Failed to get response. Please try again.");
      }
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container px-4 py-16 mx-auto">
      <Card className="max-w-4xl mx-auto gradient-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-primary" />
            AI Sports Analyst
          </CardTitle>
          <CardDescription>
            Ask questions about match analysis, player performance, or tactical strategies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96 pr-4 mb-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <Avatar className="h-8 w-8 bg-primary/20">
                      <AvatarFallback className="bg-primary/20">
                        <Bot className="w-4 h-4 text-primary" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  </div>

                  {message.role === "user" && (
                    <Avatar className="h-8 w-8 bg-accent/20">
                      <AvatarFallback className="bg-accent/20">
                        <User className="w-4 h-4 text-accent" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8 bg-primary/20">
                    <AvatarFallback className="bg-primary/20">
                      <Bot className="w-4 h-4 text-primary animate-pulse" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-secondary p-4 rounded-lg">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about player performance, tactics, or match insights..."
              disabled={isLoading}
              className="bg-secondary border-border"
            />
            <Button onClick={handleSend} disabled={isLoading || !input.trim()}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
