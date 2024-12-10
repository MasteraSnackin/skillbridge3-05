import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export const FeedbackTab = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFeedback = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Feedback Received",
      description: "Thank you for your feedback! We appreciate your input.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleFeedback} className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Category</label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Select feedback category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General</SelectItem>
            <SelectItem value="bug">Bug Report</SelectItem>
            <SelectItem value="feature">Feature Request</SelectItem>
            <SelectItem value="improvement">Improvement Suggestion</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Subject</label>
        <Input required placeholder="Enter feedback subject" />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Your Feedback</label>
        <Textarea
          required
          placeholder="Please share your experience or suggestions"
          rows={4}
        />
      </div>
      
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Feedback"}
      </Button>
    </form>
  );
};