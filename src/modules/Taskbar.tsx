import { Button, Group, Text } from "@mantine/core";

import "./Taskbar.css";

function Taskbar() {
  return (
    <Group h="100%" px="xs" justify="space-between" className="taskbar">
      <Button className="start-button">start</Button>
      <Text className="taskbar-clock">12:00 PM</Text>
    </Group>
  );
}

export default Taskbar;
