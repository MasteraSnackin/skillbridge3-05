import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileSharing } from "@/components/FileSharing";
import { MessageSquare, Video, Globe, Send, Paperclip } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  text: string;
  sender: string;
  timestamp: string;
  translated?: boolean;
}

export const Communication = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi, how's the project going?",
      sender: "Client",
      timestamp: "10:30 AM",
    },
    {
      id: "2",
      text: "Everything is on track. I've just pushed some updates.",
      sender: "Freelancer",
      timestamp: "10:32 AM",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTranslationEnabled, setIsTranslationEnabled] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        text: newMessage,
        sender: "Freelancer",
        timestamp: new Date().toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const startVideoCall = () => {
    console.log("Starting video call...");
    // Video call integration would go here
  };

  const toggleTranslation = () => {
    setIsTranslationEnabled(!isTranslationEnabled);
    console.log("Translation toggled:", !isTranslationEnabled);
  };

  return (
    <>
      <div className="bg-primary/10 py-2 px-4 text-center text-sm font-medium text-primary mb-4">
        Screenshot Demo - Communication Interface
      </div>
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Communication Hub <Badge variant="secondary">Demo</Badge></CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="chat">
            <TabsList className="mb-4">
              <TabsTrigger value="chat" className="gap-2">
                <MessageSquare className="w-4 h-4" />
                Chat
              </TabsTrigger>
              <TabsTrigger value="files" className="gap-2">
                <Paperclip className="w-4 h-4" />
                Files
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chat">
              <div className="flex gap-4 mb-4">
                <Button onClick={startVideoCall} variant="outline" className="gap-2">
                  <Video className="w-4 h-4" />
                  Start Video Call
                </Button>
                <Button
                  onClick={toggleTranslation}
                  variant={isTranslationEnabled ? "default" : "outline"}
                  className="gap-2"
                >
                  <Globe className="w-4 h-4" />
                  {isTranslationEnabled ? "Translation On" : "Translation Off"}
                </Button>
              </div>

              <div className="h-[400px] border rounded-md mb-4 p-4 overflow-y-auto space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex flex-col ${
                      message.sender === "Freelancer" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        message.sender === "Freelancer"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <div className="font-medium text-sm mb-1">{message.sender}</div>
                      <div>{message.text}</div>
                      <div className="text-xs mt-1 opacity-70">{message.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} className="gap-2">
                  <Send className="w-4 h-4" />
                  Send
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="files">
              <FileSharing />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};
