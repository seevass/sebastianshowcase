import { AppShell, Box, Burger, Group, Image } from "@mantine/core";
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
        width: "15vw",
        breakpoint: "lg",
        collapsed: { mobile: !opened },
      }}
    >
      {/* One burger for open + close. Fixed top-left, above the sidebar and page. */}
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="lg"
        size="var(--ui-burger-size)"
        pos="fixed"
        top="var(--ui-header-pad)"
        left="var(--ui-header-pad)"
        style={{ zIndex: 300 }}
        aria-label="Toggle navigation"
      />

      <AppShell.Header className="header">
        <Group
          p="var(--ui-header-pad)"
          pl="calc(var(--ui-header-pad) * 2 + var(--ui-burger-size))"
        >
          {/* <Image
            src={images.nametitle}
            alt="Sebastian Cruz"
            h="var(--ui-header-logo-h)"
            w="auto"
            hiddenFrom="lg"
          /> */}
        </Group>
      </AppShell.Header>

      <SiteNavbar />

      <AppShell.Main className="main">
        {/* Page padding lives here. base = mobile, lg = desktop. */}
        <Box
          pl={{ base: 20, lg: 20 }}
          pr={{ base: 0, lg: "12%" }}
          pt={{ base: 120, lg: 50 }}
        >
          <ProjectSelector />
        </Box>
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
