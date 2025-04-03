import "./SussyScript.css";
import { AppShell, AppShellFooter,  AppShellMain,  NavLink, Title, Group, Text, Image, Space} from "@mantine/core";
import {images} from '../helpers/images.ts'
import "@mantine/core/styles.css";
import Figma from '../modules/Figma.tsx'
import BlendifyVideo from "../modules/BlendifyVideo.tsx";

function SussyScript() {
  return (
    <AppShell className="subpage"
      header={{height:0}}
      navbar={{width:0, breakpoint:'lg', collapsed: {desktop:true, mobile:true}}}
    >
      <AppShellMain className="subpage">
        <Group justify="space-between">
          <Title className="subpagetext title">
            SussyScript
          </Title>
          <Text className='textdescription subpagetext'>
            SussyScript is a static and weakly typed coding language inspired by the popular party game Among Us! SussyScript takes influence from the coding conventions of JavaScript and Python, aimed to introduce coding to crewmates (and also beginner coders familiar with Among Us). Being a language targeted for beginners, SussyScript allows users to learn the basic functions of coding, such as looping and expression creation, with terms and keywords that allude to mechanics in Among Us!
          </Text>
        </Group>
        <Space h="xl"/>
        
        <Group
          justify="center"
          gap={'xl'}
        >
          <NavLink 
            className="externallink"
            component="a"
            href="https://github.com/connorsavage/SussyScript"
            target="_blank"
            rel="noopener noreferrer"
            label="To Github repository"
            style={{textAlign:'center'}}
          />
          <Image src={images.blendifyposter} h={"auto"} w="95vw" className="Blendifyposter"/>
          <Image src={images.blendifypurple} h={'auto'} w="40vw"/>
          <Image src={images.blendifyblack} h={'auto'} w="40vw"/>
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

export default SussyScript;