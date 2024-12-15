import { Navigation } from "@/components/Navigation";
import { TimeTracker } from "@/components/TimeTracker";
import { ProjectProgress } from "@/components/ProjectProgress";
import { FinancialManagement } from "@/components/FinancialManagement";
import AdminDashboard from "@/components/AdminDashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardPage = () => {
  // In a real app, you'd check for admin role here
  const isAdmin = true;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8 pt-20">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">{isAdmin ? "Admin Dashboard" : "Project Dashboard"}</h1>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="financial">Financial</TabsTrigger>
              <TabsTrigger value="admin" disabled={!isAdmin}>
                Admin
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TimeTracker />
                <ProjectProgress />
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active Projects</CardTitle>
                  <CardDescription>Track and manage your ongoing projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProjectProgress />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="financial" className="mt-6">
              <FinancialManagement />
            </TabsContent>

            <TabsContent value="admin" className="mt-6">
              {isAdmin && <AdminDashboard />}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;