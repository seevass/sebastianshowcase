import "./Quickcast.css";
import { AppShell, AppShellFooter,  AppShellMain,  NavLink, Title, Group, Text, Space} from "@mantine/core";
import "@mantine/core/styles.css";
import QuickcastVideo from "../modules/QuickcastVideo.tsx";


function Quickcast() {
  return (
    <AppShell className="subpage"
      header={{height:0}}
      navbar={{width:0, breakpoint:'lg', collapsed: {desktop:true, mobile:true}}}
    >
      <AppShellMain className="subpage">
        <Group justify="space-between">
          <Title className="subpagetext title">
            Quickcast
          </Title>
          <Text className='textdescription subpagetext'>
            Taking heavy inspiration from the magic of the Harry Potter series and the rise of a new genre of roguelikes, Quickcast is a shoot 'em up roguelite where you prepare you magic by drawing them! Survive as long as possible by trying to combine different spells into something new. As the sole developer of this game, I was responsible for every aspect of it.
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
            href="https://github.com/seevass/Quickcast"
            target="_blank"
            rel="noopener noreferrer"
            label="To Github repository"
            style={{textAlign:'center'}}
          />
          <QuickcastVideo/>
          <NavLink 
            className="externallink"
            component="a"
            href="/sebastianshowcase/Quickcast Technical Design Document.pdf"
            target="_blank"
            rel="noopener noreferrer"
            label="Technical Design Document"
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

export default Quickcast;