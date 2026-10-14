import { Group } from "@mantine/core";
import ProjectList from "./ProjectList";
import { videos } from "../helpers/videos.ts";

function ActivityList() {
  return (
    <Group align="flex-start" gap="xl">
      <ProjectList
        title="Projects"
        links={[
          ["keyboardwarrior", "Keyboard Warrior", videos.keyboardwarriorvideo],
          ["quickcast", "Quickcast", videos.quickcastvideo],
          ["blendify", "Blendify", videos.blendifyvideo],
          ["sussyscript", "SussyScript", videos.sussyscriptvideo],
        ]}
      />
      <ProjectList
        title="Passions"
        links={[
          ["photography", "Photography", videos.photographyvideo],
          ["nishikigoi", "Nishikigoi", videos.nishikigoivideo],
          ["graphicdesign", "Graphic Design", videos.graphicdesignvideo],
          ["keyboards", "Keyboards", videos.keyboardvideo],
        ]}
      />
    </Group>
  );
}

export default ActivityList;
