import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Calendar as CalendarComponent } from "../ui/calendar";
import { TabsContent } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { useState } from "react";
import data from "../../data.json";
const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );

  return (
    <TabsContent value="calendar" className="p-6">
      <h2 className="text-2xl font-bold mb-4">Calendar</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Rent Due Dates</CardTitle>
          </CardHeader>
          <CardContent>
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.apartments
                .filter((apt) => apt.status === "Occupied")
                .map((apt) => (
                  <div
                    key={apt.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <div className="font-semibold">
                        Apartment {apt.number}
                      </div>
                      <div className="text-sm text-gray-500">Rent Due</div>
                    </div>
                    <Badge>{new Date(apt.rentDue!).toLocaleDateString()}</Badge>
                  </div>
                ))}
              {data.maintenanceRequests
                .filter((req) => req.status !== "Completed")
                .map((task) => (
                  <div
                    key={task.id}
                    className="flex justify-between items-center"
                  >
                    <div>
                      <div className="font-semibold">
                        Apt{" "}
                        {
                          data.apartments.find(
                            (apt) => apt.id === task.apartmentId
                          )?.number
                        }
                      </div>
                      <div className="text-sm text-gray-500">{task.issue}</div>
                    </div>
                    <Badge variant="outline">
                      {new Date(task.date).toLocaleDateString()}
                    </Badge>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
};

export default Calendar;
