import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs";
import { ScrollArea } from "./components/ui/scroll-area";

import "./App.css";
import Overview from "./components/interfaces/Overview";
import Calendar from "./components/interfaces/Calendar";
import Income from "./components/interfaces/Income";
import Status from "./components/interfaces/Status";
import Maintenance from "./components/interfaces/Maintenance";
import Navigate from "./components/interfaces/Navigate";
import AddProperty from "./components/interfaces/AddProperty";
import { Toaster } from "./components/ui/sonner";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Navigate></Navigate>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <Tabs defaultValue="overview" className="h-full">
          <div className="border-b">
            <ScrollArea className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="income-expenses">
                  Income/Expenses
                </TabsTrigger>
                <TabsTrigger value="apartment-status">
                  Apartment Status
                </TabsTrigger>
                <TabsTrigger value="maintenance">
                  Maintenance Tracker
                </TabsTrigger>
                <TabsTrigger value="calendar">Calendar</TabsTrigger>
                <TabsTrigger value="add-property">Add Property</TabsTrigger>
              </TabsList>
            </ScrollArea>
          </div>
          <ScrollArea className="h-[calc(100vh-56px)]">
            <Overview></Overview>
            <Income></Income>
            <Status></Status>
            <Maintenance></Maintenance>
            <Calendar></Calendar>
            <AddProperty></AddProperty>
          </ScrollArea>
        </Tabs>
      </div>
      <Toaster></Toaster>
    </div>
  );
}
