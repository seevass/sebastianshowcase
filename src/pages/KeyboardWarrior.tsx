import "./KeyboardWarrior.css";
import { AppShell, AppShellFooter,  AppShellMain,  NavLink, Title, Group, Text, Image, Space} from "@mantine/core";
import {images} from '../helpers/images.ts'
import "@mantine/core/styles.css";
import KeyboardWarriorVideo from "../modules/KeyboardWarriorVideo.tsx";


function KeyboardWarrior() {
  return (
    <AppShell className="subpage"
      header={{height:0}}
      navbar={{width:0, breakpoint:'lg', collapsed: {desktop:true, mobile:true}}}
    >
      <AppShellMain className="subpage">
        <Group justify="space-between">
          <Title className="subpagetext title">
            Keyboard Warrior
          </Title>
          <Text className='textdescription subpagetext'>
            Being invested into the keyboard hobby, I would often find myself taking a typing test whenever I got the chance. Additionally, one of my favorite genres of games to play were roguelikes. As such, Keyboard Warrior is an amalgimation of the two ideas that aims to help players improve their typing speed, accuracy, and reaction time. I am the sole developer of this project and was responsible for every aspect of its creation!
          </Text>
        </Group>
        <Space h="xl"/>
        <Group
          justify="center"
          gap={"xl"}
        >
          <NavLink 
            className="externallink"
            component="a"
            href="https://github.com/seevass/KeyboardWarrior"
            target="_blank"
            rel="noopener noreferrer"
            label="To Github repository"
            style={{textAlign:'center'}}
          />
          <Image src={images.keyboardwarriorposter} h={"auto"} w="95vw"/>
          <KeyboardWarriorVideo/>
          <NavLink 
            className="externallink"
            component="a"
            href="/sebastianshowcase/Keyboard Warrior Project Document.pdf"
            target="_blank"
            rel="noopener noreferrer"
            label="Project Document"
            style={{textAlign:'center'}}
          />
          <NavLink 
            className="externallink"
            component="a"
            href="/sebastianshowcase/Keyboard Warrior Software Development Plan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            label="Software Development"
            style={{textAlign:'center'}}
          />
          <NavLink 
            className="externallink"
            component="a"
            href="/sebastianshowcase/Keyboard Warrior Software Requirements Specification.pdf"
            target="_blank"
            rel="noopener noreferrer"
            label="Software Requirements Specification"
            style={{textAlign:'center'}}
          />
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

export default KeyboardWarrior;