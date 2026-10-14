import { AppShell, Box, Burger, Group, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import "./Homepage.css";
import { images } from "../helpers/images";

import ProjectSelector from "../modules/ProjectSelector";
import SiteNavbar from "../modules/Sitenavbar";
import Taskbar from "../modules/Taskbar";
import Window from "../modules/Window";
import { VideoProvider } from "../modules/VideoContext";
import TvPlayer from "../modules/TvPlayer";
import ActivityList from "../modules/ActivityList";

function Homepage() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <VideoProvider>
      <AppShell
        layout="default"
        header={{ height: { base: 60, lg: 0 } }}
        footer={{ height: { base: 60, lg: 40 } }}
        navbar={{
          width: 300,
          breakpoint: "lg",
          collapsed: { mobile: !opened },
        }}
        withBorder={false}
        aside={{ width: 400, breakpoint: "lg", collapsed: { mobile: true } }}
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
            pr={{ base: 0, lg: 0 }}
            pt={{ base: 120, lg: 10 }}
          >
            <Window title="tv.exe" width="min(600px, 100%)">
              <TvPlayer />
            </Window>
            <Window title="projects" width="100%">
              <ActivityList />
            </Window>
          </Box>
        </AppShell.Main>

        <AppShell.Aside visibleFrom="lg" className="aside">
          <Window
            title="tattoo.gif"
            width="100%"
            height="100%"
            scroll={false}
            bg="var(--main-white-color)"
          >
            <Image
              src={images.tattoovertical}
              alt=""
              w={350}
              h="auto"
              maw="none"
            />
          </Window>
        </AppShell.Aside>

        <AppShell.Footer className="footer">
          <Box h="100%">
            <Taskbar />
          </Box>
        </AppShell.Footer>
      </AppShell>
    </VideoProvider>
  );
}

export default Homepage;
