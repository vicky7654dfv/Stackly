import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import LiveTime from "../../components/LiveTime/LiveTime";

export default function Clock() {
  const { zone } = useParams();
  const [time, setTime] = useState("");

  const updateClock = useCallback(() => {
    const now = new Date();
    setTime(now.toLocaleTimeString("en-US", { timeZone: zone }));
  }, [zone]);

  useEffect(() => {
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [updateClock]);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>⏰ Clock</h1>
      <h2>Time Zone: {zone}</h2>
      <h2>{time}</h2>
    </div>
  );
}
