import { Button, Text } from "@mantine/core";
import { IconArrowDown } from "@tabler/icons-react";
import type { Project } from "../helpers/projects";
import { useProject } from "./ProjectContext";
import Window from "./Window";
import "./FakeAd.css";

function FakeAd({ items }: { items: Project[] }) {
  const { selectedId, setSelectedId } = useProject();

  // the ad switches to its "claimed" text once anything has been picked
  const picked = selectedId !== null;

  const claim = () => {
    // choose randomly, but never the one that's already showing
    const choices = items.filter((p) => p.id !== selectedId);
    const pick = choices[Math.floor(Math.random() * choices.length)];
    if (pick) setSelectedId(pick.id);
  };

  return (
    <div className="fake-ad">
      <Window
        title="free-projects.js"
        width="100%"
        bg="var(--main-yellow-color)"
        scroll={false}
        style={{ resize: "none" }}
      >
        <Text
          className="fake-ad-title"
          fz="lg"
          fw={900}
          c="var(--main-hot-pink-color)"
        >
          CONGRATULATIONS
        </Text>
        <div className="fake-ad-body">
          <Text fw={700} fz="lg">
            1,000,000th visitor!
          </Text>

          <Text fw={700}>You have won a FREE project!</Text>

          <Text fw={900}>CLICK HERE TO CONFIRM</Text>

          <Button className="fake-ad-button" onClick={claim}>
            {picked ? "Claim another" : "Claim prize"}
          </Button>

          <IconArrowDown
            className="fake-ad-arrow"
            size={48}
            aria-hidden="true"
            stroke={3}
          />

          <Text fw={700}>
            {picked
              ? 'ONE MORE STEP! "OPEN PROJECT" TO COLLECT YOUR REWARD.'
              : ""}
          </Text>
        </div>
        <Text className="fake-ad-tag" fz="xs" c="var(--main-blue-color)">
          100% virus-free!
        </Text>
      </Window>
    </div>
  );
}

export default FakeAd;
