import "./About.css";
import { AppShell, AppShellFooter,  AppShellMain,  NavLink, Title, Group, Text, Image, Space} from "@mantine/core";
import {images} from '../helpers/images.ts'

import "@mantine/core/styles.css";

function About() {
  return (
    <AppShell className="subpage"
      header={{height:0}}
      navbar={{width:0, breakpoint:'lg', collapsed: {desktop:true, mobile:true}}}
    >
      <AppShellMain className="subpage">
        <Group justify="space-between">
          <Title className="subpagetext title">
            About me!
          </Title>
          <Text className='textdescription subpagetext'>
            My name is Sebastian Francis Garcia Cruz. I am a Filipino-American Computer Science graduate born and raised in the Bay Area. My projects have a strong focus on video game development, front end, UX/UI, and graphic design. Outside of programming, I enjoy partaking in various passions, including: street photography, building mechanical keyboards, and sewing (just recently)! 
          </Text>
        </Group>
        <Space h="xl"/>
        <Group
          justify="center"
          gap={"xl"}
        >
        <Image src={images.about1} h={"auto"} w="30vw"/>
        <Image src={images.about3} h={"auto"} w="30vw"/>
        <Image src={images.about2} h={"auto"} w="30vw"/>
        </Group>
        <Space h="xl"/>
        <Space h="xl"/>
      </AppShellMain>


      <AppShellFooter className="foot subpagetext">
        <NavLink 
          className="homelink"
          href="#welcomehome"
          label="Home sweet home!"
          styles={() => ({
            root: {
              display: 'inline-block',
              width: 'auto',
              whiteSpace: 'nowrap',
            },
          })}
        />
      </AppShellFooter>
    </AppShell>
  );
}

export default About;
