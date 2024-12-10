import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { CheckSquare, XSquare, Flag, Bookmark } from "lucide-react";

interface Job {
  id: string;
  title: string;
  description: string;
  status: "pending" | "approved" | "rejected" | "flagged";
  isFeatured: boolean;
  spamScore: number;
  datePosted: string;
}

export const ContentManagement = () => {
  const { toast } = useToast();
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: "1",
      title: "Smart Contract Developer",
      description: "Looking for an experienced Solidity developer...",
      status: "pending",
      isFeatured: false,
      spamScore: 0.1,
      datePosted: "2024-03-20",
    },
    {
      id: "2",
      title: "UI/UX Designer",
      description: "Need a talented designer for our DeFi platform...",
      status: "approved",
      isFeatured: true,
      spamScore: 0.05,
      datePosted: "2024-03-19",
    },
    {
      id: "3",
      title: "URGENT!!! MAKE $10000/DAY WORKING FROM HOME!!!",
      description: "!!!EASY MONEY!!! CLICK HERE!!!",
      status: "flagged",
      isFeatured: false,
      spamScore: 0.95,
      datePosted: "2024-03-18",
    },
  ]);

  const handleModeration = (jobId: string, newStatus: Job["status"]) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, status: newStatus } : job
      )
    );
    toast({
      title: "Job Status Updated",
      description: `Job has been marked as ${newStatus}`,
    });
  };

  const toggleFeatured = (jobId: string) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, isFeatured: !job.isFeatured } : job
      )
    );
    toast({
      title: "Featured Status Updated",
      description: "Job featured status has been updated",
    });
  };

  const getStatusColor = (status: Job["status"]) => {
    switch (status) {
      case "approved":
        return "bg-green-500";
      case "rejected":
        return "bg-red-500";
      case "flagged":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Content Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="pending">
          <TabsList className="mb-4">
            <TabsTrigger value="pending">Pending Review</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="flagged">Flagged</TabsTrigger>
          </TabsList>

          {["pending", "approved", "flagged"].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="space-y-4">
                {jobs
                  .filter((job) => job.status === tab)
                  .map((job) => (
                    <div
                      key={job.id}
                      className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold">{job.title}</h3>
                          <p className="text-sm text-gray-600">
                            {job.description}
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Badge
                              variant="secondary"
                              className={getStatusColor(job.status)}
                            >
                              {job.status}
                            </Badge>
                            {job.isFeatured && (
                              <Badge variant="secondary" className="bg-primary">
                                Featured
                              </Badge>
                            )}
                            {job.spamScore > 0.7 && (
                              <Badge variant="destructive">High Spam Risk</Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleModeration(job.id, "approved")}
                          >
                            <CheckSquare className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleModeration(job.id, "rejected")}
                          >
                            <XSquare className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleModeration(job.id, "flagged")}
                          >
                            <Flag className="w-4 h-4" />
                          </Button>
                          <Button
                            variant={job.isFeatured ? "default" : "outline"}
                            size="sm"
                            onClick={() => toggleFeatured(job.id)}
                          >
                            <Bookmark className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        Posted: {job.datePosted} | Spam Score:{" "}
                        {(job.spamScore * 100).toFixed(1)}%
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};