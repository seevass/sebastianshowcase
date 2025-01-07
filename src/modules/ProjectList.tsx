import React from 'react';
import './ProjectList.css';
import { Text, NavLink } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { theme } from '../theme'; 

type ProjectListTuple = [href: string, label: string, image: string];

interface ProjectListProps {
    title?: string | undefined;
    links: ProjectListTuple[];
    setImageSrc: (imageSrc: string) => void;
    style?: React.CSSProperties;
}
const BASE_PATH = '/sebastian-showcase';

const ProjectList: React.FC<ProjectListProps> = ({ title, links, setImageSrc, style }) => {
    const isMobile = useMediaQuery(`(max-width: ${theme?.breakpoints?.lg})`);
    const navlink_button_breakpoint = isMobile ? '2rem' : '2rem';
    const link_width_breakpoint = isMobile ? '300px' : 'auto';
    
    const adjustedHref = (href: string) => `${BASE_PATH}#${href}`;

    return (
        <div
            style={{
                // maxHeight,
                ...style,
            }}
        >
            <Text 
                className= 'projectLinkTitle'
            >
                {title}
            </Text>
                {links.map(([href, label, image], _index) => (
                    <NavLink
                        key={href}
                        className="projectLink"
                        styles={(_theme) => ({
                            root: {
                                width: link_width_breakpoint,
                            },
                            label: {
                                fontSize: navlink_button_breakpoint,
                            },
                        })}
                        href={adjustedHref(href)}
                        label={label}
                        onMouseEnter={() => setImageSrc(image)}
                    />
                ))}
        </div>
    );
};

export default ProjectList;
