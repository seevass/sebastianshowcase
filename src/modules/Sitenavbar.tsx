import { Flex, Space, Text } from "@mantine/core";

import NavLinkItem from "../modules/NavLinkItem";
import RedactedText from "./RedactedText";

const navLinks = [
  { to: "aboutme", label: "About" },
  { to: "resume.pdf", label: "Resume/CV" },
  {
    to: "https://www.linkedin.com/in/cruzseabass/",
    label: "LinkedIn",
    isExternal: true,
  },
  { to: "https://github.com/seevass", label: "GitHub", isExternal: true },
  { to: "mailto:cruzseabass@gmail.com", label: "Contact" },
];

export default function SiteNavbar() {
  return (
    <div className="navContent">
      <Text fz={"display"} c="var(--main-white-color)">
        <RedactedText from={100} to={10} speed={100}>
          Sebastian Cruz
        </RedactedText>
      </Text>
      <Flex direction="column" gap="var(--ui-nav-gap)">
        {navLinks.map((link) => (
          <NavLinkItem key={link.label} {...link} />
        ))}
      </Flex>
    </div>
  );
}
