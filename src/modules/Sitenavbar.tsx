import { AppShell, Burger, Flex, Image, Space, Title } from "@mantine/core";

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

interface SiteNavbarProps {
  opened: boolean;
  onToggle: () => void;
}

export default function SiteNavbar({ opened, onToggle }: SiteNavbarProps) {
  return (
    <AppShell.Navbar className="navBar" pl="var(--ui-nav-pad-left)">
      <Flex justify="flex-end" pr={30} pt={20} style={{ zIndex: 2 }}>
        <Burger
          opened={opened}
          onClick={onToggle}
          hiddenFrom="lg"
          size="var(--ui-burger-size)"
          aria-label="Toggle navigation"
        />
      </Flex>

      <Space h="sm" visibleFrom="lg" />
      <Image
        src={images.nametitle}
        alt="Sebastian Cruz"
        maw="70%"
        style={{ transform: "translate(3%, 20%)" }}
        visibleFrom="lg"
      />
      <Space h="2vh" visibleFrom="lg" />

      <div className="navContent">
        <Title order={1} className="nameTitle non-selectable">
          Sebastian Cruz
        </Title>
        <Space h="2vh" />
        <Flex
          direction="column"
          gap="var(--ui-nav-gap)"
          h="80dvh"
          style={{ overflow: "auto" }}
        >
          {navLinks.map((link) => (
            <NavLinkItem key={link.label} {...link} />
          ))}
        </Flex>
      </div>
    </AppShell.Navbar>
  );
}
