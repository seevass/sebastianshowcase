import "./Photography.css";
import { AppShell, AppShellFooter,  AppShellMain,  NavLink, Title, Group, Text, Space} from "@mantine/core";
import "@mantine/core/styles.css";
import PhotographyImageLoader from "../modules/PhotographyImageLoader.tsx";


function Photography() {
  return (
    <AppShell className="subpage"
      header={{height:0}}
      navbar={{width:0, breakpoint:'lg', collapsed: {desktop:true, mobile:true}}}
    >
      <AppShellMain className="subpage">
        <Group justify="space-between">
          <Title className="subpagetext title">
            Photography
          </Title>
          <Text className='textdescription subpagetext'>
            Although my interests in photography in the past would originate from take pictures for my sister, I would eventually develop a strong passion for street photography watching the Walkie Talkie series by fellow Filipino-American Paulie B. From there I would purchase my first film camera and eventually a digital rangefinder that would always be with me, no matter how far I traveled.
          </Text>
        </Group>
        <Space h="xl"/>
        <Group
          justify="center"
          gap={"xl"}
        >

        </Group>
        <PhotographyImageLoader/>
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

export default Photography;