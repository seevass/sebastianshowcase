import { Stack } from "@mantine/core";
import ActivityList from "./ActivityList";
import Window from "./Window";
import { useProject } from "./ProjectContext";
import { projectItems, passionItems } from "../helpers/projects";
import type { Project } from "../helpers/projects";
import FakeAd from "./FakeAd";
import { useIsDesktop } from "../theme";

interface FolderProps {
  title: string;
  address: string;
  items: Project[];
  toolbarColor?: string;
}

function Folder({ title, address, items, toolbarColor }: FolderProps) {
  const { setSelectedId } = useProject();

  return (
    <div style={{ display: "contents" }} onClick={() => setSelectedId(null)}>
      <Window
        title={title}
        width="100%"
        minHeight="230px"
        minWidth="100%"
        maxHeight="300px"
        bg="var(--main-white-color)"
      >
        <ActivityList
          address={address}
          items={items}
          toolbarColor={toolbarColor}
        />
      </Window>
    </div>
  );
}

function ActivityWindows() {
  const isDesktop = useIsDesktop();
  return (
    <Stack gap="md" mah="calc(100dvh - 154px)">
      {isDesktop && <FakeAd items={projectItems} />}
      <Folder
        title="project-explorer.exe"
        address="P:\Projects"
        items={projectItems}
        toolbarColor="var(--main-hot-pink-color)"
      />
      <Folder
        title="passion-explorer.exe"
        address="P:\Passions"
        items={passionItems}
        toolbarColor="var(--main-pink-color)"
      />
    </Stack>
  );
}

export default ActivityWindows;
