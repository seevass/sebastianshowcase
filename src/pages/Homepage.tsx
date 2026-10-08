import { AppShell, Box, Burger, Group, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import "./Homepage.css";
import { images } from "../helpers/images";

import ProjectSelector from "../modules/ProjectSelector";
import SiteNavbar from "../modules/Sitenavbar";
import Taskbar from "../modules/Taskbar";
import Window from "../modules/Window";

function Homepage() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <AppShell
      layout="default"
      header={{ height: { base: 60, lg: 0 } }}
      footer={{ height: { base: 60, lg: 40 } }}
      navbar={{
        width: "15vw",
        breakpoint: "lg",
        collapsed: { mobile: !opened },
      }}
      withBorder={false}
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

      <SiteNavbar />

      <AppShell.Main className="main">
        {/* Page padding lives here. base = mobile, lg = desktop. */}
        <Box
          pl={{ base: 20, lg: 20 }}
          pr={{ base: 0, lg: "12%" }}
          pt={{ base: 120, lg: 50 }}
        >
          <Window
            title="Projects"
            width="min(600px, 100%)"
            height={450}
            bg="var(--main-blue-color)"
          >
            <ProjectSelector />
          </Window>
        </Box>
      </AppShell.Main>

      <AppShell.Aside visibleFrom="lg" className="aside">
        <Window
          title="tattoo.gif"
          width="min(600px, 95%)"
          height="100%"
          bg="var(--main-white-color)"
          align="center"
        >
          <Image
            src={images.tattoovertical}
            alt=""
            w="var(--ui-aside-art-w)"
            maw="100%"
            mah="100%"
            pr="var(--ui-aside-art-pad)"
          />
        </Window>
      </AppShell.Aside>

      <AppShell.Footer className="footer">
        <Box h="100%">
          <Taskbar />
        </Box>
      </AppShell.Footer>
    </AppShell>
  );
}

export default Homepage;
