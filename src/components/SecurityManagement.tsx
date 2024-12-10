import { Shield, AlertTriangle, Activity, Map, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const SecurityManagement = () => {
  const { toast } = useToast();

  const mockSecurityLogs = [
    {
      id: 1,
      event: "Failed Login Attempt",
      ip: "192.168.1.1",
      location: "New York, US",
      timestamp: "2024-03-10 14:30:00",
      risk: "high",
    },
    {
      id: 2,
      event: "Suspicious Transaction",
      ip: "10.0.0.1",
      location: "London, UK",
      timestamp: "2024-03-10 14:25:00",
      risk: "medium",
    },
    {
      id: 3,
      event: "2FA Enabled",
      ip: "172.16.0.1",
      location: "Tokyo, JP",
      timestamp: "2024-03-10 14:20:00",
      risk: "low",
    },
  ];

  const handleInvestigate = (logId: number) => {
    toast({
      title: "Investigation Initiated",
      description: `Security log ${logId} is being investigated.`,
    });
  };

  const handleBlock = (ip: string) => {
    toast({
      title: "IP Blocked",
      description: `IP address ${ip} has been blocked.`,
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6 p-6">
      {/* Security Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Fraud Detection</h3>
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold">24</div>
            <p className="text-sm text-gray-600">Suspicious activities detected today</p>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">Security Logs</h3>
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-sm text-gray-600">Events logged today</p>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <Map className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">IP Tracking</h3>
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold">15</div>
            <p className="text-sm text-gray-600">Blocked IPs</p>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center space-x-2">
            <Smartphone className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">2FA Status</h3>
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold">89%</div>
            <p className="text-sm text-gray-600">Users with 2FA enabled</p>
          </div>
        </Card>
      </div>

      {/* Security Logs */}
      <Card>
        <CardHeader>
          <CardTitle>Security Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockSecurityLogs.map((log) => (
              <div
                key={log.id}
                className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg space-y-2 md:space-y-0"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-medium">{log.event}</h4>
                    <Badge
                      variant={
                        log.risk === "high"
                          ? "destructive"
                          : log.risk === "medium"
                          ? "secondary"
                          : "default"
                      }
                    >
                      {log.risk} risk
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    IP: {log.ip} | Location: {log.location}
                  </p>
                  <p className="text-sm text-muted-foreground">{log.timestamp}</p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleInvestigate(log.id)}
                  >
                    Investigate
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleBlock(log.ip)}
                  >
                    Block IP
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};