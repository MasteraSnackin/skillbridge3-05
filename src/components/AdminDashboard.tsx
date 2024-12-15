import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Users, DollarSign, AlertTriangle, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const revenueData = [
  { month: "Jan", amount: 12000 },
  { month: "Feb", amount: 15000 },
  { month: "Mar", amount: 18000 },
  { month: "Apr", amount: 22000 },
  { month: "May", amount: 25000 },
  { month: "Jun", amount: 28000 },
];

const AdminDashboard = () => {
  const handleDisputeAction = (id: string, action: 'resolve' | 'escalate') => {
    toast.success(`Dispute ${id} ${action === 'resolve' ? 'resolved' : 'escalated'}`);
  };

  return (
    <div className="space-y-6">
      {/* Platform Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,345</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$28,000</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Disputes</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">4 high priority</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">Currently online</p>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ChartContainer
              config={{
                revenue: {
                  theme: {
                    light: "hsl(var(--primary))",
                    dark: "hsl(var(--primary))",
                  },
                },
              }}
            >
              <BarChart data={revenueData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" fill="var(--color-revenue)" />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>

      {/* Dispute Management Queue */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Active Disputes</CardTitle>
          <Badge variant="secondary">{23} Total</Badge>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: "D-001",
                title: "Payment Delay Issue",
                priority: "High",
                status: "Open",
                date: "2024-02-20",
                description: "Client reports delayed payment for completed milestone.",
              },
              {
                id: "D-002",
                title: "Project Scope Dispute",
                priority: "Medium",
                status: "Under Review",
                date: "2024-02-19",
                description: "Disagreement over additional feature requests.",
              },
              {
                id: "D-003",
                title: "Quality Concerns",
                priority: "High",
                status: "Escalated",
                date: "2024-02-18",
                description: "Client unsatisfied with deliverable quality standards.",
              },
            ].map((dispute) => (
              <div
                key={dispute.id}
                className="flex flex-col space-y-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium flex items-center gap-2">
                      {dispute.title}
                      <Badge
                        variant={dispute.priority === "High" ? "destructive" : "secondary"}
                      >
                        {dispute.priority}
                      </Badge>
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">ID: {dispute.id}</p>
                  </div>
                  <Badge
                    variant={
                      dispute.status === "Escalated"
                        ? "destructive"
                        : dispute.status === "Open"
                        ? "secondary"
                        : "default"
                    }
                  >
                    {dispute.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{dispute.description}</p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-muted-foreground">
                    Opened: {dispute.date}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDisputeAction(dispute.id, 'resolve')}
                    >
                      Resolve
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDisputeAction(dispute.id, 'escalate')}
                    >
                      Escalate
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;