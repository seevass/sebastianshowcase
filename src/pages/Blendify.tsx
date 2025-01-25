import "./Blendify.css";
import { AppShell, AppShellFooter,  AppShellMain,  NavLink, Title, Group, Text, Image, Space} from "@mantine/core";
import {images} from '../helpers/images.ts'
import "@mantine/core/styles.css";
import Figma from '../modules/Figma.tsx'
import BlendifyVideo from "../modules/BlendifyVideo.tsx";

function Blendify() {
  return (
    <AppShell className="subpage"
      header={{height:0}}
      navbar={{width:0, breakpoint:'lg', collapsed: {desktop:true, mobile:true}}}
    >
      <AppShellMain className="subpage">
        <Group justify="space-between">
          <Title className="subpagetext title">
            Blendify
          </Title>
          <Text className='textdescription subpagetext'>
            Blendify is a web app that aimed to expedite the process for DJs searching for compatible songs to add to their mix by recommending songs that match BPM of a given song. Within the team, I acted as the project manager and one of the front-end developers. I was also responsible for creating the wireframes and UI layouts.
          </Text>
        </Group>
        <Space h="xl"/>
        
        <Group
          justify="center"
          gap={'xl'}
        >
          <Image src={images.blendifyposter} h={"auto"} w="50vw" className="blendifyposter"/>
          <Image src={images.blendifypurple} h={"54vh"} w="auto"/>
          <BlendifyVideo />
          <Figma />
        </Group>
          
          
        <Space h="xl"/>
        <Space h="xl"/>
      </AppShellMain>


      <AppShellFooter className="foot subpagetext">
        <NavLink 
          className="homelink"
          href="#welcomehome"
          label="Home sweet home!"
          style={{justifyContent: "flex-start"}}
        />
      </AppShellFooter>
    </AppShell>
  );
}

export default Blendify;