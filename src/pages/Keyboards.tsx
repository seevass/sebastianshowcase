import "./Keyboards.css";
import { AppShell, AppShellFooter,  AppShellMain,  NavLink, Title, Group, Text, Image, Space} from "@mantine/core";
import {images} from '../helpers/images.ts'
import "@mantine/core/styles.css";
import Keyboard1Video from "../modules/Keyboard1Video.tsx";
import Keyboard2Video from "../modules/Keyboard2Video.tsx";


function Keyboards() {
  return (
    <AppShell className="subpage"
      header={{height:0}}
      navbar={{width:0, breakpoint:'lg', collapsed: {desktop:true, mobile:true}}}
    >
      <AppShellMain className="subpage">
        <Group justify="space-between">
          <Title className="subpagetext title">
            Keyboards
          </Title>
          <Text className='textdescription subpagetext'>
            Being an avid PC user and video game player, I think it was only natural that I would eventually look into building a custom mechanical keyboard for myself. What I did not expect was how invested I would get into the hobby; learning about the differences between cases and switches, and even learning and trying out the various DIY mods the community would have to offer. A couple years down the line, I saw myself collecting various boards and building a keyboard for several of my friends!
          </Text>
        </Group>
        <Space h="xl"/>
        <Group
          justify="center"
          gap={"xl"}
        >
        <Image src={images.keyboard1} h={"auto"} w="30vw"/>
        <Image src={images.keyboard2} h={"auto"} w="30vw"/>
        <Image src={images.keyboard3} h={"auto"} w="30vw"/>
        <Keyboard1Video/>
        <Keyboard2Video/>
        
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

export default Keyboards;