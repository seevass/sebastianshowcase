import { useEffect, useState } from "react";
import { Text } from "@mantine/core";

function Clock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Text
      fz="md"
      className="taskbar-clock"
      title={now.toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })}
    >
      {now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}
    </Text>
  );
}

export default Clock;
