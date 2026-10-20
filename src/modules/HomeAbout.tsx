import { Text } from "@mantine/core";
import RedactedText from "./RedactedText";

function HomeAbout() {
  return (
    <>
      <Text fz="display" c="var(--main-white-color)">
        <RedactedText from={20} to={100} speed={150} weight={700} italic={true}>
          Sebastian Cruz
        </RedactedText>
      </Text>
      <Text
        c="var(--blended-bg-color)"
        ff="Franklin Gothic"
        fz="sm"
        fw={900}
        style={{ whiteSpace: "nowrap" }}
      >
        [unstable text, hover at your own risk!]
      </Text>
    </>
  );
}

export default HomeAbout;
