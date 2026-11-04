import { Button, Text } from "@mantine/core";
import { IconArrowDown, IconGift } from "@tabler/icons-react";
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
        title="congratulations.exe"
        width="100%"
        bg="var(--main-yellow-color)"
        scroll={false}
      >
        <div className="fake-ad-body">
          <Text className="fake-ad-headline">
            {picked ? "Prize claimed!" : "You are visitor #1,000,000!"}
          </Text>

          <Text className="fake-ad-sub">
            {picked
              ? "Now click a project below to open it"
              : "Claim your prize by clicking a project below"}
          </Text>

          <Button
            className="fake-ad-button"
            leftSection={<IconGift size={18} />}
            onClick={claim}
          >
            {picked ? "Claim another" : "Claim prize"}
          </Button>

          <IconArrowDown
            className="fake-ad-arrow"
            size={18}
            aria-hidden="true"
          />
        </div>
        <div className="fake-ad-tag">Ad by SeabassAds</div>
      </Window>
    </div>
  );
}

export default FakeAd;
