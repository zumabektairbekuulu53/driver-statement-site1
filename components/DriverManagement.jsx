import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DriverManagement() {
  const [drivers, setDrivers] = useState([]);
  const [newDriver, setNewDriver] = useState("");

  const addDriver = () => {
    if (newDriver.trim() !== "") {
      setDrivers([...drivers, newDriver.trim()]);
      setNewDriver("");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Driver Management</h1>

      <div className="flex gap-2 mb-6">
        <Input
          placeholder="Enter driver's name"
          value={newDriver}
          onChange={(e) => setNewDriver(e.target.value)}
        />
        <Button onClick={addDriver}>Add Driver</Button>
      </div>

      <div className="grid gap-4">
        {drivers.map((driver, index) => (
          <Card key={index}>
            <CardContent className="p-4">{driver}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
