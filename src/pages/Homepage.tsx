import { 
    MantineProvider, 
    AppShell, 
    Burger, 
    Image, 
    Group, 
    Title,
    Space,
} from "@mantine/core";

import { useDisclosure} from "@mantine/hooks";

import "./Homepage.css";
import { theme } from "../theme";


import nameLogo from "../assets/streamText.gif";
import tattooGif from "../assets/Personal-Website-Gif.gif"
import tattooGifSideways from "../assets/Personal-Website-Gif-Sideways.gif"

import NavLinkItem from "../modules/NavLinkItem";
import ProjectSelector from "../modules/ProjectSelector";

function Homepage() {
    const [opened, { toggle }] = useDisclosure(false);

    const navbarThemeOverride = {
        components: {
            AppShell: {
                defaultProps: {
                  navbar: {
                    breakpoint: "lg",
                    collapsed: {
                      mobile: !opened,
                    },
                  },
                },
            },
        },
    };

    return (
        <MantineProvider
            theme={{
                ...theme,
                ...navbarThemeOverride,
            }}
        >
            <AppShell layout='alt'>
                <AppShell.Header className="header">
                    <Group style={{ padding: "20px" }}>
                        <Image src={nameLogo} h={27} w="auto" hiddenFrom="lg"/>
                        <div
                            style={{
                            alignItems: "flex-end",
                            marginLeft: "auto",
                            paddingRight: "15px",
                            }}
                        >
                            <Burger
                            //opened={opened}
                            onClick={toggle}
                            hiddenFrom="lg"
                            size="lg"
                            style={{ padding: "10px",}}
                            />
                        </div>
                    </Group>
                </AppShell.Header>

                <AppShell.Navbar className="navBar" style={{ paddingLeft: "20px"}}>
                    <div
                        style={{
                        alignItems: "flex-end",
                        marginLeft: "auto",
                        paddingTop: "20px",
                        }}
                    >
                        <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="lg"
                        size="xl"
                        style={{paddingRight: "67px"}}
                        />
                    </div>
                    <Space h="sm" visibleFrom="lg"/>
                    <Image src={nameLogo} style={{maxWidth: '50%', transform:'translate(0%, 0%)'}}/>
                    <Space h="sm" />
                    <Title className="nameTitle" style={{fontSize: "3.5rem"}}> Sebastian Cruz</Title>
                    <Space h="sm" />

                    <NavLinkItem to="about" label="About" />
                    <NavLinkItem to="resume.pdf" label="Resume/CV" />
                    <NavLinkItem to="https://www.linkedin.com/in/cruzseabass/" label="LinkedIn" isExternal/>
                    <NavLinkItem to="https://github.com/seevass" label="GitHub" isExternal />
                    <NavLinkItem to="mailto:cruzseabass@gmail.com" label="Contact" />
                </AppShell.Navbar>

                <AppShell.Main className='main'>
                    <ProjectSelector />
                </AppShell.Main>

                    <AppShell.Aside
                    visibleFrom="lg" className="aside">
                        <Image src={tattooGif} w="300" 
                        style={{maxWidth: '100%', maxHeight: '100%', transform: '', paddingRight:'20px'}} />
                    </AppShell.Aside>

                    <AppShell.Footer
                    hiddenFrom="lg" className="footer"> 
                        <Image src={tattooGifSideways} h={300} w="auto"
                        style={{maxWidth: '100%', maxHeight: '100%', transform: ''}} />
                    </AppShell.Footer>
            </AppShell>
        </MantineProvider>
    );
}

export default Homepage;
