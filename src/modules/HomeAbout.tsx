import { Text } from "@mantine/core";
import RedactedText from "./RedactedText";

function HomeAbout() {
  return (
    <Text fz="display" c="var(--main-white-color)">
      <RedactedText from={100} to={10} speed={100}>
        Sebastian Cruz
      </RedactedText>
    </Text>
  );
}

export default HomeAbout;
