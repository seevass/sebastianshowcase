import { Button, Text, Title } from "@mantine/core";
import { openProject } from "../helpers/projects";
import { useProject } from "./ProjectContext";

function ProjectInfo() {
  const { active } = useProject();

  return (
    <div style={{ padding: 12 }}>
      <Title order={3} c="var(--main-white-color)">
        {active?.name ?? "Select a project"}
      </Title>
      <Text c="var(--main-white-color)">
        {active?.description ??
          "Click a project to preview it, double-click to open."}
      </Text>
      <Button
        mt="sm"
        disabled={!active}
        onClick={() => active && openProject(active)}
      >
        Open project
      </Button>
    </div>
  );
}

export default ProjectInfo;
