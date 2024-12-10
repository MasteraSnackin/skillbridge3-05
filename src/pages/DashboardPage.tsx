import { Navigation } from "@/components/Navigation";
import { TimeTracker } from "@/components/TimeTracker";
import { MilestoneTracker } from "@/components/MilestoneTracker";
import { FileSharing } from "@/components/FileSharing";
import { ProjectProgress } from "@/components/ProjectProgress";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 pt-20">
        <h1 className="text-3xl font-bold mb-8">Project Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TimeTracker />
          <MilestoneTracker />
          <FileSharing />
          <ProjectProgress />
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;