import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { DollarSign, Receipt, Wallet, ChartBar } from "lucide-react";

const transactions = [
  {
    id: "TX-001",
    type: "Withdrawal",
    amount: 2500,
    status: "Pending",
    user: "john.doe",
    date: "2024-02-20",
  },
  {
    id: "TX-002",
    type: "Deposit",
    amount: 5000,
    status: "Completed",
    user: "jane.smith",
    date: "2024-02-19",
  },
  {
    id: "TX-003",
    type: "Fee",
    amount: 150,
    status: "Completed",
    user: "system",
    date: "2024-02-18",
  },
];

const fees = [
  { type: "Platform Fee", percentage: 5, status: "Active" },
  { type: "Withdrawal Fee", percentage: 1, status: "Active" },
  { type: "Currency Conversion", percentage: 2, status: "Active" },
];

export const FinancialManagement = () => {
  const handleApproveWithdrawal = (id: string) => {
    toast.success(`Withdrawal ${id} approved`);
  };

  const handleRejectWithdrawal = (id: string) => {
    toast.error(`Withdrawal ${id} rejected`);
  };

  const handleUpdateFee = (type: string) => {
    toast.success(`${type} updated successfully`);
  };

  return (
    <section className="space-y-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$128,400</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Withdrawals</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">Requires approval</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Platform Fees</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,240</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <ChartBar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$42,500</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Transaction Monitoring */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions <Badge variant="secondary">Demo</Badge></CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell>{tx.id}</TableCell>
                  <TableCell>{tx.type}</TableCell>
                  <TableCell>${tx.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={tx.status === "Completed" ? "default" : "secondary"}
                    >
                      {tx.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{tx.user}</TableCell>
                  <TableCell>{tx.date}</TableCell>
                  <TableCell>
                    {tx.type === "Withdrawal" && tx.status === "Pending" && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleApproveWithdrawal(tx.id)}
                        >
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleRejectWithdrawal(tx.id)}
                        >
                          Reject
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Fee Management */}
      <Card>
        <CardHeader>
          <CardTitle>Fee Management <Badge variant="secondary">Demo</Badge></CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fee Type</TableHead>
                <TableHead>Percentage</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fees.map((fee) => (
                <TableRow key={fee.type}>
                  <TableCell>{fee.type}</TableCell>
                  <TableCell>{fee.percentage}%</TableCell>
                  <TableCell>
                    <Badge variant="default">{fee.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleUpdateFee(fee.type)}
                    >
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
};
