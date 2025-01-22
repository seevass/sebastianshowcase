import { AppShell, AppShellFooter,  AppShellMain,  NavLink, Title, Group, Text} from "@mantine/core";
import "./About.css";

import "@mantine/core/styles.css";

function About() {
  return (
    <AppShell className="subpage"
      header={{height:0}}
      navbar={{width:0, breakpoint:'lg', collapsed: {desktop:true, mobile:true}}}
    >
      <AppShellMain className="subpage">
        <Group justify="space-between">
          <Title>
            About me!
          </Title>
          <Text className='textdescription'>
            My name is Sebastian Francis Garcia Cruz. I am a Filipino-American Computer Science graduate born and raised in the Bay Area. My projects have a strong focus on video game development, front end, UX/UI, and graphic design. Outside of programming, I enjoy partaking in various passions, including: street photography, building mechanical keyboards, and sewing (just recently)! 
          </Text>
        </Group>
      </AppShellMain>


      <AppShellFooter className="subpage">
        <NavLink 
          className="homelink"
          href="#welcomehome"
          label="Home sweet home"
          style={{justifyContent: "flex-start"}}
        />
      </AppShellFooter>
    </AppShell>
  );
}

export default About;
