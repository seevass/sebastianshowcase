import { AppShell, Flex, Image, Space, Title } from "@mantine/core";

import { images } from "../helpers/images";
import NavLinkItem from "../modules/NavLinkItem";

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
    <AppShell.Navbar
      className="navBar"
      pl="var(--ui-nav-pad-left)"
      pt={{
        base: "calc(var(--ui-burger-size) + var(--ui-header-pad) * 2)",
        lg: 0,
      }}
    >
      <Space h="sm" visibleFrom="lg" />
      {/* <Image
        src={images.nametitle}
        alt="Sebastian Cruz"
        maw="70%"
        style={{ transform: "translate(3%, 20%)" }}
        visibleFrom="lg"
      /> */}
      <Space h="2vh" visibleFrom="lg" />

      <div className="navContent">
        <Title order={1} className="nameTitle non-selectable">
          Sebastian Cruz
        </Title>
        <Space h="2vh" />
        <Flex direction="column" gap="var(--ui-nav-gap)">
          {navLinks.map((link) => (
            <NavLinkItem key={link.label} {...link} />
          ))}
        </Flex>
      </div>
    </AppShell.Navbar>
  );
}
