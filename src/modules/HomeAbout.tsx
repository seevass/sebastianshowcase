import { Text } from "@mantine/core";
import RedactedText from "./RedactedText";

function HomeAbout() {
  return (
    <>
      <Text fz="display" c="var(--main-white-color)">
        <RedactedText from={20} to={100} speed={150} weight={700}>
          Sebastian Cruz
        </RedactedText>
      </Text>
      <Text
        ff="'Cascadia Mono', Consolas, Menlo, monospace"
        c="var(--main-white-color)"
      >
        [unstable text: avoid contact!]
      </Text>
    </>
  );
}

export default HomeAbout;
