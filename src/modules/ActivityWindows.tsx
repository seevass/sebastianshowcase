import { Stack } from "@mantine/core";
import ActivityList from "./ActivityList";
import Window from "./Window";
import { useProject } from "./ProjectContext";
import { projectItems, passionItems } from "../helpers/projects";
import type { Project } from "../helpers/projects";

interface FolderProps {
  title: string; // window title
  address: string; // text in the address bar
  items: Project[];
}

// One explorer window. Clicking anywhere in it (except a row) clears the selection.
function Folder({ title, address, items }: FolderProps) {
  const { setSelectedId } = useProject();

  return (
    <div onClick={() => setSelectedId(null)}>
      <Window title={title} width="100%" bg="var(--main-white-color)">
        <ActivityList address={address} items={items} />
      </Window>
    </div>
  );
}

function ActivityWindows() {
  return (
    <Stack gap="md">
      <Folder title="projects" address="P:\Projects" items={projectItems} />
      <Folder title="passions" address="P:\Passions" items={passionItems} />
    </Stack>
  );
}

export default ActivityWindows;
