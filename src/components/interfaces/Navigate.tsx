import { useState } from "react";
import { Button } from "../ui/button";
import { Bell, DollarSign, Home, Menu, Settings } from "lucide-react";

const Navigate = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div
      className={`bg-white ${isSidebarOpen ? "w-64" : "w-20"} transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between p-4">
        <h1
          className={`text-xl font-bold ${isSidebarOpen ? "block" : "hidden"}`}
        >
          Apartment Manager
        </h1>
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <nav className="mt-8">
        <Button
          variant="ghost"
          className={`w-full ${isSidebarOpen ? "justify-start" : ""}`}
        >
          <Home className="mr-2 h-4 w-4" />
          {isSidebarOpen && "Dashboard"}
        </Button>
        <Button
          variant="ghost"
          className={`w-full ${isSidebarOpen ? "justify-start" : ""}`}
        >
          <DollarSign className="mr-2 h-4 w-4" />
          {isSidebarOpen && "Finances"}
        </Button>
        <Button
          variant="ghost"
          className={`w-full ${isSidebarOpen ? "justify-start" : ""}`}
        >
          <Bell className="mr-2 h-4 w-4" />
          {isSidebarOpen && "Notifications"}
        </Button>
        <Button
          variant="ghost"
          className={`w-full ${isSidebarOpen ? "justify-start" : ""}`}
        >
          {isSidebarOpen && "Maintenance"}
        </Button>
        {/*   <Button variant="ghost" className="w-full justify-start">
      <Calendar className="mr-2 h-4 w-4" />
      {isSidebarOpen && "Calendar"}
    </Button> */}
        <Button
          variant="ghost"
          className={`w-full ${isSidebarOpen ? "justify-start" : ""}`}
        >
          <Settings className="mr-2 h-4 w-4" />
          {isSidebarOpen && "Settings"}
        </Button>
      </nav>{" "}
    </div>
  );
};

export default Navigate;
