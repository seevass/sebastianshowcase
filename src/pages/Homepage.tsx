import { 
    MantineProvider, 
    AppShell, 
    Burger, 
    Image, 
    Group, 
    Title,
    Space,
    Stack,
} from "@mantine/core";

import { useDisclosure, useMediaQuery} from "@mantine/hooks";


import "./Homepage.css";
import { theme } from "../theme";
import { images } from '../helpers/images.ts';

import NavLinkItem from "../modules/NavLinkItem";
import ProjectSelector from "../modules/ProjectSelector";

function Homepage() {
    const [opened, { toggle }] = useDisclosure(false);
    const isMobile = useMediaQuery(`(max-width: ${theme?.breakpoints?.lg})`);
    const navbarMobile = isMobile ? "translate(0%, -5%)" : "translate(0%,0%)";

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
                        <Image src={images.nametitle} h={27} w="auto" hiddenFrom="lg" style={{transform:'translate(10%, 0%)'}}/>
                        <div
                            style={{
                            alignItems: "flex-end",
                            marginLeft: "auto",
                            paddingRight: "15px",
                            }}
                        >
                            <Burger
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
                        zIndex: 2,
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
                    <Image src={images.nametitle} style={{maxWidth: '70%', transform:'translate(8%, 0%)'}} visibleFrom="lg"/>
                    <Space h="sm" />
                    <div style={{transform: navbarMobile}}>
                        <Title className="nameTitle non-selectable" style={{fontSize: "3.5rem"}}> Sebastian Cruz</Title>
                        <Space h="sm" />
                        <Stack 
                            gap='xl'
                            style={{height: '65vh', overflow: 'auto'}}>
                            <NavLinkItem to="aboutme" label="About" />
                            <NavLinkItem to="resume.pdf" label="Resume/CV" />
                            <NavLinkItem to="https://www.linkedin.com/in/cruzseabass/" label="LinkedIn" isExternal/>
                            <NavLinkItem to="https://github.com/seevass" label="GitHub" isExternal />
                            <NavLinkItem to="mailto:cruzseabass@gmail.com" label="Contact" />
                        </Stack>
                    </div>
                </AppShell.Navbar>

                <AppShell.Main className='main'>
                    <ProjectSelector />
                </AppShell.Main>

                    <AppShell.Aside
                    visibleFrom="lg" className="aside">
                        <Image src={images.tattoovertical} w="300" 
                        style={{maxWidth: '100%', maxHeight: '100%', transform: '', paddingRight:'20px'}} />
                    </AppShell.Aside>

                    <AppShell.Footer
                    hiddenFrom="lg" className="footer"> 
                        <Image src={images.tattoohorizontal} h={300} w="auto"
                        style={{maxWidth: '100%', maxHeight: '100%', transform: ''}} />
                    </AppShell.Footer>
            </AppShell>
        </MantineProvider>
    );
}

export default Homepage;
