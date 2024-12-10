import { Check, Circle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const milestones = [
  { id: 1, title: "Project Setup", completed: true },
  { id: 2, title: "Design Phase", completed: true },
  { id: 3, title: "Development", completed: false },
  { id: 4, title: "Testing", completed: false },
  { id: 5, title: "Deployment", completed: false },
];

export const MilestoneTracker = () => {
  const completedCount = milestones.filter((m) => m.completed).length;
  const progress = (completedCount / milestones.length) * 100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Milestones</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="mb-4" />
        <div className="space-y-4">
          {milestones.map((milestone) => (
            <div
              key={milestone.id}
              className="flex items-center gap-3 text-sm"
            >
              {milestone.completed ? (
                <Check className="h-5 w-5 text-green-500" />
              ) : (
                <Circle className="h-5 w-5 text-gray-300" />
              )}
              <span className={milestone.completed ? "line-through text-gray-500" : ""}>
                {milestone.title}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};