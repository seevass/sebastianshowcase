import { 
    MantineProvider, 
    AppShell, 
    Burger, 
    Image, 
    Group, 
    Title,
    Space,
    Stack,
    Flex,
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
    const navbarMobile = isMobile ? "translate(0%, -2%)" : "translate(0%,0%)";
    const navbarPadding = isMobile ? "40px" : "40px";
    const navbarNameSize = isMobile ? "clamp(3rem, 8vw, 5rem)" : "clamp(3rem, 3vw, 5rem)";
    const navbarItemSpacing = isMobile ? "2vh" : "3vh";
    const asideWidth = '25vw';

    const navbarThemeOverride = {
        components: {
            AppShell: {
                defaultProps: {
                  navbar: {
                    width: '22vw',
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
                        <Image 
                            src={images.nametitle} 
                            h={'clamp(2.5rem, 5vw, 5rem)'} 
                            w="auto" 
                            hiddenFrom="lg" 
                            style={{transform:'translate(1rem, 0%)'}}/>
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
                                size="70px"
                                style={{ padding: "10px",}}
                            />
                        </div>
                    </Group>
                </AppShell.Header>

                <AppShell.Navbar className="navBar" style={{ paddingLeft: navbarPadding}}>
                    <Flex 
                        justify='flex-end' 
                        style={{
                            paddingRight: "30px"
                        }}>
                        <div
                            style={{
                                alignItems: "flex-end",
                                paddingTop: "20px",
                                zIndex: 2,
                            }}
                        >
                            <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="lg"
                            size="70px"
                            style={{
                                paddingRight: "0px"
                            }}
                            />
                        </div>
                    </Flex>
                    <Space h="sm" visibleFrom="lg"/>
                    <Image src={images.nametitle} style={{maxWidth: '70%', transform:'translate(3%, 20%)'}} visibleFrom="lg"/>
                    <Space h="2vh" visibleFrom="lg"/>
                    <div style={{transform: navbarMobile}}>
                        <Title className="nameTitle non-selectable" style={{fontSize: navbarNameSize}}> Sebastian Cruz</Title>
                        <Space h="2vh" />
                        <Stack 
                            gap={navbarItemSpacing}
                            style={{height: '80vh', overflow: 'auto'}}>
                            <NavLinkItem to="aboutme" label="About" />
                            <NavLinkItem to="resume.pdf" label="Resume/CV" />
                            <NavLinkItem to="https://www.linkedin.com/in/cruzseabass/" label="LinkedIn" isExternal/>
                            <NavLinkItem to="https://github.com/seevass" label="GitHub" isExternal />
                            <NavLinkItem to="mailto:cruzseabass@gmail.com" label="Contact" />
                        </Stack>
                    </div>
                </AppShell.Navbar>

                <AppShell.Main
                    className='main'
                    style={{
                    }}
                >
                    <ProjectSelector />
                </AppShell.Main>

                    <AppShell.Aside
                    visibleFrom="lg" className="aside"
                    style={{
                            pointerEvents: 'none',
                        }}
                    >
                        <Image src={images.tattoovertical} w={asideWidth}
                        style={{maxWidth: '100%', maxHeight: '100%', paddingRight:'5vw'}} />
                    </AppShell.Aside>

                    <AppShell.Footer
                        hiddenFrom="lg"
                        className="footer"
                        style={{
                            width: '100%',
                            pointerEvents: 'none',
                        }}
                    > 
                        <Image
                            src={images.tattoohorizontal}
                            h={300}
                            w="auto"
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                        />
                    </AppShell.Footer>
            </AppShell>
        </MantineProvider>
    );
}

export default Homepage;
