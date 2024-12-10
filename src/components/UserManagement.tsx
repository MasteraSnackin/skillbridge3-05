import { Shield, AlertTriangle, Activity, UserCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const UserManagement = () => {
  const { toast } = useToast();

  const mockUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: "verified",
      kycStatus: "approved",
      lastActive: "2024-03-10",
      warnings: 0,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "pending",
      kycStatus: "pending",
      lastActive: "2024-03-09",
      warnings: 1,
    },
  ];

  const handleVerification = (userId: number) => {
    toast({
      title: "Verification Status Updated",
      description: `User ${userId} verification status has been updated.`,
    });
  };

  const handleWarning = (userId: number) => {
    toast({
      title: "Warning Issued",
      description: `Warning has been issued to user ${userId}.`,
      variant: "destructive",
    });
  };

  const handleSuspension = (userId: number) => {
    toast({
      title: "Account Suspended",
      description: `User ${userId} account has been suspended.`,
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <UserCheck className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Verification System</h3>
          </div>
          <p className="text-sm text-gray-600 mt-2">Manage user verification status and KYC compliance</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">KYC/AML Tools</h3>
          </div>
          <p className="text-sm text-gray-600 mt-2">Monitor and manage compliance requirements</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Activity Logs</h3>
          </div>
          <p className="text-sm text-gray-600 mt-2">Track user activities and interactions</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Account Actions</h3>
          </div>
          <p className="text-sm text-gray-600 mt-2">Manage warnings and suspensions</p>
        </Card>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">User Management Dashboard</h2>
        <div className="space-y-4">
          {mockUsers.map((user) => (
            <Card key={user.id} className="p-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  <div className="flex space-x-2 mt-2">
                    <Badge variant={user.status === "verified" ? "default" : "secondary"}>
                      {user.status}
                    </Badge>
                    <Badge variant={user.kycStatus === "approved" ? "default" : "secondary"}>
                      KYC: {user.kycStatus}
                    </Badge>
                    {user.warnings > 0 && (
                      <Badge variant="destructive">
                        {user.warnings} Warning{user.warnings > 1 ? "s" : ""}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleVerification(user.id)}
                  >
                    Verify
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleWarning(user.id)}
                  >
                    Issue Warning
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleSuspension(user.id)}
                  >
                    Suspend
                  </Button>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-600">
                Last Active: {user.lastActive}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};