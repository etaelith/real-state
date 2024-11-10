import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TabsContent } from "../ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import data from "../../data.json";
const Income = () => {
  const getTotalIncome = () => {
    return data.financialData.income.reduce(
      (total, month) => total + month.amount,
      0
    );
  };

  const getTotalExpenses = () => {
    return data.financialData.expenses.reduce(
      (total, month) => total + month.amount,
      0
    );
  };

  const getNetProfit = () => {
    return getTotalIncome() - getTotalExpenses();
  };
  return (
    <TabsContent value="income-expenses" className="p-6">
      <h2 className="text-2xl font-bold mb-4">Income and Expenses</h2>
      <Card>
        <CardHeader>
          <CardTitle>Financial Overview</CardTitle>
          <CardDescription>Your monthly income and expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total Income:</span>
              <span className="font-bold text-green-600">
                ${getTotalIncome().toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Total Expenses:</span>
              <span className="font-bold text-red-600">
                ${getTotalExpenses().toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Net Profit:</span>
              <span className="font-bold">
                ${getNetProfit().toLocaleString()}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4">Monthly Breakdown</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Month</TableHead>
              <TableHead>Income</TableHead>
              <TableHead>Expenses</TableHead>
              <TableHead>Profit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.financialData.income.map((month, index) => (
              <TableRow key={month.month}>
                <TableCell>{month.month}</TableCell>
                <TableCell>${month.amount.toLocaleString()}</TableCell>
                <TableCell>
                  ${data.financialData.expenses[index].amount.toLocaleString()}
                </TableCell>
                <TableCell>
                  $
                  {(
                    month.amount - data.financialData.expenses[index].amount
                  ).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </TabsContent>
  );
};

export default Income;
