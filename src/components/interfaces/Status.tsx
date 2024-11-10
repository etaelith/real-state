import { useState, useEffect } from "react";
import { TabsContent } from "../ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import data from "../../data.json";

const Status = () => {
  // Estados para el filtro y el término de búsqueda
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data.apartments);

  // Actualiza los datos filtrados cuando cambian el filtro o la búsqueda
  useEffect(() => {
    const filtered = data.apartments.filter((apt) => {
      const matchesStatus =
        filter === "all" || apt.status.toLowerCase() === filter;
      const matchesSearch =
        search === "" ||
        apt.number.toString().includes(search) ||
        (apt.tenant && apt.tenant.toLowerCase().includes(search.toLowerCase()));

      return matchesStatus && matchesSearch;
    });
    setFilteredData(filtered);
  }, [filter, search]);

  return (
    <TabsContent value="apartment-status" className="p-6">
      <h2 className="text-2xl font-bold mb-4">Apartment Status</h2>
      <div className="mb-4 flex justify-between items-center">
        {/* Input de búsqueda */}
        <Input
          className="max-w-sm"
          placeholder="Search apartments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* Filtro de estado */}
        <Select onValueChange={(value) => setFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              <SelectItem value="all" className="focus:bg-slate-400">
                All
              </SelectItem>
              <SelectItem value="occupied" className="focus:bg-slate-400">
                Occupied
              </SelectItem>
              <SelectItem value="vacant" className="focus:bg-slate-400">
                Vacant
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {/* Lista de apartamentos filtrada */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((apt) => (
          <Card key={apt.id}>
            <CardHeader>
              <CardTitle>Apartment {apt.number}</CardTitle>
              <CardDescription>
                Status: <Badge variant="outline">{apt.status}</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              {apt.status === "Occupied" ? (
                <div className="space-y-2">
                  <div>Tenant: {apt.tenant}</div>
                  <div>
                    Rent Due: {new Date(apt.rentDue!).toLocaleDateString()}
                  </div>
                  <div className="text-green-600">
                    Last Payment:{" "}
                    {new Date(apt.lastPayment!).toLocaleDateString()}
                  </div>
                </div>
              ) : (
                <div>Available for rent</div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </TabsContent>
  );
};

export default Status;
