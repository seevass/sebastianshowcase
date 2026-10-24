import { Button, Text, Title } from "@mantine/core";
import { openProject } from "../helpers/projects";
import { useProject } from "./ProjectContext";
import RedactedText from "./RedactedText";

function ProjectInfo() {
  const { active } = useProject();

  return (
    <div style={{ padding: 12 }}>
      <Text fz="display" c="var(--main-white-color)">
        <RedactedText from={20} to={100} speed={150} weight={700} italic={true}>
          {active?.name ?? "Select a project"}
        </RedactedText>
      </Text>
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
