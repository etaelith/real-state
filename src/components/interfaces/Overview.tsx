import { TabsContent } from "../ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { DollarSign, Home } from "lucide-react";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import data from "../../data.json";
const Overview = () => {
  const calculateOccupancyRate = () => {
    const occupiedCount = data.apartments.filter(
      (apt) => apt.status === "Occupied"
    ).length;
    return ((occupiedCount / data.apartments.length) * 100).toFixed(0);
  };
  const getTotalIncome = () => {
    return data.financialData.income.reduce(
      (total, month) => total + month.amount,
      0
    );
  };

  const prepareChartData = () => {
    return data.financialData.income.map((month, index) => ({
      name: month.month,
      income: month.amount,
      expenses: data.financialData.expenses[index].amount,
    }));
  };

  return (
    <TabsContent value="overview" className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      <div className="grid gap-4 grid-cols-2 max-w-xl">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Apartments
            </CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.apartments.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Income
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${getTotalIncome().toLocaleString()}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pending Maintenance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {
                data.maintenanceRequests.filter(
                  (req) => req.status === "Pending"
                ).length
              }
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Occupancy Rate
            </CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {calculateOccupancyRate()}%
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6 max-w-xl">
        <CardHeader>
          <CardTitle>Monthly Income vs Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300} className="max-w-xl">
            <BarChart data={prepareChartData()}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="income" fill="#22c55e" name="Income" />
              <Bar dataKey="expenses" fill="#ef4444" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Overview;
