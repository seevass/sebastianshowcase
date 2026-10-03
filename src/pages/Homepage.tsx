import { AppShell, Burger, Group, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import "./Homepage.css";
import { images } from "../helpers/images";

import ProjectSelector from "../modules/ProjectSelector";
import SiteNavbar from "../modules/Sitenavbar";

function Homepage() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <AppShell
      layout="alt"
      withBorder={false}
      navbar={{
        width: "22vw",
        breakpoint: "lg",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header className="header">
        <Group p="var(--ui-header-pad)">
          <Image
            src={images.nametitle}
            alt="Sebastian Cruz"
            h="var(--ui-header-logo-h)"
            w="auto"
            hiddenFrom="lg"
            style={{ transform: "translate(1rem, 0%)" }}
          />
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="lg"
            size="var(--ui-burger-size)"
            ml="auto"
            pr={15}
            aria-label="Toggle navigation"
          />
        </Group>
      </AppShell.Header>

      <SiteNavbar opened={opened} onToggle={toggle} />

      <AppShell.Main className="main">
        <ProjectSelector />
      </AppShell.Main>

      <AppShell.Aside visibleFrom="lg" className="aside">
        <Image
          src={images.tattoovertical}
          alt=""
          w="var(--ui-aside-art-w)"
          maw="100%"
          mah="100%"
          pr="var(--ui-aside-art-pad)"
        />
      </AppShell.Aside>

      <AppShell.Footer hiddenFrom="lg" className="footer" w="100%">
        <Image
          src={images.tattoohorizontal}
          alt=""
          h="var(--ui-footer-art-h)"
          w="auto"
          maw="100%"
          mah="100%"
        />
      </AppShell.Footer>
    </AppShell>
  );
}

export default Homepage;
