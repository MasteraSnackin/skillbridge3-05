import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, HelpCircle, MessageCircle } from "lucide-react";
import { TicketsTab } from "./support/TicketsTab";
import { FAQsTab } from "./support/FAQsTab";
import { FeedbackTab } from "./support/FeedbackTab";

interface Ticket {
  id: string;
  subject: string;
  status: "open" | "closed" | "pending";
  priority: "low" | "medium" | "high";
  createdAt: string;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const Support = () => {
  const [tickets] = useState<Ticket[]>([
    {
      id: "1",
      subject: "Payment Issue",
      status: "open",
      priority: "high",
      createdAt: "2024-02-20",
    },
    {
      id: "2",
      subject: "Account Access",
      status: "pending",
      priority: "medium",
      createdAt: "2024-02-19",
    },
  ]);

  const [faqs] = useState<FAQ[]>([
    {
      id: "1",
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page.",
      category: "Account",
    },
    {
      id: "2",
      question: "How long does verification take?",
      answer: "Verification typically takes 1-2 business days.",
      category: "Verification",
    },
  ]);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Support Center</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="tickets">
          <TabsList className="mb-4">
            <TabsTrigger value="tickets" className="gap-2">
              <MessageSquare className="w-4 h-4" />
              Tickets
            </TabsTrigger>
            <TabsTrigger value="faqs" className="gap-2">
              <HelpCircle className="w-4 h-4" />
              FAQs
            </TabsTrigger>
            <TabsTrigger value="feedback" className="gap-2">
              <MessageCircle className="w-4 h-4" />
              Feedback
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tickets">
            <TicketsTab tickets={tickets} />
          </TabsContent>

          <TabsContent value="faqs">
            <FAQsTab faqs={faqs} />
          </TabsContent>

          <TabsContent value="feedback">
            <FeedbackTab />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};