import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, HelpCircle, MessageCircle } from "lucide-react";
import { TicketsTab } from "./support/TicketsTab";
import { FAQsTab } from "./support/FAQsTab";
import { FeedbackTab } from "./support/FeedbackTab";
import { Skeleton } from "@/components/ui/skeleton";

interface Ticket {
  id: string;
  subject: string;
  status: "open" | "closed" | "pending";
  priority: "low" | "medium" | "high";
  createdAt: string;
  description?: string;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const Support = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tickets] = useState<Ticket[]>([
    {
      id: "1",
      subject: "Payment Issue",
      status: "open",
      priority: "high",
      createdAt: "2024-02-20",
      description: "Unable to process payment for latest transaction",
    },
    {
      id: "2",
      subject: "Account Access",
      status: "pending",
      priority: "medium",
      createdAt: "2024-02-19",
      description: "Need help resetting two-factor authentication",
    },
  ]);

  const [faqs] = useState<FAQ[]>([
    {
      id: "1",
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page. Follow the instructions sent to your email to create a new password.",
      category: "Account",
    },
    {
      id: "2",
      question: "How long does verification take?",
      answer: "Verification typically takes 1-2 business days. For faster verification, ensure all submitted documents are clear and valid.",
      category: "Verification",
    },
  ]);

  // Simulate loading state
  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <Skeleton className="h-8 w-48" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-12 w-full mb-4" />
          <div className="space-y-4">
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Support Center</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="tickets" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto">
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