import "./GraphicDesign.css";
import { AppShell, AppShellFooter,  AppShellMain,  NavLink, Title, Group, Text, Image, Space} from "@mantine/core";
import {images} from '../helpers/images.ts'
import "@mantine/core/styles.css";


function GraphicDesign() {
  return (
    <AppShell className="subpage"
      header={{height:0}}
      navbar={{width:0, breakpoint:'lg', collapsed: {desktop:true, mobile:true}}}
    >
      <AppShellMain className="subpage">
        <Group justify="space-between">
          <Title className="subpagetext title">
            Graphic Design
          </Title>
          <Text className='textdescription subpagetext'>
            My very first experience doing graphic design was during my early teens when I wanted to make a cover photo for a song mashup that I would upload to Soundcloud. From there I would begin to design shirts logos for my schools and friends, and several designs for myself. 
          </Text>
        </Group>
        <Space h="xl"/>
        <Group
          justify="center"
          gap={"xl"}
        >
        <Image src={images.flowerdesign} h={"auto"} w="95vw"/>

        <Image src={images.nsushirt} h={"auto"} w="95vw"/>
        <Image src={images.nsufront} h={"auto"} w="45vw"/>
        <Image src={images.nsuback} h={"auto"} w="45vw"/>

        <Image src={images.calpolyshirt} h={"auto"} w="95vw"/>
        <Image src={images.calpolyhoodfront} h={"auto"} w="45vw"/>
        <Image src={images.calpolyhoodback} h={"auto"} w="45vw"/>
        <Image src={images.calpolyfront} h={"auto"} w="45vw"/>
        <Image src={images.calpolyback} h={"auto"} w="45vw"/>

        <Image src={images.serrashirt} h={"auto"} w="95vw"/>
        <Image src={images.serrafront} h={"auto"} w="45vw"/>
        <Image src={images.serraback} h={"auto"} w="45vw"/>

        <Image src={images.symposiumshirt} h={"auto"} w="95vw"/>
        <Image src={images.symposiumfront} h={"auto"} w="45vw"/>
        <Image src={images.symposiumback} h={"auto"} w="45vw"/>
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

export default GraphicDesign;