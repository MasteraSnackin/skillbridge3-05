import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProgressItem {
  label: string;
  progress: number;
  color: string;
}

const progressItems: ProgressItem[] = [
  { label: "Frontend Development", progress: 75, color: "bg-blue-500" },
  { label: "Backend Integration", progress: 45, color: "bg-green-500" },
  { label: "Testing Coverage", progress: 60, color: "bg-yellow-500" },
  { label: "Documentation", progress: 30, color: "bg-purple-500" },
];

export const ProjectProgress = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {progressItems.map((item) => (
            <div key={item.label}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-sm text-gray-500">{item.progress}%</span>
              </div>
              <Progress value={item.progress} className={item.color} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};