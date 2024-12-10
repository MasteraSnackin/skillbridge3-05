import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  MessageSquare,
  HelpCircle,
  MessageCircle,
  Info,
} from "lucide-react";

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
  const { toast } = useToast();
  const [tickets, setTickets] = useState<Ticket[]>([
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

  const [faqs, setFaqs] = useState<FAQ[]>([
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

  const handleNewTicket = () => {
    toast({
      title: "Ticket Created",
      description: "Your support ticket has been submitted successfully.",
    });
  };

  const handleFeedback = () => {
    toast({
      title: "Feedback Received",
      description: "Thank you for your feedback!",
    });
  };

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
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Support Tickets</h3>
                <Button onClick={handleNewTicket}>New Ticket</Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Created</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell>{ticket.id}</TableCell>
                      <TableCell>{ticket.subject}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            ticket.status === "open"
                              ? "bg-green-100 text-green-800"
                              : ticket.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {ticket.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            ticket.priority === "high"
                              ? "bg-red-100 text-red-800"
                              : ticket.priority === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {ticket.priority}
                        </span>
                      </TableCell>
                      <TableCell>{ticket.createdAt}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="faqs">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.id}>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Info className="w-4 h-4" />
                      <CardTitle className="text-base">{faq.question}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                    <div className="mt-2">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {faq.category}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="feedback">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Enter feedback subject" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Feedback</label>
                <Textarea
                  placeholder="Please share your experience or suggestions"
                  rows={4}
                />
              </div>
              <Button onClick={handleFeedback}>Submit Feedback</Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};