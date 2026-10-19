import { AppShell, Box, Burger, Group, Image, Space } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import "./Homepage.css";
import { images } from "../helpers/images";

import Taskbar from "../modules/Taskbar";
import Window from "../modules/Window";
import { VideoProvider } from "../modules/VideoContext";
import TvPlayer from "../modules/TvPlayer";
import ActivityList from "../modules/ActivityList";
import HomeAbout from "../modules/HomeAbout";

import { useIsDesktop } from "../theme";

function Homepage() {
  const [opened, { toggle }] = useDisclosure(false);
  const isDesktop = useIsDesktop();

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
        />

        <AppShell.Navbar className="navBar" p="sm">
          <Window title="me.exe">
            <HomeAbout />
          </Window>

          {isDesktop && (
            <>
              <Space h="sm" />
              <Window
                title="activities"
                width="100%"
                bg="var(--main-yellow-color)"
              >
                <ActivityList />
              </Window>
            </>
          )}
        </AppShell.Navbar>

        <AppShell.Main className="main">
          <Box p="sm">
            <Window title="tv.exe" width="min(600px, 100%)">
              <TvPlayer />
            </Window>

            <Space h="sm" />

            <Window title="projects" width="100%">
              <ActivityList />
            </Window>
          </Box>
        </AppShell.Main>

        <AppShell.Aside visibleFrom="lg" className="aside" p="sm">
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
