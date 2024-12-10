import { useState, useEffect } from "react";
import { Play, Pause, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const TimeTracker = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: number;
    if (isTracking) {
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTracking]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Time Tracker
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-mono mb-4">{formatTime(time)}</div>
        <Button
          onClick={() => setIsTracking(!isTracking)}
          variant={isTracking ? "destructive" : "default"}
          className="w-full"
        >
          {isTracking ? (
            <><Pause className="mr-2 h-4 w-4" /> Stop</>
          ) : (
            <><Play className="mr-2 h-4 w-4" /> Start Tracking</>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};