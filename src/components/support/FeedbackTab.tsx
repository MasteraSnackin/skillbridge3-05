import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const FeedbackTab = () => {
  const { toast } = useToast();

  const handleFeedback = () => {
    toast({
      title: "Feedback Received",
      description: "Thank you for your feedback!",
    });
  };

  return (
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
  );
};