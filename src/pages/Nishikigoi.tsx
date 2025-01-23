import "./Nishikigoi.css";
import { AppShell, AppShellFooter,  AppShellMain,  NavLink, Title, Group, Text, Image, Space} from "@mantine/core";
import {images} from '../helpers/images.ts'
import "@mantine/core/styles.css";


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
          style={{justifyContent: "flex-start"}}
        />
      </AppShellFooter>
    </AppShell>
  );
}

export default Nishikigoi;