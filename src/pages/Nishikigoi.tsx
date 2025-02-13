import "./Nishikigoi.css";
import { AppShell, AppShellFooter,  AppShellMain,  NavLink, Title, Group, Text, Image, Space} from "@mantine/core";
import {images} from '../helpers/images.ts'
import "@mantine/core/styles.css";
import Nishikigoi1Video from "../modules/Nishikigoi1Video.tsx";
import Nishikigoi2Video from "../modules/Nishikigoi2Video.tsx";


function Nishikigoi() {
  return (
    <AppShell className="subpage"
      header={{height:0}}
      navbar={{width:0, breakpoint:'lg', collapsed: {desktop:true, mobile:true}}}
    >
      <AppShellMain className="subpage">
        <Group justify="space-between">
          <Title className="subpagetext title">
            Nishikigoi
          </Title>
          <Text className='textdescription subpagetext'>
            Back in the summer of 2014, my best friend would introduce me to the art of cardistry, which can be best described as doing skateboard tricks, but with playing cards. Collecting various decks ourselves, we would eventually become interested at the idea of making our own deck. Thus, Nishikigoi would eventually be formed.
          </Text>
        </Group>
        <Space h="xl"/>
        <Group
          justify="center"
          gap={"xl"}
        >
        <Image src={images.nishikigoilogo} h={"auto"} w="90vw"/>
        <Nishikigoi1Video/>
        <Nishikigoi2Video/>
        <Image src={images.nishikigoibox} h={"auto"} w="90vw"/>
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

export default Nishikigoi;