import { useState, useEffect } from "react";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { TabsContent } from "../ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import data from "../../data.json";

const Maintenance = () => {
  const [filter, setFilter] = useState("all"); // 'all' o número de código
  const [search, setSearch] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(data.maintenanceRequests);

  // Actualiza los datos filtrados cuando cambian el filtro o la búsqueda
  useEffect(() => {
    const filtered = data.maintenanceRequests.filter((task) => {
      const matchesStatus = filter === "all" || task.code === Number(filter); // Usa task.code en lugar de task.status
      const matchesSearch =
        search === "" ||
        task.issue.toLowerCase().includes(search.toLowerCase()) ||
        data.apartments
          .find((apt) => apt.id === task.apartmentId)
          ?.number.toString()
          .includes(search);

      return matchesStatus && matchesSearch;
    });
    setFilteredTasks(filtered);
  }, [filter, search]);

  return (
    <TabsContent value="maintenance" className="p-6">
      <h2 className="text-2xl font-bold mb-4">Maintenance Tracker</h2>
      <Card>
        <CardHeader>
          <CardTitle>Maintenance Requests</CardTitle>
          <CardDescription>Track and manage maintenance tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex justify-between items-center">
            {/* Input de búsqueda */}
            <Input
              className="max-w-sm"
              placeholder="Search maintenance requests..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* Filtro de estado */}
            <Select onValueChange={(value) => setFilter(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="all" className="focus:bg-slate-400">
                  All
                </SelectItem>
                <SelectItem value="1" className="focus:bg-slate-400">
                  Completed
                </SelectItem>
                <SelectItem value="2" className="focus:bg-slate-400">
                  In Progress
                </SelectItem>
                <SelectItem value="3" className="focus:bg-slate-400">
                  Pending
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Tabla de tareas filtradas */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Apartment</TableHead>
                <TableHead>Issue</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTasks.map((task) => (
                <TableRow key={task.id}>
                  <TableCell>
                    Apt{" "}
                    {
                      data.apartments.find((apt) => apt.id === task.apartmentId)
                        ?.number
                    }
                  </TableCell>
                  <TableCell>{task.issue}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`${
                        task.code === 1
                          ? "bg-green-400"
                          : task.code === 2
                            ? "bg-blue-300"
                            : "bg-red-300"
                      }`}
                    >
                      {task.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(task.date).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </TabsContent>
  );
};

export default Maintenance;
