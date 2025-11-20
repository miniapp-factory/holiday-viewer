"use client";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

export default function HolidayList() {
  const destinations = [
    "Hawaii, USA",
    "Bali, Indonesia",
    "Santorini, Greece",
    "Maldives",
    "Paris, France",
    "Kyoto, Japan",
    "Barcelona, Spain",
    "Cape Town, South Africa",
    "New Zealand",
    "Sydney, Australia",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Top 10 Favorite Destinations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-1">
            {destinations.map((dest, idx) => (
              <li key={idx}>{dest}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <img src="/beach.png" alt="Beach" width={512} height={512} className="w-full h-auto" />
        <img src="/airplane.png" alt="Airplane" width={512} height={512} className="w-full h-auto" />
      </div>
    </div>
  );
}
