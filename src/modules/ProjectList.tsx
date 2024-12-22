import React from 'react';
import './ProjectList.css';
import { Text, NavLink } from '@mantine/core';
// import { getRandomHoverColorNoYellow } from '../helpers/colorUtils';

type ProjectListTuple = [href: string, label: string, image: string];

interface ProjectListProps {
    title: string | undefined;
    links: ProjectListTuple[];
    setImageSrc: (imageSrc: string) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ title, links, setImageSrc }) => {

    return (
        <div>
            <Text className='projectLinkTitle'>{title}</Text>
            {links.map(([href, label, image], _index) => (
                <NavLink
                    key={href}
                    className='projectLink'
                    style={{ color: "var(--main-blue-color)" }}
                    href={href}
                    label={label}
                    onMouseEnter={() => setImageSrc(image)}
                />
            ))}
        </div>
    );
};

export default ProjectList;
